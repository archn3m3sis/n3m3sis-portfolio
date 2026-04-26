type Props = {
  className?: string;
  size?: number;
};

export function LetterDIcon({ className, size = 160 }: Props) {
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
        id="DsCHF0AwurHO2WQUR_dPta_9EvNKrEmIZRI_gr1"
        x1="18.155"
        x2="44.003"
        y1="3.915"
        y2="51.785"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffa4f9" />
        <stop offset=".447" stopColor="#ff5dde" />
        <stop offset="1" stopColor="#ff01bb" />
      </linearGradient>
      <path
        fill="url(#DsCHF0AwurHO2WQUR_dPta_9EvNKrEmIZRI_gr1)"
        d="M42.207,42H15.793C14.803,42,14,41.197,14,40.207V7.793C14,6.803,14.803,6,15.793,6h26.413 C43.197,6,44,6.803,44,7.793v32.413C44,41.197,43.197,42,42.207,42z"
      />
      <path
        fill="#ff49d7"
        d="M44,24H14V11h30.855c1.097,0,1.91,1.021,1.663,2.09L44,24z"
      />
      <path
        fill="#ff78e8"
        d="M44,24H14v13h30.855c1.097,0,1.91-1.021,1.663-2.09L44,24z"
      />
      <linearGradient
        id="DsCHF0AwurHO2WQUR_dPtb_9EvNKrEmIZRI_gr2"
        x1="26.772"
        x2="8.838"
        y1="33.076"
        y2="20.332"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffe669" stopOpacity=".4" />
        <stop offset="1" stopColor="#ffbe02" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#DsCHF0AwurHO2WQUR_dPtb_9EvNKrEmIZRI_gr2)"
        d="M23.151,35H4.849 C3.828,35,3,34.172,3,33.151V14.849C3,13.828,3.828,13,4.849,13h18.302C24.172,13,25,13.828,25,14.849v18.302 C25,34.172,24.172,35,23.151,35z"
      />
      <path
        fill="#fff"
        d="M9.878,18.69c0.845-0.142,1.924-0.22,3.065-0.22c1.971,0,3.332,0.407,4.301,1.221 c1.017,0.828,1.642,2.08,1.642,3.878c0,1.877-0.641,3.285-1.642,4.192c-1.048,0.954-2.721,1.438-4.771,1.438 c-1.126,0-1.971-0.062-2.596-0.141V18.69z M11.802,27.621c0.266,0.047,0.672,0.047,1.063,0.047 c2.502,0.016,3.988-1.361,3.988-4.035c0.016-2.331-1.329-3.66-3.738-3.66c-0.61,0-1.048,0.047-1.314,0.109V27.621z"
      />
    </svg>
  );
}
