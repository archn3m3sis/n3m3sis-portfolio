type Props = {
  className?: string;
  size?: number;
};

export function QuadFanIcon({ className, size = 160 }: Props) {
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
        id="_tPpr8z3A4P2kW4K0JKCna_8eio9KgDotj6_gr1"
        x1="13.254"
        x2="50.003"
        y1="6.965"
        y2="44.716"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#c99fff" />
        <stop offset=".219" stopColor="#be85ff" />
        <stop offset="1" stopColor="#962aff" />
      </linearGradient>
      <path
        fill="url(#_tPpr8z3A4P2kW4K0JKCna_8eio9KgDotj6_gr1)"
        d="M45.98,33.105l0.008-0.002L44.982,17.39l-0.012,0.003C44.654,12.154,40.318,8,35,8H13 C7.477,8,3,12.477,3,18c0,5.523,4.477,10,10,10h15.877l4.831,8.454l0.006-0.002C34.79,38.556,36.974,40,39.5,40 c3.59,0,6.5-2.91,6.5-6.5C46,33.367,45.988,33.237,45.98,33.105z"
      />
      <linearGradient
        id="_tPpr8z3A4P2kW4K0JKCnb_8eio9KgDotj6_gr2"
        x1="20.638"
        x2="1.385"
        y1="28.175"
        y2="19.731"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4eaefe" stopOpacity=".2" />
        <stop offset="1" stopColor="#41a2fe" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#_tPpr8z3A4P2kW4K0JKCnb_8eio9KgDotj6_gr2)"
        d="M23,18c0-5.523-4.477-10-10-10c-5.318,0-9.654,4.154-9.969,9.393L3.018,17.39L2.012,33.103 l0.008,0.002C2.012,33.237,2,33.367,2,33.5C2,37.09,4.91,40,8.5,40c2.526,0,4.71-1.444,5.786-3.548l0.006,0.002l7.619-13.91 l-0.009-0.002C22.599,21.178,23,19.637,23,18z"
      />
      <path
        fill="#962aff"
        d="M37,22c0,1.105-0.895,2-2,2c-1.105,0-2-0.895-2-2s0.895-2,2-2C36.105,20,37,20.895,37,22z M31,16 c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S32.105,16,31,16z M35,12c-1.105,0-2,0.895-2,2s0.895,2,2,2c1.105,0,2-0.895,2-2 S36.105,12,35,12z M39,16c-1.105,0-2,0.895-2,2s0.895,2,2,2c1.105,0,2-0.895,2-2S40.105,16,39,16z"
      />
      <path
        fill="#fff"
        d="M18,16h-3v-3c0-0.552-0.448-1-1-1h-2c-0.552,0-1,0.448-1,1v3H8 c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h3v3c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-3h3c0.552,0,1-0.448,1-1v-2 C19,16.448,18.552,16,18,16z"
        opacity=".5"
      />
    </svg>
  );
}
