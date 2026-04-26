type Props = {
  className?: string;
  size?: number;
};

export function ServerStackIcon({ className, size = 160 }: Props) {
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
        id="AQCrRur6aKelJbrVmcQvCa_B5dXDT4KfYzq_gr1"
        x1="24"
        x2="24"
        y1="18.647"
        y2="35.006"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#00bc73" />
        <stop offset=".754" stopColor="#5bdd46" />
        <stop offset=".99" stopColor="#78e837" />
      </linearGradient>
      <path
        fill="url(#AQCrRur6aKelJbrVmcQvCa_B5dXDT4KfYzq_gr1)"
        d="M46.404,22.041l-4.848-1C41.423,21.014,41.288,21,41.152,21H28.761L33,17h9l1.789,0.894 C43.928,17.964,44.081,18,44.236,18H47c0.552,0,1-0.448,1-1v-3c0-0.552-0.448-1-1-1h-2.764c-0.155,0-0.308,0.036-0.447,0.105L42,14 h-9l-4.05-4.735C28.766,9.094,28.524,9,28.272,9H15.804H11c-0.552,0-1,0.448-1,1v7.377c0,0.381,0.217,0.729,0.559,0.897L16.098,21 H7.109c-0.129,0-0.258,0.013-0.384,0.037l-5.109,1c-1.084,0.212-1.791,1.263-1.579,2.347c0.212,1.084,1.256,1.794,2.347,1.579 L7,25.059V32c0,1.104,0.895,2,2,2h30c1.105,0,2-0.896,2-2v-6.989l4.596,0.948C45.732,25.987,45.868,26,46.002,26 c0.929,0,1.762-0.65,1.957-1.596C48.182,23.322,47.486,22.265,46.404,22.041z"
      />
      <linearGradient
        id="AQCrRur6aKelJbrVmcQvCb_B5dXDT4KfYzq_gr2"
        x1="24"
        x2="24"
        y1="56.674"
        y2="40.83"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#01fff7" stopOpacity=".3" />
        <stop offset="1" stopColor="#01fff7" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#AQCrRur6aKelJbrVmcQvCb_B5dXDT4KfYzq_gr2)"
        d="M40.5,27h-33C3.358,27,0,30.358,0,34.5 S3.358,42,7.5,42h33c4.142,0,7.5-3.358,7.5-7.5S44.642,27,40.5,27z M7.5,38C5.567,38,4,36.433,4,34.5S5.567,31,7.5,31 s3.5,1.567,3.5,3.5S9.433,38,7.5,38z M18.5,38c-1.933,0-3.5-1.567-3.5-3.5s1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5S20.433,38,18.5,38z M29.5,38c-1.933,0-3.5-1.567-3.5-3.5s1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5S31.433,38,29.5,38z M40.5,38c-1.933,0-3.5-1.567-3.5-3.5 s1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5S42.433,38,40.5,38z"
      />
    </svg>
  );
}
