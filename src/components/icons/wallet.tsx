type Props = {
  className?: string;
  size?: number;
};

export function WalletIcon({ className, size = 160 }: Props) {
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
        id="vzwlF6dgwUtD0e9gwQF1ra_PeFCbhm4bRlh_gr1"
        x1="24"
        x2="24"
        y1="38.777"
        y2="-5.771"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#009cfc" />
        <stop offset=".125" stopColor="#07a0fc" />
        <stop offset=".309" stopColor="#1bacfd" />
        <stop offset=".53" stopColor="#3cc0fd" />
        <stop offset=".777" stopColor="#68dcfe" />
        <stop offset="1" stopColor="#97f8ff" />
      </linearGradient>
      <path
        fill="url(#vzwlF6dgwUtD0e9gwQF1ra_PeFCbhm4bRlh_gr1)"
        d="M9.315,19.636c-0.443,0.757-0.418,1.695,0.064,2.428l11.436,16.404 c0.409,0.623,1.298,0.715,1.83,0.191l3.698-3.642l2.63,0.863c0.535,0.176,1.122-0.045,1.402-0.527l8.312-13.323 c0.417-0.719,0.416-1.601-0.004-2.319L31.639,7.824C31.323,7.297,30.646,7.1,30.09,7.373l-1.378,0.679L25.98,4.466 c-0.432-0.567-1.274-0.626-1.783-0.125l-2.585,2.546l-2.676-0.878c-0.514-0.169-1.079,0.028-1.371,0.477L9.315,19.636z"
      />
      <linearGradient
        id="vzwlF6dgwUtD0e9gwQF1rb_PeFCbhm4bRlh_gr2"
        x1="11.293"
        x2="38.455"
        y1="45.212"
        y2="12.594"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6" />
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#vzwlF6dgwUtD0e9gwQF1rb_PeFCbhm4bRlh_gr2)"
        d="M39.184,17.67c-1.738,0-3.292-0.548-4.336-1.411c-0.417-0.345-1.035-0.345-1.451,0 c-1.043,0.863-2.597,1.411-4.336,1.411c-1.738,0-3.292-0.548-4.336-1.411c-0.417-0.345-1.035-0.345-1.451,0 c-1.043,0.863-2.597,1.411-4.336,1.411c-1.738,0-3.292-0.548-4.336-1.411c-0.417-0.345-1.035-0.345-1.451,0 c-1.043,0.863-2.597,1.411-4.336,1.411c-1.132,0-2.182-0.234-3.065-0.636C4.933,16.662,4,17.206,4,18.105l0,23.692 C4,42.461,4.539,43,5.203,43h37.594C43.461,43,44,42.461,44,41.797V18.105c0-0.9-0.933-1.443-1.752-1.071 C41.366,17.436,40.315,17.67,39.184,17.67z"
      />
    </svg>
  );
}
