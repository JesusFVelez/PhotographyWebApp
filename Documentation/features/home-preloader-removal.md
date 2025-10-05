# Home Page - Remove Preloader

**Route:** /  
**Owner:** -  
**Goal:** Remove the page-load overlay (counter-based preloader) so the Home page renders content immediately.

**Requirements link:** ../requirements/initial-requirements.md

## UI structure
- Preloader overlay is removed from Home.
- Header, banner, and sections render directly.

## Data model & inputs
- None. No props or data changes.

## API & integration
- None. No API usage or secrets.

## States
- Loading/Empty/Error: N/A for this change.
- Accessibility: No overlay trapping focus; links and content available immediately.

## Responsive behavior
- Unchanged from current Home page.

## SEO
- Unchanged.

## Analytics
- Unchanged. No new events added.

## Acceptance criteria
- [ ] `Preloader` is not imported or rendered in Home.
- [ ] Home content displays immediately on load.
- [ ] No console errors related to missing `Preloader`.
- [ ] `npm run lint` passes in `react-files`.
- [ ] `npm run build` succeeds without errors.
- [ ] No new dependencies added.

## Test plan
- Open `/` and confirm there is no counter/overlay; content appears directly.
- Check console for errors; navigate through sections.
- Validate at 375px, 768px, 1280px widths.
- Run `npm run build` (includes lint) in `react-files`.

## Open questions
- None.

## Changes made
- `react-files/src/pages/index.js`: removed `Preloader` import and `<Preloader />` usage.
