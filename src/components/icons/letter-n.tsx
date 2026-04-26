type Props = {
  className?: string;
  size?: number;
};

export function LetterNIcon({ className, size = 160 }: Props) {
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
        id="JEr1Hl5ZKNa-ptNdMfEWda_g1jfANPAeAuT_gr1"
        x1="18.155"
        x2="44.003"
        y1="3.915"
        y2="51.785"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#c99fff" />
        <stop offset=".219" stopColor="#be85ff" />
        <stop offset="1" stopColor="#962aff" />
      </linearGradient>
      <path
        fill="url(#JEr1Hl5ZKNa-ptNdMfEWda_g1jfANPAeAuT_gr1)"
        d="M42.207,42H15.793C14.803,42,14,41.197,14,40.207V7.793C14,6.803,14.803,6,15.793,6h26.413 C43.197,6,44,6.803,44,7.793v32.413C44,41.197,43.197,42,42.207,42z"
      />
      <linearGradient
        id="JEr1Hl5ZKNa-ptNdMfEWdb_g1jfANPAeAuT_gr2"
        x1="26.772"
        x2="8.838"
        y1="33.076"
        y2="20.332"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4eaefe" stopOpacity=".2" />
        <stop offset="1" stopColor="#41a2fe" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#JEr1Hl5ZKNa-ptNdMfEWdb_g1jfANPAeAuT_gr2)"
        d="M23.151,35H4.849 C3.828,35,3,34.172,3,33.151V14.849C3,13.828,3.828,13,4.849,13h18.302C24.172,13,25,13.828,25,14.849v18.302 C25,34.172,24.172,35,23.151,35z"
      />
      <path
        fill="#fff"
        d="M10.085,29.177V18.872h2.141l2.66,4.418c0.688,1.147,1.285,2.34,1.758,3.456h0.031 c-0.123-1.376-0.168-2.707-0.168-4.281v-3.593h1.743v10.305h-1.942l-2.691-4.525c-0.657-1.132-1.345-2.4-1.85-3.562l-0.046,0.015 c0.076,1.331,0.092,2.691,0.092,4.389v3.685H10.085z"
      />
      <path fill="#6e1ce5" d="M35,15v27h7.207C43.197,42,44,41.197,44,40.207V15H35z" />
      <rect width="9" height="9" x="35" y="15" fill="#9f5cff" />
      <rect width="9" height="9" x="35" y="24" fill="#8b39ff" />
    </svg>
  );
}
