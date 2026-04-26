type Props = {
  className?: string;
  size?: number;
};

export function DownloadCardIcon({ className, size = 160 }: Props) {
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
        id="_ap18g_Ll4jAk0oCmY3Rga_Wag4kNK9ujlx_gr1"
        x1="24"
        x2="24"
        y1="8.609"
        y2="34.544"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#97f8ff" />
        <stop offset=".125" stopColor="#8ef3ff" />
        <stop offset=".328" stopColor="#76e4fe" />
        <stop offset=".584" stopColor="#4eccfe" />
        <stop offset=".88" stopColor="#18abfc" />
        <stop offset="1" stopColor="#009cfc" />
      </linearGradient>
      <path
        fill="url(#_ap18g_Ll4jAk0oCmY3Rga_Wag4kNK9ujlx_gr1)"
        d="M37.5,18c-0.528,0-1.042,0.055-1.543,0.147C35.518,11.919,30.339,7,24,7 c-5.236,0-9.676,3.359-11.315,8.035C12.458,15.019,12.231,15,12,15C6.477,15,2,19.477,2,25s4.477,10,10,10c0,0,25.331,0,25.5,0 c4.694,0,8.5-3.806,8.5-8.5S42.194,18,37.5,18z"
      />
      <linearGradient
        id="_ap18g_Ll4jAk0oCmY3Rgb_Wag4kNK9ujlx_gr2"
        x1="24"
        x2="24"
        y1="35.168"
        y2="18.223"
        gradientTransform="matrix(1 0 0 -1 0 55.487)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f4e9ff" stopOpacity=".5" />
        <stop offset="1" stopColor="#daa6ff" stopOpacity=".6" />
      </linearGradient>
      <path
        fill="url(#_ap18g_Ll4jAk0oCmY3Rgb_Wag4kNK9ujlx_gr2)"
        d="M32.479,39.018l-7.739,8.649 c-0.397,0.443-1.083,0.443-1.48,0l-7.739-8.649c-0.584-0.653-0.128-1.699,0.74-1.699H19V18.016C19,17.455,19.448,17,20,17h8 c0.552,0,1,0.455,1,1.016v19.303h2.739C32.608,37.319,33.063,38.366,32.479,39.018z"
      />
    </svg>
  );
}
