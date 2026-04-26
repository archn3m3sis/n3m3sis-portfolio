type Props = {
  className?: string;
  size?: number;
};

export function BulldozerIcon({ className, size = 160 }: Props) {
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
        id="5nPyW_SBC1vsDL3OY143ca_nVNk1Cd1FKmu_gr1"
        x1="24"
        x2="24"
        y1="-18.391"
        y2="30.199"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff6201" />
        <stop offset=".162" stopColor="#ff7105" />
        <stop offset=".473" stopColor="#fe980f" />
        <stop offset=".898" stopColor="#fcd720" />
        <stop offset="1" stopColor="#fce724" />
      </linearGradient>
      <path
        fill="url(#5nPyW_SBC1vsDL3OY143ca_nVNk1Cd1FKmu_gr1)"
        d="M41.057,21L40,21c-0.552,0-1,0.448-1,1v9h-2v-9c0-0.552-0.448-1-1-1h-4v-6.269 C32,14.327,31.673,14,31.269,14h-2.538C28.327,14,28,14.327,28,14.731V21h-6.833l-1.09-13.083C20.033,7.399,19.6,7,19.08,7H3 C2.448,7,2,7.448,2,8l0,12c0,0.548-0.44,1.007-0.988,1C0.454,20.993,0,21.444,0,22v12c0,0.552,0.448,1,1,1h38v7c0,0.552,0.448,1,1,1 h8v-3c-4.24-3.903-5.544-11.52-5.948-18.063C42.02,21.408,41.587,21,41.057,21z M16.905,21H8c-0.552,0-1-0.448-1-1v-9 c0-0.552,0.448-1,1-1h8.087c0.517,0,0.949,0.394,0.996,0.909l0.818,9C17.954,20.495,17.493,21,16.905,21z"
      />
      <linearGradient
        id="5nPyW_SBC1vsDL3OY143cb_nVNk1Cd1FKmu_gr2"
        x1="18.5"
        x2="18.5"
        y1="35.5"
        y2="19.656"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f4805d" stopOpacity=".4" />
        <stop offset="1" stopColor="#ffd8bb" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#5nPyW_SBC1vsDL3OY143cb_nVNk1Cd1FKmu_gr2)"
        d="M29.5,28h-22C3.358,28,0,31.358,0,35.5 S3.358,43,7.5,43h22c4.142,0,7.5-3.358,7.5-7.5S33.642,28,29.5,28z M7.5,39C5.567,39,4,37.433,4,35.5S5.567,32,7.5,32 s3.5,1.567,3.5,3.5S9.433,39,7.5,39z M18.5,39c-1.933,0-3.5-1.567-3.5-3.5s1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5S20.433,39,18.5,39z M29.5,39c-1.933,0-3.5-1.567-3.5-3.5s1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5S31.433,39,29.5,39z"
      />
    </svg>
  );
}
