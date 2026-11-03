import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap,
  HeartHandshake,
  Heart,
  HandHeart,
  Stethoscope,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BrushBand } from "@/components/site/BrushBand";
import { DonateCard, CAUSES } from "@/components/site/PageHero";
import { Gallery } from "@/components/site/Gallery";
import { ContactSection } from "@/components/site/ContactSection";
import { media } from "@/assets/media";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saanidhya Care Foundation — Har Zindagi Mein Umeed Ki Roshni" },
      { name: "description", content: "Saanidhya Care Foundation supports underprivileged communities through food & nutrition, education, elder care, and medical aid. Donate & be the change." },
      { property: "og:title", content: "Saanidhya Care Foundation — Har Zindagi Mein Umeed Ki Roshni" },
      { property: "og:description", content: "Support food, healthcare, education and rehabilitation drives for underprivileged communities. Donate & be the change." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const SUPPORT_CARDS = [
  {
    icon: HandHeart,
    emoji: "💛",
    title: "Food & Nutrition Support",
    text: "No one should sleep hungry. We provide nutritious meals, ration kits, and food essentials to underprivileged families, daily wage workers, and the homeless.",
  },
  {
    icon: GraduationCap,
    emoji: "🧡",
    title: "Education & Literacy",
    text: "We support children with school supplies, uniforms, books, and free educational classes to ensure every child has access to quality education.",
  },
  {
    icon: HeartHandshake,
    emoji: "🧡",
    title: "Support Elders & Specially Abled",
    text: "We provide daily essentials, mobility aids, and emotional support to elderly and specially abled individuals who often need extra care.",
  },
  {
    icon: Stethoscope,
    emoji: "🩺",
    title: "Medical Aid & Healthcare Support",
    text: "We organize medical camps, provide essential healthcare needs. Our aim is to bring quality care to those who lack access to medical resources.",
  },
];

const WHO_POINTS = [
  "FOOD & NUTRITION SUPPORT FOR CHILDREN",
  "CLOTHES, RESPECT AND RATION KITS FOR ELDERS",
  "EDUCATION SUPPORT AND SCHOOL KITS FOR CHILDREN",
  "REHABILITATION OF PEOPLE LIVING WITH DISABILITIES",
];

function Home() {
  return (
    <div>
      <Header />
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark">
        <img src={media.hero1} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/70 to-brand-dark/95" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-24 pt-16 md:grid-cols-2 md:px-8 md:pt-10">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-[56px]">
              Har Zindagi Mein Umeed Ki{" "}
              <span className="text-brand-maroon drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)]">
                Roshni.....
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-sm font-semibold leading-6 text-white/80 md:text-base">
              Saanidhya Care Foundation is a non-profit organization dedicated to supporting
              underprivileged communities through food, healthcare, education, and rehabilitation.
            </p>
            <Link
              to="/donations"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-maroon px-7 py-3.5 text-sm font-bold text-white transition hover:bg-brand-maroon-deep"
            >
              <Heart className="h-4 w-4" fill="currentColor" /> Donate Now
            </Link>
          </div>
          <div className="relative mx-auto hidden w-full max-w-md md:block">
            <div className="absolute -left-8 -top-6 h-16 w-24 rotate-12 rounded-[60%_40%_55%_45%/55%_45%_60%_40%] bg-brand-yellow" />
            <div className="grid grid-cols-2 gap-3">
              <img src={media.hero2} alt="Volunteers helping people" className="h-44 w-full rounded-xl object-cover shadow-lg" />
              <img src={media.charity2} alt="Charity drive" className="mt-6 h-44 w-full rounded-xl object-cover shadow-lg" />
              <img src={media.group} alt="Team of volunteers" className="-mt-2 h-44 w-full rounded-xl object-cover shadow-lg" />
              <img src={media.elderly1} alt="Elderly care" className="h-44 w-full rounded-xl object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Support cards overlapping hero */}
      <div className="relative z-10 mx-auto -mt-14 max-w-7xl px-4">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPORT_CARDS.map((c) => (
            <div key={c.title} className="rounded-2xl border border-black/5 bg-white p-5 text-center shadow-lg">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow/15">
                <c.icon className="h-7 w-7 text-brand-yellow" strokeWidth={1.8} />
              </span>
              <h3 className="mt-3 font-display text-base font-semibold uppercase leading-snug text-brand-maroon">
                {c.title} <span>{c.emoji}</span>
              </h3>
              <p className="mt-3 text-[13px] font-semibold leading-6 text-foreground/70">{c.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full border-[10px] border-brand-maroon/20" />
            <div className="grid grid-cols-2 gap-3">
              <img src={media.care1} alt="Care Foundation volunteers" className="h-52 w-full rounded-xl object-cover shadow-lg" />
              <img src={media.food1} alt="Food distribution drive" className="mt-8 h-52 w-full rounded-xl object-cover shadow-lg" />
              <img src={media.village} alt="Rural outreach program" className="-mt-4 h-52 w-full rounded-xl object-cover shadow-lg" />
              <img src={media.children2} alt="Children supported by Saanidhya" className="h-52 w-full rounded-xl object-cover shadow-lg" />
            </div>
            <div className="absolute -bottom-4 right-6 flex gap-1.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="h-2 w-2 rounded-full bg-brand-yellow" />
              ))}
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
              We work together to make a lasting difference, helping people with food, medical
              care, education, and other essential support. Join us in our mission to bring hope
              and create positive change in the lives of those in need.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-yellow bg-brand-yellow/10">
                  <HandHeart className="h-5 w-5 text-brand-yellow" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Who we are</h3>
                  <p className="mt-1 max-w-lg text-sm font-semibold leading-6 text-foreground/70">
                    We believe that every individual deserves dignity, care, and opportunity. Our
                    volunteers work on the ground to provide food, medical aid, education, and
                    support to underprivileged communities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-yellow bg-brand-yellow/10">
                  <HeartHandshake className="h-5 w-5 text-brand-yellow" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Trusted organization</h3>
                  <p className="mt-1 max-w-lg text-sm font-semibold leading-6 text-foreground/70">
                    Saanidhya Care is a registered, government-recognized non-profit organization,
                    ensuring transparency and accountability in all activities.
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-brand-maroon px-7 py-3 text-sm font-bold text-brand-maroon transition hover:bg-brand-maroon hover:text-white"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Donate & Be The Change */}
      <section className="bg-brand-dark">
        <BrushBand className="text-white" />
        <div className="mx-auto max-w-7xl px-4 pb-24 pt-6 text-center">
          <SectionHeading
            tone="dark"
            script="Our Donations"
            title={
              <>
                Donate & Be The{" "}
                <span className="text-brand-yellow underline decoration-2 underline-offset-8">
                  Change!
                </span>
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

      {/* Who are we strip */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl bg-accent p-6 shadow-sm md:p-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-maroon px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white">
              <HandHeart className="h-4 w-4 text-brand-yellow" /> Saanidhya Sanstha comes into
              existence
            </span>
            <ul className="mt-6 space-y-4">
              {WHO_POINTS.map((p, i) => (
                <li key={p} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/15 font-display text-sm font-semibold text-brand-yellow">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-[13px] font-extrabold uppercase leading-snug text-brand-maroon">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
            <svg viewBox="0 0 120 40" className="mt-4 h-10 w-28 text-brand-yellow" aria-hidden="true">
              <path
                d="M4 30 C 30 5, 60 40, 90 15 M90 15 l-12 -2 M90 15 l-3 11"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="grid gap-4">
            <img src={media.crowd} alt="Community outreach" className="h-56 w-full rounded-2xl object-cover shadow-lg" />
            <div className="grid grid-cols-2 gap-4">
              <img src={media.oldage} alt="Old age home visit" className="h-40 w-full rounded-2xl object-cover shadow-lg" />
              <img src={media.medical} alt="Medical aid camp" className="h-40 w-full rounded-2xl object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
}
