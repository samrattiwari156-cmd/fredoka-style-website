import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "@/components/site/PageHero";
import { Gallery } from "@/components/site/Gallery";
import { Testimonial } from "@/components/site/Testimonial";
import { ContactSection } from "@/components/site/ContactSection";

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
            {[
              { c: "Old Age Homes", t: "Support elders with food, medicines, companionship and safe shelter." },
              { c: "Educational", t: "Fund school kits, books and free classes for underprivileged children." },
              { c: "Orphanages", t: "Give orphaned children a childhood filled with care, learning and hope." },
            ].map((item) => (
              <div key={item.c} className="text-center">
                <FileText className="mx-auto h-6 w-6 text-brand-yellow" />
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{item.c}</h3>
                <p className="mx-auto mt-2 max-w-xs text-[13px] font-semibold leading-6 text-foreground/70">{item.t}</p>
              </div>
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
