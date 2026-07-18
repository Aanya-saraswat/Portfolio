# Aanya Saraswat — Portfolio

A multi-page Next.js 16 (App Router) portfolio, built with TypeScript and
Tailwind v4. Design direction: "Signal & Paper" — editorial serif headings,
mono technical labels (a quiet nod to the IBM internship), and a signature
scrolling skill-ticker styled like a PCB trace.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. (The first `npm run build` needs internet access
to fetch Fraunces / Inter / IBM Plex Mono from Google Fonts — this sandbox
doesn't have that, but it will work on your machine, Vercel, etc.)

## What to customize first

1. **Certificates** — `/public/certificates/*.svg` are placeholders. Drop in
   your real certificate photos/scans with the *same filenames* (or update
   the `image` paths in `lib/data.ts`), ideally as `.jpg`/`.png`/`.webp`.
2. **Résumé** — add a `resume.pdf` to `/public/` (linked from About and
   Contact pages).
3. **Links** — `profile.github` and `profile.linkedin` in `lib/data.ts` are
   placeholders — fill in your real URLs.
4. **Project links** — each project's `github` / `demo` fields in
   `lib/data.ts`.
5. **All copy lives in `lib/data.ts`** — one file to edit for every page.

## Structure

```
app/
  layout.tsx          Root layout, fonts, Nav + Footer
  page.tsx            Home
  about/page.tsx
  experience/page.tsx  Professional experience + leadership timeline
  certifications/page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx   Individual project deep-dive
  contact/page.tsx
  globals.css          Design tokens (colors, fonts, animations)
components/
  Nav.tsx, Footer.tsx
  SkillTicker.tsx       Signature rotating skills element
  ProjectCard.tsx, Timeline.tsx, SectionHeading.tsx
  CertificateGallery.tsx  Grid + lightbox
  RevealOnScroll.tsx     Scroll-triggered fade/rise wrapper
lib/
  data.ts               ALL content — edit this to update the site
```

## Extending it later

- Add a blog: `app/writing/[slug]/page.tsx` reading from MDX files.
- Swap the ticker's inline SVG dots for real animated PCB-trace SVG paths if
  you want to push the electronics motif further.
- Add a contact form with a route handler (`app/api/contact/route.ts`) if you
  want visitors to message you without opening their mail client.
- Deploy free on Vercel: `vercel --prod` (auto-detects Next.js).
