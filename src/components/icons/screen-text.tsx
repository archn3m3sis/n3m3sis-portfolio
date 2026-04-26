type Props = {
  className?: string;
  size?: number;
};

export function ScreenTextIcon({ className, size = 160 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <path fill="#ff19c4" d="M12,16c-1.657,0-3,1.343-3,3v15h28c1.657,0,3-1.343,3-3V16H12z" />
      <linearGradient
        id="l1H-StjXqGLH3e0h-qYN2a_7pK9qrmTKp3D_gr1"
        x1="27.5"
        x2="27.5"
        y1="40.616"
        y2="9.108"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff01bb" />
        <stop offset=".553" stopColor="#ff5dde" />
        <stop offset="1" stopColor="#ffa4f9" />
      </linearGradient>
      <path
        fill="url(#l1H-StjXqGLH3e0h-qYN2a_7pK9qrmTKp3D_gr1)"
        d="M46,38c0,1.657-1.343,3-3,3H12c-1.657,0-3-1.343-3-3V19c0-1.657,1.343-3,3-3h31 c1.657,0,3,1.343,3,3V38z"
      />
      <linearGradient
        id="l1H-StjXqGLH3e0h-qYN2b_7pK9qrmTKp3D_gr2"
        x1="17.605"
        x2="45.748"
        y1="19.801"
        y2="32.08"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffbe02" stopOpacity=".4" />
        <stop offset="1" stopColor="#fff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#l1H-StjXqGLH3e0h-qYN2b_7pK9qrmTKp3D_gr2)"
        d="M37,9H6c-1.657,0-3,1.343-3,3v19 c0,1.657,1.343,3,3,3h31c1.657,0,3-1.343,3-3V12C40,10.343,38.657,9,37,9z M16.5,28h-8C7.672,28,7,27.328,7,26.5S7.672,25,8.5,25h8 c0.828,0,1.5,0.672,1.5,1.5S17.328,28,16.5,28z M34.5,28h-12c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h12 c0.828,0,1.5,0.672,1.5,1.5S35.328,28,34.5,28z"
      />
    </svg>
  );
}
