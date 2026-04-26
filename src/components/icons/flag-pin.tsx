type Props = {
  className?: string;
  size?: number;
};

export function FlagPinIcon({ className, size = 160 }: Props) {
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
        id="KABIx3haszSv-IKBp_Yj6a_dDwygIezCPl2_gr1"
        x1="26.416"
        x2="26.416"
        y1="-2.033"
        y2="91.797"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fce724" />
        <stop offset="1" stopColor="#ff6201" />
      </linearGradient>
      <path
        fill="url(#KABIx3haszSv-IKBp_Yj6a_dDwygIezCPl2_gr1)"
        d="M42.303,17.914c-0.228-0.519-0.841-0.745-1.351-0.498L38.32,18.69L35.446,15l2.874-3.69 l2.632,1.274c0.51,0.247,1.123,0.021,1.351-0.498l1.443-3.283c0.208-0.474,0.02-1.029-0.434-1.279l-4.198-2.309 c-1.163-0.465-2.493-0.159-3.335,0.769l-4.779,6L12,12c-0.882,0-1.719,0.388-2.289,1.061s-0.815,1.563-0.67,2.433l2.961,16.765 c-1.514,1.056-2.593,2.694-2.907,4.59C8.994,37.452,9.479,38,10.091,38h11.82c0.609,0,1.095-0.544,0.996-1.145 c-0.442-2.683-2.413-4.848-4.986-5.582L15.542,18H31l4.779,6.017c0.58,0.64,1.392,0.983,2.222,0.983c0.374,0,0.752-0.07,1.113-0.215 l4.198-2.309c0.454-0.25,0.642-0.804,0.434-1.279L42.303,17.914z"
      />
      <linearGradient
        id="KABIx3haszSv-IKBp_Yj6b_dDwygIezCPl2_gr2"
        x1="12"
        x2="12"
        y1="16.244"
        y2="28.792"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f4805d" stopOpacity=".4" />
        <stop offset="1" stopColor="#ffd8bb" stopOpacity=".4" />
      </linearGradient>
      <circle
        cx="12"
        cy="15"
        r="7"
        fill="url(#KABIx3haszSv-IKBp_Yj6b_dDwygIezCPl2_gr2)"
      />
      <linearGradient
        id="KABIx3haszSv-IKBp_Yj6f_dDwygIezCPl2_gr6"
        x1="18.5"
        x2="18.5"
        y1="40.122"
        y2="46.396"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f4805d" stopOpacity=".4" />
        <stop offset="1" stopColor="#ffd8bb" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#KABIx3haszSv-IKBp_Yj6f_dDwygIezCPl2_gr6)"
        d="M8,36c-2.209,0-4,1.791-4,4v2c0,0.552,0.448,1,1,1h27c0.552,0,1-0.448,1-1v-2 c0-2.209-1.791-4-4-4H8z"
      />
    </svg>
  );
}
