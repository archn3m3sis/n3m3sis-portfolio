import { GlassCard } from "@/components/glass-card";
import { EnvelopeHomeIcon } from "@/components/icons/envelope-home";
import { GreenJournalIcon } from "@/components/icons/green-journal";
import { JournalGlowIcon } from "@/components/icons/journal-glow";
import { KeyGearIcon } from "@/components/icons/key-gear";
import { OpenBookIcon } from "@/components/icons/open-book";

export default function HomePage() {
  return (
    <main className="pointer-events-none relative flex min-h-screen w-full items-center justify-center px-4 py-12 md:px-8 md:py-16">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
        <GlassCard className="aspect-square">
          <OpenBookIcon size={140} />
        </GlassCard>

        <GlassCard className="aspect-square">
          <GreenJournalIcon size={140} />
        </GlassCard>

        <GlassCard className="aspect-square">
          <JournalGlowIcon size={140} />
        </GlassCard>

        <GlassCard className="aspect-square">
          <EnvelopeHomeIcon size={140} />
        </GlassCard>

        <GlassCard className="aspect-square">
          <KeyGearIcon size={140} />
        </GlassCard>
      </div>
    </main>
  );
}
