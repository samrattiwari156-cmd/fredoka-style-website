import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Saanidhya Care Foundation" },
      { name: "description", content: "Terms and conditions for using the Saanidhya Care Foundation website and making donations." },
      { property: "og:title", content: "Terms & Conditions — Saanidhya Care Foundation" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Terms,
});

const SECTIONS = [
  {
    h: "Use of this website",
    p: "By accessing the Saanidhya Care Foundation website, you agree to use it only for lawful purposes — to learn about our work, contact us, and make voluntary donations. You may not misuse the site, attempt to breach its security, or use its content for commercial purposes without written permission.",
  },
  {
    h: "Donations",
    p: "All donations made through this website are voluntary and non-refundable except where expressly covered by our Refund & Return Policy. Donations are used towards our charitable programs — food & nutrition, education, elder care and medical aid — at the discretion of the Foundation.",
  },
  {
    h: "Content & intellectual property",
    p: "All text, photographs and materials on this site belong to Saanidhya Care Foundation. You may share our content for non-commercial awareness purposes with attribution, but reproduction for commercial use requires prior consent.",
  },
  {
    h: "Governing law",
    p: "These terms are governed by the laws of India, and any disputes arising shall be subject to the jurisdiction of the courts of Madhya Pradesh, India.",
  },
];

function Terms() {
  return (
    <div>
      <Header />
      <PageHero title="TERMS & CONDITIONS" crumb="Terms & Conditions" />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-display text-3xl font-semibold text-brand-maroon">
            Terms & Conditions
          </h1>
          <div className="mt-8 space-y-7">
            {SECTIONS.map((s) => (
              <div key={s.h}>
                <h2 className="font-display text-xl font-semibold text-foreground">{s.h}</h2>
                <p className="mt-2 text-sm font-semibold leading-7 text-foreground/70">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
