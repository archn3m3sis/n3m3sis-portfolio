type Props = {
  className?: string;
  size?: number;
};

export function LighthouseIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="lh_g1" x1="15" x2="15" y1="42.174" y2="20.356" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ffa4f9"/>
        <stop offset=".447" stopColor="#ff5dde"/>
        <stop offset="1" stopColor="#ff01bb"/>
      </linearGradient>
      <path fill="url(#lh_g1)" d="M20,20H10L5.251,42.796C5.121,43.417,5.595,44,6.23,44h17.54c0.634,0,1.108-0.583,0.979-1.204 L20,20z"/>
      <linearGradient id="lh_g2" x1="15" x2="15" y1="29.933" y2="9.925" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ff01bb"/>
        <stop offset=".553" stopColor="#ff5dde"/>
        <stop offset="1" stopColor="#ffa4f9"/>
      </linearGradient>
      <path fill="url(#lh_g2)" d="M20,18V9.566 c0-0.351-0.184-0.677-0.486-0.857l-4-2.4c-0.317-0.19-0.712-0.19-1.029,0l-4,2.4C10.184,8.889,10,9.215,10,9.566V18H8.5 C8.224,18,8,18.224,8,18.5v2C8,20.776,8.224,21,8.5,21h13c0.276,0,0.5-0.224,0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5H20z"/>
      <path fill="#ff01bb" d="M15.316,12.868l5.434,2.038v-5.34c0-0.154-0.021-0.305-0.06-0.45l-5.375,2.016 C14.513,11.432,14.513,12.568,15.316,12.868z" opacity=".4"/>
      <path fill="#ff01bb" d="M15.316,12.868l6.184,2.319V9.566c0-0.245-0.044-0.482-0.113-0.711l-6.071,2.277 C14.513,11.432,14.513,12.568,15.316,12.868z" opacity=".3"/>
      <path fill="#ff01bb" d="M15.316,12.868l6.934,2.6V9.566c0-0.336-0.067-0.66-0.167-0.973l-6.767,2.538 C14.513,11.432,14.513,12.568,15.316,12.868z" opacity=".2"/>
      <path fill="#ff01bb" d="M15.316,12.868L23,15.75V9.566c0-0.427-0.077-0.842-0.207-1.239l-7.477,2.804 C14.513,11.432,14.513,12.568,15.316,12.868z" opacity=".1"/>
      <path fill="#ff47d6" d="M20,16v-1V9.566c0-0.351-0.184-0.677-0.486-0.857l-1.321-0.793l-3.58,1.343 c-2.532,0.949-2.529,4.534,0,5.482L20,16.761V16z" opacity=".05"/>
      <path fill="#ff47d6" d="M15.175,13.243L20,15.052V9.566c0-0.202-0.066-0.391-0.175-0.553l-4.65,1.744 C14.027,11.188,14.027,12.813,15.175,13.243z" opacity=".4"/>
      <path fill="#ff47d6" d="M15.035,13.618L20,15.479V9.566c0-0.351-0.184-0.677-0.486-0.857l-0.006-0.004 l-4.473,1.678C13.54,10.943,13.542,13.058,15.035,13.618z" opacity=".3"/>
      <path fill="#ff47d6" d="M14.894,13.992L20,15.907V9.566c0-0.351-0.184-0.677-0.486-0.857L19.07,8.442 l-4.176,1.566C13.054,10.698,13.056,13.303,14.894,13.992z" opacity=".2"/>
      <path fill="#ff47d6" d="M20,16v-4V9.566c0-0.351-0.184-0.677-0.486-0.857l-0.883-0.53l-3.878,1.454 c-2.186,0.82-2.184,3.915,0,4.733L20,16.334V16z" opacity=".1"/>
      <path fill="#ff01bb" d="M16.674,35h-3.348C13.146,35,13,34.854,13,34.674V32c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v2.674C17,34.854,16.854,35,16.674,35z"/>
      <linearGradient id="lh_g3" x1="7" x2="7" y1="13.695" y2="-13.837" gradientTransform="rotate(-90 24 -5)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ffbe02" stopOpacity=".4"/>
        <stop offset="1" stopColor="#ffe669" stopOpacity=".4"/>
      </linearGradient>
      <path fill="url(#lh_g3)" d="M15.316,12.868L43.746,23.53 C44.353,23.757,45,23.309,45,22.662V1.338c0-0.648-0.647-1.096-1.253-0.868L15.316,11.132 C14.513,11.432,14.513,12.568,15.316,12.868z"/>
    </svg>
  );
}
