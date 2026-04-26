import { MarkStops } from "./_mark-stops";

type Props = {
  className?: string;
  size?: number;
  colored?: boolean;
};

export function PhoneMarkIcon({ className, size = 48, colored }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <linearGradient id="ph_g1" x1="4.5" x2="42.62" y1="43.5" y2="5.38" gradientTransform="rotate(90 24 24)" gradientUnits="userSpaceOnUse">
        <MarkStops colored={colored} />
      </linearGradient>
      <path fill="url(#ph_g1)" d="M19.36,37.56c1.56-1.56,1.56-4.1,0-5.66l-3.45-3.44l12.55-12.55l3.44,3.45 c1.56,1.56,4.1,1.56,5.66,0l7.38-7.38L39.26,6.3c-1.11-1.11-2.72-1.56-4.25-1.16c-3.7,0.97-10.91,3.72-18.53,11.34 C8.86,24.1,6.11,31.31,5.14,35.01c-0.4,1.53,0.05,3.14,1.16,4.25l5.68,5.68L19.36,37.56z"/>
    </svg>
  );
}
