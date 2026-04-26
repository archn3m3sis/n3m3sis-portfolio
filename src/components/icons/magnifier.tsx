type Props = {
  className?: string;
  size?: number;
};

export function MagnifierIcon({ className, size = 160 }: Props) {
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
        id="_Yps8GMhAyAiZzK8p8c7ra_CfbNAg5WL6oZ_gr1"
        x1="7.528"
        x2="41.024"
        y1="40.305"
        y2="7.17"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#009cfc" />
        <stop offset=".12" stopColor="#18abfc" />
        <stop offset=".416" stopColor="#4eccfe" />
        <stop offset=".672" stopColor="#76e4fe" />
        <stop offset=".875" stopColor="#8ef3ff" />
        <stop offset="1" stopColor="#97f8ff" />
      </linearGradient>
      <path
        fill="url(#_Yps8GMhAyAiZzK8p8c7ra_CfbNAg5WL6oZ_gr1)"
        d="M23,6C12.507,6,4,14.507,4,25s8.507,19,19,19s19-8.507,19-19S33.493,6,23,6z M23,38 c-7.18,0-13-5.82-13-13s5.82-13,13-13s13,5.82,13,13S30.18,38,23,38z M30,25c0,3.866-3.134,7-7,7c-3.866,0-7-3.134-7-7 c0-3.866,3.134-7,7-7C26.866,18,30,21.134,30,25z"
      />
      <path
        fill="#009cfc"
        d="M31.493,8.022L29.72,9.794c-0.213,0.213-0.266,0.538-0.131,0.807l1.189,2.378l-0.965,0.965 c1.724,1.065,3.177,2.518,4.243,4.243l0.965-0.965l2.378,1.189c0.269,0.135,0.594,0.082,0.807-0.131l1.773-1.773 C38.141,12.841,35.159,9.859,31.493,8.022z"
      />
      <path
        fill="#009cfc"
        d="M20.879,27.121c1.172,1.172,3.071,1.172,4.243,0l4.467-4.467c-0.704-1.976-2.267-3.539-4.243-4.243 l-4.467,4.467C19.707,24.05,19.707,25.95,20.879,27.121z"
      />
      <linearGradient
        id="_Yps8GMhAyAiZzK8p8c7rb_CfbNAg5WL6oZ_gr2"
        x1="28.334"
        x2="46.125"
        y1="19.666"
        y2="1.875"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6" />
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#_Yps8GMhAyAiZzK8p8c7rb_CfbNAg5WL6oZ_gr2)"
        d="M44.76,10.424l-4.789-2.394L37.576,3.24 c-0.213-0.427-0.783-0.519-1.12-0.182L29.72,9.794c-0.213,0.213-0.266,0.538-0.131,0.807l1.189,2.378l-9.899,9.899 c-0.393,0.393-1.796,2.447,0,4.243c1.172,1.172,3.071,1.172,4.243,0l9.899-9.899l2.378,1.189c0.269,0.135,0.594,0.082,0.807-0.131 l6.736-6.736C45.279,11.206,45.187,10.637,44.76,10.424z"
      />
    </svg>
  );
}
