type Props = {
  className?: string;
  size?: number;
};

export function MapIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="mp_g1" x1="29.468" x2="7.645" y1="21.143" y2="48.507" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#78e837"/>
        <stop offset=".238" stopColor="#5bdd46"/>
        <stop offset="1" stopColor="#00bc73"/>
      </linearGradient>
      <path fill="url(#mp_g1)" d="M31,15l-14-4L4.706,14.783C4.286,14.912,4,15.3,4,15.739v27.907 c0,0.673,0.651,1.154,1.294,0.956L17,41l14,4l12.294-3.783C43.714,41.088,44,40.7,44,40.261V12.354c0-0.673-0.651-1.154-1.294-0.956 L31,15z"/>
      <path fill="#04aa5f" d="M17,11v30l14,4V15L17,11z"/>
      <linearGradient id="mp_g2" x1="38.5" x2="38.5" y1="-4.123" y2="20.247" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#01fff7" stopOpacity=".3"/>
        <stop offset="1" stopColor="#01fff7" stopOpacity=".4"/>
      </linearGradient>
      <path fill="url(#mp_g2)" d="M38.5,0C33.806,0,30,3.829,30,8.551 c0,4.013,6.136,12.671,7.981,15.184c0.26,0.353,0.778,0.353,1.037,0C40.864,21.222,47,12.564,47,8.551C47,3.829,43.194,0,38.5,0z M38.5,12c-1.933,0-3.5-1.567-3.5-3.5S36.567,5,38.5,5S42,6.567,42,8.5S40.433,12,38.5,12z"/>
    </svg>
  );
}
