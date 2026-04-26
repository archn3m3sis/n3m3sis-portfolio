type Props = {
  className?: string;
  size?: number;
};

export function WandBurstIcon({ className, size = 160 }: Props) {
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
        id="-BYDL0txgEqdqBzPup3wYa_0ryjTxuJfsv9_gr1"
        x1="50.219"
        x2="31.062"
        y1="-7.247"
        y2="22.323"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff6201" />
        <stop offset=".689" stopColor="#fdbd19" />
        <stop offset="1" stopColor="#fce724" />
      </linearGradient>
      <path
        fill="url(#-BYDL0txgEqdqBzPup3wYa_0ryjTxuJfsv9_gr1)"
        d="M47.873,6.247c0.4-1.015-0.187-2.239-1.286-2.803c-1.071-0.675-2.486-0.596-3.244,0.343 L35.827,15.11L35.8,15.157c-2.921-1.31-5.282-0.582-7.094,2.142l-0.023-0.013c-0.095,0.158-0.209,0.35-0.34,0.571 c-0.017,0.03-0.036,0.052-0.053,0.082l-0.137,0.24c-0.115,0.195-0.237,0.403-0.376,0.641c-1.717,2.944-7.268,6.705-13.725,6.339 c-0.634-0.036-1.063,0.648-0.744,1.197c0.307,0.53,0.63,1.03,0.957,1.518c0.041,0.061,0.1,0.101,0.173,0.11 c1.016,0.124,3.011,0.265,4.698-0.244c-0.981,0.787-2.061,1.384-3.271,1.733c-0.174,0.05-0.245,0.26-0.132,0.401 c6.157,7.659,14.484,9.633,17.412,10.1c0.659,0.105,1.335-0.108,1.797-0.59c3.518-3.675,6.602-9.145,8.045-11.902l0.025,0.014 l0.509-0.895c1.861-3.269,1.372-5.894-1.447-7.878l0.025-0.046L47.873,6.247z"
      />
      <linearGradient
        id="-BYDL0txgEqdqBzPup3wYe_0ryjTxuJfsv9_gr5"
        x1="30.753"
        x2="45.603"
        y1="39.037"
        y2="6.521"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f4805d" stopOpacity=".4" />
        <stop offset="1" stopColor="#ffcfae" stopOpacity=".2" />
      </linearGradient>
      <path
        fill="url(#-BYDL0txgEqdqBzPup3wYe_0ryjTxuJfsv9_gr5)"
        d="M48,40.75c0-2.347-1.945-4.25-4.345-4.25 c-0.715,0-1.38,0.185-1.975,0.484c0.073-0.353,0.113-0.718,0.113-1.092c0-3.018-2.501-5.464-5.586-5.464 c-0.974,0-1.877,0.266-2.674,0.695C32.47,29.269,30.466,28,28.138,28c-2.548,0-4.732,1.505-5.688,3.653 c-2.848,0.051-5.15,2.187-5.428,4.914c-0.222-0.034-0.445-0.067-0.676-0.067c-2.4,0-4.345,1.903-4.345,4.25S13.6,45,16,45 c1.87,0,23.724,0.061,27,0C46,45,48,42.889,48,40.75z"
      />
      <circle cx="10" cy="33" r="3" fill="#fcad10" opacity=".7" />
      <circle cx="6" cy="39" r="2" fill="#fcad10" opacity=".7" />
      <circle cx="2.5" cy="30.5" r="2.5" fill="#fcad10" opacity=".7" />
    </svg>
  );
}
