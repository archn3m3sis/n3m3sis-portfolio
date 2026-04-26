type Props = {
  className?: string;
  size?: number;
};

export function LetterXIcon({ className, size = 160 }: Props) {
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
        id="A9e7kwnshHT2Ng3__qcl6a_DqL6HmxuqMzX_gr1"
        x1="23.76"
        x2="43.256"
        y1="13.505"
        y2="48.832"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#78e837" />
        <stop offset=".238" stopColor="#5bdd46" />
        <stop offset="1" stopColor="#00bc73" />
      </linearGradient>
      <path
        fill="url(#A9e7kwnshHT2Ng3__qcl6a_DqL6HmxuqMzX_gr1)"
        d="M42.207,41H15.793C14.803,41,14,40.197,14,39.207V6.793C14,5.803,14.803,5,15.793,5h26.413 C43.197,5,44,5.803,44,6.793v32.413C44,40.197,43.197,41,42.207,41z"
      />
      <polygon
        fill="#36a368"
        points="44,15 44,13 31,13 31,5 29,5 29,13 14,13 14,15 29,15 29,22 14,22 14,24 29,24 29,31 14,31 14,33 29,33 29,41 31,41 31,33 44,33 44,31 31,31 31,24 44,24 44,22 31,22 31,15"
        opacity=".3"
      />
      <linearGradient
        id="A9e7kwnshHT2Ng3__qcl6b_DqL6HmxuqMzX_gr2"
        x1="21.966"
        x2="4.033"
        y1="28.661"
        y2="15.918"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#01fff7" stopOpacity=".4" />
        <stop offset="1" stopColor="#01fff7" stopOpacity=".3" />
      </linearGradient>
      <path
        fill="url(#A9e7kwnshHT2Ng3__qcl6b_DqL6HmxuqMzX_gr2)"
        d="M23.151,34H4.849 C3.828,34,3,33.172,3,32.151V13.849C3,12.828,3.828,12,4.849,12h18.302C24.172,12,25,12.828,25,13.849v18.302 C25,33.172,24.172,34,23.151,34z"
      />
      <path
        fill="#fff"
        d="M9.807,18h2.386l1.936,3.754L16.175,18h2.229l-3.071,5l3.141,5h-2.351l-2.11-3.93L11.912,28H9.526 l3.193-5.018L9.807,18z"
      />
    </svg>
  );
}
