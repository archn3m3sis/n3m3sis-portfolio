type Props = {
  className?: string;
  size?: number;
};

export function CheckmarkIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="ck_g1" x1="27.5" x2="27.5" y1="42.73" y2="6.496" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00bc73"/>
        <stop offset=".762" stopColor="#5bdd46"/>
        <stop offset="1" stopColor="#78e837"/>
      </linearGradient>
      <path fill="url(#ck_g1)" d="M43,38.867C43,41.149,41.149,43,38.867,43H16.133C13.851,43,12,41.149,12,38.867V16.133 C12,13.851,13.851,12,16.133,12h22.733C41.149,12,43,13.851,43,16.133V38.867z"/>
      <path fill="#02af64" d="M18,12c-3.3,0-6,2.7-6,6v20h20.139C35.376,38,38,35.376,38,32.139V12H18z" opacity=".1"/>
      <path fill="#0bc06e" d="M16,12c-2.209,0-4,1.791-4,4v20h20c2.209,0,4-1.791,4-4V12H16z"/>
      <linearGradient id="ck_g2" x1="6.293" x2="33.903" y1="9.318" y2="31.048" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#01fff7" stopOpacity=".4"/>
        <stop offset="1" stopColor="#01fff7" stopOpacity=".3"/>
      </linearGradient>
      <path fill="url(#ck_g2)" d="M32,5H9C6.791,5,5,6.791,5,9v23 c0,2.209,1.791,4,4,4h23c2.209,0,4-1.791,4-4V9C36,6.791,34.209,5,32,5z"/>
      <polyline
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        points="16,20.938 20.062,25 29,16.062"
      />
    </svg>
  );
}
