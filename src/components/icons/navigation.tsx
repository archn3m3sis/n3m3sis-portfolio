type Props = {
  className?: string;
  size?: number;
};

export function NavigationIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="nv_g1" x1="30.971" x2="17.333" y1="35.832" y2="-7.298" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#009cfc"/>
        <stop offset=".12" stopColor="#18abfc"/>
        <stop offset=".416" stopColor="#4eccfe"/>
        <stop offset=".672" stopColor="#76e4fe"/>
        <stop offset=".875" stopColor="#8ef3ff"/>
        <stop offset="1" stopColor="#97f8ff"/>
      </linearGradient>
      <path fill="url(#nv_g1)" d="M41.829,40.344L26,6.706C25.562,5.692,24.745,5,24,5s-1.562,0.693-2,1.706L22,37 c0,1.105,0.715,1.714,2,2l15.576,4.128C41.188,43.486,42.516,41.846,41.829,40.344z"/>
      <linearGradient id="nv_g2" x1="138.127" x2="154.485" y1="36.047" y2="16.404" gradientTransform="matrix(-1 0 0 1 164 0)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6"/>
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4"/>
      </linearGradient>
      <path fill="url(#nv_g2)" d="M6.171,40.344L22,6.706C22.438,5.692,23.255,5,24,5s1.562,0.693,2,1.706L26,37 c0,1.105-0.715,1.714-2,2L8.424,43.128C6.812,43.486,5.484,41.846,6.171,40.344z"/>
    </svg>
  );
}
