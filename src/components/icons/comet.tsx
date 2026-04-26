type Props = {
  className?: string;
  size?: number;
};

export function CometIcon({ className, size = 160 }: Props) {
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
        id="g36mMuyhusvrB8Hekkrkna_XuLYpx0vEEyw_gr1"
        x1="17.306"
        x2="35.235"
        y1="9.752"
        y2="43.735"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff01bb" />
        <stop offset=".553" stopColor="#ff5dde" />
        <stop offset="1" stopColor="#ffa4f9" />
      </linearGradient>
      <path
        fill="url(#g36mMuyhusvrB8Hekkrkna_XuLYpx0vEEyw_gr1)"
        d="M40.638,10.195c0.354-1.165,1.344-2.168,1.776-2.506c0.657-0.504,0.781-1.446,0.276-2.104 c-0.504-0.655-1.445-0.779-2.103-0.275c-0.1,0.077-1.988,1.557-2.759,3.809C32.494,8.266,29.042,12.564,26.629,22 c-2.506,9.797-11.036,12.456-21.792,13.684c-0.984,0.112-1.085,1.184-0.38,1.862C7.014,40,12.074,42,18.314,42 c14.302,0,23.256-10.274,25.303-20.129C44.521,17.515,43.932,12.449,40.638,10.195z"
      />
      <linearGradient
        id="g36mMuyhusvrB8Hekkrknb_XuLYpx0vEEyw_gr2"
        x1="16.886"
        x2="17.105"
        y1="7.996"
        y2="41.352"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffe669" stopOpacity=".4" />
        <stop offset="1" stopColor="#ffbe02" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#g36mMuyhusvrB8Hekkrknb_XuLYpx0vEEyw_gr2)"
        d="M12.165,8.775c2.695,5.009,1.382,9.032-0.445,11.791c-1.398-2.064-2.187-3.864-2.573-4.891 c-0.143-0.381-0.654-0.443-0.88-0.104C7.197,17.18,5,21.013,5,25.4C5,31.925,9.893,37,16.52,37S29,31.925,29,25.4 c0-11.359-8.914-16.96-16.388-17.375C12.222,8.003,11.98,8.431,12.165,8.775z"
      />
    </svg>
  );
}
