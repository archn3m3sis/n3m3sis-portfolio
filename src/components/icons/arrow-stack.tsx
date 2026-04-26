type Props = {
  className?: string;
  size?: number;
};

export function ArrowStackIcon({ className, size = 160 }: Props) {
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
        id="k7oxgT2Fzp2Gvg_QLkgN2a_ZNaJUY0wzcKo_gr1"
        x1="24"
        x2="24"
        y1="5.652"
        y2="39.41"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fce724" />
        <stop offset=".311" stopColor="#fdbd19" />
        <stop offset="1" stopColor="#ff6201" />
      </linearGradient>
      <path
        fill="url(#k7oxgT2Fzp2Gvg_QLkgN2a_ZNaJUY0wzcKo_gr1)"
        d="M26,46h-4c-0.552,0-1-0.448-1-1V4c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1v41 C27,45.552,26.552,46,26,46z"
      />
      <rect width="6" height="18" x="21" y="7" fill="#fe7d08" />
      <linearGradient
        id="k7oxgT2Fzp2Gvg_QLkgN2b_ZNaJUY0wzcKo_gr2"
        x1="20.455"
        x2="23.524"
        y1="-10.309"
        y2="12.744"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffcfae" stopOpacity=".2" />
        <stop offset="1" stopColor="#f4805d" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#k7oxgT2Fzp2Gvg_QLkgN2b_ZNaJUY0wzcKo_gr2)"
        d="M38.586,25H2.396 c-0.888,0-1.336-1.072-0.711-1.703L9,15.902L1.73,8.711C1.094,8.083,1.539,7,2.433,7h36.153c0.265,0,0.52,0.105,0.707,0.293l8,8 c0.391,0.391,0.391,1.024,0,1.414l-8,8C39.105,24.895,38.851,25,38.586,25z"
      />
    </svg>
  );
}
