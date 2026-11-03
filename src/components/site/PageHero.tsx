import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Heart, ShieldCheck } from "lucide-react";
import { media } from "@/assets/media";

export function PageHero({
  title,
  crumb,
}: {
  title: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <img
        src={media.homeless}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/40" />
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute left-6 top-10 hidden md:block lg:left-24">
        <div className="relative h-40 w-56">
          <div className="absolute left-0 top-4 h-24 w-36 rotate-12 rounded-[60%_40%_55%_45%/55%_45%_60%_40%] bg-brand-yellow" />
          <div className="absolute bottom-0 left-16 h-28 w-32 -rotate-6 rounded-[45%_55%_40%_60%/60%_40%_55%_45%] bg-brand-maroon" />
          <svg viewBox="0 0 120 120" className="absolute -right-6 top-0 h-28 w-28 text-white/20" aria-hidden="true">
            <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="60" cy="60" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="60" cy="60" r="29" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <svg viewBox="0 0 120 120" className="pointer-events-none absolute -right-8 bottom-0 h-40 w-40 text-white/10" aria-hidden="true">
        <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-24 md:px-8 md:pb-20 md:pt-32">
        <p className="flex items-center gap-2 text-sm font-bold tracking-wide text-white/70">
          HOME <ChevronRight className="h-4 w-4 text-brand-yellow" />
          <span className="text-brand-yellow">{crumb}</span>
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-white md:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}

export type Cause = {
  title: string;
  image: string;
  raised: string;
  donations: string;
  goal: string;
  percent: number;
};

export const CAUSES: Cause[] = [
  {
    title: "Old Age Homes",
    image: media.oldage,
    raised: "₹39,280.00",
    donations: "45",
    goal: "₹3,00,000.00",
    percent: 42,
  },
  {
    title: "Educational",
    image: media.edu1,
    raised: "₹12,000.00",
    donations: "9",
    goal: "₹12,00,000.00",
    percent: 30,
  },
  {
    title: "Orphanages",
    image: media.child,
    raised: "₹20.00",
    donations: "0",
    goal: "₹3,50,000.00",
    percent: 12,
  },
];

export function DonateCard({ cause }: { cause: Cause }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-4 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <h3 className="font-display text-2xl font-semibold text-foreground">{cause.title}</h3>
      <div className="mt-3 overflow-hidden rounded-xl">
        <img
          src={cause.image}
          alt={cause.title}
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-left text-[11px] font-bold uppercase tracking-wide text-foreground/60">
        <div>
          <span className="block text-sm font-extrabold normal-case text-foreground">{cause.raised}</span>
          Raised
        </div>
        <div>
          <span className="block text-sm font-extrabold normal-case text-foreground">{cause.donations}</span>
          Donations
        </div>
        <div className="text-right">
          <span className="block text-sm font-extrabold normal-case text-foreground">{cause.goal}</span>
          Goal
        </div>
      </div>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-accent">
        <div
          className="h-full rounded-full bg-brand-maroon"
          style={{ width: `${cause.percent}%` }}
        />
      </div>
      <Link
        to="/donations"
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-maroon px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-maroon-deep"
      >
        Donate now <ArrowRight className="h-4 w-4" />
      </Link>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-bold text-foreground/60">
        <ShieldCheck className="h-4 w-4 text-brand-yellow" /> 100% Secure Donation
      </p>
    </div>
  );
}

export function DonationsStrip({ script = "Our Donations" }: { script?: string }) {
  return (
    <section className="py-8">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
        {CAUSES.map((c) => (
          <DonateCard key={c.title} cause={c} />
        ))}
      </div>
      <span className="sr-only">{script}</span>
    </section>
  );
}
