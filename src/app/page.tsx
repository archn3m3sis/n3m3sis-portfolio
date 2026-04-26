import type { ReactNode } from "react";
import { GlassCard } from "@/components/glass-card";
import { ArrowStackIcon } from "@/components/icons/arrow-stack";
import { BarChartIcon } from "@/components/icons/bar-chart";
import { BoxPuzzleIcon } from "@/components/icons/box-puzzle";
import { CalendarGridIcon } from "@/components/icons/calendar-grid";
import { CalendarPinkIcon } from "@/components/icons/calendar-pink";
import { ChatBubbleIcon } from "@/components/icons/chat-bubble";
import { ClockToggleIcon } from "@/components/icons/clock-toggle";
import { CloudArrowIcon } from "@/components/icons/cloud-arrow";
import { ClownIcon } from "@/components/icons/clown";
import { CodeMonitorIcon } from "@/components/icons/code-monitor";
import { CometIcon } from "@/components/icons/comet";
import { CompassPointerIcon } from "@/components/icons/compass-pointer";
import { CubeFlameIcon } from "@/components/icons/cube-flame";
import { CursorClipIcon } from "@/components/icons/cursor-clip";
import { DanceFlameIcon } from "@/components/icons/dance-flame";
import { DatabaseIcon } from "@/components/icons/database";
import { DiagonalBannerIcon } from "@/components/icons/diagonal-banner";
import { DocumentSearchIcon } from "@/components/icons/document-search";
import { DoubleArrowIcon } from "@/components/icons/double-arrow";
import { DownloadCardIcon } from "@/components/icons/download-card";
import { EnvelopeHomeIcon } from "@/components/icons/envelope-home";
import { FigureFlagIcon } from "@/components/icons/figure-flag";
import { FlagPinIcon } from "@/components/icons/flag-pin";
import { FolderFlameIcon } from "@/components/icons/folder-flame";
import { GreenJournalIcon } from "@/components/icons/green-journal";
import { HeadphonesIcon } from "@/components/icons/headphones";
import { HeartPinIcon } from "@/components/icons/heart-pin";
import { JournalGlowIcon } from "@/components/icons/journal-glow";
import { KeyGearIcon } from "@/components/icons/key-gear";
import { KeyboardDotsIcon } from "@/components/icons/keyboard-dots";
import { KioskPinIcon } from "@/components/icons/kiosk-pin";
import { LayoutWindowIcon } from "@/components/icons/layout-window";
import { LeafShapeIcon } from "@/components/icons/leaf-shape";
import { LetterDIcon } from "@/components/icons/letter-d";
import { LetterNIcon } from "@/components/icons/letter-n";
import { LetterTIcon } from "@/components/icons/letter-t";
import { LetterWIcon } from "@/components/icons/letter-w";
import { LetterXIcon } from "@/components/icons/letter-x";
import { LifebuoyIcon } from "@/components/icons/lifebuoy";
import { LightbulbIcon } from "@/components/icons/lightbulb";
import { LockShieldIcon } from "@/components/icons/lock-shield";
import { MagnifierIcon } from "@/components/icons/magnifier";
import { OpenBookIcon } from "@/components/icons/open-book";
import { PageFlagIcon } from "@/components/icons/page-flag";
import { PhotoStackIcon } from "@/components/icons/photo-stack";
import { PowerPointIcon } from "@/components/icons/powerpoint";
import { QuadFanIcon } from "@/components/icons/quad-fan";
import { ScreenTextIcon } from "@/components/icons/screen-text";
import { ServerStackIcon } from "@/components/icons/server-stack";
import { ShieldIcon } from "@/components/icons/shield";
import { SparkleBulbIcon } from "@/components/icons/sparkle-bulb";
import { SparkleStarIcon } from "@/components/icons/sparkle-star";
import { SunMagnifierIcon } from "@/components/icons/sun-magnifier";
import { TargetTentIcon } from "@/components/icons/target-tent";
import { UrgentMailIcon } from "@/components/icons/urgent-mail";
import { WalletIcon } from "@/components/icons/wallet";
import { WandBurstIcon } from "@/components/icons/wand-burst";
import { WatchFaceIcon } from "@/components/icons/watch-face";
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
  <ServerStackIcon key="server-stack" className="h-3/5 w-3/5" />,
  <CometIcon key="comet" className="h-3/5 w-3/5" />,
  <HeadphonesIcon key="headphones" className="h-3/5 w-3/5" />,
  <PageFlagIcon key="page-flag" className="h-3/5 w-3/5" />,
  <DanceFlameIcon key="dance-flame" className="h-3/5 w-3/5" />,
  <CubeFlameIcon key="cube-flame" className="h-3/5 w-3/5" />,
  <ClownIcon key="clown" className="h-3/5 w-3/5" />,
  <SunMagnifierIcon key="sun-magnifier" className="h-3/5 w-3/5" />,
  <FigureFlagIcon key="figure-flag" className="h-3/5 w-3/5" />,
  <BoxPuzzleIcon key="box-puzzle" className="h-3/5 w-3/5" />,
  <WalletIcon key="wallet" className="h-3/5 w-3/5" />,
  <ArrowStackIcon key="arrow-stack" className="h-3/5 w-3/5" />,
  <ScreenTextIcon key="screen-text" className="h-3/5 w-3/5" />,
  <CalendarGridIcon key="calendar-grid" className="h-3/5 w-3/5" />,
  <DocumentSearchIcon key="document-search" className="h-3/5 w-3/5" />,
  <DoubleArrowIcon key="double-arrow" className="h-3/5 w-3/5" />,
  <SparkleStarIcon key="sparkle-star" className="h-3/5 w-3/5" />,
  <CloudArrowIcon key="cloud-arrow" className="h-3/5 w-3/5" />,
  <WandBurstIcon key="wand-burst" className="h-3/5 w-3/5" />,
  <DownloadCardIcon key="download-card" className="h-3/5 w-3/5" />,
  <DiagonalBannerIcon key="diagonal-banner" className="h-3/5 w-3/5" />,
  <CalendarPinkIcon key="calendar-pink" className="h-3/5 w-3/5" />,
  <PhotoStackIcon key="photo-stack" className="h-3/5 w-3/5" />,
  <SparkleBulbIcon key="sparkle-bulb" className="h-3/5 w-3/5" />,
  <ClockToggleIcon key="clock-toggle" className="h-3/5 w-3/5" />,
  <QuadFanIcon key="quad-fan" className="h-3/5 w-3/5" />,
  <LetterTIcon key="letter-t" className="h-3/5 w-3/5" />,
  <LetterNIcon key="letter-n" className="h-3/5 w-3/5" />,
  <LetterWIcon key="letter-w" className="h-3/5 w-3/5" />,
  <LetterDIcon key="letter-d" className="h-3/5 w-3/5" />,
  <LetterXIcon key="letter-x" className="h-3/5 w-3/5" />,
  <KeyboardDotsIcon key="keyboard-dots" className="h-3/5 w-3/5" />,
  <LeafShapeIcon key="leaf-shape" className="h-3/5 w-3/5" />,
  <CompassPointerIcon key="compass-pointer" className="h-3/5 w-3/5" />,
  <UrgentMailIcon key="urgent-mail" className="h-3/5 w-3/5" />,
  <PowerPointIcon key="powerpoint" className="h-3/5 w-3/5" />,
  <WatchFaceIcon key="watch-face" className="h-3/5 w-3/5" />,
];

export default function HomePage() {
  return (
    <main className="pointer-events-none relative flex min-h-screen w-full items-center justify-center px-4 py-8 md:px-8 md:py-12">
      <div className="grid w-full max-w-5xl grid-cols-10 gap-1.5 sm:gap-2">
        {Array.from({ length: 100 }, (_, i) => {
          const row = Math.floor(i / 10) + 1;
          const col = (i % 10) + 1;
          return (
            <GlassCard
              // biome-ignore lint/suspicious/noArrayIndexKey: fixed-length 10x10 grid; index is stable
              key={i}
              className="aspect-square"
              coord={`R${row}C${col}`}
            >
              {SLOTS[i] ?? null}
            </GlassCard>
          );
        })}
      </div>
    </main>
  );
}
