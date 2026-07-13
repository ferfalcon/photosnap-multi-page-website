# PhotoSnap Website — PLAN.md

## 1. Purpose

This document defines a practical implementation plan for the PhotoSnap responsive marketing website.

It is based on:

- the inspected Figma wrapper node `62857:72`
- `DESIGN.md`
- `SPEC.md`
- the current repository information available during review

The plan covers the **Astro review-site phase only**. The approved Astro version will later become the visual and structural source of truth for the WordPress block-theme phase.

This is not component code. It is the implementation strategy to follow before writing component files.

## 2. Current repo understanding

The repository appears to be in an early planning/documentation state.

Observed facts from the remote repository inspection:

- `README.md` exists.
- The README describes a two-phase strategy: Astro review site first, WordPress final site later.
- The README lists Astro, semantic HTML, CSS custom properties, Flexbox, CSS Grid, and mobile-first responsive workflow as the intended approach.
- `package.json` was not found during remote file inspection.
- `DESIGN.md`, `SPEC.md`, and `PLAN.md` were not found in the repository root during remote inspection, but they exist as current working documents in this conversation.

**Assumption:** The Astro application has not been scaffolded yet, or the local checkout may contain files that were not visible through remote inspection.

**Implementation consequence:** Start with a repo verification step. Do not scaffold, move documentation, or overwrite files until the actual local tree is inspected.

## 3. Planning review findings

This section records the second review of `DESIGN.md`, `SPEC.md`, and the previous `PLAN.md`.

### 3.1 Issues found

- The previous plan was slightly over-abstracted for a first Astro pass. Components such as a generic `Icon.astro`, `ResponsiveImage.astro`, `pages.ts`, and `pricing-toggle.ts` could be useful later, but creating all of them up front risks unnecessary complexity.
- The yearly pricing toggle was not precise enough. `SPEC.md` requires a billing control, but yearly prices are not confirmed. The plan now treats yearly switching as a gated behavior instead of a default implementation task.
- The placeholder destination policy needed to be stricter. Visible fake links such as `#` can create accessibility and review problems.
- The responsive strategy needed stronger guidance for intermediate widths between 768px and 1440px, especially around the desktop 1110px grid and the tablet-to-desktop transition.
- The asset step needed to happen earlier and include a simple crop/focal-point record before page implementation begins.
- The implementation sequence did not explicitly call out no-JavaScript behavior for the mobile menu and pricing toggle.
- The testing checklist needed clearer checks for source copy, image crops, focus states over photography, disabled/unresolved controls, and comparison-table semantics.
- The plan needed a complexity-control rule so future implementation does not drift into a large framework-like component system.

### 3.2 Changes made

- Simplified the proposed source structure and marked optional abstractions as deferred.
- Added a **complexity-control policy**: create a component when it is reused, isolates required behavior, or improves WordPress migration mapping.
- Added a **yearly pricing decision gate** before implementing live toggle behavior.
- Added stricter unresolved-link rules.
- Moved asset export/manifest work earlier in the sequence.
- Added responsive interpolation rules and exact target QA points.
- Added accessibility details for inert/focus containment fallbacks, scroll lock, no-JavaScript states, and pricing comparison labels.
- Added new risks for over-abstraction, fixed-pixel layout, CSS specificity, no-JavaScript behavior, and table/mobile duplication.
- Updated the implementation sequence to stay incremental and easier to review.

## 4. Implementation principles

- Work in small, reviewable steps.
- Treat Figma, `DESIGN.md`, and `SPEC.md` as source of truth.
- Do not copy Figma-generated React/Tailwind code into the project.
- Do not add Tailwind unless explicitly requested later.
- Use Astro, semantic HTML, TypeScript data files, and maintainable plain CSS.
- Prefer static HTML and CSS. Add JavaScript only for required interactions.
- Match the inspected target frames at **375px**, **768px**, and **1440px** before optimizing intermediate widths.
- Keep page sections and component boundaries compatible with a future WordPress block theme.
- Do not invent product behavior that is missing from the design or spec.
- Document assumptions instead of silently guessing.

## 5. Complexity-control policy

The first Astro implementation should be polished, not over-engineered.

Create a component when at least one of these is true:

- The pattern appears in multiple places, such as header, footer, split sections, story cards, feature cards, pricing cards, or CTA buttons.
- The pattern has accessibility behavior that should be isolated, such as the mobile menu or pricing comparison.
- The pattern maps cleanly to a future WordPress template part, pattern, or block.
- The pattern hides unavoidable complexity, such as responsive image crops.

Do **not** create a generic abstraction just because it might be useful later.

Deferred unless needed during implementation:

- A generic `Icon.astro` component.
- A generic `ResponsiveImage.astro` component.
- A separate `pages.ts` content registry.
- A live `pricing-toggle.ts` script before yearly pricing is confirmed.
- A complex design-token utility system beyond the tokens required by the Figma style guide.

## 6. Files to create or modify

### 6.1 Root files

Create or modify only as needed after local verification:

```txt
README.md
DESIGN.md
SPEC.md
PLAN.md
package.json
astro.config.mjs
tsconfig.json
.gitignore
```

Notes:

- `README.md` already exists and should not be rewritten unless setup commands, live links, or project status change.
- `DESIGN.md`, `SPEC.md`, and `PLAN.md` should live in the repository root unless the user chooses a `/docs` folder.
- If the local repo already has Astro config files, adapt to the existing structure instead of replacing it.
- Use the package manager already present in the repo. If there is no lockfile or package-manager field, confirm whether to use `npm`, `pnpm`, or another tool before standardizing commands.

### 6.2 Proposed source structure

Start with this lean structure:

```txt
src/
  layouts/
    BaseLayout.astro

  pages/
    index.astro
    stories.astro
    features.astro
    pricing.astro

  components/
    Header.astro
    MobileMenu.astro
    Footer.astro
    ButtonLink.astro
    SplitSection.astro
    BetaInvite.astro
    FeaturedStoryHero.astro
    StoryGrid.astro
    StoryCard.astro
    FeatureGrid.astro
    FeatureCard.astro
    PricingPlans.astro
    PricingCard.astro
    PricingComparison.astro
    SocialLinks.astro

  data/
    types.ts
    navigation.ts
    site.ts
    stories.ts
    features.ts
    pricing.ts

  styles/
    reset.css
    tokens.css
    global.css

  scripts/
    mobile-menu.ts
```

Optional later files, only if repeated code justifies them:

```txt
src/components/Logo.astro
src/components/Icon.astro
src/components/ResponsiveImage.astro
src/styles/typography.css
src/styles/utilities.css
src/scripts/pricing-toggle.ts
```

**Assumption:** Astro component scoped styles plus a small set of global CSS files will be enough. If styles become hard to maintain, split typography/utilities out of `global.css` later.

### 6.3 Proposed public asset structure

```txt
public/
  assets/
    images/
      home/
      stories/
      features/
      pricing/
      shared/

    icons/
      logo.svg
      hamburger.svg
      close.svg
      arrow-black.svg
      arrow-white.svg
      feature-responsive.svg
      feature-no-limit.svg
      feature-embed.svg
      feature-domain.svg
      feature-exposure.svg
      feature-drag-drop.svg
      social-facebook.svg
      social-youtube.svg
      social-twitter.svg
      social-pinterest.svg
      social-instagram.svg
      check.svg
```

Also create an asset notes file if crops/focal points become hard to track:

```txt
public/assets/ASSETS.md
```

`ASSETS.md` should record:

- original Figma use case
- local filename
- page/section usage
- whether the image is decorative or content-bearing
- desktop/tablet/mobile crop notes
- alt-text status

**Assumption:** Assets will be exported from Figma and committed locally. Temporary Figma asset URLs must not be used in the site.

## 7. Proposed component responsibilities

### 7.1 `BaseLayout.astro`

Responsibilities:

- Provide the document shell.
- Load global CSS.
- Set page `<title>` and metadata.
- Render skip link, header, main slot, and footer.
- Pass current page to header/footer navigation.
- Keep one `<main id="main-content">` per page.

### 7.2 `Header.astro`

Responsibilities:

- Render desktop/tablet logo, primary nav, and `GET AN INVITE` CTA.
- Render mobile logo and menu trigger.
- Mark the current page with `aria-current="page"`.
- Keep the header non-sticky unless the client requests sticky behavior.
- Delegate mobile overlay panel behavior to `MobileMenu.astro` and `mobile-menu.ts`.

### 7.3 `MobileMenu.astro`

Responsibilities:

- Match the Figma open state: white panel, centered links, divider, full-width CTA, dark overlay.
- Use a button trigger with `aria-expanded` and `aria-controls`.
- Close on explicit close button, Escape, and menu-link activation.
- Return focus to the trigger on close.
- Prevent accidental background interaction while open.
- Clean up open state when resizing into tablet/desktop layout.

Implementation note:

- Use small vanilla JavaScript.
- Prefer `inert` for background content when available, with an `aria-hidden`/focus-management fallback if needed.
- Do not introduce a client-side framework for this interaction.

### 7.4 `Footer.astro`

Responsibilities:

- Render logo, social links, footer nav, invite CTA, and copyright.
- Reflow from desktop two-sided layout to tablet compact layout to mobile centered stack.
- Give social links accessible labels.
- Follow unresolved-link policy for social URLs.

### 7.5 `ButtonLink.astro`

Responsibilities:

- Support these visual variants:
  - text + arrow on light background
  - text + arrow on dark/image background
  - solid black button
  - solid white button
- Render as `<a>` only when a valid destination exists.
- Render as a documented visual placeholder when a destination is unresolved.
- Hide decorative arrows from assistive technology.
- Provide visible hover and focus states even if the exact Figma active state remains unconfirmed.

### 7.6 `SplitSection.astro`

Responsibilities:

- Cover Home hero, Home secondary sections, Features hero, and Pricing hero.
- Support dark and light text-panel variants.
- Support image-left and image-right layouts.
- Support desktop/tablet side-by-side layout and mobile stacked layout.
- Support gradient accent position changes:
  - vertical on desktop/tablet
  - horizontal top-left on mobile
- Allow section-specific image crop data by breakpoint.

### 7.7 `FeaturedStoryHero.astro`

Responsibilities:

- Render the Stories page featured hero.
- Use full-image overlay layout on desktop/tablet.
- Use stacked image + black content panel on mobile.
- Preserve label, title, metadata, body copy, and CTA order.

### 7.8 `StoryGrid.astro` and `StoryCard.astro`

Responsibilities:

- Render Home story previews and Stories page story list from shared story data.
- Support Home variant with no visible dates.
- Support Stories variant with visible dates.
- Preserve full-bleed no-gutter layout.
- Support card sizes:
  - desktop: 360 × 500
  - tablet: approximately 384 × 500
  - mobile: 375 × 375 / full viewport width square-like cards
- Avoid nested links.
- If story destinations are unresolved, preserve visual CTA but do not create fake clickable cards.

### 7.9 `FeatureGrid.astro` and `FeatureCard.astro`

Responsibilities:

- Render Home feature preview and full Features page grid from shared feature data.
- Support different responsive behavior by variant:
  - Home: desktop 3 columns; tablet/mobile single centered column.
  - Features page: desktop 3 columns; tablet 2 columns; mobile single centered column.
- Normalize icon areas so the different icon sizes align visually.

### 7.10 `BetaInvite.astro`

Responsibilities:

- Render only on Features and Pricing pages.
- Support desktop/tablet horizontal text + CTA layout.
- Support mobile stacked layout.
- Render dark photographic background, overlay, and gradient accent.
- Follow unresolved-link policy for `GET AN INVITE`.

### 7.11 `PricingPlans.astro` and `PricingCard.astro`

Responsibilities:

- Render monthly pricing as the confirmed default state.
- Render Basic, Pro, and Business cards from pricing data.
- Preserve Pro featured treatment:
  - desktop: taller dark card with top gradient accent
  - tablet: horizontal dark card with left gradient accent
  - mobile: vertical dark card with top gradient accent
- Preserve desktop/tablet/mobile card layout differences.
- Follow unresolved-link policy for `PICK PLAN`.

Yearly pricing gate:

- Do not implement live yearly price switching until yearly prices and period labels are confirmed.
- If yearly values remain unconfirmed, render the billing control with Monthly active and Yearly disabled or clearly marked as unavailable for review.
- If the client approves prototype-only yearly behavior, document the fake/prototype values directly in `pricing.ts` and do not treat them as production data.

### 7.12 `PricingComparison.astro`

Responsibilities:

- Render the comparison content from structured rows.
- Desktop/tablet: use semantic table markup or markup that preserves the same feature/plan relationships for assistive technology.
- Mobile: render a stacked feature-by-feature comparison matching the inspected mobile layout.
- Communicate both included and not-included states to assistive technology.
- Do not represent missing features as unexplained empty cells for screen readers.

## 8. Styling strategy

### 8.1 CSS architecture

Use plain CSS with custom properties. Do not use Tailwind.

Initial CSS files:

```txt
src/styles/reset.css
src/styles/tokens.css
src/styles/global.css
```

Keep shared design tokens global. Keep component-specific layout and variant styles inside the relevant `.astro` component when the styles are not reused.

Split into additional CSS files only when the file size or repetition justifies it:

```txt
src/styles/typography.css
src/styles/utilities.css
```

### 8.2 Design tokens

Define CSS custom properties for:

- neutral colors: black, white, light gray, divider gray
- opacity patterns: 60%, 50%, 25%
- brand gradient: `#ffc593 → #bc7198 → #5a77ff`
- typography presets from the Figma style guide
- spacing values: 0, 4, 8, 12, 16, 20, 24, 30, 32, 40, 48, 56, 64, 80, 112
- layout widths: 310, 318, 350, 387, 610, 689, 731, 1110, 1440
- header/footer heights
- breakpoints

### 8.3 Typography approach

Use DM Sans as the primary font.

Create reusable text preset classes or component-level CSS variables for:

- `text-preset-1`: 40px / 48px / 4.1667px letter spacing / bold
- `text-preset-2`: 32px / 1.25 / 3.5px letter spacing / bold
- `text-preset-3`: 24px / 1.05 / bold
- `text-preset-4`: 18px / 1.4 / bold
- `text-preset-5`: 15px / 1.65 / regular
- `text-preset-5-bold`: 15px / 1.35 / 2.5px letter spacing / bold
- `text-preset-6`: 13px / 1.3 / regular
- `text-preset-7`: 12px / 1.35 / 2px letter spacing / bold

Accessibility rule:

- Keep readable text in the DOM.
- Use CSS `text-transform` and `letter-spacing` for the visual style.
- Do not insert spaces between letters in actual text content.

### 8.4 Layout approach

Use CSS Grid and Flexbox:

- Grid for story grids, feature grids, pricing layout, and comparison table layout.
- Flexbox for header, footer, CTA alignment, card internals, and button/icon alignment.
- Avoid absolute positioning for layout.
- Use absolute positioning only for overlays, image layers, and accent bars when it is the simplest faithful solution.
- Use `min()`, `max()`, and `clamp()` only where they solve real overflow/interpolation issues.
- Avoid overusing `clamp()` for Figma-critical values that should match exact frame sizes at 375, 768, and 1440.

### 8.5 CSS maintainability rules

- Prefer low-specificity class selectors.
- Avoid deep descendant selectors that couple components together.
- Keep variant names explicit, for example `split-section--dark`, `story-grid--home`, `feature-grid--preview`.
- Do not put page-specific exceptions into global CSS unless the pattern is truly shared.
- Keep image object-position values in data or clearly named CSS custom properties, not scattered as magic numbers.

## 9. Responsive implementation strategy

### 9.1 Breakpoint plan

Use mobile-first CSS.

Proposed starting breakpoints:

```txt
base:   mobile layout, optimized for 375px
48rem:  tablet layout, matching 768px Figma frames
75rem:  desktop layout, matching 1440px Figma frames and the 1110px grid
```

**Assumption:** Desktop layout should begin around 1200px because the 1110px content grid needs meaningful side gutters.

**Open question:** The exact tablet-to-desktop switch is not defined in Figma and must be visually reviewed during implementation.

### 9.2 Exact target testing

Every major section must be checked at:

- 375px
- 768px
- 1440px

Also check:

- 320px or 360px for narrow mobile overflow
- 1024px for intermediate tablet behavior
- 1280px for transition into desktop rules
- wider than 1440px for full-bleed sections and constrained containers

### 9.3 Interpolation rules

- At the exact Figma target widths, fidelity wins over generic fluid elegance.
- Between target widths, layouts may scale fluidly if they do not contradict the inspected frames.
- Full-bleed image/card strips should span the viewport.
- Text content should remain constrained to readable widths.
- Desktop split sections should not force `610px + 830px` columns on viewports that cannot support them.
- Tablet split sections should preserve the Figma rhythm: roughly 495px text area and 273px image area at 768px.
- Sub-375px mobile should avoid horizontal scroll even if exact Figma fidelity is impossible.

### 9.4 Page-specific responsive notes

Home:

- Mobile split sections stack image first, text second.
- Tablet split sections remain side-by-side.
- Desktop split sections use the 610 / 830 visual rhythm at 1440px.
- Home story cards: 1 column mobile, 2 columns tablet, 4 columns desktop.
- Home feature preview: 1 centered column on mobile/tablet, 3 columns desktop.

Stories:

- Featured story: stacked mobile; image-overlay desktop/tablet.
- Story grid: 1 column mobile, 2 columns tablet, 4 columns desktop.
- Preserve no gutters between story cards.

Features:

- Hero follows standard split-section behavior.
- Feature cards: 1 column mobile, 2 columns tablet, 3 columns desktop.
- Beta invite appears after feature list.

Pricing:

- Hero follows standard split-section behavior.
- Pricing cards: vertical cards mobile, horizontal stacked cards tablet, 3-column cards desktop.
- Pricing comparison: stacked mobile, table/table-like desktop and tablet.
- Monthly state is the default and confirmed state.
- Yearly switching is blocked until content is confirmed.

## 10. Data / props implementation plan

### 10.1 Data files

Create structured TypeScript data files:

```txt
src/data/types.ts
src/data/navigation.ts
src/data/site.ts
src/data/stories.ts
src/data/features.ts
src/data/pricing.ts
```

### 10.2 Content types

Define shared TypeScript interfaces only as needed by the first implementation pass:

- `LinkItem`
- `Cta`
- `ImageAsset`
- `SplitSectionContent`
- `Story`
- `Feature`
- `PricingPlan`
- `PricingComparisonRow`
- `SocialLink`
- `PageMeta`

### 10.3 Suggested field guidance

`LinkItem`:

- required: `label`
- optional: `href`, `isExternal`, `isUnresolved`

`Cta`:

- required: `label`, `variant`
- optional: `href`, `isUnresolved`, `ariaLabel`

`ImageAsset`:

- required: `src`, `alt`, `role`
- optional: `width`, `height`, `desktopPosition`, `tabletPosition`, `mobilePosition`

`Story`:

- required: `id`, `title`, `author`, `image`, `alt`
- optional: `date`, `href`, `isFeatured`, `description`

`PricingPlan`:

- required: `id`, `name`, `description`, `monthlyPrice`, `periodLabel`, `isFeatured`
- optional: `yearlyPrice`, `yearlyPeriodLabel`, `href`, `isUnresolved`

`PricingComparisonRow`:

- required: `label`, `included`
- `included` should map each plan id to `true` or `false`, not rely on empty values.

### 10.4 Data-driven rendering

Use data-driven rendering for:

- header nav
- footer nav
- social links
- Home story previews
- Stories page story list
- Home feature previews
- Features page feature list
- pricing plans
- pricing comparison rows

Avoid duplicating repeated content directly inside page templates.

### 10.5 Unresolved destination policy

The design has unresolved destinations for:

- `GET AN INVITE`
- `PICK PLAN`
- story card CTAs
- social links

Rules:

1. Do not use `href="#"` as a fake final destination.
2. Use valid internal links only where the destination is real, such as `/stories/` for `VIEW THE STORIES`.
3. For unresolved review CTAs, either:
   - render a visually identical non-interactive element with documentation, or
   - render a placeholder destination only if explicitly accepted for the review phase.
4. Centralize unresolved destination flags in data files.
5. Production must not ship unresolved placeholders as if they were final links.

## 11. Accessibility implementation plan

### 11.1 Landmarks and headings

- Add a skip link before the header.
- Use `<header>`, `<main>`, and `<footer>` landmarks.
- Use one `<h1>` per page.
- Preserve heading hierarchy in section headings.
- Label primary and footer navigation separately.

### 11.2 Navigation

- Logo links to the home page.
- Current page nav link uses `aria-current="page"`.
- Header, mobile menu, and footer nav links use readable text.
- Visual uppercase/letter spacing must be CSS only.

### 11.3 Mobile menu

Implement with small vanilla JavaScript:

- Trigger is a `<button>`, not a link.
- Use `aria-expanded` and `aria-controls`.
- Toggle open/closed state with pointer, Enter, and Space.
- Escape closes the menu.
- Focus returns to the trigger on close.
- Focus should remain within the menu/header while the overlay is open unless non-modal behavior is approved.
- Background content should be inert or otherwise non-operable while open.
- Body scroll should be locked while the overlay is open, then restored without unexpected page jump.
- Overlay-click close is optional and must not replace the explicit close button.
- Menu closes when a menu link activates.
- Resize cleanup removes overlay/menu state when switching to tablet/desktop.

No-JavaScript fallback:

- Closed mobile header remains usable enough to display logo and page content.
- Desktop/tablet nav remains available without JavaScript.
- Mobile menu behavior may be unavailable without JavaScript, but content must not be blocked.

### 11.4 Pricing toggle

- Monthly is the confirmed default.
- If yearly values are unconfirmed, render Yearly as disabled/unavailable rather than creating fake price changes.
- If the toggle is active, expose state with `aria-pressed` or `role="switch"` + `aria-checked`.
- If Yearly is disabled, expose disabled state with native `disabled` or `aria-disabled` depending on the final control pattern.
- Do not rely only on opacity to communicate active or disabled state.
- Do not persist billing-period state unless explicitly requested.

### 11.5 Cards and visual CTAs

- If a story card navigates, use a single anchor for the card and avoid nested interactive elements.
- Story card accessible names must include the story title.
- If card destinations are unresolved, do not render fake clickable cards.
- Pricing plan CTAs follow the unresolved-destination policy.

### 11.6 Images and icons

- Content-bearing story images need descriptive alt text.
- Decorative hero/background images should use empty alt or CSS background treatment.
- Social links need platform-specific accessible labels.
- Checkmarks in pricing comparison need accessible `Included` text.
- Missing features need accessible `Not included` text.

### 11.7 Focus, contrast, and motion

- Add visible focus styles that work on black, white, and photographic backgrounds.
- Verify white text over image overlays meets WCAG AA where possible.
- Verify opacity-based body text contrast after final image crops and overlays are implemented.
- Respect `prefers-reduced-motion` for any menu/card transitions.

## 12. Testing checklist

### 12.1 Build and project checks

Use the package manager confirmed in Step 0.

Required checks:

- install completes cleanly
- dev server starts
- production build completes
- preview server serves the built site
- Astro/TypeScript checks pass if configured
- no unused data imports or broken asset paths remain

### 12.2 Route checks

Verify all routes load:

- `/`
- `/stories/`
- `/features/`
- `/pricing/`

Verify navigation links between all real pages.

### 12.3 Responsive visual checks

For each page, review at:

- 375px
- 768px
- 1440px

Also check:

- 320px or 360px
- 1024px
- 1280px
- wider than 1440px

Confirm:

- no horizontal scrolling
- no text overlap
- no collapsed images
- expected grid counts by breakpoint
- correct hero and card ordering
- correct CTA banner visibility by page
- correct Home feature preview tablet behavior
- correct mobile pricing comparison structure
- image crops are close enough to Figma for review

### 12.4 Accessibility checks

Keyboard-only:

- skip link works
- header links work
- mobile menu opens/closes
- Escape closes mobile menu
- focus returns correctly
- focus is visible everywhere
- pricing billing control is reachable and clearly announced as monthly/default or unavailable yearly

Screen reader / semantic checks:

- each page has one primary heading
- nav landmarks are labeled
- `aria-current` appears on the active page link
- story card links or previews are named correctly
- pricing comparison communicates included/not-included states
- social links have platform labels
- disabled/unresolved CTAs are not announced as fake working links

Automated checks:

- run Lighthouse accessibility checks
- run browser accessibility inspector or axe if available
- verify color contrast for opacity text over black/image backgrounds

### 12.5 Content checks

- Home has correct section order.
- Stories page has 16 stories in order.
- Home has 4 story previews in order.
- Features page has all 6 features.
- Pricing page has all 3 plans and 8 comparison rows.
- Known Figma copy issues remain documented if preserved.
- Placeholder destinations are documented and not accidentally treated as final.
- Home story cards hide dates; Stories page cards show dates.
- Beta invite CTA appears only on Features and Pricing.

### 12.6 No-JavaScript and failure checks

- Site content is readable if JavaScript fails.
- Mobile menu failure does not hide the page content.
- Pricing still shows monthly prices if pricing JavaScript is absent or disabled.
- Images have stable dimensions or fallback behavior to avoid severe layout collapse.
- Font fallback does not make the layout unusable.

## 13. Key implementation risks and mitigations

### Risk 1 — Repository scaffold uncertainty

The repo README exists, but expected Astro scaffold files were not found during inspection.

Mitigation:

- Start with local repo verification.
- Scaffold Astro only if files are absent.
- Do not assume existing scripts or conventions until local inspection is complete.

### Risk 2 — Figma asset expiry

Figma-generated asset URLs expire and must not become site dependencies.

Mitigation:

- Export assets into `public/assets` before page implementation.
- Give assets stable semantic names.
- Track image usage, roles, and crops in data or `ASSETS.md`.

### Risk 3 — Image crop fidelity

Many Figma images are manually cropped and offset.

Mitigation:

- Record focal points by breakpoint.
- Use breakpoint-specific image files or object-position values when needed.
- Tune image crops page-by-page before moving to final polish.

### Risk 4 — Mobile menu accessibility complexity

The Figma overlay implies modal-like behavior, but static Figma does not define focus management.

Mitigation:

- Implement accessible menu behavior early.
- Keep the JavaScript small and isolated.
- Test keyboard, Escape, focus return, inert/background behavior, scroll lock, and resize cleanup before page polish.

### Risk 5 — Undefined destinations

Several visible CTAs lack final URLs/actions.

Mitigation:

- Centralize all destinations in data files.
- Mark unresolved destinations explicitly.
- Avoid fake production links.
- Use review placeholders only when documented and accepted.

### Risk 6 — Pricing yearly state is incomplete

Monthly prices are confirmed; yearly prices are not.

Mitigation:

- Build monthly state first.
- Structure the data model to support yearly values later.
- Keep Yearly disabled/unavailable or prototype-only until values are approved.

### Risk 7 — Component active-state ambiguity

Figma contains `Active` variants, but their meaning is unclear.

Mitigation:

- Treat active variants as hover/focus visual references only after visual inspection.
- Do not infer current-page styles from `Active` unless confirmed.
- Always provide accessible focus styles.

### Risk 8 — Copy typo fidelity vs polish

Figma includes likely copy issues.

Mitigation:

- Preserve source copy for the first fidelity pass unless client approves corrections.
- Keep copy corrections as a separate review decision.

### Risk 9 — Responsive interpolation

Only 375px, 768px, and 1440px frames are explicitly defined.

Mitigation:

- Prioritize exact target fidelity.
- Use fluid widths between targets where safe.
- Test intermediate widths and document compromises.

### Risk 10 — Fixed-pixel layout drift

The design includes many exact pixel sizes, but using too many fixed widths can break intermediate and narrow viewports.

Mitigation:

- Use exact values at target breakpoints.
- Use flexible containers outside target breakpoints.
- Test 320px, 1024px, 1280px, and wide desktop.

### Risk 11 — Over-abstraction

Creating too many generic primitives before implementation can make the site harder to finish and maintain.

Mitigation:

- Start with lean components.
- Extract only after duplication appears.
- Keep section components close to the actual design patterns.

### Risk 12 — CSS specificity and variant sprawl

Many section variants can produce fragile CSS if selectors become too broad or too nested.

Mitigation:

- Use explicit variant classes.
- Keep component styles close to components.
- Keep tokens global but layout rules local.

### Risk 13 — Mobile comparison duplication

Desktop/tablet comparison and mobile stacked comparison may duplicate content or get out of sync.

Mitigation:

- Render both views from the same `pricingComparisonRows` data.
- Do not hardcode mobile availability separately.

### Risk 14 — No-JavaScript behavior

The site is mostly static, but mobile navigation and any future pricing toggle behavior need JavaScript. If JavaScript fails, content must remain usable.

Mitigation:

- Keep core content rendered in HTML.
- Make monthly pricing visible by default without JavaScript.
- Ensure JavaScript failure does not leave overlays visible or content blocked.
- Do not hide critical navigation on desktop/tablet behind JavaScript-only behavior.

### Risk 15 — WordPress migration drift

A too-Astro-specific implementation could be harder to convert later.

Mitigation:

- Keep components aligned with future WordPress template parts, patterns, and blocks.
- Avoid coupling content directly to layout internals.
- Keep repeated content structured in data files.

## 14. Implementation sequence

### Step 0 — Local repo verification

Tasks:

- Inspect the actual local repository tree.
- Confirm whether Astro is already scaffolded.
- Confirm whether documentation belongs at root or under `/docs`.
- Confirm package manager and Node version.
- Confirm whether a lockfile already exists.

Exit criteria:

- Current project structure is known.
- Implementation can proceed without overwriting existing work.
- Package-manager commands are known.

### Step 1 — Documentation placement and minimal Astro scaffold

Tasks:

- Add or place `DESIGN.md`, `SPEC.md`, and `PLAN.md` in the agreed location.
- Create minimal Astro project files only if absent.
- Create four placeholder routes.
- Add basic build/dev scripts.

Exit criteria:

- Dev server runs.
- Four empty routes exist.
- Documentation lives in the agreed location.

### Step 2 — Global CSS foundation

Tasks:

- Add reset CSS.
- Add design tokens.
- Add global body/page defaults.
- Add base typography preset classes or variables.
- Add skip-link styling.

Exit criteria:

- Global typography, colors, spacing, and base layout tokens are available.
- No page-level visual build has started yet.

### Step 3 — Asset export and asset notes

Tasks:

- Export logo, arrows, menu icons, feature icons, social icons, checkmark, and page images.
- Store assets in `public/assets` with semantic names.
- Record image roles, alt-text needs, and crop/focal notes.
- Confirm no temporary Figma URLs are used in source files.

Exit criteria:

- Required visual assets exist locally.
- Asset usage and crop notes are documented enough to start components.

### Step 4 — Data layer

Tasks:

- Add shared TypeScript content types.
- Add navigation and global site data.
- Add stories, features, and pricing data.
- Add unresolved-destination flags.
- Add pricing comparison rows with explicit `true`/`false` included states.

Exit criteria:

- Repeated content can render from data files.
- Known unresolved links and missing yearly prices are centralized.

### Step 5 — Site shell, header, footer, and mobile menu

Tasks:

- Build `BaseLayout`.
- Build header desktop/tablet layout.
- Build mobile header and menu panel.
- Add small mobile menu script.
- Build footer responsive layout.

Exit criteria:

- Header/footer appear on all pages.
- Navigation routes work.
- Mobile menu is keyboard-accessible and closes predictably.

### Step 6 — Shared visual primitives and sections

Tasks:

- Build `ButtonLink`.
- Build `SplitSection`.
- Build `BetaInvite`.
- Add image crop hooks through props/data.

Exit criteria:

- Core hero/content/CTA patterns can be assembled without duplicating layout logic.

### Step 7 — Home page

Tasks:

- Implement Home hero.
- Implement two secondary split sections.
- Implement four story previews.
- Implement three feature previews.
- Validate at 375, 768, and 1440 before moving on.

Exit criteria:

- Home page matches required section order, responsive behavior, and major visual structure.
- Home feature preview tablet layout is confirmed as single-column.

### Step 8 — Stories page

Tasks:

- Implement featured story hero.
- Implement 16-card story grid/list.
- Validate no-gutter layout and card sizes.
- Validate date visibility on Stories cards.

Exit criteria:

- Stories page content and responsive grids match the spec.

### Step 9 — Features page

Tasks:

- Implement Features hero.
- Implement six-feature grid/list.
- Add beta invite section.
- Validate 3-column, 2-column, and 1-column behavior.

Exit criteria:

- Features page matches required section order and responsive behavior.

### Step 10 — Pricing page

Tasks:

- Implement Pricing hero.
- Implement monthly pricing cards.
- Render billing control with Monthly active.
- If yearly values are still unconfirmed, make Yearly disabled/unavailable or explicitly prototype-only.
- Implement pricing comparison desktop/tablet table or table-like semantic structure.
- Implement mobile stacked comparison from the same data.
- Add beta invite section.

Exit criteria:

- Pricing page is complete in monthly state.
- Yearly behavior does not invent prices.
- Pricing comparison is accessible at desktop/tablet/mobile.

### Step 11 — Interaction and state polish

Tasks:

- Apply hover/focus states.
- Finalize mobile menu behavior.
- Finalize unresolved CTA behavior.
- Confirm reduced-motion handling.
- Tune focus states over photographic backgrounds.

Exit criteria:

- Interactive elements are clear, keyboard-operable, and accessible.
- Unresolved visual CTAs do not behave like fake final links.

### Step 12 — Cross-page responsive QA

Tasks:

- Compare all pages against Figma target widths.
- Tune image object positions.
- Fix overflow and alignment issues.
- Check intermediate widths.
- Check edge cases from `SPEC.md`.

Exit criteria:

- No supported viewport has unintended horizontal scroll.
- Main responsive transformations match `DESIGN.md` and `SPEC.md`.

### Step 13 — Accessibility QA

Tasks:

- Perform keyboard pass.
- Perform semantic/landmark pass.
- Verify menu state announcements and focus management.
- Verify billing control state/disabled behavior.
- Verify image alt/decorative handling.
- Verify pricing comparison accessible labels.

Exit criteria:

- The site meets the accessibility requirements defined in `SPEC.md`.

### Step 14 — Final review preparation

Tasks:

- Update README only if setup commands, live URL, or project status changed.
- Document unresolved open questions for the client.
- Capture screenshots for 375, 768, and 1440 review.
- Prepare for client design review.

Exit criteria:

- Astro review site is ready to share.
- Remaining decisions are clearly documented.

## 15. Assumptions

**Assumption 1:** The first implementation phase is the Astro review site, not the WordPress final site.

**Assumption 2:** Plain CSS with custom properties is preferred over Tailwind or a component library.

**Assumption 3:** The repository needs Astro scaffolding unless the local checkout reveals existing files not visible during remote inspection.

**Assumption 4:** `DESIGN.md`, `SPEC.md`, and `PLAN.md` should live at the repository root unless the user chooses a `/docs` folder.

**Assumption 5:** Mobile-first CSS is acceptable as long as the 768px and 1440px target frames remain faithful.

**Assumption 6:** Desktop layout starts around 1200px to protect the 1110px content grid.

**Assumption 7:** Figma source copy should be preserved for the first fidelity pass unless the client approves copy corrections.

**Assumption 8:** Unresolved destinations may use documented review placeholders only during the Astro review phase.

**Assumption 9:** The yearly pricing toggle should not become a live production interaction until yearly values are confirmed.

**Assumption 10:** The mobile menu should be treated as modal-like because the inspected Figma state includes a page overlay.

**Assumption 11:** Generic abstractions should be added only when repeated implementation proves they are needed.

## 16. Open questions

1. Should `DESIGN.md`, `SPEC.md`, and `PLAN.md` be committed at the repository root or inside `/docs`?
2. What exact URL/action should `GET AN INVITE` use?
3. Should `PICK PLAN` navigate anywhere in the Astro review site?
4. Should story cards navigate to story detail pages, anchors, or remain visual previews?
5. Are placeholder links acceptable during review, or should unresolved CTAs render as non-interactive visual elements?
6. What are the exact yearly prices and period labels?
7. Should the yearly toggle be disabled until pricing is confirmed?
8. Should Figma copy typos be preserved or corrected before client review?
9. What are the real social media URLs?
10. At what exact viewport width should mobile navigation switch to tablet/desktop navigation?
11. Are Figma `Active` variants hover states, pressed states, current-page states, or a mixture?
12. Should image alt text be supplied by the client or drafted during implementation?
13. Should the mobile pricing comparison include a `COMPARE` heading or follow the inspected mobile frame that begins with `THE FEATURES`?
14. Should the header remain static, as shown in Figma, or become sticky?
15. Should the selected pricing period persist across reloads or page navigation if yearly pricing is later confirmed?

## 17. Readiness for Astro planning

The plan is ready for the next Astro-specific component planning pass after two lightweight confirmations:

1. Confirm the local repository structure and package manager.
2. Confirm where documentation should live: repository root or `/docs`.

The following questions do not block starting the Astro scaffold and monthly-state implementation, but they do block production-ready behavior:

- final CTA destinations
- yearly pricing values
- real social links
- final story-card navigation behavior
- copy typo corrections

