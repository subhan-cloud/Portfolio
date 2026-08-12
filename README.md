# Subhan — Freelance Developer Portfolio

Built with Next.js (App Router), Tailwind CSS, React Three Fiber, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `app/` — pages (`/`, `/projects`, `/projects/[slug]`, `/about`, `/contact`)
- `components/` — Navbar, Footer, HeroSection + Hero3D (R3F canvas), ProjectCard (tilt),
  SkillBadge (3D flip), SettingsPanel (theme / accent / reduce motion / cursor)
- `context/SettingsContext.jsx` — theme, accent color, reduce-motion, cursor state
  (persisted to `localStorage`, respects `prefers-reduced-motion` by default)
- `lib/site.js` — **all editable content**: bio, skills, social links, and the 4 project
  case studies (problem / built / stack / result)
- `public/projects/` — case study screenshots

## Still needed before launch (see PRD §13)

- [ ] Real screenshots for **AI SaaS Dashboard** and **MobileHub** (currently placeholders —
      drop images into `public/projects/` and reference them in `lib/site.js`)
- [ ] LinkedIn / Upwork / Fiverr links → `lib/site.js` → `site.social`
- [ ] Review/edit the bio copy in `lib/site.js` (`bioShort`, `bioLong`, `heroOneLiner`)
- [ ] Resume PDF (optional) → add to `public/` and link from Contact page
- [ ] Confirm contact email is the one you want to publish

## Deploy

Push to GitHub, then import the repo on [vercel.com](https://vercel.com) — zero config needed.
