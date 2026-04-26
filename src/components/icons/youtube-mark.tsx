import { MarkStops } from "./_mark-stops";

type Props = {
  className?: string;
  size?: number;
  colored?: boolean;
};

export function YouTubeMarkIcon({ className, size = 48, colored }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="yt_g1" x1="18.802" x2="31.291" y1="7.723" y2="42.037" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <polygon fill="url(#yt_g1)" points="20,31 20,17 32,24"/>
      <linearGradient id="yt_g2" x1="24" x2="24" y1="1.411" y2="51.407" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <path fill="url(#yt_g2)" d="M43.06,14.7c-0.517-2.353-2.454-4.127-4.828-4.543C31.636,9,24,9,24,9S13,9,6,11 c-1.522,4.186-2,9-2,13c0,2.86,0.244,6.135,0.94,9.3c0.517,2.353,2.454,4.127,4.828,4.543C16.364,39,24,39,24,39s11,0,18-2 c1.522-4.186,2-9,2-13C44,21.14,43.756,17.865,43.06,14.7z"/>
    </svg>
  );
}
