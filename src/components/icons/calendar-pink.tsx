type Props = {
  className?: string;
  size?: number;
};

export function CalendarPinkIcon({ className, size = 160 }: Props) {
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
        id="AOS72CW1F35H9ut54fYIGa_8WCjwos0E2Ko_gr1"
        x1="24"
        x2="24"
        y1="6.25"
        y2="24.001"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffa4f9" />
        <stop offset=".447" stopColor="#ff5dde" />
        <stop offset="1" stopColor="#ff01bb" />
      </linearGradient>
      <path
        fill="url(#AOS72CW1F35H9ut54fYIGa_8WCjwos0E2Ko_gr1)"
        d="M44,15h-7.086l-9.51-9.51c-0.391-0.391-1.024-0.391-1.414,0l-1.414,1.414 c-0.391,0.391-0.391,1.024,0,1.414L31.257,15H16.328l6.682-6.682c0.391-0.391,0.391-1.024,0-1.414L21.596,5.49 c-0.391-0.391-1.024-0.391-1.414,0L10.672,15H4c-1.105,0-2,0.895-2,2v5c0,1.105,0.895,2,2,2h40c1.105,0,2-0.895,2-2v-5 C46,15.895,45.105,15,44,15z"
      />
      <linearGradient
        id="AOS72CW1F35H9ut54fYIGb_8WCjwos0E2Ko_gr2"
        x1="24"
        x2="24"
        y1="38.286"
        y2=".892"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffbe02" stopOpacity=".4" />
        <stop offset="1" stopColor="#fff" stopOpacity=".4" />
      </linearGradient>
      <path
        fill="url(#AOS72CW1F35H9ut54fYIGb_8WCjwos0E2Ko_gr2)"
        d="M40.694,21H7.306 c-1.217,0-2.152,1.078-1.98,2.283l2.429,18C7.895,42.268,8.739,43,9.735,43h28.531c0.995,0,1.839-0.732,1.98-1.717l2.429-18 C42.846,22.078,41.911,21,40.694,21z M17,38c0,0.552-0.448,1-1,1c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1c0.552,0,1,0.448,1,1 V38z M25,38c0,0.552-0.448,1-1,1c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1c0.552,0,1,0.448,1,1V38z M33,38c0,0.552-0.448,1-1,1 c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1c0.552,0,1,0.448,1,1V38z"
      />
    </svg>
  );
}
