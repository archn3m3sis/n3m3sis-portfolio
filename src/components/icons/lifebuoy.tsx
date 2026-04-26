type Props = {
  className?: string;
  size?: number;
};

export function LifebuoyIcon({ className, size = 160 }: Props) {
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
        id="TrU5Q33-Gb5VSmoTwgq7Ia_0f1Uyy75Tjki_gr1"
        x1="27.019"
        x2="27.019"
        y1="7.63"
        y2="31.856"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffa4f9" />
        <stop offset=".447" stopColor="#ff5dde" />
        <stop offset="1" stopColor="#ff01bb" />
      </linearGradient>
      <path
        fill="url(#TrU5Q33-Gb5VSmoTwgq7Ia_0f1Uyy75Tjki_gr1)"
        d="M43.895,13.89c-1.415-0.388-2.852-0.251-4.157,0.326c0.1-1.007,0.181-2.038,0.223-3.118 C40.004,9.957,39.099,9,37.958,9H8.042C6.901,9,5.996,9.957,6.04,11.097c0.536,14.043,6.354,21.929,8.317,24.205 C14.739,35.746,15.29,36,15.876,36h14.249c0.586,0,1.136-0.254,1.519-0.698c0.841-0.975,2.389-2.988,3.927-6.064 c0.014-0.024,0.034-0.042,0.047-0.067c0.611-1.223,2.184-1.706,4.912-2.457l0.546-0.15C44.423,25.635,48,23.226,48,19.25 C48,16.681,46.389,14.576,43.895,13.89z M40.273,23.673l-0.54,0.148c-0.754,0.208-1.481,0.408-2.168,0.632 c0.605-1.769,1.145-3.748,1.562-5.938c1.23-1.72,2.826-2.048,3.972-1.733C44.018,17.035,45,17.816,45,19.25 C45,22.137,41.382,23.365,40.273,23.673z"
      />
      <linearGradient
        id="TrU5Q33-Gb5VSmoTwgq7Ib_0f1Uyy75Tjki_gr2"
        x1="22.923"
        x2="22.923"
        y1="37.223"
        y2="13.596"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffbe02" stopOpacity=".4" />
        <stop offset="1" stopColor="#fff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#TrU5Q33-Gb5VSmoTwgq7Ib_0f1Uyy75Tjki_gr2)"
        d="M4.077,32c-0.757,0-1.275,0.79-1.004,1.531 C4.013,36.099,6.43,41,11.187,41h23.638c3.921,0,6.697-4.794,7.911-7.384C43.086,32.867,42.563,32,41.767,32H4.077z"
      />
    </svg>
  );
}
