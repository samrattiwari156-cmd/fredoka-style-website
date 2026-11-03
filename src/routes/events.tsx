import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Saanidhya Care Foundation" },
      { name: "description", content: "Upcoming events and donation drives by Saanidhya Care Foundation — food distribution, medical camps and education drives." },
      { property: "og:title", content: "Events — Saanidhya Care Foundation" },
      { property: "og:description", content: "Join our upcoming food drives, medical camps and education events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Events,
});

const EVENTS = [
  {
    title: "Ration Kit Distribution Drive",
    date: "Every Sunday, 10:00 AM",
    place: "Nai Basti, Satna, Madhya Pradesh",
    text: "We distribute ration kits with rice, dal, oil and essentials to daily wage workers and homeless families.",
  },
  {
    title: "Free Medical Check-up Camp",
    date: "Second Saturday of the month, 9:00 AM",
    place: "Community Center, Satna",
    text: "Free doctor consultations, medicines and health check-ups for elders and underprivileged families.",
  },
  {
    title: "School Kit Giveaway",
    date: "Start of every academic session",
    place: "Government schools, Satna district",
    text: "Books, uniforms, bags and stationery for children so that no child drops out for want of supplies.",
  },
];

function Events() {
  return (
    <div>
      <Header />
      <PageHero title="EVENTS" crumb="Events" />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            script="Our Events"
            title={
              <>
                Upcoming <span className="text-brand-maroon underline decoration-2 underline-offset-8">Events</span> & Drives
              </>
            }
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {EVENTS.map((e) => (
              <div key={e.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-md">
                <h3 className="font-display text-xl font-semibold text-brand-maroon">{e.title}</h3>
                <p className="mt-3 flex items-center gap-2 text-[13px] font-bold text-foreground/70">
                  <CalendarDays className="h-4 w-4 text-brand-yellow" /> {e.date}
                </p>
                <p className="mt-2 flex items-center gap-2 text-[13px] font-bold text-foreground/70">
                  <MapPin className="h-4 w-4 text-brand-yellow" /> {e.place}
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-foreground/70">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
