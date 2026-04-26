import { GlassCard } from "@/components/glass-card";
import { GreenJournalIcon } from "@/components/icons/green-journal";
import { OpenBookIcon } from "@/components/icons/open-book";

export default function HomePage() {
  return (
    <main className="pointer-events-none relative flex min-h-screen w-full flex-col items-center justify-center gap-6 px-4 py-12 md:gap-8 md:px-8 md:py-16">
      <GlassCard className="min-h-[16rem] md:min-h-[18rem] lg:min-h-[20rem]">
        <OpenBookIcon size={180} />
      </GlassCard>

      <GlassCard className="min-h-[16rem] md:min-h-[18rem] lg:min-h-[20rem]">
        <GreenJournalIcon size={180} />
      </GlassCard>
    </main>
  );
}
