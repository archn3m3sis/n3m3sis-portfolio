type Props = {
  className?: string;
  size?: number;
};

export function DatabaseIcon({ className, size = 160 }: Props) {
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
        id="AaNDTorhEeaiYPG66xs8_a_M0texU0OX6R0_gr1"
        x1="24"
        x2="24"
        y1="1.292"
        y2="41.381"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#962aff" />
        <stop offset=".781" stopColor="#be85ff" />
        <stop offset="1" stopColor="#c99fff" />
      </linearGradient>
      <path
        fill="url(#AaNDTorhEeaiYPG66xs8_a_M0texU0OX6R0_gr1)"
        d="M24,13c-8.284,0-15,3.238-15,7.232v14.536C9,38.762,15.716,42,24,42s15-3.238,15-7.232V20.232 C39,16.238,32.284,13,24,13z"
      />
      <linearGradient
        id="AaNDTorhEeaiYPG66xs8_b_M0texU0OX6R0_gr2"
        x1="44"
        x2="44"
        y1="3.823"
        y2="38.804"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#962aff" />
        <stop offset=".035" stopColor="#9930ff" />
        <stop offset=".348" stopColor="#ad5fff" />
        <stop offset=".625" stopColor="#bc82ff" />
        <stop offset=".851" stopColor="#c697ff" />
        <stop offset="1" stopColor="#c99fff" />
      </linearGradient>
      <path
        fill="url(#AaNDTorhEeaiYPG66xs8_b_M0texU0OX6R0_gr2)"
        d="M45,31.277v-9.909l-2,1.203v8.706c-0.595,0.346-1,0.984-1,1.723c0,2,2,4,2,4s2-2,2-4 C46,32.262,45.595,31.624,45,31.277z"
      />
      <linearGradient
        id="AaNDTorhEeaiYPG66xs8_c_M0texU0OX6R0_gr3"
        x1="24"
        x2="24"
        y1="34.056"
        y2="13.32"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#962aff" />
        <stop offset=".781" stopColor="#be85ff" />
        <stop offset="1" stopColor="#c99fff" />
      </linearGradient>
      <path
        fill="url(#AaNDTorhEeaiYPG66xs8_c_M0texU0OX6R0_gr3)"
        d="M39,20.23C39,24.372,32.284,28,24,28S9,24.372,9,20.23C9,16.24,15.716,13,24,13 S39,16.24,39,20.23z"
      />
      <linearGradient
        id="AaNDTorhEeaiYPG66xs8_d_M0texU0OX6R0_gr4"
        x1="40.908"
        x2="-.428"
        y1="22.34"
        y2="15.396"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4eaefe" stopOpacity=".2" />
        <stop offset="1" stopColor="#41a2fe" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#AaNDTorhEeaiYPG66xs8_d_M0texU0OX6R0_gr4)"
        d="M47.494,18.122L24.506,5.283c-0.313-0.175-0.696-0.169-1.003,0.016L0.478,19.148 c-0.658,0.396-0.643,1.355,0.028,1.73l22.988,12.839c0.313,0.175,0.696,0.169,1.003-0.016l23.025-13.849 C48.18,19.456,48.165,18.497,47.494,18.122z"
      />
    </svg>
  );
}
