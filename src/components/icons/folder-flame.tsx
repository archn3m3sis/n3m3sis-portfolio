type Props = {
  className?: string;
  size?: number;
};

export function FolderFlameIcon({ className, size = 160 }: Props) {
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
        id="0DO4OBaoCWwzlZ4FGiU9Ma_XjmyyHd7LFBT_gr1"
        x1="24"
        x2="24"
        y1="29.879"
        y2="1.559"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff6201" />
        <stop offset=".689" stopColor="#fdbd19" />
        <stop offset="1" stopColor="#fce724" />
      </linearGradient>
      <path
        fill="url(#0DO4OBaoCWwzlZ4FGiU9Ma_XjmyyHd7LFBT_gr1)"
        d="M22,10l-4-4H7C5.9,6,5,6.9,5,8v27c0,1.657,1.343,3,3,3h32c1.657,0,3-1.343,3-3V12 c0-1.105-0.895-2-2-2H22z"
      />
      <linearGradient
        id="0DO4OBaoCWwzlZ4FGiU9Mb_XjmyyHd7LFBT_gr2"
        x1="24"
        x2="24"
        y1="32.209"
        y2="1.128"
        gradientTransform="rotate(180 24 29.5)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fce724" />
        <stop offset="1" stopColor="#ff6201" />
      </linearGradient>
      <path
        fill="url(#0DO4OBaoCWwzlZ4FGiU9Mb_XjmyyHd7LFBT_gr2)"
        d="M43,35V18c0-1.657-1.343-3-3-3H8 c-1.657,0-3,1.343-3,3v17c0,1.657,1.343,3,3,3h32C41.657,38,43,36.657,43,35z"
      />
      <path
        fill="#fe910d"
        d="M36,25h-4c-1.105,0-2,0.895-2,2v7H18v-7c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v11h28V27 C38,25.895,37.105,25,36,25z"
      />
      <linearGradient
        id="0DO4OBaoCWwzlZ4FGiU9Mc_XjmyyHd7LFBT_gr3"
        x1="24"
        x2="24"
        y1="39.506"
        y2="22.691"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f4805d" stopOpacity=".4" />
        <stop offset="1" stopColor="#ffd8bb" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#0DO4OBaoCWwzlZ4FGiU9Mc_XjmyyHd7LFBT_gr3)"
        d="M30,27v7H18v-7c0-1.105-0.895-2-2-2h-4 c-1.105,0-2,0.895-2,2v15c0,1.105,0.895,2,2,2h24c1.105,0,2-0.895,2-2V27c0-1.105-0.895-2-2-2h-4C30.895,25,30,25.895,30,27z"
      />
    </svg>
  );
}
