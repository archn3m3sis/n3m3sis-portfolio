type Props = {
  className?: string;
  size?: number;
};

export function PhotoStackIcon({ className, size = 160 }: Props) {
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
        id="8SIGapymVTsJ_N9nwvvQZa_VXPsc8ZrJrlE_gr1"
        x1="28"
        x2="28"
        y1=".394"
        y2="57.86"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#97f8ff" />
        <stop offset=".325" stopColor="#69dcfe" />
        <stop offset="1" stopColor="#009cfc" />
      </linearGradient>
      <path
        fill="url(#8SIGapymVTsJ_N9nwvvQZa_VXPsc8ZrJrlE_gr1)"
        d="M42,43H14c-0.552,0-1-0.448-1-1V14c0-0.552,0.448-1,1-1h28c0.552,0,1,0.448,1,1v28 C43,42.552,42.552,43,42,43z"
      />
      <linearGradient
        id="8SIGapymVTsJ_N9nwvvQZb_VXPsc8ZrJrlE_gr2"
        x1="24"
        x2="24"
        y1="-3.606"
        y2="53.86"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#97f8ff" />
        <stop offset=".325" stopColor="#69dcfe" />
        <stop offset="1" stopColor="#009cfc" />
      </linearGradient>
      <path
        fill="url(#8SIGapymVTsJ_N9nwvvQZb_VXPsc8ZrJrlE_gr2)"
        d="M38,39H10c-0.552,0-1-0.448-1-1V10c0-0.552,0.448-1,1-1h28c0.552,0,1,0.448,1,1v28 C39,38.552,38.552,39,38,39z"
      />
      <linearGradient
        id="8SIGapymVTsJ_N9nwvvQZc_VXPsc8ZrJrlE_gr3"
        x1="20"
        x2="20"
        y1="8.623"
        y2="32.246"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6" />
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#8SIGapymVTsJ_N9nwvvQZc_VXPsc8ZrJrlE_gr3)"
        d="M34,35H6c-0.552,0-1-0.448-1-1V6c0-0.552,0.448-1,1-1h28c0.552,0,1,0.448,1,1v28 C35,34.552,34.552,35,34,35z"
      />
      <path
        fill="#fff"
        d="M5,26l7.586-7.586c0.781-0.781,2.047-0.781,2.828,0L21,24l4.751-3.563 c0.734-0.551,1.749-0.531,2.461,0.048L35,26v8c0,0.552-0.448,1-1,1H6c-0.552,0-1-0.448-1-1V26z"
        opacity=".3"
      />
      <circle cx="29" cy="13" r="2" fill="#fff" opacity=".3" />
    </svg>
  );
}
