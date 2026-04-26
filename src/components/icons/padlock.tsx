type Props = {
  className?: string;
  size?: number;
};

export function PadlockIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="pl_g1" x1="24" x2="24" y1="-1.109" y2="18.891" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#97f8ff"/>
        <stop offset=".125" stopColor="#8ef3ff"/>
        <stop offset=".328" stopColor="#76e4fe"/>
        <stop offset=".584" stopColor="#4eccfe"/>
        <stop offset=".88" stopColor="#18abfc"/>
        <stop offset="1" stopColor="#009cfc"/>
      </linearGradient>
      <path fill="url(#pl_g1)" d="M35,23h-2c-0.552,0-1-0.448-1-1l0-6.717c0-4.257-3.205-7.98-7.452-8.264 C19.89,6.706,16,10.408,16,15v7c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1l0-6.649c0-6.245,4.626-11.712,10.844-12.297 C29.979,2.383,36,8.001,36,15v7C36,22.552,35.552,23,35,23z"/>
      <path fill="#2e8efe" d="M12,18v4c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-4H12z"/>
      <path fill="#2e8efe" d="M32,18v4c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-4H32z"/>
      <linearGradient id="pl_g2" x1="24" x2="24" y1="21.261" y2="42.521" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6"/>
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4"/>
      </linearGradient>
      <path fill="url(#pl_g2)" d="M38,18H10c-1.105,0-2,0.895-2,2v9 c0,9.389,6.611,16,16,16s16-6.611,16-16v-9C40,18.895,39.105,18,38,18z M25.129,31.776L26,37h-4l0.871-5.224 C21.774,31.33,21,30.257,21,29c0-1.657,1.343-3,3-3s3,1.343,3,3C27,30.257,26.226,31.33,25.129,31.776z"/>
    </svg>
  );
}
