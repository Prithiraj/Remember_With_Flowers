# Awe Flowers & Potted Plants — Website Design & Implementation Plan

> Repository: `Prithiraj/Remember_With_Flowers`  
> Deployment target: GitHub Pages  
> Status: Implemented; publishing through GitHub Pages  
> Business target: **Awe Flowers & Potted Plants**, the current business resolved by the Google Place ID supplied during research. The stale “Remember With Flowers” name/address will not be presented as the current business.

## 1. Evidence baseline

Production copy uses only evidence-backed facts from the current Awe Flowers storefront and business research:

- Business: **Awe Flowers & Potted Plants / Awe Flowers**.
- Address: **205 N Federal Hwy, Unit G, Lake Worth, FL 33460**.
- Phone: **(561) 659-7174**.
- Founded by **Patricia Sheldon in 2017**, according to the current About page.
- Store hours: **Monday–Friday, 9:00 AM–3:00 PM; Saturday–Sunday closed**.
- Published local delivery cutoff: **1:00 PM Monday–Friday**.
- Delivery and pickup are offered; same-day local delivery is advertised subject to the shop’s cutoff/availability.
- Named delivery areas include **Lake Worth, Lake Worth Beach, Lantana, and Boca Raton**.
- Current positioning: real local florist, florist-designed, hand-delivered, personal service.
- Existing slogan: **“Uniquely designed with YOU in mind.”**
- Current categories include birthday, sympathy/funeral, just because, love/romance, plants/orchids, Florist’s Choice, custom designs, and wedding florals.
- The current Lovingly storefront displays a 4.9 aggregate rating and 3,700+ customers. Attribution remains explicit.

### Evidence exclusions / caution

- Do not use the stale `Remember With Flowers / 1909 Pierce Dr` information as current business data.
- Do not invent delivery fees, guarantees beyond current shop wording, prices, product availability, social URLs, legal entity status, or policies.
- The GitHub Pages deployment is a preview and ships `noindex` until the business approves production-domain use.

## 2. Audience

1. Local gift senders shopping for birthdays, anniversaries, romance, congratulations, or “just because.”
2. Out-of-area customers sending flowers to Lake Worth-area recipients and looking for a real local florist.
3. Sympathy/funeral customers who need clarity, sensitivity, human help, and dependable fulfillment.
4. Customers seeking distinctive, custom, tropical, orchid, plant, wedding, or Florist’s Choice work.

The design should quickly answer: Is this local? Is the work distinctive? Can I trust the florist? Can they deliver or prepare pickup in time? Can I call a person?

## 3. Conversion goals

**Primary:** Shop Flowers — deep-link to the business’s existing live commerce experience.

**Secondary:** Call the Florist, Florist’s Choice, Get Directions, Explore Plants & Orchids, Discuss a Custom Design.

Mobile conversion rail: **Shop · Call · Directions**.

## 4. Creative direction

### Tropical Botanical Atelier

The real portfolio includes sculptural tropical flowers, orchids, vivid coral/orange arrangements, greens, cabbage roses, lilies, and restrained sympathy work. The UI should be **quiet, premium, warm, editorial, and distinctly South Florida**, letting the actual flowers provide the spectacle.

The supplied inspiration references inform:

- editorial serif headlines and generous margins;
- cream/off-white canvas with deep green grounding;
- large hero florals instead of generic lifestyle photography;
- compact occasion cards for commerce;
- premium print-like rules, labels, and section markers;
- simple mobile-first conversion hierarchy.

Avoid generic blush wedding templates, fake luxury language, marketplace density, or game-like interactions.

### Reference-image synthesis

The three supplied mockups are treated **only as visual references**. Their names, addresses, phone numbers, prices, review text, opening hours, delivery claims, and product names are not business evidence and are not copied into the site.

Reference files reviewed:

- `floral-website-concept-local(20260908-135712).png`
- `floral-website-concept-ecommerce(20260908-135709).png`
- `floral-website-concept-editorial(20260908-135708).png`

- **Local-florist reference:** borrow the immediate local-service hierarchy — prominent hours, call, directions, address, and a strong photographic hero. For Awe Flowers this becomes a verified Mon–Fri 9–3 hours pill plus a three-part Call / Hours / Visit information strip.
- **E-commerce reference:** borrow the compact occasion-shopping rhythm, dark botanical commerce banner, clear primary shopping CTA, and mobile conversion density. No sample prices or invented “best sellers” are copied.
- **Editorial reference:** borrow the warm ivory canvas, high-contrast serif typography, print-like spacing, fine borders, and restrained botanical ornament. Real Awe Flowers imagery replaces the mockup bouquets.

The final blend is intentionally not a copy of any single reference: **local-business utility + commerce clarity + editorial warmth**.

## 5. Color system

| Token | Value | Use |
|---|---:|---|
| Botanical ink | `#173229` | Primary headings/nav/footer |
| Deep leaf | `#24483A` | Buttons and dark surfaces |
| Warm ivory | `#F7F3EA` | Main canvas |
| Paper white | `#FFFDF8` | Cards and overlays |
| Warm stone | `#E7DED0` | Rules/borders |
| Sage | `#A7B39C` | Quiet botanical accents |
| Persimmon | `#D96847` | Primary floral accent |
| Orchid plum | `#8C426F` | Secondary floral accent |
| Text charcoal | `#252A26` | Body text |

## 6. Typography

- **Display:** Fraunces variable serif.
- **Body/UI:** Manrope variable sans.
- `font-display: swap` via Google Fonts; robust system fallbacks.

## 7. Image strategy

### Real business photography first

Use actual Awe Flowers gallery images from the current business-controlled storefront / Cloudinary: coral/orange florals, planted greenery, branded arrangements, orchids, and tropical work.

### Decorative visuals

Original CSS/SVG botanical linework and a lightweight Three.js petal field may complement the UI. They are decorative only and must never be represented as purchasable products or actual portfolio work.

### Rights

Business-controlled gallery photography is preferred, but final commercial reuse should still be confirmed by the owner/platform asset holder. Do not use competitor photos, Google/customer-uploaded imagery, or scraped review images.

## 8. Information architecture

1. Utility strip
2. Header/navigation
3. Hero
4. Trust/value strip
5. Shop by occasion
6. Florist’s Choice
7. Real-work gallery
8. Plants & orchids
9. Local story/founder
10. Differentiators
11. Social proof
12. Visit/hours/delivery areas
13. Final CTA
14. Footer

Navigation anchors: **Shop · Florist’s Choice · Gallery · Our Story · Visit**.

## 9. Section-by-section layout

### Utility strip
“Local Lake Worth florist · Mon–Fri 9–3 · Same-day local orders subject to 1 PM cutoff.”

### Header
Text wordmark, simple anchors, phone action, and primary Shop Flowers button. Accessible mobile menu.

### Hero
Split editorial layout with a real Awe Flowers image as the dominant visual.

- Eyebrow: `LAKE WORTH, FLORIDA · LOCAL SINCE 2017`
- Headline: **Flowers designed for the person, not the box.**
- Supporting copy: local, hand-designed, hand-delivered positioning.
- CTAs: **Shop Flowers** and **Call the Florist**.
- Signature: **Uniquely designed with YOU in mind.**

A restrained Three.js petal field sits behind the hero image as atmospheric depth only.

### Local information strip
Three compact, evidence-backed actions inspired by the local-florist reference: **Call the Florist · Shop Hours · Visit Us**. It uses the verified phone, Mon–Fri 9–3 schedule, and Federal Highway address.

### Shop by occasion
A tighter, storefront-like image grid for Birthday, Sympathy, Just Because, Love & Romance, Plants & Orchids, and Custom. It borrows commerce density from the reference while avoiding invented product prices or bestseller claims.

### Same-day information banner
Deep botanical-green conversion banner using only the verified policy language: orders placed by the **1 PM weekday cutoff** are eligible for same-day delivery consideration, subject to availability. The live shop remains the source of truth during checkout.

### Florist’s Choice
Real flower image + copy explaining the designer’s fresh seasonal selection. Direct link to the live Florist’s Choice product.

### Gallery
Editorial masonry grid of real Awe Flowers work. No autoplay carousel. Captions describe style, not invented products.

### Plants & orchids
Quiet green section using real plant/orchid work and a current shop link.

### Story
Founder/local story using only current About-page facts: Patricia Sheldon, founded 2017, local small-business approach, quality design, personal service.

### Differentiators
Designed here, hand-delivered, real human/local service.

### Social proof
Current Lovingly aggregate social proof with explicit attribution and no fabricated testimonials.

### Visit
Address, phone, hours, cutoff, named delivery areas, map, directions and call CTAs.

### Final CTA
Large real flower image + **Make their day feel personal.**

## 10. Three.js / animation plan

Three.js is complementary only:

- a small number of abstract translucent petal forms;
- slow drift/parallax behind hero content;
- no flower-model replacement, gameplay, or pointer-chasing;
- subtle opacity;
- pause when page is hidden;
- static fallback if loading/WebGL fails.

Other motion: 180–260 ms UI transitions, restrained reveal-on-scroll, subtle gallery image scale.

`prefers-reduced-motion: reduce` disables continuous motion and reveal transforms.

## 11. Responsive behavior

- Mobile-first single-column hero.
- ≥44 px primary touch targets.
- Occasion cards collapse to two columns and then one compact row where useful.
- Gallery: 2 columns mobile, 3–4 wider.
- Visit details appear before the map.
- Sticky mobile action bar: Shop, Call, Directions.
- Desktop content capped around 1360 px with generous whitespace.

## 12. Accessibility

Target WCAG 2.2 AA:

- semantic landmarks/heading order;
- skip link;
- accessible menu with `aria-expanded` and Escape handling;
- visible `:focus-visible` states;
- keyboard support;
- ≥44×44 px important tap targets;
- meaningful alt text for real photography;
- decorative WebGL/SVG hidden from assistive tech;
- contrast-safe pairs;
- reduced-motion behavior.

## 13. Performance

- Static HTML/CSS/JS; no build framework.
- Cloudinary image transformations and responsive `srcset` where feasible.
- Hero eagerly loaded; below-fold images lazy-loaded.
- Explicit aspect ratios.
- Three.js is non-critical and module-loaded from CDN.
- No slider or UI framework dependency.
- Two variable font families only.

Targets: LCP < 2.5 s, CLS < 0.10, INP < 200 ms on representative production hosting.

## 14. SEO / local discovery

- Title: **Awe Flowers & Potted Plants | Lake Worth Florist**
- Strong local meta description.
- Open Graph/Twitter metadata using a real Awe Flowers arrangement.
- `Florist` JSON-LD with verified business name, address, phone, hours, served areas, current business website, and image.
- GitHub Pages preview includes `noindex,nofollow` to avoid competing with the established live domain until owner-approved production cutover.

## 15. Rights/licensing notes

- Preferred: photographs already controlled/published by Awe Flowers, pending final commercial reuse confirmation.
- Generated/decorative art must never be described as actual shop work.
- Do not use competitor images, customer-uploaded Google photos, or unverified social imagery.
- Review claims remain source-attributed and should be rechecked before permanent commercial launch.

## 16. Implementation sequence

1. Commit this plan.
2. Build semantic `index.html`.
3. Build responsive design system in `styles.css`.
4. Add accessible interactions and restrained Three.js atmosphere in `app.js`.
5. Add `.nojekyll`.
6. Add GitHub Pages deployment workflow.
7. Validate business links/content.
8. Verify GitHub Actions deployment and Pages URL.
9. Document deployment/rights caveats in `README.md`.

## 17. Acceptance criteria

- No invented prices, hours, services, policies, reviews, products, social links, or current business identity.
- No stale Remember With Flowers identity in customer-facing content.
- Real Awe Flowers photography dominates the visual language.
- Three.js remains decorative, subtle, optional, and reduced-motion aware.
- Shop / Call / Directions are immediately discoverable on mobile.
- Existing live commerce handles shopping rather than a fake checkout.
- Site remains useful if JavaScript/Three.js/WebGL fails.
- Keyboard navigation and visible focus states work.
- Meaningful images have descriptive alt text.
- Responsive from ~320 px through large desktop.
- SEO/Open Graph/JSON-LD present; GitHub Pages preview remains `noindex` until approved for indexing.
- GitHub Pages workflow deploys the site from the default branch.
