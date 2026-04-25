"use client";

import { AUDIENCES, type Audience, useAudienceStore } from "@/lib/audience";

export default function HomePage() {
  const setAudience = useAudienceStore((s) => s.setAudience);
  const current = useAudienceStore((s) => s.audience);

  const onPick = (id: Audience) => {
    setAudience(id);
  };

  return (
    <main className="pointer-events-none relative flex min-h-screen w-full items-center justify-center px-4 py-12 md:px-6 md:py-16">
      {/* Frosted-glass card. Holds all homepage content. */}
      <section
        className={[
          "pointer-events-auto relative w-full max-w-2xl",
          "rounded-2xl",
          // Layered glass surface: a subtle white tint over a darker base,
          // heavy backdrop blur + saturation so colors behind feel vivid.
          "border border-white/10",
          "bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]",
          "backdrop-blur-2xl backdrop-saturate-150",
          // Depth: outer drop shadow + inner highlight along the top edge
          // (the inset shadow simulates the bevel of real glass).
          "shadow-2xl shadow-black/60",
          "ring-1 ring-inset ring-white/5",
          "p-7 md:p-10",
        ].join(" ")}
      >
        {/* Subtle top-edge highlight — gives the glass a lit-edge look. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />

        <header className="mb-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-muted-foreground">
            archn3m3sis
          </p>
          <h1 className="mt-3 text-balance font-mono text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
            Who Are You and What Brings You Here?
          </h1>
        </header>

        <ul className="flex flex-col gap-2">
          {AUDIENCES.map((a) => {
            const isActive = current === a.id;
            return (
              <li key={a.id}>
                <label
                  className={[
                    "group flex w-full cursor-pointer items-start gap-3 rounded-md border px-4 py-3 transition-colors",
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
      </section>
    </main>
  );
}
