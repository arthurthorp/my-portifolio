# Arthur Cardoso — Portfolio

A modern, full-stack portfolio built with **Next.js 16**, **React 19**, and **TypeScript**. It showcases projects and skills, supports Portuguese and English, and includes a contact form with email delivery and optional database persistence.

---

## Live Demo

<!-- Replace with your production URL -->
**[https://your-portfolio.vercel.app](https://your-portfolio.vercel.app)**

---

## Preview

<!-- Add a screenshot or GIF of the homepage -->
![Portfolio Preview](./docs/preview.png)

*Add a screenshot to `./docs/preview.png` or update this section with your preferred image.*

---

## Tech Stack

| Category   | Technologies |
| ---------- | ------------ |
| **Frontend** | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Motion |
| **Backend**  | Next.js Server Actions, Server Components |
| **Database** | PostgreSQL |
| **ORM**      | Drizzle ORM |
| **Email**    | Resend |
| **i18n**     | Route-based (PT/EN), dictionary-based content |
| **Animations** | Motion (Framer Motion fork) |
| **Theme**   | next-themes (light / dark / system) |
| **Markdown** | react-markdown (project detail pages) |
| **Forms**   | react-hook-form, Zod, @hookform/resolvers |

---

## Features

- **Multi-language:** Portuguese (PT) and English (EN) with URL-based routing (`/pt`, `/en`).
- **Theme:** Light, dark, and system preference with persistent selection.
- **Sections:** Hero, About, Experience, Skills (stack-grouped), Projects, Contact.
- **Project detail pages:** Dynamic routes (`/[lang]/projects/[slug]`) with Markdown content and per-project metadata.
- **Contact form:** Validated form with Resend for email delivery and optional storage in PostgreSQL.
- **SEO:** Dynamic metadata, Open Graph, and semantic HTML; 404 pages use noindex where appropriate.
- **Accessibility:** Semantic structure, ARIA, keyboard-friendly navigation, reduced-motion support.
- **Responsive:** Mobile-first layout across all breakpoints.

---

## Screenshots

<!-- Add screenshots and short captions -->

| Section    | Description        |
| ---------- | ------------------ |
| *Home*    | *(Add screenshot)* |
| *Projects*| *(Add screenshot)* |
| *Project detail* | *(Add screenshot)* |

---

## Project Structure

```
├── content/
│   └── projects/          # Markdown per project & locale (e.g. decathlon/pt.md, decathlon/en.md)
├── public/
├── src/
│   ├── actions/           # Server Actions (e.g. contact form)
│   ├── app/
│   │   ├── [lang]/        # Locale segment (pt, en)
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx   # Home
│   │   │   └── projects/
│   │   │       └── [slug]/page.tsx  # Project detail
│   │   ├── layout.tsx     # Root layout (theme, i18n, fonts)
│   │   └── not-found.tsx
│   ├── components/        # UI and layout components
│   ├── db/                # Drizzle schema and client
│   ├── i18n/              # Dictionaries (pt, en) and context
│   ├── lib/               # Utilities, validations, project helpers
│   ├── styles/
│   ├── templates/         # Page templates (home, project-details)
│   └── types/
├── drizzle/               # Migrations (generated)
├── drizzle.config.ts
├── middleware.ts          # Locale detection & redirect
└── package.json
```

---

## Environment Variables

Create a `.env` (or `.env.local`) file at the project root. Use `.env.example` as reference:

| Variable | Description |
| -------- | ----------- |
| `NEXT_PUBLIC_SITE_URL` | Full site URL (e.g. `https://your-site.com`) for metadata and links |
| `DATABASE_URL` | PostgreSQL connection string (for contact storage and Drizzle) |
| `RESEND_API_KEY` | Resend API key for sending contact emails |
| `RESEND_FROM_EMAIL` | Sender email allowed in your Resend domain |
| `CONTACT_EMAIL` | Recipient email for contact form messages |

Example:

```env
NEXT_PUBLIC_SITE_URL=https://your-portfolio.vercel.app
DATABASE_URL=postgresql://user:password@host:5432/dbname
RESEND_API_KEY=re_xxxxx
RESEND_FROM_EMAIL=onboarding@yourdomain.com
CONTACT_EMAIL=hello@yourdomain.com
```

---

## Installation

**Prerequisites:** Node.js 18+, PostgreSQL (optional, for contact storage), a Resend account (for contact emails).

```bash
git clone https://github.com/your-username/my-portifolio.git
cd my-portifolio
npm install
cp .env.example .env
# Edit .env with your values
```

---

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000); the app redirects to `/pt` by default. Use `/en` for English.

---

## Build & Production

```bash
npm run build
npm run start
```

Static project detail pages are pre-rendered at build time when using `generateStaticParams`.

---

## Database Setup (Drizzle + PostgreSQL)

The app uses **Drizzle ORM** with **PostgreSQL** for storing contact form submissions (and any future data).

1. Set `DATABASE_URL` in `.env`.
2. Generate migrations (if you change the schema):
   ```bash
   npm run db:generate
   ```
3. Run migrations:
   ```bash
   npm run db:migrate
   ```
   Or push the schema directly (dev):
   ```bash
   npm run db:push
   ```

Schema is defined in `src/db/schema.ts` (e.g. `contacts` table). Drizzle config is in `drizzle.config.ts`.

---

## Email Setup (Resend)

1. Create a [Resend](https://resend.com) account and verify your domain.
2. Create an API key and set `RESEND_API_KEY` in `.env`.
3. Set `RESEND_FROM_EMAIL` to an allowed sender and `CONTACT_EMAIL` to the inbox that should receive messages.

Contact form submissions are sent via Resend; they can also be stored in the database when configured.

---

## Internationalization (PT/EN)

- **Routing:** All content lives under a locale segment: `/pt` and `/en`. The root `/` redirects to `/pt`.
- **Middleware:** `middleware.ts` reads the first path segment and sets `x-locale` (and cookie) so the app and layouts know the current language.
- **Content:** Copy and project metadata come from `src/i18n/dictionaries/pt.ts` and `en.ts`. The active dictionary is chosen by the current route.
- **Project detail:** Markdown files are stored per project and locale under `content/projects/<slug>/<lang>.md` (e.g. `decathlon/pt.md`, `decathlon/en.md`).

---

## Theme System (Light / Dark)

- **Provider:** `next-themes` in the root layout with `attribute="class"`, `defaultTheme="system"`, and `enableSystem`.
- **CSS:** Theme tokens (e.g. `--background`, `--foreground`, `--accent`) are defined in `src/styles/globals.css` for `:root` and `.dark`, so components stay theme-agnostic.
- **Persistence:** The selected theme is stored by next-themes (e.g. in localStorage) and applied on load to avoid flash.

---

## Markdown Support (Project Detail Pages)

- **Content:** Each project can have Markdown in `content/projects/<slug>/<lang>.md`, loaded on the server and passed to a Markdown renderer.
- **Rendering:** The app uses **react-markdown** with custom components for headings, links, code, images, and lists so output matches the site’s typography and design.
- **Semantics:** The page title is the only `<h1>`; Markdown headings are rendered as `<h2>` and below to keep a single top-level heading per page.
- **Links:** External links use `rel="noopener noreferrer"`; internal links use the Next.js `Link` component.

---

## SEO Optimizations

- **Metadata:** Root and per-route metadata (title, description) and `metadataBase` using `NEXT_PUBLIC_SITE_URL`.
- **Open Graph / Twitter:** Shared metadata for social previews.
- **Semantic HTML:** Sections, headings (h1–h3), and ARIA where needed.
- **404:** Custom not-found page with appropriate noindex behavior so error pages are not indexed.
- **i18n:** Locale-aware URLs and metadata for PT/EN.

---

## Deployment

- **Build:** `npm run build` (ensure env vars are set in the deployment platform).
- **Database:** Run migrations in your production DB (e.g. `npm run db:migrate`) or use your CI/CD pipeline.
- **Hosting:** Compatible with Vercel, Netlify, or any Node host that supports Next.js. Set `NEXT_PUBLIC_SITE_URL` to the production URL.

---

## License

This project is private and not licensed for reuse unless otherwise stated.

---

## Author

**Arthur Cardoso** — Full-Stack Developer  

Portfolio and contact: [live site](#live-demo).
