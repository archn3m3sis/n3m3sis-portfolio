type Props = {
  className?: string;
  size?: number;
};

export function BlogIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="bl_g1" x1="24" x2="24" y1="29.044" y2="-6.044" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#97f8ff"/>
        <stop offset=".079" stopColor="#89f0ff"/>
        <stop offset=".523" stopColor="#40c3fd"/>
        <stop offset=".841" stopColor="#12a7fc"/>
        <stop offset="1" stopColor="#009cfc"/>
      </linearGradient>
      <path fill="url(#bl_g1)" d="M36,27H12c-0.552,0-1-0.448-1-1V6c0-0.552,0.448-1,1-1h24c0.552,0,1,0.448,1,1v20 C37,26.552,36.552,27,36,27z"/>
      <path fill="#009cfc" d="M12,27h24c0.552,0,1-0.448,1-1v-5.777C37,20.652,36.652,21,36.223,21l-8.555,0 c-0.35,0-0.668,0.232-0.747,0.572C26.708,22.487,25.998,24,24,24c-2,0-2.709-1.496-2.921-2.417C20.999,21.236,20.675,21,20.319,21 l-8.542,0C11.348,21,11,20.652,11,20.223V26C11,26.552,11.448,27,12,27z"/>
      <linearGradient id="bl_g2" x1="24" x2="24" y1="9.848" y2="53.848" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#dca6ff" stopOpacity=".4"/>
        <stop offset="1" stopColor="#daa6ff" stopOpacity=".6"/>
      </linearGradient>
      <path fill="url(#bl_g2)" d="M45,22h-2v-2c0-0.552-0.448-1-1-1h-5v1.223 C37,20.652,36.652,21,36.223,21l-8.555,0c-0.35,0-0.668,0.231-0.747,0.572C26.708,22.487,25.998,24,24,24 c-2,0-2.709-1.496-2.921-2.417C20.999,21.236,20.675,21,20.319,21l-8.542,0C11.348,21,11,20.652,11,20.223V19H6 c-0.552,0-1,0.448-1,1v2H3c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h2v14c0,1.105,0.895,2,2,2h34c1.105,0,2-0.895,2-2V28h2 c0.552,0,1-0.448,1-1v-4C46,22.448,45.552,22,45,22z"/>
      <circle cx="36" cy="33" r="2" fill="#fff"/>
      <circle cx="28" cy="33" r="2" fill="#fff"/>
      <circle cx="20" cy="33" r="2" fill="#fff"/>
      <circle cx="12" cy="33" r="2" fill="#fff"/>
      <circle cx="32" cy="39" r="2" fill="#fff"/>
      <circle cx="24" cy="39" r="2" fill="#fff"/>
      <circle cx="16" cy="39" r="2" fill="#fff"/>
      <path fill="#2cafff" d="M33,12H15c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h18c0.552,0,1,0.448,1,1v0 C34,11.552,33.552,12,33,12z"/>
      <path fill="#2cafff" d="M27,17H15c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h12C28.324,15,28.322,17,27,17z"/>
    </svg>
  );
}
