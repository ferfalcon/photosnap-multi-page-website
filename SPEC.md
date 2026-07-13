# PhotoSnap Website — SPEC.md

## 1. Purpose of this specification

This document translates `DESIGN.md` and the inspected Figma design into a technical product specification for the PhotoSnap responsive marketing website.

This document defines what the website must contain, how its content should be structured, how layouts should respond across breakpoints, what interactions are required, and what accessibility requirements must be met.

This document does **not** define implementation sequencing, file structure, framework-specific component architecture, or code-level details. Those belong in `PLAN.md`.

## 2. Product scope

PhotoSnap is a four-page marketing website for a photography storytelling platform. The site must communicate a polished, editorial, photography-first product experience through strong imagery, concise copy, clear navigation, plan comparison, and repeated calls to action.

Required pages:

| Page | Route intent | Primary responsibility |
|---|---|---|
| Home | Home / landing page | Introduce PhotoSnap, communicate the core value proposition, preview stories, and highlight the top three features. |
| Stories | Story gallery page | Present one featured story and a complete visual gallery of story previews. |
| Features | Feature marketing page | Explain the six core product capabilities. |
| Pricing | Pricing / plans page | Present monthly/yearly billing control, subscription plans, and feature comparison. |

Required global regions:

- Header
- Main content
- Footer
- Mobile navigation menu
- Shared CTA/banner where required by the design

## 3. Site-level responsibilities

### 3.1 Global shell

The site shell is responsible for:

- Providing a consistent header and footer across all four pages.
- Preserving the Figma-defined order of page sections.
- Maintaining the visual rhythm defined in `DESIGN.md`: full-width sections, black/white contrast, narrow text columns, full-bleed imagery, and restrained gradient accents.
- Supporting desktop, tablet, and mobile layouts based on the inspected Figma frames.
- Ensuring all navigational and interactive controls are accessible by keyboard and screen reader.

### 3.2 Navigation

The navigation is responsible for:

- Providing links to Stories, Features, and Pricing from the header.
- Providing links to Home, Stories, Features, and Pricing from the footer.
- Providing the same primary navigation inside the mobile menu.
- Providing a prominent `GET AN INVITE` CTA in the desktop/tablet header and inside the mobile menu.

### 3.3 Page content

Each page is responsible for rendering content from structured data rather than relying on repeated hardcoded visual blocks.

The content model must support:

- Shared navigation items
- Shared CTA labels and links
- Split hero/marketing sections
- Stories
- Features
- Pricing plans
- Pricing comparison rows
- Footer/social links
- Responsive image definitions

## 4. Content requirements

### 4.1 Global navigation content

Primary header navigation must include:

| Label | Destination requirement |
|---|---|
| STORIES | Stories page |
| FEATURES | Features page |
| PRICING | Pricing page |

Footer navigation must include:

| Label | Destination requirement |
|---|---|
| HOME | Home page |
| STORIES | Stories page |
| FEATURES | Features page |
| PRICING | Pricing page |

The global CTA label must be:

```txt
GET AN INVITE
```

**Open question:** The final URL/behavior for `GET AN INVITE` is not defined in the Figma file.

### 4.2 Home page content

Home must include these sections in this order:

1. Header
2. Main hero split section
3. `BEAUTIFUL STORIES EVERY TIME` split section
4. `DESIGNED FOR EVERYONE` split section
5. Four story preview cards
6. Three feature preview cards
7. Footer

Home hero content:

| Field | Required content |
|---|---|
| Heading | `Create and share your photo stories.` |
| Body | `Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.` |
| CTA | `GET AN INVITE` |

Home secondary sections:

| Section | Heading | CTA |
|---|---|---|
| Beautiful Stories | `BEAUTIFUL STORIES EVERY TIME` | `VIEW THE STORIES` |
| Designed for Everyone | `DESIGNED FOR EVERYONE` | `VIEW THE STORIES` |

Home story previews must include:

1. The Mountains
2. Sunset Cityscapes
3. 18 Days Voyage
4. Architecturals

Home feature previews must include:

1. 100% Responsive
2. No Photo Upload Limit
3. Available to Embed

### 4.3 Stories page content

Stories must include these sections in this order:

1. Header
2. Featured story hero
3. Story card grid/list
4. Footer

Featured story required content:

| Field | Required content |
|---|---|
| Label | `LAST MONTH’S FEATURED STORY` |
| Title | `HAZY FULL MOON OF APPALACHIA` |
| Date | `March 2nd 2020` |
| Author | `John Appleseed` |
| CTA | `READ THE STORY` |
| Description | The Figma-provided Appalachia story body copy. |

Story grid/list must include exactly these 16 stories in this order unless the client approves changes:

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

Each story card on the Stories page must show date, title, author, divider, and `READ STORY` CTA.

### 4.4 Features page content

Features must include these sections in this order:

1. Header
2. Features hero split section
3. Six-feature grid/list
4. Beta invite CTA section
5. Footer

Features hero content:

| Field | Requirement |
|---|---|
| Heading | `FEATURES` |
| Body | Figma-provided features hero copy. |
| Image | Features hero photograph from the Figma design. |

Feature list must include:

1. 100% Responsive
2. No Photo Upload Limit
3. Available to Embed
4. Custom Domain
5. Boost Your Exposure
6. Drag & Drop Image

Each feature must include a title, description, and icon.

### 4.5 Pricing page content

Pricing must include these sections in this order:

1. Header
2. Pricing hero split section
3. Billing toggle
4. Pricing plan cards
5. Pricing comparison
6. Beta invite CTA section
7. Footer

Pricing hero content:

| Field | Requirement |
|---|---|
| Heading | `PRICING` |
| Body | Figma-provided pricing hero copy. |
| Image | Pricing hero photograph from the Figma design. |

Pricing plans must include:

| Plan | Monthly price | Visual treatment |
|---|---:|---|
| Basic | `$19.00` | Light card |
| Pro | `$39.00` | Featured dark card |
| Business | `$99.00` | Light card |

Pricing comparison rows must include:

1. Unlimited Story Posting
2. Unlimited Photo Upload
3. Embedding Custom Content
4. Customize Metadata
5. Advanced Metrics
6. Photo Downloads
7. Search Engine Indexing
8. Custom Analytics

Pricing comparison entitlements:

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

### 4.6 Beta invite CTA content

The beta invite CTA must appear on:

- Features page
- Pricing page

It must not appear on Home or Stories unless the client changes the design.

Required CTA content:

| Field | Required content |
|---|---|
| Heading | `WE’RE IN BETA. GET YOUR INVITE TODAY!` |
| CTA | `GET AN INVITE` |
| Background | Figma-provided dark photographic CTA image with overlay |
| Decoration | Brand gradient accent |

## 5. Data model / content props

This section defines the content shapes the website must support. These are product/content contracts, not implementation code.

### 5.1 Link item

| Field | Required | Description |
|---|---:|---|
| `label` | Yes | Visible link text. |
| `href` | Yes | Destination URL. |
| `ariaLabel` | Optional | More descriptive accessible label when visible label is ambiguous. |
| `isExternal` | Optional | Indicates whether the link points outside the site. |
| `opensInNewTab` | Optional | Only allowed for external destinations. |

### 5.2 CTA

| Field | Required | Description |
|---|---:|---|
| `label` | Yes | Visible CTA text. |
| `href` | Yes | CTA destination. |
| `variant` | Yes | Visual variant: text-arrow, solid-black, solid-white. |
| `theme` | Optional | Light or dark context for icon/text contrast. |
| `ariaLabel` | Optional | More specific accessible label. |

### 5.3 Responsive image

| Field | Required | Description |
|---|---:|---|
| `desktopSrc` | Yes | Desktop image asset. |
| `tabletSrc` | Optional | Tablet image asset or crop variant. |
| `mobileSrc` | Optional | Mobile image asset or crop variant. |
| `alt` | Required for content images | Descriptive alt text. Empty only when decorative. |
| `role` | Yes | `content`, `decorative`, or `background`. |
| `focalPoint` | Optional | Focal-point hint for crop alignment. |

### 5.4 Split section

| Field | Required | Description |
|---|---:|---|
| `heading` | Yes | Section heading. |
| `body` | Yes | Section body copy. |
| `image` | Yes | Responsive image object. |
| `theme` | Yes | `dark` or `light` text panel. |
| `imagePosition` | Yes | Desktop/tablet image side: left or right. |
| `accent` | Optional | Whether to show brand gradient accent. |
| `cta` | Optional | CTA object. |

### 5.5 Story

| Field | Required | Description |
|---|---:|---|
| `title` | Yes | Story title. |
| `author` | Yes | Author name. |
| `image` | Yes | Story image. |
| `date` | Required on Stories page | Story date string. |
| `excerpt` | Optional | Summary used for featured story or future story pages. |
| `href` | Optional | Story destination. Required only if story cards are clickable. |
| `showDate` | Optional | Controls Home vs Stories card treatment. |
| `isFeatured` | Optional | Identifies the featured story on the Stories page. |

### 5.6 Feature

| Field | Required | Description |
|---|---:|---|
| `title` | Yes | Feature title. |
| `description` | Yes | Feature body copy. |
| `icon` | Yes | Feature icon asset/reference. |
| `iconAlt` | Optional | Required only if icon communicates meaning beyond the adjacent title. |

### 5.7 Pricing plan

| Field | Required | Description |
|---|---:|---|
| `name` | Yes | Plan name: Basic, Pro, Business. |
| `description` | Yes | Plan description. |
| `monthlyPrice` | Yes | Monthly price label. |
| `yearlyPrice` | Required if yearly toggle is functional | Yearly price label. |
| `periodLabel` | Yes | `per month` or equivalent active billing label. |
| `cta` | Yes | Plan CTA object. |
| `isFeatured` | Optional | True for Pro plan. |

### 5.8 Pricing comparison row

| Field | Required | Description |
|---|---:|---|
| `feature` | Yes | Feature name. |
| `basic` | Yes | Included/not included. |
| `pro` | Yes | Included/not included. |
| `business` | Yes | Included/not included. |

### 5.9 Social link

| Field | Required | Description |
|---|---:|---|
| `platform` | Yes | Platform name. |
| `href` | Yes | Destination URL. |
| `icon` | Yes | Social icon asset/reference. |
| `ariaLabel` | Yes | Example: `Visit PhotoSnap on Facebook`. |

## 6. Required and optional fields by component

### 6.1 Header

Required:

- Logo asset
- Home link destination
- Primary nav links
- Header CTA label and destination
- Mobile menu trigger label/state

Optional:

- Current page indicator
- Header CTA hidden state

**Assumption:** Current-page visual indication is not clearly defined in the inspected Figma frames, so it is optional until confirmed.

### 6.2 Mobile menu

Required:

- Open/closed state
- Menu links
- CTA link
- Background overlay
- Close control
- Keyboard operability

Optional:

- Scroll lock behavior
- Escape-to-close behavior
- Focus trap behavior

**Assumption:** Scroll lock, Escape-to-close, and focus handling should be included for accessibility even though they are not visible in Figma.

### 6.3 Footer

Required:

- Logo asset
- Social links
- Footer nav links
- Footer CTA
- Copyright text

Optional:

- Real social URLs; placeholders are acceptable only for review if approved.

### 6.4 Story card

Required:

- Title
- Author
- Image
- CTA label
- Accessible name

Conditionally required:

- Date is required on Stories page story cards.
- Date is hidden on Home page story cards.
- `href` is required only if cards navigate.

Optional:

- Excerpt
- Hover treatment, pending confirmation.

### 6.5 Feature card

Required:

- Icon
- Title
- Description

Optional:

- Icon alt text when icon is decorative and title already communicates meaning.

### 6.6 Pricing card

Required:

- Plan name
- Description
- Price
- Period label
- CTA
- Featured state support

Conditionally required:

- Yearly price if the Yearly toggle is enabled as a real interaction.

### 6.7 Pricing toggle

Required:

- Monthly state
- Yearly state
- Visible active state
- Assistive technology state
- Keyboard activation

Optional:

- Persisting selected billing period after page reload.

### 6.8 Pricing comparison

Required:

- Feature name
- Three plan columns or plan labels
- Included/not included status
- Accessible equivalent for checkmarks and missing items

Optional:

- Large desktop `COMPARE` heading may be omitted on mobile only because the inspected mobile frame starts with `THE FEATURES` instead.

## 7. Layout rules

### 7.1 Global layout rules

- The site must support the three inspected design targets: **1440px**, **768px**, and **375px**.
- Desktop content that is not full-bleed must align to the **1110px** central grid.
- Header height must remain **72px** at all inspected breakpoints.
- Footer layout must change by breakpoint while preserving the same content.
- Full-bleed image sections must preserve Figma crop/focal intent.
- The brand gradient must be used only in the locations identified in `DESIGN.md`.

### 7.2 Desktop layout rules

At desktop width:

- Header content aligns to 1110px central container.
- Split hero/content sections use the desktop rhythm of **610px text panel** and **830px image panel**.
- Home hero is **650px** tall.
- Home secondary split sections are **600px** tall.
- Features/Pricing hero sections are **490px** tall.
- Story cards are **360 × 500px** and form full-width strips with no gutters.
- Features page feature grid is **3 columns × 2 rows** inside a **1110px** container.
- Pricing cards are three columns with **30px** gaps; Pro is vertically taller.
- Pricing comparison is a centered compact table.
- Beta invite section is **280px** tall and uses horizontal content alignment.

### 7.3 Tablet layout rules

At tablet width:

- Header remains horizontal with desktop-style nav visible.
- Split sections remain side-by-side.
- Text panel width is approximately **495px**.
- Image panel width is approximately **273px**.
- Text content width remains approximately **387px**.
- Story cards use a **2-column** layout with **384 × 500px** cards.
- Features grid uses **2 columns × 3 rows**.
- Pricing cards stack vertically as **689 × 270px** horizontal cards.
- Pricing comparison remains table-like and horizontally readable.
- Beta invite remains a horizontal banner with heading left and CTA right.
- Footer height is **284px**.

### 7.4 Mobile layout rules

At mobile width:

- Header shows logo and hamburger only.
- Mobile menu opens below the 72px header.
- Split sections stack image first, text second.
- Hero images are approximately **294px** tall unless otherwise defined by the page.
- Story featured mobile hero uses a **317px** image followed by a **495px** black content panel.
- Gradient accents become horizontal bars of approximately **128 × 6px**.
- Primary mobile content width is usually **318px**.
- Story cards are **375 × 375px** single-column cards.
- Home and Stories story grids have no gutters between cards.
- Feature cards stack in one centered column.
- Pricing cards stack vertically at **318px** width.
- Pricing comparison becomes stacked feature-by-feature content.
- Footer stacks vertically, centers all content, and is **539px** tall.

### 7.5 Intermediate viewport behavior

The Figma source defines exact targets at 375, 768, and 1440. Intermediate widths must preserve the same hierarchy and avoid content overflow.

**Assumption:** Layout may interpolate fluidly between targets as long as the exact target widths remain visually faithful.

## 8. Responsive requirements

The following responsive transformations are required:

| Element | Desktop | Tablet | Mobile |
|---|---|---|---|
| Header | Logo + nav + CTA | Logo + nav + CTA | Logo + hamburger |
| Mobile menu | Not shown | Not shown | Dropdown panel + overlay |
| Split sections | Side-by-side wide image/text | Side-by-side narrow image/text | Image first, text second |
| Gradient hero accent | Vertical | Vertical | Horizontal |
| Home stories | 4 columns | 2 columns | 1 column square cards |
| Stories grid | 4 columns | 2 columns | 1 column square cards |
| Features grid | 3 columns | 2 columns | 1 column |
| Pricing cards | 3 columns | Vertical horizontal cards | Vertical cards |
| Pricing comparison | Table | Table | Stacked comparison rows |
| CTA banner | Horizontal content | Horizontal content | Stacked content |
| Footer | Two-sided layout | Compact mixed layout | Centered stacked layout |

Viewport behavior must be tested at minimum:

- 375px wide
- 768px wide
- 1440px wide
- A narrow mobile width below 375px, if supported
- A desktop width larger than 1440px

## 9. Accessibility requirements

### 9.1 Semantic structure

- Each page must have one primary page heading.
- Header must be a banner landmark.
- Main content must be wrapped in a main landmark.
- Footer must be a contentinfo landmark.
- Primary navigation must be exposed as navigation.
- Footer navigation must be separately labeled from primary navigation.

### 9.2 Keyboard support

All interactive elements must be reachable and operable using keyboard only.

Required keyboard behavior:

- Header nav links receive focus in logical visual order.
- Header CTA receives focus after primary nav links.
- Mobile menu trigger is operable with Enter and Space.
- Mobile menu links and CTA are reachable when menu is open.
- Pricing toggle is reachable and operable with Enter and Space.
- Story cards or story links are reachable if they navigate.
- Focus must remain visible on light and dark backgrounds.

### 9.3 Mobile menu accessibility

The mobile menu trigger must expose:

- Whether the menu is open or closed.
- Which menu region it controls.
- A clear accessible name, such as `Open navigation menu` and `Close navigation menu`.

When the menu opens:

- The visual overlay must not hide focusable content from screen readers unless the background content is intentionally inert.
- Focus behavior must be logical and predictable.
- The close control must remain reachable.

### 9.4 Link and CTA accessibility

- CTAs that navigate must be links.
- Arrow icons are decorative unless they add unique meaning.
- Repeated CTAs must have understandable accessible names when needed.
- Story card links must include the story title in the accessible name.

### 9.5 Image accessibility

- Story card images are content-bearing and require descriptive alt text.
- Hero images may be decorative if adjacent copy communicates the same content.
- CTA banner background image is decorative unless the client defines it as meaningful.
- Logos require meaningful alternatives.
- Social icons require platform-specific accessible labels.

### 9.6 Pricing comparison accessibility

Desktop/tablet pricing comparison must preserve relationships between:

- Feature names
- Plan names
- Included/not included status

Mobile pricing comparison must also expose these relationships even though it is visually stacked.

Checkmarks must have an accessible text equivalent such as `Included`. Missing items must not be silent; they must have an accessible equivalent such as `Not included`.

### 9.7 Color, contrast, and motion

- White text over image backgrounds must meet contrast requirements after overlays/crops are applied.
- Opacity-based body text must remain readable.
- Focus indicators must be visible against black, white, and image backgrounds.
- Any added transitions must respect reduced-motion preferences.

## 10. Interaction behavior

### 10.1 Header navigation

- Desktop/tablet nav links navigate to their target pages.
- Header CTA navigates to the invite destination once defined.
- Current page indication is optional until confirmed.
- Hover/focus states must be visually clear and consistent with component active states.

### 10.2 Mobile menu

Closed state:

- Shows logo and hamburger icon.
- Does not show nav links or header CTA.

Open state:

- Replaces hamburger with close icon.
- Shows a white dropdown panel below the header.
- Shows three centered nav links.
- Shows divider and full-width black CTA.
- Applies a dark overlay to page content below.

Required behavior:

- Tapping/clicking the menu trigger toggles the menu.
- Tapping/clicking the close icon closes the menu.
- Activating any mobile menu link navigates and should close the menu.
- Background content must not create accidental interaction confusion while overlay is visible.

### 10.3 Pricing toggle

Required states:

- Monthly active
- Yearly active

Visual behavior:

- Active label is fully opaque.
- Inactive label is 50% opacity.
- Switch knob position updates to match active billing period.

Content behavior:

- If yearly values are confirmed, prices and period labels update when Yearly is selected.
- If yearly values are not confirmed, Yearly may remain a non-functional visual state only if explicitly approved.

**Open question:** Yearly prices are not confirmed from the inspected page state.

### 10.4 Story cards

- Story cards must communicate clickability if they navigate.
- Home cards must hide dates.
- Stories page cards must show dates.
- The visible CTA label must be `READ STORY`.
- If the whole card is clickable, nested interactive controls must be avoided.

**Open question:** Story card hover state is not defined clearly in the inspected Figma frames.

### 10.5 Buttons and text-arrow CTAs

- Solid black buttons must invert or otherwise show a clear hover/focus/active state according to the component active variant.
- Solid white buttons must show a clear hover/focus/active state on dark cards.
- Text-arrow CTAs must maintain the 16px label/icon gap.
- Arrow icons must switch to the correct dark/light version depending on background.

### 10.6 Social links

- Social links must navigate to their platform URL when provided.
- If real URLs are not provided, placeholders may be used only for review with clear documentation.

## 11. Edge cases

### 11.1 Missing or delayed images

If an image fails to load:

- Layout dimensions must remain stable.
- Text content must remain readable.
- A neutral fallback background may be shown.
- Missing images must not collapse cards or split sections.

### 11.2 Long or edited content

If headings or descriptions change:

- Text must wrap without overlapping images, icons, buttons, or adjacent cards.
- Pricing cards must preserve visual hierarchy even if descriptions become one line longer.
- Mobile menu labels must remain centered and avoid horizontal scrolling.

### 11.3 Story card count changes

If the number of stories changes:

- Desktop grid must still preserve full-width card rhythm where possible.
- Tablet grid must support odd final card counts without broken alignment.
- Mobile list must stack all cards in order.

**Assumption:** For the first approved review version, the story count remains exactly 16 on the Stories page and 4 on the Home page.

### 11.4 Unknown CTA destinations

If CTA destinations are missing:

- Links may point to a temporary placeholder only if documented for review.
- The visual CTA must still be present.
- No CTA should silently do nothing if it appears interactive.

### 11.5 No JavaScript or failed JavaScript

If JavaScript is unavailable:

- Primary page content must still be visible.
- Desktop/tablet navigation must remain usable.
- Pricing should default to monthly.
- Mobile menu behavior may require JavaScript, but the fallback should not block access to page content.

### 11.6 Viewports below 375px

If the viewport is narrower than the mobile Figma frame:

- Content must not require horizontal scrolling.
- Fixed-width 318px/310px mobile content blocks must adapt within the available viewport.
- Text must remain readable.

### 11.7 Large desktop viewports

On screens wider than 1440px:

- Central content should remain constrained where the design uses containers.
- Full-bleed image/color sections may extend to the viewport edges.
- Image crops must not expose unintended empty areas.

## 12. Non-goals

The following are not part of this specification:

- Implementation plan, file structure, or coding sequence.
- Framework-specific component implementation details.
- WordPress block theme conversion details.
- Backend services.
- Authentication or user accounts.
- Real checkout, payment, or subscription processing.
- Story detail pages, unless later requested.
- CMS authoring workflows.
- Analytics/event tracking requirements.
- Form submission handling for `GET AN INVITE`, unless the CTA destination is later defined as a form.
- Content rewrites beyond documenting known copy issues.
- Additional pages beyond Home, Stories, Features, and Pricing.

## 13. Acceptance criteria

### 13.1 Global acceptance criteria

- All four pages are present and reachable through navigation.
- Header and footer appear consistently on all pages.
- Layout matches the inspected Figma frames at 1440px, 768px, and 375px.
- Typography, colors, spacing, imagery treatment, and gradient accents align with `DESIGN.md`.
- No page has unintended horizontal scrolling at supported viewport widths.
- All visible links and CTAs are keyboard reachable.
- Focus states are visible on light, dark, and image backgrounds.
- Images have appropriate alt text or are intentionally marked decorative.

### 13.2 Home acceptance criteria

- Home renders hero, two split sections, four story previews, three feature previews, and footer in the correct order.
- Desktop story previews are a 4-card full-width strip.
- Tablet story previews are a 2-column layout.
- Mobile story previews are 375px-tall stacked cards.
- Home story cards do not show dates.

### 13.3 Stories acceptance criteria

- Stories renders featured story hero and 16 story cards in the defined order.
- Desktop story grid is 4 columns with no gutters.
- Tablet story grid is 2 columns with no gutters.
- Mobile story grid is 1 column with 375px-tall cards.
- Stories page cards show date, title, author, divider, and `READ STORY` CTA.

### 13.4 Features acceptance criteria

- Features renders hero, six feature cards, beta invite CTA, and footer in the correct order.
- Desktop feature grid is 3 columns by 2 rows.
- Tablet feature grid is 2 columns by 3 rows.
- Mobile feature list is a single centered column.
- All six feature icons, titles, and descriptions are present.

### 13.5 Pricing acceptance criteria

- Pricing renders hero, billing toggle, three pricing cards, comparison section, beta invite CTA, and footer in the correct order.
- Monthly state shows Basic `$19.00`, Pro `$39.00`, and Business `$99.00`.
- Pro plan is visually featured.
- Desktop pricing cards render in a 3-column row.
- Tablet pricing cards render as stacked horizontal cards.
- Mobile pricing cards render as stacked vertical cards.
- Desktop/tablet comparison preserves table-like plan/feature relationships.
- Mobile comparison preserves feature/plan relationships in stacked form.
- Included/not included states are accessible to assistive technology.

### 13.6 Mobile menu acceptance criteria

- Mobile header shows logo and hamburger in closed state.
- Opening the menu shows nav links, divider, CTA, close icon, and overlay.
- Menu can be opened and closed with pointer and keyboard.
- Menu links are reachable in logical order.
- Menu state is communicated to assistive technology.

### 13.7 Content fidelity acceptance criteria

- Figma source copy is preserved unless the client approves corrections.
- Known copy issues are documented and not silently changed.
- The beta invite CTA appears only on Features and Pricing.
- Header is not sticky unless explicitly requested.

## 14. Assumptions

**Assumption 1:** The first build should prioritize fidelity to the Figma frames at 1440px, 768px, and 375px.

**Assumption 2:** The header scrolls normally and is not sticky.

**Assumption 3:** The Home page intentionally hides story dates, while the Stories page shows them.

**Assumption 4:** The Pro pricing plan is intentionally featured/recommended because of its dark card, larger height on desktop, and gradient accent.

**Assumption 5:** The beta invite CTA belongs only on Features and Pricing.

**Assumption 6:** Component `Active` variants likely represent hover/active states, but exact semantics are not confirmed.

**Assumption 7:** Final production assets should not rely on temporary Figma asset URLs.

**Assumption 8:** The pricing comparison should expose not-included states even where the visual design shows blank cells.

**Assumption 9:** Intermediate viewport behavior may be fluid as long as the inspected breakpoints remain faithful.

## 15. Open questions

1. What final URL or action should `GET AN INVITE` use?
2. Should known copy issues be corrected before client review or preserved for Figma fidelity?
3. Are `Active` component variants intended for hover, pressed, or current-page states?
4. Should the header be sticky, despite the Figma frames showing a normal header?
5. Should story cards navigate to future individual story pages, or are they static marketing previews?
6. What are the exact yearly prices and period labels for the pricing toggle?
7. Should the selected pricing period persist across reloads or page navigation?
8. What are the exact hover/focus treatments for story cards?
9. Are real social media URLs available, or should placeholders be used during review?
10. Should mobile menu behavior include focus trapping, Escape-to-close, and background scroll lock?
11. Should image alt text be supplied by the client, or drafted during implementation?
12. Should layouts snap at breakpoints or scale fluidly between the Figma frame widths?
13. Should the mobile pricing comparison include a visible `COMPARE` heading, or follow the inspected mobile frame that starts with `THE FEATURES`?

## 16. Review notes

This specification is aligned with `DESIGN.md` and the inspected Figma structure. It intentionally avoids implementation sequencing and code-level decisions so that `PLAN.md` can later define how to satisfy these requirements in the chosen stack.
