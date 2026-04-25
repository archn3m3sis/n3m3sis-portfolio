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
      <div className="w-full max-w-3xl">
        <header className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-muted-foreground">
            archn3m3sis
          </p>
          <h1 className="mt-4 text-balance font-mono text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Who Are You and What Brings You Here?
          </h1>
        </header>

        <ul className="flex flex-col gap-2">
          {AUDIENCES.map((a) => {
            const isActive = current === a.id;
            return (
              <li key={a.id}>
                <label
                  className={
                    "pointer-events-auto group flex w-full cursor-pointer items-start gap-3 rounded-sm border px-4 py-3 backdrop-blur-md transition-colors " +
                    "border-border bg-card/50 hover:border-primary/60 hover:bg-card/70 " +
                    (isActive ? "border-primary bg-card/85" : "")
                  }
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
                    className={
                      "mt-0.5 flex h-4 w-4 flex-none items-center justify-center border font-mono text-xs leading-none " +
                      (isActive
                        ? "border-primary bg-primary/20 text-primary"
                        : "border-muted-foreground/60 text-transparent group-hover:border-primary/70")
                    }
                  >
                    {isActive ? "x" : ""}
                  </span>
                  <span className="text-sm text-foreground/90 md:text-base">
                    {a.label}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
