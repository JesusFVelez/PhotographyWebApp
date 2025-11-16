# Header Hamburger Alignment

**Route:** Global header (layout)  
**Owner:** —  
**Goal:** Keep the mobile hamburger toggle visually level with the Xoon logo so the header looks balanced at small breakpoints without affecting the rest of the navigation experience.

**Requirements link:** ../requirements/initial-requirements.md

## UI structure
- `.header-branding` row now wraps the logo and hamburger control so they share the same horizontal baseline on narrow screens.
- `.nav-right` still contains the desktop nav links and the "Hire Me Now" CTA button; the slide-in panel for mobile remains unchanged.

## Data model & inputs
- Navigation items stay as the static `NAV_ITEMS` array inside `src/components/header/Header.jsx`.
- No new props or data sources; CTA link still points to `/contact-me`.

## API & integration
- No API usage or changes to integrations; the work is purely presentational.

## States
- Mobile drawer open/closed state is still handled by `isMobileMenuOpen`; aria labels and focus management remain intact.
- Screen-reader text (`sr-only`) stays attached to the toggle button.

## Responsive behavior
- ≥1200px: Header layout matches the previous desktop experience, with inline navigation and CTA.
- 992–1199px: Logo/toggle row spans the header width, while nav links and CTA share the second row with even spacing.
- ≤991px: Logo and hamburger share the top row; nav menu is hidden, CTA becomes a full-width button below, and the drawer/backdrop pairing handles navigation.

## SEO
- No SEO impact; header still wraps the same links and metadata.

## Analytics
- No tracking hooks were added or removed. Existing click tracking remains unaffected.

## Acceptance criteria
- [x] Hamburger toggle appears on the same horizontal line as the Xoon logo on mobile breakpoints.
- [x] Desktop/tablet navigation spacing stays consistent while the new `.header-branding` wrapper only affects small layouts.
- [x] Drawer toggle/click/ESC behavior and aria attributes still function as before.
- [x] `npm run lint` passes in the root workspace (react-files scope).
- [x] `npm run build` succeeds without warnings or errors.
- [x] No new dependencies introduced.

## Test plan
- Desktop (≥1280px): Confirm header spacing matches the previous layout and the hamburger remains hidden.
- Tablet (1024px): Verify the logo/toggle row spans the full width and the Hire Me button shares the second row with nav links.
- Mobile (375px): Ensure the hamburger aligns with the logo, opens/closes the drawer, and the button stays full-width below the brand row.
- Keyboard: Tab through the toggle, drawer links, and CTA; ESC closes the drawer.
- Run `npm run lint` and `npm run build` from the root (react-files) workspace; both succeed.

## Open questions
- None at this time.

## Changes made
- Updated `src/components/header/Header.jsx` to wrap the logo and toggle inside `.header-branding` and adjusted responsive CSS so the hamburger aligns with the logo on mobile without disturbing desktop layout.
