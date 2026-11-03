import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "@/components/site/PageHero";
import { Gallery } from "@/components/site/Gallery";
import { Testimonial } from "@/components/site/Testimonial";
import { ContactSection } from "@/components/site/ContactSection";
import { CAUSES, DonateCard } from "@/components/site/PageHero";

export const Route = createFileRoute("/donations")({
  head: () => ({
    meta: [
      { title: "Donations — Saanidhya Care Foundation" },
      { name: "description", content: "See your impact: transparent donation causes. Support old age homes, education and orphanages through Saanidhya Care Foundation." },
      { property: "og:title", content: "Donations — Saanidhya Care Foundation" },
      { property: "og:description", content: "See your impact: transparent donation causes for old age homes, education and orphanages." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Donations,
});

function Donations() {
  return (
    <div>
      <Header />
      <PageHero title="DONATIONS" crumb="Contact" />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            script="Let's Start Donating"
            title={
              <>
                See Your Impact: Transparent{" "}
                <span className="text-brand-maroon underline decoration-2 underline-offset-8">
                  Donation
                </span>{" "}
                Causes
              </>
            }
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {CAUSES.map((c) => (
              <DonateCard key={c.title} cause={c} />
            ))}
          </div>
        </div>
      </section>

      <Testimonial />
      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
}
