type Props = {
  className?: string;
  size?: number;
};

export function ShopIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="sh_g1" x1="24" x2="24" y1="15.796" y2="56.719" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00bc73"/>
        <stop offset=".762" stopColor="#5bdd46"/>
        <stop offset="1" stopColor="#78e837"/>
      </linearGradient>
      <path fill="url(#sh_g1)" d="M40,15H8c-1.105,0-2,0.895-2,2v24c0,1.105,0.895,2,2,2h20c0.552,0,1-0.448,1-1V31 c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1v11c0,0.552,0.448,1,1,1h2c1.105,0,2-0.895,2-2V17C42,15.895,41.105,15,40,15z M23,35 c0,0.552-0.448,1-1,1h-9c-0.552,0-1-0.448-1-1v-7c0-0.552,0.448-1,1-1h9c0.552,0,1,0.448,1,1V35z"/>
      <linearGradient id="sh_g2" x1="24.136" x2="24.136" y1="22.035" y2="8.756" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#01fff7" stopOpacity=".4"/>
        <stop offset="1" stopColor="#01fff7" stopOpacity=".4"/>
      </linearGradient>
      <path fill="url(#sh_g2)" d="M40.803,6H7.469 C6.732,6,6.055,6.405,5.707,7.054l-3.434,6.4v3.722c0,2.891,2.313,5.41,5.303,5.487c3.178,0.083,5.632-2.235,5.632-5.284 c0,2.919,2.448,5.286,5.467,5.286c3.02,0,5.467-2.366,5.467-5.286c0,2.919,2.448,5.286,5.467,5.286s5.467-2.366,5.467-5.286 c0,2.919,2.448,5.286,5.467,5.286c2.978,0,5.389-2.305,5.455-5.169v-4.044l-3.434-6.4C42.217,6.405,41.54,6,40.803,6z"/>
    </svg>
  );
}
