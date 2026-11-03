import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "@/components/site/PageHero";
import { Gallery } from "@/components/site/Gallery";
import { Testimonial } from "@/components/site/Testimonial";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Our Volunteers — Saanidhya Care Foundation" },
      { name: "description", content: "Meet the optimistic volunteers of Saanidhya Care Foundation — the awesome guys behind our charity activities." },
      { property: "og:title", content: "Our Volunteers — Saanidhya Care Foundation" },
      { property: "og:description", content: "Meet the optimistic volunteers behind our charity activities and become a member." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Volunteer,
});

const VOLUNTEERS = [
  "Poonam Haldar",
  "Anushka Uikey",
  "Vansh Patwa",
  "Sahil Yadav",
  "Raj Thakur",
  "Abhishek Yadav",
  "Raj Yadav",
  "Sachin Vishwakarma",
  "Ankit Vishwakarma",
  "Shivani Yadav",
  "Sachin Yadav",
  "Anuj Yadav",
  "Batram Patel",
  "Anand Patel",
];

function Volunteer() {
  return (
    <div>
      <Header />
      <PageHero title="OUR VOLUNTEER'S" crumb="Volunteer" />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            script="Our Volunteer"
            title={
              <>
                Meet The Optimistic{" "}
                <span className="text-brand-maroon underline decoration-2 underline-offset-8">
                  Volunteer
                </span>
              </>
            }
          />
          <div className="mx-auto mt-12 grid max-w-6xl gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-4">
            {VOLUNTEERS.slice(0, 4).map((name) => (
              <div key={name}>
                <h3 className="font-display text-xl font-semibold text-foreground">{name}</h3>
                <p className="mt-1 text-sm font-semibold text-foreground/60">Volunteer</p>
              </div>
            ))}
            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-brand-maroon px-6 py-3 text-sm font-bold text-brand-maroon transition hover:bg-brand-maroon hover:text-white"
            >
              <Heart className="h-4 w-4" fill="currentColor" /> Becomer Member
            </Link>
            {VOLUNTEERS.slice(4).map((name) => (
              <div key={name}>
                <h3 className="font-display text-xl font-semibold text-foreground">{name}</h3>
                <p className="mt-1 text-sm font-semibold text-foreground/60">Volunteer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonial />
      <Gallery />
      <Footer />
    </div>
  );
}
