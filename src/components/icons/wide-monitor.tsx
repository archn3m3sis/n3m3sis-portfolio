type Props = {
  className?: string;
  size?: number;
};

export function WideMonitorIcon({ className, size = 160 }: Props) {
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
        id="6A2TBJVGT_sOyi0NgJND1a_640EsNS4OKB8_gr1"
        x1="24"
        x2="24"
        y1="40.58"
        y2="6.609"
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
        fill="url(#6A2TBJVGT_sOyi0NgJND1a_640EsNS4OKB8_gr1)"
        d="M41,36H7c-1.105,0-2-0.895-2-2V11c0-1.105,0.895-2,2-2h34c1.105,0,2,0.895,2,2v23 C43,35.105,42.105,36,41,36z"
      />
      <linearGradient
        id="6A2TBJVGT_sOyi0NgJND1c_640EsNS4OKB8_gr3"
        x1="24"
        x2="24"
        y1="34.918"
        y2="-1.47"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#009cfc" />
        <stop offset=".12" stopColor="#18abfc" />
        <stop offset=".416" stopColor="#4eccfe" />
        <stop offset=".672" stopColor="#76e4fe" />
        <stop offset=".875" stopColor="#8ef3ff" />
        <stop offset="1" stopColor="#97f8ff" />
      </linearGradient>
      <rect
        width="34"
        height="23"
        x="7"
        y="11"
        fill="url(#6A2TBJVGT_sOyi0NgJND1c_640EsNS4OKB8_gr3)"
      />
      <linearGradient
        id="6A2TBJVGT_sOyi0NgJND1d_640EsNS4OKB8_gr4"
        x1="24"
        x2="24"
        y1="40.007"
        y2="34.379"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6" />
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#6A2TBJVGT_sOyi0NgJND1d_640EsNS4OKB8_gr4)"
        d="M42,40H6c-2.761,0-5-2.239-5-5v0c0-0.552,0.448-1,1-1h44c0.552,0,1,0.448,1,1v0 C47,37.761,44.761,40,42,40z"
      />
    </svg>
  );
}
