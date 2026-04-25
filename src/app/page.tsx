"use client";

import type { CSSProperties, MouseEvent as ReactMouseEvent } from "react";
import { useRef } from "react";
import { AUDIENCES, type Audience, useAudienceStore } from "@/lib/audience";

export default function HomePage() {
  const setAudience = useAudienceStore((s) => s.setAudience);
  const current = useAudienceStore((s) => s.audience);

  const cardRef = useRef<HTMLElement>(null);

  // Mouse-aware border glow: track cursor relative to the card and write
  // its position into CSS custom properties. The border-glow layer reads
  // them via a radial-gradient anchored at (--mx, --my).
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
    // Park the spotlight off-card so the glow fades.
    card.style.setProperty("--mx", "-9999px");
    card.style.setProperty("--my", "-9999px");
  };

  const onPick = (id: Audience) => {
    setAudience(id);
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
          "rounded-3xl",
          "border border-white/10",
          "bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]",
          "backdrop-blur-2xl backdrop-saturate-150",
          "shadow-2xl shadow-black/70",
          "ring-1 ring-inset ring-white/5",
          // Heavy padding all around. Inner content can never touch any
          // edge of the glass surface on any viewport.
          "px-16 py-16 sm:px-20 sm:py-20 md:px-28 md:py-24 lg:px-32 lg:py-28",
        ].join(" ")}
      >
        {/* MOUSE-AWARE BORDER GLOW
            Layered ring sitting just inside the card edge. Background is
            a radial gradient anchored at the cursor; mask trick exposes
            only a ~1.5px perimeter ring so the gradient appears as a
            spotlight that travels around the border with the mouse. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx) var(--my), rgba(160,200,255,0.55), rgba(160,200,255,0) 45%)",
            padding: "1.5px",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            maskComposite: "exclude",
          }}
        />

        {/* SOFT INTERIOR SPOTLIGHT
            A wide, low-opacity radial bloom that brightens the glass
            surface near the cursor. Sits behind the content. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{
            background:
              "radial-gradient(540px circle at var(--mx) var(--my), rgba(255,255,255,0.06), transparent 50%)",
          }}
        />

        {/* Top-edge highlight bar — the lit bevel of real glass. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />

        <div className="relative">
          <header className="mb-10 text-center md:mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-muted-foreground">
              archn3m3sis
            </p>
            <h1 className="mt-4 text-balance font-mono text-lg font-semibold leading-tight tracking-tight text-foreground sm:text-xl md:text-2xl lg:text-3xl">
              Who Are You and What Brings You Here?
            </h1>
          </header>

          {/* Tile column is explicitly narrower than the card's padded
              interior. mx-auto centers it, so there is always visible
              glass surface to the LEFT and RIGHT of every tile, in
              addition to the outer card padding. */}
          <ul className="mx-auto flex w-full max-w-md flex-col gap-3 sm:max-w-lg">
            {AUDIENCES.map((a) => {
              const isActive = current === a.id;
              return (
                <li key={a.id}>
                  <label
                    className={[
                      // Layered glass tile inside the outer glass card.
                      "group/tile relative flex w-full cursor-pointer items-start gap-4 overflow-hidden rounded-xl",
                      // Glass body: gradient + ring + border + drop shadow
                      // so each tile reads as its own surface, not flat fill.
                      "border border-white/10 ring-1 ring-inset ring-white/[0.04]",
                      "bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))]",
                      "shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]",
                      "px-5 py-4 md:px-6 md:py-5",
                      "transition-colors duration-200",
                      "hover:border-primary/60 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))]",
                      isActive
                        ? "border-primary/80 bg-[linear-gradient(135deg,rgba(140,200,255,0.18),rgba(140,200,255,0.04))] ring-primary/30"
                        : "",
                    ].join(" ")}
                  >
                    {/* Top-edge highlight on each tile. */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />

                    <input
                      type="radio"
                      name="audience"
                      value={a.id}
                      checked={isActive}
                      onChange={() => onPick(a.id)}
                      className="sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className={[
                        "mt-0.5 flex h-4 w-4 flex-none items-center justify-center border font-mono text-xs leading-none",
                        isActive
                          ? "border-primary bg-primary/20 text-primary"
                          : "border-muted-foreground/60 text-transparent group-hover/tile:border-primary/70",
                      ].join(" ")}
                    >
                      {isActive ? "x" : ""}
                    </span>
                    <span className="text-sm text-foreground/95 md:text-[15px]">
                      {a.label}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
