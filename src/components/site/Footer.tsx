import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Heart, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { SocialIcons } from "./Header";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Donations", to: "/donations" },
  { label: "Events", to: "/events" },
  { label: "Volunteer", to: "/volunteer" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Refund & Return Policy", to: "/refund-policy" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Contact Us", to: "/contact" },
];

function BrushEdge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 56"
      preserveAspectRatio="none"
      className={`block h-8 w-full md:h-10 ${className}`}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0,56 L0,30 L52,36 L110,20 L190,32 L260,16 L340,28 L420,18 L520,32 L600,14 L680,28 L760,20 L860,34 L940,16 L1020,30 L1100,22 L1180,36 L1260,18 L1340,30 L1440,22 L1440,56 Z"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* CTA strip */}
      <div className="text-brand-dark">
        <BrushEdge className="text-white" />
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-4 pt-6 md:pt-2">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
          <p className="text-center font-script text-3xl text-brand-yellow md:text-left">
            Our Contact
          </p>
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-4 shadow-lg md:flex-row md:gap-6 md:p-5">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
              <Logo />
            </span>
            <p className="max-w-xl text-center text-sm font-semibold text-foreground/80 md:text-left">
              Join our mission to create a brighter future — become a member of our NGO and make a
              lasting impact in the lives of those in need!
            </p>
            <Link
              to="/donations"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-maroon px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-maroon-deep"
            >
              <Heart className="h-4 w-4" fill="currentColor" /> Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.1fr_0.7fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Every donation, every helping hand, and every kind gesture brings hope to those in
            need. Thank you for being part of this journey of love and care.
          </p>
          <Link
            to="/donations"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-maroon px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-maroon-deep"
          >
            <Heart className="h-4 w-4" fill="currentColor" /> Donate Now
          </Link>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-brand-yellow">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-brand-yellow"
                >
                  <ArrowUpRight className="h-4 w-4 text-brand-yellow" /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          <div className="flex-1 rounded-2xl bg-brand-maroon p-6">
            <h3 className="font-display text-lg font-semibold text-white">Contact Us</h3>
            <a href="tel:+919238974922" className="mt-4 flex items-start gap-3 text-sm text-white/85 hover:text-brand-yellow">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
              <span>
                <span className="block text-xs text-white/60">Call us</span>
                +91 92389 74922
              </span>
            </a>
            <a href="mailto:help@saanidhyacare.org" className="mt-4 flex items-start gap-3 text-sm text-white/85 hover:text-brand-yellow">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
              <span>
                <span className="block text-xs text-white/60">Email us</span>
                help@saanidhyacare.org
              </span>
            </a>
            <p className="mt-4 flex items-start gap-3 text-sm text-white/85">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
              <span>
                <span className="block text-xs text-white/60">Reach us</span>
                Nai Basti, Near Char Mandir, Satna, Madhya Pradesh, India
              </span>
            </p>
          </div>
          <SocialIcons className="flex-col" />
        </div>
      </div>

      <div className="bg-brand-maroon-deep py-4 text-center text-xs font-semibold text-white/80">
        Copyright © 2024 Saanidhya care foundation. All Rights Reserved.
      </div>
    </footer>
  );
}
