type Props = {
  className?: string;
  size?: number;
};

export function WrenchIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <rect
        width="6"
        height="6"
        x="21"
        y="21"
        fill="#0089f9"
        opacity=".4"
        transform="rotate(-45.001 24 24)"
      />
      <linearGradient
        id="GKxtL-RA9arw5KLybgtTUa_gk3v8xCTzdKa_gr1"
        x1="-61.404"
        x2="-61.404"
        y1="254.142"
        y2="211.864"
        gradientTransform="rotate(-45.001 -270.002 24.997)"
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
        fill="url(#GKxtL-RA9arw5KLybgtTUa_gk3v8xCTzdKa_gr1)"
        d="M26.828,7.029L24,9.858c-3.883,3.883-3.901,10.163-0.062,14.074l-0.007,0.007 c-3.91-3.84-10.19-3.821-14.074,0.062l-2.828,2.828c-3.905,3.905-3.905,10.237,0,14.142c3.905,3.905,10.237,3.905,14.142,0 L24,38.142c3.887-3.887,3.902-10.175,0.052-14.084l0.006-0.006c3.91,3.85,10.198,3.834,14.084-0.052l2.828-2.828 c3.905-3.905,3.905-10.237,0-14.142C37.065,3.124,30.734,3.124,26.828,7.029z M19.757,33.899l-2.828,2.828 c-1.562,1.562-4.095,1.562-5.657,0c-1.562-1.562-1.562-4.095,0-5.657l2.828-2.828c1.562-1.562,4.095-1.562,5.657,0 C21.319,29.805,21.319,32.337,19.757,33.899z M36.728,16.929l-2.828,2.828c-1.562,1.562-4.095,1.562-5.657,0 c-1.562-1.562-1.562-4.095,0-5.657l2.828-2.828c1.562-1.562,4.095-1.562,5.657,0C38.29,12.834,38.29,15.367,36.728,16.929z"
      />
      <linearGradient
        id="GKxtL-RA9arw5KLybgtTUb_gk3v8xCTzdKa_gr2"
        x1="-73.403"
        x2="-49.404"
        y1="232.182"
        y2="232.182"
        gradientTransform="rotate(-45.001 -270.002 24.997)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6" />
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#GKxtL-RA9arw5KLybgtTUb_gk3v8xCTzdKa_gr2)"
        d="M32.485,19.757L19.757,32.485 c-1.172,1.172-3.071,1.172-4.243,0c-1.172-1.172-1.172-3.071,0-4.243l12.728-12.728c1.172-1.172,3.071-1.172,4.243,0 C33.657,16.686,33.657,18.586,32.485,19.757z"
      />
    </svg>
  );
}
