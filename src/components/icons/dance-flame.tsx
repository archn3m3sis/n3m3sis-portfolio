type Props = {
  className?: string;
  size?: number;
};

export function DanceFlameIcon({ className, size = 160 }: Props) {
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
        id="xVDKq_D-538NByGO4ClQ_a_ZAM9bckSwg4R_gr1"
        x1="-16069.606"
        x2="-16062.796"
        y1="15788.998"
        y2="15788.998"
        gradientTransform="rotate(-90 -15896.088 -131.09)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fe8c08" />
        <stop offset=".289" stopColor="#fd9013" />
        <stop offset=".593" stopColor="#fdc91c" />
        <stop offset=".841" stopColor="#fcdf22" />
        <stop offset="1" stopColor="#fcdf24" />
      </linearGradient>
      <path
        fill="url(#xVDKq_D-538NByGO4ClQ_a_ZAM9bckSwg4R_gr1)"
        d="M7,37.998c0-1.655,1.344-3,3-3h28c1.655,0,3,1.345,3,3 c0,1.656-1.345,3-3,3H10C8.344,40.998,7,39.654,7,37.998z"
      />
      <linearGradient
        id="xVDKq_D-538NByGO4ClQ_b_ZAM9bckSwg4R_gr2"
        x1="-976.948"
        x2="-936.948"
        y1="-71.962"
        y2="-71.962"
        gradientTransform="rotate(90 -514.953 466.991)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffd4d4" />
        <stop offset="1" stopColor="#ff7b7b" />
      </linearGradient>
      <path
        fill="url(#xVDKq_D-538NByGO4ClQ_b_ZAM9bckSwg4R_gr2)"
        fillOpacity=".302"
        d="M11,41.996v-7.024L3.573,24.762 C3.2,24.248,3,23.631,3,22.996v-15c0-1.655,1.344-3,3-3c1.655,0,3,1.345,3,3v11.767c0.04,0.037,0.08,0.075,0.12,0.113l4.999,5 l-1.905-4.765c-1.377-3.445,3.607-5.816,5.408-2.571l3.748,6.745C22.382,26.111,23,28.248,23,30.336v11.66c0,1.656-1.345,3-3,3h-6 C12.344,44.996,11,43.652,11,41.996z M25,41.996v-11.66c0-2.088,0.617-4.225,1.631-6.051l3.748-6.745 c1.801-3.245,6.785-0.875,5.408,2.571l-1.905,4.765l4.999-5c0.04-0.039,0.08-0.076,0.12-0.113V7.996c0-1.655,1.345-3,3-3 c1.656,0,3,1.345,3,3v15c0,0.635-0.2,1.252-0.573,1.765L37,34.972v7.024c0,1.656-1.344,3-3,3h-6C26.345,44.996,25,43.652,25,41.996z"
      />
    </svg>
  );
}
