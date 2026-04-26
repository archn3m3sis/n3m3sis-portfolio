"use client";

import { useEffect, useRef } from "react";
import { CursorTargetIcon } from "@/components/icons/cursor-target";

// ============================================================
// Custom magnifier-target cursor.
//
// Why this is RAF + direct DOM mutation instead of React state +
// CSS transitions:
//
//   - CSS transitions restart whenever a property changes mid-flight.
//     Sweeping the cursor across the top bar fired a new transition
//     for every icon's bounding box, so the motion stuttered and
//     overshoot popped between targets. RAF-driven spring physics is
//     monotonic — when the target moves, the velocity carries over
//     and the cursor smoothly redirects.
//   - React setState on every pointermove triggers a re-render +
//     reconciliation. At 240Hz mice that's a real cost. Refs + DOM
//     writes skip React entirely during motion.
//   - transform: translate3d uses the GPU compositor, so the cursor
//     never causes a paint of the rest of the page.
//
// Spring tuning:
//   - Critical damping coefficient is c = 2*sqrt(k*m). With m=1 and
//     k=POS_STIFFNESS_FREE (260), critical c ≈ 32.25. We use 30 (a
//     hair under critical) for free movement → no oscillation, fast
//     settle, slight pull-through that reads as inertia.
//   - When snapped over a clickable, stiffness jumps to 420 — the
//     cursor is YANKED toward the target center. That's the magnetic
//     feel; a 60% stronger pull than free tracking.
//   - dt is clamped at 1/30s so a tab-switch can't blow up the spring.
// ============================================================

const BASE_SIZE = 36;
const HOVER_PADDING = 14;
const CLICKABLE_SELECTOR =
  'a, button, [role="button"], [role="link"], input:not([disabled]), select, textarea, [data-clickable="true"]';

// Position spring — different stiffness when snapped vs free so the
// magnetic pull is genuinely stronger when over a target.
const POS_STIFFNESS_FREE = 260;
const POS_STIFFNESS_SNAP = 420;
// Damping ≈ 2*sqrt(k). Slightly under-critical so motion stays
// responsive without ringing.
const POS_DAMPING_FREE = 30;
const POS_DAMPING_SNAP = 38;

// Size spring — slightly softer than position so the hoop's growth
// trails the cursor's approach by a beat. Reads as the hoop closing
// in *after* the cursor has reached the target.
const SIZE_STIFFNESS = 200;
const SIZE_DAMPING = 28;

export function Cursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // -- target state (set on every pointermove) --
    let targetX = -100;
    let targetY = -100;
    let targetW = BASE_SIZE;
    let targetH = BASE_SIZE;
    let snapped = false;
    let visible = false;
    // Track the snapped element so we can re-sample its rect each
    // frame (in case it moves due to layout shift / scroll). Falsy
    // when not snapped.
    let snapEl: HTMLElement | null = null;

    // -- current state (interpolated each frame, written to DOM) --
    let x = -100;
    let y = -100;
    let w = BASE_SIZE;
    let h = BASE_SIZE;
    let opacity = 0;
    let initialized = false;

    // -- velocities --
    let vx = 0;
    let vy = 0;
    let vw = 0;
    let vh = 0;

    const computeTargetFor = (clientX: number, clientY: number) => {
      const t = document.elementFromPoint(clientX, clientY);
      const clickable = t?.closest(CLICKABLE_SELECTOR) as HTMLElement | null;
      if (clickable) {
        snapEl = clickable;
        snapped = true;
        const r = clickable.getBoundingClientRect();
        // Square the snap so the hoop is always a true circle —
        // rectangular targets get inscribed by the larger dimension.
        const dim = Math.max(r.width, r.height) + HOVER_PADDING * 2;
        targetX = r.left + r.width / 2;
        targetY = r.top + r.height / 2;
        targetW = dim;
        targetH = dim;
      } else {
        snapEl = null;
        snapped = false;
        targetX = clientX;
        targetY = clientY;
        targetW = BASE_SIZE;
        targetH = BASE_SIZE;
      }
    };

    const onMove = (e: PointerEvent) => {
      computeTargetFor(e.clientX, e.clientY);
      if (!visible) {
        visible = true;
        if (!initialized) {
          // First-show snap: don't fly in from origin.
          x = targetX;
          y = targetY;
          w = targetW;
          h = targetH;
          initialized = true;
        }
      }
    };

    const onLeave = () => {
      visible = false;
    };

    // Capture phase + both pointer/mouse so DevTools/focus changes
    // don't kill tracking.
    const opts: AddEventListenerOptions = { capture: true, passive: true };
    window.addEventListener("pointermove", onMove, opts);
    window.addEventListener("mousemove", onMove as unknown as EventListener, opts);
    document.addEventListener("mouseleave", onLeave);

    let raf = 0;
    let lastT = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastT) / 1000, 1 / 30);
      lastT = now;

      // Re-sample snapped element each frame so layout shift /
      // scroll / bar reflow doesn't desync the hoop from its target.
      if (snapEl) {
        const r = snapEl.getBoundingClientRect();
        const dim = Math.max(r.width, r.height) + HOVER_PADDING * 2;
        targetX = r.left + r.width / 2;
        targetY = r.top + r.height / 2;
        targetW = dim;
        targetH = dim;
      }

      // ----- position spring -----
      // Semi-implicit Euler: a = k(target-x) - c*v ; v += a*dt ; x += v*dt
      const k = snapped ? POS_STIFFNESS_SNAP : POS_STIFFNESS_FREE;
      const c = snapped ? POS_DAMPING_SNAP : POS_DAMPING_FREE;
      const ax = k * (targetX - x) - c * vx;
      const ay = k * (targetY - y) - c * vy;
      vx += ax * dt;
      vy += ay * dt;
      x += vx * dt;
      y += vy * dt;

      // ----- size spring -----
      const aw = SIZE_STIFFNESS * (targetW - w) - SIZE_DAMPING * vw;
      const ah = SIZE_STIFFNESS * (targetH - h) - SIZE_DAMPING * vh;
      vw += aw * dt;
      vh += ah * dt;
      w += vw * dt;
      h += vh * dt;

      // ----- opacity (cheaper exponential decay; no spring) -----
      const oRate = 14;
      const oAlpha = 1 - Math.exp(-oRate * dt);
      opacity += ((visible ? 1 : 0) - opacity) * oAlpha;

      const wrap = wrapperRef.current;
      if (wrap) {
        const tx = x - w / 2;
        const ty = y - h / 2;
        // Single transform write; width/height for the hoop's literal
        // size so the SVG inside fills it.
        wrap.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
        wrap.style.width = `${w.toFixed(2)}px`;
        wrap.style.height = `${h.toFixed(2)}px`;
        wrap.style.opacity = opacity.toFixed(3);
        // Snap progress drives crosshair fade via CSS var. 0 = idle, 1 = fully snapped.
        const snapProgress = Math.min(
          1,
          Math.max(0, (w - BASE_SIZE) / (BASE_SIZE * 1.5)),
        );
        wrap.style.setProperty("--snap", snapProgress.toFixed(3));
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove, opts);
      window.removeEventListener("mousemove", onMove as unknown as EventListener, opts);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const lineStyle: React.CSSProperties = {
    boxShadow:
      "0 0 4px rgba(255,255,255,0.85), 0 0 10px rgba(170,210,255,0.7), 0 0 18px rgba(120,180,255,0.5)",
    // Crosshair fades as the hoop grows, so attention shifts to the ring.
    opacity: "calc(1 - var(--snap, 0) * 0.55)",
  };

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{
        opacity: 0,
        willChange: "transform, width, height, opacity",
        // Initial transform off-screen so the first paint isn't at 0,0.
        transform: "translate3d(-100px, -100px, 0)",
      }}
    >
      <span
        className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/90"
        style={lineStyle}
      />
      <span
        className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-white/90"
        style={lineStyle}
      />
      <CursorTargetIcon className="absolute inset-0 h-full w-full opacity-95 mix-blend-screen drop-shadow-[0_0_10px_rgba(204,93,232,0.65)]" />
    </div>
  );
}
