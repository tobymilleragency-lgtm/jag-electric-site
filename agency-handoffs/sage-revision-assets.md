# Sage Revision — Photo & Visual Asset Inventory
# JAG Electric, LLC — Revision 2026-06-08
# Prepared by: Sage | Consumes: shared-brief.md, sage-brand.md
# Handoff to: Forge/Craig (implementation), Eddie (motion/video), Rex (photo sourcing)

---

## REVISION PURPOSE

The existing brand and design system (sage-brand.md) is structurally sound and stays intact.
This document adds what was missing: a slot-by-slot photo/visual asset inventory for every
route, a representative-photo labeling policy, visual quality minimums, color/type refinements
from review, and a hard banned-imagery registry.

Forge/Craig: consume both sage-brand.md and this file. This file takes precedence on
photo-slot decisions. Do not remove photo slots that passed prior QA — this is slot-level
audit only.

---

## PHOTO LABELING POLICY (Non-Negotiable)

These rules apply to every image on the site regardless of source:

REAL CONFIRMED PHOTO
  - A photo supplied directly by Toby or Joe Gendre from actual JAG Electric jobs.
  - May be labeled in alt text as the scene it depicts.
  - No disclaimer overlay required — just honest descriptive alt text.
  - Status tag in this doc: REAL/CONFIRMED

REPRESENTATIVE PHOTO
  - A stock, licensed, or generated image depicting electrical work of the same type
    JAG performs, but NOT from a JAG job.
  - MUST carry an honest alt text: e.g. "Electrician upgrading a residential breaker panel
    — representative image" — never "JAG Electric technician installing panel."
  - Internally tagged in code comments: <!-- representative photo, not a JAG job -->
  - Status tag in this doc: REPRESENTATIVE/[source]
  - Customer-facing pages must NOT include the words "planning example," "generated
    placeholder," "visual proof," "asset plan," "showpiece," or "agency" anywhere visible.

GENERATED IMAGE
  - An AI-generated photo-realistic image of electrical work.
  - Same rules as REPRESENTATIVE PHOTO above.
  - Alt text must be accurate to what is depicted, not invented.
  - Status tag in this doc: GENERATED/[model or prompt family]

BRANDED PLACEHOLDER
  - A non-photo treatment: the JAG logomark on a dark panel, a material-board card,
    a field-note style slot, or a scope-worksheet visual.
  - Used when no representative photo is appropriate (staff/team slots).
  - Status tag in this doc: BRANDED-PLACEHOLDER

QUARANTINE
  - A slot where a prior photo was rejected (sci-fi, fake, wrong trade, etc.).
  - Must not be refilled with a near-duplicate from the same prompt family.
  - Replacement must use a clearly different source or prompt direction.
  - Status tag: QUARANTINE + reason + replacement direction

---

## VISUAL QUALITY MINIMUMS

Any image that reaches a customer-facing slot must pass all five of these:

1. TRADE ACCURACY
   Does the image show a real electrical task matching the service page/section?
   A commercial panel room is not the right image for a "lighting fixtures" service page.
   A residential kitchen renovation is not electrical work.
   Fail = wrong trade or wrong scope for the slot.

2. REALISM QUALITY
   No glowing circuits on human hands. No holographic schematics floating in air.
   No cinematic sparks arcing from open breakers. No robot arms wiring panels.
   The scene should look like a real licensed electrician's working environment.
   Fail = sci-fi / fake / concept-art aesthetic.

3. COMPOSITION QUALITY
   No clipped faces, no extreme fish-eye distortion, no obvious AI generation artifacts
   (extra fingers, melted tools, distorted conduit geometry).
   Image should hold up at full-width on desktop without looking broken.
   Fail = visible generation artifacts or structurally broken composition.

4. HONEST LABELING
   Alt text describes what the image actually shows, not what we wish it showed.
   No invented person names in alt text unless the person is confirmed.
   Fail = misleading or invented alt text.

5. SLOT FIT
   Does the image fill the section it sits in without looking pasted-in?
   Dark-surface site means images should have some visual weight — avoid thin,
   washed-out, or bright-white-background images dropped onto the dark UI.
   Prefer images with dark backgrounds, natural lighting, or a dark overlay applied.
   Fail = visually disconnected from the site's dark switchgear surface language.

---

## ROUTE-BY-ROUTE PHOTO SLOT INVENTORY

Format per slot:
  Slot ID | Section | Route | Status | Source | Alt text policy | QA verdict | Notes

---

### ROUTE: / (HOMEPAGE)

---

SLOT: hero-circuit-map
Section: Hero
Route: /
Status: BUILD (not a photo slot)
Source: SVG/Canvas — Forge-built interactive component
Alt: Not applicable — interactive graphic, not an image tag
QA: APPROVED
Notes: Stays as-is per sage-brand.md. The circuit map IS the hero. No photo replaces it.
No stock hero background needed or allowed here.

---

SLOT: homepage-proof-strip-1
Section: Visual proof strip (new — below trust bar, above services)
Route: /
Status: REPRESENTATIVE/stock-electrical-licensed
Source: Stock photo service (Unsplash/Shutterstock/AdobeStock) — search: "electrician
  panel upgrade residential" or "licensed electrician wiring breaker box"
Alt: "Electrician working on a residential breaker panel — representative of services
  offered by JAG Electric"
QA: REPLACE — this slot did not exist before; Forge must add a horizontal photo proof
  strip between the trust bar and the services panel-schedule section. One wide image,
  full-width, dark overlay applied, site copy overlay optional. Adds visual weight the
  homepage was missing.
Notes: Do NOT use a generated AI image for this slot on first pass — use a real licensed
  stock photo. If no acceptable stock photo clears the quality minimums, use BRANDED-PLACEHOLDER
  (dark panel + JAG mark) rather than a fake AI scene. Representative label required.

---

SLOT: homepage-proof-strip-2
Section: Visual proof strip (second panel, staggered with strip-1 or in a two-up layout)
Route: /
Status: REPRESENTATIVE/stock-electrical-licensed
Source: Search: "commercial electrician conduit installation" or "electrician running
  wiring in commercial building ceiling"
Alt: "Electrician installing commercial conduit — representative of commercial services
  by JAG Electric"
QA: REPLACE — new slot needed. If homepage proof strip is a single wide image, this slot
  becomes the service-area section's background treatment instead (dark overlay on a
  regional aerial or map photo).
Notes: Either 2-up proof strip or repurpose as service-area section background. Forge decides
  on layout; both options are acceptable. Representative label required.

---

SLOT: review-cards-3
Section: Reviews
Route: /
Status: APPROVED/COPY-VERIFIED (no photos in cards)
Source: No photo — dark card with cyan accent border and amber star row
Alt: Not applicable — no image
QA: KEEP
Notes: Do not add fake reviewer avatar photos. The approved review quotes stand as text only.

---

SLOT: estimate-workbench
Section: Estimate-prep workbench
Route: /
Status: BUILD (interactive component, not a photo)
Source: Forge-built
Alt: Not applicable
QA: KEEP — no photo needed here, dark panel form is correct

---

SLOT: homepage-footer-background
Section: Footer
Route: /
Status: BUILD (CSS surface, no photo)
Source: --color-bg-switchgear token, no image
QA: KEEP

---

### ROUTE: /services (SERVICE INDEX)

---

SLOT: services-index-header
Section: Page header / above panel-schedule list
Route: /services
Status: REPRESENTATIVE/stock-electrical-licensed
Source: Wide horizontal image — search: "electrician tools on workbench" or
  "electrical contractor measuring tape panel" — dark, practical, trade-accurate
Alt: "Electrical contractor tools and panel — JAG Electric service overview"
QA: REPLACE — the services index page currently has no visual weight above the panel-
  schedule list. A single wide header image (dark overlay applied) gives the page presence
  without adding fake project photos.
Notes: Image should not show a specific job site since this is the index. A tools/equipment
  close-up or workbench scene reads correctly here.

---

### ROUTE: /services/panel-upgrades

---

SLOT: panel-upgrades-hero-image
Section: Page header / service detail image
Route: /services/panel-upgrades
Status: REPRESENTATIVE/stock-electrical-licensed
Source: Search: "200 amp panel upgrade residential electrician" or "breaker panel
  replacement before after" — close-up of an open panel with neat wiring, real job
Alt: "Residential electrical panel upgrade showing organized breaker wiring — representative
  of panel upgrade services by JAG Electric"
QA: REPLACE — this page needs at minimum one trade-accurate photo of an actual
  breaker panel. Close-up, real wiring, no sci-fi glow.
Notes: Avoid images where the panel is sparking, overloaded, or catastrophically failed
  (sensationalistic). Show a professional working environment.

---

SLOT: panel-upgrades-inline-detail
Section: Mid-page inline image (alongside copy)
Route: /services/panel-upgrades
Status: REPRESENTATIVE/stock-electrical-licensed or BRANDED-PLACEHOLDER
Source: Search: "electrician labeling breaker panel" or "electrician with multimeter
  at panel"
Alt: "Electrician testing circuit breakers — representative of JAG Electric panel work"
QA: REPLACE — inline image helps the page reach content depth and breaks up the copy.
  If no acceptable stock image is found, use a dark material-board style card showing
  the scope items (200A service, ground fault protection, etc.) as a visual alternative.

---

### ROUTE: /services/rewiring

---

SLOT: rewiring-hero-image
Section: Page header image
Route: /services/rewiring
Status: REPRESENTATIVE/stock-electrical-licensed
Source: Search: "residential electrical rewiring old wiring replacement" or
  "electrician pulling new wire through wall"
Alt: "Electrician running new electrical wiring through a residential wall — representative
  of rewiring services by JAG Electric"
QA: REPLACE — rewiring page needs a photo that communicates scope (old wiring out,
  new in). A wall-open rewiring shot or conduit-pull shot works.
Notes: Avoid images of burnt/damaged wiring shown for shock value. Show the professional
  installation process.

---

SLOT: rewiring-inline-detail
Section: Mid-page inline
Route: /services/rewiring
Status: REPRESENTATIVE/stock-electrical-licensed or BRANDED-PLACEHOLDER
Source: Search: "knob and tube wiring replacement" or "electrician junction box
  new wiring residential"
Alt: "New electrical wiring being installed in a residential junction box — representative
  of JAG Electric rewiring work"
QA: REPLACE

---

### ROUTE: /services/lighting-fixtures

---

SLOT: lighting-fixtures-hero-image
Section: Page header image
Route: /services/lighting-fixtures
Status: REPRESENTATIVE/stock-electrical-licensed
Source: Search: "electrician installing ceiling light fixture" or "recessed lighting
  installation residential"
Alt: "Electrician installing recessed lighting in a residential ceiling — representative
  of lighting installation services by JAG Electric"
QA: REPLACE — this page needs a photo that is immediately identifiable as lighting
  installation work, not a generic interior design photo.
Notes: Avoid glamour interior photos with no electrician present — those read as
  a design/remodel site, not an electrical contractor. Keep the trade visible.

---

SLOT: lighting-fixtures-inline-detail
Section: Mid-page inline
Route: /services/lighting-fixtures
Status: REPRESENTATIVE/stock-electrical-licensed or BRANDED-PLACEHOLDER
Source: Search: "outdoor security light installation" or "commercial LED fixture
  electrical installation"
Alt: "Commercial LED fixture being wired by an electrician — representative of JAG
  Electric lighting services"
QA: REPLACE

---

### ROUTE: /services/outlets-switches

---

SLOT: outlets-switches-hero-image
Section: Page header image
Route: /services/outlets-switches
Status: REPRESENTATIVE/stock-electrical-licensed
Source: Search: "electrician installing GFCI outlet bathroom" or "replacing
  electrical outlet residential electrician"
Alt: "Electrician installing a GFCI outlet — representative of outlet and switch
  services by JAG Electric"
QA: REPLACE
Notes: GFCI or USB outlet installations read as modern, current-code work — good
  signal for the service.

---

SLOT: outlets-switches-inline-detail
Section: Mid-page inline
Route: /services/outlets-switches
Status: BRANDED-PLACEHOLDER (preferred) or REPRESENTATIVE/stock
Source: If no usable stock: dark scope-worksheet card listing outlet/switch types
  served (standard, GFCI, AFCI, dimmer, USB, 240V appliance outlet)
Alt: "Scope of outlet and switch services offered by JAG Electric" (if card)
  or standard representative alt text if stock image used
QA: REPLACE

---

### ROUTE: /services/remodel-new-construction

---

SLOT: remodel-newcon-hero-image
Section: Page header image
Route: /services/remodel-new-construction
Status: REPRESENTATIVE/stock-electrical-licensed
Source: Search: "electrician rough-in wiring new construction framing" or
  "electrical contractor remodel rough-in"
Alt: "Electrician running rough-in electrical wiring during a home remodel — representative
  of remodel and new construction services by JAG Electric"
QA: REPLACE — this is the highest-value service for project revenue. The image must
  convey scope: wiring during framing, not a finished interior photo.
Notes: Framing-stage rough-in shots communicate "we do the work other trades coordinate
  around" — that is the right message for this service page.

---

SLOT: remodel-newcon-inline-detail
Section: Mid-page inline
Route: /services/remodel-new-construction
Status: REPRESENTATIVE/stock-electrical-licensed
Source: Search: "electrical panel installation new construction" or "commercial
  building rough-in electrical"
Alt: "Panel installation during new construction — representative of JAG Electric
  new construction electrical services"
QA: REPLACE

---

### ROUTE: /services/commercial-electrical

---

SLOT: commercial-hero-image
Section: Page header image
Route: /services/commercial-electrical
Status: REPRESENTATIVE/stock-electrical-licensed
Source: Search: "commercial electrician conduit installation warehouse" or
  "commercial electrical panel room"
Alt: "Electrician installing conduit in a commercial building — representative of
  commercial electrical services by JAG Electric"
QA: REPLACE — commercial page has the highest B2B trust requirement. Image must
  clearly communicate commercial scale: conduit runs, panel room, or commercial
  fixture installation. Not a residential outlet close-up.

---

SLOT: commercial-inline-detail
Section: Mid-page inline
Route: /services/commercial-electrical
Status: REPRESENTATIVE/stock-electrical-licensed or BRANDED-PLACEHOLDER
Source: Search: "three-phase electrical panel commercial" or "commercial lighting
  installation electrician warehouse"
Alt: "Three-phase commercial panel installation — representative of JAG Electric
  commercial services"
QA: REPLACE

---

### ROUTE: /service-area (INDEX)

---

SLOT: service-area-hero-circuit-map
Section: Full-width circuit map (existing design mechanic)
Route: /service-area
Status: BUILD — Forge interactive SVG component
Alt: "Service area map showing JAG Electric's 30-mile coverage radius centered on
  Galena, KS with nodes at Pittsburg, Joplin, Frontenac, and Girard"
QA: KEEP — the existing circuit-map mechanic is correct for this page. No photo
  replaces it.

---

SLOT: service-area-regional-context-image
Section: Below circuit map — regional context strip (new)
Route: /service-area
Status: REPRESENTATIVE/stock-licensed or BRANDED-PLACEHOLDER
Source: If stock: search "Southeast Kansas rural residential neighborhood" or
  "small town commercial street Kansas" — ground-level real photo, not aerial.
  Prefer dark-mood natural light shots. Apply dark overlay to fit site palette.
  If no acceptable stock: use a dark material-board card with a bullet list of
  cities served and a coverage-honesty note.
Alt: "Residential neighborhood in Southeast Kansas — JAG Electric serves communities
  across the 30-mile radius from Galena, KS"
QA: REPLACE — new slot. Adds context below the circuit map, helps city SEO pages
  feel connected to a real geography.
Notes: Do NOT use a satellite/aerial of the region. That reads generic and
  impersonal. Street-level is more credible.

---

### ROUTE: /service-area/pittsburg-ks

---

SLOT: pittsburg-city-mini-map
Section: Inline circuit mini-map (Pittsburg node lit)
Route: /service-area/pittsburg-ks
Status: BUILD — Forge inline SVG variant per sage-brand.md Rule 10
Alt: "Service area map showing JAG Electric's coverage of Pittsburg, KS"
QA: KEEP

---

SLOT: pittsburg-city-photo
Section: City context image (new — below H1 / intro paragraph)
Route: /service-area/pittsburg-ks
Status: REPRESENTATIVE/stock-licensed
Source: Search: "Pittsburg KS downtown" or "Crawford County Kansas residential"
  or "Pittsburg Kansas neighborhood street". Must be clearly a real town photo,
  not a generic suburban stock render.
Alt: "Pittsburg, KS — JAG Electric provides electrical services to homes and
  businesses in the Pittsburg area"
QA: REPLACE — new slot. Every city page should feel like it knows the city,
  not like a generic SEO template. One real-looking town photo does that better
  than any paragraph can.
Notes: Pittsburg is the largest city in the service area. It deserves the strongest
  local visual. Kansas State University campus area photos are findable and real.

---

### ROUTE: /service-area/galena-ks

---

SLOT: galena-city-mini-map
Section: Inline circuit mini-map (Galena node / center point lit)
Route: /service-area/galena-ks
Status: BUILD — Forge inline SVG
Alt: "Service area map showing JAG Electric's home base in Galena, KS"
QA: KEEP

---

SLOT: galena-city-photo
Section: City context image
Route: /service-area/galena-ks
Status: REPRESENTATIVE/stock-licensed or BRANDED-PLACEHOLDER
Source: Search: "Galena Kansas" — Galena is a small historic mining town.
  Real photos may be limited. If no quality stock image: use a BRANDED-PLACEHOLDER
  dark card with the JAG address (807 E 7th St, Galena, KS 66739) and a note:
  "Local to Galena — serving the community since 2019."
Alt: "Galena, KS — home of JAG Electric, LLC at 807 E 7th St"
QA: REPLACE — new slot. If BRANDED-PLACEHOLDER is used, the card copy must read
  as customer-facing ("home base, local business") not as internal labeling.

---

### ROUTE: /service-area/joplin-mo

---

SLOT: joplin-city-mini-map
Section: Inline circuit mini-map (Joplin node lit)
Route: /service-area/joplin-mo
Status: BUILD — Forge inline SVG
Alt: "Service area map showing JAG Electric's coverage of Joplin, MO"
QA: KEEP

---

SLOT: joplin-city-photo
Section: City context image
Route: /service-area/joplin-mo
Status: REPRESENTATIVE/stock-licensed
Source: Search: "Joplin Missouri downtown" or "Joplin MO commercial district"
  Joplin is a larger city — real stock photos exist. Pick one that shows the
  commercial/urban environment since JAG offers commercial electrical there.
Alt: "Joplin, MO — JAG Electric provides electrical contractor services to the
  Joplin area, just across the state line from Southeast Kansas"
QA: REPLACE — new slot.
Notes: Joplin is the highest-population market in the radius. The photo should
  convey an active commercial/residential environment, not rural.

---

### ROUTE: /service-area/frontenac-ks

---

SLOT: frontenac-city-mini-map
Section: Inline circuit mini-map (Frontenac node lit)
Route: /service-area/frontenac-ks
Status: BUILD — Forge inline SVG
Alt: "Service area map showing JAG Electric's coverage of Frontenac, KS"
QA: KEEP

---

SLOT: frontenac-city-photo
Section: City context image
Route: /service-area/frontenac-ks
Status: REPRESENTATIVE/stock-licensed or BRANDED-PLACEHOLDER
Source: Search: "Frontenac Kansas" — small community, limited stock photos.
  If no real photo: BRANDED-PLACEHOLDER with local context copy.
Alt: "Frontenac, KS — JAG Electric serves the Frontenac community for residential
  and commercial electrical needs"
QA: REPLACE — new slot.

---

### ROUTE: /service-area/girard-ks

---

SLOT: girard-city-mini-map
Section: Inline circuit mini-map (Girard node lit)
Route: /service-area/girard-ks
Status: BUILD — Forge inline SVG
Alt: "Service area map showing JAG Electric's coverage of Girard, KS"
QA: KEEP

---

SLOT: girard-city-photo
Section: City context image
Route: /service-area/girard-ks
Status: REPRESENTATIVE/stock-licensed or BRANDED-PLACEHOLDER
Source: Search: "Girard Kansas" or "Crawford County courthouse" (Girard is the
  county seat). County courthouse photos are often public domain.
Alt: "Girard, KS — JAG Electric provides electrical services to Girard and
  Crawford County"
QA: REPLACE — new slot.

---

### ROUTE: /about

---

SLOT: joe-gendre-photo
Section: About page principal photo
Route: /about
Status: BRANDED-PLACEHOLDER (holds until real photo confirmed by Toby)
Source: Dark radial-gradient panel with JAG bolt logomark centered. Caption below:
  "Joe Gendre — Owner, JAG Electric, LLC." No generated face, no stock
  electrician portrait.
Alt: "JAG Electric — photo coming soon"
QA: KEEP (existing policy from sage-brand.md confirmed)
Notes: If Toby supplies a real photo of Joe, Rex/Forge replace this slot immediately
  and update the alt text to: "Joe Gendre, owner of JAG Electric, LLC in Galena, KS."
  Do not generate or use a stock photo of a smiling electrician as a stand-in for Joe.
  This is a hard rule.

---

SLOT: team-or-truck-photo
Section: Secondary about section image (new — adds visual depth)
Route: /about
Status: BRANDED-PLACEHOLDER (until real assets confirmed)
Source: If Toby supplies a truck photo or job-site photo: use that.
  Until then: BRANDED-PLACEHOLDER — dark panel with JAG mark and copy:
  "Real work in Southeast Kansas since 2019."
Alt: "JAG Electric service vehicle and field crew — photo coming soon"
QA: REPLACE — new slot needed. The about page currently has no second visual.
  A truck or field shot adds proof. BRANDED-PLACEHOLDER holds the slot honestly.
Notes: Do NOT generate a truck photo with JAG branding on it — generated branded
  imagery of a specific vehicle is indistinguishable from real fleet photos and
  crosses the fake-proof line.

---

### ROUTE: /reviews

---

SLOT: reviews-page-header-visual
Section: Page header
Route: /reviews
Status: BUILD (no photo — use star/rating visual treatment)
Source: CSS/SVG: large amber star cluster + "4.9" rating display in Barlow Condensed,
  with source labels (Google, Facebook, HomeAdvisor). No photo.
Alt: Not applicable — decorative rating display, text equivalent present in H1
QA: KEEP — no photo needed here. The content IS the proof.

---

### ROUTE: /estimate-prep

---

SLOT: estimate-prep-page (full page)
Section: Entire page
Route: /estimate-prep
Status: BUILD (interactive component, no photos)
Source: Forge-built panel-form component per sage-brand.md Rule 7
Alt: Not applicable
QA: KEEP — no photo needed here. Form and summary output are the content.

---

## COMPLETE ASSET INVENTORY SUMMARY TABLE

Slot ID                        | Route                        | Status                   | QA Verdict
-------------------------------|------------------------------|--------------------------|------------------
hero-circuit-map               | /                            | BUILD                    | KEEP
homepage-proof-strip-1         | /                            | REPRESENTATIVE/stock     | REPLACE (new)
homepage-proof-strip-2         | /                            | REPRESENTATIVE/stock     | REPLACE (new)
review-cards-3                 | /                            | APPROVED/copy-only       | KEEP
estimate-workbench             | /                            | BUILD                    | KEEP
services-index-header          | /services                    | REPRESENTATIVE/stock     | REPLACE (new)
panel-upgrades-hero-image      | /services/panel-upgrades     | REPRESENTATIVE/stock     | REPLACE (new)
panel-upgrades-inline-detail   | /services/panel-upgrades     | REPRESENTATIVE/stock     | REPLACE (new)
rewiring-hero-image            | /services/rewiring           | REPRESENTATIVE/stock     | REPLACE (new)
rewiring-inline-detail         | /services/rewiring           | REPRESENTATIVE/stock     | REPLACE (new)
lighting-fixtures-hero-image   | /services/lighting-fixtures  | REPRESENTATIVE/stock     | REPLACE (new)
lighting-fixtures-inline-detail| /services/lighting-fixtures  | BRANDED-PLACEHOLDER      | REPLACE (new)
outlets-switches-hero-image    | /services/outlets-switches   | REPRESENTATIVE/stock     | REPLACE (new)
outlets-switches-inline-detail | /services/outlets-switches   | BRANDED-PLACEHOLDER      | REPLACE (new)
remodel-newcon-hero-image      | /services/remodel-new-const. | REPRESENTATIVE/stock     | REPLACE (new)
remodel-newcon-inline-detail   | /services/remodel-new-const. | REPRESENTATIVE/stock     | REPLACE (new)
commercial-hero-image          | /services/commercial-elec.   | REPRESENTATIVE/stock     | REPLACE (new)
commercial-inline-detail       | /services/commercial-elec.   | REPRESENTATIVE/stock     | REPLACE (new)
service-area-hero-circuit-map  | /service-area                | BUILD                    | KEEP
service-area-regional-context  | /service-area                | REPRESENTATIVE/stock     | REPLACE (new)
pittsburg-city-mini-map        | /service-area/pittsburg-ks   | BUILD                    | KEEP
pittsburg-city-photo           | /service-area/pittsburg-ks   | REPRESENTATIVE/stock     | REPLACE (new)
galena-city-mini-map           | /service-area/galena-ks      | BUILD                    | KEEP
galena-city-photo              | /service-area/galena-ks      | BRANDED-PLACEHOLDER      | REPLACE (new)
joplin-city-mini-map           | /service-area/joplin-mo      | BUILD                    | KEEP
joplin-city-photo              | /service-area/joplin-mo      | REPRESENTATIVE/stock     | REPLACE (new)
frontenac-city-mini-map        | /service-area/frontenac-ks   | BUILD                    | KEEP
frontenac-city-photo           | /service-area/frontenac-ks   | BRANDED-PLACEHOLDER      | REPLACE (new)
girard-city-mini-map           | /service-area/girard-ks      | BUILD                    | KEEP
girard-city-photo              | /service-area/girard-ks      | BRANDED-PLACEHOLDER      | REPLACE (new)
joe-gendre-photo               | /about                       | BRANDED-PLACEHOLDER      | KEEP
team-or-truck-photo            | /about                       | BRANDED-PLACEHOLDER      | REPLACE (new)
reviews-page-header-visual     | /reviews                     | BUILD/SVG                | KEEP
estimate-prep-page             | /estimate-prep               | BUILD                    | KEEP

KEEP count:   10 slots (already correct, do not change)
REPLACE count: 24 slots (new slots or upgrade required)
QUARANTINE:    0 (none from prior build met the rejection threshold — prior build simply
               lacked photos rather than using wrong photos)

---

## COLOR/TYPE REFINEMENTS (Addendum to sage-brand.md)

These are additions and clarifications only. The full token system in sage-brand.md
is authoritative and unchanged.

### Addition 1 — Photo overlay treatment

All representative/stock photos placed on this dark-surface site must receive:
  overlay: linear-gradient(to bottom, rgba(10,12,15,0.45) 0%, rgba(10,12,15,0.15) 50%, rgba(10,12,15,0.55) 100%)
  This keeps the switchgear-dark surface coherent without crushing the photo detail.
  Do not use a flat 50% black overlay — it destroys image credibility.
  Do not use a cyan color overlay — it makes photos look branded in a fake way.

### Addition 2 — Photo caption / source label treatment

Where a representative photo is visible to the customer, no caption is required
on the customer-facing UI. The honest labeling lives in:
  1. The image alt text (always)
  2. The HTML comment in source (always)
  3. This asset inventory document (always)
  The customer-facing page shows only the trade-accurate photo and its alt text.
  There is no "stock photo" watermark on the customer page — just honest alt text.

### Addition 3 — BRANDED-PLACEHOLDER card styling

When a BRANDED-PLACEHOLDER is used instead of a photo, the card must:
  - Background: --color-bg-panel (#131820)
  - Border: 1px solid --color-border-subtle (#2E3A4F) with --color-copper-primary left strip (4px)
  - Content: JAG bolt logomark (SVG, --color-cyan-primary, 48px) centered or upper-left
  - Caption text: Inter 400, --color-gray-dim, honest and customer-facing
  - NO internal language: not "placeholder," not "coming soon asset," not "slot"
  - OK to say: "Photo coming soon — real work by JAG Electric" or simply the context copy

### Addition 4 — Barlow Condensed size correction on service pages

Hero H1 on interior/service pages should be smaller than the homepage H1.
  Homepage H1: clamp(2.5rem, 5vw, 5rem) — correct per sage-brand.md
  Service/city page H1: clamp(1.75rem, 3.5vw, 3rem) — use this for inner pages
  This prevents service page headlines from feeling oversized relative to the
  shorter single-phrase H1 format used on those pages.

### Addition 5 — Image sizing/format requirements

  - All photos delivered as WebP with JPEG fallback
  - Hero/wide images: 1440px wide at 2x, compressed to <180KB
  - Inline/detail images: 800px wide at 2x, compressed to <80KB
  - City context photos: 1200px wide at 2x, compressed to <120KB
  - All images: explicit width/height attributes to prevent layout shift
  - All images: loading="lazy" except the above-fold homepage proof strip

---

## BANNED IMAGERY REGISTRY (Expanded)

This extends the forbidden list in sage-brand.md section 8. Any image matching a
description in this registry must not appear anywhere on the site.

CATEGORY: SCI-FI / FAKE ELECTRICAL
  - X  Glowing electric arc or sparks from human hands or tools
  - X  Holographic circuit schematics floating in mid-air
  - X  Futuristic robotic arms holding electrical components
  - X  LED-strip "gaming setup" aesthetic applied to electrical panels
  - X  Electrical symbols rendered in neon on dark glass
  - X  Circuit board PCB texture used as a decorative full-page background
       (the circuit-board theme lives in the interactive hero SVG only —
        never as a raster photo background on content sections)
  - X  Fake HUD or data-overlay on an electrician photo
  - X  AI-generated image where panel wiring, conduit, or tools show
       obvious generation artifacts (melted wire, extra fingers, distorted geometry)

CATEGORY: WRONG TRADE / WRONG SCOPE
  - X  General construction worker in a hard hat who is not doing electrical work
  - X  Plumber with pipe fittings (wrong trade entirely)
  - X  Home interior glamour shot with no electrician or electrical work visible
  - X  Solar panel installation or EV charger install if JAG does not offer those services
       (brief does not confirm those services — do not add without Toby confirmation)
  - X  Smart home / IoT device installation imagery (Alexa, Nest, Ring install) unless
       confirmed as a JAG service offering
  - X  Industrial plant / factory floor electrical if used on residential service pages

CATEGORY: FAKE JAG PROOF
  - X  Any generated photo labeled as a JAG Electric job photo
  - X  Any stock photo of an electrician labeled as "Joe Gendre" or "JAG staff"
  - X  A generated truck photo with JAG branding treated as a real fleet vehicle
  - X  Before/after images not supplied by JAG Electric (invented project proof)
  - X  Screenshot of a fake 5-star Google review card not from the approved three quotes

CATEGORY: GENERIC CONTRACTOR TEMPLATE LOOK
  - X  Blue-orange gradient hero (the explicit anti-pattern from the original brief)
  - X  White-background card grid with bright color accents
  - X  Blueprint paper background texture on any full-page section
  - X  "Safety vest selfie" style photo — smiling worker in hi-vis vest, staged
  - X  Generic suburb aerial drone photo as the service-area image
  - X  Photo of a house exterior with no electrical work in progress
       (reads realty, not electrical contractor)

CATEGORY: CUSTOMER-FACING COPY VIOLATIONS (images with text overlays)
  - X  Any overlay text reading "24/7" or "Emergency Service"
  - X  Any overlay text reading "Licensed" without a confirmed license number
  - X  Any overlay text reading "Guaranteed" or "Warranty"
  - X  Any image caption using internal agency language: "placeholder," "generated,"
       "demo," "showpiece," "asset plan," "proof concept"

---

## REPLACEMENT DIRECTION FOR QUARANTINED/REJECTED ASSETS

No slots are currently in quarantine status from prior builds since the prior build
lacked photos rather than used rejected photos. If any slot is rejected during
Forge/Craig implementation QA, follow this protocol:

1. Tag the failed asset with status: QUARANTINE + reason in this file (Sage updates it).
2. Do not regenerate from the same prompt family or same stock search query.
3. Provide a clearly different prompt/source direction in the updated slot entry.
4. Include a visual inspection note: what was wrong and what the replacement must avoid.
5. Sage must sign off on replacement direction before Forge implements.

---

## FORGE/CRAIG IMPLEMENTATION REQUIREMENTS

1. Add the photo proof strip section to the homepage layout between trust bar and
   services panel-schedule section. This is a new layout section — update homepage
   structure accordingly.

2. Each service page (/services/[slug]) must include:
   - One header/hero image slot (width: 100%, max-height: 420px, object-fit: cover, dark overlay)
   - One inline image slot (width: 50%, float or grid, alongside mid-page copy)
   - Both use representative photo or BRANDED-PLACEHOLDER per this inventory.

3. Each city/service-area page (/service-area/[city]) must include:
   - The Forge-built inline mini circuit-map SVG (existing)
   - One city context image below the H1/intro paragraph
   - City photo or BRANDED-PLACEHOLDER per this inventory.

4. About page must add a second visual slot for team/truck photo (new).

5. All images must receive an HTML comment on the <img> tag or wrapper:
   <!-- photo: [slot-id] | status: [REPRESENTATIVE/BRANDED-PLACEHOLDER/REAL] -->

6. Forge should not block on stock photo sourcing. Use BRANDED-PLACEHOLDER for any
   slot where no acceptable stock image is available by implementation time. The slot
   structure must exist in the layout either way.

7. Photo dimensions, WebP format, lazy loading, and explicit width/height per
   Addition 5 above are hard requirements, not optional.

---

## DESIGN QA CHECKLIST (Sage sign-off gate)

Before any page is marked PASS, Sage or Craig verifies:

  [ ] Every REPLACE slot in the inventory has either a real/representative image
      or a correctly styled BRANDED-PLACEHOLDER — no empty image boxes or broken <img> tags.
  [ ] No image on the site is labeled in alt text with JAG Electric's name unless
      it is a real confirmed JAG photo or the branded logomark graphic.
  [ ] No representative photo shows sci-fi, wrong trade, or generic contractor template visual.
  [ ] No photo has a broken overlay that makes it unreadable against the dark surface.
  [ ] All images load on mobile without clipping or distortion.
  [ ] Desktop and mobile screenshots inspected by Sage before sign-off.
  [ ] BRANDED-PLACEHOLDERs use customer-facing copy only — no internal language.
  [ ] Image alt text is accurate, descriptive, and honest on every slot.

---

*Sage handoff — revision 2026-06-08*
*This document is additive to sage-brand.md. Both files are the visual contract for JAG Electric.*
*If Toby supplies real JAG Electric project photos, Sage must audit each slot, update status*
*to REAL/CONFIRMED, and clear the representative-photo label from affected slots.*
*Craig/Forge consume both files. Do not mutate other agency-handoff files.*
