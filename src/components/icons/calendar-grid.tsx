type Props = {
  className?: string;
  size?: number;
};

export function CalendarGridIcon({ className, size = 160 }: Props) {
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
        id="UZR-2UgUXw-uOLYxK0N02a_rTTJjs740AmE_gr1"
        x1="26.435"
        x2="26.435"
        y1="34.197"
        y2="-14.733"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#00bc73" />
        <stop offset=".762" stopColor="#5bdd46" />
        <stop offset="1" stopColor="#78e837" />
      </linearGradient>
      <path
        fill="url(#UZR-2UgUXw-uOLYxK0N02a_rTTJjs740AmE_gr1)"
        d="M45.435,40.022h-38c-0.552,0-1-0.448-1-1v-20c0-0.552,0.448-1,1-1h38c0.552,0,1,0.448,1,1v20 C46.435,39.574,45.987,40.022,45.435,40.022z"
      />
      <path
        fill="#5cde45"
        d="M39.435,20.022h-26c0,2.761-2.239,5-5,5v8c2.761,0,5,2.239,5,5h26c0-2.761,2.239-5,5-5v-8 C41.673,25.022,39.435,22.783,39.435,20.022z"
      />
      <ellipse cx="26.435" cy="29.022" fill="#11c26b" rx="6" ry="7" />
      <linearGradient
        id="UZR-2UgUXw-uOLYxK0N02b_rTTJjs740AmE_gr2"
        x1="21.262"
        x2="21.262"
        y1="30.65"
        y2=".255"
        gradientTransform="rotate(-5.19 24.01 19.006)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#b8fffb" stopOpacity=".4" />
        <stop offset="1" stopColor="#01fff7" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#UZR-2UgUXw-uOLYxK0N02b_rTTJjs740AmE_gr2)"
        d="M41.353,30.256l-37.844,3.44 c-0.55,0.05-1.036-0.355-1.086-0.905L0.612,12.874c-0.05-0.55,0.355-1.036,0.905-1.086l37.844-3.44 c0.55-0.05,1.036,0.355,1.086,0.905l1.811,19.918C42.308,29.72,41.903,30.206,41.353,30.256z"
      />
    </svg>
  );
}
