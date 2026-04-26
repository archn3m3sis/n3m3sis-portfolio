type Props = {
  className?: string;
  size?: number;
};

export function LetterWIcon({ className, size = 160 }: Props) {
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
        id="sy2AabuAH9HuwP92ErABSa_15DKJndKZx60_gr1"
        x1="17.215"
        x2="43.063"
        y1="2.174"
        y2="50.044"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#97f8ff" />
        <stop offset=".115" stopColor="#84edff" />
        <stop offset=".725" stopColor="#26b3fd" />
        <stop offset="1" stopColor="#009cfc" />
      </linearGradient>
      <path
        fill="url(#sy2AabuAH9HuwP92ErABSa_15DKJndKZx60_gr1)"
        d="M42.207,42H15.793C14.803,42,14,41.197,14,40.207V7.793C14,6.803,14.803,6,15.793,6h26.413 C43.197,6,44,6.803,44,7.793v32.413C44,41.197,43.197,42,42.207,42z"
      />
      <rect width="30" height="2" x="14" y="14" fill="#118bef" opacity=".3" />
      <rect width="30" height="2" x="14" y="23" fill="#118bef" opacity=".3" />
      <rect width="30" height="2" x="14" y="32" fill="#118bef" opacity=".3" />
      <linearGradient
        id="sy2AabuAH9HuwP92ErABSb_15DKJndKZx60_gr2"
        x1="26.772"
        x2="8.838"
        y1="33.076"
        y2="20.332"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6" />
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#sy2AabuAH9HuwP92ErABSb_15DKJndKZx60_gr2)"
        d="M23.151,35H4.849 C3.828,35,3,34.172,3,33.151V14.849C3,13.828,3.828,13,4.849,13h18.302C24.172,13,25,13.828,25,14.849v18.302 C25,34.172,24.172,35,23.151,35z"
      />
      <path
        fill="#fff"
        d="M18.403,19l-1.546,7.264L15.144,19h-2.187l-1.767,7.489L9.597,19H7.641l2.344,10h2.352l1.713-7.689 L15.764,29h2.251l2.344-10H18.403z"
      />
    </svg>
  );
}
