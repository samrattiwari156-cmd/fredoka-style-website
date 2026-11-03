import { Heart, Mail, Phone } from "lucide-react";
import { media } from "@/assets/media";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  const inputClass =
    "w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-foreground placeholder:text-foreground/40 focus:border-brand-maroon focus:outline-none";

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          script="Our Contact"
          title={
            <span className="text-brand-maroon">Contact Us</span>
          }
        />
        <p className="mt-2 text-center text-sm font-bold text-foreground/70">
          <Heart className="mr-1 inline h-4 w-4 text-brand-maroon" fill="currentColor" />
          Together, we can make the world a better place!
        </p>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_1.4fr_1fr]">
          {/* Left collage */}
          <div className="hidden grid-cols-2 gap-3 lg:grid">
            <img src={media.group} alt="Volunteers of Saanidhya" className="h-40 w-full rounded-xl object-cover shadow-md" />
            <img src={media.charity2} alt="Charity drive" className="h-40 w-full rounded-xl object-cover shadow-md" />
            <img src={media.medical} alt="Medical camp" className="h-40 w-full rounded-xl object-cover shadow-md" />
            <img src={media.child} alt="Child receiving help" className="h-40 w-full rounded-xl object-cover shadow-md" />
          </div>

          {/* Form */}
          <form
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-xl md:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const note = form.querySelector<HTMLParagraphElement>("[data-sent]");
              if (note) note.hidden = false;
              form.reset();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Your Name" className={inputClass} />
              <input required type="email" name="email" placeholder="Email" className={inputClass} />
            </div>
            <input required type="tel" name="phone" placeholder="Phone" className={`${inputClass} mt-4`} />
            <textarea
              name="message"
              rows={5}
              placeholder="Write Message..."
              className={`${inputClass} mt-4 resize-none`}
            />
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-dark px-8 py-3.5 text-sm font-bold text-white transition hover:bg-brand-maroon"
            >
              <Heart className="h-4 w-4 text-brand-yellow" fill="currentColor" /> Submit
            </button>
            <p data-sent hidden className="mt-3 text-sm font-bold text-brand-maroon">
              Thank you! Your message has been sent — we'll get back to you soon.
            </p>
          </form>

          {/* Right collage */}
          <div className="hidden grid-cols-2 gap-3 lg:grid">
            <img src={media.food1} alt="Food distribution" className="h-40 w-full rounded-xl object-cover shadow-md" />
            <img src={media.children2} alt="Children at school" className="h-40 w-full rounded-xl object-cover shadow-md" />
            <img src={media.elderly1} alt="Elderly care" className="h-40 w-full rounded-xl object-cover shadow-md" />
            <div className="flex h-40 flex-col items-center justify-center rounded-xl bg-accent text-center">
              <Mail className="h-5 w-5 text-brand-maroon" />
              <Phone className="mt-2 h-5 w-5 text-brand-yellow" />
              <p className="mt-2 px-2 text-[11px] font-bold text-foreground/70">Reach us any time — we're here to help.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
