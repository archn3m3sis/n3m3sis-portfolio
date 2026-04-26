"use client";

import { useState } from "react";
import { DiscordMarkIcon } from "@/components/icons/discord-mark";
import { DockMarkIcon } from "@/components/icons/dock-mark";
import { GitMarkIcon } from "@/components/icons/git-mark";
import { GitHubMarkIcon } from "@/components/icons/github-mark";
import { GitLabMarkIcon } from "@/components/icons/gitlab-mark";
import { GmailMarkIcon } from "@/components/icons/gmail-mark";
import { LinkedInMarkIcon } from "@/components/icons/linkedin-mark";
import { PhoneMarkIcon } from "@/components/icons/phone-mark";
import { UsArmyMarkIcon } from "@/components/icons/usarmy-mark";
import { YouTubeMarkIcon } from "@/components/icons/youtube-mark";

type IconProps = { className?: string; size?: number; colored?: boolean };

type Item = {
  label: string;
  href: string;
  Icon: (props: IconProps) => React.ReactNode;
};

const ITEMS: Item[] = [
  { label: "GitLab", href: "https://git.archn3m3sis.com", Icon: GitLabMarkIcon },
  { label: "GitHub", href: "https://github.com/archn3m3sis", Icon: GitHubMarkIcon },
  { label: "Git", href: "https://git-scm.com", Icon: GitMarkIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: LinkedInMarkIcon },
  { label: "Email", href: "mailto:archn3m3sis.bounties@gmail.com", Icon: GmailMarkIcon },
  { label: "Phone", href: "tel:", Icon: PhoneMarkIcon },
  { label: "YouTube", href: "https://www.youtube.com", Icon: YouTubeMarkIcon },
  { label: "Discord", href: "https://discord.com", Icon: DiscordMarkIcon },
  { label: "U.S. Army", href: "https://www.army.mil", Icon: UsArmyMarkIcon },
  { label: "Dock", href: "/", Icon: DockMarkIcon },
];

export function TopBar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <header
      aria-label="External links"
      className="pointer-events-none fixed inset-x-0 top-0 z-40 flex items-center justify-between px-8 pt-4 md:px-16 md:pt-6"
    >
      {ITEMS.map(({ label, href, Icon }, i) => {
        const external = href.startsWith("http");
        const active = activeIndex === i;
        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex((prev) => (prev === i ? null : prev))}
            onFocus={() => setActiveIndex(i)}
            onBlur={() => setActiveIndex((prev) => (prev === i ? null : prev))}
            className="pointer-events-auto inline-flex items-center justify-center transition-transform duration-200 hover:scale-110"
          >
            <Icon
              size={88}
              colored={active}
              className="opacity-90 transition-all duration-300 ease-out"
            />
          </a>
        );
      })}
    </header>
  );
}
