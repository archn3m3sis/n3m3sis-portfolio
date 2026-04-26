type Props = {
  className?: string;
  size?: number;
};

export function ChangeArrowIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <path fill="#35af69" d="M31,22H15c-0.552,0-1,0.448-1,1v6c0,0.552,0.448,1,1,1h3.75v-3.25H34 c0.966,0,1.75-0.784,1.75-1.75v-6c0-0.966-0.784-1.75-1.75-1.75h-3V22z" opacity=".4"/>
      <path fill="#35af69" d="M31,22H15c-0.552,0-1,0.448-1,1v6c0,0.552,0.448,1,1,1h4.5v-2.5H34 c1.379,0,2.5-1.121,2.5-2.5v-6c0-1.379-1.121-2.5-2.5-2.5h-3V22z" opacity=".3"/>
      <path fill="#35af69" d="M31,22H15c-0.552,0-1,0.448-1,1v6c0,0.552,0.448,1,1,1h5.25v-1.75H34 c1.792,0,3.25-1.457,3.25-3.25v-6c0-1.793-1.458-3.25-3.25-3.25h-3V22z" opacity=".2"/>
      <path fill="#35af69" d="M31,22H15c-0.552,0-1,0.448-1,1v6c0,0.552,0.448,1,1,1h6v-1h13c2.206,0,4-1.794,4-4v-6 c0-2.206-1.794-4-4-4h-3V22z" opacity=".1"/>
      <linearGradient id="ca_g1" x1="-.272" x2="21.779" y1="45.544" y2="25.252" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00bc73"/>
        <stop offset=".754" stopColor="#5bdd46"/>
        <stop offset=".99" stopColor="#78e837"/>
      </linearGradient>
      <path fill="url(#ca_g1)" d="M34,18H16.631C12.969,18,10,20.969,10,24.631V36H7.11c-0.844,0-1.308,0.98-0.774,1.633 l6.89,8.421c0.4,0.489,1.148,0.489,1.548,0l6.89-8.421C22.198,36.98,21.733,36,20.89,36H18V26h16c0.552,0,1-0.448,1-1v-6 C35,18.448,34.552,18,34,18z"/>
      <linearGradient id="ca_g2" x1="-.5" x2="21.551" y1="45.296" y2="25.004" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00bc73"/>
        <stop offset=".754" stopColor="#5bdd46"/>
        <stop offset=".99" stopColor="#78e837"/>
      </linearGradient>
      <path fill="url(#ca_g2)" d="M34,18H15c-2.761,0-5,2.239-5,5v13H7.11 c-0.844,0-1.308,0.98-0.774,1.633l6.89,8.421c0.4,0.489,1.148,0.489,1.548,0l6.89-8.421C22.198,36.98,21.733,36,20.89,36H18V26h16 c0.552,0,1-0.448,1-1v-6C35,18.448,34.552,18,34,18z"/>
      <path fill="#35af69" d="M35,25v-6c0-0.552-0.448-1-1-1h-3v4H15c-0.552,0-1,0.448-1,1v6c0,0.552,0.448,1,1,1h3v-4h16 C34.552,26,35,25.552,35,25z"/>
      <linearGradient id="ca_g3" x1="16.016" x2="32.929" y1="-1.201" y2="27.647" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#01fff7" stopOpacity=".3"/>
        <stop offset="1" stopColor="#01fff7" stopOpacity=".4"/>
      </linearGradient>
      <path fill="url(#ca_g3)" d="M42.664,10.367l-6.89-8.421 c-0.4-0.489-1.148-0.489-1.548,0l-6.89,8.421C26.802,11.02,27.267,12,28.11,12H31v10H15c-0.552,0-1,0.448-1,1v6c0,0.552,0.448,1,1,1 h19c2.761,0,5-2.239,5-5V12h2.89C42.733,12,43.198,11.02,42.664,10.367z"/>
    </svg>
  );
}
