# Members-Only Area — Implementation Plan

## Stack Decisions
| Layer | Choice | Reason |
|---|---|---|
| Auth | **Clerk** | Pre-built UI, admin user management, JWT sessions |
| Database | **Supabase** | PostgreSQL + file storage + visual admin dashboard |
| Hosting | **Vercel** | Static + serverless functions, easy GitHub deploy |
| Frontend | Vanilla HTML/CSS/JS | Consistent with existing site |

## Auth Flow
1. User signs up via Clerk → account created with `publicMetadata: { status: "pending" }`
2. Admin approves in Clerk Dashboard → sets `publicMetadata.status = "approved"`
3. Every protected page checks Clerk session + approval status on load
4. If not signed in → redirect to `members/login.html`
5. If pending → show "Pending approval" message (not redirected away)

## File Structure

```
members/
  config.js          ← Clerk + Supabase keys (replace placeholders before deploy)
  auth.js            ← Shared Clerk auth guard (used by all protected pages)
  login.html         ← Clerk SignIn component (public)
  signup.html        ← Clerk SignUp component (public)
  dashboard.html     ← Member home: welcome, upcoming workshops, quick links (protected)
  workshops.html     ← Browse & register for workshops (protected)
  directory.html     ← Member directory with search/filter (protected)
  resources.html     ← File library: upload + download (protected)

api/
  approve-member.js  ← Vercel serverless fn: sets Clerk publicMetadata.status
  workshops.js       ← CRUD for workshop records via Supabase
  resources.js       ← File upload handler via Supabase Storage

vercel.json          ← Vercel routing config for /api/* functions
```

## Database Schema (Supabase / PostgreSQL)

```sql
-- Member profiles (linked to Clerk user ID)
profiles (
  id            uuid PRIMARY KEY,        -- = Clerk user ID
  display_name  text,
  bio           text,
  specialty     text,
  avatar_url    text,
  show_in_directory boolean DEFAULT true,
  created_at    timestamptz DEFAULT now()
)

-- Workshops
workshops (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title       text,
  description text,
  instructor  text,
  location    text,
  starts_at   timestamptz,
  capacity    int,
  created_at  timestamptz DEFAULT now()
)

-- Workshop registrations
registrations (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  workshop_id uuid REFERENCES workshops(id),
  member_id   uuid,                      -- = Clerk user ID
  registered_at timestamptz DEFAULT now(),
  UNIQUE(workshop_id, member_id)
)

-- Resource library
resources (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title       text,
  description text,
  file_url    text,                      -- Supabase Storage URL
  uploaded_by uuid,                      -- = Clerk user ID
  category    text,
  created_at  timestamptz DEFAULT now()
)
```

Row-level security: all tables require a valid Clerk JWT passed via Supabase JWT integration.

## Page Descriptions

### `members/login.html` (public)
- Centered layout, dark brand background
- Nova Labs IC logo above Clerk `<SignIn />` component
- Link to signup page

### `members/signup.html` (public)
- Same layout as login
- Clerk `<SignUp />` component
- Note informing user that account requires admin approval before access is granted

### `members/dashboard.html` (protected)
- Welcome banner with user's first name and membership status badge
- Quick-stat row: workshops registered, resources uploaded
- Upcoming registered workshops (3 cards from Supabase)
- Quick-nav cards to Workshops, Directory, Resources sections

### `members/workshops.html` (protected)
- List of upcoming workshops sorted by date (from Supabase)
- Each card: title, date/time, instructor, location, spots remaining
- Register button → inserts row in `registrations`; toggles to "Registered ✓"
- Disable register button when workshop is at capacity

### `members/directory.html` (protected)
- Grid of member profile cards (`show_in_directory = true`)
- Each card: avatar, name, specialty, bio snippet
- Client-side search/filter by name or specialty
- Members can edit their own profile from the dashboard

### `members/resources.html` (protected)
- Grid of downloadable resources: title, description, category, uploader
- Client-side filter by category
- Upload button → file picker → Supabase Storage → inserts row in `resources`
- Download links use Supabase Storage signed URLs

## External Services Setup (do before coding)
1. **Clerk** — create app at clerk.com → copy Publishable Key → paste in `members/config.js`
2. **Supabase** — create project at supabase.com → copy URL + Anon Key → paste in `members/config.js`
3. **Supabase JWT** — in Supabase Auth settings, add Clerk JWKS endpoint as JWT Secret so Clerk tokens are accepted
4. **Vercel** — connect GitHub repo → add `CLERK_SECRET_KEY` and `SUPABASE_SERVICE_ROLE_KEY` as env vars

## Design Rules for Member Pages
- Use **IC Teal (#00AABD)** as the primary accent (not orange — that's the marketing CTA color)
- Match existing nav structure: dark `#2A2A2A` sticky nav, centered logo, same link styles
- Same typography system: Futura for headings/UI, Source Serif 4 for body text
- Same card patterns: white bg, `#D6D6D7` border, 12px radius, layered teal-tinted shadows
- Same button classes: `.btn-primary` (orange for key CTAs), `.btn-teal`, `.btn-outline-white`
- Logo path from `members/` subfolder: `../brand_assets/NL_IC.png`
- Do not invent new colors — use only the palette defined in `index.html`'s Tailwind config

## Verification Checklist
- [ ] Sign up → Clerk dashboard shows user with no approval status (pending)
- [ ] Direct access to `dashboard.html` without login → redirected to `login.html`
- [ ] Admin sets `publicMetadata.status = "approved"` in Clerk → user can access dashboard
- [ ] Workshop added in Supabase → appears on `workshops.html`
- [ ] Register for workshop → row in `registrations`, button toggles to "Registered ✓"
- [ ] Upload file on `resources.html` → appears in Supabase Storage + resource grid
- [ ] Member card appears in `directory.html`
- [ ] All pages screenshot cleanly at localhost:3000/members/[page].html
