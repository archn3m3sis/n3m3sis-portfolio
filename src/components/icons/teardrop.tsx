type Props = {
  className?: string;
  size?: number;
};

export function TeardropIcon({ className, size = 160 }: Props) {
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
        id="XmWxvmN3ARmHnHMC6xSm7a_rMvtsOUbe8RL_gr1"
        x1="25"
        x2="25"
        y1="50.717"
        y2="31.926"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff01bb" />
        <stop offset=".553" stopColor="#ff5dde" />
        <stop offset="1" stopColor="#ffa4f9" />
      </linearGradient>
      <path
        fill="url(#XmWxvmN3ARmHnHMC6xSm7a_rMvtsOUbe8RL_gr1)"
        d="M25,31c-10.493,0-19,3.134-19,7s8.507,7,19,7s19-3.134,19-7S35.493,31,25,31z"
      />
      <linearGradient
        id="XmWxvmN3ARmHnHMC6xSm7b_rMvtsOUbe8RL_gr2"
        x1="25"
        x2="25"
        y1="5.304"
        y2="36.825"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffbe02" stopOpacity=".4" />
        <stop offset="1" stopColor="#ffe669" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#XmWxvmN3ARmHnHMC6xSm7b_rMvtsOUbe8RL_gr2)"
        d="M27.308,11.409C28.9,10.572,30,8.92,30,7 c0-2.758-2.242-5-5-5s-5,2.242-5,5c0,1.916,1.095,3.563,2.68,4.403C19.956,12.361,18,14.949,18,18v5.339 c0,1.575,1.044,2.96,2.559,3.393l0.066,0.019l0.626,8.759C21.391,37.476,23.028,39,25,39s3.609-1.524,3.749-3.491l0.626-8.759 l0.066-0.019C30.956,26.298,32,24.914,32,23.339v-5.045C32,15.197,30.07,12.421,27.308,11.409z"
      />
    </svg>
  );
}
