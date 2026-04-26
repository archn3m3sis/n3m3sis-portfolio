type Props = {
  className?: string;
  size?: number;
};

export function LockShieldIcon({ className, size = 160 }: Props) {
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
        id="lDbAqTJajBrj8yyzKfsA1a_69a59T5vja9I_gr1"
        x1="49.255"
        x2="-6.977"
        y1="5.899"
        y2="53.957"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#97f8ff" />
        <stop offset=".217" stopColor="#6adcfe" />
        <stop offset=".467" stopColor="#3cc1fd" />
        <stop offset=".69" stopColor="#1badfd" />
        <stop offset=".875" stopColor="#07a0fc" />
        <stop offset="1" stopColor="#009cfc" />
      </linearGradient>
      <path
        fill="url(#lDbAqTJajBrj8yyzKfsA1a_69a59T5vja9I_gr1)"
        d="M19.784,33c-3.968,0-7.461-2.961-7.761-6.917c-0.31-4.084,2.673-7.547,6.566-8.022 C19.289,19.219,20.548,20,22,20h5c0.552,0,1-0.448,1-1v-6c0-0.552-0.448-1-1-1h-5c-1.497,0-2.786,0.832-3.472,2.049 c-6.08,0.512-10.832,5.768-10.513,12.047C8.329,32.271,13.676,37,19.859,37L37,37c0.552,0,1-0.448,1-1v-2c0-0.552-0.448-1-1-1 L19.784,33z"
      />
      <linearGradient
        id="lDbAqTJajBrj8yyzKfsA1b_69a59T5vja9I_gr2"
        x1="16.949"
        x2="30.526"
        y1="50.31"
        y2="34.005"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6" />
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#lDbAqTJajBrj8yyzKfsA1b_69a59T5vja9I_gr2)"
        d="M28,41l-8.373-11.722c-0.798-1.117-2.457-1.117-3.255,0L8,41v3c0,0.552,0.448,1,1,1h30 c0.552,0,1-0.448,1-1v-1c0-1.105-0.895-2-2-2H28z"
      />
      <linearGradient
        id="lDbAqTJajBrj8yyzKfsA1c_69a59T5vja9I_gr3"
        x1="24.346"
        x2="38.957"
        y1="24.191"
        y2="6.646"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6" />
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#lDbAqTJajBrj8yyzKfsA1c_69a59T5vja9I_gr3)"
        d="M35,6V4c0-0.552-0.448-1-1-1h-6c-0.552,0-1,0.448-1,1v2h-1c-0.552,0-1,0.448-1,1v19 c0,0.552,0.448,1,1,1h2v1c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1v-1h2c0.552,0,1-0.448,1-1V7c0-0.552-0.448-1-1-1H35z"
      />
      <circle cx="18" cy="37" r="2" fill="#fff" opacity=".3" />
    </svg>
  );
}
