type Props = {
  className?: string;
  size?: number;
};

export function UsArmyMarkIcon({ className, size = 48 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="ua_g1" x1="1.792" x2="58.216" y1="4.178" y2="36.755" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#262626" stopOpacity="0"/>
        <stop offset="1" stopColor="#262626" stopOpacity=".8"/>
      </linearGradient>
      <path fill="url(#ua_g1)" d="M34,31H10V7c0-2.209,1.791-4,4-4h24v24C38,29.209,36.209,31,34,31z"/>
      <linearGradient id="ua_g2" x1="7.45" x2="49.498" y1="30.445" y2="54.721" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#262626" stopOpacity="0"/>
        <stop offset="1" stopColor="#262626" stopOpacity=".8"/>
      </linearGradient>
      <path fill="url(#ua_g2)" d="M34,45H10v-6c0-2.209,1.791-4,4-4h24v6C38,43.209,36.209,45,34,45z"/>
      <linearGradient id="ua_g3" x1="10.877" x2="42.615" y1="-573.705" y2="-592.029" gradientTransform="matrix(1 0 0 -1 0 -563)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#262626" stopOpacity="0"/>
        <stop offset="1" stopColor="#262626" stopOpacity=".8"/>
      </linearGradient>
      <polygon fill="url(#ua_g3)" points="24,7 26.928,13.473 33.989,14.257 28.737,19.042 30.173,26 24,22.484 17.827,26 19.263,19.042 14.011,14.257 21.072,13.473"/>
    </svg>
  );
}
