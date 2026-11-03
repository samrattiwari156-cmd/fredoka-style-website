export function BrushBand({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 56"
      preserveAspectRatio="none"
      className={`block h-8 w-full md:h-10 ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0,56 L0,30 L52,36 L110,20 L190,32 L260,16 L340,28 L420,18 L520,32 L600,14 L680,28 L760,20 L860,34 L940,16 L1020,30 L1100,22 L1180,36 L1260,18 L1340,30 L1440,22 L1440,56 Z"
      />
    </svg>
  );
}
