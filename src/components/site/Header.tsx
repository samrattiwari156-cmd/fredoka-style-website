import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  Mail,
  Menu,
  Phone,
  Threads,
  Twitter,
  User,
  X,
  Youtube,
} from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Donations", to: "/donations" },
] as const;

const INVOLVED = [
  { label: "Volunteer", to: "/volunteer" },
  { label: "Events", to: "/events" },
] as const;

export function SocialIcons({ className = "" }: { className?: string }) {
  const icon =
    "flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-yellow hover:text-brand-dark";
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <a href="https://facebook.com" aria-label="Facebook" className={icon}>
        <Facebook className="h-4 w-4" />
      </a>
      <a href="https://youtube.com" aria-label="YouTube" className={icon}>
        <Youtube className="h-4 w-4" />
      </a>
      <a href="https://instagram.com" aria-label="Instagram" className={icon}>
        <Instagram className="h-4 w-4" />
      </a>
      <a href="https://twitter.com" aria-label="Twitter" className={icon}>
        <Twitter className="h-4 w-4" />
      </a>
      <a href="https://threads.net" aria-label="Threads" className={icon}>
        <Threads className="h-4 w-4" />
      </a>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const linkClass = (active: boolean) =>
    `rounded-full px-4 py-2 text-[15px] font-bold transition ${
      active ? "text-brand-maroon" : "text-foreground/80 hover:text-brand-maroon"
    }`;

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="bg-brand-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-white">
          <div className="hidden items-center gap-6 text-[13px] font-semibold md:flex">
            <a href="mailto:help@saanidhyacare.org" className="flex items-center gap-2 hover:text-brand-yellow">
              <Mail className="h-4 w-4 text-brand-yellow" /> help@saanidhyacare.org
            </a>
            <a href="tel:+919238974922" className="flex items-center gap-2 hover:text-brand-yellow">
              <Phone className="h-4 w-4 text-brand-yellow" /> +91 92389 74922
            </a>
          </div>
          <div className="flex w-full items-center justify-between gap-3 md:w-auto md:justify-end">
            <Link
              to="/donations"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wide transition hover:border-brand-yellow hover:text-brand-yellow"
            >
              <Heart className="h-3.5 w-3.5" fill="currentColor" /> Donate Now
            </Link>
            <SocialIcons className="hidden sm:flex" />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-black/5 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link key={item.label} to={item.to} className={linkClass(pathname === item.to)}>
                {item.label}
              </Link>
            ))}
            <div className="group relative">
              <button
                type="button"
                className={linkClass(pathname === "/volunteer" || pathname === "/events")}
              >
                Get Involved <ChevronDown className="ml-1 inline h-4 w-4 transition group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 w-44 rounded-xl border border-black/5 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                {INVOLVED.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block rounded-lg px-3 py-2 text-sm font-bold text-foreground/80 transition hover:bg-accent hover:text-brand-maroon"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/contact" className={linkClass(pathname === "/contact")}>
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Account"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/10 text-foreground/70 transition hover:border-brand-maroon hover:text-brand-maroon sm:flex"
            >
              <User className="h-5 w-5" />
            </button>
            <Link
              to="/donations"
              className="hidden items-center gap-2 rounded-full bg-brand-maroon px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-maroon-deep md:inline-flex"
            >
              <Heart className="h-4 w-4" fill="currentColor" /> DONATE NOW
            </Link>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-foreground lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-black/5 bg-white px-4 py-3 lg:hidden">
            {[...NAV, ...INVOLVED, { label: "Contact Us", to: "/contact" }].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 font-bold text-foreground/80 hover:bg-accent hover:text-brand-maroon"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
