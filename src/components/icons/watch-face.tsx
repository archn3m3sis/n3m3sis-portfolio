type Props = {
  className?: string;
  size?: number;
};

export function WatchFaceIcon({ className, size = 160 }: Props) {
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
        id="VwtdzeqZ5_bHBbEz-hqjCa_6QunBnoWTvC3_gr1"
        x1="61.055"
        x2="15.901"
        y1="47.926"
        y2="18.771"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff6201" />
        <stop offset=".162" stopColor="#ff7105" />
        <stop offset=".473" stopColor="#fe980f" />
        <stop offset=".898" stopColor="#fcd720" />
        <stop offset="1" stopColor="#fce724" />
      </linearGradient>
      <path
        fill="url(#VwtdzeqZ5_bHBbEz-hqjCa_6QunBnoWTvC3_gr1)"
        d="M33,10H15c-0.552,0-1-0.448-1-1V2c0-0.552,0.448-1,1-1h18c0.552,0,1,0.448,1,1v7 C34,9.552,33.552,10,33,10z M33,38H15c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h18c0.552,0,1-0.448,1-1v-7 C34,38.448,33.552,38,33,38z"
      />
      <linearGradient
        id="VwtdzeqZ5_bHBbEz-hqjCb_6QunBnoWTvC3_gr2"
        x1="28.622"
        x2="4.321"
        y1="29.052"
        y2="2.491"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f4805d" stopOpacity=".4" />
        <stop offset="1" stopColor="#ffd8bb" stopOpacity=".4" />
      </linearGradient>
      <circle cx="24" cy="24" r="18" fill="url(#VwtdzeqZ5_bHBbEz-hqjCb_6QunBnoWTvC3_gr2)" />
      <path
        fill="#fff"
        d="M33.032,14.671c-0.397-0.384-1.03-0.374-1.414,0.022l-6.379,6.582C24.861,21.102,24.443,21,24,21 c-1.657,0-3,1.343-3,3s1.343,3,3,3c0.464,0,0.898-0.114,1.29-0.302l4.633,3.887c0.52,0.436,1.294,0.368,1.73-0.151 c0.436-0.52,0.368-1.294-0.151-1.73l-4.629-3.884C26.947,24.557,27,24.286,27,24c0-0.481-0.124-0.929-0.325-1.332l6.38-6.583 C33.439,15.688,33.429,15.055,33.032,14.671z M24,25c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1c0.552,0,1,0.448,1,1 C25,24.552,24.552,25,24,25z"
      />
      <path
        fill="#ff7b7b"
        d="M13,25h-3c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v0 C14,24.552,13.552,25,13,25z"
        opacity=".2"
      />
      <path
        fill="#ff7b7b"
        d="M38,25h-3c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v0 C39,24.552,38.552,25,38,25z"
        opacity=".2"
      />
      <path
        fill="#ff7b7b"
        d="M25,35v3c0,0.552-0.448,1-1,1h0c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h0 C24.552,34,25,34.448,25,35z"
        opacity=".2"
      />
      <path
        fill="#ff7b7b"
        d="M25,10v3c0,0.552-0.448,1-1,1h0c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h0 C24.552,9,25,9.448,25,10z"
        opacity=".2"
      />
    </svg>
  );
}
