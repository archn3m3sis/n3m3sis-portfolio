"use client";

import type { CSSProperties, MouseEvent as ReactMouseEvent } from "react";
import { useRef } from "react";
import { JournalGlowIcon } from "@/components/icons/journal-glow";

export default function HomePage() {
  const cardRef = useRef<HTMLElement>(null);

  // Mouse-aware border glow: track cursor relative to the card and write
  // its position into CSS custom properties.
  const onCardMouseMove = (e: ReactMouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const onCardMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--mx", "-9999px");
    card.style.setProperty("--my", "-9999px");
  };

  return (
    <main className="pointer-events-none relative flex min-h-screen w-full items-center justify-center px-4 py-12 md:px-8 md:py-16">
      <section
        ref={cardRef}
        onMouseMove={onCardMouseMove}
        onMouseLeave={onCardMouseLeave}
        style={
          {
            "--mx": "-9999px",
            "--my": "-9999px",
          } as CSSProperties
        }
        className={[
          "pointer-events-auto group/card relative w-full max-w-4xl",
          "min-h-[28rem] md:min-h-[32rem] lg:min-h-[36rem]",
          "flex items-center justify-center",
          "rounded-3xl",
          "border border-white/10",
          "bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]",
          "backdrop-blur-2xl backdrop-saturate-150",
          "shadow-2xl shadow-black/70",
          "ring-1 ring-inset ring-white/5",
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

        {/* CURSOR CORE — sharp 1.5px white band at cursor position. */}
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

        <JournalGlowIcon className="relative" size={180} />
      </section>
    </main>
  );
}
