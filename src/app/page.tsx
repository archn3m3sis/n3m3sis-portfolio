"use client";

import { AUDIENCES, type Audience, useAudienceStore } from "@/lib/audience";

export default function HomePage() {
  const setAudience = useAudienceStore((s) => s.setAudience);
  const current = useAudienceStore((s) => s.audience);

  const onPick = (id: Audience) => {
    setAudience(id);
  };

  return (
    <main className="pointer-events-none relative flex min-h-screen w-full items-center justify-center px-6 py-16">
      <div className="w-full max-w-4xl">
        <header className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-muted-foreground">
            archn3m3sis
          </p>
          <h1 className="mt-4 text-balance font-mono text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Who are you, and what brings you here?
          </h1>
          <p className="mx-auto mt-4 max-w-prose text-pretty text-sm text-muted-foreground md:text-base">
            Pick the closest fit. Your choice tunes the site&apos;s tone and
            ordering — you can change it anytime.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {AUDIENCES.map((a, i) => {
            const isActive = current === a.id;
            const isOrphan =
              i === AUDIENCES.length - 1 && AUDIENCES.length % 2 === 1;
            return (
              <li key={a.id} className={isOrphan ? "md:col-span-2" : ""}>
                <button
                  type="button"
                  onClick={() => onPick(a.id)}
                  aria-pressed={isActive}
                  className={
                    "pointer-events-auto group relative flex w-full flex-col items-start gap-2 rounded-md border px-5 py-4 text-left backdrop-blur-md transition-colors " +
                    "border-border bg-card/50 hover:border-primary/60 hover:bg-card/80 " +
                    "aria-pressed:border-primary aria-pressed:bg-card/90"
                  }
                >
                  <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                    {a.label}
                  </span>
                  <span className="text-sm text-foreground/90 md:text-base">
                    {a.blurb}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {current && (
          <p className="mt-8 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Selected: <span className="text-primary">{current}</span>
          </p>
        )}
      </div>
    </main>
  );
}
