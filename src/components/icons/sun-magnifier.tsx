type Props = {
  className?: string;
  size?: number;
};

export function SunMagnifierIcon({ className, size = 160 }: Props) {
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
        id="TzfY4TRVXOoqh3bcHqxCWa_qW0hxm9M3J5x_gr1"
        x1="7.309"
        x2="-14.935"
        y1="-1.993"
        y2="16.856"
        gradientTransform="matrix(.7071 -.7071 .8141 .8141 31.652 27.55)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffda03" />
        <stop offset=".256" stopColor="#ffba02" />
        <stop offset="1" stopColor="#ff5f01" />
      </linearGradient>
      <path
        fill="url(#TzfY4TRVXOoqh3bcHqxCWa_qW0hxm9M3J5x_gr1)"
        d="M42.75,43.25L42.75,43.25c-1.172,1.172-3.071,1.172-4.243,0L27.282,32.025 c-1.172-1.172-1.172-3.071,0-4.243l0,0c1.172-1.172,3.071-1.172,4.243,0L42.75,39.007C43.922,40.179,43.922,42.078,42.75,43.25z"
      />
      <linearGradient
        id="TzfY4TRVXOoqh3bcHqxCWb_qW0hxm9M3J5x_gr2"
        x1="35.79"
        x2="8.408"
        y1="35.79"
        y2="8.408"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff" stopOpacity=".4" />
        <stop offset="1" stopColor="#f4805d" stopOpacity=".3" />
      </linearGradient>
      <circle cx="20" cy="20" r="16" fill="url(#TzfY4TRVXOoqh3bcHqxCWb_qW0hxm9M3J5x_gr2)" />
    </svg>
  );
}
