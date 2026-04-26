import { MarkStops } from "./_mark-stops";

type Props = {
  className?: string;
  size?: number;
  colored?: boolean;
};

export function GitLabMarkIcon({ className, size = 48, colored }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="gl_g1" x1="24" x2="24" y1="12.096" y2="54.521" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <path fill="url(#gl_g1)" d="M43.922,25.125L42,20H32H16H6l-1.922,5.125c-0.636,1.696-0.053,3.607,1.42,4.659L24,43 l18.502-13.215C43.975,28.732,44.558,26.821,43.922,25.125z"/>
      <linearGradient id="gl_g2" x1="38.859" x2="23.974" y1="37.359" y2="22.474" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <polygon fill="url(#gl_g2)" points="24,43 42,20 32,20"/>
      <linearGradient id="gl_g3" x1="48.145" x2="28.298" y1="26.145" y2="6.298" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <polygon fill="url(#gl_g3)" points="37,5 42,20 32,20"/>
      <linearGradient id="gl_g4" x1="9.141" x2="24.026" y1="37.359" y2="22.474" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <polygon fill="url(#gl_g4)" points="24,43 6,20 16,20"/>
      <linearGradient id="gl_g5" x1="-.145" x2="19.702" y1="26.145" y2="6.298" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <polygon fill="url(#gl_g5)" points="11,5 6,20 16,20"/>
    </svg>
  );
}
