type Props = {
  className?: string;
  size?: number;
};

export function ClockToggleIcon({ className, size = 160 }: Props) {
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
        id="8mDM6Mq8lGpt7lLaU-Kpia_rdvHQ7vLfgGq_gr1"
        x1="26"
        x2="26"
        y1="44.502"
        y2="-2.243"
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
        fill="url(#8mDM6Mq8lGpt7lLaU-Kpia_rdvHQ7vLfgGq_gr1)"
        d="M43,13H9c-1.105,0-2,0.895-2,2v5c0,1.104,0.895,2,2,2v19c0,1.104,0.895,2,2,2h30 c1.105,0,2-0.896,2-2V22c1.105,0,2-0.896,2-2v-5C45,13.895,44.105,13,43,13z"
      />
      <path fill="#1da4ff" d="M35,13v3c0,1.1,0.9,2,2,2s2-0.9,2-2v-3H35z" />
      <linearGradient
        id="8mDM6Mq8lGpt7lLaU-Kpib_rdvHQ7vLfgGq_gr2"
        x1="37"
        x2="37"
        y1="7.12"
        y2="23.402"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#e4c5ff" stopOpacity=".4" />
        <stop offset="1" stopColor="#f4e9ff" stopOpacity=".2" />
      </linearGradient>
      <path
        fill="url(#8mDM6Mq8lGpt7lLaU-Kpib_rdvHQ7vLfgGq_gr2)"
        d="M37,7c-1.1,0-2,0.9-2,2v7c0,1.1,0.9,2,2,2s2-0.9,2-2V9C39,7.9,38.1,7,37,7z"
      />
      <linearGradient
        id="8mDM6Mq8lGpt7lLaU-Kpid_rdvHQ7vLfgGq_gr4"
        x1="26"
        x2="26"
        y1="30.5"
        y2="6.5"
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
        fill="url(#8mDM6Mq8lGpt7lLaU-Kpid_rdvHQ7vLfgGq_gr4)"
        d="M14,23h6v6h-6V23z M23,29h6v-6h-6V29z M32,29h6v-6h-6V29z M14,38h6v-6h-6V38z M23,38h6v-6h-6V38z M32,38h6v-6h-6V38z"
      />
      <linearGradient
        id="8mDM6Mq8lGpt7lLaU-Kpie_rdvHQ7vLfgGq_gr5"
        x1="23.4"
        x2="4.953"
        y1="6.71"
        y2="24.941"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6" />
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4" />
      </linearGradient>
      <circle cx="14" cy="16" r="11" fill="url(#8mDM6Mq8lGpt7lLaU-Kpie_rdvHQ7vLfgGq_gr5)" />
      <path
        fill="#fff"
        d="M17,20c-0.256,0-0.512-0.098-0.707-0.293l-3-3C13.105,16.52,13,16.266,13,16v-6c0-0.553,0.448-1,1-1 s1,0.447,1,1v5.586l2.707,2.707c0.391,0.391,0.391,1.023,0,1.414C17.512,19.902,17.256,20,17,20z"
      />
    </svg>
  );
}
