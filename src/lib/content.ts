import { media } from "@/assets/media";

// ---------- Row types ----------
export type Cause = {
  id: string;
  title: string;
  image_url: string;
  raised: string;
  donations: string;
  goal: string;
  percent: number;
  sort_order: number;
  is_published: boolean;
};

export type EventRow = {
  id: string;
  title: string;
  event_date: string;
  place: string;
  description: string;
  sort_order: number;
  is_published: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  sort_order: number;
  is_published: boolean;
};

export type GalleryImage = {
  id: string;
  image_url: string;
  caption: string;
  sort_order: number;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  section: string; // "leaders" | "volunteers"
  sort_order: number;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  is_read: boolean;
  created_at: string;
};

// ---------- Content types ----------
export type TitleBits = { before: string; accent: string; after: string };

export type CardItem = { title: string; text: string; emoji: string };

export type PointItem = { title: string; text: string };

export type GlobalContent = {
  email: string;
  phone: string;
  address: string;
  mapsUrl: string;
  pageHeroImage: string;
  copyright: string;
  footerAbout: string;
  footerContactBlurb: string;
  socials: {
    facebook: string;
    youtube: string;
    instagram: string;
    twitter: string;
    threads: string;
  };
};

export type HomeContent = {
  hero: {
    title: string;
    accent: string;
    subtitle: string;
    image: string;
    collage: string[];
  };
  supportCards: CardItem[];
  about: TitleBits & { script: string; text: string };
  whoWeAre: { title1: string; text1: string; title2: string; text2: string };
  donate: TitleBits & { script: string };
  strip: { badge: string; points: string[]; images: string[] };
};

export type AboutContent = {
  intro: TitleBits & {
    script: string;
    text: string;
    highlights: string[];
    images: string[];
  };
  banner: { script: string; title: string; image: string };
  services: TitleBits & { script: string; items: CardItem[] };
  video: { image: string };
  team: TitleBits & { script: string };
  exist: TitleBits & {
    script: string;
    points: PointItem[];
    imageMain: string;
    imageOverlay: string;
  };
};

export type SimpleSection = { script: string; title: TitleBits };

export type ContactContent = SimpleSection & { note: string; ctaText: string };

export type GalleryContent = { script: string; title: string };

export type TestimonialContent = SimpleSection;

export type SiteContent = {
  global: GlobalContent;
  home: HomeContent;
  about: AboutContent;
  donations: SimpleSection;
  events: SimpleSection;
  volunteer: SimpleSection;
  contact: ContactContent;
  gallery: GalleryContent;
  testimonial: TestimonialContent;
};

export type SiteData = {
  content: SiteContent;
  causes: Cause[];
  events: EventRow[];
  testimonials: Testimonial[];
  gallery: GalleryImage[];
  leaders: TeamMember[];
  volunteers: TeamMember[];
};

// ---------- Defaults (the current live copy; admin edits override these) ----------
export const DEFAULT_CONTENT: SiteContent = {
  global: {
    email: "help@saanidhyacare.org",
    phone: "+91 92389 74922",
    address: "Nai Basti, Near Char Mandir, Satna, Madhya Pradesh, India",
    mapsUrl: "https://maps.google.com/?q=Satna,Madhya+Pradesh,India",
    pageHeroImage: media.homeless,
    copyright: "Copyright © 2024 Saanidhya care foundation. All Rights Reserved.",
    footerAbout:
      "Every donation, every helping hand, and every kind gesture brings hope to those in need. Thank you for being part of this journey of love and care.",
    footerContactBlurb:
      "Join our mission to create a brighter future — become a member of our NGO and make a lasting impact in the lives of those in need!",
    socials: {
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      threads: "https://threads.net",
    },
  },
  home: {
    hero: {
      title: "Har Zindagi Mein Umeed Ki",
      accent: "Roshni.....",
      subtitle:
        "Saanidhya Care Foundation is a non-profit organization dedicated to supporting underprivileged communities through food, healthcare, education, and rehabilitation.",
      image: media.hero1,
      collage: [media.hero2, media.charity2, media.group, media.elderly1],
    },
    supportCards: [
      {
        emoji: "💛",
        title: "Food & Nutrition Support",
        text: "No one should sleep hungry. We provide nutritious meals, ration kits, and food essentials to underprivileged families, daily wage workers, and the homeless.",
      },
      {
        emoji: "🧡",
        title: "Education & Literacy",
        text: "We support children with school supplies, uniforms, books, and free educational classes to ensure every child has access to quality education.",
      },
      {
        emoji: "🧡",
        title: "Support Elders & Specially Abled",
        text: "We provide daily essentials, mobility aids, and emotional support to elderly and specially abled individuals who often need extra care.",
      },
      {
        emoji: "🩺",
        title: "Medical Aid & Healthcare Support",
        text: "We organize medical camps, provide essential healthcare needs. Our aim is to bring quality care to those who lack access to medical resources.",
      },
    ],
    about: {
      script: "About Us",
      before: "Helping Each Other Can Make",
      accent: "World",
      after: " Better",
      text: "We work together to make a lasting difference, helping people with food, medical care, education, and other essential support. Join us in our mission to bring hope and create positive change in the lives of those in need.",
    },
    whoWeAre: {
      title1: "Who we are",
      text1:
        "We believe that every individual deserves dignity, care, and opportunity. Our volunteers work on the ground to provide food, medical aid, education, and support to underprivileged communities.",
      title2: "Trusted organization",
      text2:
        "Saanidhya Care is a registered, government-recognized non-profit organization, ensuring transparency and accountability in all activities.",
    },
    donate: {
      script: "Our Donations",
      before: "Donate & Be The",
      accent: "Change!",
      after: "",
    },
    strip: {
      badge: "Saanidhya Sanstha comes into existence",
      points: [
        "FOOD & NUTRITION SUPPORT FOR CHILDREN",
        "CLOTHES, RESPECT AND RATION KITS FOR ELDERS",
        "EDUCATION SUPPORT AND SCHOOL KITS FOR CHILDREN",
        "REHABILITATION OF PEOPLE LIVING WITH DISABILITIES",
      ],
      images: [media.crowd, media.oldage, media.medical],
    },
  },
  about: {
    intro: {
      script: "About Us",
      before: "Helping Each Other Can Make",
      accent: "World",
      after: " Better",
      text: "Saanidhya Care Foundation is a non-profit organization dedicated to supporting underprivileged communities through food, healthcare, education, and rehabilitation. We work together to make a lasting difference and bring hope into every life we touch.",
      highlights: ["Our volunteers", "Number of donors", "Trusted organization", "Helping hands"],
      images: [media.village, media.food1, media.group, media.children2],
    },
    banner: {
      script: "We're Here For Support People",
      title: "Fundraising For The People And Causes You Care About",
      image: media.hero2,
    },
    services: {
      script: "What we do!",
      before: "We Believe That We Can Save More",
      accent: "Life",
      after: " With You",
      items: [
        {
          emoji: "🧡",
          title: "Food & Nutrition Support",
          text: "Nutritious meals and ration kits for families, daily wage workers and the homeless, so no one sleeps hungry.",
        },
        {
          emoji: "🧡",
          title: "Medical Aid & Healthcare",
          text: "Free medical camps, medicines and essential healthcare for people who cannot afford quality treatment.",
        },
        {
          emoji: "🧡",
          title: "Education & Child Welfare",
          text: "School kits, books, uniforms and free classes that keep every child learning, no matter their circumstances.",
        },
        {
          emoji: "🧡",
          title: "Youth & Welfare Support",
          text: "Skill-building and mentorship programs that help young people stand on their own feet with confidence.",
        },
        {
          emoji: "🧡",
          title: "Elderly & Specially Abled Care",
          text: "Daily essentials, mobility aids and companionship for elders and specially abled members of our community.",
        },
        {
          emoji: "🧡",
          title: "Sheltering & Disaster Relief",
          text: "Emergency shelter, clothing and relief supplies for families hit by disasters or displacement.",
        },
      ],
    },
    video: { image: media.crowd },
    team: {
      script: "About Our Volunteers",
      before: "Awesome Guys Behind Our",
      accent: "Charity",
      after: " Activities",
    },
    exist: {
      script: "What we do!",
      before: "We Exist For Non-Profits, Social Enterprises,",
      accent: "Community",
      after: " Groups",
      points: [
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
      ],
      imageMain: media.village,
      imageOverlay: media.care1,
    },
  },
  donations: {
    script: "Let's Start Donating",
    before: "See Your Impact: Transparent",
    accent: "Donation",
    after: " Causes",
  },
  events: {
    script: "Our Events",
    before: "Upcoming",
    accent: "Events",
    after: " & Drives",
  },
  volunteer: {
    script: "Our Volunteer",
    before: "Meet The Optimistic",
    accent: "Volunteer",
    after: "",
  },
  contact: {
    script: "Contact Us",
    before: "Get In Touch With Out",
    accent: "Team",
    after: "",
    note: "Prefer to write to us directly? Use the form below — we reply to every message.",
    ctaText: "Support a cause instead",
  },
  gallery: { script: "Our Gallery", title: "Gallery" },
  testimonial: {
    script: "Our Recent Donater",
    before: "We Help Thousands Of Peoples To Get Better",
    accent: "Lives",
    after: "",
  },
};

// ---------- Fallback lists (used only if the database is unreachable) ----------
export const FALLBACK_CAUSES: Cause[] = [
  {
    id: "old-age-homes",
    title: "Old Age Homes",
    image_url: media.oldage,
    raised: "₹39,280.00",
    donations: "45",
    goal: "₹3,00,000.00",
    percent: 42,
    sort_order: 1,
    is_published: true,
  },
  {
    id: "educational",
    title: "Educational",
    image_url: media.edu1,
    raised: "₹12,000.00",
    donations: "9",
    goal: "₹12,00,000.00",
    percent: 30,
    sort_order: 2,
    is_published: true,
  },
  {
    id: "orphanages",
    title: "Orphanages",
    image_url: media.child,
    raised: "₹20.00",
    donations: "0",
    goal: "₹3,50,000.00",
    percent: 12,
    sort_order: 3,
    is_published: true,
  },
];

export const FALLBACK_EVENTS: EventRow[] = [
  {
    id: "ration",
    title: "Ration Kit Distribution Drive",
    event_date: "Every Sunday, 10:00 AM",
    place: "Nai Basti, Satna, Madhya Pradesh",
    description:
      "We distribute ration kits with rice, dal, oil and essentials to daily wage workers and homeless families.",
    sort_order: 1,
    is_published: true,
  },
  {
    id: "medical",
    title: "Free Medical Check-up Camp",
    event_date: "Second Saturday of the month, 9:00 AM",
    place: "Community Center, Satna",
    description:
      "Free doctor consultations, medicines and health check-ups for elders and underprivileged families.",
    sort_order: 2,
    is_published: true,
  },
  {
    id: "school-kit",
    title: "School Kit Giveaway",
    event_date: "Start of every academic session",
    place: "Government schools, Satna district",
    description:
      "Books, uniforms, bags and stationery for children so that no child drops out for want of supplies.",
    sort_order: 3,
    is_published: true,
  },
];

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: "jyoti",
    name: "Jyoti Gupta",
    role: "HOD, Krupa Jabalpur",
    quote:
      '"Saanidhya Care has been a beacon of hope for our community. Their unwavering commitment to uplifting the lives of vulnerable children, elders, and underprivileged individuals is truly inspiring. Through their programs, we\'ve witnessed firsthand the power of compassion, education, and care in transforming lives. A truly remarkable organization dedicated to making a lasting impact."',
    sort_order: 1,
    is_published: true,
  },
];

export const FALLBACK_GALLERY: GalleryImage[] = [
  { id: "g1", image_url: media.group, caption: "Volunteer team", sort_order: 1 },
  { id: "g2", image_url: media.food1, caption: "Food distribution", sort_order: 2 },
  { id: "g3", image_url: media.charity2, caption: "Charity drive", sort_order: 3 },
  { id: "g4", image_url: media.care1, caption: "Care in action", sort_order: 4 },
  { id: "g5", image_url: media.elderly1, caption: "Elderly care", sort_order: 5 },
  { id: "g6", image_url: media.village, caption: "Village outreach", sort_order: 6 },
  { id: "g7", image_url: media.medical, caption: "Medical camp", sort_order: 7 },
  { id: "g8", image_url: media.child, caption: "Child support", sort_order: 8 },
  { id: "g9", image_url: media.crowd, caption: "Community gathering", sort_order: 9 },
  { id: "g10", image_url: media.volunteer3, caption: "Volunteers at work", sort_order: 10 },
];

export const FALLBACK_LEADERS: TeamMember[] = [
  { id: "l1", name: "Lovelynti Corg", role: "Founder", section: "leaders", sort_order: 1 },
  { id: "l2", name: "Shivam L Rolan", role: "Volunteer", section: "leaders", sort_order: 2 },
  { id: "l3", name: "Abhishek Yadav", role: "Volunteer", section: "leaders", sort_order: 3 },
];

export const FALLBACK_VOLUNTEERS: TeamMember[] = [
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
].map((name, i) => ({
  id: `v${i + 1}`,
  name,
  role: "Volunteer",
  section: "volunteers",
  sort_order: i + 1,
}));

// Shallow-merge a stored page JSON over the defaults so pages always have
// every field present even when a row is missing or partially filled.
export function mergeContent(
  page: keyof SiteContent,
  stored: Record<string, unknown> | null | undefined,
): SiteContent[typeof page] {
  if (!stored) return DEFAULT_CONTENT[page];
  return { ...DEFAULT_CONTENT[page], ...(stored as object) } as SiteContent[typeof page];
}

export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}
