import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
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
      </body>
    </html>
  );
}
