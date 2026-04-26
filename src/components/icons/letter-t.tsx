type Props = {
  className?: string;
  size?: number;
};

export function LetterTIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <circle cx="39.5" cy="12.5" r="4.5" fill="#962aff" />
      <path
        fill="#962aff"
        d="M38,37L38,37c3.866,0,7-3.134,7-7v-9.543C45,19.652,44.348,19,43.543,19H32.457 C31.652,19,31,19.652,31,20.457V30C31,33.866,34.134,37,38,37z"
      />
      <linearGradient
        id="BorzyvLpr6Xp30-nJlk9Pa_QQdL2kUpiibp_gr1"
        x1="22.976"
        x2="44.55"
        y1="21.532"
        y2="48.84"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#c99fff" />
        <stop offset=".219" stopColor="#be85ff" />
        <stop offset="1" stopColor="#962aff" />
      </linearGradient>
      <path
        fill="url(#BorzyvLpr6Xp30-nJlk9Pa_QQdL2kUpiibp_gr1)"
        d="M36,20.326V32.5C36,38.299,31.299,43,25.5,43S15,38.299,15,32.5V20.326 C15,19.594,15.594,19,16.326,19h18.348C35.406,19,36,19.594,36,20.326z M25.5,17c3.59,0,6.5-2.91,6.5-6.5S29.09,4,25.5,4 S19,6.91,19,10.5S21.91,17,25.5,17z"
      />
      <linearGradient
        id="BorzyvLpr6Xp30-nJlk9Pb_QQdL2kUpiibp_gr2"
        x1="22.875"
        x2="1.179"
        y1="25.491"
        y2="21.846"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4eaefe" stopOpacity=".2" />
        <stop offset="1" stopColor="#41a2fe" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#BorzyvLpr6Xp30-nJlk9Pb_QQdL2kUpiibp_gr2)"
        d="M23.151,35H4.849 C3.828,35,3,34.172,3,33.151V14.849C3,13.828,3.828,13,4.849,13h18.302C24.172,13,25,13.828,25,14.849v18.302 C25,34.172,24.172,35,23.151,35z"
      />
      <path
        fill="#fff"
        d="M12.675,20.899H9.989V19h7.685v1.899h-2.73V29h-2.27V20.899z"
      />
    </svg>
  );
}
