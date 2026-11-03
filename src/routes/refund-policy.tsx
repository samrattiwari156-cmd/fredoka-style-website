import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Return Policy — Saanidhya Care Foundation" },
      { name: "description", content: "Refund and return policy for donations made to Saanidhya Care Foundation." },
      { property: "og:title", content: "Refund & Return Policy — Saanidhya Care Foundation" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RefundPolicy,
});

const SECTIONS = [
  {
    h: "Donation refunds",
    p: "As a charitable organization, donations are generally non-refundable. However, if a donation was made in error — for example, a wrong amount was entered or a duplicate transaction occurred — you may request a refund within 7 days of the transaction.",
  },
  {
    h: "How to request a refund",
    p: "Write to us at help@saanidhyacare.org with your name, the transaction reference, the date of the donation and the reason for the refund request. Our team will review and respond within 5 working days.",
  },
  {
    h: "Processing of approved refunds",
    p: "Approved refunds are processed to the original payment method within 7–10 working days. Any transaction charges deducted by the payment gateway at the time of donation may not be recoverable.",
  },
  {
    h: "Physical goods",
    p: "For any physical items purchased or received through Foundation events, refund or return requests are handled on a case-by-case basis — please contact us with the details of the event and the item concerned.",
  },
];

function RefundPolicy() {
  return (
    <div>
      <Header />
      <PageHero title="REFUND & RETURN POLICY" crumb="Refund & Return Policy" />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-display text-3xl font-semibold text-brand-maroon">
            Refund & Return Policy
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
