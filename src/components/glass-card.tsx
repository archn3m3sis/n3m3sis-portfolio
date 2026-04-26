"use client";

import type { CSSProperties, MouseEvent as ReactMouseEvent, ReactNode } from "react";
import { useRef } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

/**
 * Centered frosted-glass card with mouse-aware border lighting.
 * - Always-on 1px white perimeter rim.
 * - Cursor-aware bright core that follows the mouse along the border.
 * - Soft interior bloom near the cursor.
 * No content layout assumptions; whatever you pass as children renders
 * centered (flex items-center justify-center on the section itself).
 */
export function GlassCard({ children, className }: Props) {
  const cardRef = useRef<HTMLElement>(null);

  const onMouseMove = (e: ReactMouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const onMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--mx", "-9999px");
    card.style.setProperty("--my", "-9999px");
  };

  return (
    <section
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={
        {
          "--mx": "-9999px",
          "--my": "-9999px",
        } as CSSProperties
      }
      className={[
        "pointer-events-auto group/card relative w-full",
        "flex items-center justify-center",
        "rounded-3xl",
        "border border-white/10",
        "bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]",
        "backdrop-blur-2xl backdrop-saturate-150",
        "shadow-2xl shadow-black/70",
        "ring-1 ring-inset ring-white/5",
        className ?? "",
      ].join(" ")}
    >
      {/* ALWAYS-ON RIM */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background: "rgba(255,255,255,0.45)",
          padding: "1px",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
        }}
      />

      {/* CURSOR CORE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx) var(--my), rgba(255,255,255,1.0), rgba(255,255,255,0) 45%)",
          padding: "1.5px",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
        }}
      />

      {/* INTERIOR BLOOM */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background:
            "radial-gradient(540px circle at var(--mx) var(--my), rgba(255,255,255,0.08), transparent 50%)",
        }}
      />

      {/* Top-edge highlight bar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      <div className="relative z-10 flex w-full items-center justify-center">
        {children}
      </div>
    </section>
  );
}
