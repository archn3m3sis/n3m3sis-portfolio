type Props = {
  className?: string;
  size?: number;
};

export function LayoutWindowIcon({ className, size = 160 }: Props) {
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
        id="bTnBgu0N5TBwrHVM3BE38a_jBcUtHrwbb4O_gr1"
        x1="24"
        x2="24"
        y1="24.452"
        y2="-1.337"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#97f8ff" />
        <stop offset=".125" stopColor="#8ef3ff" />
        <stop offset=".328" stopColor="#76e4fe" />
        <stop offset=".584" stopColor="#4eccfe" />
        <stop offset=".88" stopColor="#18abfc" />
        <stop offset="1" stopColor="#009cfc" />
      </linearGradient>
      <path
        fill="url(#bTnBgu0N5TBwrHVM3BE38a_jBcUtHrwbb4O_gr1)"
        d="M44,20H4c-0.552,0-1-0.448-1-1V8c0-0.552,0.448-1,1-1h40c0.552,0,1,0.448,1,1v11 C45,19.552,44.552,20,44,20z"
      />
      <linearGradient
        id="bTnBgu0N5TBwrHVM3BE38b_jBcUtHrwbb4O_gr2"
        x1="24"
        x2="24"
        y1="47.622"
        y2="21.569"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6" />
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#bTnBgu0N5TBwrHVM3BE38b_jBcUtHrwbb4O_gr2)"
        d="M41,43H7c-0.552,0-1-0.448-1-1V17 c0-0.552,0.448-1,1-1h34c0.552,0,1,0.448,1,1v25C42,42.552,41.552,43,41,43z"
      />
      <path
        fill="#fff"
        d="M22,13h19c0.552,0,1-0.448,1-1v-1c0-0.552-0.448-1-1-1H22c-0.552,0-1,0.448-1,1v1 C21,12.552,21.448,13,22,13z"
      />
      <circle cx="7.5" cy="11.5" r="1.5" fill="#0576e5" />
      <circle cx="12.5" cy="11.5" r="1.5" fill="#0576e5" />
      <rect width="12" height="15" x="27" y="25" fill="#c27dff" opacity=".3" />
      <rect width="15" height="6" x="9" y="34" fill="#c27dff" opacity=".3" />
      <rect width="15" height="6" x="9" y="25" fill="#c27dff" opacity=".3" />
    </svg>
  );
}
