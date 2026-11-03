import { Link } from "@tanstack/react-router";
import { Flower2 } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow/15">
        <Flower2 className="h-8 w-8 text-brand-yellow" fill="currentColor" strokeWidth={1.5} />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-2xl font-semibold tracking-tight ${
            light ? "text-white" : "text-brand-maroon"
          }`}
        >
          Saanidhya
        </span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-brand-yellow">
          Care Foundation
        </span>
      </span>
    </Link>
  );
}
