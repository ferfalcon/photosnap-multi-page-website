# PhotoSnap Website — PLAN.md

## 1. Purpose

This document defines a practical implementation plan for the PhotoSnap responsive marketing website.

It is based on:

- the inspected Figma wrapper node `62857:72`
- `DESIGN.md`
- `SPEC.md`
- the current GitHub repository structure
- the provided starter content and assets in the repository

The plan covers the **Astro review-site phase only**. The approved Astro version will later become the visual and structural source of truth for the WordPress block-theme phase.

This is not component code. It is the implementation strategy to follow before writing component files.

## 2. Current repo understanding

The repository is no longer just a planning/documentation shell. It already contains an Astro app.

Observed repo facts:

- The Astro app lives in `frontend/`.
- Astro source files live under `frontend/src/`.
- Astro route files live under `frontend/src/pages/`.
- Static files served directly by Astro belong in `frontend/public/`.
- Provided starter HTML, images, and SVG assets live in `docs/starter-content/`.
- Root-level `README.md`, `DESIGN.md`, `SPEC.md`, and `PLAN.md` document the project.
- There is no root package script. Package commands should be run from `frontend/`.
- `frontend/package.json` exists and defines the Astro app.
- `frontend/pnpm-lock.yaml` exists, so the Astro app should use `pnpm`.
- The Home route now contains its complete responsive page content. Stories, Features, and Pricing use the shared PhotoSnap layout with their page-specific content intentionally deferred.

Current Astro setup:

- Astro version: `^7.0.7`
- Node requirement: `>=22.12.0`
- Scripts: `dev`, `build`, `preview`, `astro`
- TypeScript config extends Astro strict mode.
- `frontend/astro.config.mjs` is still minimal.
- `frontend/AGENTS.md` instructs agents to use `astro dev --background` when starting the dev server.

**Implementation consequence:** Do not scaffold a new Astro project. Build inside the existing `frontend/` app and preserve the repo’s current conventions.

## 3. Planning review findings

This section records the review of `DESIGN.md`, `SPEC.md`, `PLAN.md`, and the repository.

### 3.1 Issues found

- The previous plan incorrectly assumed that `package.json` was not found and that the Astro app might not be scaffolded yet.
- The previous proposed structure used root-level `src/` paths, but the actual app structure is `frontend/src/`.
- Asset destinations needed to be corrected from generic `public/` to `frontend/public/`.
- The plan underused `docs/starter-content/`, which already contains reference HTML copy and provided assets.
- The yearly pricing uncertainty is partially resolved by `docs/starter-content/pricing.html`, which includes yearly prices for Basic, Pro, and Business.
- The original Astro starter page has been replaced by the shared PhotoSnap layout and route shells.
- The plan needed to preserve root docs while making it clear that implementation happens under `frontend/`.

### 3.2 Changes made

- Updated the repo understanding section to match the real repository layout.
- Updated all proposed source paths to use `frontend/src/`.
- Updated asset paths to use `frontend/public/`.
- Added `docs/starter-content/` as a required reference source.
- Replaced the “Astro may not be scaffolded” assumption with the confirmed existing Astro app.
- Updated the pricing toggle plan to recognize that starter content provides yearly values, while still requiring visual and behavior confirmation before enabling live switching.
- Kept the complexity-control policy from the previous review to avoid over-engineering.

## 4. Implementation principles

- Work in small, reviewable steps.
- Treat Figma, `DESIGN.md`, and `SPEC.md` as source of truth.
- Use `docs/starter-content/` as the source for provided starter copy and provided assets, while checking against Figma when there are mismatches.
- Do not copy Figma-generated React/Tailwind code into the project.
- Do not add Tailwind unless explicitly requested later.
- Use Astro, semantic HTML, TypeScript data files, and maintainable plain CSS.
- Prefer static HTML and CSS. Add JavaScript only for required interactions.
- Match the inspected target frames at **375px**, **768px**, and **1440px** before optimizing intermediate widths.
- Keep page sections and component boundaries compatible with a future WordPress block theme.
- Do not invent product behavior that is missing from the design, spec, or starter content.
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
- A complex design-token utility system beyond the tokens required by the Figma style guide.

## 6. Files to create or modify

### 6.1 Root files

Root-level documentation should remain at the repo root unless the user later chooses a `/docs` documentation structure.

```txt
README.md
DESIGN.md
SPEC.md
PLAN.md
AGENTS.md
```

Notes:

- `README.md` already exists and should not be rewritten unless setup commands, live links, or project status change.
- `DESIGN.md`, `SPEC.md`, and `PLAN.md` are project documentation files.
- `AGENTS.md` contains repository-level conventions and should be followed.

### 6.2 Existing Astro app files

Modify existing app files only as needed:

```txt
frontend/package.json
frontend/astro.config.mjs
frontend/tsconfig.json
frontend/src/pages/index.astro
frontend/AGENTS.md
```

Notes:

- Do not recreate the Astro project.
- Do not run package commands from the repo root.
- Use `cd frontend && pnpm ...` for app commands.
- Keep `frontend/AGENTS.md` instructions in effect for work inside `frontend/`.

### 6.3 Proposed source structure

Start with this lean structure inside the existing Astro app:

```txt
frontend/src/
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
    base.css
    utilities.css
    components.css
```

### 6.4 Asset structure

Static assets should be copied or organized under `frontend/public/`.

Proposed structure:

```txt
frontend/public/
  assets/
    images/
      home/
      stories/
      features/
      pricing/
      shared/
    icons/
    logos/
    favicons/
```

Reference source:

```txt
docs/starter-content/
```

Asset rules:

- Use the provided starter assets when available.
- Rename assets to clear kebab-case names before use.
- Keep public asset paths stable once pages reference them.
- Record responsive mappings and crop/focal-point notes in `docs/asset-map.md`.
- Preserve the provided progressive JPEG, SVG, and PNG files for the initial review site; defer modern-format derivatives until a measured performance pass.
- Do not rely on temporary Figma asset URLs in production code.

## 7. Proposed structure and responsibilities

### 7.1 Layout

`BaseLayout.astro` should provide:

- document shell
- page title and description props
- global CSS imports
- skip link
- header
- `<main id="main-content">`
- footer

### 7.2 Pages

`index.astro` renders:

- Home hero split section
- two alternating split sections
- four story preview cards
- three feature preview cards

`stories.astro` renders:

- featured story hero
- full stories grid

`features.astro` renders:

- page hero split section
- six-feature grid
- beta invite CTA

`pricing.astro` renders:

- page hero split section
- billing control
- three pricing cards
- pricing comparison
- beta invite CTA

### 7.3 Data files

Use TypeScript data files to keep page templates clean and CMS-ready.

`navigation.ts`:

- header nav items
- footer nav items

`site.ts`:

- global CTA label and destination
- social links
- shared footer content
- beta invite content

`stories.ts`:

- featured story
- story card list
- home story preview subset

`features.ts`:

- full feature list
- home feature preview subset

`pricing.ts`:

- pricing plans
- monthly and yearly prices
- comparison rows

`types.ts`:

- shared interfaces for navigation items, stories, features, pricing plans, comparison rows, and responsive image metadata.

## 8. Styling strategy

Use plain CSS with custom properties.

Recommended CSS layers:

- `reset.css` — small modern reset.
- `tokens.css` — colors, typography, spacing, gradients, layout values, breakpoints.
- `base.css` — document defaults, font loading, body styles, links, focus defaults.
- `utilities.css` — minimal reusable layout helpers only when needed.
- `components.css` — component-level styles if styles are not colocated in Astro components.

**Assumption:** Component-scoped Astro styles may be used where they keep a component easier to reason about, but global design tokens should live in global CSS.

Typography should use the Figma-defined DM Sans system:

- large uppercase headings
- compact uppercase navigation and CTA labels
- body copy with reduced opacity where specified
- strong letter spacing on headings and controls

Color tokens should include:

- black
- white
- light gray backgrounds
- dark text opacity variants
- white text opacity variants
- brand gradient accent

CSS should avoid:

- excessive utility classes
- deeply nested selectors
- one-off magic numbers without comments
- component styles that depend on page order rather than class names

## 9. Responsive implementation strategy

### 9.1 Target widths

Primary QA widths:

- Mobile: `375px`
- Tablet: `768px`
- Desktop: `1440px`

Intermediate widths should fluidly interpolate without causing overflow, cropped text, broken grids, or awkward image distortion.

### 9.2 Breakpoint approach

Use mobile-first CSS.

Recommended breakpoint intent:

- Mobile: stacked layouts, mobile header, one-column story cards.
- Tablet: horizontal split sections where Figma keeps them, two-column story grid, tablet-specific pricing card layout.
- Desktop: full 1440px layout with 1110px central content grid where applicable.

Exact breakpoints may be adjusted during implementation to preserve the inspected Figma behavior.

**Assumption:** The mobile header applies below the tablet layout. The exact switch point should be confirmed visually during implementation.

### 9.3 Page-specific responsive rules

Home:

- Desktop: split hero, alternating image/text sections, four-card story row, three-card feature row.
- Tablet: split sections remain horizontal with narrower image columns; story previews become a two-by-two grid; home features stack in a centered single column.
- Mobile: split sections stack image above text; story cards become a one-column list; features stack vertically.

Stories:

- Desktop: featured story full-width hero, four-column story grid.
- Tablet: featured story remains image-backed; story grid becomes two columns.
- Mobile: featured story separates image and black content panel; story grid becomes one column with shorter card height.

Features:

- Desktop: hero split, six features in a three-column/two-row grid.
- Tablet: hero split, six features in two columns.
- Mobile: hero stacks image above text, features stack in one column.

Pricing:

- Desktop: hero split, centered billing toggle, three-card pricing row, desktop comparison table.
- Tablet: hero split, pricing cards become full-width horizontal cards stacked vertically, comparison remains table-like.
- Mobile: hero stacks, pricing cards stack, comparison becomes mobile-friendly grouped rows.

## 10. Data / props implementation

### 10.1 Required data principles

- Store repeated content in data files, not duplicated page markup.
- Keep route/page-specific ordering in page files or simple arrays.
- Include enough image metadata to support alt text and crop tuning.
- Keep content close to starter HTML unless `DESIGN.md` or `SPEC.md` intentionally overrides it.

### 10.2 Pricing data

Pricing plans should support both monthly and yearly values because starter content provides both:

- Basic: `$19.00` per month, `$190.00` per year
- Pro: `$39.00` per month, `$390.00` per year
- Business: `$99.00` per month, `$990.00` per year

Implementation should begin with the monthly visual state because Figma inspection confirmed the monthly state most clearly.

The yearly toggle can be enabled after confirming:

- visual state for yearly toggle
- whether prices update client-side
- no-JavaScript fallback behavior
- whether yearly values from starter content are approved for this review site

### 10.3 Link data

- Internal page links should use real routes.
- `GET AN INVITE` uses `/pricing` as the documented interim review-site destination; the final production invite flow remains unresolved.
- Social marks remain decorative and non-interactive until real PhotoSnap profile URLs are supplied.
- `PICK PLAN` and story-detail links should not silently use fake production destinations.
- If a visible placeholder is necessary for review, it must be documented and should not trap keyboard users on `#`.

## 11. Accessibility implementation

Required accessibility work:

- Add a skip link to main content.
- Use semantic landmarks: header, nav, main, section, footer.
- Use descriptive page titles and meta descriptions.
- Mark the current page in nav with `aria-current="page"`.
- Use real links for navigation and CTAs that navigate.
- Use buttons for controls that change UI state, such as mobile menu toggle and billing toggle.
- Provide visible focus states on light backgrounds, dark backgrounds, and photography-backed cards.
- Ensure mobile menu state uses `aria-expanded`, `aria-controls`, and an accessible label.
- Return focus to the menu button after closing the mobile menu.
- Support Escape-to-close for the mobile menu.
- Prevent background interaction when the mobile menu is open if it visually behaves like an overlay.
- Respect reduced-motion preferences for hover/transition effects.
- Give social links accessible names when real profile destinations make them interactive.
- Ensure decorative icons are hidden from assistive tech.
- Give meaningful photos useful alt text where they communicate content; use empty alt only for decorative images.
- Ensure the pricing comparison remains understandable to screen readers on desktop and mobile.

**Assumption:** The mobile menu is a native popover enhanced with modal-like focus containment, background inertness, and scroll locking because the inspected open state includes an overlay.

## 12. Interaction behavior

### 12.1 Header and mobile menu

- Desktop/tablet nav links navigate to real routes.
- Mobile menu opens from the hamburger button and closes from the close button, Escape key, and route selection.
- Menu state should not leave focus behind hidden elements.
- Resizing from mobile to tablet/desktop while the menu is open should reset or safely close the menu.

### 12.2 Buttons and links

- Header CTA and beta CTA use the shared CTA label.
- Header and footer invite CTAs use `/pricing` as the documented interim review-site destination.
- Story previews remain static and omit read actions until title-specific destinations are approved.
- Pricing `PICK PLAN` controls are visually required, but final behavior is an open question.

### 12.3 Pricing toggle

Initial safe path:

- Render monthly state first.
- Include yearly data in `pricing.ts`.
- Enable toggle only when behavior and fallback are agreed.

If enabled:

- Use a button or switch semantics.
- Update visible price and period labels.
- Expose current billing state to assistive tech.
- Provide a no-JavaScript fallback that shows at least the monthly pricing clearly.

## 13. Testing checklist

Run from `frontend/`.

Required command validation:

```sh
pnpm install
pnpm build
pnpm preview
```

If using the dev server, follow `frontend/AGENTS.md` and use background mode:

```sh
astro dev --background
```

Manual visual checks:

- Home at 375px, 768px, 1440px.
- Stories at 375px, 768px, 1440px.
- Features at 375px, 768px, 1440px.
- Pricing at 375px, 768px, 1440px.
- Intermediate widths between 375px and 768px.
- Intermediate widths between 768px and 1440px.
- Header and footer on every page.
- Image crops for all hero, story, and CTA images.
- Gradient accent placement.
- Story card overlay readability.
- Pricing card alignment and Pro highlighted state.
- Pricing comparison desktop and mobile semantics.

Manual accessibility checks:

- Keyboard navigation through header, menu, page links, pricing controls, and footer; static story previews create no focus stops.
- Visible focus states everywhere.
- Mobile menu open/close with keyboard and Escape.
- Screen reader-friendly names for icon-only or visual controls.
- `aria-current` on active navigation item.
- Text contrast, especially white text over images.
- No keyboard trap in mobile menu or pricing controls.
- No fake `#` links that jump unexpectedly.

Content checks:

- Starter content matches the intended copy.
- Known Figma/starter typos are either preserved intentionally or corrected after explicit approval.
- Yearly prices match starter content if yearly behavior is enabled.
- Social-profile and final production invite destinations are documented as unresolved.

## 14. Risks and mitigations

### Risk: repo structure drift

The actual app is in `frontend/`, while earlier planning referenced root `src/` paths.

Mitigation:

- Use `frontend/` paths for all implementation work.
- Keep root docs at root unless intentionally reorganized.

### Risk: over-abstraction

Too many generic components could slow implementation and complicate WordPress migration.

Mitigation:

- Use the complexity-control policy.
- Create components only for repeated patterns, required behavior, or clear WordPress mapping.

### Risk: image crop fidelity

The design relies heavily on precise image cropping.

Mitigation:

- Export/copy assets early.
- Tune `object-position` per breakpoint.
- QA crops at 375px, 768px, and 1440px.

### Risk: unresolved destinations

Some CTAs, plan buttons, story links, and social links do not have confirmed final URLs.

Mitigation:

- Use real routes where known.
- Document unresolved destinations.
- Avoid fake production links.

### Risk: pricing toggle behavior

The starter content provides yearly values, but the inspected Figma state is primarily monthly.

Mitigation:

- Implement monthly first.
- Add yearly data.
- Enable live toggle only after behavior and fallback are confirmed.

### Risk: mobile menu accessibility

The menu has overlay-like behavior and can create focus/scroll issues.

Mitigation:

- Isolate behavior in `MobileMenu.astro` and a small script if needed.
- Test keyboard, Escape, focus return, and resizing.

### Risk: mobile pricing comparison duplication

A semantic table and a mobile-friendly layout can drift if duplicated manually.

Mitigation:

- Drive both views from the same comparison data.
- Prefer one semantic source with responsive CSS where possible.

### Risk: copy fidelity vs polish

Design/starter copy includes typos such as `photograpers`, `notifed`, `everytime`, and `Create a your stories`.

Mitigation:

- Do not silently rewrite copy during implementation.
- Document copy issues and confirm whether to preserve or correct them for client review.

## 15. Implementation sequence

### Step 1 — Verify local tree and docs

**Status:** Completed — 2026-07-13

- Confirm the local repo matches the GitHub structure.
- Confirm docs remain at root.
- Confirm all work happens under `frontend/` for the Astro app.

### Step 2 — Organize assets

**Status:** Completed — 2026-07-13

- Inspect `docs/starter-content/` assets.
- Copy needed assets into `frontend/public/assets/`.
- Rename assets clearly.
- Record focal point/crop notes in `docs/asset-map.md` while mapping assets to sections.

### Step 3 — Add global CSS foundation

**Status:** Completed — 2026-07-13

- Add reset, tokens, base styles, and minimal utilities.
- Add font setup for DM Sans or approved fallback strategy.
- Define typography, color, spacing, gradient, and layout tokens.

### Step 4 — Build the layout shell

**Status:** Completed — 2026-07-13

- Create `BaseLayout.astro`.
- Add header/footer placeholders.
- Add skip link and main landmark.
- Replace the starter `index.astro` shell with the new layout pattern.

### Step 5 — Build navigation components

**Status:** Completed — 2026-07-13

- Implement header and footer from shared navigation data.
- Implement mobile menu behavior.
- Add active/current page state.
- Validate keyboard navigation before moving deeper into page sections.

### Step 6 — Build shared content components

**Status:** Completed — 2026-07-13

- Reuse and extend the `ButtonLink.astro` delivered early in Step 5.
- Add shared responsive image contracts to `types.ts`.
- Add `SplitSection.astro` with art-directed image crops and explicit loading priority.
- Add linked and static `StoryCard.astro` states.
- Add `FeatureCard.astro` with decorative feature-icon handling.
- Add the data-driven `BetaInvite.astro` shared CTA.

### Step 7 — Add remaining data files

**Status:** Completed — 2026-07-13

- Reuse and extend the shared types delivered in Steps 5 and 6.
- Add typed Stories, Features, and Pricing data, including responsive image metadata.
- Derive the Home story and feature previews from the complete source arrays.
- Resolve the duplicated `World Tour 2019` starter entry by following the 16-story Figma/SPEC list.
- Store the starter-provided yearly prices while keeping monthly as the default state.
- Preserve and document known source-copy issues without inventing unresolved story or plan destinations.

### Step 8 — Implement Home

**Status:** Completed — 2026-07-13

- Replace starter Home content with the full Home page structure.
- Use the derived story and feature preview arrays from Step 7.
- Tune and validate the desktop, tablet, mobile, and intermediate-width layouts.
- Prioritize only the art-directed Home hero as the LCP image and lazy-load all below-the-fold imagery.
- Render semantic story and feature preview lists with sequential headings.
- Keep Home story cards static and omit the Figma divider and `READ STORY` action until title-specific destinations are approved; this is an intentional Figma deviation.

### Step 9 — Implement Stories

**Status:** Completed — 2026-07-13

- Add the responsive, art-directed featured story hero with its visible page heading and LCP image priority.
- Add a reusable, semantic story grid and render all 16 dated stories in the defined order.
- Tune and validate the gutterless four-column, two-column, and single-column layouts and supplied crops.
- Keep the featured story and story cards static, omitting the Figma/SPEC read actions and card dividers until title-specific destinations are approved; this is an intentional review-site deviation.

**Next implementation step:** Step 10 — Implement Features.

### Step 10 — Implement Features

- Add page hero.
- Add six-feature grid.
- Add beta invite CTA.
- Validate tablet two-column and mobile one-column behavior.

### Step 11 — Implement Pricing

- Add page hero.
- Add monthly pricing cards.
- Reuse the stored yearly data but gate live switching if behavior is still unresolved.
- Add comparison data and responsive comparison layout.
- Add beta invite CTA.

### Step 12 — Full responsive and accessibility QA

- Test target widths and intermediate widths.
- Test keyboard and focus behavior.
- Test mobile menu behavior.
- Check build output.
- Compare against Figma frames and update notes if any intentional deviations exist.

## 16. Assumptions
- Starter content and assets in `docs/starter-content/` are approved reference material unless they conflict with Figma or client direction.
- The initial review site uses the supplied progressive JPEG, SVG, and PNG assets; modern-format derivatives are deferred until a measured performance pass.
- Monthly pricing is the first visual state to implement.
- Yearly prices from starter content are valid enough to store in data, but live toggle behavior still needs confirmation before being treated as final.
- The header switches between mobile and tablet/desktop navigation at `48rem`.
- The mobile menu uses a native popover enhanced as an accessible overlay state.
- `/pricing` is the approved interim review-site destination for `GET AN INVITE`.
- Social marks remain decorative until real PhotoSnap profile URLs are supplied.
- WordPress implementation is out of scope for this phase.

## 17. Open questions

- Should known copy typos be preserved for design fidelity or corrected before client review?
- What should `PICK PLAN` do in the review site?
- Should the pricing yearly toggle be interactive in the Astro review site, or should yearly data remain non-interactive until approved?

## 18. Ready status

Steps 1 through 9 are complete. The verified public asset namespace and responsive mapping are documented in `docs/asset-map.md`. The Astro app now has its global CSS foundation, reusable document shell, shared navigation data, four routes, responsive navigation components, reusable shared content components, typed Stories, Features, and Pricing content, and complete responsive Home and Stories pages.

The next safe step is Step 10: implement the Features page using the shared hero, feature-card, and beta-invite components.
