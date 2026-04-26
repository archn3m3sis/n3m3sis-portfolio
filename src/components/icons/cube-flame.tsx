type Props = {
  className?: string;
  size?: number;
};

export function CubeFlameIcon({ className, size = 160 }: Props) {
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
        id="RoOV7IvbrU7lo9LX16c92a_8Y1SrtCBXvmA_gr1"
        x1="18.906"
        x2="61.761"
        y1="30.838"
        y2="-.691"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fce724" />
        <stop offset=".311" stopColor="#fdbd19" />
        <stop offset="1" stopColor="#ff6201" />
      </linearGradient>
      <path
        fill="url(#RoOV7IvbrU7lo9LX16c92a_8Y1SrtCBXvmA_gr1)"
        d="M43.827,8.353l-16.861,5.082l-1.172,0.16L10.022,26.806L21.58,40.605l17.219-14.424 l5.592-1.967C44.756,24.086,45,23.742,45,23.355V9.225C45,8.615,44.411,8.177,43.827,8.353z"
      />
      <linearGradient
        id="RoOV7IvbrU7lo9LX16c92b_8Y1SrtCBXvmA_gr2"
        x1="27.261"
        x2="61.743"
        y1="25.343"
        y2="25.343"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f4805d" stopOpacity=".4" />
        <stop offset="1" stopColor="#ffcfae" stopOpacity=".2" />
      </linearGradient>
      <path
        fill="url(#RoOV7IvbrU7lo9LX16c92b_8Y1SrtCBXvmA_gr2)"
        d="M36.87,29.375l-0.669-0.707l0.022-0.021 L24.431,16.446c0.63-3.151,0.806-5.147,0.806-5.147s-5.888-2.458-10.356-0.575L4.113,8.255C3.544,8.125,3,8.558,3,9.142v14.171 c0,0.406,0.269,0.763,0.66,0.875L10,26l12.771,14.624c0.068,0.101,0.139,0.201,0.225,0.292l0.794,0.838 c0.849,0.897,2.265,0.936,3.162,0.087l0.021-0.02c0.897-0.849,0.936-2.265,0.087-3.162c0.849,0.897,2.265,0.936,3.162,0.087 l0.021-0.02c0.897-0.849,0.936-2.265,0.087-3.162c0.849,0.897,2.265,0.936,3.162,0.087l0.021-0.02 c0.897-0.849,0.936-2.265,0.087-3.162c0.849,0.897,2.265,0.936,3.162,0.087l0.021-0.02C37.68,31.687,37.719,30.272,36.87,29.375z"
      />
    </svg>
  );
}
