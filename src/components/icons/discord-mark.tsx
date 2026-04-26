type Props = {
  className?: string;
  size?: number;
};

export function DiscordMarkIcon({ className, size = 48 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="dc_g1" x1="7.231" x2="42.022" y1="-15.736" y2="79.851" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#262626" stopOpacity="0"/>
        <stop offset="1" stopColor="#262626" stopOpacity=".8"/>
      </linearGradient>
      <path fill="url(#dc_g1)" d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14 c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22 c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5 c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z"/>
      <linearGradient id="dc_g2" x1="14.278" x2="21.77" y1="17.147" y2="37.731" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#262626" stopOpacity="0"/>
        <stop offset="1" stopColor="#262626" stopOpacity=".8"/>
      </linearGradient>
      <ellipse cx="17.5" cy="26" fill="url(#dc_g2)" rx="3.5" ry="4"/>
      <linearGradient id="dc_g3" x1="27.278" x2="34.77" y1="17.147" y2="37.731" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#262626" stopOpacity="0"/>
        <stop offset="1" stopColor="#262626" stopOpacity=".8"/>
      </linearGradient>
      <ellipse cx="30.5" cy="26" fill="url(#dc_g3)" rx="3.5" ry="4"/>
    </svg>
  );
}
