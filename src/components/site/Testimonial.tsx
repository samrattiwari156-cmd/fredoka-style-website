import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { BrushBand } from "./BrushBand";

export function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <BrushBand className="text-white" />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10">
        <SectionHeading
          tone="dark"
          script="Our Recent Donater"
          title={
            <>
              We Help Thousands Of Peoples To Get Better{" "}
              <span className="text-brand-yellow underline decoration-2 underline-offset-8">
                Lives
              </span>
            </>
          }
        />
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-brand-yellow p-7 text-left shadow-lg md:p-9">
          <p className="font-display text-xl font-semibold text-brand-dark">
            Jyoti Gupta
          </p>
          <p className="text-sm font-bold text-brand-dark/80">HOD, Krupa Jabalpur</p>
          <p className="mt-3 flex gap-3 text-sm font-semibold leading-6 text-brand-dark/90">
            <Quote className="mt-1 h-5 w-5 shrink-0" fill="currentColor" />
            "Saanidhya Care has been a beacon of hope for our community. Their unwavering
            commitment to uplifting the lives of vulnerable children, elders, and underprivileged
            individuals is truly inspiring. Through their programs, we've witnessed firsthand the
            power of compassion, education, and care in transforming lives. A truly remarkable
            organization dedicated to making a lasting impact."
          </p>
        </div>
      </div>
    </section>
  );
}
