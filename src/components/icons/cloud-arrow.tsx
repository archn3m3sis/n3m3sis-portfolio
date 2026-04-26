type Props = {
  className?: string;
  size?: number;
};

export function CloudArrowIcon({ className, size = 160 }: Props) {
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
        id="Az2NDf4fJa6ukCuMr9JJAa_rMuvyqYyxruQ_gr1"
        x1="24.5"
        x2="24.5"
        y1="37.953"
        y2="-13.095"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#009cfc" />
        <stop offset=".486" stopColor="#51cdfe" />
        <stop offset=".831" stopColor="#83ecff" />
        <stop offset="1" stopColor="#97f8ff" />
      </linearGradient>
      <path
        fill="url(#Az2NDf4fJa6ukCuMr9JJAa_rMuvyqYyxruQ_gr1)"
        d="M7,35c-3,0-5-2.043-5-6c0-2.037,0.49-9.894,2.839-14.53c0.8-1.579,1.601-1.575,2.71-0.191 C9.823,17.12,13,18,15,18c1,0,5,0.173,3.661-3.467C16.92,9.801,20.152,8.315,21,9.278c7.311,8.305,11.607,11.185,20.948,14.328 C45.31,24.738,47,26,47,29c0,2-3,6-10,6c-9,0-13.357-1-18-1C14.571,34,11,35,7,35z"
      />
      <linearGradient
        id="Az2NDf4fJa6ukCuMr9JJAb_rMuvyqYyxruQ_gr2"
        x1="24"
        x2="24"
        y1="30.208"
        y2="38.082"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#daa6ff" stopOpacity=".6" />
        <stop offset="1" stopColor="#dca6ff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#Az2NDf4fJa6ukCuMr9JJAb_rMuvyqYyxruQ_gr2)"
        d="M2,29c-1.038,0-2,5-2,7s1.265,3,2.975,3H39c6.783,0,9-2.842,9-6c0-1.078-0.158-4-1-4 c-1.038,0-3.812,2-9,2c-3.113,0-9.051-1-11.023-1C24,30,21.261,31,19,31c-1.714,0-4.58-1-6.549-1c-1.795,0-2.692,1-4.15,1 C5.967,31,3.038,29,2,29z"
      />
      <linearGradient
        id="Az2NDf4fJa6ukCuMr9JJAd_rMuvyqYyxruQ_gr4"
        x1="26.502"
        x2="44.169"
        y1="21.843"
        y2="-1.722"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#009cfc" />
        <stop offset=".486" stopColor="#51cdfe" />
        <stop offset=".831" stopColor="#83ecff" />
        <stop offset="1" stopColor="#97f8ff" />
      </linearGradient>
      <path
        fill="url(#Az2NDf4fJa6ukCuMr9JJAd_rMuvyqYyxruQ_gr4)"
        d="M29.001,17.12l-1.941,1.941C26.768,19.354,26.384,19.5,26,19.5s-0.768-0.146-1.061-0.439 c-0.586-0.586-0.586-1.535,0-2.121l1.761-1.761C27.473,15.879,28.236,16.524,29.001,17.12z M30.589,18.29l-1.649,1.649 c-0.586,0.586-0.586,1.535,0,2.121C29.232,22.354,29.616,22.5,30,22.5s0.768-0.146,1.061-0.439l2.145-2.145 C32.303,19.412,31.437,18.874,30.589,18.29z"
      />
    </svg>
  );
}
