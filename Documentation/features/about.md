---

### `Documentation/features/about.md` (sample)
```md
# About Page

**Route:** /about  
**Owner:** —  
**Goal:** Present the photographer’s story, style, and credibility, and funnel users to the “Hire Me” contact path.

**Requirements link:** ../requirements/initial-requirements.md

## UI structure
- **Hero block:** portrait or behind-the-scenes image, short headline (“Hi, I’m <Name> — Puerto Rico–based photographer”).
- **Bio section:** 2–3 short paragraphs covering background, genres (e.g., weddings, portraits, events), and philosophy.
- **Highlights:** badges/logos or counts (years shooting, clients, featured work).
- **Call to action:** “Hire Me” button → `/contact` (no payment on this page).
- **Social links:** Instagram and Facebook icons linking out; optional embedded Instagram grid (if approved in requirements).

Navigation entry points: Header “About” link, optional footer link.

## Data model & inputs
- **Static content** (copy and images) committed to the repo for v1.
- Images served via `next/image`; alt text required.
- Optional: Future CMS fields (bio, hero image, accolades) — *not in scope for v1*.

## API & integration
- **No external calls** for v1.  
- If Instagram embed is added later, it must proxy through `src/pages/api/instagram.ts` (no tokens in client).  
- Payment methods (ATH Móvil, credit/debit) are **site-wide** and appear on Pricing/Checkout, not on About.

## States
- **Loading/Empty/Error:** N/A for static content.
- Accessibility: semantic headings (`h1`→`h2`), descriptive alt text, keyboard focus order verified.

## Responsive behavior
- 3 breakpoints (mobile ≤ 640px, tablet 641–1024px, desktop ≥ 1025px).
- Use `next/image` with `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"`.

## SEO
- **Title:** About — <Photographer Name>  
- **Description:** Learn about <Name>, a Puerto Rico–based photographer specializing in <genres>.  
- Open Graph image: hero image.

## Analytics
- Event: `about_hireme_click` on CTA; payload `{ source: "about_page" }`.

## Acceptance criteria
- [ ] Page renders at `/about` with hero, bio, highlights, CTA, and social links.
- [ ] “Hire Me” CTA navigates to `/contact`.
- [ ] All images include meaningful `alt` text.
- [ ] Page passes `npm run lint` and builds without warnings.
- [ ] Basic responsive layout looks correct on mobile, tablet, desktop.

## Test plan
- **Unit (Jest + RTL):**
  - Renders heading “About”.
  - Renders CTA button with `role="button"` and accessible name “Hire Me”.
  - Asserts presence of social links with correct `href`.
  - Ensures hero image has non-empty `alt`.
- **Visual/manual:**
  - Quick check at 375px, 768px, 1280px widths.

## Open questions
- Should we include an Instagram grid on this page or keep it on the Gallery/Home?
- Do we want a short “Client Testimonials” teaser here?

## Changes made
- `react-files/src/pages/about.tsx` (new page)
- `react-files/src/components/about/Hero.tsx` (optional component)
- `public/images/about-hero.jpg` (placeholder)