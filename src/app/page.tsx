import type { ReactNode } from "react";
import { GlassCard } from "@/components/glass-card";
import { EnvelopeHomeIcon } from "@/components/icons/envelope-home";
import { GreenJournalIcon } from "@/components/icons/green-journal";
import { JournalGlowIcon } from "@/components/icons/journal-glow";
import { KeyGearIcon } from "@/components/icons/key-gear";
import { OpenBookIcon } from "@/components/icons/open-book";

// 10x10 = 100 slots. Cells without an entry render as empty glass tiles.
const SLOTS: ReactNode[] = [
  <OpenBookIcon key="open-book" className="h-3/5 w-3/5" />,
  <GreenJournalIcon key="green-journal" className="h-3/5 w-3/5" />,
  <JournalGlowIcon key="journal-glow" className="h-3/5 w-3/5" />,
  <EnvelopeHomeIcon key="envelope-home" className="h-3/5 w-3/5" />,
  <KeyGearIcon key="key-gear" className="h-3/5 w-3/5" />,
];

export default function HomePage() {
  return (
    <main className="pointer-events-none relative flex min-h-screen w-full items-center justify-center px-4 py-8 md:px-8 md:py-12">
      <div className="grid w-full max-w-5xl grid-cols-10 gap-1.5 sm:gap-2">
        {Array.from({ length: 100 }, (_, i) => (
          <GlassCard
            // biome-ignore lint/suspicious/noArrayIndexKey: fixed-length 10x10 grid; index is stable
            key={i}
            className="aspect-square"
          >
            {SLOTS[i] ?? null}
          </GlassCard>
        ))}
      </div>
    </main>
  );
}
