"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const TWEAKS = {
  pylonRadius: 0.13,
  maxHeight: 6.5,
  noiseScale: 0.14,
  timeSpeed: 0.22,
  bloom: 2,
  fieldBound: 60,
  maxPillars: 60000,
  // How far the field pans at the cursor's edge of the viewport.
  panStrength: 8,
  // Per-frame lerp factor (0..1). Higher = snappier follow, lower = lazier.
  panLerp: 0.06,
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

// ------------------------------------------------------------------
// Shared wave-field state.
//
// Both the pillar field AND any platform that wants to "ride" the wave
// (bobbing like a boat) need to sample the same noise function and
// time/pan offsets, otherwise the platform would drift relative to the
// pillars beneath it. We hoist the simplex sampler and the offset
// state to module scope so anyone in the scene can read it via
// sampleWaveHeight(x, z).
//
// Only Pillars writes to _offsets — every other consumer is read-only.
// ------------------------------------------------------------------
const _simplex = makeSimplex();
const _offsets = { x: 0, y: 0, z: 0 };

function sampleWaveHeight(x: number, z: number): number {
  const ns = TWEAKS.noiseScale;
  const nv = _simplex(
    x * ns * 0.5 + _offsets.x,
    _offsets.y,
    z * ns * 0.325 + _offsets.z,
  );
  const nSq = nv * nv;
  return Math.max(0.04, nSq * TWEAKS.maxHeight + 0.04);
}

const tmpCol = new THREE.Color();
// t = 0 (lowest pillars) → dark emerald undertone, so even the
// shortest pillars are visible against the near-black background and
// the field has subtle chromatic break-up.
// t = 1 (tallest pillars) → near-neutral cool white, in keeping with
// the dark-persona palette.
function palette(t: number): THREE.Color {
  const er = 0.06, eg = 0.22, eb = 0.14; // dark emerald
  const pr = 0.78, pg = 0.80, pb = 0.85; // cool near-white
  return tmpCol.setRGB(
    er + (pr - er) * t,
    eg + (pg - eg) * t,
    eb + (pb - eb) * t,
  );
}

function Pillars() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  // Mouse-driven pan: cursor's normalized position [-1, 1] in viewport.
  // The actual offsets lerp toward target * panStrength each frame so the
  // motion feels organic instead of snapping with the cursor.
  const mouseTargetRef = useRef({ x: 0, z: 0 });
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
          `  float heightMask = smoothstep(0.0, 0.75, vWorldY / ${TWEAKS.maxHeight.toFixed(2)});\n  float dim = 0.30 + 0.70*heightMask;\n  outgoingLight *= dim;\n  #include <opaque_fragment>`,
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
    const updateFromXY = (clientX: number, clientY: number) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      // Normalize to [-1, 1] with origin at viewport center.
      mouseTargetRef.current.x = (clientX / w) * 2 - 1;
      mouseTargetRef.current.z = (clientY / h) * 2 - 1;
    };
    const onPointer = (e: PointerEvent) => updateFromXY(e.clientX, e.clientY);
    const onMouse = (e: MouseEvent) => updateFromXY(e.clientX, e.clientY);

    // Listen to BOTH pointermove and mousemove. Some browsers stop firing
    // pointermove after a window blur/focus cycle even though mousemove
    // continues — listening to both makes tracking robust to focus changes,
    // tab switches, and DevTools opening/closing. Capture-phase so we
    // receive events even if downstream handlers stopPropagation() them.
    const opts: AddEventListenerOptions = { capture: true, passive: true };
    window.addEventListener("pointermove", onPointer, opts);
    window.addEventListener("mousemove", onMouse, opts);

    // When the page regains visibility/focus, ensure tracking is alive
    // by issuing a no-op event to wake the system. We can't read current
    // cursor coords without an event, but this guarantees our listeners
    // are still bound and resampling on the next mouse move.
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        // Listeners are stateless — the next real event will resample.
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.removeEventListener("pointermove", onPointer, opts);
      window.removeEventListener("mousemove", onMouse, opts);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((_state, dt) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    _offsets.y += dt * TWEAKS.timeSpeed;

    // Mouse-driven pan: lerp offsets toward (target * panStrength) so motion
    // is smooth, not jittery. Larger lerpRate = more responsive; smaller =
    // more dampened. dt-aware so the feel is frame-rate independent.
    const targetX = mouseTargetRef.current.x * TWEAKS.panStrength;
    const targetZ = mouseTargetRef.current.z * TWEAKS.panStrength;
    const lerpAlpha = 1 - Math.pow(1 - TWEAKS.panLerp, dt * 60);
    _offsets.x += (targetX - _offsets.x) * lerpAlpha;
    _offsets.z += (targetZ - _offsets.z) * lerpAlpha;

    const ns = TWEAKS.noiseScale;
    const offX = _offsets.x;
    const offY = _offsets.y;
    const offZ = _offsets.z;
    for (let i = 0; i < count; i++) {
      const x = positions[i * 2] as number;
      const z = positions[i * 2 + 1] as number;
      const nv = _simplex(x * ns * 0.5 + offX, offY, z * ns * 0.325 + offZ);
      const nSq = nv * nv;
      const h = Math.max(0.04, nSq * TWEAKS.maxHeight + 0.04);
      dummy.position.set(x, 0, z);
      dummy.scale.set(1, h, 1);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      // Drive palette directly from height fraction so low pillars are
      // emerald and tall pillars are near-white.
      palette(nSq);
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

// ------------------------------------------------------------------
// Platform — a glassmorphic disk that floats on the wave like a boat.
//
// Physics:
//   - Vertical position is driven by a critically-damped spring whose
//     target is the wave height beneath the platform plus a small
//     hover offset and a subtle ambient bob (so even on a flat sea
//     the platform breathes).
//   - Pitch (rotation X) and roll (rotation Z) come from the gradient
//     of the wave at the platform's footprint — sampling the wave at
//     four cardinal offsets and using the central differences. This
//     is what makes it feel like a boat heeling into a swell rather
//     than a rigid object riding a piston.
//   - A slow yaw oscillation gives it the lazy "boat at anchor" sway.
//
// Visuals:
//   - Oval cylinder slice (scaled X != Z) in physically-based glass-
//     ish material. No transmission (too expensive); we fake glass
//     with low roughness + clearcoat + soft emissive.
//   - Bright cyan emissive ring on the top edge (rim light).
//   - Softer blue underglow ring on the bottom (water reflection).
//   - 4 floating tokens orbit on an elliptical path matching the
//     platform's footprint, each with its own bob phase and self-spin.
// ------------------------------------------------------------------

type FloatingTokenSpec = {
  shape: "octahedron" | "icosahedron" | "box" | "torus";
  color: string;
  scale: number;
};

const PLATFORM_TOKENS: FloatingTokenSpec[] = [
  { shape: "octahedron", color: "#86e4ff", scale: 0.42 },
  { shape: "icosahedron", color: "#c99fff", scale: 0.46 },
  { shape: "box", color: "#5bdd46", scale: 0.5 },
  { shape: "torus", color: "#ff8df0", scale: 0.4 },
];

function FloatingToken({
  spec,
  orbitX,
  orbitZ,
  phase,
  hoverBoost,
}: {
  spec: FloatingTokenSpec;
  orbitX: number;
  orbitZ: number;
  phase: number;
  hoverBoost: { current: number };
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const m = ref.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    // Local vertical bob — independent of orbit. Adds organic motion.
    m.position.y = Math.sin(t * 0.9 + phase) * 0.18;
    // Self-spin: each axis rotates at a slightly different rate so the
    // token never settles into a regular flicker.
    m.rotation.x = t * 0.55 + phase;
    m.rotation.y = t * 0.32 + phase * 1.7;
  });

  const geometry = (() => {
    switch (spec.shape) {
      case "octahedron":
        return <octahedronGeometry args={[spec.scale, 0]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[spec.scale, 1]} />;
      case "box":
        return <boxGeometry args={[spec.scale, spec.scale, spec.scale]} />;
      case "torus":
        return <torusGeometry args={[spec.scale * 0.85, spec.scale * 0.28, 14, 28]} />;
    }
  })();

  return (
    <mesh ref={ref} position={[orbitX, 0, orbitZ]}>
      {geometry}
      <meshStandardMaterial
        color={spec.color}
        emissive={spec.color}
        emissiveIntensity={1.5 + hoverBoost.current * 1.2}
        roughness={0.28}
        metalness={0.45}
        toneMapped={true}
      />
    </mesh>
  );
}

function Platform({
  position = [0, 0, 0] as [number, number, number],
  radiusX = 5.5,
  radiusZ = 4.2,
  thickness = 0.45,
  hoverOffset = 1.4,
}: {
  position?: [number, number, number];
  radiusX?: number;
  radiusZ?: number;
  thickness?: number;
  hoverOffset?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const velY = useRef(0);
  const hoverBoost = useRef(0);
  const [hovered, setHovered] = useState(false);

  // Initialize y so the first frame doesn't snap from 0 to ~1.4.
  // Sample once and seed the position. The wave is non-zero so this
  // avoids a one-frame dive.
  useEffect(() => {
    if (!groupRef.current) return;
    const seed =
      sampleWaveHeight(position[0], position[2]) + hoverOffset;
    groupRef.current.position.y = seed;
  }, [position, hoverOffset]);

  useFrame((state, dt) => {
    const g = groupRef.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const [px, , pz] = position;

    // Footprint sampling distance — close to the platform's outer edge
    // so the gradient reflects the actual wave the deck would feel.
    const sampleDist = Math.max(radiusX, radiusZ) * 0.65;
    const hC = sampleWaveHeight(px, pz);
    const hN = sampleWaveHeight(px, pz - sampleDist);
    const hS = sampleWaveHeight(px, pz + sampleDist);
    const hE = sampleWaveHeight(px + sampleDist, pz);
    const hW = sampleWaveHeight(px - sampleDist, pz);

    // Average the center and the four cardinals so a single tall pillar
    // doesn't yank the entire platform up by itself — a real boat
    // averages buoyancy across its hull.
    const hAvg = (hC * 2 + hN + hS + hE + hW) * 0.16667;

    // Gentle ambient bob layered on top of the wave-driven target.
    // Two sinusoids at incommensurate frequencies prevent visible
    // periodicity.
    const ambientBob =
      Math.sin(t * 0.7) * 0.09 + Math.sin(t * 0.43 + 1.3) * 0.06;
    const targetY = hAvg + hoverOffset + ambientBob;

    // Critically-damped spring toward target. The values below were
    // tuned by feel: stiffness 4.8 / damping 2.0 gives a boat-like
    // settle — overshoots a touch, then steadies — rather than the
    // robotic step you get from straight lerp().
    const stiffness = 4.8;
    const damping = 2.0;
    const dy = targetY - g.position.y;
    velY.current += (stiffness * dy - damping * velY.current) * dt;
    g.position.y += velY.current * dt;

    // Pitch / roll from the wave gradient at the footprint.
    // pitchTarget: positive when south is higher than north (nose up).
    // rollTarget:  positive when west is higher than east  (port up).
    const tiltGain = 0.55;
    const pitchTarget = ((hS - hN) / (2 * sampleDist)) * tiltGain;
    const rollTarget = ((hW - hE) / (2 * sampleDist)) * tiltGain;

    // Add ambient sway so the boat never sits perfectly still.
    const swayPitch = Math.sin(t * 0.31) * 0.025;
    const swayRoll = Math.cos(t * 0.27 + 0.7) * 0.03;

    // Frame-rate-independent damp toward the tilt targets.
    const tiltDecay = 1 - Math.exp(-dt * 3.2);
    g.rotation.x += (pitchTarget + swayPitch - g.rotation.x) * tiltDecay;
    g.rotation.z += (rollTarget + swayRoll - g.rotation.z) * tiltDecay;
    // Slow yaw drift — anchor sway.
    g.rotation.y = Math.sin(t * 0.18) * 0.07;

    // Orbit the tokens. They sit in a child group whose y-rotation
    // accumulates linearly so the orbit is constant-velocity, plus a
    // gentle boost when the platform is hovered.
    if (orbitRef.current) {
      const orbitSpeed = 0.22 + hoverBoost.current * 0.25;
      orbitRef.current.rotation.y += dt * orbitSpeed;
    }

    // Smooth toward the hover state. Damped so cursor jitter doesn't
    // strobe the rim brightness.
    const target = hovered ? 1 : 0;
    hoverBoost.current += (target - hoverBoost.current) * (1 - Math.exp(-dt * 6));
  });

  // Materials change when hovered — emissive intensity jumps. We
  // can't read hoverBoost.current at render time without forcing a
  // re-render, so instead use a uniform-style ref applied via
  // material.emissiveIntensity inside useFrame. Done for the rim
  // ring below via a ref handle.
  const rimRef = useRef<THREE.Mesh>(null);
  const underglowRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (rimRef.current) {
      const m = rimRef.current.material as THREE.MeshBasicMaterial;
      m.opacity = 0.7 + hoverBoost.current * 0.3;
    }
    if (underglowRef.current) {
      const m = underglowRef.current.material as THREE.MeshBasicMaterial;
      m.opacity = 0.35 + hoverBoost.current * 0.25;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      {/* Glass disk body. Slight inverted-cone taper (top radius
          larger than bottom) so the rim catches the lights and reads
          as a chunky puck rather than a flat coin. */}
      <mesh scale={[radiusX, thickness, radiusZ]}>
        <cylinderGeometry args={[1, 0.94, 1, 96, 1]} />
        <meshPhysicalMaterial
          color="#0c1626"
          roughness={0.12}
          metalness={0.35}
          clearcoat={1}
          clearcoatRoughness={0.04}
          transparent
          opacity={0.72}
          emissive="#0a2236"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Top emissive rim — sharp cyan, sits a hair above the disk
          surface to avoid z-fighting. */}
      <mesh
        ref={rimRef}
        position={[0, thickness * 0.5 + 0.002, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[radiusX, radiusZ, 1]}
      >
        <ringGeometry args={[0.94, 1.0, 128]} />
        <meshBasicMaterial
          color="#86e4ff"
          transparent
          opacity={0.7}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Bottom underglow — wider, softer, blue. Reads as light
          bouncing off the wave back onto the deck's underside. */}
      <mesh
        ref={underglowRef}
        position={[0, -thickness * 0.5 - 0.002, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[radiusX * 1.05, radiusZ * 1.05, 1]}
      >
        <ringGeometry args={[0.86, 1.0, 96]} />
        <meshBasicMaterial
          color="#3a8fbf"
          transparent
          opacity={0.35}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Soft inner top-cap glow — a faint wash on the deck so it
          doesn't look like a black hole when the rim lights it. */}
      <mesh
        position={[0, thickness * 0.5 + 0.003, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[radiusX * 0.88, radiusZ * 0.88, 1]}
      >
        <circleGeometry args={[1, 80]} />
        <meshBasicMaterial
          color="#13283c"
          transparent
          opacity={0.22}
          toneMapped={false}
        />
      </mesh>

      {/* Floating tokens — orbiting just above the deck. They live
          in a child group whose y-rotation animates the orbit; each
          token also has its own local bob + self-spin. */}
      <group ref={orbitRef} position={[0, thickness * 0.5 + 1.2, 0]}>
        {PLATFORM_TOKENS.map((spec, i) => {
          const angle = (i / PLATFORM_TOKENS.length) * Math.PI * 2;
          const orbitR = Math.min(radiusX, radiusZ) * 0.62;
          // Elliptical orbit matches the platform's oval shape.
          const ox = Math.cos(angle) * radiusX * 0.6;
          const oz = Math.sin(angle) * radiusZ * 0.6;
          // Suppress unused warning — we calculated orbitR but the
          // ellipse uses radiusX/radiusZ directly.
          void orbitR;
          return (
            <FloatingToken
              key={spec.shape}
              spec={spec}
              orbitX={ox}
              orbitZ={oz}
              phase={i * 1.2}
              hoverBoost={hoverBoost}
            />
          );
        })}
      </group>
    </group>
  );
}

function Scene() {
  return (
    <>
      <fog attach="fog" args={[0x05060a, 18, 80]} />
      <color attach="background" args={[0x05060a]} />
      {/* Lights desaturated to cool greys. The previous blue/magenta
          two-light setup gave the scene a vivid colored wash; now both
          lights are near-neutral so the pillars read as monochrome. */}
      <ambientLight color={0x0a0c10} intensity={0.55} />
      <directionalLight color={0x9aa3b0} intensity={1.25} position={[30, 30, 42]} />
      <directionalLight color={0x4a5060} intensity={0.7} position={[-10, 8, -12]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.005, 0]}>
        <planeGeometry args={[400, 400]} />
        <meshStandardMaterial color={0x040508} roughness={0.85} metalness={0.15} />
      </mesh>
      <Pillars />
      {/* First content-zone platform. Sat far-right and forward so it
          clears the homepage 10x10 grid and reads as the focal object
          of the scene rather than fighting DOM content for attention.
          Future audience-specific zones can be additional
          <Platform position={[x, 0, z]} /> calls. */}
      <Platform position={[16, 0, 10]} />
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
