type Props = {
  className?: string;
  size?: number;
};

export function DonutChartIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="dc_g1" x1="13.665" x2="15.568" y1="30.52" y2="11.413" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00bc73"/>
        <stop offset=".762" stopColor="#5bdd46"/>
        <stop offset="1" stopColor="#78e837"/>
      </linearGradient>
      <path fill="url(#dc_g1)" d="M11.943,37.53l6.374-6.374c0.369-0.369,0.382-0.95,0.05-1.352C17.514,28.769,17,27.446,17,26 c0-3.025,2.238-5.527,5.149-5.94C22.638,19.99,23,19.572,23,19.078v-9.046c0-0.586-0.502-1.035-1.087-0.999 C13.031,9.595,6,16.976,6,26c0,4.432,1.703,8.46,4.483,11.485C10.874,37.91,11.535,37.938,11.943,37.53z"/>
      <linearGradient id="dc_g2" x1="18.53" x2="26.264" y1="54.066" y2="28.512" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00bc73"/>
        <stop offset=".762" stopColor="#5bdd46"/>
        <stop offset="1" stopColor="#78e837"/>
      </linearGradient>
      <path fill="url(#dc_g2)" d="M29.922,26 c-0.494,0-0.912,0.362-0.982,0.851C28.527,29.762,26.025,32,23,32c-2.135,0-4.005-1.117-5.067-2.798 c-0.333-0.527-1.086-0.578-1.527-0.138l-7.129,7.129c-0.36,0.36-0.403,0.943-0.076,1.334C12.502,41.477,17.45,44,23,44 c9.596,0,17.438-7.509,17.971-16.971c0.032-0.563-0.437-1.029-1-1.029H29.922z"/>
      <linearGradient id="dc_g3" x1="21.09" x2="37.263" y1="28.956" y2="11.224" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#01fff7" stopOpacity=".2"/>
        <stop offset="1" stopColor="#01fff7" stopOpacity=".4"/>
      </linearGradient>
      <path fill="url(#dc_g3)" d="M21.217,17.183 c1.458-0.301,3.042-0.251,4.688,0.302c2.623,0.881,4.729,2.987,5.61,5.61c0.553,1.646,0.603,3.23,0.302,4.688 C31.688,28.408,32.136,29,32.774,29H42.88c0.504,0,0.938-0.374,0.994-0.874C43.952,27.427,44,26.72,44,26c0-11.598-9.402-21-21-21 c-0.72,0-1.427,0.048-2.126,0.126C20.374,5.182,20,5.617,20,6.12v10.106C20,16.864,20.592,17.312,21.217,17.183z"/>
    </svg>
  );
}
