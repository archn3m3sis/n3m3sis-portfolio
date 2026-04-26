type Props = {
  className?: string;
  size?: number;
};

export function CodeMonitorIcon({ className, size = 160 }: Props) {
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
        id="cbN2FemBtg8OQDOV-gtzli_8Glfo6rQalsl_gr1"
        x1="-369.001"
        x2="-369.001"
        y1="15493.502"
        y2="15483.185"
        gradientTransform="translate(392.999 -15451.493)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#008afc" />
        <stop offset=".12" stopColor="#1895fc" />
        <stop offset=".416" stopColor="#4edcfe" />
        <stop offset=".672" stopColor="#76e4fe" />
        <stop offset=".875" stopColor="#8ee9ff" />
        <stop offset="1" stopColor="#97f8ff" />
      </linearGradient>
      <path
        fill="url(#cbN2FemBtg8OQDOV-gtzli_8Glfo6rQalsl_gr1)"
        d="M43.997,30.998L43.997,30.998c0,1.656-1.343,3-2.999,3 h-14v4.999h4.279c1.051,0,1.721,0.671,1.721,1.5c0,0.831-0.671,1.5-1.5,1.5h-15c-0.829,0-1.5-0.669-1.5-1.5 c0-0.829,0.671-1.5,1.5-1.5h4.5v-4.999H6.999c-1.657,0-3-1.344-3-3l0,0H43.997z"
      />
      <linearGradient
        id="cbN2FemBtg8OQDOV-gtzlw_8Glfo6rQalsl_gr3"
        x1="-364.125"
        x2="-402.398"
        y1="15483.181"
        y2="15521.006"
        gradientTransform="translate(407.626 -15482.457)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" />
        <stop offset="1" stopColor="#daa6ff" />
      </linearGradient>
      <path
        fill="url(#cbN2FemBtg8OQDOV-gtzlw_8Glfo6rQalsl_gr3)"
        d="M40.998,5.998H6.999 c-1.657,0-3,1.344-3,3v22c0,1.656,1.343,3,3,3h33.999c1.656,0,2.999-1.344,2.999-3v-22C43.997,7.342,42.654,5.998,40.998,5.998z"
      />
      <path
        fill="#ab58e8"
        fillRule="evenodd"
        d="M20.627,25.929 c-0.512-0.205-0.763-0.788-0.557-1.3l6-15c0.205-0.512,0.788-0.763,1.3-0.557c0.512,0.205,0.763,0.988,0.557,1.5l-6,15 C21.722,25.883,21.139,26.134,20.627,25.929z M16.166,22.555l-3-4.5c-0.223-0.336-0.223-0.775,0-1.111l3-4.5 c0.307-0.459,0.928-0.583,1.388-0.277c0.459,0.307,0.583,0.928,0.277,1.388l-2.631,3.944l2.631,3.945 c0.305,0.46,0.181,1.081-0.277,1.388C17.094,23.138,16.473,23.014,16.166,22.555z M30.441,22.832 c-0.459-0.307-0.583-0.928-0.277-1.388l2.631-3.945l-2.631-3.944c-0.305-0.46-0.181-1.081,0.277-1.388 c0.46-0.305,1.081-0.181,1.388,0.277l3,4.5c0.223,0.336,0.223,0.775,0,1.111l-3,4.5C31.522,23.014,30.901,23.138,30.441,22.832z"
        clipRule="evenodd"
      />
    </svg>
  );
}
