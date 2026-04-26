type Props = {
  className?: string;
  size?: number;
};

export function DatabaseStackIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <path fill="#904aff" d="M42,13.4V19c0,3.87-8.055,7-18,7S6,22.87,6,19v-5.6c3.825-3.14,10.935-4.6,18-4.6 S38.175,10.26,42,13.4z" opacity=".1"/>
      <path fill="#904aff" d="M42,14.44V19c0,3.87-8.055,7-18,7S6,22.87,6,19v-4.56c3.564-3.3,10.971-4.84,18-4.84 S38.436,11.14,42,14.44z" opacity=".2"/>
      <path fill="#904aff" d="M42,15.53V19c0,3.87-8.055,7-18,7S6,22.87,6,19v-3.47c3.069-3.38,10.566-5.13,18-5.13 S38.931,12.15,42,15.53z" opacity=".3"/>
      <path fill="#904aff" d="M42,16.73V19c0,3.87-8.055,7-18,7S6,22.87,6,19v-2.27c2.376-3.61,10.395-5.53,18-5.53 S39.624,13.12,42,16.73z" opacity=".4"/>
      <linearGradient id="dbs_g1" x1="24" x2="24" y1="44" y2="12" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#962aff"/>
        <stop offset=".781" stopColor="#be85ff"/>
        <stop offset="1" stopColor="#c99fff"/>
      </linearGradient>
      <path fill="url(#dbs_g1)" d="M24,12c-9.941,0-18,3.134-18,7v18c0,3.866,8.059,7,18,7s18-3.134,18-7V19 C42,15.134,33.941,12,24,12z"/>
      <path fill="#904aff" d="M42,19v4.02C38.985,26.08,32.406,28,24,28S9.015,26.08,6,23.02V19c0-3.87,8.055-7,18-7 S42,15.13,42,19z" opacity=".05"/>
      <path fill="#904aff" d="M42,19v3.49c-2.79,3.12-9.423,5.11-18,5.11S8.79,25.61,6,22.49V19c0-3.87,8.055-7,18-7 S42,15.13,42,19z" opacity=".1"/>
      <path fill="#904aff" d="M42,19v2.89c-2.547,3.2-9.351,5.31-18,5.31S8.547,25.09,6,21.89V19c0-3.87,8.055-7,18-7 S42,15.13,42,19z" opacity=".2"/>
      <path fill="#904aff" d="M42,19v2.23c-2.187,3.29-9.198,5.57-18,5.57S8.187,24.52,6,21.23V19c0-3.87,8.055-7,18-7 S42,15.13,42,19z" opacity=".3"/>
      <path fill="#904aff" d="M42,19v1.49c-1.665,3.41-8.973,5.91-18,5.91S7.665,23.9,6,20.49V19c0-3.87,8.055-7,18-7 S42,15.13,42,19z" opacity=".4"/>
      <linearGradient id="dbs_g2" x1="-4.11" x2="31.89" y1="15" y2="15" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fff" stopOpacity=".4"/>
        <stop offset="1" stopColor="#5cbdf7" stopOpacity=".4"/>
      </linearGradient>
      <path fill="url(#dbs_g2)" d="M24,4C14.059,4,6,7.134,6,11v8c0,3.866,8.059,7,18,7s18-3.134,18-7v-8C42,7.134,33.941,4,24,4 z"/>
      <path fill="#9930ff" d="M24,34c-9.941,0-18-3.134-18-7v2c0,3.866,8.059,7,18,7s18-3.134,18-7v-2C42,30.866,33.941,34,24,34z"/>
    </svg>
  );
}
