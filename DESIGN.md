# PhotoSnap Website — DESIGN.md

## 1. Purpose

PhotoSnap is a responsive marketing website for a photography storytelling product. The design presents the product as polished, editorial, visual-first, and simple to understand. The experience should feel like a high-end photography publication combined with a clean SaaS landing page.

The website has four pages:

- **Home** — introduces the product, communicates the main value proposition, previews story examples, and highlights core features.
- **Stories** — presents a featured story and a large visual story gallery.
- **Features** — explains the product capabilities through icon-led feature cards.
- **Pricing** — presents subscription plans, plan comparison, and a beta invite CTA.

The visual system is intentionally restrained: black, white, gray, strong typography, full-bleed imagery, and a small gradient accent used as a brand signature.

## 2. Source frames inspected

The selected Figma node is a wrapper/canvas named `enter`, not a single page. It contains the full site design, responsive variants, components, menu state, and style guide.

Important page frames:

| Page | Desktop | Tablet | Mobile |
|---|---:|---:|---:|
| Home | `62896:3975` — 1440 × 3148 | `62896:3779` — 768 × 4221 | `62896:3586` — 375 × 5166 |
| Stories | `62896:3193` — 1440 × 2972 | `62896:3231` — 768 × 5006 | `62896:2863` — 375 × 7423 |
| Features | `62896:2712` — 1440 × 1988 | `62896:2556` — 768 × 2211 | `62896:2418` — 375 × 3323 |
| Pricing | `62896:2297` — 1440 × 2738 | `62896:2164` — 768 × 3056 | `62896:2001` — 375 × 3978 |

Shared supporting areas:

- **Components:** `62896:1188`
- **Mobile menu state:** `62896:1964`
- **Style Guide — Typography:** `62896:4083`
- **Style Guide — Color:** `62896:4113`
- **Style Guide — Spacing:** `62896:4220`
- **Style Guide — Radius:** `62896:4323`

## 3. Visual anatomy

### 3.1 Global page shell

Each page uses the same global shell:

1. Header
2. Page-specific main content
3. Optional beta invite CTA section
4. Footer

The header is always fixed in layout position at the top of the page, but the Figma design does not indicate sticky behavior. It should be treated as a normal document header unless later specified.

The site relies on full-width horizontal sections rather than boxed cards. Most sections span the viewport width, with content aligned to a central 1110px desktop grid where appropriate.

### 3.2 Header

Desktop and tablet header:

- Height: **72px**
- Background: white
- Inner desktop content width: **1110px**
- Logo on the left, approximately **169 × 16px**
- Navigation links: **STORIES**, **FEATURES**, **PRICING**
- Desktop nav gap: **40px**
- Primary header CTA: black rectangular button, **GET AN INVITE**
- Header CTA uses white uppercase text with strong letter spacing.

Mobile header:

- Height: **72px**
- Horizontal padding: **24px**
- Logo on the left
- Hamburger icon on the right in the closed state
- Close icon on the right in the open menu state
- No desktop nav or header CTA visible in the closed mobile header

### 3.3 Mobile menu

The open mobile menu is a dedicated state in Figma:

- Header remains white at the top.
- A white menu panel drops below the 72px header.
- Menu panel height: **253px**
- Menu content width: **310px**
- Menu items are centered and stacked vertically:
  - STORIES
  - FEATURES
  - PRICING
- Menu item text uses a larger mobile nav style: **15px bold**, **2.5px letter spacing**.
- Menu item gap: **20px**
- A black separator line at **25% opacity** divides the links from the CTA.
- CTA button spans the menu content width and is **48px** tall.
- The underlying page is covered by a black overlay at roughly **50% opacity**.

### 3.4 Footer

Desktop footer:

- Height: **250px**
- Background: black
- Inner content width: **1110px**
- Left side contains logo, social icons, and vertical footer navigation.
- Right side contains `GET AN INVITE` CTA and copyright.
- Footer nav is vertical, not horizontal.
- Social icon row uses five icons with **12px** gaps.
- Copyright is visually secondary at **50% opacity**.

Tablet footer:

- Height: **284px**
- Still horizontal enough to preserve logo/social/nav/CTA grouping, but with tighter width.

Mobile footer:

- Height: **539px**
- Content stacks vertically and centers.
- Logo and social icons appear first.
- Footer nav links stack below.
- CTA and copyright sit at the bottom.
- Overall content width: **310px**

### 3.5 CTA / beta invite section

Used on **Features** and **Pricing** pages.

Desktop/tablet:

- Height: **280px**
- Full-width dark photographic background
- Dark overlay over the image
- Left edge has a **6px** vertical gradient accent
- Content width on desktop: approximately **1110px**
- Heading width: **400px**
- Heading: `WE’RE IN BETA. GET YOUR INVITE TODAY!`
- CTA aligns to the right on desktop/tablet.

Mobile:

- Height: **288px**
- Content stacks vertically.
- Content inset: approximately **33px** left and right.
- Gradient accent becomes a horizontal bar at the top-left, approximately **128 × 6px**.
- Heading uses mobile heading size, **32px**, and wraps across three lines.

### 3.6 Split hero / split content sections

The site uses a recurring split-section pattern:

- Black or white text panel
- Large image panel
- Optional gradient accent bar
- Fixed-height sections by breakpoint
- Text block constrained to a narrow readable width

Desktop Home hero:

- Section height: **650px**
- Text column: **610px**
- Image column: **830px**
- Text block width: **387px**
- Gradient accent: **6 × 304px**

Desktop secondary Home sections:

- Section height: **600px**
- Split width still follows the **610 / 830** rhythm.
- Image and text alternate left/right.

Desktop Features and Pricing hero:

- Section height: **490px**
- Text column: **610px**
- Image column: **830px**
- Gradient accent: **6 × 144px**

Tablet split sections:

- Text area: approximately **495px** wide
- Image area: approximately **273px** wide
- Text content width remains **387px**
- Gradient accent remains vertical on tablet.

Mobile split sections:

- Sections stack vertically.
- Image appears above text.
- Hero image height: usually **294px**
- Secondary Home section image height: **271px**
- Text block appears below the image.
- Text block width: **318px**
- Text block vertical padding is generous, usually around **72px**.
- Gradient accent changes from vertical to horizontal, approximately **128 × 6px**, positioned at the top-left of the text block.

## 4. Page-level layout structure

### 4.1 Home page

Desktop structure:

1. Header — 72px
2. Main hero — 650px
3. “Beautiful Stories Every Time” split section — 600px
4. “Designed for Everyone” split section — 600px
5. Four story teaser cards — 500px
6. Three-feature section — 476px
7. Footer — 250px

Key Home content:

- Hero title: `Create and share your photo stories.`
- Hero body: introduces PhotoSnap as a platform for photographers and visual storytellers.
- CTA: `GET AN INVITE`
- Secondary CTAs: `VIEW THE STORIES`
- Story teaser cards:
  - The Mountains
  - Sunset Cityscapes
  - 18 Days Voyage
  - Architecturals
- Feature teaser cards:
  - 100% Responsive
  - No Photo Upload Limit
  - Available to Embed

Home desktop story cards are **360 × 500px** and form a full-width four-column strip.

Home tablet story cards become a two-column grid with **384 × 500px** cards.

Home mobile story cards become a single-column strip with **375 × 375px** cards.

### 4.2 Stories page

Desktop structure:

1. Header — 72px
2. Featured story hero — 650px
3. Story grid — 16 cards, 4 columns × 4 rows
4. Footer — 250px

Featured story:

- Label: `LAST MONTH’S FEATURED STORY`
- Title: `HAZY FULL MOON OF APPALACHIA`
- Date: `March 2nd 2020`
- Author: `by John Appleseed`
- CTA: `READ THE STORY`

Desktop featured story uses a full-width background image with the content overlaid on the left.

Tablet featured story keeps the same 650px hero height, with left content inset around **40px**.

Mobile featured story changes significantly:

- Top image: **375 × 317px**
- Black story content panel below: **375 × 495px**
- Gradient accent: **128 × 6px** at the top of the black content panel
- Content width: **318px**
- CTA stays under the body text.

Stories grid:

- Desktop: 4 columns, **360 × 500px** cards
- Tablet: 2 columns, **384 × 500px** cards
- Mobile: 1 column, **375 × 375px** cards
- No gutters between story cards

Story list content:

1. The Mountains
2. Sunset Cityscapes
3. 18 Days Voyage
4. Architecturals
5. World Tour 2019
6. Unforeseen Corners
7. King on Africa: Part II
8. The Trip to Nowhere
9. Rage of The Sea
10. Running Free
11. Behind the Waves
12. Calm Waters
13. The Milky Way
14. Night at The Dark Forest
15. Somwarpet’s Beauty
16. Land of Dreams

### 4.3 Features page

Desktop structure:

1. Header — 72px
2. Features hero — 490px
3. Feature grid — 896px section
4. Beta invite CTA — 280px
5. Footer — 250px

Hero:

- Title: `FEATURES`
- Black text panel on the left
- Image panel on the right
- Vertical gradient accent next to text

Feature grid:

- Desktop container width: **1110px**
- Desktop grid: 3 columns × 2 rows
- Feature card width: **350px**
- Column gap: **30px**
- Row separation: approximately **104px** between first and second row positions

Tablet feature grid:

- Container width: **692px**
- Grid: 2 columns × 3 rows
- Feature card width: **340px**
- Column gap: **12px**
- Row spacing: approximately **80px**

Mobile feature grid:

- Single column
- Feature card width: **310px**
- Feature list starts below the hero at y=666
- Feature items are vertically separated by approximately **56px**

Feature cards:

1. 100% Responsive
2. No Photo Upload Limit
3. Available to Embed
4. Custom Domain
5. Boost Your Exposure
6. Drag & Drop Image

### 4.4 Pricing page

Desktop structure:

1. Header — 72px
2. Pricing hero — 490px
3. Pricing plans section — includes toggle, plan cards, comparison table
4. Beta invite CTA — 280px
5. Footer — 250px

Hero:

- Title: `PRICING`
- Black text panel on the left
- Image panel on the right
- Vertical gradient accent

Pricing plans section desktop:

- Starts after hero at y=562
- Billing toggle is centered near the top
- Plan cards sit in a centered row with **30px** gaps
- Plan card area width: **1110px**

Desktop plan cards:

| Plan | Desktop size | Visual treatment |
|---|---:|---|
| Basic | 350 × 407 | Light gray card |
| Pro | 350 × 470 | Black featured card with top gradient bar |
| Business | 350 × 407 | Light gray card |

Plan content:

- Plan name: **24px bold**
- Description: **15px regular**, 60% opacity
- Price: **40px bold**, uppercase/letter-spaced style
- Period label: **15px regular**, 60% opacity
- CTA button: **270 × 40px** desktop

Tablet plan cards:

- Stack vertically as wide horizontal cards.
- Card width: **689px**
- Card height: **270px**
- Description/button area sits on the left.
- Price sits on the right.
- Pro card uses a vertical **6px** gradient accent on the left instead of a top gradient bar.

Mobile plan cards:

- Stack vertically.
- Card width: **318px**
- Card height: **407px**
- Content width: **245px**
- Gap between cards: **24px**
- Pro card keeps a top **6px** gradient bar.

Billing toggle:

- Width: **256px**
- Switch: **64 × 32px**
- Labels: `Monthly` and `Yearly`
- Active label is fully opaque.
- Inactive label is **50% opacity**.
- Monthly is active in the inspected page state.
- Components include both `Monthly` and `Yearly` toggle variants.

Comparison section:

Desktop:

- Heading: `COMPARE`
- Heading width: **731px**
- Table width: **731px**
- Table height: **552px**
- Columns: `THE FEATURES`, `BASIC`, `PRO`, `BUSINESS`
- Horizontal dividers between rows
- Checkmarks indicate included features

Tablet:

- Similar table structure
- Width: **689px**
- Table remains a horizontal comparison table.

Mobile:

- Heading `COMPARE` is not shown as a large separate title in the inspected mobile layout.
- The section begins with `THE FEATURES`.
- Features stack vertically.
- Each feature repeats the plan labels below it: `BASIC`, `PRO`, `BUSINESS`.
- Plan labels use **10px bold**, **1.6667px letter spacing**, and **50% opacity**.
- Checkmarks appear below each plan label.
- Feature section width: **318px**.

Comparison feature rows:

1. Unlimited Story Posting
2. Unlimited Photo Upload
3. Embedding Custom Content
4. Customize Metadata
5. Advanced Metrics
6. Photo Downloads
7. Search Engine Indexing
8. Custom Analytics

Observed entitlements:

| Feature | Basic | Pro | Business |
|---|---:|---:|---:|
| Unlimited Story Posting | Included | Included | Included |
| Unlimited Photo Upload | Included | Included | Included |
| Embedding Custom Content | Not included | Included | Included |
| Customize Metadata | Not included | Included | Included |
| Advanced Metrics | Not included | Not included | Included |
| Photo Downloads | Not included | Not included | Included |
| Search Engine Indexing | Not included | Not included | Included |
| Custom Analytics | Not included | Not included | Included |

## 5. Responsive behavior

The design defines three primary target widths:

- **Desktop:** 1440px
- **Tablet:** 768px
- **Mobile:** 375px

### 5.1 Desktop behavior

Desktop layout is highly structured and uses fixed visual rhythms:

- Header/footer content aligns to a central **1110px** grid.
- Split sections use **610px** text columns and **830px** image columns.
- Story cards use full-bleed strips with no gutters.
- Feature cards use 3-column rows.
- Pricing cards use a 3-column row.
- Pricing comparison uses a centered compact table.

### 5.2 Tablet behavior

Tablet preserves many desktop patterns but narrows image panels and content containers:

- Header remains horizontal.
- Split hero sections remain side-by-side.
- Text content width usually stays at **387px**.
- Image panels narrow to approximately **273px**.
- Stories use a 2-column grid.
- Features use a 2-column grid.
- Pricing plans become stacked horizontal cards.
- CTA banner remains horizontal, with heading left and CTA right.
- Footer becomes shorter than mobile and more compact than desktop.

### 5.3 Mobile behavior

Mobile prioritizes vertical stacking:

- Header becomes logo + hamburger.
- Open navigation appears as a dropdown menu with a page overlay.
- Split sections become image-first, text-second stacks.
- Gradient accents become horizontal bars at the top-left of text panels.
- Story cards become square-ish **375 × 375px** panels.
- Feature cards become one-column centered cards.
- Pricing cards stack vertically.
- Pricing comparison becomes a stacked feature-by-feature comparison.
- Footer becomes fully centered and vertically stacked.

## 6. Typography

The design uses **DM Sans** throughout.

| Preset | Usage | Size | Weight | Line height | Letter spacing |
|---|---|---:|---:|---:|---:|
| Text preset 1 | Desktop/tablet page titles, major headings, prices | 40px | 700 | 48px | 4.1667px |
| Text preset 2 | Mobile page titles and CTA banner headings | 32px | 700 | 1.25 | 3.5px |
| Text preset 3 | Pricing plan names | 24px | 700 | 1.05 | 0 |
| Text preset 4 | Story titles, feature titles, toggle labels | 18px | 700 | 1.4 | 0 |
| Text preset 5 regular | Body copy | 15px | 400 | 1.65 | 0 |
| Text preset 5 bold | Mobile menu items | 15px | 700 | 1.35 | 2.5px |
| Text preset 6 | Story dates and authors | 13px | 400 | 1.3 | 0 |
| Text preset 7 | Nav, buttons, footer links, table headers | 12px | 700 | 1.35 | 2px |

Typography behavior:

- Major headings are uppercase or visually uppercase.
- Heading letter spacing is a key part of the brand feel.
- Body copy is small but readable due to generous line height.
- Repeated UI labels use tight uppercase text with strong letter spacing.
- Mobile headings reduce from 40px to 32px.

## 7. Colors

Core palette:

| Token | Value | Usage |
|---|---|---|
| Neutral 950 | `#000000` | Primary text, black panels, footer, buttons |
| Neutral 0 | `#ffffff` | Page background, text on dark, white buttons |
| Neutral 100 | `#f5f5f5` | Light pricing card background |
| Neutral 200 | `#efefef` | Image fallback/mask background |

Opacity treatments:

- Body text on light backgrounds: black at approximately **60% opacity**.
- Body text on dark backgrounds: white at approximately **60% opacity**.
- Story card dividers: white at approximately **25% opacity**.
- Footer copyright: white at approximately **50% opacity**.
- Inactive pricing toggle label: black at approximately **50% opacity**.
- Mobile comparison plan labels: black at approximately **50% opacity**.

Brand gradient:

- Start: `#FFC593`
- Middle: `#BC7198`
- End: `#5A77FF`

Gradient is used sparingly and should remain a brand accent, not a general decorative background.

## 8. Spacing

The Figma spacing scale includes:

| Name in design | Value |
|---|---:|
| spacing/0 | 0px |
| spacing/050 | 4px |
| spacing/100 | 8px |
| spacing/150 | 12px |
| spacing/200 | 16px |
| spacing/250 | 20px |
| spacing/300 | 24px |
| spacing/375 | 30px |
| spacing/400 | 32px |
| spacing/500 | 40px |
| spacing/600 | 48px |
| spacing/700 | 56px |
| spacing/800 | 64px |
| spacing/1000 | 80px |
| spacing/1400 | 112px |

Important layout spacing:

- Desktop outer gutter for 1110px content: **165px** on a 1440px canvas.
- Header height: **72px**.
- Desktop footer height: **250px**.
- Desktop CTA banner height: **280px**.
- Mobile CTA banner height: **288px**.
- Desktop story card height: **500px**.
- Mobile story card height: **375px**.
- Feature text gap: **16px** between title and description.
- Pricing card major vertical gap: **40px**.
- CTA icon gap: **16px** between label and arrow.
- Mobile content width usually: **318px**.
- Mobile card/content width examples: **310px**, **318px**, **327px** header inner width.

## 9. Imagery, icons, and decorative elements

### 9.1 Photography

Photography is the dominant visual element. Images are not generic decoration; they create the product’s editorial tone.

Image treatment patterns:

- Full-bleed image panels in split sections
- Full-background image in Stories featured hero
- Full-card story images with dark gradient overlays
- Dark image background in CTA banner
- Precise crop positioning per breakpoint

Image crop is critical. Many Figma image layers are larger than their masks and manually offset. The website should preserve the same focal points at desktop, tablet, and mobile sizes.

### 9.2 Logo

The PhotoSnap logo appears in black on light backgrounds and white in the footer. It includes a small triangular gradient/brand mark next to the wordmark.

### 9.3 Arrows

Arrows are used in text CTAs:

- `GET AN INVITE`
- `VIEW THE STORIES`
- `READ STORY`
- `READ THE STORY`

Arrow icons are horizontal and approximately **42 × 12px**.

### 9.4 Feature icons

Feature icons are simple black line icons, centered above the feature titles:

- Responsive devices
- Infinity/no limit
- Embed/social media
- Custom domain/search/window
- Exposure/drag-like icon
- Drag/drop image icon

Icon dimensions vary, but the visual rhythm aligns them to a consistent top icon area.

### 9.5 Social icons

Footer includes five social icons. They are compact, white on black, and appear as a simple horizontal row.

### 9.6 Gradient accents

Gradient accents appear as:

- Vertical bars beside desktop/tablet hero text
- Horizontal bars above mobile hero text panels
- Top bar on mobile/desktop Pro pricing card
- Left bar on tablet Pro pricing card
- Vertical bar on desktop/tablet CTA sections
- Horizontal bar on mobile CTA sections

### 9.7 Dividers

Dividers are subtle:

- Story card divider: 1px white, 25% opacity
- Mobile menu divider: 1px black, 25% opacity
- Pricing comparison dividers: 1px gray/black line treatment

## 10. Interaction states

Known states from the Figma component area:

- Button Style 1 has **Default** and **Active** variants.
- Button Style 2 has **Default** and **Active** variants.
- Navbar Button has **Default** and **Active** variants.
- Footer Button has **Default** and **Active** variants.
- Toggle Container has **Monthly** and **Yearly** variants.
- Mobile header has closed hamburger and open close-icon states.
- Mobile menu includes an overlay state.

Expected interaction definitions:

- Header nav links should have hover/focus/active affordances.
- Primary black buttons should have a visible hover/focus state.
- Text-arrow CTAs should have a clear hover/focus affordance.
- Pricing toggle should visibly switch active label opacity and knob position.
- Story cards should communicate clickability. The Figma page frames do not clearly show a story-card hover state.
- Mobile menu should open and close without changing page scroll position unexpectedly.

**Assumption:** The `Active` variants in the component frame likely represent hover or pressed states rather than current-page navigation state, but this needs confirmation.

## 11. Accessibility considerations

### 11.1 Navigation

- Header navigation should be represented as a primary navigation landmark.
- Logo should have a meaningful text alternative and link to Home.
- Mobile menu button must expose open/closed state.
- Mobile menu should be keyboard operable.
- When the mobile menu is open, focus should move logically into the menu or remain controlled from the trigger.
- The overlay should not trap pointer or keyboard users in an unclear state.

### 11.2 Links and buttons

- CTAs that navigate should be links, not generic buttons.
- Arrow icons should be decorative unless they communicate unique meaning.
- Link text should remain understandable out of context where possible.
- Story card accessible names should include story titles, for example: `Read story: The Mountains`.

### 11.3 Pricing toggle

- The billing toggle must expose the active billing period to assistive technology.
- Monthly and Yearly must not be communicated only through opacity.
- The toggle should be reachable by keyboard and operable with Enter/Space.

### 11.4 Comparison table

- Desktop/tablet comparison should preserve table semantics.
- Mobile comparison may use stacked sections but should still associate feature names with plan availability.
- Checkmarks should have accessible text equivalents such as `Included`.
- Missing items should not be represented by empty, unexplained cells for screen readers.

### 11.5 Images

- Decorative background images can use empty alt text or CSS backgrounds.
- Story images are content-bearing and should have descriptive alt text.
- Hero/CTA images may be decorative if adjacent copy communicates the meaning.

### 11.6 Color and contrast

- White text over photography relies on dark overlays; contrast should be checked after final image crops are implemented.
- Opacity-based body text should be tested, especially on dark backgrounds and image overlays.
- Focus states must be visible on both black and white backgrounds.

### 11.7 Motion and hover

- No motion is defined in the inspected Figma frames.
- Any added hover transitions should be subtle and respect reduced-motion preferences.

## 12. Content notes

The design includes several likely copy issues. These should be treated as design-source content unless the client approves corrections.

Observed issues:

- Pricing hero: `Create a your stories...`
- Features hero: `photograpers`
- Features copy: `notifed`
- Features copy: `everytime`
- Pricing mobile/tablet/desktop card data should be checked because some metadata instances show inherited labels, although the visual context shows Basic, Pro, and Business.

## 13. Assumptions

**Assumption 1:** The production site should match the Figma responsive frames at 1440px, 768px, and 375px before interpolating intermediate widths.

**Assumption 2:** Header is not sticky. The Figma frames position it at the top, but no sticky behavior is indicated.

**Assumption 3:** The Home story cards intentionally hide dates, while Stories page cards show dates.

**Assumption 4:** The Pro pricing plan is intentionally featured/recommended based on visual treatment, even though there is no explicit `Recommended` label.

**Assumption 5:** The beta invite CTA is used only on Features and Pricing pages because it does not appear in the inspected Home or Stories page structures.

**Assumption 6:** The component `Active` states map to hover/active visual feedback, but the exact trigger semantics need confirmation.

**Assumption 7:** Figma image URLs are temporary inspection assets only. Final implementation should use project-local optimized assets.

## 14. Open questions

1. Should copy typos be preserved for visual fidelity or corrected before client review?
2. Are the component `Active` variants intended for hover, pressed, or current-page active states?
3. Should the header be sticky, or should it scroll normally?
4. What exact URLs should the CTAs target?
5. Should story cards link to individual story detail pages, or are they non-functional marketing previews in this phase?
6. What are the yearly prices for the pricing toggle state?
7. Should the pricing toggle update content live on the page, or is the Yearly state only visual for the design review?
8. Are there expected hover effects for story cards, such as lift, gradient accent, image zoom, or opacity changes?
9. Should social icons link to real social profiles or placeholders during the Astro review phase?
10. Are image alt texts supplied by the client, or should they be written during implementation?
11. Should mobile menu interactions include focus trapping, escape-to-close, and background scroll lock?
12. Should intermediate breakpoints follow fluid scaling or snap between the 375/768/1440 designs?

## 15. Design review checklist

Before moving to SPEC.md or implementation, verify:

- Mobile and tablet image crops against Figma screenshots.
- Header open/closed mobile states.
- Button active states in the Components frame.
- Pricing toggle Monthly and Yearly variants.
- Story card content differences between Home and Stories.
- CTA banner crop and gradient placement at all breakpoints.
- Footer layout at desktop, tablet, and mobile.
- Accessibility behavior not visible in static Figma frames.
- Client-approved handling of copy typos.
