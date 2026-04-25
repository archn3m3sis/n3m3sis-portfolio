"use client";

import { AUDIENCES, type Audience, useAudienceStore } from "@/lib/audience";

export default function HomePage() {
  const setAudience = useAudienceStore((s) => s.setAudience);
  const current = useAudienceStore((s) => s.audience);

  const onPick = (id: Audience) => {
    setAudience(id);
  };

  return (
    <main className="pointer-events-none relative flex min-h-screen w-full items-center justify-center px-4 py-12 md:px-8 md:py-16">
      {/* Frosted-glass card. Holds all homepage content. */}
      <section
        className={[
          "pointer-events-auto relative w-full max-w-5xl",
          "rounded-3xl",
          // Layered glass surface.
          "border border-white/10",
          "bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]",
          "backdrop-blur-2xl backdrop-saturate-150",
          // Depth.
          "shadow-2xl shadow-black/70",
          "ring-1 ring-inset ring-white/5",
          // Outer card padding — frame around the inner content area.
          "px-10 py-14 sm:px-14 sm:py-20 md:px-20 md:py-24 lg:px-24 lg:py-28",
        ].join(" ")}
      >
        {/* Subtle top-edge highlight — gives the glass a lit-edge look. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />

        {/* Inner content column — narrower than the card's interior so
            there's guaranteed breathing room on every side, regardless
            of viewport width. */}
        <div className="mx-auto w-full max-w-2xl">
          <header className="mb-12 text-center md:mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-muted-foreground">
              archn3m3sis
            </p>
            <h1 className="mt-5 text-balance font-mono text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl md:text-3xl">
              Who Are You and What Brings You Here?
            </h1>
          </header>

          <ul className="flex flex-col gap-3">
            {AUDIENCES.map((a) => {
              const isActive = current === a.id;
              return (
                <li key={a.id}>
                  <label
                    className={[
                      "group flex w-full cursor-pointer items-start gap-4 rounded-lg border px-5 py-4 transition-colors md:px-6 md:py-5",
                      "border-white/10 bg-white/[0.03] hover:border-primary/60 hover:bg-white/[0.07]",
                      isActive ? "border-primary bg-primary/10" : "",
                    ].join(" ")}
                  >
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
                          : "border-muted-foreground/60 text-transparent group-hover:border-primary/70",
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
