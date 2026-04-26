type Props = {
  className?: string;
  size?: number;
};

export function MountainIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="mt_g1" x1="-197.711" x2="-165.35" y1="-196.961" y2="-196.961" gradientTransform="rotate(90 -189.916 16.953)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#86e8ff"/>
        <stop offset="1" stopColor="#00a1fc"/>
      </linearGradient>
      <path fill="url(#mt_g1)" d="M3.08,42.603l16-37 c0.343-0.793,1.468-0.805,1.827-0.02l10.872,23.719l9.733,5.84c0.181,0.108,0.323,0.271,0.405,0.464l3,7 c0.283,0.659-0.203,1.393-0.919,1.393h-40C3.28,43.999,2.795,43.262,3.08,42.603z"/>
      <linearGradient id="mt_g3" x1="-198.05" x2="-183.37" y1="-185.714" y2="-185.714" gradientTransform="rotate(90 -180.5 25.354)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#daa6ff"/>
        <stop offset="1" stopColor="#daa6ff"/>
      </linearGradient>
      <path fill="url(#mt_g3)" d="M23.499,22.998 c-3.036,0-5.5-2.464-5.5-5.5c0-3.035,2.464-5.499,5.5-5.499c0.156,0,0.311,0.007,0.463,0.02c0.804-2.893,3.46-5.02,6.608-5.02 c3.463,0,6.329,2.572,6.792,5.908c0.231-0.032,0.467-0.049,0.708-0.049c2.799,0,5.071,2.272,5.071,5.071s-2.272,5.071-5.071,5.071 C36.035,22.999,25.51,22.998,23.499,22.998z"/>
    </svg>
  );
}
