type Props = {
  className?: string;
  size?: number;
};

export function LeafShapeIcon({ className, size = 160 }: Props) {
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
        id="QXHF-zRipXpV7YDG0LN2ta_9cMK87fY4Hke_gr1"
        x1="17.208"
        x2="17.208"
        y1="17.449"
        y2="-2.966"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#00bc73" />
        <stop offset=".762" stopColor="#5bdd46" />
        <stop offset="1" stopColor="#78e837" />
      </linearGradient>
      <path
        fill="url(#QXHF-zRipXpV7YDG0LN2ta_9cMK87fY4Hke_gr1)"
        d="M27.107,7.209L27.107,7.209c-0.472-0.472-1.258-0.393-1.615,0.171 c-0.621,0.98-1.495,2.626-2.085,4.83c-1.902-4.042-6.188-8.652-15.672-5.632C7.251,6.733,6.938,7.227,7.011,7.73 c1.837,12.676,12.5,10.944,16.413,9.857c0.819-0.227,1.39-0.94,1.463-1.787c0.173-2.005,0.916-4.97,2.375-7.314 C27.516,8.079,27.447,7.549,27.107,7.209z"
      />
      <linearGradient
        id="QXHF-zRipXpV7YDG0LN2tb_9cMK87fY4Hke_gr2"
        x1="24"
        x2="24"
        y1="41.291"
        y2="12.377"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#01fff7" stopOpacity=".4" />
        <stop offset="1" stopColor="#8dfff4" stopOpacity=".3" />
      </linearGradient>
      <path
        fill="url(#QXHF-zRipXpV7YDG0LN2tb_9cMK87fY4Hke_gr2)"
        d="M24,16C11.9,7.8,4.4,17.9,6.3,27.9 C8.1,38,18.4,47.5,24,40.7c5.6,6.8,15.9-2.7,17.7-12.8C43.6,17.8,36.1,7.8,24,16z"
      />
    </svg>
  );
}
