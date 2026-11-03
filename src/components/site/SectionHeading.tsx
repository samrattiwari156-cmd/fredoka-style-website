import type { ReactNode } from "react";
import { HandHeart } from "lucide-react";

export function SectionHeading({
  script,
  title,
  tone = "light",
  align = "center",
  className = "",
}: {
  script: string;
  title: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
}) {
  const scriptColor = tone === "light" ? "text-brand-maroon" : "text-brand-yellow";
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <p
        className={`flex items-center justify-center gap-2 font-script text-3xl leading-snug md:text-4xl ${scriptColor} ${
          align === "left" ? "justify-start" : ""
        }`}
      >
        <HandHeart className="h-6 w-6 shrink-0" strokeWidth={1.6} /> {script}
      </p>
      <h2
        className={`mt-2 font-display text-3xl font-semibold leading-snug text-white md:text-[44px] ${
          tone === "light" ? "text-foreground" : "text-white"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
