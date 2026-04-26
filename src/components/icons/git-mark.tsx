import { MarkStops } from "./_mark-stops";

type Props = {
  className?: string;
  size?: number;
  colored?: boolean;
};

export function GitMarkIcon({ className, size = 48, colored }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="gt_g1" x1="2.869" x2="56.556" y1="11.8" y2="42.796" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <path fill="url(#gt_g1)" d="M5.8,22.1C5.3,22.6,5,23.3,5,24s0.3,1.4,0.8,1.9l16.3,16.3l0,0C22.6,42.7,24,44,24,44 s1.4-1.3,1.9-1.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9c0-0.7-0.3-1.4-0.8-1.9L25.9,5.8C25.4,5.3,24,4,24,4L5.8,22.1z"/>
      <linearGradient id="gt_g2" x1="13.636" x2="34.839" y1="13.636" y2="34.839" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <path fill="url(#gt_g2)" d="M32,20c-0.356,0-0.695,0.061-1.024,0.149c0,0,0,0,0,0l-3.125-3.125 C27.397,18.733,25.853,20,24,20c-0.732,0-1.41-0.211-2-0.555v9.11c0,0,0,0,0.001,0C20.81,29.247,20,30.523,20,32 c0,2.209,1.791,4,4,4s4-1.791,4-4c0-1.477-0.81-2.753-2.001-3.446c0,0,0,0,0.001,0v-7.726l2.149,2.148c0,0,0,0,0-0.001 C28.061,23.305,28,23.644,28,24c0,2.209,1.791,4,4,4s4-1.791,4-4C36,21.791,34.209,20,32,20z"/>
      <linearGradient id="gt_g3" x1="11.809" x2="30.332" y1="3.809" y2="22.332" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <path fill="url(#gt_g3)" d="M24,12c-0.356,0-0.695,0.061-1.024,0.149c0,0,0,0,0,0l-3.563-3.563l-2.828,2.828l3.563,3.563 C20.061,15.305,20,15.644,20,16c0,2.209,1.791,4,4,4s4-1.791,4-4C28,13.791,26.209,12,24,12z"/>
    </svg>
  );
}
