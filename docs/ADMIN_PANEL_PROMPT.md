# TOR Refinery – Admin Panel: UI-Only Requirements & Build Prompt

Use this document as the **single prompt or spec** when building the **admin panel UI only**. Everything is **static** (mock data, no backend). The goal is to **see how the interface will look and behave** before adding APIs or a database. Use **Section 8** as the copy-paste prompt to build this UI.

---

## 1. Scope: UI only, static data

- **What to build:** The full admin interface – layout, navigation, list views, create/edit forms, and submission list views.
- **Data:** All data is **static or in-memory**. Use `useState` / mock JSON (e.g. the same structures as the public site). No database, no API, no real auth. Changes can be lost on refresh – that’s fine for this phase.
- **What not to do:** Do not add a backend, database, API routes, or real authentication. Do not change the public site or how it gets its data.
- **Tech (match current site):** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Tabler Icons. Same design tokens: primary `#03adeb`, Cabinet Grotesk font.
- **Public site:** Stays as-is; no refactor to “fetch from admin” for this phase.

---

## 2. Admin panel – high-level UI requirements

- **Purpose:** UI that would let TOR staff manage all site content and view submissions. For now it’s a **prototype** to evaluate layout and flows.
- **Access:** Admin area under `/admin`. Use a **mock login** (e.g. simple form; any credentials “log in” and set state; optional logout). No real session persistence required.
- **Scope:** Every section below has a **list view** and **create/edit form** in the UI (with mock CRUD: add/edit/delete in state). Submissions are a **mock list** (hardcoded or state) with a detail view.
- **UX:** Sidebar or top nav for sections; list + create/edit views; forms that mirror the data structures below. Responsive (desktop/tablet).

---

## 3. Content types and data to manage

### 3.1 Homepage

| Content | Current location | Fields to manage |
|--------|-------------------|------------------|
| **Hero** | `app/page.tsx` – Hero component | Title, subtitle, description, primary action (label + href), secondary action (label + href). |
| **Managing Director** | MD message section | Name (e.g. “Mr. Edmund Kombat”), title (e.g. “Managing Director”), company line, image (URL or upload), 3 paragraph blocks of message text. |
| **Why Choose TOR (feature cards)** | 3 cards | Per card: title, short description. (e.g. Operational Excellence, Innovation & Technology, Sustainability & Safety.) |
| **Capacity stats** | “Our Production & Storage Capacity” | 4 items: label (e.g. “CDU Capacity”), value (e.g. “45,000 BPSD”), optional short description. |
| **Stats bar** | 4 stats | Per stat: number (e.g. “50+”), label (e.g. “Years of Excellence”). |
| **CTA section** | “Ready to Partner With Us?” | Section title, short description, 3 benefit items (title + short text), contact block: phone, email, location text. Button “Contact Us Now” links to `/investor-contacts/request-information` (can stay fixed or be editable). |

### 3.2 About page

| Content | Current location | Fields to manage |
|--------|-------------------|------------------|
| **Hero** | About hero | Title, subtitle, description. |
| **Who We Are** | Section | 3 paragraph blocks (rich text or long text). |
| **Vision** | Card | Title (“Our Vision”), body text. |
| **Mission** | Card | Title (“Our Mission”), body text. |
| **Core values** | Flip cards (7 items) | Per value: name (e.g. “Highest Standards”, “Integrity”), optional short description for card back, icon identifier (or select from fixed set). |
| **Our History** | Section | Section title/description, image (URL or upload), 3 paragraph blocks. |
| **Our Strategy** | Section | One block of text (currently a single paragraph). |
| **Leadership** | 3 cards | Per person: name, role/title, initials or image, short bio. |

### 3.3 What We Do page

| Content | Current location | Fields to manage |
|--------|-------------------|------------------|
| **Hero** | Hero | Title, subtitle, description. |
| **Core operations** | 4 cards | Per item: title, description, list of feature bullets (array of strings). |
| **Capabilities** | 4 cards | Per item: title, value (e.g. “500,000+”), unit (e.g. “Barrels Per Day”), description. |
| **Process steps** | 5 steps | Per step: step number, title, description. |
| **Our Services** | 5 image cards | Per service: title, description, image (URL or upload), icon key (e.g. flask, tank, truck, tools, school). |

### 3.4 News & Events page

| Content | Current location | Fields to manage |
|--------|-------------------|------------------|
| **Hero** | Hero | Title, subtitle, description. |
| **News items** | “Latest News” grid | Per item: date, category (e.g. Sustainability, Operations), title, description, image (emoji/URL/upload). Ordering (e.g. by date). |
| **Gallery** | “Our Gallery” | Per item: image (URL or upload), title, description. Ordering. |
| **Upcoming events** | List/cards | Per event: date, title, location, type (e.g. Webinar, Conference). Ordering. |

### 3.5 Investor Contacts page

| Content | Current location | Fields to manage |
|--------|-------------------|------------------|
| **Hero** | Hero | Title, subtitle, description. |
| **Contact methods** | 3 cards | Per method: title (e.g. Investor Relations), description, email, phone. (Icon can be fixed by type.) |
| **Team members** | 3 cards | Per member: name, role, email, phone. (Optional: image/initials.) |
| **Office location** | One block | Address lines, phone, email, business hours text. Map embed (e.g. iframe URL or lat/lng). |

### 3.6 Procurement (public listing)

| Content | Current location | Fields to manage |
|--------|-------------------|------------------|
| **Hero** | Procurement hero | Title, subtitle, description, primary/secondary action buttons. |
| **Procurement items** | List from state | Per item: id, itemName, description, category, quantity, deadline (date), contactEmail, contactPhone, companyName, status (active | closed), datePosted. Admin must be able to **add, edit, close/delete** items. Public site shows only **active** items. |

### 3.7 Other pages (hero + body content)

- **History, Mission, Services, Sustainability, Health & Safety, Investors:** Each has a hero (title, subtitle, description) and one or more content sections (headings + paragraphs or lists). Prefer **one editable “page content” or blocks** per route (e.g. rich text or markdown) so admins can change copy without code.

---

## 4. Form submissions (admin UI: list + detail view, mock data)

| Form | Source | Fields to show in admin |
|------|--------|---------------------------|
| **Request Information** | `/investor-contacts/request-information` | First name, last name, email, subject, message. (Optional in UI: timestamp.) |
| **Submit Proposal** | `/procurement/submit-proposal` | Linked to procurement item (itemId). Company name, contact person, email, phone, address, proposal summary, pricing, delivery time, certifications, previous experience, additional notes; file names or “attachments” placeholder. Timestamp. |

For the **UI-only** build: use **mock submission data** (e.g. 2–3 hardcoded Request Information and 2–3 Proposals). Admin shows a **list view** (table or cards) and a **detail view** (all fields). Export button can be present but does not need to do anything real.

### 4.1 Procurement proposal – full fields for admin portal

Each proposal submission should be displayable in the admin with the fields below. Source: `/procurement/submit-proposal` form. Use these for **list view** (pick a few for the row) and **detail view** (show all, grouped as below).

**Link to procurement item (required)**  
- `itemId` – ID of the procurement item this proposal is for.  
- In list/detail, show: **Procurement item** (e.g. item name, category, quantity, deadline) so staff know which request the proposal answers.

**Company Information**  
| Field | Type | Required | Notes |
|-------|------|----------|--------|
| Company Name | text | yes | |
| Contact Person | text | yes | Full name |
| Email | email | yes | |
| Phone | text | yes | e.g. +233 XX XXX XXXX |
| Company Address | text | yes | Street, city, country |

**Proposal Details**  
| Field | Type | Required | Notes |
|-------|------|----------|--------|
| Proposal Summary | long text | yes | Detailed summary of the proposal |
| Proposed Pricing | text | yes | e.g. $50,000 or GHS 500,000 |
| Estimated Delivery Time | text | yes | e.g. 4–6 weeks |
| Certifications & Standards | long text | no | ISO, quality certs, etc. |
| Previous Experience | long text | no | Similar projects, references |
| Additional Notes | long text | no | Any extra information |

**Supporting Documents**  
| Field | Type | Notes |
|-------|------|--------|
| Attachments | list of files | For admin: show file names and optionally size or “Download” placeholder. Accept: PDF, DOC, DOCX, XLS, XLSX (max 10MB per file). In UI-only/mock, use mock names e.g. `company_profile.pdf`, `pricing.xlsx`. |

**Metadata (for admin)**  
| Field | Type | Notes |
|-------|------|--------|
| Submitted at | datetime | When the proposal was submitted (for list sort/filter). |

**List view suggestion:** Show at least: Procurement item name, Company name, Contact person, Email, Submitted at. Optional: Pricing, Delivery time.

**Detail view:** Group sections as “Procurement item”, “Company Information”, “Proposal Details”, “Supporting Documents”, “Submitted at”. Show every field above; long text in read-only blocks or expandable areas.

---

## 5. Global / shared content

| Item | Where used | Fields |
|------|------------|--------|
| **Site name / logo** | Header, footer | Site name, logo image (URL or upload). |
| **Footer** | Footer | Company tagline, link groups (e.g. Company, Operations, Resources), social links (e.g. LinkedIn, Twitter), address/location text, map embed or coordinates. |
| **Contact (CTA)** | Home CTA, footer | Phone, email, address – can be single “global contact” or per-section. |

---

## 6. Functional requirements for the admin (UI only)

- **Mock auth:** Simple login screen at `/admin` or `/admin/login`. Any credentials “log in” (e.g. set `isLoggedIn` in state). Optional logout. If not logged in, show login form or redirect to it. No real session persistence (refresh can reset).
- **Dashboard:** One dashboard page with summary cards or counts (from mock data): e.g. active procurement items, news count, submission counts. Links to each admin section.
- **CRUD UI:** For each content type in Section 3, provide: (1) **List view** (table or cards), (2) **Create** (button + form), (3) **Edit** (from list row/card → form). Use **local state** (e.g. `useState`) or static JSON; “Save” updates state only. Delete/remove button can remove item from state. No API calls.
- **Images:** Use **image URL** text fields in forms (no real upload). Optional: show a preview of the URL in the form.
- **Submissions:** Two areas: “Request Information” and “Proposals”. Each has a **list view** (mock rows) and a **detail view** (all fields). Filter/search can be UI-only (e.g. filter by date). Export button can be present; it can be no-op or trigger a fake “Export” for UI demo.
- **Procurement:** In the procurement list/edit form, include **status** (active/closed) as a dropdown or toggle. Public site logic is unchanged; admin UI only needs to show and edit the field.
- **Preview:** “Preview” link that opens the corresponding public page in a new tab (e.g. “Preview Home” → `/`, “Preview About” → `/about`). No draft/publish logic needed.

---

## 7. Technical notes (UI-only, no backend)

- **Routes:** All under `/admin` in the **same** Next.js app: e.g. `/admin`, `/admin/login`, `/admin/dashboard`, `/admin/home`, `/admin/about`, `/admin/what-we-do`, `/admin/news`, `/admin/investor-contacts`, `/admin/procurement`, `/admin/submissions/requests`, `/admin/submissions/proposals`.
- **Layout:** One admin layout (sidebar or top nav) wrapping all `/admin/*` pages except login. Reuse Tailwind and primary color; keep tables/forms simple (native `<table>`, `<form>`, `<input>`, etc.).
- **Data:** Keep mock data in page-level `useState` or in a small number of shared mock files (e.g. `admin/mock/home.ts`, `admin/mock/procurement.ts`). No database, no API routes.
- **Auth:** A React context or simple state (e.g. `isLoggedIn`); no NextAuth or external auth. Redirect to `/admin/login` when not “logged in”.

---

## 8. One-shot build prompt – UI only (copy-paste)

Use this prompt to build **only the admin panel UI** with static/mock data. No backend, no database, no changes to the public site.

---

**Prompt:**

Build the **admin panel UI only** for the TOR Refinery site. Everything is **static**: use mock data and React state only. No backend, no database, no API, no refactor of the public site.

**Stack & scope**
- Same repo: Next.js 16 App Router, TypeScript, Tailwind CSS v4, Tabler Icons. Primary color `#03adeb`, Cabinet Grotesk font.
- All admin routes under `/admin`. Use a **mock login**: one simple login page; any credentials “log in” (e.g. set state); optional logout. Redirect to login when not “logged in”. No real auth or session persistence.
- One shared admin layout (sidebar or top nav) for all `/admin/*` pages except login.

**Sections and UI to build**
For each section, provide: **list view** (table or cards) and **create/edit form** (all fields from the spec). Data lives in `useState` or static mock JSON; Save = update state; Delete = remove from state. No API calls.

1. **Dashboard** (`/admin/dashboard`)  
   Summary cards/counts from mock data (e.g. active procurement count, news count, submission counts) and links to each section below.

2. **Homepage** (`/admin/home`)  
   Edit: Hero (title, subtitle, description, primary/secondary action label + href). Managing Director (name, title, company line, image URL, 3 message paragraphs). Feature cards (3: title, description). Capacity stats (4: label, value, optional description). Stats bar (4: number, label). CTA section (title, description, 3 benefits with title + text, phone, email, location). List + form or tabbed form by block.

3. **About** (`/admin/about`)  
   Edit: Hero. Who We Are (3 paragraphs). Vision (title, body). Mission (title, body). Core Values (7 items: name, optional description, icon key). Our History (section title/description, image URL, 3 paragraphs). Our Strategy (one text block). Leadership (3: name, role, image URL or initials, bio). List/edit by section.

4. **What We Do** (`/admin/what-we-do`)  
   Edit: Hero. Core Operations (4: title, description, list of feature strings). Capabilities (4: title, value, unit, description). Process steps (5: step number, title, description). Our Services (5: title, description, image URL, icon key). List + edit forms per block.

5. **News & Events** (`/admin/news`)  
   Edit: Hero. News items (date, category, title, description, image URL) – list + add/edit/delete. Gallery (image URL, title, description) – list + add/edit/delete. Upcoming events (date, title, location, type) – list + add/edit/delete.

6. **Investor Contacts** (`/admin/investor-contacts`)  
   Edit: Hero. Contact methods (3: title, description, email, phone). Team members (3: name, role, email, phone). Office (address, phone, email, business hours, map URL or embed). List + form per block.

7. **Procurement** (`/admin/procurement`)  
   List of procurement items. Each item: itemName, description, category, quantity, deadline, contactEmail, contactPhone, companyName, status (active/closed), datePosted. List view with Add / Edit / Delete; form with all fields. Use mock data (e.g. 2–3 items).

8. **Submissions**  
   - **Request Information** (`/admin/submissions/requests`): List (mock 2–3 rows: first name, last name, email, subject, message, optional date). Detail view (all fields).  
   - **Proposals** (`/admin/submissions/proposals`): List (mock 2–3 rows: show procurement item name, company name, contact person, email, submitted at). Detail view: show **all** procurement proposal fields grouped as in Section 4.1 (Procurement item, Company Information, Proposal Details, Supporting Documents, Submitted at). Use the field list in Section 4.1 for labels and structure.  
   Export button can be present; no-op or fake for demo.

**Other**
- **Preview:** Per-section or per-page “Preview” link that opens the corresponding public page in a new tab (e.g. Preview Home → `/`, Preview About → `/about`).
- **Images:** All image fields are **image URL** (text input). No file upload. Optional: show thumbnail preview from URL.
- **Reference:** Full field list and data structures are in `docs/ADMIN_PANEL_PROMPT.md` (Section 3 and 4).

Do **not** add a database, API routes, or real authentication. Do **not** change how the public site gets its data. Goal: a complete admin UI so we can see how the interface looks and behaves.

---

## 9. Summary checklist (UI only)

- [ ] Mock login screen; “logged in” state; redirect when not logged in
- [ ] Admin layout (sidebar or top nav) for all `/admin/*` except login
- [ ] Dashboard with mock counts and links
- [ ] Home: Hero, MD, features, capacity, stats, CTA – list/edit UI
- [ ] About: Hero, Who We Are, Vision/Mission, Values, History, Strategy, Leadership – list/edit UI
- [ ] What We Do: Hero, Operations, Capabilities, Process, Services – list/edit UI
- [ ] News: Hero, News items, Gallery, Events – list + add/edit/delete
- [ ] Investor Contacts: Hero, Contact methods, Team, Office – list/edit UI
- [ ] Procurement: List + add/edit/delete items (with status active/closed)
- [ ] Submissions: Request Information list + detail; Proposals list + detail (mock data)
- [ ] Preview links to public pages
- [ ] All data in state or mock JSON; no backend

This document and the prompt in **Section 8** are the single source of requirements for the TOR Refinery admin panel **UI (static)**.

---

## 10. Prompt: Add procurement proposal fields to the admin portal

Use this prompt when implementing or updating the **Proposals** (procurement proposal submissions) area in the admin portal so that all submitted information is visible.

---

**Prompt:**

In the admin portal, the **Proposals** section (e.g. `/admin/submissions/proposals`) must show the full information from the procurement proposal form. Use the field spec below.

**List view**  
- Table or cards. Each row/card must show at least: **Procurement item** (name or “Item: [itemName]”), **Company name**, **Contact person**, **Email**, **Submitted at**. Optionally include Pricing and Delivery time.  
- Clicking a row opens the **detail view**.

**Detail view**  
- One page or modal per proposal. Show all fields, grouped as follows.

1. **Procurement item**  
   - Which request this proposal is for: item ID, item name, category, quantity, deadline (from the procurement item record). Display as read-only summary.

2. **Company Information**  
   - Company Name, Contact Person, Email, Phone, Company Address. All read-only.

3. **Proposal Details**  
   - Proposal Summary (long text), Proposed Pricing, Estimated Delivery Time, Certifications & Standards (long text), Previous Experience (long text), Additional Notes (long text). All read-only.

4. **Supporting Documents**  
   - List of attachment file names (and size or type if available). If backend stores files, show “Download” per file; if UI-only/mock, show mock names e.g. `company_profile.pdf`, `pricing.xlsx`.

5. **Metadata**  
   - Submitted at (date/time).

**Data structure (for mock or API)**  
Each proposal record should include: `id`, `itemId`, procurement item snapshot (e.g. `itemName`, `category`, `quantity`, `deadline`), then `companyName`, `contactPerson`, `email`, `phone`, `address`, `proposalSummary`, `pricing`, `deliveryTime`, `certifications`, `previousExperience`, `additionalNotes`, `attachments` (array of `{ name: string, size?: number }` or similar), `submittedAt` (ISO date string).

**Reference:** The exact form fields and labels are in `docs/ADMIN_PANEL_PROMPT.md`, Section 4.1 (“Procurement proposal – full fields for admin portal”). Match those labels and groupings in the admin UI so staff see the same information as submitted on the public form.

---
