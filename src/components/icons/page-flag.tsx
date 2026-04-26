type Props = {
  className?: string;
  size?: number;
};

export function PageFlagIcon({ className, size = 160 }: Props) {
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
        id="riuPok8GI8EZiyG4CvGERa_kiwLHxqIbtWn_gr1"
        x1="-16069.603"
        x2="-16056.77"
        y1="16010.952"
        y2="16010.952"
        gradientTransform="rotate(-90 -16011.318 -15.865)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#a44bff" />
        <stop offset="1" stopColor="#c29cff" />
      </linearGradient>
      <path
        fill="url(#riuPok8GI8EZiyG4CvGERa_kiwLHxqIbtWn_gr1)"
        d="M1.999,37.504c0-3.036,2.465-5.501,5.501-5.501 c3.035,0,5.5,2.465,5.5,5.501c0,3.035-2.465,5.5-5.5,5.5C4.464,43.004,1.999,40.539,1.999,37.504z M15,36.004c0-3.863,3.137-7,7-7 s7,3.137,7,7s-3.137,7-7,7S15,39.867,15,36.004z"
      />
      <linearGradient
        id="riuPok8GI8EZiyG4CvGERe_kiwLHxqIbtWn_gr3"
        x1="-16067.915"
        x2="-16039.582"
        y1="16005"
        y2="16005"
        gradientTransform="rotate(-90 -16006.623 -25.623)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#43a8fe" />
        <stop offset="1" stopColor="#4eadfe" />
      </linearGradient>
      <path
        fill="url(#riuPok8GI8EZiyG4CvGERe_kiwLHxqIbtWn_gr3)"
        d="M0,35.004v-10 c0-2.207,1.792-4,4-4h3v-11.5c0-3.036,2.464-5.5,5.5-5.5h4c0.397,0,0.779,0.159,1.06,0.44l13,13c0.281,0.281,0.44,0.663,0.44,1.06 v9.5h3v-22.5c0-0.827,0.672-1.5,1.5-1.5c0.827,0,1.5,0.673,1.5,1.5v29.5h9.5c0.827,0,1.5,0.673,1.5,1.5c0,0.828-0.673,1.5-1.5,1.5 h-11c-0.828,0-1.5-0.672-1.5-1.5v-5.5h-3v4c0,2.208-1.793,4-4,4H4C1.792,39.004,0,37.212,0,35.004z M28,26.131v-7.005L15.879,7.004 H12.5c-1.379,0-2.5,1.121-2.5,2.5v12.037c0.3,0.173,0.579,0.387,0.828,0.635l3.828,3.828H27C27.344,26.004,27.68,26.048,28,26.131z"
      />
    </svg>
  );
}
