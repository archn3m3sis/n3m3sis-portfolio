type Props = {
  className?: string;
  size?: number;
};

export function DiagonalBannerIcon({ className, size = 160 }: Props) {
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
        id="kvNMaAz_S7ymLlkukJ0ska_udZJKgr2Oh74_gr1"
        x1="7.608"
        x2="34.614"
        y1="40.106"
        y2="14.297"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#00bc73" />
        <stop offset=".762" stopColor="#5bdd46" />
        <stop offset="1" stopColor="#78e837" />
      </linearGradient>
      <path
        fill="url(#kvNMaAz_S7ymLlkukJ0ska_udZJKgr2Oh74_gr1)"
        d="M42.638,35.512l-7.071,7.071c-0.391,0.391-1.024,0.391-1.414,0L5.869,14.299 c-0.391-0.391-0.391-1.024,0-1.414l7.071-7.071c0.391-0.391,1.024-0.391,1.414,0l28.284,28.284 C43.029,34.488,43.029,35.121,42.638,35.512z"
      />
      <rect
        width="12"
        height="10"
        x="18.254"
        y="19.198"
        fill="#00bc73"
        transform="rotate(-45.001 24.253 24.199)"
      />
      <linearGradient
        id="kvNMaAz_S7ymLlkukJ0skb_udZJKgr2Oh74_gr2"
        x1="47.063"
        x2="47.063"
        y1="115.263"
        y2="82.049"
        gradientTransform="rotate(45.001 124.463 33.446)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".045" stopColor="#01fff7" stopOpacity=".4" />
        <stop offset="1" stopColor="#01fff7" stopOpacity=".3" />
      </linearGradient>
      <path
        fill="url(#kvNMaAz_S7ymLlkukJ0skb_udZJKgr2Oh74_gr2)"
        d="M8.329,33.973l-2.038,7.133 c-0.184,0.644,0.411,1.239,1.055,1.055l7.133-2.038c0.846-0.242,1.616-0.695,2.238-1.317l24.127-24.127 c0.601-0.601,0.601-1.574,0-2.175l-4.896-4.896c-0.601-0.601-1.574-0.601-2.175,0L9.646,31.735 C9.024,32.357,8.571,33.127,8.329,33.735z"
      />
    </svg>
  );
}
