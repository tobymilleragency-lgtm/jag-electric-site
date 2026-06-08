# Eddie Revision — Photo/Video Production Package
# Jag Electric — 2026-06-08
# Prepared by: Eddie (agencyvideo lane)
# Status: PRODUCTION DIRECTION — ready for Forge/Craig implementation

---

## Purpose of this file

The revision brief identified one root problem: the site does not feel real enough
because it lacks strong photos. This file is Eddie's complete answer:

  - Every photo slot on every route, with exact visual direction
  - Representative photo sourcing policy (honest, no fake JAG claims)
  - Optional generated/AI-image guidance if Rex is available
  - Short video asset direction (supplements existing eddie-video.md)
  - Caption/alt-text inventory for every slot
  - QC rules for photos and short video

This file is consumed by Forge (Craig) for implementation, and cross-references
the existing eddie-video.md for full video storyboards, platform cuts, and
Hyperframes render specs.

---

## Section 1 — Representative Photo Policy

### The rule

No photo used on this site may be described as a JAG Electric job photo, a JAG
project photo, or Jag Electric's own work UNLESS Toby supplies a confirmed
JAG-originated file.

Confirmed JAG files = photos supplied by Toby with an explicit statement that
they are from JAG's own jobs, crew, vehicles, or jobsite.

### What we CAN use

  A. Representative electrical trade photos (stock, license-cleared)
     Source examples: Unsplash, Pexels, Stocksy, or Getty with commercial license.
     These must be visually credible electrical contractor work — not generic
     stock clichés (no fake-smiling stock electricians, no posed hard-hat
     diversity shoots). Look for real-trade aesthetics: panel work, conduit,
     wire runs, fixture installs, meter socket work.

  B. AI-generated representative images (optional — Rex)
     If Rex (image generation) is available, generate per the prompts in
     Section 3. These must be labeled in alt text and in the source inventory
     as "representative electrical image, generated." Never describe as JAG work.

  C. Brand/graphic assets that are designed (not photographic)
     Icon cards, circuit-trace graphics, dark-panel service cards, map visuals.
     No disclosure needed; these are clearly designed, not photography.

### Labeling rules in code/alt text

  Confirmed JAG photo:
    alt="JAG Electric technician [description]"  (no "representative" qualifier)

  Stock or representative photo:
    alt="Electrician [description] — representative image"

  Generated/AI image:
    alt="[Description] — representative image"

  Design/graphic asset:
    alt="[Description of what the graphic shows]"  (no photo qualifier needed)

### Where labels surface

  - alt attribute on every <img>
  - Eddie's source inventory (Section 6 of this file)
  - No visible "stock photo" watermark or on-screen disclaimer required —
    the honest alt/source record is sufficient and is the standard used by
    reputable contractors on the web. Do NOT add on-page "stock photo" badges
    that make the site feel cheap or unprofessional. The honest record is in
    the code and the agency inventory, not in a footer disclaimer.

---

## Section 2 — Photo Slot Inventory by Route

Total photo slots needed: 28 primary + 6 supporting
Every slot has: Slot ID, Route, Section, Visual direction, Alt text, Source type.

---

### HOMEPAGE  /

SLOT-HP-01
  Route: /
  Section: Hero background / above fold
  Visual: A dark, high-contrast electrical panel interior. Copper bus bars,
  organized breakers, clean wire runs. Moody lighting — not bright fluorescent.
  Aspect: 1920x1080 minimum (16:9), used as background behind dark overlay.
  Color treatment: desaturate 30%, darken with CSS overlay to match site palette.
  Alt: "Electrical panel interior — representative image"
  Source type: Stock or generated
  Priority: CRITICAL — hero loads first

SLOT-HP-02
  Route: /
  Section: Authority strip / trust bar (below hero, above services)
  Visual: NOT a photo — use designed credential badge row:
    [4.9 Google ★] [A+ BBB Accredited] [4.9 HomeAdvisor] [LLC Est. 2019]
  This is a designed asset, not a photo slot. See eddie-video.md design tokens.
  Alt: N/A — badge text is inline, images are decorative icons
  Priority: HIGH

SLOT-HP-03
  Route: /
  Section: "Why Jag Electric" / conversion section
  Visual: Split image or 2-column layout.
    Left cell: Electrician's hands torquing a breaker into a panel — close-up,
    real trade feel, no staged smiling. Gloved hands preferred.
    Right cell: Design/graphic — service area circuit map (from eddie-video.md A4)
  Aspect: each cell ~600x450
  Alt (left): "Electrician torquing breaker — representative image"
  Alt (right): "JAG Electric approximate service area — SE Kansas and NE Oklahoma"
  Source type: Stock (left), designed graphic (right)
  Priority: HIGH

SLOT-HP-04
  Route: /
  Section: Services grid (6 service cards)
  Visual: Each card has a dark-panel background + SVG service icon (no photo needed)
  These are designed cards, not photo slots. Icons from asset set A3 in eddie-video.md.
  Priority: HIGH — but no photo required, designed assets only

SLOT-HP-05
  Route: /
  Section: Social proof / reviews section
  Visual: Purely typographic — dark card, review quote, star rating, platform badge.
  No reviewer photo. No fabricated faces.
  Priority: HIGH — no photo slot

SLOT-HP-06
  Route: /
  Section: Homepage bottom CTA / "Get your estimate" section
  Visual: Wide-format background — dark electrical conduit running along a wall
  or ceiling, shot from below at angle. Graphite/industrial feel.
  Aspect: 1920x480 (wide/short, used as section background with text overlay)
  Alt: "Electrical conduit installation — representative image"
  Source type: Stock or generated
  Priority: MEDIUM

---

### SERVICE INDEX  /services

SLOT-SVC-IDX-01
  Route: /services
  Section: Page header
  Visual: Overhead shot of an open panel with neatly labeled circuit breakers.
  Technical, detailed, honest electrical work feel.
  Aspect: 1920x600
  Alt: "Circuit breaker panel — representative image"
  Source type: Stock or generated
  Priority: HIGH

---

### PANEL UPGRADES  /services/panel-upgrades

SLOT-PANEL-01
  Route: /services/panel-upgrades
  Section: Page header / hero
  Visual: 200-amp main breaker panel, door open, organized — the kind of
  clean finished install that shows quality. Shot square-on, not at angle.
  Aspect: 1920x700 or cropped to 16:9
  Alt: "200-amp panel upgrade — representative image"
  Source type: Stock or generated
  Priority: CRITICAL

SLOT-PANEL-02
  Route: /services/panel-upgrades
  Section: Mid-page "before/after" or "why upgrade" content block
  Visual: Side-by-side — left: old fuse box or overloaded panel (aged, wires
  visible, outdated). Right: clean modern breaker panel, labeled, organized.
  Do not call these JAG before/after — label as "old vs. new" illustration.
  Aspect: each panel ~600x450
  Alt left: "Old fuse box panel — representative image"
  Alt right: "Modern breaker panel upgrade — representative image"
  Source type: Two separate stock photos or generated side-by-side
  Priority: HIGH

SLOT-PANEL-03
  Route: /services/panel-upgrades
  Section: Trust/credential sidebar or inline callout
  Visual: Designed asset — highlight box with BBB A+ badge + 4.9 stars.
  No photo needed here.
  Priority: HIGH — designed only

---

### REWIRING  /services/rewiring

SLOT-REWIRE-01
  Route: /services/rewiring
  Section: Page header / hero
  Visual: Wire run in an open wall cavity — clean cable stapled to studs,
  neat loops at boxes. Shows craft and care. Not scary/dangerous.
  Aspect: 1920x700
  Alt: "Residential rewiring — representative image"
  Source type: Stock or generated
  Priority: CRITICAL

SLOT-REWIRE-02
  Route: /services/rewiring
  Section: Content illustration — "what rewiring involves"
  Visual: Close-up of wire connections inside a junction box — conductors
  properly stripped, wire nuts, no burnt or damaged wiring visible.
  Aspect: 800x600
  Alt: "Electrical wire connections — representative image"
  Source type: Stock or generated
  Priority: MEDIUM

---

### LIGHTING & FIXTURES  /services/lighting-fixtures

SLOT-LIGHT-01
  Route: /services/lighting-fixtures
  Section: Page header / hero
  Visual: Recessed lights installed in a finished ceiling — warm/cool lighting,
  clean drywall, no visible mess. Modern and clean.
  Aspect: 1920x700
  Alt: "Recessed lighting installation — representative image"
  Source type: Stock or generated
  Priority: CRITICAL

SLOT-LIGHT-02
  Route: /services/lighting-fixtures
  Section: Content block — fixture types
  Visual: 3-image grid or single collage showing variety:
    - Ceiling fan install
    - Outdoor wall sconce
    - Under-cabinet lighting or pendant
  Each ~600x450
  Alt: "Ceiling fan installation — representative image"
       "Outdoor light fixture — representative image"
       "Kitchen lighting — representative image"
  Source type: Stock (3 separate images)
  Priority: MEDIUM

---

### OUTLETS & SWITCHES  /services/outlets-switches

SLOT-OUTLET-01
  Route: /services/outlets-switches
  Section: Page header / hero
  Visual: Electrician's hand installing a GFCI outlet — clean, professional,
  outlet is white or almond, wall is painted. Craft detail shot.
  Aspect: 1920x700
  Alt: "GFCI outlet installation — representative image"
  Source type: Stock or generated
  Priority: CRITICAL

SLOT-OUTLET-02
  Route: /services/outlets-switches
  Section: Content illustration
  Visual: Before/after style — cracked/yellowed old outlet plate vs. new
  tamper-resistant outlet with modern decora plate.
  Aspect: 2-up 600x450 each
  Alt left: "Old outlet — representative image"
  Alt right: "New outlet installation — representative image"
  Source type: Stock (2 images)
  Priority: LOW

---

### REMODEL / NEW CONSTRUCTION  /services/remodel-new-construction

SLOT-REMODEL-01
  Route: /services/remodel-new-construction
  Section: Page header / hero
  Visual: Rough-in wiring in an unfinished wall — romex runs through studs,
  boxes mounted, organized. Shows expertise in new-construction phase work.
  Aspect: 1920x700
  Alt: "Electrical rough-in for remodel — representative image"
  Source type: Stock or generated
  Priority: CRITICAL

SLOT-REMODEL-02
  Route: /services/remodel-new-construction
  Section: Content illustration — scope of service
  Visual: Construction blueprint or floor plan with electrical circuit symbols
  overlaid — OR a wide shot of a house framing phase with conduit/wire runs.
  Aspect: 1200x600
  Alt: "Electrical planning for new construction — representative image"
  Source type: Stock or generated
  Priority: MEDIUM

---

### COMMERCIAL ELECTRICAL  /services/commercial-electrical

SLOT-COMM-01
  Route: /services/commercial-electrical
  Section: Page header / hero
  Visual: Commercial panel room or switchgear cabinet — larger than residential,
  multiple panels, conduit runs, labeled circuits. Industrial but clean.
  Aspect: 1920x700
  Alt: "Commercial electrical panel installation — representative image"
  Source type: Stock or generated
  Priority: CRITICAL

SLOT-COMM-02
  Route: /services/commercial-electrical
  Section: Content illustration
  Visual: Electrician (from behind, not face) working on commercial conduit
  or pulling wire through EMT conduit in a commercial ceiling space.
  Aspect: 1200x600
  Alt: "Commercial electrical contractor — representative image"
  Source type: Stock
  Priority: MEDIUM

---

### SERVICE AREA INDEX  /service-area

SLOT-SA-IDX-01
  Route: /service-area
  Section: Page header
  Visual: Aerial or elevated view of SE Kansas landscape — rolling plains,
  a small town grid visible. NOT a glamour shot. Just honest regional identity.
  Aspect: 1920x600
  Alt: "Southeast Kansas service area — representative image"
  Source type: Stock (look for Kansas plains aerial — Unsplash has several)
  Priority: MEDIUM

SLOT-SA-IDX-02
  Route: /service-area
  Section: Interactive circuit-map mechanic (the primary visual)
  Visual: Designed graphic — see eddie-video.md asset A4. Dark vector map,
  5 city dots, circuit trace lines, amber pulse on Galena.
  This is the hero visual for this page. No stock photo needed here.
  Priority: HIGH — designed asset

---

### CITY PAGES  /service-area/pittsburg-ks etc.

Each of the 5 city pages needs 1 header photo and optionally 1 inline photo.

SLOT-CITY-PITT-01
  Route: /service-area/pittsburg-ks
  Section: Page header
  Visual: Downtown Pittsburg KS street scene or recognizable landmark.
  Honest, local, not generic. Search specifically for Pittsburg KS photos.
  Unsplash/Flickr/Wikipedia Commons for Pittsburg KS.
  If none found: use a Kansas plains/residential neighborhood shot labeled
  "Pittsburg, KS area — representative image"
  Alt: "Pittsburg, KS — service area for JAG Electric"
  Source type: Stock or public domain local photo
  Priority: HIGH

SLOT-CITY-GALE-01
  Route: /service-area/galena-ks
  Section: Page header
  Visual: Galena KS street, historic mining area imagery, or small-town
  downtown photo. Galena has Route 66 history — any honest local shot works.
  Alt: "Galena, KS — home base and service area for JAG Electric"
  Source type: Stock or public domain
  Priority: HIGH

SLOT-CITY-JOPL-01
  Route: /service-area/joplin-mo
  Section: Page header
  Visual: Joplin MO downtown or recognizable neighborhood — this is a larger
  market. Mid-sized city feel is fine.
  Alt: "Joplin, MO area — served by JAG Electric"
  Source type: Stock or public domain
  Priority: HIGH

SLOT-CITY-FRONT-01
  Route: /service-area/frontenac-ks
  Section: Page header
  Visual: Frontenac KS residential neighborhood or small-town main street.
  Alt: "Frontenac, KS — service area for JAG Electric"
  Source type: Stock or public domain
  Priority: MEDIUM

SLOT-CITY-GIR-01
  Route: /service-area/girard-ks
  Section: Page header
  Visual: Girard KS town photo — courthouse square or main street preferred.
  Alt: "Girard, KS — service area for JAG Electric"
  Source type: Stock or public domain
  Priority: MEDIUM

---

### ABOUT  /about

SLOT-ABOUT-01
  Route: /about
  Section: Page header / brand photo
  Visual: If Toby supplies a photo of Joe Gendre: use it. This is the highest
  trust-building photo on the entire site. A real business owner photo beats
  any stock photo.
  If no Joe photo supplied: use a credible electrician-at-panel photo (from
  behind or side, no face needed for stock license compliance). Caption:
  "JAG Electric — electrical contractors serving SE Kansas."
  Aspect: 1200x800 preferred. Can be used as a left-column portrait if real photo.
  Alt (real photo): "Joe Gendre, owner of JAG Electric"
  Alt (representative): "Electrician at panel — representative image"
  Source type: Confirmed JAG photo preferred / Stock fallback
  Priority: CRITICAL — /about page converts best with a real face

SLOT-ABOUT-02
  Route: /about
  Section: Credentials / proof strip inline
  Visual: Designed asset — BBB A+ seal (with live link), HomeAdvisor badge,
  Google rating display. Not a photo.
  Priority: HIGH — designed only

---

### REVIEWS  /reviews

SLOT-REVIEW-01
  Route: /reviews
  Section: Page header
  Visual: Designed — large star rating card, 4.9 on dark panel, Space Mono.
  Not a photo. Review cards are text-only per truth policy.
  Priority: HIGH — designed only

---

### ESTIMATE PREP  /estimate-prep

No photo slots required. Page is functional/form-based.
If Forge wants a trust anchor, reuse SLOT-HP-03 left-cell (panel hands photo)
as a small inline image on the right column of the form page.

---

## Section 3 — Rex (Optional) Generated Image Prompts

If Rex is available and Toby approves AI-generated representative images,
use these prompts. All outputs must be labeled as "representative image" per
Section 1 policy. Do not use Rex output without visual QC.

PROMPT-01 (for SLOT-HP-01, SLOT-SVC-IDX-01):
"Interior of a residential electrical panel, copper bus bars, organized black
circuit breakers, clean wire runs, dramatic moody lighting from below,
dark background, no people, photorealistic, 16:9"

PROMPT-02 (for SLOT-PANEL-01):
"200-amp residential breaker panel, door open, neatly labeled circuits, clean
wire management, professional electrical installation, straight-on view,
photorealistic, natural light, no people"

PROMPT-03 (for SLOT-REWIRE-01):
"Electrical wiring rough-in inside wall cavity, romex cable stapled to wood
studs, junction boxes mounted, organized and neat, residential construction,
photorealistic, no people"

PROMPT-04 (for SLOT-LIGHT-01):
"Recessed LED lighting installed in a clean white residential ceiling, modern
home interior, warm lighting, no people, photorealistic, wide angle, 16:9"

PROMPT-05 (for SLOT-OUTLET-01):
"Close-up of electrician's gloved hand installing a GFCI outlet, white outlet,
painted wall, professional electrical work, photorealistic, detail shot"

PROMPT-06 (for SLOT-REMODEL-01):
"Electrical rough-in wiring in an unfinished residential room, romex cables
running through wall studs, electrical boxes positioned, framing visible,
photorealistic, no people"

PROMPT-07 (for SLOT-COMM-01):
"Commercial electrical panel room, multiple breaker panels, EMT conduit runs,
labeled circuits, industrial setting, clean and professional, photorealistic"

QC rules for Rex outputs:
  - No visible text in the image (panel labels in English are often garbled by AI)
  - No obviously AI-mangled hands or tools
  - No safety violations shown (improper wiring, sparking, etc.)
  - Aspect ratio correct for intended slot
  - Reject and re-prompt anything that looks fake or unnatural on first glance

---

## Section 4 — Short Video Asset Direction (Supplement to eddie-video.md)

This section provides video direction for site-embedded short clips only.
Full video storyboards, platform cuts, voiceover, Hyperframes composition notes,
and QC specs are in /home/toby/jag-electric-site/agency-handoffs/eddie-video.md.
Do not duplicate that file. Read it first.

### New item: Photo-to-Motion Clips (can be done WITHOUT Hyperframes render)

For each service page, a simple motion clip can be created from the hero photo
using FFmpeg's zoompan filter. This gives the page a "living" feel without
requiring full Hyperframes composition. These are LOW priority but easy to
produce once photos are sourced.

Recipe (15-second Ken Burns pan, 1920x1080 input):

ffmpeg -loop 1 -i INPUT.jpg -vf \
  "scale=2200x1238,zoompan=z='if(lte(zoom,1.0),1.05,max(1.001,zoom-0.0005))':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=450:s=1920x1080,format=yuv420p" \
  -t 15 -c:v libx264 -preset medium -crf 23 \
  OUTPUT-motion-15s.mp4

Replace INPUT.jpg with the sourced hero photo for each service page.
Output goes to: /home/toby/jag-electric-site/video-renders/page-motion/

Files to produce (one per service page, after photos are sourced):
  panel-upgrades-motion-15s.mp4
  rewiring-motion-15s.mp4
  lighting-fixtures-motion-15s.mp4
  outlets-switches-motion-15s.mp4
  remodel-new-construction-motion-15s.mp4
  commercial-electrical-motion-15s.mp4

Embed spec for service pages:
  <video muted autoplay loop playsinline poster="[page-hero-image.jpg]"
    style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;opacity:0.35;">
    <source src="/video-renders/page-motion/[filename].mp4" type="video/mp4">
  </video>

Opacity 0.35 overlaid with the dark panel texture + text. Same aesthetic
as the homepage hero approach. Static poster image (the original photo) is
the fallback for no-video environments.

DO NOT embed motion clips as primary foreground content. They are background
ambiance only. The text/content is always foreground.

---

## Section 5 — Caption / Alt Text Master List

Full inventory for Forge/Craig. Every img tag in the site must have one of these
or a matching entry from the confirmed JAG photo list (if Toby supplies photos).

| Slot ID           | Alt text                                                      |
|-------------------|---------------------------------------------------------------|
| SLOT-HP-01        | Electrical panel interior — representative image              |
| SLOT-HP-03 left   | Electrician torquing breaker — representative image           |
| SLOT-HP-03 right  | JAG Electric approximate service area — SE Kansas             |
| SLOT-HP-06        | Electrical conduit installation — representative image        |
| SLOT-SVC-IDX-01   | Circuit breaker panel — representative image                  |
| SLOT-PANEL-01     | 200-amp panel upgrade — representative image                  |
| SLOT-PANEL-02 L   | Old fuse box panel — representative image                     |
| SLOT-PANEL-02 R   | Modern breaker panel upgrade — representative image           |
| SLOT-REWIRE-01    | Residential rewiring — representative image                   |
| SLOT-REWIRE-02    | Electrical wire connections — representative image            |
| SLOT-LIGHT-01     | Recessed lighting installation — representative image         |
| SLOT-LIGHT-02a    | Ceiling fan installation — representative image               |
| SLOT-LIGHT-02b    | Outdoor light fixture — representative image                  |
| SLOT-LIGHT-02c    | Kitchen lighting — representative image                       |
| SLOT-OUTLET-01    | GFCI outlet installation — representative image               |
| SLOT-OUTLET-02 L  | Old outlet — representative image                             |
| SLOT-OUTLET-02 R  | New outlet installation — representative image                |
| SLOT-REMODEL-01   | Electrical rough-in for remodel — representative image        |
| SLOT-REMODEL-02   | Electrical planning for new construction — representative img |
| SLOT-COMM-01      | Commercial electrical panel installation — representative img |
| SLOT-COMM-02      | Commercial electrical contractor — representative image       |
| SLOT-SA-IDX-01    | Southeast Kansas service area — representative image          |
| SLOT-CITY-PITT-01 | Pittsburg, KS — service area for JAG Electric                 |
| SLOT-CITY-GALE-01 | Galena, KS — home base and service area for JAG Electric      |
| SLOT-CITY-JOPL-01 | Joplin, MO area — served by JAG Electric                      |
| SLOT-CITY-FRONT-01| Frontenac, KS — service area for JAG Electric                 |
| SLOT-CITY-GIR-01  | Girard, KS — service area for JAG Electric                    |
| SLOT-ABOUT-01     | [Joe Gendre, owner of JAG Electric] OR [Electrician at panel — representative image] |

City page note: alt text for city pages does NOT say "representative image"
because the photo is of the actual city, not a manufactured electrical scene.
Honest description of the location is correct.

---

## Section 6 — Source Inventory Template

When Forge implements photos, log each sourced image here (or in a separate
/agency-handoffs/photo-source-log.md). This is the truth record.

| Slot ID | Filename | Source URL or "JAG-supplied" | License | Status |
|---------|----------|------------------------------|---------|--------|
| SLOT-HP-01 | hp-hero-panel.jpg | TBD | TBD | OPEN |
| SLOT-HP-03L | hp-why-hands.jpg | TBD | TBD | OPEN |
| ... | ... | ... | ... | ... |

Status values:
  OPEN = not yet sourced
  STAGED = photo selected, pending Toby visual approval
  APPROVED = Toby or Eddie approved for use
  QUARANTINED = rejected; do not reuse or substitute near-duplicate

Quarantine rule: if Toby rejects any sourced photo, log it as QUARANTINED
with the original URL/prompt. Any replacement must state what changed at
source/prompt level. Do not substitute a near-duplicate under a new filename.

---

## Section 7 — QC Rules for Photos

### Mechanical checks (Forge/Craig)

  [ ] Every <img> has an alt attribute — no empty alt on non-decorative images
  [ ] All photos are served from /public/images/ or equivalent static path
  [ ] No external CDN images that could 404 — self-host everything
  [ ] Image dimensions match slot specs (within 10% — cropping is fine)
  [ ] File size: hero photos ≤ 400KB WebP or JPEG optimized (use sharp/imagemin)
  [ ] Responsive: srcset with at least 2 sizes for hero/header photos
  [ ] No broken image paths in production deploy

### Visual checks (Eddie — human review before marking APPROVED)

  [ ] Photo looks like real electrical trade work, not staged/glamour stock
  [ ] No safety violations visible (open live wires, sparking, code violations)
  [ ] No brand logos of other companies visible and prominent
  [ ] Color grade compatible with dark site palette (photo doesn't blow out
      when overlaid with dark CSS treatment)
  [ ] AI-generated photos: no garbled text visible in image, no mangled hands
  [ ] City photos: location is actually recognizable as the named city or
      region, not generic Midwest or generic US town
  [ ] About page: if using representative photo, electrician is shown from
      behind or side — no face needed. If Joe's real photo: face visible and
      professional (not blurry, not overly casual, not embarrassing to Joe)

### Claims gate (applies to every image + caption combination)

  [ ] Caption / surrounding copy does not claim stock photo is JAG's work
  [ ] No caption invents a project description, location, or date
  [ ] No caption adds claims not in the truth brief (no "24/7", no warranties)
  [ ] Review photos (if any added to /reviews): no fabricated reviewer faces

---

## Section 8 — Blocking Items / Toby Decisions

These are open before Eddie can mark photo slots APPROVED.

Priority 1 — unblocks the most slots:
  [ ] TOBY: Supply real JAG job photos if available (even 3-5 good ones
      transforms the about page and 1-2 service pages). Shot on phone is fine.
  [ ] TOBY: Supply a photo of Joe Gendre for the /about page.
      Even a casual phone photo is better than representative stock here.
      This is the single highest-ROI photo on the site for trust/conversion.
  [ ] TOBY: Approve or deny use of Rex for AI-generated representative images.
      If approved, Eddie generates per Section 3 prompts and presents for review.

Priority 2 — unblocks city pages:
  [ ] Confirm: are Pittsburg/Galena/Frontenac/Girard city photos acceptable
      as stock/public-domain location shots? Or does Toby want to supply his own?

Priority 3 — styling:
  [ ] Confirm: dark overlay treatment on hero photos (opacity, color) or
      should Craig use the existing site palette approach from the initial build?

---

## Section 9 — Cross-References

Video storyboards and render specs:
  /home/toby/jag-electric-site/agency-handoffs/eddie-video.md

Fact boundaries and photo policy:
  /home/toby/jag-electric-site/agency-handoffs/silentbob-facts.md
  (Section 6 and 7 of that file are the photo/photography policy anchor)

Copy and word-count targets for service/city pages:
  /home/toby/jag-electric-site/agency-handoffs/wordsmith-copy.md

Design tokens and visual identity:
  eddie-video.md Section "Visual Identity Brief" — same tokens apply to photos

---

## Section 10 — Photo Priority Order for Forge

If Forge must sequence the work, this is the recommended order:

1. SLOT-ABOUT-01 — Joe Gendre real photo (highest trust ROI; request from Toby first)
2. SLOT-HP-01 — Homepage hero panel photo (everything else loads after this)
3. SLOT-PANEL-01, SLOT-REWIRE-01, SLOT-LIGHT-01, SLOT-OUTLET-01,
   SLOT-REMODEL-01, SLOT-COMM-01 — 6 service page heroes (one per page)
4. SLOT-CITY-PITT-01, SLOT-CITY-GALE-01, SLOT-CITY-JOPL-01 — top 3 cities
5. SLOT-HP-03 left, SLOT-HP-06 — homepage interior sections
6. Remaining city photos and inline content photos
7. Before/after pairs (SLOT-PANEL-02, SLOT-OUTLET-02) — these are enhancement,
   not blocking for launch

---

## Section 11 — Handoff Gate for Chad

When all CRITICAL and HIGH slots are filled and approved:

  Eddie to Chad handoff note:
  - Photo assets implemented and visually approved
  - Representative photo policy applied site-wide (honest alt text, no fake JAG claims)
  - Video assets (from eddie-video.md) remain blocked pending logo, music bed,
    and map asset decisions (see that file's Blocking Items section)
  - Ad creative using the site's photo assets is cleared for Chad to use in
    still-image ad variants (Meta single image / carousel)
  - Do NOT run paid ads before Toby approval

---

*Eddie — agencyvideo lane*
*2026-06-08*
*No source code modified. All photo slots and video direction ready for Forge.*
