# Awe Flowers — GitHub Pages Redesign

A polished, mobile-first conversion site for **Awe Flowers & Potted Plants** in Lake Worth, Florida.

The repository name is retained as `Remember_With_Flowers`, but the customer-facing site uses the **current business identity resolved from the supplied Google Place ID: Awe Flowers**.

## What is included

- Evidence-backed business content only.
- Real Awe Flowers gallery photography as the primary visual language.
- Editorial “Tropical Botanical Atelier” design direction.
- Conversion paths to the business’s existing live commerce pages.
- One-tap call and directions actions.
- Accessible navigation, visible focus states, semantic HTML and reduced-motion behavior.
- Lightweight optional Three.js petal atmosphere behind the hero.
- Schema.org `Florist` JSON-LD and Open Graph metadata.
- Static fallback if JavaScript/WebGL/CDN loading fails.
- GitHub Pages deployment workflow.
- Full design rationale in [`DESIGN_PLAN.md`](./DESIGN_PLAN.md).

## Preview / indexing status

The GitHub Pages deployment intentionally includes:

```html
<meta name="robots" content="noindex,nofollow">
```

Awe Flowers already has an established live storefront. Keeping this redesign preview out of search prevents duplicate local-business pages from competing until the business explicitly approves a production-domain cutover.

## Primary external destinations

Shopping and product/category CTAs hand off to the current Awe Flowers storefront at `aweflowersllc.com`. This repository does **not** simulate checkout, inventory, delivery availability or pricing.

## Business facts used

- Awe Flowers & Potted Plants / Awe Flowers
- 205 N Federal Hwy, Unit G, Lake Worth, FL 33460
- (561) 659-7174
- Monday–Friday 9 AM–3 PM; Saturday–Sunday closed
- Published weekday delivery cutoff: 1 PM
- Founded by Patricia Sheldon in 2017, per the current shop About page
- Named service areas: Lake Worth, Lake Worth Beach, Lantana, Boca Raton
- Real local florist; florist-designed; hand-delivered
- “Uniquely designed with YOU in mind.”

## Image rights note

The site foregrounds photographs currently published in the Awe Flowers business gallery / business storefront Cloudinary account. They are treated as business-controlled production candidates, but final commercial reuse/rehosting permission should still be confirmed with the owner/platform asset holder.

Competitor imagery, customer-uploaded Google imagery and unverified social imagery are not used.

## Local development

No build step is required. Serve the repository as static files, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

Push to `main`. The workflow in `.github/workflows/deploy-pages.yml` uploads the repository as a Pages artifact and deploys with the official GitHub Pages actions.

Expected project URL after successful deployment:

`https://prithiraj.github.io/Remember_With_Flowers/`

## Production cutover checklist

Before using the redesign as the official indexed business website:

1. Confirm image reuse rights.
2. Confirm current operating/legal entity details if adding `legalName` to structured data.
3. Verify current phone, address, hours, delivery cutoff and service areas.
4. Verify official social account URLs before adding them.
5. Decide whether ecommerce remains on the current storefront or is migrated.
6. Remove `noindex,nofollow` only after the official-domain/canonical strategy is approved.
7. Update canonical and Open Graph URLs for the production domain.


## Reference images

The three supplied flower-shop mockups are used only for visual direction: local conversion hierarchy, compact commerce patterns, warm photo-led layouts, and editorial typography. Their fictional products, prices, reviews, addresses, hours, policies, and other business facts are intentionally not copied. All live copy in this prototype is based on the documented Awe Flowers evidence baseline in `DESIGN_PLAN.md`.
