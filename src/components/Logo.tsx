export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Two interlocking Z shapes forming the ZZ logo */}
      <path
        d="M5 8H62L25 52H82L45 96H5L42 52H5L42 8Z"
        fill="#F48B47"
      />
      <path
        d="M18 4H95L58 48H95L58 92H18L55 48H18Z"
        fill="#F48B47"
      />
    </svg>
  );
}
