type Props = {
  className?: string;
  size?: number;
};

export function StarPointsIcon({ className, size = 160 }: Props) {
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
        id="vzwlF6dgwUtD0e9gwQF1rd_PeFCbhm4bRlh_gr4"
        x1="24.404"
        x2="24.404"
        y1="25.859"
        y2="-.502"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#009cfc" />
        <stop offset=".12" stopColor="#18abfc" />
        <stop offset=".416" stopColor="#4eccfe" />
        <stop offset=".672" stopColor="#76e4fe" />
        <stop offset=".875" stopColor="#8ef3ff" />
        <stop offset="1" stopColor="#97f8ff" />
      </linearGradient>
      <path
        fill="url(#vzwlF6dgwUtD0e9gwQF1rd_PeFCbhm4bRlh_gr4)"
        d="M28.406,12.188c0.371,0.253,0.866,0.228,1.209-0.062l3.048-2.573l0,0l-1.018-1.717 c-0.318-0.537-0.996-0.738-1.556-0.463l-1.378,0.679L25.98,4.466c-0.434-0.57-1.271-0.63-1.781-0.127l-2.587,2.548l-2.676-0.878 c-0.514-0.169-1.079,0.028-1.371,0.477l-1.419,2.263l0,0l2.088,2.721c0.304,0.396,0.854,0.507,1.288,0.26L24,9.179L28.406,12.188z"
      />
    </svg>
  );
}
