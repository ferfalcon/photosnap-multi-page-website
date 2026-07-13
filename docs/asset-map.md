# PhotoSnap Asset Map

This manifest maps the supplied reference assets to their stable public paths for the Astro review site.

- Source paths are relative to `docs/starter-content/assets/`.
- Public destinations are relative to `frontend/public/assets/` and are served from `/assets/`.
- All files are copied byte-for-byte. The initial review site keeps the supplied progressive JPEG, SVG, and PNG formats.
- Responsive JPEGs are art-directed crops for their named breakpoint, not pixel-density alternatives.
- LCP candidates must later render as eager HTML `<picture>`/`<img>` content with explicit dimensions and `fetchpriority="high"`; they must not be lazy-loaded or hidden in CSS backgrounds.
- Standard below-the-fold images should later use native lazy loading without `fetchpriority="low"`.
- The beta invite artwork is decorative and below the fold, so it may be delivered as a CSS background without preload.

## Inventory

| Family | JPEG | SVG | PNG | Total |
|---|---:|---:|---:|---:|
| Home photographs | 9 | 0 | 0 | 9 |
| Story photographs | 35 | 0 | 0 | 35 |
| Feature assets | 3 | 6 | 0 | 9 |
| Pricing assets | 3 | 1 | 0 | 4 |
| Shared assets | 3 | 9 | 0 | 12 |
| Favicon | 0 | 0 | 1 | 1 |
| **Total** | **53** | **16** | **1** | **70** |

## Home photographs

| Source | Public destination | Dimensions | Responsive group / use | Role | Delivery and crop note |
|---|---|---:|---|---|---|
| `home/desktop/create-and-share.jpg` | `images/home/create-and-share-desktop.jpg` | 830×650 | Home hero / desktop | Content; LCP candidate | Keep the supplied crop with the photographer and dock centered. |
| `home/tablet/create-and-share.jpg` | `images/home/create-and-share-tablet.jpg` | 273×650 | Home hero / tablet | Content; LCP candidate | Keep the narrow supplied crop and centered subject. |
| `home/mobile/create-and-share.jpg` | `images/home/create-and-share-mobile.jpg` | 375×294 | Home hero / mobile | Content; LCP candidate | Keep the photographer and dock centered; do not recrop from desktop. |
| `home/desktop/beautiful-stories.jpg` | `images/home/beautiful-stories-desktop.jpg` | 830×600 | Beautiful Stories / desktop | Content; below fold | Use the supplied crop; center at intermediate widths. |
| `home/tablet/beautiful-stories.jpg` | `images/home/beautiful-stories-tablet.jpg` | 273×600 | Beautiful Stories / tablet | Content; below fold | Use the supplied narrow crop; center at intermediate widths. |
| `home/mobile/beautiful-stories.jpg` | `images/home/beautiful-stories-mobile.jpg` | 375×271 | Beautiful Stories / mobile | Content; below fold | Use the supplied mobile crop without additional art direction. |
| `home/desktop/designed-for-everyone.jpg` | `images/home/designed-for-everyone-desktop.jpg` | 830×600 | Designed for Everyone / desktop | Content; below fold | Use the supplied crop; center at intermediate widths. |
| `home/tablet/designed-for-everyone.jpg` | `images/home/designed-for-everyone-tablet.jpg` | 273×600 | Designed for Everyone / tablet | Content; below fold | Use the supplied narrow crop; center at intermediate widths. |
| `home/mobile/designed-for-everyone.jpg` | `images/home/designed-for-everyone-mobile.jpg` | 375×271 | Designed for Everyone / mobile | Content; below fold | Use the supplied mobile crop without additional art direction. |

## Story photographs

The 360×500 desktop card crops are also the tablet card source. The 375×375 mobile files are distinct art-directed crops.

| Source | Public destination | Dimensions | Responsive group / use | Role | Delivery and crop note |
|---|---|---:|---|---|---|
| `stories/desktop/mountains.jpg` | `images/stories/the-mountains-desktop.jpg` | 360×500 | The Mountains / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/mountains.jpg` | `images/stories/the-mountains-mobile.jpg` | 375×375 | The Mountains / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/cityscapes.jpg` | `images/stories/sunset-cityscapes-desktop.jpg` | 360×500 | Sunset Cityscapes / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/cityscapes.jpg` | `images/stories/sunset-cityscapes-mobile.jpg` | 375×375 | Sunset Cityscapes / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/18-days-voyage.jpg` | `images/stories/18-days-voyage-desktop.jpg` | 360×500 | 18 Days Voyage / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/18-days-voyage.jpg` | `images/stories/18-days-voyage-mobile.jpg` | 375×375 | 18 Days Voyage / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/architecturals.jpg` | `images/stories/architecturals-desktop.jpg` | 360×500 | Architecturals / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/architecturals.jpg` | `images/stories/architecturals-mobile.jpg` | 375×375 | Architecturals / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/world-tour.jpg` | `images/stories/world-tour-2019-desktop.jpg` | 360×500 | World Tour 2019 / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/world-tour.jpg` | `images/stories/world-tour-2019-mobile.jpg` | 375×375 | World Tour 2019 / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/unforeseen-corners.jpg` | `images/stories/unforeseen-corners-desktop.jpg` | 360×500 | Unforeseen Corners / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/unforeseen-corners.jpg` | `images/stories/unforeseen-corners-mobile.jpg` | 375×375 | Unforeseen Corners / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/king-on-africa.jpg` | `images/stories/king-on-africa-part-ii-desktop.jpg` | 360×500 | King on Africa: Part II / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/king-on-africa.jpg` | `images/stories/king-on-africa-part-ii-mobile.jpg` | 375×375 | King on Africa: Part II / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/trip-to-nowhere.jpg` | `images/stories/the-trip-to-nowhere-desktop.jpg` | 360×500 | The Trip to Nowhere / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/trip-to-nowhere.jpg` | `images/stories/the-trip-to-nowhere-mobile.jpg` | 375×375 | The Trip to Nowhere / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/rage-of-the-sea.jpg` | `images/stories/rage-of-the-sea-desktop.jpg` | 360×500 | Rage of the Sea / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/rage-of-the-sea.jpg` | `images/stories/rage-of-the-sea-mobile.jpg` | 375×375 | Rage of the Sea / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/running-free.jpg` | `images/stories/running-free-desktop.jpg` | 360×500 | Running Free / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/running-free.jpg` | `images/stories/running-free-mobile.jpg` | 375×375 | Running Free / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/behind-the-waves.jpg` | `images/stories/behind-the-waves-desktop.jpg` | 360×500 | Behind the Waves / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/behind-the-waves.jpg` | `images/stories/behind-the-waves-mobile.jpg` | 375×375 | Behind the Waves / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/calm-waters.jpg` | `images/stories/calm-waters-desktop.jpg` | 360×500 | Calm Waters / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/calm-waters.jpg` | `images/stories/calm-waters-mobile.jpg` | 375×375 | Calm Waters / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/milky-way.jpg` | `images/stories/the-milky-way-desktop.jpg` | 360×500 | The Milky Way / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/milky-way.jpg` | `images/stories/the-milky-way-mobile.jpg` | 375×375 | The Milky Way / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/dark-forest.jpg` | `images/stories/night-at-the-dark-forest-desktop.jpg` | 360×500 | Night at the Dark Forest / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/dark-forest.jpg` | `images/stories/night-at-the-dark-forest-mobile.jpg` | 375×375 | Night at the Dark Forest / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/somwarpet.jpg` | `images/stories/somwarpets-beauty-desktop.jpg` | 360×500 | Somwarpet’s Beauty / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/somwarpet.jpg` | `images/stories/somwarpets-beauty-mobile.jpg` | 375×375 | Somwarpet’s Beauty / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/land-of-dreams.jpg` | `images/stories/land-of-dreams-desktop.jpg` | 360×500 | Land of Dreams / desktop-tablet | Content; below fold | Use the supplied portrait crop; center. |
| `stories/mobile/land-of-dreams.jpg` | `images/stories/land-of-dreams-mobile.jpg` | 375×375 | Land of Dreams / mobile | Content; below fold | Use the supplied square crop; center. |
| `stories/desktop/moon-of-appalacia.jpg` | `images/stories/hazy-full-moon-of-appalachia-desktop.jpg` | 1440×650 | Featured story / desktop | Content; LCP candidate | Preserve the supplied wide crop and moon in the upper-right area. |
| `stories/tablet/moon-of-appalacia.jpg` | `images/stories/hazy-full-moon-of-appalachia-tablet.jpg` | 768×650 | Featured story / tablet | Content; LCP candidate | Preserve the supplied crop and upper-right moon focal area. |
| `stories/mobile/moon-of-appalacia.jpg` | `images/stories/hazy-full-moon-of-appalachia-mobile.jpg` | 375×317 | Featured story / mobile | Content; LCP candidate | Use the dedicated mobile crop above the separate text panel. |

## Feature, pricing, and shared photographs

| Source | Public destination | Dimensions | Responsive group / use | Role | Delivery and crop note |
|---|---|---:|---|---|---|
| `features/desktop/hero.jpg` | `images/features/hero-desktop.jpg` | 830×490 | Features hero / desktop | Content; LCP candidate | Use the supplied crop; center at intermediate widths. |
| `features/tablet/hero.jpg` | `images/features/hero-tablet.jpg` | 273×490 | Features hero / tablet | Content; LCP candidate | Use the supplied narrow crop; center. |
| `features/mobile/hero.jpg` | `images/features/hero-mobile.jpg` | 375×294 | Features hero / mobile | Content; LCP candidate | Use the dedicated mobile crop. |
| `pricing/desktop/hero.jpg` | `images/pricing/hero-desktop.jpg` | 830×490 | Pricing hero / desktop | Content; LCP candidate | Use the supplied crop; center at intermediate widths. |
| `pricing/tablet/hero.jpg` | `images/pricing/hero-tablet.jpg` | 273×490 | Pricing hero / tablet | Content; LCP candidate | Use the supplied narrow crop; center. |
| `pricing/mobile/hero.jpg` | `images/pricing/hero-mobile.jpg` | 375×294 | Pricing hero / mobile | Content; LCP candidate | Use the dedicated mobile crop. |
| `shared/desktop/bg-beta.jpg` | `images/shared/beta-invite-desktop.jpg` | 1440×280 | Beta invite / desktop | Decorative; below fold | CSS background; cover and center; no preload. |
| `shared/tablet/bg-beta.jpg` | `images/shared/beta-invite-tablet.jpg` | 768×280 | Beta invite / tablet | Decorative; below fold | CSS background; cover and center; no preload. |
| `shared/mobile/bg-beta.jpg` | `images/shared/beta-invite-mobile.jpg` | 375×288 | Beta invite / mobile | Decorative; below fold | CSS background; cover and center; no preload. |

## Vector and favicon assets

Adjacent visible text or accessible control labels carry the meaning for UI, feature, and social icons; hide those SVGs from assistive technology when they are embedded later.

| Source | Public destination | Intrinsic size | Group / use | Role and implementation note |
|---|---|---:|---|---|
| `features/desktop/responsive.svg` | `icons/features/responsive.svg` | 72×72 | Feature: 100% Responsive | Decorative beside the feature title. |
| `features/desktop/no-limit.svg` | `icons/features/no-photo-upload-limit.svg` | 72×36 | Feature: No Photo Upload Limit | Decorative beside the feature title. |
| `features/desktop/embed.svg` | `icons/features/available-to-embed.svg` | 71×72 | Feature: Available to Embed | Decorative beside the feature title. |
| `features/desktop/custom-domain.svg` | `icons/features/custom-domain.svg` | 81×72 | Feature: Custom Domain | Decorative beside the feature title. |
| `features/desktop/boost-exposure.svg` | `icons/features/boost-your-exposure.svg` | 72×72 | Feature: Boost Your Exposure | Decorative beside the feature title. |
| `features/desktop/drag-drop.svg` | `icons/features/drag-and-drop-image.svg` | 91×72 | Feature: Drag & Drop Image | Decorative beside the feature title. |
| `shared/desktop/facebook.svg` | `icons/social/facebook.svg` | 20×20 | Facebook link | Decorative inside an accessibly named link. |
| `shared/desktop/instagram.svg` | `icons/social/instagram.svg` | 21×20 | Instagram link | Decorative inside an accessibly named link. |
| `shared/desktop/pinterest.svg` | `icons/social/pinterest.svg` | 20×20 | Pinterest link | Decorative inside an accessibly named link. |
| `shared/desktop/twitter.svg` | `icons/social/twitter.svg` | 21×18 | Twitter link | Decorative inside an accessibly named link. |
| `shared/desktop/youtube.svg` | `icons/social/youtube.svg` | 21×20 | YouTube link | Decorative inside an accessibly named link. |
| `shared/desktop/arrow.svg` | `icons/ui/arrow.svg` | 43×14 | Text-arrow CTA | Decorative beside descriptive CTA text. |
| `pricing/desktop/check.svg` | `icons/ui/checkmark.svg` | 18×15 | Pricing comparison | Decorative; entitlement state must also be available to assistive technology. |
| `shared/mobile/menu.svg` | `icons/ui/menu.svg` | 20×6 | Mobile menu trigger | Decorative inside a labelled button. |
| `shared/mobile/close.svg` | `icons/ui/close.svg` | 16×15 | Mobile menu close state | Decorative inside a labelled button. |
| `shared/desktop/logo.svg` | `logos/photosnap.svg` | 170×16 | Header and footer brand link | Brand image; the enclosing Home link supplies navigation semantics. |
| `favicon-32x32.png` | `favicons/favicon-32x32.png` | 32×32 | Browser favicon | Browser chrome asset; select it in the later layout step. |
