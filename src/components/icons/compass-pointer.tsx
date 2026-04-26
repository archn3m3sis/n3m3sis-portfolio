type Props = {
  className?: string;
  size?: number;
};

export function CompassPointerIcon({ className, size = 160 }: Props) {
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
        id="xjtZKuc7sebJdHd7ySyM0a_u9j8n6duZZbJ_gr1"
        x1="22.879"
        x2="22.879"
        y1="32.422"
        y2="5.097"
        gradientTransform="rotate(45.001 25 26.5)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#009cfc" />
        <stop offset=".275" stopColor="#26b3fd" />
        <stop offset=".885" stopColor="#84edff" />
        <stop offset="1" stopColor="#97f8ff" />
      </linearGradient>
      <path
        fill="url(#xjtZKuc7sebJdHd7ySyM0a_u9j8n6duZZbJ_gr1)"
        d="M43.006,38.021c4.491-4.491,0.85-15.413-8.132-24.395S14.97,1.003,10.479,5.494 C8.211,7.762,8.02,11.672,9.541,16.143l-3.494,1.555c-0.661-0.978-1.504-1.52-2.1-1.254c-0.757,0.337-0.824,1.837-0.15,3.351 c0.674,1.514,1.834,2.467,2.59,2.131c0.596-0.265,0.757-1.254,0.473-2.4l3.403-1.515c1.569,3.64,4.176,7.538,7.649,11.163 l-2.645,2.645c-0.968-0.676-1.949-0.88-2.41-0.418c-0.586,0.586-0.111,2.01,1.061,3.182s2.596,1.646,3.182,1.061 c0.461-0.461,0.258-1.442-0.418-2.41l2.645-2.645c3.625,3.473,7.522,6.08,11.163,7.649l-1.515,3.403 c-1.146-0.284-2.135-0.123-2.4,0.473c-0.337,0.757,0.617,1.917,2.131,2.59c1.514,0.674,3.014,0.607,3.351-0.15 c0.265-0.596-0.276-1.438-1.254-2.1l1.555-3.494C36.828,40.48,40.738,40.289,43.006,38.021z"
      />
      <linearGradient
        id="xjtZKuc7sebJdHd7ySyM0b_u9j8n6duZZbJ_gr2"
        x1="44.402"
        x2="44.402"
        y1="41.866"
        y2="62.962"
        gradientTransform="rotate(45.001 86.597 21.574)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6" />
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#xjtZKuc7sebJdHd7ySyM0b_u9j8n6duZZbJ_gr2)"
        d="M40.868,27.431 c-2.387,2.387-8.754-0.11-14.221-5.578s-7.965-11.834-5.578-14.221s11.489-6.737,19.013,0.786S43.255,25.044,40.868,27.431z"
      />
      <circle cx="22.491" cy="26.009" r="2.487" fill="#7dd7ff" />
      <ellipse
        cx="14.248"
        cy="9.266"
        fill="#7dd7ff"
        rx="2.498"
        ry="2.332"
        transform="rotate(-42.382 14.248 9.265)"
      />
      <ellipse
        cx="39.367"
        cy="34.551"
        fill="#7dd7ff"
        rx="2.375"
        ry="2.218"
        transform="rotate(-47.618 39.366 34.55)"
      />
    </svg>
  );
}
