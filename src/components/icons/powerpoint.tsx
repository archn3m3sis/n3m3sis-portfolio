type Props = {
  className?: string;
  size?: number;
};

export function PowerPointIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient
        id="Jq2WsLBHNzC3hvQK7zBcaa_1ayWVdopYjDK_gr1"
        x1="51.203"
        x2="18.441"
        y1="49.978"
        y2="16.167"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff6201" />
        <stop offset=".689" stopColor="#fdbd19" />
        <stop offset="1" stopColor="#fce724" />
      </linearGradient>
      <circle cx="27" cy="25" r="18" fill="url(#Jq2WsLBHNzC3hvQK7zBcaa_1ayWVdopYjDK_gr1)" />
      <path
        fill="#f4805d"
        d="M23.151,13h-9.54C10.753,16.186,9,20.383,9,25c0,3.701,1.12,7.139,3.035,10h11.116 C24.172,35,25,34.172,25,33.151V14.849C25,13.828,24.172,13,23.151,13z"
      />
      <linearGradient
        id="Jq2WsLBHNzC3hvQK7zBcab_1ayWVdopYjDK_gr2"
        x1="21.966"
        x2="4.033"
        y1="29.661"
        y2="16.918"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffd8bb" stopOpacity=".4" />
        <stop offset="1" stopColor="#f4805d" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#Jq2WsLBHNzC3hvQK7zBcab_1ayWVdopYjDK_gr2)"
        d="M23.151,35H4.849 C3.828,35,3,34.172,3,33.151V14.849C3,13.828,3.828,13,4.849,13h18.302C24.172,13,25,13.828,25,14.849v18.302 C25,34.172,24.172,35,23.151,35z"
      />
      <path
        fill="#fff"
        d="M15.673,19.012H11v10h2.024v-3.521H15.3c1.876,0,3.397-1.521,3.397-3.397v-0.058 C18.697,20.366,17.343,19.012,15.673,19.012z M16.57,22.358c0,0.859-0.697,1.556-1.556,1.556h-1.99v-3.325h1.99 c0.859,0,1.556,0.697,1.556,1.556V22.358z"
      />
    </svg>
  );
}
