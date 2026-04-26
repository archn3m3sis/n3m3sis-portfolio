type Props = {
  className?: string;
  size?: number;
};

export function FlowChartIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="fc_g1" x1="24" x2="24" y1="3.076" y2="36.076" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#97f8ff"/>
        <stop offset=".125" stopColor="#8ef3ff"/>
        <stop offset=".328" stopColor="#76e4fe"/>
        <stop offset=".584" stopColor="#4eccfe"/>
        <stop offset=".88" stopColor="#18abfc"/>
        <stop offset="1" stopColor="#009cfc"/>
      </linearGradient>
      <path fill="url(#fc_g1)" d="M42,34h-2v-9c0-0.552-0.448-1-1-1H26V13c0-1.105-0.895-2-2-2s-2,0.895-2,2v11H9 c-0.552,0-1,0.448-1,1v9H6c-0.552,0-1,0.448-1,1v8c0,0.552,0.448,1,1,1h8c0.552,0,1-0.448,1-1v-8c0-0.552-0.448-1-1-1h-2v-6h10v6h-2 c-0.552,0-1,0.448-1,1v8c0,0.552,0.448,1,1,1h8c0.552,0,1-0.448,1-1v-8c0-0.552-0.448-1-1-1h-2v-6h10v6h-2c-0.552,0-1,0.448-1,1v8 c0,0.552,0.448,1,1,1h8c0.552,0,1-0.448,1-1v-8C43,34.448,42.552,34,42,34z"/>
      <linearGradient id="fc_g2" x1="14" x2="34" y1="11" y2="11" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6"/>
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4"/>
      </linearGradient>
      <path fill="url(#fc_g2)" d="M15,4h18c0.552,0,1,0.448,1,1v12 c0,0.552-0.448,1-1,1H15c-0.552,0-1-0.448-1-1V5C14,4.448,14.448,4,15,4z"/>
    </svg>
  );
}
