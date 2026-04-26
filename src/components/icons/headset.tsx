type Props = {
  className?: string;
  size?: number;
};

export function HeadsetIcon({ className, size = 160 }: Props) {
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
        id="hsetGradA"
        x1="-523.148"
        x2="-496.595"
        y1="-171.249"
        y2="-171.249"
        gradientTransform="rotate(90 -338.905 191.653)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#86e8ff" />
        <stop offset="1" stopColor="#00a1fc" />
      </linearGradient>
      <path
        fill="url(#hsetGradA)"
        d="M3.999,34L3.997,24 c0-11.041,8.96-20.001,20.001-20.001c11.04,0,20.001,8.96,20.001,20v10c0,1.104-0.897,2-2,2c-1.104,0-2-0.896-2-2v-10 c0-8.831-7.171-16-16.001-16c-8.832,0-16.001,7.169-16.001,16l0.001,10c0.001,1.104-0.895,2-1.999,2C4.895,36,3.999,35.104,3.999,34z"
      />
      <linearGradient
        id="hsetGradB"
        x1="-518.524"
        x2="-502.01"
        y1="-160.627"
        y2="-160.627"
        gradientTransform="rotate(90 -340.53 203.9)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" />
        <stop offset="1" stopColor="#daa6ff" />
      </linearGradient>
      <path
        fill="url(#hsetGradB)"
        d="M1.998,34.999l-0.001-2 c0-4.416,3.585-8,8.001-8h1.999c2.208,0,4.001,1.792,4.001,4l0.001,10c0,2.208-1.793,4-4.001,4H9.999 C5.583,42.999,1.998,39.415,1.998,34.999z M31.997,38.999l0.001-10c0-2.208,1.793-4,4.001-4h1.999c4.416,0,8.001,3.584,8.001,8 l-0.001,2c0,4.416-3.585,8-8.001,8h-1.999C33.79,42.999,31.997,41.207,31.997,38.999z"
      />
    </svg>
  );
}
