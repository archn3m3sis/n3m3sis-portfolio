import { DiscordMarkIcon } from "@/components/icons/discord-mark";
import { GitMarkIcon } from "@/components/icons/git-mark";
import { GitHubMarkIcon } from "@/components/icons/github-mark";
import { GitLabMarkIcon } from "@/components/icons/gitlab-mark";
import { GmailMarkIcon } from "@/components/icons/gmail-mark";
import { LinkedInMarkIcon } from "@/components/icons/linkedin-mark";
import { PhoneMarkIcon } from "@/components/icons/phone-mark";
import { UsArmyMarkIcon } from "@/components/icons/usarmy-mark";
import { YouTubeMarkIcon } from "@/components/icons/youtube-mark";

type Item = {
  label: string;
  href: string;
  Icon: (props: { className?: string; size?: number }) => React.ReactNode;
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
];

export function TopBar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
      <nav
        aria-label="External links"
        className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-2 py-1.5 backdrop-blur-md backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
      >
        {ITEMS.map(({ label, href, Icon }) => {
          const external = href.startsWith("http");
          return (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              className="group relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10"
            >
              <Icon
                size={22}
                className="opacity-80 transition-all duration-200 group-hover:opacity-100 group-hover:drop-shadow-[0_0_6px_rgba(201,159,255,0.6)]"
              />
            </a>
          );
        })}
      </nav>
    </header>
  );
}
