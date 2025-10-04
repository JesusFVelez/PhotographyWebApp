# Feature Notes — How to Use This Folder

Purpose: keep product requirements, UI behavior, and implementation details **in sync** with code. Each user-facing page or major component gets one Markdown note.

## When to create a note
- New page, route, or major component (e.g., About, Contact, Gallery, Pricing, Hire Me).
- Any change that adds/changes data fields, API calls, or user flows.

## File naming
- One file per feature, kebab-case: `about.md`, `contact.md`, `gallery.md`, etc.
- Keep this folder flat for quick scanning.

## Required sections (template)
Copy this into a new file and fill it in:

```md
# <Feature Name>

**Route:** /<route>  
**Owner:** <name or “—”>  
**Goal:** <1–2 sentences on the user problem this solves>  
**Requirements link:** ../requirements/initial-requirements.md

## UI structure
- Sections and their purpose.
- Navigation entry point(s) (e.g., header link, footer).

## Data model & inputs
- Props / form fields (names, types, validation).
- Content source (static, CMS, or API).

## API & integration
- Endpoints under `src/pages/api/*` that this feature uses.
- Auth/session assumptions.
- Secret handling (server-only env; no `NEXT_PUBLIC_*`).

## States
- Loading / empty / error / success.
- Accessibility notes (labels, keyboard order, alt text).

## Responsive behavior
- Breakpoints and layout notes.
- `next/image` usage with `sizes`.

## SEO
- Title, meta description, Open Graph basics.

## Analytics
- Events to track (name, when fired, payload).

## Acceptance criteria
- [ ] Bullet list of verifiable outcomes.

## Test plan
- What gets unit tested (Jest + RTL) and any integration checks.

## Open questions
- TBDs to confirm with the user.

## Changes made
- Files touched and brief summary of edits.