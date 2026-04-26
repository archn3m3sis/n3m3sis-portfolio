type Props = {
  className?: string;
  size?: number;
};

export function CursorClipIcon({ className, size = 160 }: Props) {
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
        id="U0k-vSfcM9Wt22f22jgPca_JfNgDPcPs7dJ_gr1"
        x1="26.223"
        x2="26.088"
        y1="48.322"
        y2="3.08"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff01bb" />
        <stop offset=".553" stopColor="#ff5dde" />
        <stop offset="1" stopColor="#ffa4f9" />
      </linearGradient>
      <path
        fill="url(#U0k-vSfcM9Wt22f22jgPca_JfNgDPcPs7dJ_gr1)"
        d="M26,16L26,16c-5.689,0-13.634,3.291-17.657,7.313l-0.729,0.729 c-0.391,0.391-0.391,1.024,0,1.414l10.929,10.929c0.391,0.391,1.024,0.391,1.414,0L33.584,22.76 c0.867-0.867,1.968-0.984,2.835-0.117C37.105,23.329,37,24,37,25c0,1.458-0.003,1.852,0,5c0.003,2.423,1,5,4,5c2.309,0,4-2,4-5 C45,23,38.13,16,26,16z"
      />
      <linearGradient
        id="U0k-vSfcM9Wt22f22jgPcb_JfNgDPcPs7dJ_gr2"
        x1="20"
        x2="20"
        y1="42.342"
        y2="2.652"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffbe02" stopOpacity=".4" />
        <stop offset="1" stopColor="#ffe669" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#U0k-vSfcM9Wt22f22jgPcb_JfNgDPcPs7dJ_gr2)"
        d="M36.418,22.642L21.358,7.582c-0.775-0.775-2.032-0.775-2.808,0L4.163,21.968 c-1.551,1.551-1.551,4.065,0,5.616l12.253,12.253c1.551,1.551,4.065,1.551,5.615,0L36.418,25.45 C37.194,24.675,37.194,23.418,36.418,22.642z"
      />
    </svg>
  );
}
