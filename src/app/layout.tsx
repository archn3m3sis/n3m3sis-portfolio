import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { Cursor } from "@/components/cursor";
import { EastPointerIcon } from "@/components/icons/east-pointer";
import { NorthPointerIcon } from "@/components/icons/north-pointer";
import { SouthPointerIcon } from "@/components/icons/south-pointer";
import { WestPointerIcon } from "@/components/icons/west-pointer";
import { PillarField } from "@/components/pillar-field";
import { cn } from "@/lib/utils";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "archn3m3sis",
  description:
    "Defense-tech engineering, security research, and long-form technical writing.",
  metadataBase: new URL("https://www.archn3m3sis.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        geistSans.variable,
        geistMono.variable,
        jetbrainsMono.variable,
        "font-mono",
      )}
    >
      <head>
        <script src="/audience-preload.js" />
      </head>
      <body suppressHydrationWarning>
        <PillarField />
        {children}
        {/* Compass pointers — site-wide directional markers, blended with the
            background. They sit at the four cardinal edges and use mix-blend
            so they read as ambient rather than UI. */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 top-0 z-30 flex justify-center pt-2 opacity-50 mix-blend-screen"
        >
          <NorthPointerIcon size={44} />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center pb-2 opacity-50 mix-blend-screen"
        >
          <SouthPointerIcon size={44} />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-y-0 right-0 z-30 flex items-center pr-2 opacity-50 mix-blend-screen"
        >
          <EastPointerIcon size={44} />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-y-0 left-0 z-30 flex items-center pl-2 opacity-50 mix-blend-screen"
        >
          <WestPointerIcon size={44} />
        </div>
        <Cursor />
      </body>
    </html>
  );
}
