import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import {
  DEFAULT_CONTENT,
  FALLBACK_CAUSES,
  FALLBACK_EVENTS,
  FALLBACK_GALLERY,
  FALLBACK_LEADERS,
  FALLBACK_TESTIMONIALS,
  FALLBACK_VOLUNTEERS,
  mergeContent,
  type SiteContent,
  type SiteData,
} from "@/lib/content";

// Opaque sb_ keys aren't JWTs; send only apikey, not the default Authorization bearer.
function makePublicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  const supabasePublic = createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
          h.delete("Authorization");
        }
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
  return supabasePublic;
}

export const getSiteData = createServerFn({ method: "GET" }).handler(async (): Promise<SiteData> => {
  try {
    const supabasePublic = makePublicClient();
    const [contentRows, causes, events, testimonials, gallery, team] = await Promise.all([
      supabasePublic.from("site_content").select("page, content"),
      supabasePublic
        .from("causes")
        .select("*")
        .eq("is_published", true)
        .order("sort_order", { ascending: true }),
      supabasePublic
        .from("events")
        .select("*")
        .eq("is_published", true)
        .order("sort_order", { ascending: true }),
      supabasePublic
        .from("testimonials")
        .select("*")
        .eq("is_published", true)
        .order("sort_order", { ascending: true }),
      supabasePublic.from("gallery_images").select("*").order("sort_order", { ascending: true }),
      supabasePublic.from("team_members").select("*").order("sort_order", { ascending: true }),
    ]);

    const content = { ...DEFAULT_CONTENT } as SiteContent;
    for (const row of contentRows.data ?? []) {
      const page = row.page as keyof SiteContent;
      if (page in content) {
        (content as Record<string, unknown>)[page] = mergeContent(
          page,
          row.content as Record<string, unknown>,
        );
      }
    }

    const teamRows = team.data ?? [];
    return {
      content,
      causes: (causes.data ?? []) as typeof causes.data extends null ? never[] : SiteData["causes"],
      events: (events.data ?? []) as SiteData["events"],
      testimonials: (testimonials.data ?? []) as SiteData["testimonials"],
      gallery: (gallery.data ?? []) as SiteData["gallery"],
      leaders: teamRows.filter((t) => t.section === "leaders") as SiteData["leaders"],
      volunteers: teamRows.filter((t) => t.section === "volunteers") as SiteData["volunteers"],
    };
  } catch (error) {
    console.error("getSiteData failed, using fallback content", error);
    return {
      content: DEFAULT_CONTENT,
      causes: FALLBACK_CAUSES,
      events: FALLBACK_EVENTS,
      testimonials: FALLBACK_TESTIMONIALS,
      gallery: FALLBACK_GALLERY,
      leaders: FALLBACK_LEADERS,
      volunteers: FALLBACK_VOLUNTEERS,
    };
  }
});

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator(
    (input: { name: string; email: string; phone: string; message: string }) => {
      const name = (input?.name ?? "").toString().trim();
      const email = (input?.email ?? "").toString().trim();
      if (!name || !email) throw new Error("Name and email are required");
      return {
        name: name.slice(0, 200),
        email: email.slice(0, 200),
        phone: (input?.phone ?? "").toString().trim().slice(0, 50),
        message: (input?.message ?? "").toString().trim().slice(0, 5000),
      };
    },
  )
  .handler(async ({ data }) => {
    const supabasePublic = makePublicClient();
    const { error } = await supabasePublic.from("contact_messages").insert(data);
    if (error) throw new Error("Could not send your message. Please try again.");
    return { ok: true };
  });
