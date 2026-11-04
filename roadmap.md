# Roadmap

## 1. Logo + favicon from uploaded SVG (ft-logo-1_1.svg)
- [x] Upload logo to CDN assets, create square favicon in public/
- [ ] Update Logo component + __root favicon link

## 2. Lovable Cloud backend for admin CRM
- [x] Enable Cloud + email auth
- [x] Migration: user_roles, site_content, causes, events, testimonials, gallery_images, team_members, contact_messages + RLS/grants + seed data
- [x] media storage bucket + policies
- [ ] Regenerate DB types

## 3. Data layer
- [ ] src/lib/content.ts — typed content model + defaults (current copy)
- [ ] Public server fns: getSiteData (content + lists), submitContactMessage
- [ ] Admin server fns: session info/bootstrap, save content, CRUD collections, messages

## 4. Auth
- [ ] src/routes/auth.tsx (sign in / sign up)
- [ ] src/routes/_authenticated/route.tsx managed gate
- [ ] start.ts: attachSupabaseAuth functionMiddleware

## 5. Admin CRM UI (/admin)
- [ ] Admin layout + guard (admin role, bootstrap first admin)
- [ ] Dashboard, Site Content editor, Causes, Events, Testimonials, Gallery, Team, Messages
- [ ] Image upload to media bucket

## 6. Wire public pages to editable content
- [ ] Header/Footer/ContactSection/Gallery/Testimonial/DonateCard accept content props
- [ ] index, about, donations, events, volunteer, contact load via server fn

## 7. Verify end-to-end
- [ ] Build passes, signup → admin → edit → public page reflects change
- [ ] Contact form writes to inbox
