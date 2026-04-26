import type { ReactNode } from "react";
import { GlassCard } from "@/components/glass-card";
import { BarChartIcon } from "@/components/icons/bar-chart";
import { ChatBubbleIcon } from "@/components/icons/chat-bubble";
import { CodeMonitorIcon } from "@/components/icons/code-monitor";
import { CursorClipIcon } from "@/components/icons/cursor-clip";
import { DatabaseIcon } from "@/components/icons/database";
import { EnvelopeHomeIcon } from "@/components/icons/envelope-home";
import { FlagPinIcon } from "@/components/icons/flag-pin";
import { FolderFlameIcon } from "@/components/icons/folder-flame";
import { GreenJournalIcon } from "@/components/icons/green-journal";
import { HeartPinIcon } from "@/components/icons/heart-pin";
import { JournalGlowIcon } from "@/components/icons/journal-glow";
import { KeyGearIcon } from "@/components/icons/key-gear";
import { KioskPinIcon } from "@/components/icons/kiosk-pin";
import { LayoutWindowIcon } from "@/components/icons/layout-window";
import { LifebuoyIcon } from "@/components/icons/lifebuoy";
import { LightbulbIcon } from "@/components/icons/lightbulb";
import { LockShieldIcon } from "@/components/icons/lock-shield";
import { MagnifierIcon } from "@/components/icons/magnifier";
import { OpenBookIcon } from "@/components/icons/open-book";
import { ShieldIcon } from "@/components/icons/shield";
import { TargetTentIcon } from "@/components/icons/target-tent";
import { WideMonitorIcon } from "@/components/icons/wide-monitor";
import { WrenchIcon } from "@/components/icons/wrench";

// 10x10 = 100 slots. Cells without an entry render as empty glass tiles.
const SLOTS: ReactNode[] = [
  <OpenBookIcon key="open-book" className="h-3/5 w-3/5" />,
  <GreenJournalIcon key="green-journal" className="h-3/5 w-3/5" />,
  <JournalGlowIcon key="journal-glow" className="h-3/5 w-3/5" />,
  <EnvelopeHomeIcon key="envelope-home" className="h-3/5 w-3/5" />,
  <KeyGearIcon key="key-gear" className="h-3/5 w-3/5" />,
  <KioskPinIcon key="kiosk-pin" className="h-3/5 w-3/5" />,
  <ShieldIcon key="shield" className="h-3/5 w-3/5" />,
  <TargetTentIcon key="target-tent" className="h-3/5 w-3/5" />,
  <BarChartIcon key="bar-chart" className="h-3/5 w-3/5" />,
  <ChatBubbleIcon key="chat-bubble" className="h-3/5 w-3/5" />,
  <CodeMonitorIcon key="code-monitor" className="h-3/5 w-3/5" />,
  <MagnifierIcon key="magnifier" className="h-3/5 w-3/5" />,
  <LightbulbIcon key="lightbulb" className="h-3/5 w-3/5" />,
  <WrenchIcon key="wrench" className="h-3/5 w-3/5" />,
  <LayoutWindowIcon key="layout-window" className="h-3/5 w-3/5" />,
  <FolderFlameIcon key="folder-flame" className="h-3/5 w-3/5" />,
  <DatabaseIcon key="database" className="h-3/5 w-3/5" />,
  <HeartPinIcon key="heart-pin" className="h-3/5 w-3/5" />,
  <WideMonitorIcon key="wide-monitor" className="h-3/5 w-3/5" />,
  <LifebuoyIcon key="lifebuoy" className="h-3/5 w-3/5" />,
  <LockShieldIcon key="lock-shield" className="h-3/5 w-3/5" />,
  <CursorClipIcon key="cursor-clip" className="h-3/5 w-3/5" />,
  <FlagPinIcon key="flag-pin" className="h-3/5 w-3/5" />,
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
