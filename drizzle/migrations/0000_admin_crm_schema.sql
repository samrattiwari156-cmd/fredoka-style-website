-- ===== Roles =====
create type public.app_role as enum ('admin');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;

alter table public.user_roles enable row level security;

create policy "Users read own roles"
  on public.user_roles for select to authenticated
  using (user_id = auth.uid());

create or replace function public.has_any_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.user_roles where role = 'admin')
$$;

create policy "First account becomes admin"
  on public.user_roles for insert to authenticated
  with check (role = 'admin' and not public.has_any_admin());

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = auth.uid() and role = 'admin'
  )
$$;

-- ===== Editable page content =====
create table public.site_content (
  id uuid primary key default gen_random_uuid(),
  page text unique not null,
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

grant select on public.site_content to anon, authenticated;
grant insert, update, delete on public.site_content to authenticated;
grant all on public.site_content to service_role;

alter table public.site_content enable row level security;

create policy "Public reads site content"
  on public.site_content for select to anon, authenticated
  using (true);
create policy "Admins insert site content"
  on public.site_content for insert to authenticated
  with check (public.is_admin());
create policy "Admins update site content"
  on public.site_content for update to authenticated
  using (public.is_admin())
  with check (public.is_admin());
create policy "Admins delete site content"
  on public.site_content for delete to authenticated
  using (public.is_admin());

-- ===== Donation causes =====
create table public.causes (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  image_url text not null default '',
  raised text not null default '₹0.00',
  donations text not null default '0',
  goal text not null default '₹0.00',
  percent integer not null default 0 check (percent between 0 and 100),
  sort_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

-- ===== Events =====
create table public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  event_date text not null default '',
  place text not null default '',
  description text not null default '',
  sort_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

-- ===== Testimonials =====
create table public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null default '',
  quote text not null default '',
  sort_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

-- ===== Gallery =====
create table public.gallery_images (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  caption text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- ===== Team (leaders + volunteers) =====
create table public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null default 'Volunteer',
  section text not null default 'volunteers',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- ===== Contact messages =====
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null default '',
  message text not null default '',
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

grant select on public.causes to anon, authenticated;
grant insert, update, delete on public.causes to authenticated;
grant select on public.events to anon, authenticated;
grant insert, update, delete on public.events to authenticated;
grant select on public.testimonials to anon, authenticated;
grant insert, update, delete on public.testimonials to authenticated;
grant select on public.gallery_images to anon, authenticated;
grant insert, update, delete on public.gallery_images to authenticated;
grant select on public.team_members to anon, authenticated;
grant insert, update, delete on public.team_members to authenticated;
grant select, update, delete on public.contact_messages to authenticated;
grant insert on public.contact_messages to anon, authenticated;
grant all on public.causes, public.events, public.testimonials, public.gallery_images, public.team_members, public.contact_messages to service_role;

alter table public.causes enable row level security;
alter table public.events enable row level security;
alter table public.testimonials enable row level security;
alter table public.gallery_images enable row level security;
alter table public.team_members enable row level security;
alter table public.contact_messages enable row level security;

create policy "Public reads causes" on public.causes for select to anon, authenticated using (true);
create policy "Admins insert causes" on public.causes for insert to authenticated with check (public.is_admin());
create policy "Admins update causes" on public.causes for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "Admins delete causes" on public.causes for delete to authenticated using (public.is_admin());

create policy "Public reads events" on public.events for select to anon, authenticated using (true);
create policy "Admins insert events" on public.events for insert to authenticated with check (public.is_admin());
create policy "Admins update events" on public.events for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "Admins delete events" on public.events for delete to authenticated using (public.is_admin());

create policy "Public reads testimonials" on public.testimonials for select to anon, authenticated using (true);
create policy "Admins insert testimonials" on public.testimonials for insert to authenticated with check (public.is_admin());
create policy "Admins update testimonials" on public.testimonials for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "Admins delete testimonials" on public.testimonials for delete to authenticated using (public.is_admin());

create policy "Public reads gallery" on public.gallery_images for select to anon, authenticated using (true);
create policy "Admins insert gallery" on public.gallery_images for insert to authenticated with check (public.is_admin());
create policy "Admins update gallery" on public.gallery_images for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "Admins delete gallery" on public.gallery_images for delete to authenticated using (public.is_admin());

create policy "Public reads team" on public.team_members for select to anon, authenticated using (true);
create policy "Admins insert team" on public.team_members for insert to authenticated with check (public.is_admin());
create policy "Admins update team" on public.team_members for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "Admins delete team" on public.team_members for delete to authenticated using (public.is_admin());

create policy "Anyone can send a message" on public.contact_messages for insert to anon, authenticated with check (true);
create policy "Admins read messages" on public.contact_messages for select to authenticated using (public.is_admin());
create policy "Admins update messages" on public.contact_messages for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "Admins delete messages" on public.contact_messages for delete to authenticated using (public.is_admin());

-- ===== Media storage policies =====
create policy "Public reads media"
  on storage.objects for select to anon, authenticated
  using (bucket_id = 'media');
create policy "Admins upload media"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'media' and public.is_admin());
create policy "Admins update media"
  on storage.objects for update to authenticated
  using (bucket_id = 'media' and public.is_admin())
  with check (bucket_id = 'media' and public.is_admin());
create policy "Admins delete media"
  on storage.objects for delete to authenticated
  using (bucket_id = 'media' and public.is_admin());

-- ===== Seed data (current live content) =====
insert into public.causes (title, image_url, raised, donations, goal, percent, sort_order) values
  ('Old Age Homes', '/__l5e/assets-v1/58a9f306-9ccd-4e44-addf-ebfd878b2bd1/oldage.jpg', '₹39,280.00', '45', '₹3,00,000.00', 42, 1),
  ('Educational', '/__l5e/assets-v1/929b6a2e-ad47-4409-a894-1a5b18a1fab7/edu1.jpg', '₹12,000.00', '9', '₹12,00,000.00', 30, 2),
  ('Orphanages', '/__l5e/assets-v1/08cf1caa-2d8a-4edd-b18c-2a933bc223c9/child.jpg', '₹20.00', '0', '₹3,50,000.00', 12, 3);

insert into public.events (title, event_date, place, description, sort_order) values
  ('Ration Kit Distribution Drive', 'Every Sunday, 10:00 AM', 'Nai Basti, Satna, Madhya Pradesh', 'We distribute ration kits with rice, dal, oil and essentials to daily wage workers and homeless families.', 1),
  ('Free Medical Check-up Camp', 'Second Saturday of the month, 9:00 AM', 'Community Center, Satna', 'Free doctor consultations, medicines and health check-ups for elders and underprivileged families.', 2),
  ('School Kit Giveaway', 'Start of every academic session', 'Government schools, Satna district', 'Books, uniforms, bags and stationery for children so that no child drops out for want of supplies.', 3);

insert into public.testimonials (name, role, quote, sort_order) values
  ('Jyoti Gupta', 'HOD, Krupa Jabalpur', '"Saanidhya Care has been a beacon of hope for our community. Their unwavering commitment to uplifting the lives of vulnerable children, elders, and underprivileged individuals is truly inspiring. Through their programs, we''ve witnessed firsthand the power of compassion, education, and care in transforming lives. A truly remarkable organization dedicated to making a lasting impact."', 1);

insert into public.gallery_images (image_url, caption, sort_order) values
  ('/__l5e/assets-v1/0e35cb9e-6cd9-4120-a488-22abbf3b18a4/group.jpg', 'Volunteer team', 1),
  ('/__l5e/assets-v1/e107b643-a93a-4826-ac66-bfceb7f7eb1e/food1.jpg', 'Food distribution', 2),
  ('/__l5e/assets-v1/b1d4e4e4-bb10-42c1-b424-8c3f7f109d71/charity2.jpg', 'Charity drive', 3),
  ('/__l5e/assets-v1/b1593180-61fc-43d7-84fd-d02542d0534f/care1.jpg', 'Care in action', 4),
  ('/__l5e/assets-v1/890b86ec-01b4-4546-aa66-6ee0ab81e0d3/elderly1.jpg', 'Elderly care', 5),
  ('/__l5e/assets-v1/038bb46c-91d2-4992-8810-72e696b7e6dd/village.jpg', 'Village outreach', 6),
  ('/__l5e/assets-v1/c5ea52ee-b380-4e2f-b59d-cc736b33b5de/medical.jpg', 'Medical camp', 7),
  ('/__l5e/assets-v1/08cf1caa-2d8a-4edd-b18c-2a933bc223c9/child.jpg', 'Child support', 8),
  ('/__l5e/assets-v1/845c5465-bdc2-47e9-ae90-22523c7d20ca/crowd.jpg', 'Community gathering', 9),
  ('/__l5e/assets-v1/bb9f9db0-1168-4652-a9bf-b459f47ba8ef/volunteer3.jpg', 'Volunteers at work', 10);

insert into public.team_members (name, role, section, sort_order) values
  ('Lovelynti Corg', 'Founder', 'leaders', 1),
  ('Shivam L Rolan', 'Volunteer', 'leaders', 2),
  ('Abhishek Yadav', 'Volunteer', 'leaders', 3),
  ('Poonam Haldar', 'Volunteer', 'volunteers', 1),
  ('Anushka Uikey', 'Volunteer', 'volunteers', 2),
  ('Vansh Patwa', 'Volunteer', 'volunteers', 3),
  ('Sahil Yadav', 'Volunteer', 'volunteers', 4),
  ('Raj Thakur', 'Volunteer', 'volunteers', 5),
  ('Abhishek Yadav', 'Volunteer', 'volunteers', 6),
  ('Raj Yadav', 'Volunteer', 'volunteers', 7),
  ('Sachin Vishwakarma', 'Volunteer', 'volunteers', 8),
  ('Ankit Vishwakarma', 'Volunteer', 'volunteers', 9),
  ('Shivani Yadav', 'Volunteer', 'volunteers', 10),
  ('Sachin Yadav', 'Volunteer', 'volunteers', 11),
  ('Anuj Yadav', 'Volunteer', 'volunteers', 12),
  ('Batram Patel', 'Volunteer', 'volunteers', 13),
  ('Anand Patel', 'Volunteer', 'volunteers', 14);