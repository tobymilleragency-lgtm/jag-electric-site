# Sage Brand Kit — JAG Electric, LLC
**Handoff to: Forge/Craig | Prepared by: Sage | Date: 2026-06-08**

---

## 1. Remembered Moment

The visitor will remember: the service area glows like a live circuit board — breakers click on, copper traces light up across the 30-mile radius — and then the estimate-prep workbench opens like a real panel schedule, turning their problem into a clean call summary with one tap.

That two-beat sequence is the whole brand promise in motion: JAG has the territory wired, and your job becomes simple.

---

## 2. Visual Fingerprint

**Core metaphor:** A master electrician's panel — controlled, deliberate, zero tolerance for guesswork. Every surface reads like industrial switchgear, not a contractor flyer.

**One-line identity:** Dark-surface precision with a live-circuit glow. Southeast Kansas has power because JAG knows the panel cold.

**What makes this site unmistakable:**
- Switchgear-black backgrounds with copper trace grid lines in the negative space
- Cyan/blue-white glow that activates on hover, scroll, and service-area interactions — not decorative, functional
- Amber used only as a caution/CTA signal, exactly as it reads on real electrical panels
- Copper tone reserved for conductor accents, divider lines, and icon accents — never as a main background
- Typography is precise, condensed, load-bearing — like panel labels and breaker schedules, not marketing soft-speak
- The estimate-prep section looks like a physical breaker panel form — row-by-row diagnostic, not a generic contact form

---

## 3. Color Token System

All tokens use CSS custom properties. Forge should define these on `:root` and reference semantically throughout.

### Surface tokens

| Token | Hex | OKLCH (approx) | Use |
|---|---|---|---|
| `--color-bg-void` | `#0A0C0F` | oklch(6% 0.005 240) | Page background, hero canvas |
| `--color-bg-panel` | `#131820` | oklch(10% 0.01 240) | Card/section backgrounds, modal surfaces |
| `--color-bg-switchgear` | `#1C2230` | oklch(15% 0.015 240) | Nav bar, footer, panel-section bg |
| `--color-bg-surface-raised` | `#242D3E` | oklch(20% 0.02 240) | Hover states, elevated cards |
| `--color-border-subtle` | `#2E3A4F` | oklch(25% 0.02 240) | Dividers, form borders, grid lines |
| `--color-border-active` | `#3D5070` | oklch(35% 0.03 240) | Focus rings, active panel rows |

### Glow/accent tokens (the electricity)

| Token | Hex | Use |
|---|---|---|
| `--color-cyan-primary` | `#00D4FF` | Primary CTAs, active state glow, service-area lit nodes |
| `--color-cyan-dim` | `#0099CC` | Secondary links, underlines, inactive circuit traces |
| `--color-cyan-glow` | `rgba(0,212,255,0.15)` | Box-shadow glow layers, trace highlights on hover |
| `--color-cyan-glow-strong` | `rgba(0,212,255,0.35)` | Lit breaker nodes, active circuit path |
| `--color-white-electric` | `#E8F4FF` | Body text, primary readable content |
| `--color-gray-dim` | `#8A9BBD` | Secondary text, meta labels, captions |
| `--color-gray-muted` | `#4A5568` | Placeholder text, disabled states |

### Warning/CTA amber (use sparingly — three uses max per page)

| Token | Hex | Use |
|---|---|---|
| `--color-amber-warning` | `#F5A623` | Primary CTA button bg, urgent CTAs, caution badges only |
| `--color-amber-dim` | `#C8841A` | Amber hover state |
| `--color-amber-glow` | `rgba(245,166,35,0.2)` | CTA button box-shadow, panel-fault highlight |

### Copper conductor accents

| Token | Hex | Use |
|---|---|---|
| `--color-copper-primary` | `#B87333` | Icon accents, section divider lines, wire-trace motif |
| `--color-copper-bright` | `#D4944A` | Copper hover on icons, active trace segment |
| `--color-copper-muted` | `rgba(184,115,51,0.25)` | Background grid-line texture, watermark traces |

### Hard rules on color usage

- Amber is NEVER a background or nav color. It is exclusively a CTA button, caution badge, or panel-fault indicator.
- Cyan glow effects must use `box-shadow` with spread, not solid backgrounds. The glow should pulse or activate, not sit static as a filled box.
- Copper trace grid lines in the background should be barely visible (8-12% opacity) — texture, not dominant.
- Do NOT use orange as an accent. Orange reads contractor template. Amber is intentional electrical-panel language. They are not the same. Keep amber warm-gold, not red-orange.
- White backgrounds are forbidden. This site lives on dark surfaces.

---

## 4. Typography Direction

**Pairing:** Condensed industrial display + clean humanist sans body. Reads like an electrical panel schedule meets a precision engineering catalog.

### Display / Headlines

**Font:** `Barlow Condensed` (weight 700, 800) — or fallback `Industry` if licensed. Google Fonts source.

- Use for: H1, H2, section titles, service names on cards, panel-row labels
- Tracking: 0.02em to 0.04em (slightly open, like stamped labels)
- Transform: uppercase for H1/H2 section titles only; mixed-case for service names and body headings
- Line height: 1.05–1.1 for big display; 1.25 for mid-size headings
- Size scale: clamp(2.5rem, 5vw, 5rem) for hero H1 — must fit viewport without wrapping awkwardly

**Do NOT use:** Oversize bold serif, script, thin/light weights. Panel labels are not delicate.

### Body / UI

**Font:** `Inter` (weight 400, 500) — already in Google Fonts ecosystem, reliable.

- Use for: body paragraphs, nav items, form labels, list items, meta text
- Size: 1rem base (16px), leading 1.6
- Secondary/meta: 0.875rem, `--color-gray-dim`

### Monospace / Technical labels

**Font:** `JetBrains Mono` or `IBM Plex Mono` (weight 400)

- Use for: panel-row numbers, breaker labels, service-area circuit IDs, estimate-prep line items, diagnostic output text
- This is not decorative — it signals technical precision
- Size: 0.8125rem for inline labels; 0.9375rem for estimate output rows

### Typography rules

- One H1 per page, always. No exceptions.
- Panel-row labels and estimate-prep output always use mono.
- No centered body paragraphs except short 2-line pull quotes.
- Headings that describe services use mixed-case, not UPPERCASE.
- No italic display text. Electrical language doesn't apologize.

---

## 5. Section Design Rules

These are compositional and behavioral rules for every page section. Forge/Craig should treat these as hard constraints, not suggestions.

### Rule 1 — Nav bar

- Full-width dark bar, `--color-bg-switchgear`, no blur/glass effect
- Logo left: JAG Electric wordmark or logomark + wordmark. Logo text in `--color-white-electric`, the "Electric" word or the bolt motif in `--color-copper-primary`
- Nav links center or right, `Barlow Condensed` or `Inter 500`, `--color-white-electric`. Hover: underline in `--color-cyan-primary`
- Single CTA button far right: "Get an Estimate" or "Call (620) 714-1125" — amber button, black text, subtle glow
- Mobile: full-width drawer from right or top, same dark surface, all links including Home and Contact visible without scrolling
- Sticky on scroll. No mega-menu needed.

### Rule 2 — Hero (homepage only)

- Full-viewport dark canvas (`--color-bg-void`)
- Headline (H1): "Southeast Kansas Has Power Because JAG Does The Work" or similar (Wordsmith to confirm). Barlow Condensed 800, white electric, very large, left-aligned or centered.
- Sub-headline: one line — 4.9 stars, 50 reviews, Galena KS, 24 years experience. Monospace micro-label style.
- Hero mechanic: the circuit-board service radius. A minimal circuit-board SVG/canvas map of the 30-mile area around Galena KS. On page load, copper trace lines extend outward, nodes blink on at Pittsburg, Joplin, Frontenac, Girard, Columbus. Each lit node = a service area city. Cyan glow pulses on each node when active.
- Primary CTA floats at the bottom of the hero: amber "Schedule My Estimate" and a secondary "View Services" ghost button.
- No stock photo as hero background. The circuit-board map IS the hero. If a real project photo is added, it sits below the fold in a proof strip, not behind the hero text.

### Rule 3 — Trust bar (below hero fold)

- Narrow horizontal strip, `--color-bg-switchgear`
- Five items separated by copper-colored vertical dividers:
  - "4.9 stars — 50 Google reviews"
  - "A+ BBB Accredited"
  - "100% Recommended on Facebook"
  - "Serving Pittsburg KS & 30-Mile Radius"
  - "Residential & Commercial"
- Icon for each in `--color-copper-primary`. Text in `--color-gray-dim` with value in `--color-white-electric`

### Rule 4 — Services section

- NOT a three-column card grid. Use a panel-schedule layout.
- Each service is a full-width row like a breaker panel row: breaker number (mono), service name (Barlow Condensed), short descriptor (Inter), right-side "View Details" arrow link.
- Rows have a left-side copper strip (4px) in `--color-copper-primary` with faint glow
- Hover on a row: `--color-bg-surface-raised` bg + cyan glow on the copper strip
- Services listed (exact, no invention): Panel Upgrades, Residential Rewiring, Lighting & Fixtures, Outlets & Switches, Remodel & New Construction, Commercial Electrical
- This panel-schedule section works on mobile as a stacked list with the same row anatomy, not a collapsed icon grid

### Rule 5 — Service-area circuit section (homepage)

- Full-width dark section, `--color-bg-panel`
- H2: "Wired for Southeast Kansas"
- Left: SVG or Canvas circuit-board radius map — Galena KS center point, 30-mile radius, city nodes that light on scroll. Labels: Pittsburg KS, Galena KS, Joplin MO, Frontenac KS, Girard KS. Each node links to its /service-area/[city] page.
- Right: short copy block + "See Full Service Area" CTA
- Copper trace lines from center to each node. Nodes use cyan glow when activated by scroll position.
- Do not claim every town in the radius as a "top market." Brief says roughly 30 miles — show the geography, let the copy say "call to confirm coverage for your address."

### Rule 6 — Reviews section

- Three stacked proof cards, centered, `--color-bg-panel`
- Each card: dark background, left cyan accent border, star row (amber stars — the one color-appropriate use of amber in a non-CTA role), quote text, reviewer first name only (no invented full names)
- Approved quotes from brief: "The work is high quality!" / "A great choice if you want quality work without hassle." / "Jag Electric and the technician Jacob did a wonderful job!"
- Source label: "Google Review" in mono gray. No star counts or review dates invented.
- CTA below: "See All Reviews" linking to /reviews

### Rule 7 — Estimate-prep workbench section / page

- This is the site's second signature mechanic. It looks like a breaker panel form.
- H2: "Tell JAG What You're Working With"
- The form is a vertical series of diagnostic rows, each styled like a panel-schedule entry:
  - Row 1: "Service type" — radio buttons styled as breaker switches (Panel Upgrade / Rewiring / Lighting / Outlets-Switches / New Construction / Commercial / Other)
  - Row 2: "Describe the issue or scope" — textarea styled in dark panel surface with mono font, cyan focus ring
  - Row 3: "Property type" — radio: Residential / Commercial
  - Row 4: "Approximate timing" — radio: ASAP / This month / Planning ahead
  - Row 5: "Your name and best contact number" — two text fields
- On submit: form is NOT wired to a CRM. It builds a visible "Estimate Summary" panel that shows the user a formatted text block of their answers, formatted like a real estimate request, with a pre-populated "tel:" and "mailto:" link. CTA: "Call JAG Now — (620) 714-1125" and "Email this summary to jag.electric@yahoo.com." No fake "Sent!" confirmation.
- The submit button is amber. The summary output box is mono text in a dark code-block style panel.

### Rule 8 — About section / page

- Left: copy block — Joe Gendre, LLC founded 2019, BBB A+ accredited since 2020, residential and commercial, limited evening and weekend appointments, honest estimates.
- Right: photo slot labeled [Joe Gendre / Team Photo — placeholder until real photo confirmed]. If no real photo, use a dark radial gradient panel with the JAG logomark and a caption: "Photo coming soon — real people, real work."
- Do NOT generate a stock photo of a smiling electrician and label it as JAG staff. It is not.
- Hours copy: "Call to schedule — limited evening and weekend appointments available." No invented 24/7 or emergency claims.

### Rule 9 — Service pages (/services/[slug])

- Each page opens with a panel-row header: service name in Barlow Condensed, mono tag line beneath
- Body: scope description, what JAG does, what the homeowner or business should expect, when to call
- No fake pricing, no fake license numbers, no fake warranties
- Internal links: related services, service-area reference, estimate-prep CTA
- Each page must have route-specific title, meta description, and H1

### Rule 10 — City/service-area pages (/service-area/[city])

- H1 uses the city name directly: "Electrician in Pittsburg, KS" etc.
- Body: practical local context — distance from Galena, what residents/businesses typically need, who JAG has served in the area (no invented customer names)
- Coverage honesty: "JAG Electric serves [City] and the surrounding area. Call (620) 714-1125 to confirm availability for your address."
- Circuit map callout: small version of the service-area map with the relevant city node lit
- Estimate-prep CTA at bottom

### Rule 11 — Footer

- Three-column dark footer, `--color-bg-switchgear`
- Col 1: JAG logomark + address: 807 E 7th St, Galena, KS 66739, phone, email
- Col 2: Services nav (all six service pages linked)
- Col 3: Quick links: Home, About, Service Area, Reviews, Get an Estimate
- Bottom bar: "JAG Electric, LLC — BBB A+ Accredited — © 2024" and sitemap link
- No fake social proof badges, no invented awards

---

## 6. Logo Direction

**Form:** Wordmark + bolt icon. Simple, readable at small sizes, works in dark/light contexts.

**Icon concept:** A stylized lightning bolt integrated with a circuit-trace line or breaker switch silhouette. The bolt is NOT a cartoon spark. It should feel like a symbol from an electrical schematic — precise, geometric, minimal.

**Preferred rendering:** SVG, inline in code. Vector output from Recraft v4 Pro if generated.

**Wordmark:** "JAG Electric" in Barlow Condensed 800. "JAG" in `--color-white-electric`, "Electric" in `--color-cyan-primary`. Or: "JAG" in copper, "Electric" in white. Two options to test.

**Tagline beneath (optional):** "Licensed · Galena, KS" in mono 0.75rem `--color-gray-dim`.

**Logo clear space:** Minimum 16px all sides. Never on a white background in this context.

**Logo variants needed:**
- Primary: dark bg, cyan-electric wordmark
- Reversed: white wordmark for dark photography overlays
- Mono: single-color white for embossed/print use
- Favicon: bolt icon only, 32x32 / 64x64, cyan on void-black

**Rejected logo directions:**
- Thick block-letter yellow contractor name logo (reads like a fleet-truck decal)
- Swoosh or arc around the name
- Gradient fills on the bolt
- Comic-style spark/lightning emoji
- House outline or electrical socket as icon

---

## 7. Asset Inventory / Slot Plan

Forge should hold these slots. Each slot has an ID, intended section, source status, and what to use until real assets arrive.

| Slot ID | Section | Page(s) | Status | Current direction |
|---|---|---|---|---|
| `hero-circuit-map` | Hero | / | REQUIRED / BUILD | SVG/Canvas circuit board service radius map — Forge builds this as a live interactive component, not an image |
| `trust-bar-icons` | Trust bar | / | BUILD | SVG icons: star, shield-check, thumbs-up, map-pin, building — in copper, inline SVG |
| `services-panel-icon-set` | Services | /, /services/* | BUILD | Minimal line-icon set (panel box, wire coil, lightbulb-minimal, outlet, hammer+wire, building grid) — copper color, SVG, not stock icons |
| `estimate-workbench` | Estimate-prep | /estimate-prep | BUILD | Interactive panel-form component with local JS summary generator |
| `review-cards-3` | Reviews | /, /reviews | APPROVED/COPY-VERIFIED | Use three confirmed quotes from brief — no invented names, Google source label |
| `joe-gendre-photo` | About | /about | PLACEHOLDER | Dark panel with JAG logomark — do NOT generate a stock electrician photo and label it Joe Gendre |
| `project-photo-1` | Proof strip | / | PLACEHOLDER | If added: must be labeled "Representative electrical work — not a JAG project photo" until real photos are confirmed |
| `service-area-mini-map` | City pages | /service-area/* | BUILD | Small circuit-node map variant showing relevant city lit, inline SVG per city |
| `logo-primary-svg` | Nav, footer | All | BUILD | SVG bolt + wordmark per logo direction above |
| `favicon-svg` | `<head>` | All | BUILD | Bolt icon 64x64 SVG → .ico |
| `og-image` | Meta | All | BUILD | 1200x630 dark bg, JAG logo, tagline, contact — static PNG, no fake project photos |
| `sitemap.xml` | / | N/A | BUILD | All routes from brief |
| `robots.txt` | / | N/A | BUILD | Standard allow-all with sitemap reference |

---

## 8. Forbidden / Rejected Visual Styles

Forge, Craig: if any of these appear in the build, reject before deploy.

**Forbidden imagery:**
- Futuristic robotic arms, holographic circuit holograms, AI/sci-fi electrical concepts — this is a real working electrician's site, not a tech startup
- Stock photo of a smiling electrician labeled as Joe or JAG staff
- Generic construction worker holding a hard hat (wrong trade)
- Fake HUD readouts or floating dashboard UI pretending to be electrical diagnostics
- Blue-orange gradient hero (the exact pattern this brief explicitly bans)
- Any image labeled "JAG project" unless Toby confirms a real photo from JAG Electric

**Forbidden language (customer-facing pages):**
- "Available 24/7" — brief says do not claim, Yelp says open 24h but GBP says closes 5pm
- "Guaranteed same-day service"
- Any specific license number not confirmed
- "Emergency service" as a blanket marketing claim
- "Locally trusted for X years" with a number not from the brief (24 years is from HomeAdvisor, can reference "over 20 years of experience" conservatively)
- "Financing available"
- Fake form submission confirmations ("Your request was sent!")

**Forbidden design patterns:**
- White or light backgrounds
- Three-column icon card grid for services (use panel-schedule layout instead)
- Orange accent color (amber only, and sparingly)
- Any section that reuses the same card component structure from a prior contractor template
- Generic "hero + cards + process steps + testimonials + CTA + footer" layout — this brief explicitly demanded something different
- Animated SVG spark trail on every scroll event (decorative, not functional)
- Stock electrical blueprint as a background texture — it reads generic

---

## 9. Motion Language

**The two interactive mechanics:**

1. **Circuit-map activation** (hero and service-area section): Copper trace lines extend from center (Galena) outward to city nodes on page load / scroll entry. Nodes pulse with cyan glow when activated. Implementation: SVG path stroke-dashoffset animation or Canvas draw loop. Target FPS: 60fps on desktop, degrade gracefully on mobile (static SVG map with CSS-only pulse on city nodes). Must dispose properly on unmount.

2. **Estimate-prep panel** (workbench section): Each form row clicks/slides into position with a subtle mechanical feel — 100ms ease-in-out per row. On summary generation, the output panel fades in with a short mono-typewriter text reveal. Nothing aggressive. The mechanic says "controlled, deliberate," not "flashy."

**General motion rules:**
- Hover states: 150ms ease, never instant snap
- Section reveals: scroll-driven opacity + 20px translateY lift, staggered 80ms per element
- Glow effects: CSS `box-shadow` only, not blinking/strobing — a steady warm pulse using `animation: pulse 2.5s ease-in-out infinite` at 0.8-1.0 opacity range
- No parallax on mobile
- `prefers-reduced-motion: reduce` — strip all animation, preserve functional UI

---

## 10. Art Direction Notes for Forge

**Overall posture:** Surgical, not flashy. The site earns trust by looking like the person who runs it knows exactly what they are doing with a panel. Every decision reads deliberate.

**Homepage flow order:**
1. Nav (sticky)
2. Hero — full-viewport circuit map + H1 + trust indicators + CTA
3. Trust bar
4. Services panel-schedule section
5. "Wired for Southeast Kansas" circuit-area section
6. Three review cards
7. Estimate-prep workbench teaser (short) + "Build My Estimate" link to /estimate-prep
8. Footer

**Service pages flow:**
1. Panel-row page header (service name, H1)
2. Scope description (what JAG does, what to expect)
3. Related services sidebar or bottom links
4. Estimate-prep CTA row
5. Footer

**City pages flow:**
1. H1 "Electrician in [City], KS/MO"
2. Local context paragraph
3. Mini circuit map with city node lit
4. Services available in this area
5. Coverage honesty note
6. Estimate-prep CTA
7. Footer

**Responsive priority:**
- Mobile first for content layout
- Circuit map: interactive on desktop, static SVG with CSS node glow on mobile (no canvas overhead)
- Estimate-prep workbench: full panel form on desktop, vertically stacked rows on mobile with same mono/dark styling
- Nav: hamburger → full-width dark drawer on mobile, all links exposed including Home

**Tech stack preferences:**
- Vanilla CSS with CSS custom properties for the full token system
- GSAP or native CSS animation for circuit map traces (no heavy Three.js unless circuit map requires it — SVG/Canvas is sufficient)
- No UI component library — every component is bespoke to this brand
- No generic Tailwind utility blobs — if Tailwind is used, it must respect the token system via config
- Inline SVG for all icons and logo (no icon font dependencies)

---

## 11. What This Site Must Never Be

In plain terms for every person who touches this build:

- It must never look like it was assembled from a contractor template.
- It must never use warm orange as a brand color.
- It must never invent facts — not license numbers, not emergency service, not warranties.
- It must never use a stock electrician photo and pass it off as JAG.
- It must never send a fake form submission.
- It must never be a one-pager when it needs 18 real routes.
- It must never use a sci-fi visualization for a real working electrician's service pages.
- It must never make the service area circuit map gimmicky. If the map feels like a generic infographic, simplify it until it feels surgical.

---

## 12. Design Gate Checklist for Forge/Craig

Before any page is accepted, confirm each item:

- [ ] Nav includes visible mobile drawer with Home + all core links
- [ ] H1 is unique per page, present, correct for the business
- [ ] Hero circuit map is interactive on desktop, static-but-branded on mobile
- [ ] Service section uses panel-schedule row layout, not card grid
- [ ] Trust bar appears below hero with verified facts only
- [ ] Estimate-prep form generates a local call summary, no fake send
- [ ] CTA phone number throughout = (620) 714-1125
- [ ] Email = jag.electric@yahoo.com
- [ ] Address = 807 E 7th St, Galena, KS 66739
- [ ] No 24/7, no emergency claims, no invented license number
- [ ] Real photo slots are labeled as placeholders unless Toby confirms real JAG photos
- [ ] All 18 required routes return 200 with route-specific content
- [ ] sitemap.xml lists all routes
- [ ] robots.txt present and correct
- [ ] Desktop screenshot: visually distinct from any prior contractor template build
- [ ] Mobile screenshot: panel-schedule rows stack correctly, no overflow
- [ ] Console: zero material errors

---

*Sage handoff complete. This document is the visual contract for JAG Electric.*
*Craig/Forge consume everything above. Do not mutate other files.*
*If real JAG photos are provided by Toby before launch, Sage must re-evaluate photo slots and update the asset inventory before deploy.*
