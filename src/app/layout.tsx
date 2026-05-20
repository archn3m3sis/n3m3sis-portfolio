import type { Metadata } from "next";
import { Smooch, Smooch_Sans } from "next/font/google";
import "./globals.css";

const smooch = Smooch({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handle",
});

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  variable: "--font-header",
});

export const metadata: Metadata = {
  title: "n3m3sis portfolio",
  description:
    "Developer portfolio and blog content from Kyle Hurston. Content found within the website includes but isn't limited to defense-tech engineering, security research, and long-form technical writing.",
  metadataBase: new URL("https://www.archn3m3sis.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${smooch.variable} ${smoochSans.variable}`}
    >
      <body suppressHydrationWarning className="bg-black">
        <header
          className="flex items-center gap-12 px-10 text-white"
          style={{ fontFamily: "var(--font-header)" }}
        >
          <div
            className="text-base"
            style={{ fontFamily: "var(--font-handle)" }}
          >
            @Archn3m3sis | Project: DevSec-Corner
          </div>
        </header>
      </body>
    </html>
  );
}
