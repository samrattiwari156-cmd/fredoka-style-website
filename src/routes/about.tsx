import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  HandHeart,
  Heart,
  HeartHandshake,
  Home,
  Play,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BrushBand } from "@/components/site/BrushBand";
import { PageHero } from "@/components/site/PageHero";
import { Gallery } from "@/components/site/Gallery";
import { Testimonial } from "@/components/site/Testimonial";
import { media } from "@/assets/media";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Saanidhya Care Foundation" },
      { name: "description", content: "Learn about Saanidhya Care Foundation — a non-profit helping underprivileged communities with food, education, elder care and medical aid." },
      { property: "og:title", content: "About Us — Saanidhya Care Foundation" },
      { property: "og:description", content: "Helping each other can make the world better. Meet the people behind our charity activities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const SERVICES = [
  {
    icon: HandHeart,
    title: "Food & Nutrition Support",
    text: "Nutritious meals and ration kits for families, daily wage workers and the homeless, so no one sleeps hungry.",
  },
  {
    icon: Stethoscope,
    title: "Medical Aid & Healthcare",
    text: "Free medical camps, medicines and essential healthcare for people who cannot afford quality treatment.",
  },
  {
    icon: GraduationCap,
    title: "Education & Child Welfare",
    text: "School kits, books, uniforms and free classes that keep every child learning, no matter their circumstances.",
  },
  {
    icon: Sparkles,
    title: "Youth & Welfare Support",
    text: "Skill-building and mentorship programs that help young people stand on their own feet with confidence.",
  },
  {
    icon: HeartHandshake,
    title: "Elderly & Specially Abled Care",
    text: "Daily essentials, mobility aids and companionship for elders and specially abled members of our community.",
  },
  {
    icon: Home,
    title: "Sheltering & Disaster Relief",
    text: "Emergency shelter, clothing and relief supplies for families hit by disasters or displacement.",
  },
];

const EXIST_POINTS = [
  {
    title: "Identifying & Reaching Those in Need",
    text: "Our volunteers work closely with local communities to identify children, elders and families who need urgent support, and reach them wherever they are — villages, slums and streets.",
  },
  {
    title: "Providing Support to Underprivileged & Vulnerable",
    text: "From food and ration kits to school supplies and medical aid, we deliver practical, timely help that restores dignity and opens the door to a better life.",
  },
  {
    title: "Transparent Coordination & Effective Utilization",
    text: "Every rupee donated is tracked and used where it matters most. As a registered non-profit, we publish our activities so donors can give with complete trust.",
  },
];

function About() {
  return (
    <div>
      <Header />
      <PageHero title="ABOUT US" crumb="About Us" />

      {/* Intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-6 top-6 h-20 w-20 rotate-12 rounded-[55%_45%_60%_40%/50%_60%_40%_50%] bg-brand-maroon/80" />
            <div className="relative grid grid-cols-2 gap-3">
              <img src={media.village} alt="Rural outreach" className="h-56 w-full rounded-xl object-cover shadow-lg" />
              <img src={media.food1} alt="Food distribution" className="mt-8 h-56 w-full rounded-xl object-cover shadow-lg" />
              <img src={media.group} alt="Volunteer team" className="-mt-4 h-56 w-full rounded-xl object-cover shadow-lg" />
              <img src={media.children2} alt="Children in our programs" className="h-56 w-full rounded-xl object-cover shadow-lg" />
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              script="About Us"
              title={
                <>
                  Helping Each Other Can Make{" "}
                  <span className="text-brand-maroon">World</span> Better
                </>
              }
            />
            <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-foreground/70 md:text-[15px]">
              Saanidhya Care Foundation is a non-profit organization dedicated to supporting
              underprivileged communities through food, healthcare, education, and rehabilitation.
              We work together to make a lasting difference and bring hope into every life we
              touch.
            </p>
            <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              {["Our volunteers", "Number of donors", "Trusted organization", "Helping hands"].map((s) => (
                <p key={s} className="flex items-center gap-2 text-sm font-bold text-foreground/80">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-maroon" /> {s}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fundraising banner */}
      <section className="relative overflow-hidden bg-brand-dark">
        <img src={media.hero2} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-brand-dark/60" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center md:py-20">
          <p className="flex items-center justify-center gap-2 font-script text-3xl text-brand-yellow md:text-4xl">
            <Heart className="h-6 w-6" strokeWidth={1.6} /> We're Here For Support People
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-[42px]">
            Fundraising For The People And Causes You Care About
          </h2>
          <a
            href="/donations"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-3.5 text-sm font-extrabold text-brand-dark transition hover:bg-brand-gold"
          >
            <Heart className="h-4 w-4" fill="currentColor" /> Donate now
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            script="What we do!"
            title={
              <>
                We Believe That We Can Save More{" "}
                <span className="text-brand-maroon">Life</span> With You
              </>
            }
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-yellow/15">
                  <s.icon className="h-6 w-6 text-brand-yellow" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-maroon">
                    {s.title} <span>🧡</span>
                  </h3>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-foreground/70">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video band */}
      <section className="relative overflow-hidden bg-brand-maroon">
        <img src={media.crowd} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-brand-maroon/70" />
        <div className="relative flex items-center justify-center py-24 md:py-32">
          <button
            type="button"
            aria-label="Play our story video"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-yellow shadow-2xl transition hover:scale-110"
          >
            <Play className="ml-1 h-8 w-8 text-brand-maroon" fill="currentColor" />
          </button>
        </div>
      </section>

      {/* Volunteers behind charity */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            script="About Our Volunteers"
            title={
              <>
                Awesome Guys Behind Our{" "}
                <span className="text-brand-maroon underline decoration-2 underline-offset-8">
                  Charity
                </span>{" "}
                Activities
              </>
            }
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              { name: "Lovelynti Corg", role: "Founder" },
              { name: "Shivam L Rolan", role: "Volunteer" },
              { name: "Abhishek Yadav", role: "Volunteer" },
            ].map((v) => (
              <div key={v.name} className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-md">
                <h3 className="font-display text-lg font-semibold text-foreground">{v.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-brand-yellow">
                  {v.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We exist */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              script="What we do!"
              title={
                <>
                  We Exist For Non-Profits, Social Enterprises,{" "}
                  <span className="text-brand-maroon">Community</span> Groups
                </>
              }
            />
            <div className="mt-8 space-y-7">
              {EXIST_POINTS.map((p, i) => (
                <div key={p.title} className="flex gap-4">
                  <span className="font-display text-3xl font-semibold text-brand-yellow">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] font-semibold leading-6 text-foreground/70">
                      {p.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={media.village} alt="Community support" className="h-72 w-full rounded-2xl object-cover shadow-lg" />
            <img
              src={media.care1}
              alt="Volunteers at work"
              className="absolute -bottom-10 right-0 hidden h-52 w-64 rounded-2xl border-8 border-white object-cover shadow-xl md:block"
            />
          </div>
        </div>
      </section>

      <Testimonial />
      <Gallery />
      <Footer />
      <BrushBand className="hidden" />
    </div>
  );
}
