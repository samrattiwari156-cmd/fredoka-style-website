import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "@/components/site/PageHero";
import { Gallery } from "@/components/site/Gallery";
import { Testimonial } from "@/components/site/Testimonial";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Saanidhya Care Foundation" },
      { name: "description", content: "Get in touch with the Saanidhya Care Foundation team. Visit us in Satna, Madhya Pradesh, call or write to us." },
      { property: "og:title", content: "Contact Us — Saanidhya Care Foundation" },
      { property: "og:description", content: "Get in touch with our team — visit, call or write to Saanidhya Care Foundation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const CARDS = [
  {
    icon: MapPin,
    title: "Visit us",
    body: "Nai Basti, Near Char Mandir, Satna, Madhya Pradesh, India",
    action: "View on Google Maps",
    href: "https://maps.google.com/?q=Satna,Madhya+Pradesh,India",
  },
  {
    icon: Mail,
    title: "Contact us",
    body: "help@saanidhyacare.org",
    action: "Mail Us",
    href: "mailto:help@saanidhyacare.org",
  },
  {
    icon: Phone,
    title: "Connect with us",
    body: "+91 92389 74922",
    action: "Call Saanidhya",
    href: "tel:+919238974922",
  },
];

function Contact() {
  return (
    <div>
      <Header />
      <PageHero title="CONTACT US" crumb="Contact Us" />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            script="Contact Us"
            title={
              <>
                Get In Touch With Out{" "}
                <span className="text-brand-maroon underline decoration-2 underline-offset-8">
                  Team
                </span>
              </>
            }
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {CARDS.map((c) => (
              <div key={c.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-yellow/40 bg-accent">
                  <c.icon className="h-6 w-6 text-brand-maroon" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 min-h-10 text-[13px] font-semibold leading-6 text-foreground/70">
                  {c.body}
                </p>
                <a
                  href={c.href}
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-maroon px-5 py-2.5 text-[13px] font-bold text-white transition hover:bg-brand-maroon-deep"
                >
                  {c.action}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm font-semibold text-foreground/60">
            Prefer to write to us directly? Use the form below — we reply to every message.
          </p>
          <div className="mt-6 text-center">
            <Link
              to="/donations"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-maroon px-6 py-3 text-sm font-bold text-brand-maroon transition hover:bg-brand-maroon hover:text-white"
            >
              Support a cause instead
            </Link>
          </div>
        </div>
      </section>

      <Testimonial />
      <Gallery />
      <Footer />
    </div>
  );
}
