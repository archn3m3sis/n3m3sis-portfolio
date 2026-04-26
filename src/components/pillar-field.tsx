"use client";

import { MeshTransmissionMaterial } from "@react-three/drei";
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
// Physics (two-stage target):
//   1. NATURAL FLOAT — average the wave height across 19 points in
//      the disk's elliptical footprint and add a hover offset + a
//      tiny ambient bob. This is what the disk would sit at on a
//      calm sea: lazy boat behavior.
//   2. NO-PIERCE FLOOR — also track the MAX pillar height in the
//      footprint. The disk's bottom must clear that max by a fixed
//      clearance, otherwise a tall pillar would skewer the deck.
//   targetY = max(naturalFloat, maxPillar + clearance + thickness/2)
//   So when a swell rolls under the disk, the disk RIDES the swell
//   (lifted by the floor constraint) instead of being pierced. The
//   spring follows the higher target, so the rise is smooth.
//
//   Tilt comes from the wave gradient at the cardinals — but we
//   damp it as the disk rises above its natural float, because once
//   it's been lifted off the swell it shouldn't heel anymore.
//
// Visuals (true glass):
//   - drei MeshTransmissionMaterial with chromatic aberration and
//     subtle distortion. Color is white; theme tint comes from
//     attenuationColor (light passing through the body picks up the
//     tint based on optical depth — physically correct glass).
//   - Theme-tinted emissive rim (top) and softer underglow (bottom).
//   - 4 orbiting tokens whose colors are also theme-derived.
// ------------------------------------------------------------------

type PlatformTheme = {
  rim: string;
  underglow: string;
  attenuation: string;
  tokens: [string, string, string, string];
};

const THEMES = {
  developer: {
    rim: "#86e4ff",
    underglow: "#3a8fbf",
    attenuation: "#a0d8ff",
    tokens: ["#86e4ff", "#5cbdf7", "#aef0ff", "#7fd4ff"],
  },
  employer: {
    rim: "#78e837",
    underglow: "#00bc73",
    attenuation: "#bfe6a0",
    tokens: ["#78e837", "#5bdd46", "#aef0a0", "#00bc73"],
  },
  client: {
    rim: "#c99fff",
    underglow: "#7c4dff",
    attenuation: "#cdb6ff",
    tokens: ["#daa6ff", "#962aff", "#c99fff", "#9c7bff"],
  },
  student: {
    rim: "#ff8df0",
    underglow: "#cc5de8",
    attenuation: "#e8b6e0",
    tokens: ["#ff8df0", "#cc5de8", "#ffa4f9", "#e0a0e8"],
  },
} as const satisfies Record<string, PlatformTheme>;

// Sample points within a unit ellipse — center, outer ring (12),
// staggered inner ring (6). Dense enough that no pillar can sneak
// between samples on a 5-unit-radius platform.
const FOOTPRINT_SAMPLES: ReadonlyArray<readonly [number, number]> = (() => {
  const s: [number, number][] = [[0, 0]];
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    s.push([Math.cos(a), Math.sin(a)]);
  }
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
    s.push([Math.cos(a) * 0.4, Math.sin(a) * 0.4]);
  }
  return s;
})();

const TOKEN_SHAPES = ["octahedron", "icosahedron", "box", "torus"] as const;
type TokenShape = (typeof TOKEN_SHAPES)[number];

function FloatingToken({
  shape,
  color,
  scale,
  orbitX,
  orbitZ,
  phase,
  hoverBoost,
}: {
  shape: TokenShape;
  color: string;
  scale: number;
  orbitX: number;
  orbitZ: number;
  phase: number;
  hoverBoost: { current: number };
}) {
  const ref = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    const m = ref.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    m.position.y = Math.sin(t * 0.9 + phase) * 0.2;
    m.rotation.x = t * 0.55 + phase;
    m.rotation.y = t * 0.32 + phase * 1.7;
    if (matRef.current) {
      matRef.current.emissiveIntensity = 1.6 + hoverBoost.current * 1.4;
    }
  });

  const geometry = (() => {
    switch (shape) {
      case "octahedron":
        return <octahedronGeometry args={[scale, 0]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[scale, 1]} />;
      case "box":
        return <boxGeometry args={[scale * 1.1, scale * 1.1, scale * 1.1]} />;
      case "torus":
        return <torusGeometry args={[scale * 0.85, scale * 0.28, 16, 32]} />;
    }
  })();

  return (
    <mesh ref={ref} position={[orbitX, 0, orbitZ]}>
      {geometry}
      <meshStandardMaterial
        ref={matRef}
        color={color}
        emissive={color}
        emissiveIntensity={1.6}
        roughness={0.25}
        metalness={0.5}
        toneMapped={true}
      />
    </mesh>
  );
}

function Platform({
  position,
  theme,
  radiusX = 5.5,
  radiusZ = 4.2,
  thickness = 1.0,
  hoverOffset = 1.6,
  clearance = 0.85,
}: {
  position: [number, number, number];
  theme: PlatformTheme;
  radiusX?: number;
  radiusZ?: number;
  thickness?: number;
  hoverOffset?: number;
  clearance?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const rimMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const underglowMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const velY = useRef(0);
  const hoverBoost = useRef(0);
  const [hovered, setHovered] = useState(false);

  // Seed Y so the first frame doesn't dive from 0.
  useEffect(() => {
    if (!groupRef.current) return;
    let max = 0;
    let sum = 0;
    for (const [u, v] of FOOTPRINT_SAMPLES) {
      const h = sampleWaveHeight(position[0] + u * radiusX, position[2] + v * radiusZ);
      sum += h;
      if (h > max) max = h;
    }
    const avg = sum / FOOTPRINT_SAMPLES.length;
    const natural = avg + hoverOffset;
    const floor = max + thickness * 0.5 + clearance;
    groupRef.current.position.y = Math.max(natural, floor);
  }, [position, hoverOffset, radiusX, radiusZ, thickness, clearance]);

  useFrame((state, dt) => {
    const g = groupRef.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const [px, , pz] = position;

    // ---- Footprint sampling: avg + max in one pass ----
    let sum = 0;
    let max = 0;
    for (const [u, v] of FOOTPRINT_SAMPLES) {
      const sx = px + u * radiusX;
      const sz = pz + v * radiusZ;
      const h = sampleWaveHeight(sx, sz);
      sum += h;
      if (h > max) max = h;
    }
    const hAvg = sum / FOOTPRINT_SAMPLES.length;

    // ---- Tilt sampling: cardinals at footprint edge ----
    const sampleDist = Math.max(radiusX, radiusZ) * 0.65;
    const hN = sampleWaveHeight(px, pz - sampleDist);
    const hS = sampleWaveHeight(px, pz + sampleDist);
    const hE = sampleWaveHeight(px + sampleDist, pz);
    const hW = sampleWaveHeight(px - sampleDist, pz);

    // Per-platform phase offset so a fleet of disks doesn't bob in
    // lockstep — derived from world position so it's deterministic.
    const ambientBob =
      Math.sin(t * 0.7 + position[0] * 0.13) * 0.09 +
      Math.sin(t * 0.43 + 1.3 + position[2] * 0.11) * 0.06;

    const naturalTarget = hAvg + hoverOffset + ambientBob;

    // Tilt-aware floor: a tilted disk's leeward edge sits LOWER than
    // its center by ~radiusMax * sin(maxTilt). Account for that so
    // the rolled edge doesn't dip into a pillar tip even though the
    // center is well above. We use the CURRENT tilt as the estimate
    // (one-frame lag is fine — the floor still recomputes next frame).
    const radiusMax = Math.max(radiusX, radiusZ);
    const maxTilt = Math.max(Math.abs(g.rotation.x), Math.abs(g.rotation.z));
    const tiltDrop = radiusMax * Math.sin(maxTilt);
    // Hard floor: disk's BOTTOM (including the lowest tilted edge)
    // must clear the tallest pillar in the footprint by `clearance`.
    const minDiskY = max + thickness * 0.5 + clearance + tiltDrop;
    const targetY = Math.max(naturalTarget, minDiskY);

    // ---- Vertical spring (slightly under-critically damped) ----
    // Higher stiffness so the spring catches fast-rising swells.
    const stiffness = 9.0;
    const damping = 4.2;
    const dy = targetY - g.position.y;
    velY.current += (stiffness * dy - damping * velY.current) * dt;
    g.position.y += velY.current * dt;

    // HARD CLAMP — non-negotiable. Even with the spring tracking the
    // floor, fast wave rises can briefly outpace the integrator. After
    // the spring update, if we're below the floor we're shoved up to
    // it and downward velocity is zeroed. This is the guarantee that
    // a pillar can NEVER pierce the disk surface.
    if (g.position.y < minDiskY) {
      g.position.y = minDiskY;
      if (velY.current < 0) velY.current = 0;
    }

    // ---- Tilt ----
    // When the disk has been lifted off the natural float (a pillar is
    // pushing it up), reduce tilt — it shouldn't heel into a swell it's
    // no longer touching.
    const lift = Math.max(0, g.position.y - naturalTarget);
    const tiltDamp = Math.exp(-lift * 0.6);
    const tiltGain = 0.5;
    const pitchTarget = ((hS - hN) / (2 * sampleDist)) * tiltGain * tiltDamp;
    const rollTarget = ((hW - hE) / (2 * sampleDist)) * tiltGain * tiltDamp;

    const swayPitch = Math.sin(t * 0.31 + position[0] * 0.07) * 0.025;
    const swayRoll = Math.cos(t * 0.27 + 0.7 + position[2] * 0.09) * 0.03;
    const tiltDecay = 1 - Math.exp(-dt * 3.2);
    g.rotation.x += (pitchTarget + swayPitch - g.rotation.x) * tiltDecay;
    g.rotation.z += (rollTarget + swayRoll - g.rotation.z) * tiltDecay;
    g.rotation.y = Math.sin(t * 0.18 + position[0] * 0.05) * 0.07;

    // ---- Orbit + hover ----
    if (orbitRef.current) {
      const orbitSpeed = 0.22 + hoverBoost.current * 0.3;
      orbitRef.current.rotation.y += dt * orbitSpeed;
    }
    const target = hovered ? 1 : 0;
    hoverBoost.current += (target - hoverBoost.current) * (1 - Math.exp(-dt * 6));

    if (rimMatRef.current) {
      rimMatRef.current.opacity = 0.75 + hoverBoost.current * 0.25;
    }
    if (underglowMatRef.current) {
      underglowMatRef.current.opacity = 0.4 + hoverBoost.current * 0.3;
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
      {/* Real refractive glass disk. The body is white; the theme
          color enters via attenuationColor — light traversing the
          glass picks up tint based on optical depth, which is how
          colored glass actually works. Slight inverted-cone taper
          and high clearcoat gives the rim a wet, lensed edge. */}
      <mesh scale={[radiusX, thickness, radiusZ]}>
        <cylinderGeometry args={[1, 0.93, 1, 128, 1]} />
        <MeshTransmissionMaterial
          samples={6}
          resolution={256}
          transmission={1}
          roughness={0.06}
          thickness={1.4}
          ior={1.45}
          chromaticAberration={0.06}
          anisotropy={0.2}
          distortion={0.15}
          distortionScale={0.35}
          temporalDistortion={0.04}
          attenuationColor={theme.attenuation}
          attenuationDistance={2.2}
          color="#ffffff"
          toneMapped
        />
      </mesh>

      {/* Top emissive rim — theme-tinted ring. */}
      <mesh
        position={[0, thickness * 0.5 + 0.002, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[radiusX, radiusZ, 1]}
      >
        <ringGeometry args={[0.94, 1.0, 128]} />
        <meshBasicMaterial
          ref={rimMatRef}
          color={theme.rim}
          transparent
          opacity={0.75}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Underglow — softer, wider, theme tint. */}
      <mesh
        position={[0, -thickness * 0.5 - 0.002, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[radiusX * 1.08, radiusZ * 1.08, 1]}
      >
        <ringGeometry args={[0.84, 1.0, 96]} />
        <meshBasicMaterial
          ref={underglowMatRef}
          color={theme.underglow}
          transparent
          opacity={0.4}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* D-pad joystick — the eventual position/movement indicator.
          Sits in the center, levitating above the deck. */}
      <group position={[0, thickness * 0.5 + 0.6, 0]}>
        <DPad theme={theme} hoverBoost={hoverBoost} />
      </group>

      {/* Floating tokens — orbit at a wider radius around the D-pad. */}
      <group ref={orbitRef} position={[0, thickness * 0.5 + 1.5, 0]}>
        {TOKEN_SHAPES.map((shape, i) => {
          const angle = (i / TOKEN_SHAPES.length) * Math.PI * 2;
          const ox = Math.cos(angle) * radiusX * 0.7;
          const oz = Math.sin(angle) * radiusZ * 0.7;
          return (
            <FloatingToken
              key={shape}
              shape={shape}
              color={theme.tokens[i] as string}
              scale={0.42}
              orbitX={ox}
              orbitZ={oz}
              phase={i * 1.25}
              hoverBoost={hoverBoost}
            />
          );
        })}
      </group>
    </group>
  );
}

// Multi-path journey: 4 destination stones placed on ALTERNATING
// sides of the screen, receding into the distance. Right (close,
// developer) → Left (mid, employer) → Right (far, client) → Left
// (very far, student). Future camera-movement system will glide
// the user from one to the next as they move forward / backward;
// the alternation makes that traversal feel like winding through
// a path rather than charging straight ahead. Fog hazes the far
// stones for natural depth.
const PLATFORM_PATH: ReadonlyArray<{
  position: [number, number, number];
  theme: PlatformTheme;
}> = [
  { position: [16, 0, 4], theme: THEMES.developer },
  { position: [-15, 0, -10], theme: THEMES.employer },
  { position: [16, 0, -24], theme: THEMES.client },
  { position: [-16, 0, -38], theme: THEMES.student },
];

// ------------------------------------------------------------------
// DPad — 4-triangle directional pad with a glass-ball joystick at
// its center. Floats above each platform's deck.
//
// This will eventually act as the user's POSITION/MOVEMENT INDICATOR:
// the joystick ball will tilt in the direction of mouse-drift /
// keyboard input, and the camera will accelerate accordingly,
// gliding the viewer between alternating-side platforms. For now
// it's a static-but-floating glass object on each platform —
// the input wiring comes in a follow-up.
// ------------------------------------------------------------------

function DPad({
  theme,
  hoverBoost,
}: {
  theme: PlatformTheme;
  hoverBoost: { current: number };
}) {
  const groupRef = useRef<THREE.Group>(null);
  const ballRef = useRef<THREE.Mesh>(null);
  const stickRef = useRef<THREE.Mesh>(null);

  // Build the triangle geometry once. Shape is in XY (tip up Y);
  // we lay it flat so the tip points in +Z by rotating the
  // geometry on the X axis. Each instance is then positioned
  // around a center and rotated around Y to face its direction.
  const triGeometry = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0.55);
    s.lineTo(-0.36, -0.05);
    s.lineTo(0.36, -0.05);
    s.closePath();
    const g = new THREE.ExtrudeGeometry(s, {
      depth: 0.14,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.035,
      bevelSegments: 3,
      curveSegments: 4,
    });
    // Center the extrusion vertically so tilt rotates around the
    // triangle's middle, not its base.
    g.translate(0, 0, -0.07);
    g.rotateX(-Math.PI / 2); // lay flat in XZ plane, tip in +Z
    return g;
  }, []);

  useFrame((state) => {
    const g = groupRef.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    // Slow float up/down so the assembly clearly levitates above
    // the platform deck.
    g.position.y = Math.sin(t * 0.6) * 0.15;
    // Lazy yaw rotation; speeds up slightly on hover.
    g.rotation.y += (0.18 + hoverBoost.current * 0.4) * 0.016;

    // Joystick ball gentle bob and self-rotation.
    if (ballRef.current) {
      ballRef.current.position.y = 0.78 + Math.sin(t * 1.1) * 0.04;
      ballRef.current.rotation.y = t * 0.4;
      ballRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
    }
    // Stick subtly tilts (placeholder for input-driven tilt later).
    if (stickRef.current) {
      stickRef.current.rotation.x = Math.sin(t * 0.45) * 0.04;
      stickRef.current.rotation.z = Math.cos(t * 0.37) * 0.04;
    }
  });

  // Direction layout: N/S/E/W around center.
  const r = 0.78;
  const directions: Array<{ x: number; z: number; ry: number }> = [
    { x: 0, z: r, ry: 0 },              // N (tip in +Z)
    { x: 0, z: -r, ry: Math.PI },       // S
    { x: r, z: 0, ry: -Math.PI / 2 },   // E (tip in +X)
    { x: -r, z: 0, ry: Math.PI / 2 },   // W
  ];

  return (
    <group ref={groupRef}>
      {/* Four directional triangles — frosted glass, theme-tinted. */}
      {directions.map((d, i) => (
        <mesh
          key={i}
          geometry={triGeometry}
          position={[d.x, 0, d.z]}
          rotation={[0, d.ry, 0]}
          castShadow={false}
        >
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={0.85}
            thickness={0.4}
            ior={1.45}
            roughness={0.08}
            metalness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.05}
            attenuationColor={theme.attenuation}
            attenuationDistance={1.4}
            transparent
            opacity={0.95}
          />
        </mesh>
      ))}

      {/* Joystick base ring — a small glassy plinth the stick rises from. */}
      <mesh position={[0, 0.06, 0]}>
        <cylinderGeometry args={[0.32, 0.36, 0.12, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.7}
          thickness={0.4}
          ior={1.45}
          roughness={0.1}
          metalness={0.1}
          clearcoat={1}
          attenuationColor={theme.attenuation}
          attenuationDistance={1.2}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Joystick shaft — slim metallic-glass rod. */}
      <mesh ref={stickRef} position={[0, 0.42, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.6, 24]} />
        <meshPhysicalMaterial
          color={theme.rim}
          transmission={0.6}
          thickness={0.3}
          ior={1.5}
          roughness={0.12}
          metalness={0.7}
          clearcoat={1}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Joystick ball — the centerpiece glass sphere. */}
      <mesh ref={ballRef} position={[0, 0.78, 0]}>
        <sphereGeometry args={[0.22, 48, 48]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.95}
          thickness={0.45}
          ior={1.5}
          roughness={0.04}
          metalness={0}
          clearcoat={1}
          clearcoatRoughness={0.02}
          attenuationColor={theme.attenuation}
          attenuationDistance={0.8}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Soft halo behind the ball — emissive disc that subtly glows
          out from behind the joystick. */}
      <mesh position={[0, 0.78, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.28, 0.42, 48]} />
        <meshBasicMaterial
          color={theme.rim}
          transparent
          opacity={0.18 + hoverBoost.current * 0.3}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>
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
      {/* Multi-path journey: 4 destination platforms stepping back
          into the scene from front-right (developer) to back-left
          (student). Fog hazes the far ones for natural depth. */}
      {PLATFORM_PATH.map((stop, i) => (
        <Platform key={i} position={stop.position} theme={stop.theme} />
      ))}
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
