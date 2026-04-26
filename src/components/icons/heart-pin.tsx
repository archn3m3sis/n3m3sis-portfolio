type Props = {
  className?: string;
  size?: number;
};

export function HeartPinIcon({ className, size = 160 }: Props) {
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
        id="LZgUyCTl-0z_cBCYPoUlVa_SSfPtuW04ZAu_gr1"
        x1="24"
        x2="24"
        y1="44.031"
        y2="29.628"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff01bb" />
        <stop offset=".553" stopColor="#ff5dde" />
        <stop offset="1" stopColor="#ffa4f9" />
      </linearGradient>
      <path
        fill="url(#LZgUyCTl-0z_cBCYPoUlVa_SSfPtuW04ZAu_gr1)"
        d="M24,33c-9.389,0-17,2.686-17,6s7.611,6,17,6s17-2.686,17-6S33.389,33,24,33z"
      />
      <linearGradient
        id="LZgUyCTl-0z_cBCYPoUlVb_SSfPtuW04ZAu_gr2"
        x1="24"
        x2="24"
        y1="14.151"
        y2="51.057"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffbe02" stopOpacity=".4" />
        <stop offset="1" stopColor="#fff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#LZgUyCTl-0z_cBCYPoUlVb_SSfPtuW04ZAu_gr2)"
        d="M24,4c-7.251,0-13.129,5.798-13.129,12.95 c0,6.077,9.478,19.189,12.328,22.995c0.401,0.535,1.202,0.535,1.602,0c2.85-3.805,12.328-16.917,12.328-22.995 C37.129,9.798,31.251,4,24,4z M24,22c-2.762,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S26.762,22,24,22z"
      />
    </svg>
  );
}
