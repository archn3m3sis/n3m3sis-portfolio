type Props = {
  className?: string;
  size?: number;
};

export function DumbbellIcon({ className, size = 160 }: Props) {
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
        id="IVBG-1jGw9RQ-WgDDG_MWa_LQU0bA11wYta_gr1"
        x1="30.16"
        x2="35.139"
        y1="827.325"
        y2="827.325"
        gradientTransform="rotate(90 430.42 420.905)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#86e8ff" />
        <stop offset="1" stopColor="#00a1fc" />
      </linearGradient>
      <path
        fill="url(#IVBG-1jGw9RQ-WgDDG_MWa_LQU0bA11wYta_gr1)"
        d="M3.001,26.005c-0.552,0-1.001-0.448-1.001-1 c0-0.551,0-3.448,0-4c0-0.552,0.449-1,1.001-1h41.997c0.552,0,1.001,0.448,1.001,1c0,0.552,0,3.449,0,4c0,0.552-0.449,1-1.001,1 H3.001z"
      />
      <linearGradient
        id="IVBG-1jGw9RQ-WgDDG_MWe_LQU0bA11wYta_gr3"
        x1="27.153"
        x2="56.511"
        y1="839.868"
        y2="839.868"
        gradientTransform="rotate(90 441.202 422.667)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" />
        <stop offset="1" stopColor="#daa6ff" />
      </linearGradient>
      <path
        fill="url(#IVBG-1jGw9RQ-WgDDG_MWe_LQU0bA11wYta_gr3)"
        d="M9.999,37.005v-5H7 c-1.104,0-2-0.896-2-2v-14c0-1.103,0.896-2,2-2l2.999,0.001V9.005c0-1.103,0.896-2,2-2H15c1.104,0,2,0.897,2,2v28 c0,1.104-0.896,2-2,2h-3.001C10.895,39.005,9.999,38.109,9.999,37.005z M31,37.005v-28c0-1.103,0.896-2,2-2h3.001 c1.104,0,2,0.897,2,2v5.001L41,14.005c1.104,0,2,0.897,2,2v14c0,1.104-0.896,2-2,2h-2.999v5c0,1.104-0.896,2-2,2H33 C31.896,39.005,31,38.109,31,37.005z"
      />
    </svg>
  );
}
