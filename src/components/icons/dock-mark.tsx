import { MarkStops } from "./_mark-stops";

type Props = {
  className?: string;
  size?: number;
  colored?: boolean;
};

export function DockMarkIcon({ className, size = 48, colored }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="dk_g1" x1="4.592" x2="44.13" y1="6.313" y2="45.851" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <path fill="url(#dk_g1)" d="M40,20c0.391-1.735-0.092-3.78-2.5-6c-3.914,3.543-2.795,7.227-1.5,9c0,0-0.166,1-4,1 S2,24,2,24S0.167,40,18,40c15.593,0,19.973-12.003,20.828-15.076C39.182,24.972,39.579,25.003,40,25c2.147-0.017,4.93-1.171,6-5.484 C43.162,18.533,41.339,18.978,40,20z"/>
      <linearGradient id="dk_g2" x1="13.602" x2="19.537" y1="28.602" y2="34.537" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <circle cx="17" cy="32" r="2" fill="url(#dk_g2)"/>
      <linearGradient id="dk_g3" x1="4.704" x2="14.458" y1="29.874" y2="39.627" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <path fill="url(#dk_g3)" d="M5.602,35.495c1.172,1.271,2.712,2.394,4.741,3.201c0.502-0.142,0.968-0.292,1.397-0.445 c1.823-0.648,2.526-2.859,1.457-4.471l-0.299-0.45C12.743,33.432,10.026,35.147,5.602,35.495z"/>
      <linearGradient id="dk_g4" x1="2.531" x2="12.758" y1="15.531" y2="25.758" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <rect width="5" height="5" x="6" y="19" fill="url(#dk_g4)"/>
      <linearGradient id="dk_g5" x1="7.531" x2="17.758" y1="15.531" y2="25.758" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <rect width="5" height="5" x="11" y="19" fill="url(#dk_g5)"/>
      <linearGradient id="dk_g6" x1="12.531" x2="22.758" y1="15.531" y2="25.758" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <rect width="5" height="5" x="16" y="19" fill="url(#dk_g6)"/>
      <linearGradient id="dk_g7" x1="17.531" x2="27.758" y1="15.531" y2="25.758" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <rect width="5" height="5" x="21" y="19" fill="url(#dk_g7)"/>
      <linearGradient id="dk_g8" x1="7.531" x2="17.758" y1="10.531" y2="20.758" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <rect width="5" height="5" x="11" y="14" fill="url(#dk_g8)"/>
      <linearGradient id="dk_g9" x1="12.531" x2="22.758" y1="10.531" y2="20.758" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <rect width="5" height="5" x="16" y="14" fill="url(#dk_g9)"/>
      <linearGradient id="dk_g10" x1="17.531" x2="27.758" y1="10.531" y2="20.758" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <rect width="5" height="5" x="21" y="14" fill="url(#dk_g10)"/>
      <linearGradient id="dk_g11" x1="17.531" x2="27.758" y1="5.531" y2="15.758" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <rect width="5" height="5" x="21" y="9" fill="url(#dk_g11)"/>
      <linearGradient id="dk_g12" x1="22.531" x2="32.758" y1="15.531" y2="25.758" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <rect width="5" height="5" x="26" y="19" fill="url(#dk_g12)"/>
    </svg>
  );
}
