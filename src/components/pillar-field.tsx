"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const TWEAKS = {
  pylonRadius: 0.13,
  maxHeight: 6.5,
  noiseScale: 0.14,
  timeSpeed: 0.22,
  bloom: 2,
  fieldBound: 60,
  maxPillars: 60000,
};

const grad3: ReadonlyArray<readonly [number, number, number]> = [
  [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
  [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
  [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1],
];

function buildPerm(): Uint8Array {
  const perm = new Uint8Array(512);
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  let seed = 12345;
  for (let i = 255; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = Math.floor((seed / 233280) * (i + 1));
    const tmp = p[i] as number;
    p[i] = p[j] as number;
    p[j] = tmp;
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255] as number;
  return perm;
}

function makeSimplex() {
  const perm = buildPerm();
  return function simplex01(x: number, y: number, z: number): number {
    const F3 = 1 / 3, G3 = 1 / 6;
    const s = (x + y + z) * F3;
    const i = Math.floor(x + s), j = Math.floor(y + s), k = Math.floor(z + s);
    const t = (i + j + k) * G3;
    const X0 = i - t, Y0 = j - t, Z0 = k - t;
    const x0 = x - X0, y0 = y - Y0, z0 = z - Z0;
    let i1: number, j1: number, k1: number, i2: number, j2: number, k2: number;
    if (x0 >= y0) {
      if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
      else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
      else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
    } else {
      if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
      else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
      else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
    }
    const x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3;
    const x2 = x0 - i2 + 2 * G3, y2 = y0 - j2 + 2 * G3, z2 = z0 - k2 + 2 * G3;
    const x3 = x0 - 1 + 3 * G3, y3 = y0 - 1 + 3 * G3, z3 = z0 - 1 + 3 * G3;
    const ii = i & 255, jj = j & 255, kk = k & 255;
    const gi0 = ((perm[ii + (perm[jj + (perm[kk] as number)] as number)] as number) % 12);
    const gi1 = ((perm[ii + i1 + (perm[jj + j1 + (perm[kk + k1] as number)] as number)] as number) % 12);
    const gi2 = ((perm[ii + i2 + (perm[jj + j2 + (perm[kk + k2] as number)] as number)] as number) % 12);
    const gi3 = ((perm[ii + 1 + (perm[jj + 1 + (perm[kk + 1] as number)] as number)] as number) % 12);
    const corner = (g: readonly [number, number, number], cx: number, cy: number, cz: number): number => {
      let tt = 0.6 - cx * cx - cy * cy - cz * cz;
      if (tt < 0) return 0;
      tt *= tt;
      return tt * tt * (g[0] * cx + g[1] * cy + g[2] * cz);
    };
    const n0 = corner(grad3[gi0]!, x0, y0, z0);
    const n1 = corner(grad3[gi1]!, x1, y1, z1);
    const n2 = corner(grad3[gi2]!, x2, y2, z2);
    const n3 = corner(grad3[gi3]!, x3, y3, z3);
    const v = 32 * (n0 + n1 + n2 + n3);
    return Math.max(0, Math.min(1, v * 0.5 + 0.5));
  };
}

const tmpCol = new THREE.Color();
function palette(t: number): THREE.Color {
  const tau = Math.PI * 2;
  const r = 0.45 + 0.55 * Math.cos(tau * (1.0 * t + 0.55));
  const g = 0.25 + 0.35 * Math.cos(tau * (1.0 * t + 0.25));
  const b = 0.65 + 0.35 * Math.cos(tau * (1.0 * t + 0.0));
  return tmpCol.setRGB(Math.max(0, r), Math.max(0, g), Math.max(0, b));
}

function Pillars() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dragRef = useRef({ isDragging: false, dragX: 0, dragY: 0, velX: 0, velY: 0 });
  const offsetRef = useRef({ x: 0, y: 0, z: 0 });
  const simplex01 = useMemo(() => makeSimplex(), []);
  const { gl } = useThree();

  const { positions, count } = useMemo(() => {
    const maxD = TWEAKS.fieldBound;
    const minSpacing = (2 * maxD) / Math.sqrt(TWEAKS.maxPillars);
    const spacing = Math.max(TWEAKS.pylonRadius * 2.0, minSpacing);
    const pos: number[] = [];
    for (let x = -maxD; x <= maxD; x += spacing) {
      for (let z = -maxD; z <= maxD; z += spacing) {
        pos.push(x, z);
      }
    }
    return { positions: new Float32Array(pos), count: pos.length / 2 };
  }, []);

  const geometry = useMemo(() => {
    const g = new THREE.CylinderGeometry(TWEAKS.pylonRadius, TWEAKS.pylonRadius, 1, 18, 1);
    g.translate(0, 0.5, 0);
    return g;
  }, []);

  const material = useMemo(() => {
    const m = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.9,
      metalness: 0.05,
      emissive: 0x000000,
      emissiveIntensity: 0.8,
    });
    m.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader
        .replace(
          "#include <common>",
          "#include <common>\nvarying float vLocalY;\nvarying float vWorldY;",
        )
        .replace(
          "#include <begin_vertex>",
          "#include <begin_vertex>\nvLocalY = position.y;\n{\n  vec4 _wp = modelMatrix * instanceMatrix * vec4(position, 1.0);\n  vWorldY = _wp.y;\n}",
        );
      sh.fragmentShader = sh.fragmentShader
        .replace(
          "#include <common>",
          "#include <common>\nvarying float vLocalY;\nvarying float vWorldY;",
        )
        .replace(
          "#include <emissivemap_fragment>",
          `#include <emissivemap_fragment>\n  float peakGlow = smoothstep(0.35, 0.9, vWorldY / ${TWEAKS.maxHeight.toFixed(2)});\n  float tipGlow = smoothstep(0.75, 1.0, vLocalY);\n  totalEmissiveRadiance += vColor.rgb * ${(1.8 * TWEAKS.bloom).toFixed(2)} * peakGlow * tipGlow;`,
        )
        .replace(
          "#include <opaque_fragment>",
          `  float heightMask = smoothstep(0.0, 0.75, vWorldY / ${TWEAKS.maxHeight.toFixed(2)});\n  float dim = 0.07 + 0.93*heightMask;\n  outgoingLight *= dim;\n  #include <opaque_fragment>`,
        );
    };
    return m;
  }, []);

  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 0.85;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  }, [gl]);

  useEffect(() => {
    const canvas = gl.domElement;
    const onDown = (e: PointerEvent) => {
      const d = dragRef.current;
      d.isDragging = true;
      d.velX = 0;
      d.velY = 0;
      d.dragX = e.clientX;
      d.dragY = e.clientY;
    };
    const onMove = (e: PointerEvent) => {
      const d = dragRef.current;
      if (!d.isDragging) return;
      const dx = e.clientX - d.dragX;
      const dy = e.clientY - d.dragY;
      d.dragX = e.clientX;
      d.dragY = e.clientY;
      d.velX = dx * 0.01;
      d.velY = dy * 0.01;
      offsetRef.current.x -= d.velX;
      offsetRef.current.z -= d.velY;
    };
    const onUp = () => {
      dragRef.current.isDragging = false;
    };
    canvas.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      canvas.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [gl]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((_state, dt) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    offsetRef.current.y += dt * TWEAKS.timeSpeed;
    const d = dragRef.current;
    if (!d.isDragging && (d.velX !== 0 || d.velY !== 0)) {
      const decay = Math.pow(0.04, dt);
      d.velX *= decay;
      d.velY *= decay;
      offsetRef.current.x -= d.velX;
      offsetRef.current.z -= d.velY;
      if (Math.abs(d.velX) < 1e-4 && Math.abs(d.velY) < 1e-4) {
        d.velX = 0;
        d.velY = 0;
      }
    }

    const ns = TWEAKS.noiseScale;
    const offX = offsetRef.current.x;
    const offY = offsetRef.current.y;
    const offZ = offsetRef.current.z;
    for (let i = 0; i < count; i++) {
      const x = positions[i * 2] as number;
      const z = positions[i * 2 + 1] as number;
      const nv = simplex01(x * ns * 0.5 + offX, offY, z * ns * 0.325 + offZ);
      const nSq = nv * nv;
      const h = Math.max(0.04, nSq * TWEAKS.maxHeight + 0.04);
      dummy.position.set(x, 0, z);
      dummy.scale.set(1, h, 1);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      let tC = (nSq * 0.08 * TWEAKS.maxHeight + 0.5) % 1;
      if (tC < 0) tC += 1;
      palette(tC);
      mesh.setColorAt(i, tmpCol);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[geometry, material, count]}
      frustumCulled={false}
    />
  );
}

function Scene() {
  return (
    <>
      <fog attach="fog" args={[0x03040a, 18, 80]} />
      <color attach="background" args={[0x03040a]} />
      <ambientLight color={0x030614} intensity={0.6} />
      <directionalLight color={0x4060c0} intensity={1.4} position={[30, 30, 42]} />
      <directionalLight color={0xc01060} intensity={1.0} position={[-10, 8, -12]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.005, 0]}>
        <planeGeometry args={[400, 400]} />
        <meshStandardMaterial color={0x020308} roughness={0.85} metalness={0.15} />
      </mesh>
      <Pillars />
    </>
  );
}

export function PillarField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-auto fixed inset-0 -z-10"
    >
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true }}
        camera={{ position: [0, 14, 22], fov: 60, near: 0.1, far: 300 }}
        onCreated={({ camera }) => camera.lookAt(0, 2, 0)}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
