type Props = {
  className?: string;
  size?: number;
};

export function SparkleBulbIcon({ className, size = 160 }: Props) {
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
        id="rkfCSse6MLF_vgBVlOExPa_4GPRnLf1f9vi_gr1"
        x1="24"
        x2="24"
        y1="34.301"
        y2="58.202"
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
        fill="url(#rkfCSse6MLF_vgBVlOExPa_4GPRnLf1f9vi_gr1)"
        d="M30.31,37.5C30.73,37.133,31,36.601,31,36c0-1.105-0.895-2-2-2H19c-1.105,0-2,0.895-2,2 c0,0.601,0.27,1.133,0.69,1.5C17.27,37.867,17,38.399,17,39c0,0.601,0.27,1.133,0.69,1.5C17.27,40.867,17,41.399,17,42 c0,1.105,0.895,2,2,2h2.184c0.413,1.163,1.512,2,2.816,2s2.403-0.837,2.816-2H29c1.105,0,2-0.895,2-2c0-0.601-0.27-1.133-0.69-1.5 C30.73,40.133,31,39.601,31,39C31,38.399,30.73,37.867,30.31,37.5z"
      />
      <linearGradient
        id="rkfCSse6MLF_vgBVlOExPb_4GPRnLf1f9vi_gr2"
        x1="24"
        x2="24"
        y1="4.95"
        y2="37.679"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6" />
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#rkfCSse6MLF_vgBVlOExPb_4GPRnLf1f9vi_gr2)"
        d="M38.875,17 c0-8.52-7.044-15.381-15.58-14.984C15.491,2.38,9.171,9.032,9.125,16.91c-0.025,4.248,1.709,8.079,4.505,10.818 c1.201,1.177,1.87,2.79,1.87,4.472l0,1.34c0,1.359,1.101,2.46,2.46,2.46h12.08c1.359,0,2.46-1.101,2.46-2.46l0-1.34 c0-1.684,0.673-3.297,1.875-4.476C37.148,25.004,38.875,21.21,38.875,17z"
      />
    </svg>
  );
}
