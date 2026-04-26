type Props = {
  className?: string;
  size?: number;
};

export function UrgentMailIcon({ className, size = 160 }: Props) {
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
        id="WZFCbbJ6RQ6SO8HgugH9pa_xSJWLaNhJoY0_gr1"
        x1="14.899"
        x2="21.217"
        y1=".564"
        y2="33.589"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff6201" />
        <stop offset=".162" stopColor="#ff7105" />
        <stop offset=".473" stopColor="#fe980f" />
        <stop offset=".898" stopColor="#fcd720" />
        <stop offset="1" stopColor="#fce724" />
      </linearGradient>
      <path
        fill="url(#WZFCbbJ6RQ6SO8HgugH9pa_xSJWLaNhJoY0_gr1)"
        d="M36.1,37H1.9C0.851,37,0,36.074,0,34.931V9.069C0,7.926,0.851,7,1.9,7h34.2 C37.149,7,38,7.926,38,9.069v25.862C38,36.074,37.149,37,36.1,37z"
      />
      <path
        fill="#fda813"
        d="M38,35v-8.95c-0.33-0.03-0.662-0.05-1-0.05c-6.075,0-11,4.925-11,11h10C37.105,37,38,36.105,38,35z"
      />
      <linearGradient
        id="WZFCbbJ6RQ6SO8HgugH9pb_xSJWLaNhJoY0_gr2"
        x1="46.4"
        x2="27.953"
        y1="27.71"
        y2="45.941"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f4805d" stopOpacity=".4" />
        <stop offset="1" stopColor="#ffd8bb" stopOpacity=".4" />
      </linearGradient>
      <circle cx="37" cy="37" r="11" fill="url(#WZFCbbJ6RQ6SO8HgugH9pb_xSJWLaNhJoY0_gr2)" />
      <circle cx="37" cy="43" r="1" fill="#fff" />
      <path
        fill="#fff"
        d="M37,30L37,30c-0.552,0-1,0.448-1,1v8c0,0.552,0.448,1,1,1l0,0c0.552,0,1-0.448,1-1v-8 C38,30.448,37.552,30,37,30z"
      />
      <linearGradient
        id="WZFCbbJ6RQ6SO8HgugH9pd_xSJWLaNhJoY0_gr4"
        x1="19"
        x2="19"
        y1="-14.05"
        y2="21.268"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff6201" />
        <stop offset="1" stopColor="#fce724" />
      </linearGradient>
      <path
        fill="url(#WZFCbbJ6RQ6SO8HgugH9pd_xSJWLaNhJoY0_gr4)"
        d="M36.1,7H1.9C0.851,7,0,7.926,0,9.069v3.281 L17.873,24.716c0.67,0.538,1.584,0.538,2.254,0L38,12.35V9.069C38,7.926,37.149,7,36.1,7z"
      />
    </svg>
  );
}
