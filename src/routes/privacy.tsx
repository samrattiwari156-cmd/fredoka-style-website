import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Saanidhya Care Foundation" },
      { name: "description", content: "How Saanidhya Care Foundation collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — Saanidhya Care Foundation" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Privacy,
});

const SECTIONS = [
  {
    h: "Information we collect",
    p: "When you contact us or make a donation, we collect the details you share with us — such as your name, email address, phone number and transaction reference. We collect only what is necessary to respond to you and process your contribution.",
  },
  {
    h: "How we use it",
    p: "Your information is used to process donations, send receipts, respond to your queries, and — only if you opt in — keep you updated about our events and drives. We never sell or rent your personal information to anyone.",
  },
  {
    h: "Security",
    p: "We take reasonable technical and organizational measures to protect your data. Donation payments are processed through secure, encrypted payment gateways; we do not store your card or bank details on our servers.",
  },
  {
    h: "Your choices",
    p: "You may ask us at any time to update or delete your personal information, or stop receiving our updates, by writing to help@saanidhyacare.org.",
  },
];

function Privacy() {
  return (
    <div>
      <Header />
      <PageHero title="PRIVACY POLICY" crumb="Privacy Policy" />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-display text-3xl font-semibold text-brand-maroon">Privacy Policy</h1>
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
