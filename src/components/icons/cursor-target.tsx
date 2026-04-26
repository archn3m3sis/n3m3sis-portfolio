type Props = {
  className?: string;
  size?: number;
};

export function CursorTargetIcon({ className, size = 48 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="ct_g1" x1="24" x2="24" y1="52.28" y2="-9.202" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#962aff"/>
        <stop offset=".137" stopColor="#9f3eff"/>
        <stop offset=".535" stopColor="#b572ff"/>
        <stop offset=".835" stopColor="#c493ff"/>
        <stop offset="1" stopColor="#c99fff"/>
      </linearGradient>
      <path fill="url(#ct_g1)" d="M24,6C14.059,6,6,14.059,6,24s8.059,18,18,18s18-8.059,18-18S33.941,6,24,6z M24,38 c-7.732,0-14-6.268-14-14s6.268-14,14-14s14,6.268,14,14S31.732,38,24,38z"/>
      <linearGradient id="ct_g2" x1="24" x2="24" y1="18.538" y2=".803" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#4eaefe" stopOpacity=".2"/>
        <stop offset="1" stopColor="#41a2fe" stopOpacity=".4"/>
      </linearGradient>
      <path fill="url(#ct_g2)" d="M23,14h2c0.552,0,1-0.448,1-1V3c0-0.552-0.448-1-1-1h-2c-0.552,0-1,0.448-1,1v10 C22,13.552,22.448,14,23,14z"/>
      <linearGradient id="ct_g3" x1="24" x2="24" y1="50.538" y2="32.803" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#4eaefe" stopOpacity=".2"/>
        <stop offset="1" stopColor="#41a2fe" stopOpacity=".4"/>
      </linearGradient>
      <path fill="url(#ct_g3)" d="M23,46h2c0.552,0,1-0.448,1-1V35c0-0.552-0.448-1-1-1h-2c-0.552,0-1,0.448-1,1v10 C22,45.552,22.448,46,23,46z"/>
      <linearGradient id="ct_g5" x1="24" x2="24" y1="18.538" y2=".803" gradientTransform="rotate(90 24 24)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#4eaefe" stopOpacity=".2"/>
        <stop offset="1" stopColor="#41a2fe" stopOpacity=".4"/>
      </linearGradient>
      <path fill="url(#ct_g5)" d="M34,23v2c0,0.552,0.448,1,1,1h10c0.552,0,1-0.448,1-1v-2c0-0.552-0.448-1-1-1H35 C34.448,22,34,22.448,34,23z"/>
      <linearGradient id="ct_g6" x1="24" x2="24" y1="50.538" y2="32.803" gradientTransform="rotate(90 24 24)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#4eaefe" stopOpacity=".2"/>
        <stop offset="1" stopColor="#41a2fe" stopOpacity=".4"/>
      </linearGradient>
      <path fill="url(#ct_g6)" d="M2,23v2c0,0.552,0.448,1,1,1h10c0.552,0,1-0.448,1-1v-2c0-0.552-0.448-1-1-1H3 C2.448,22,2,22.448,2,23z"/>
    </svg>
  );
}
