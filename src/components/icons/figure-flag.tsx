type Props = {
  className?: string;
  size?: number;
};

export function FigureFlagIcon({ className, size = 160 }: Props) {
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
        id="hJ5QTA5dRy7FXl-jAZlEFa_DbcxOMqpFcrz_gr1"
        x1="-15519.173"
        x2="-15481.173"
        y1="16719.408"
        y2="16719.408"
        gradientTransform="rotate(-90 -16082.944 604.464)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff00c8" />
        <stop offset="1" stopColor="#ff9af7" />
      </linearGradient>
      <path
        fill="url(#hJ5QTA5dRy7FXl-jAZlEFa_DbcxOMqpFcrz_gr1)"
        d="M26.999,41v-7h-1c-1.42,0-2.389-1.44-1.852-2.76 l0.105-0.253c-0.313,0.04-0.641,0-0.956-0.12c-1.033-0.387-1.559-1.533-1.171-2.573l3-8c0.445-1.187,1.597-3.52,3.807-4.147 C29.27,16.053,29.627,16,29.999,16h4c0.371,0,0.728,0.053,1.065,0.147c2.212,0.627,3.359,2.96,3.807,4.147l3,8 c0.388,1.04-0.137,2.187-1.171,2.573c-0.317,0.12-0.644,0.16-0.957,0.12l0.107,0.253c0.537,1.32-0.432,2.76-1.851,2.76h-1.001v7 c0,1.107-0.897,2-2,2c-1.104,0-2-0.893-2-2v-7h-1.999v7c0,1.107-0.897,2-2,2C27.895,43,26.999,42.106,26.999,41z M26.101,12.373 l0.908-2.733C27.194,7.053,29.358,5,31.998,5c2.637,0,4.801,2.053,4.988,4.64l0.911,2.733C38.327,13.666,37.362,15,35.999,15h-8 C26.635,15,25.67,13.666,26.101,12.373z"
      />
      <linearGradient
        id="hJ5QTA5dRy7FXl-jAZlEFb_DbcxOMqpFcrz_gr2"
        x1="-924.61"
        x2="-886.61"
        y1="1018.333"
        y2="1018.333"
        gradientTransform="rotate(90 52.361 981.971)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffe15c" />
        <stop offset="1" stopColor="#ffbc03" />
      </linearGradient>
      <path
        fill="url(#hJ5QTA5dRy7FXl-jAZlEFb_DbcxOMqpFcrz_gr2)"
        fillOpacity=".4"
        d="M10.999,41V26.693l-1.128,3.013 c-0.388,1.027-1.541,1.56-2.575,1.16c-1.033-0.387-1.559-1.533-1.171-2.573l3-8c0.445-1.187,1.597-3.52,3.807-4.147 C13.27,16.053,13.627,16,13.999,16h4c0.371,0,0.728,0.053,1.065,0.147c2.212,0.627,3.359,2.96,3.807,4.147l3,8 c0.388,1.04-0.137,2.187-1.171,2.573c-1.033,0.4-2.187-0.133-2.575-1.16l-1.128-3.013V41c0,1.107-0.897,2-2,2c-1.104,0-2-0.893-2-2 v-8h-1.999v8c0,1.107-0.897,2-2,2C11.895,43,10.999,42.106,10.999,41z M10.997,10c0-2.76,2.241-5,5.001-5s5.001,2.24,5.001,5 s-2.241,5-5.001,5S10.997,12.76,10.997,10z"
      />
    </svg>
  );
}
