type Props = {
  className?: string;
  size?: number;
};

export function GmailMarkIcon({ className, size = 48 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="gm_g1" x1="32.749" x2="56.09" y1="20.849" y2="44.19" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#262626" stopOpacity="0"/>
        <stop offset="1" stopColor="#262626" stopOpacity=".8"/>
      </linearGradient>
      <path fill="url(#gm_g1)" d="M45,16.2l-10,7.5V40h7c1.657,0,3-1.343,3-3V16.2z"/>
      <linearGradient id="gm_g2" x1="-5.399" x2="26.746" y1="17.572" y2="49.718" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#262626" stopOpacity="0"/>
        <stop offset="1" stopColor="#262626" stopOpacity=".8"/>
      </linearGradient>
      <path fill="url(#gm_g2)" d="M3,16.2l10,7.5V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
      <linearGradient id="gm_g3" x1="11.789" x2="44.6" y1="5.239" y2="38.05" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#262626" stopOpacity="0"/>
        <stop offset="1" stopColor="#262626" stopOpacity=".8"/>
      </linearGradient>
      <polygon fill="url(#gm_g3)" points="35,11.2 24,19.45 13,11.2 13,23.7 24,31.95 35,23.7"/>
      <linearGradient id="gm_g4" x1="1.499" x2="23.547" y1="7.199" y2="29.247" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#262626" stopOpacity="0"/>
        <stop offset="1" stopColor="#262626" stopOpacity=".8"/>
      </linearGradient>
      <path fill="url(#gm_g4)" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8l0,0 C4.924,8,3,9.924,3,12.298z"/>
      <linearGradient id="gm_g5" x1="32.986" x2="47.252" y1="10.095" y2="24.361" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#262626" stopOpacity="0"/>
        <stop offset="1" stopColor="#262626" stopOpacity=".8"/>
      </linearGradient>
      <path fill="url(#gm_g5)" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8l0,0 C43.076,8,45,9.924,45,12.298z"/>
    </svg>
  );
}
