# Forge implementation requirements — Jag Electric local SEO completion revision

Date: 2026-06-08
Project: /home/toby/jag-electric-site
Live URL: https://jag-electric-site.vercel.app/
Repo: https://github.com/tobymilleragency-lgtm/jag-electric-site
Lane: Forge
Status: REQUIREMENTS ONLY — no source code edited by this handoff

## 1. Revision objective

The current site passes as a good visual prototype, but it is not complete as a real local SEO website. The revision must turn it into a full, photo-supported, locally grounded electrician website with deep service pages, deep city/service-area pages, stronger homepage conversion sections, stronger ad/landing hooks, and hard verification gates.

Primary correction from Toby:
- The site looks good visually, but does not feel real enough because it lacks strong photos.
- Homepage and service pages are too thin.
- Ad copy is weak.
- Complete the site with local SEO depth.

Forge/Craig implementation target:
- Keep the premium switchgear / live-circuit identity.
- Add representative electrician photos honestly.
- Expand every service page and every city page to roughly 1000–1200 customer-facing SEO words.
- Keep all visible wording practical, local, and customer-facing.
- Preserve all verified fact boundaries.
- Prove the result with route, screenshot, console, Lighthouse, schema, and asset-honesty gates.

## 2. Non-negotiable truth boundaries to preserve

Use only the confirmed facts below unless Silent Bob updates the fact brief with new proof.

Confirmed usable facts:
- Business name: JAG Electric / Jag Electric, LLC.
- Category: Electrician / electrical contractor.
- Address: 807 E 7th St, Galena, KS 66739.
- Phone: (620) 714-1125.
- Email: jag.electric@yahoo.com.
- Owner/principal: Joe Gendre.
- BBB: Accredited since 2/20/2020, A+ rated; business started 3/7/2019; incorporated 4/2/2019; LLC.
- GBP/Toby-supplied rating: 4.9 Google rating, 50 Google reviews.
- Facebook: 354 likes/followers; Electrician category; 100% recommend based on 20 reviews; limited evening and weekend appointments.
- HomeAdvisor: 4.9 from 45 reviews; approved; Master Electrician and Panel Upgrades listed; free estimates listed; 24 years of experience listed by HomeAdvisor.
- Services confirmed by public listings: residential and commercial electrical contractor services for new construction and remodels; electrical wiring; connectors; switchboards; panel upgrades; lighting; outlet repairs; computer cable installation; wiring/panel upgrades; switches/outlets/fixtures install/repair.
- Approved city/service-area pages: Pittsburg KS, Galena KS, Joplin MO, Frontenac KS, Girard KS.
- Approved review snippets only:
  - “The work is high quality!”
  - “A great choice if you want quality work without hassle.”
  - “Jag Electric and the technician Jacob did a wonderful job!”

Forbidden claims:
- No 24/7 availability.
- No emergency-service blanket claim.
- No guaranteed same-day service.
- No invented license number.
- No invented warranty.
- No financing claim.
- No ranking claim such as “best electrician” or “#1.”
- No fake reviews, fake reviewer names, fake dates, or fake review quantities.
- No fake project photos.
- No fake office locations in city pages.
- No fake CRM/form delivery or booking confirmation.
- No “we text you instantly” / “request sent” unless real delivery is wired and verified.
- No “licensed in Missouri” claim on Joplin page unless Toby supplies proof.
- Do not use the HomeAdvisor “24 years” claim as a visible primary claim unless Toby confirms whether it is personal experience; if used at all, attribute internally and avoid conflict with LLC start date.

Required conservative hours language:
- “Call to schedule — limited evening and weekend appointments available.”

Required form honesty:
- If the estimate form is not wired to verified email/CRM delivery, it remains an estimate-prep/call-summary tool with click-to-call and mailto fallback.

## 3. Photo and representative-asset policy

This revision is photo-first, but asset honesty is mandatory.

Before implementing visual changes, Craig/Forge must create or update:
- /home/toby/jag-electric-site/ASSET_INVENTORY.md

Required columns:
- Slot ID
- Route
- Section
- Current source
- New source
- Source type: real JAG photo | public business profile asset | licensed stock | generated representative | CSS/SVG/video mechanic
- Decision: keep | replace | quarantine
- Alt text
- Internal source note
- Visible caption required? yes/no
- Proof screenshot path

Hard rules:
- If a photo is generated, licensed stock, public profile inspiration, or representative, internally label it honestly in ASSET_INVENTORY.md.
- Do not caption representative photos as “our work,” “recent JAG project,” “JAG crew,” “JAG install,” or anything that implies it is JAG-owned proof.
- Representative photos may be used as contextual service imagery without visible “stock photo” labels if they are not framed as proof of JAG’s work. If a caption could imply project ownership, add wording such as “Representative electrical work photo.”
- Do not generate a fake photo of Joe Gendre, Jacob, JAG staff, a JAG truck, or branded jobsite signage.
- Do not add fake logos, fake badges, fake uniforms, fake license placards, fake review screenshots, or fake before/after pairs.
- No repeated same photo across multiple major placements. A full local SEO site needs varied photos by service/page.
- Convert final added photos to WebP where practical and store under /public/images/ with descriptive names.
- All images must have useful alt text that is honest and customer-facing.

Representative photo style requirements:
- Photorealistic electrician/service imagery, not cartoons or illustrations.
- Trade-specific: breaker panels, wiring, outlets, switches, lighting fixtures, remodel rough-in, commercial electrical rooms, clean panel labels, conduit, ceiling fixtures, GFCI/outlet work, construction wiring, data cable/commercial low-voltage context.
- Local feel where possible: modest Southeast Kansas homes, small commercial spaces, shops/offices, garages/workshops, not luxury coastal interiors or skyscraper electrical rooms.
- No faces as primary proof unless source is real and approved.
- No unsafe electrical conditions shown as “finished work.” Problem photos can be used only in “when to call” context, not proof.

Rejected visual directions:
- Generic smiling electrician stock hero as the main identity.
- Construction workers, hard hats, trucks, scenic roads, random houses, or lifestyle filler unrelated to electrical work.
- Sci-fi HUD/hologram assets.
- Cheesy lightning bolts/sparks as photo replacements.
- Stock “electrician holding tablet” image repeated across pages.

## 4. Required route map and depth targets

All existing routes stay. Do not remove routes.

Required routes:
- /
- /services
- /services/panel-upgrades
- /services/rewiring
- /services/lighting-fixtures
- /services/outlets-switches
- /services/remodel-new-construction
- /services/commercial-electrical
- /service-area
- /service-area/pittsburg-ks
- /service-area/galena-ks
- /service-area/joplin-mo
- /service-area/frontenac-ks
- /service-area/girard-ks
- /about
- /reviews
- /estimate-prep
- /sitemap.xml
- /robots.txt

Depth requirements:
- Homepage: substantially expanded; target 1500+ customer-facing words across sections, plus visual/photo sections and conversion modules.
- /services index: 800–1200 words; acts as a real service hub, not a card list.
- Each individual service page: roughly 1000–1200 customer-facing SEO words.
- /service-area index: 800–1200 words; honest regional hub.
- Each city/service-area page: roughly 1000–1200 customer-facing local SEO words.
- About/reviews/estimate-prep: substantial enough to feel real; do not leave thin one-panel pages.

Implementation note:
- A route returning 200 is not enough. Each route must have unique, crawlable, route-specific body content. Token-swapped city pages and shared shells do not count.

## 5. Homepage implementation requirements

The homepage must keep the memorable mechanic but add real-site substance and photo credibility.

Required homepage structure:

1. Sticky header / nav
- Must include Home, Services, Service Area, Reviews, About, Estimate Prep/Contact, and click-to-call.
- Mobile at 390px must expose a working menu/drawer with all core links, including Home.
- No horizontal overflow.

2. Hero: live circuit / electrician call-start
- Keep dark graphite switchgear, cyan glow, copper conductor accents, amber CTA restraint.
- H1 should target primary local intent without sounding stuffed. Recommended direction: “Trusted Electrician Serving Pittsburg, KS and Southeast Kansas.”
- Include verified phone CTA and estimate-prep CTA.
- Include trust proof using verified signals only.
- If using a hero photo, it must be a representative electrician/panel/service image, not claimed as JAG project work. The current circuit mechanic can remain as the hero’s dominant identity; photos can appear in a hero proof rail or immediately below the fold.

3. Trust/proof strip
- Crawlable text for BBB A+ accredited, Google 4.9 / 50 reviews, Facebook 100% recommend / 20 reviews, HomeAdvisor 4.9 / 45 reviews, residential + commercial.
- Do not aggregate review sources into fake blended rating.
- Do not invent reviewer names.

4. “What JAG handles” service panel
- Replace thin card summaries with a dense service selector/panel schedule.
- Each service row/card must include:
  - service name
  - practical customer trigger
  - common work included
  - link to deep service page
  - representative photo or precise SVG icon/mini visual
- Services: Panel Upgrades, Residential Rewiring, Lighting & Fixtures, Outlets/Switches & Repairs, Remodel & New Construction Wiring, Commercial Electrical.

5. Photo-led “common electrical problems” section
- Add 4–6 photo cards using representative images and honest alt/source inventory.
- Suggested cards:
  - breakers tripping / outdated panel
  - older wiring or remodel wiring planning
  - dead outlets / GFCI needs
  - fixture/lighting upgrades
  - commercial tenant/buildout electrical
  - pre-drywall rough-in planning
- Copy must be customer-facing: what the visitor may be noticing, why it matters, what to tell JAG when calling.

6. “How the estimate-prep tool works” section
- Explain that the tool helps organize the call: service type, location, issue, photos/notes, preferred timing.
- Clearly state it creates a call/email summary and does not promise instant quote or fake booking.
- Include CTA to /estimate-prep and click-to-call.

7. Service-area circuit section
- Keep the live-circuit service-radius visual.
- Link only approved cities: Pittsburg, Galena, Joplin, Frontenac, Girard.
- Use honest copy: based in Galena, serving Pittsburg and nearby communities in roughly a 30-mile radius; call to confirm coverage for address.
- Do not imply offices in every city.

8. Reputation section
- Use only approved review snippets.
- Add source-backed review platform cards with labels.
- Include link to /reviews.

9. “Before you call” checklist
- A practical section that adds conversion depth and SEO relevance:
  - What is happening?
  - Which room/building area?
  - Breaker panel photo helpful?
  - Is it residential/commercial/remodel/new build?
  - Is timing urgent, this month, or planning ahead?
- CTA: Call or prepare estimate summary.

10. Bottom CTA / NAP block
- Phone, email, address, service area, conservative hours language.
- Footer must link all service pages and all city pages.

## 6. Service page implementation requirements

Every service page must become a dense, customer-facing landing page of roughly 1000–1200 words.

Shared service page structure:

1. Route-specific SEO head
- One H1 only.
- Route-specific title under 60-ish characters where possible.
- Meta description 120–155 chars, practical, no fake claims.
- Canonical URL.
- OpenGraph title/description/image.
- Breadcrumb JSON-LD.
- Service JSON-LD tied to LocalBusiness @id.

2. Service hero with representative photo
- Use a route-specific photo or service-specific visual.
- Honest alt text.
- Do not reuse the same generic electrician image on every service page.

3. Practical intro
- What the service is.
- Who typically needs it.
- What problems it solves.
- Tie to Pittsburg/Galena/Southeast Kansas naturally.

4. “When to call” section
- Bullet list of customer symptoms or project triggers.
- Avoid fearmongering and emergency claims.

5. “What JAG can help with” section
- Use confirmed service scope from BBB/HomeAdvisor/Facebook.
- Keep copy practical and local.

6. “What to expect before the estimate” section
- Site visit/call prep style, not fake booking.
- Include what photos/details help.

7. Related services and city links
- Every service page links to /services, /service-area/pittsburg-ks, /reviews, /estimate-prep, and 1–2 relevant service pages.

8. FAQ section
- Add 3–5 FAQs where relevant.
- If FAQPage schema is used, visible FAQ text must match schema.
- Answers must avoid fixed pricing, warranty, license-number, emergency, and guaranteed-timeline claims.

9. Conversion close
- Click-to-call CTA.
- Estimate-prep CTA.
- Conservative hours language.

Per-service content targets:

### /services/panel-upgrades
Focus keyword: electrical panel upgrade Pittsburg KS
Secondary: breaker box upgrade Galena KS
Photo needs:
- Modern breaker panel closeup.
- Optional secondary: labeled breakers / panel door / electrician hand at panel, no fake JAG branding.
Required sections:
- Signs panel may need attention: frequent trips, flickering under load, old fuse box, adding appliances/shop/garage/addition, limited circuits.
- Panel upgrade vs circuit addition vs subpanel; explain that JAG scopes what is actually needed.
- Residential and commercial panel planning.
- What to gather before calling: panel photo, main breaker size if visible, list of problem circuits, project plans.
- FAQs: how to know if panel needs upgrade, what affects cost, whether remodels often need panel changes, whether JAG handles residential/commercial.

### /services/rewiring
Focus keyword: home rewiring Pittsburg KS
Photo needs:
- Representative wall/attic/basement wiring, cable runs, safe rough-in, not unsafe finished proof.
Required sections:
- Older-home wiring concerns without overclaiming code violations.
- Partial vs room/remodel vs whole-home rewiring.
- Remodel timing: best before walls close.
- Symptoms: flickering, dead circuits, old outlets, insurance concerns, repeated problems.
- What to tell JAG: age of home, areas affected, remodel plans, access, photos.
- FAQs: signs home needs rewiring, partial rewiring, living in home during work, estimate variables.

### /services/lighting-fixtures
Focus keyword: light fixture installation Pittsburg KS
Secondary: ceiling fan installation Pittsburg KS
Photo needs:
- Ceiling light/fixture, recessed lighting, exterior/security light, clean switch/fixture detail.
Required sections:
- Fixture replacement, new fixture locations, recessed lighting, ceiling fans, exterior/security, under-cabinet/pathway where appropriate.
- When simple fixture replacement reveals wiring/switch issues.
- How lighting improves safety and usability for homes/shops/businesses.
- What to prepare: fixture type, ceiling height, current wiring, indoor/outdoor, photos.
- FAQs: can JAG install customer-supplied fixtures, ceiling fans, outdoor lighting, adding new fixture location.

### /services/outlets-switches
Focus keyword: outlet installation Pittsburg KS
Secondary: GFCI outlet installation Pittsburg KS
Photo needs:
- GFCI outlet, outlet/switch plate, workshop/garage outlet, commercial outlet context.
Required sections:
- Dead outlets, worn switches, GFCI needs, dimmers, 3-way switches, added outlets, garage/workshop/office circuits, USB/smart outlets if kept practical.
- Safety language: call an electrician for repeated trips, heat, burning smell, buzzing; do not say emergency/24-7.
- Data/computer cable installation can be included because BBB lists computer cable installation.
- What to prepare: location, breaker behavior, water proximity, number of outlets/switches, photos.
- FAQs: GFCI locations, adding outlets, replacing switches, why outlet keeps tripping.

### /services/remodel-new-construction
Focus keyword: electrical remodel Pittsburg KS
Secondary: new construction electrician Pittsburg KS
Photo needs:
- Remodel rough-in, wall studs/wiring, plan/blueprint with electrical marks, new-construction electrical boxes before drywall.
Required sections:
- Additions, remodels, new construction, rough-in, finish, panel sizing, lighting/outlet planning, switchboards/service entrance where appropriate.
- Why electrical should be planned before walls close.
- Coordination with homeowner, builder, or property manager.
- Common projects: kitchen/bath remodel, garage/shop, basement finish, room addition, new home/building.
- What to prepare: drawings, room list, appliance loads, lighting plan, timeline.
- FAQs: when to call electrician in remodel, rough-in vs finish, can JAG work with contractor, new build planning.

### /services/commercial-electrical
Focus keyword: commercial electrician Pittsburg KS
Secondary: commercial electrical contractor southeast Kansas
Photo needs:
- Small commercial electrical room/panel, conduit, office/shop lighting, data cabling, commercial outlet/lighting context.
Required sections:
- Small businesses, shops, offices, rentals, service businesses, tenant improvements, lighting, outlets, panel/switchboard, computer/data cable installation.
- Minimize downtime and communication without promising response times.
- Commercial remodel/buildout planning.
- What to prepare: building type, hours/access constraints, photos, affected circuits, desired scope.
- FAQs: commercial vs residential, after-hours appointments as limited availability only, data cable scope, estimate planning.

## 7. Service-area and city page implementation requirements

Every city page must become roughly 1000–1200 words and feel locally written without inventing facts.

Shared city page structure:

1. SEO head
- One H1 using city name.
- Title and meta targeted to city intent.
- Canonical URL.
- OpenGraph.
- Breadcrumb JSON-LD.
- LocalBusiness/Electrician JSON-LD with same real Galena address, not fake city address.

2. City hero with local-service framing
- Use city name directly.
- Include “serving [City] and surrounding area” phrasing.
- Include click-to-call.
- Use representative electrical photo or city-lit mini circuit map.

3. Coverage honesty block
- JAG Electric is based at 807 E 7th St, Galena, KS.
- Service to the city is by appointment/service-area coverage.
- Call to confirm availability for exact address.
- No fake local office.

4. Service mix section
- Link 3–6 relevant service pages with 1–2 sentence local use cases.

5. Practical local scenarios
- Local copy should discuss real customer needs without invented landmarks, named neighborhoods, or stats.
- Acceptable: older homes, rentals, remodels, shops, garages, small businesses, additions, fixture upgrades, panels, outlets.
- Do not invent specific projects or customers.

6. Review/trust proof
- Use verified platform stats and approved snippets only.

7. Estimate-prep section
- What information helps JAG handle that city’s call efficiently.

8. Internal links
- Each city page links to /service-area, /services, /estimate-prep, /reviews, and at least 2 service pages.

Per-city notes:

### /service-area/pittsburg-ks
Primary local SEO target.
Focus keyword: electrician Pittsburg KS
Requirements:
- Make this the strongest city page.
- Discuss Pittsburg-area homeowners, rentals, small businesses, remodels, panels, outlets, lighting, commercial work.
- Mention JAG is based nearby in Galena without claiming a Pittsburg office.
- Link prominently to panel upgrades, rewiring, commercial electrical, estimate prep, reviews.
- Include photo slots for panel/service work and small business/commercial context.

### /service-area/galena-ks
Focus keyword: electrician Galena KS
Requirements:
- Emphasize home-base truth: address in Galena.
- Use “local Galena electrical contractor” language if careful, but avoid unverified license number.
- Mention Joe Gendre and LLC/founding facts where relevant.
- Include residential/commercial services, panels, wiring, fixtures, outlets, remodels.
- Include NAP block.

### /service-area/joplin-mo
Focus keyword: electrician near Joplin MO / Joplin MO area electrician
Requirements:
- Be extra careful with licensing/geography.
- Use “serving customers in the Joplin, MO area from Galena, KS” or “near Joplin” framing.
- Do not claim Missouri license or full Joplin city dominance.
- Do not say “SE Kansas & NE Oklahoma” unless Toby confirms; original brief supports Joplin MO route, not Oklahoma expansion.
- Include call-to-confirm language.

### /service-area/frontenac-ks
Focus keyword: electrician Frontenac KS
Requirements:
- Practical Crawford County/homeowner/business copy.
- Discuss panels, outlets, lighting, remodel wiring, rental/small business needs without fake local landmarks.
- Link to Pittsburg page, services index, and estimate prep.

### /service-area/girard-ks
Focus keyword: electrician Girard KS
Requirements:
- Practical local service copy for homes, farm/shop/garage-adjacent needs if worded generally, small businesses, remodels.
- No overclaiming top market status.
- Link to panel upgrades, outlets/switches, remodel/new construction, estimate prep.

## 8. About, reviews, services index, service-area index, estimate-prep requirements

### /services index
- Must be a real service hub, not a thin list.
- Include 800–1200 words of practical service overview.
- Include representative image/photo mosaic by service category.
- Link to all six service pages with unique descriptions.
- Include “which service do I need?” guidance.
- Include CTA to estimate-prep.

### /service-area index
- Must be a real local hub.
- Include approved city links only.
- Include honest radius language.
- Include mini service-area circuit map and city cards.
- Include NAP and call-to-confirm.
- Avoid expanding city list without Toby approval.

### /about
- Use Joe Gendre, Galena address, LLC, founded/incorporated 2019, BBB A+ accredited since 2020, residential/commercial contractor, review signals.
- Do not generate a fake staff photo. If no real team photo exists, use representative work imagery or a branded panel graphic with honest internal asset note.
- If “24 years” appears, it must be carefully attributed to HomeAdvisor listing or omitted until Toby confirms. Safer: omit the number.

### /reviews
- Use verified review platform facts.
- Use only the three approved snippets.
- No fake reviewer names/dates.
- Include source labels and links where available.
- Explain reputation plainly: Google, HomeAdvisor, Facebook, BBB.
- CTA to call or estimate-prep.

### /estimate-prep
- Must remain an honest estimate-prep tool.
- It should collect or allow the user to choose:
  - service type
  - city/location
  - residential/commercial
  - issue/scope
  - timing
  - contact info if included
- It must generate a visible summary for the user.
- It must provide click-to-call and mailto fallback to jag.electric@yahoo.com.
- If no backend exists, do not show “sent,” “submitted,” “booked,” or “we received your request.”
- Add helper copy: “This tool helps organize your call. For fastest help, call JAG Electric directly.”

## 9. Ad copy and landing-copy implementation requirements

Chad remains draft-only/no spend. Forge/Craig should strengthen site-side landing language and provide ad copy sections only as draft assets, not active campaigns.

Required addition to site/handoff assets:
- Add an ads/landing copy section to the handoff or copy data consumed by the site if applicable.
- Keep it draft-only and Toby-approval gated.

Recommended draft hooks:

Meta/Facebook hooks:
- “Breaker panel acting up? Start with a reputable local electrician.”
- “Pittsburg-area electrical work without the hassle.”
- “Old wiring, dead outlets, fixture upgrades, remodel wiring — get the call ready before you call.”
- “JAG Electric: Galena-based, serving Pittsburg and nearby communities.”
- “Free estimates, strong local reputation, practical electrical work.”

Google Search ad headlines:
- Electrician Pittsburg KS
- JAG Electric LLC
- Panel Upgrade Electrician
- Electrical Contractor Near Pittsburg
- Galena KS Electrician
- Residential & Commercial Electrician
- Rewiring & Panel Upgrades
- Call JAG Electric Today
- Free Electrical Estimates
- Outlets, Switches & Fixtures
- Remodel Electrical Wiring
- Commercial Electrical Work

Google Search descriptions:
- “JAG Electric serves Pittsburg, Galena, and nearby communities with panel upgrades, rewiring, fixtures, outlets, and commercial electrical work.”
- “BBB A+ accredited electrician. Free estimates. Call (620) 714-1125 to schedule electrical service or prep your project details online.”
- “Need help with an electrical issue? Build a quick estimate-prep summary, then call JAG Electric for practical next steps.”

Landing page angle requirements:
- For Search Ads, send service-specific terms to service pages, not only homepage.
- Panel terms -> /services/panel-upgrades.
- Rewiring terms -> /services/rewiring.
- Lighting/ceiling fan terms -> /services/lighting-fixtures.
- Outlet/switch/GFCI terms -> /services/outlets-switches.
- Remodel/new construction terms -> /services/remodel-new-construction.
- Commercial terms -> /services/commercial-electrical.
- Local broad terms -> homepage or /service-area/pittsburg-ks.

GBP post draft requirements:
- Use only approved claims.
- Include representative photo labels internally.
- No emergency/24-7 wording.
- No spend/posting without Toby approval.

## 10. SEO implementation requirements

Site-wide requirements:
- One H1 per route.
- Semantic HTML5: header, main, section, footer.
- Unique title/meta per route.
- Canonical tag per route.
- OpenGraph title/description/image per route.
- Crawlable NAP in footer on every page.
- Header/footer links to all core pages.
- Footer must link all six service pages and all five city pages.
- Internal links must be contextual, not only nav/footer.
- Sitemap includes every route.
- robots.txt returns 200 and references sitemap.
- Image alt text is descriptive and honest.
- Lazy-load below-fold images; set width/height or CSS aspect boxes to prevent CLS.
- Optimize image assets; prefer WebP.

Schema requirements:
- LocalBusiness/Electrician JSON-LD on homepage and contact/estimate page; city pages may include same business schema with same Galena address if implemented carefully.
- Do not include fake office addresses for city pages.
- Do not include license number unless verified.
- Use opening hours conservatively if included; avoid 24-hour schema.
- Service schema on each service page.
- BreadcrumbList schema on non-home routes.
- FAQPage schema only where visible FAQ text exists and answers are truthful.
- Review/AggregateRating schema must not invent reviewer names/dates; aggregate rating tied to confirmed Google rating if used.

Niko-specific corrections:
- Remove unsupported “licensed and insured” from visible copy/schema unless proof is supplied. The original Niko handoff had some license language; Silent Bob truth boundaries override it.
- Do not use “veteran-owned” unless confirmed. Not confirmed for JAG.
- Joplin page must not imply Missouri license.

## 11. Visual implementation requirements

Preserve the current premium design direction but make it feel real with photos.

Keep:
- Dark graphite/black switchgear surfaces.
- Electric cyan/blue-white glow.
- Copper conductor accents.
- Amber sparingly for CTA/caution/proof highlights.
- Circuit-board/service-radius mechanic.
- Estimate-prep workbench mechanic.
- Clean high-contrast typography.

Add:
- Photo-led sections throughout homepage, service index, service pages, and city pages.
- Route-specific representative photos instead of repeated generic visuals.
- Image captions/source notes where needed to prevent project-photo confusion.
- Better editorial rhythm: large photo + dense useful copy + technical callout + CTA, not repeated small cards.

Do not add:
- Generic blue/orange contractor palette.
- Template-like three-card grids as the dominant body pattern.
- Stock-photo hero that weakens the circuit identity.
- Decorative motion that slows the site or distracts from service content.

Responsive requirements:
- 390px mobile must not clip nav, cards, images, tabs, service rows, city maps, forms, or sticky CTAs.
- Photo grids collapse cleanly to one column on mobile.
- Estimate-prep inputs and generated summary remain usable at 390px.
- City/service internal link cards must not overflow.

Motion requirements:
- Respect prefers-reduced-motion.
- Use CSS/SVG motion for circuit traces and section reveals; no heavy WebGL required for this revision.
- Keep animations functional and restrained.
- Do not sacrifice Lighthouse performance for decorative motion.

## 12. Build and verification gates for Craig

Craig must not call this revision done until every gate below is satisfied and documented in BUILD_PROOF.md and campaign/agency handoff record.

### Gate A — Source/content inventory
- Read shared brief, Silent Bob fact brief, Sage brand handoff, Wordsmith copy, Niko SEO handoff, Chad media plan, Eddie video/asset package, this Forge handoff.
- Create/update ASSET_INVENTORY.md before changing visual assets.
- List every photo/visual slot and source status.

### Gate B — Build/content completion
- Homepage expanded with strong conversion sections and representative photos.
- Six service pages expanded to roughly 1000–1200 words each.
- Five city pages expanded to roughly 1000–1200 words each.
- Services index and service-area index expanded into real hubs.
- About/reviews/estimate-prep strengthened.
- All route titles, metas, canonicals, OG data, schema, internal links updated.
- Sitemap/robots updated.

### Gate C — Truth/claim audit
- Search source and built output for forbidden claims:
  - 24/7
  - emergency
  - same-day guarantee
  - warranty
  - financing
  - #1 / best
  - unverified license number
  - fake sent/submitted/booking confirmation
  - “our project” / “JAG project” around representative photos
  - veteran-owned
  - Missouri licensed
- If any appear without proof, block and fix.

### Gate D — Asset quarantine audit
- ASSET_INVENTORY.md complete.
- Any quarantined asset filename/URL/hash/prompt label absent from source and build.
- No representative image implies JAG project ownership.
- No fake staff/truck/logo/project images.

### Gate E — Local build
- npm install if needed.
- npm run build passes.
- No build warnings that indicate missing assets or broken routes.

### Gate F — Route HTTP 200 inventory
Probe every declared route locally and live after deploy:
- /
- /services
- /services/panel-upgrades
- /services/rewiring
- /services/lighting-fixtures
- /services/outlets-switches
- /services/remodel-new-construction
- /services/commercial-electrical
- /service-area
- /service-area/pittsburg-ks
- /service-area/galena-ks
- /service-area/joplin-mo
- /service-area/frontenac-ks
- /service-area/girard-ks
- /about
- /reviews
- /estimate-prep
- /sitemap.xml
- /robots.txt

Document status codes in BUILD_PROOF.md.

### Gate G — Browser QA
- Desktop screenshot of homepage.
- Mobile screenshot of homepage at 390px.
- Desktop screenshot of at least one service page.
- Mobile screenshot of at least one service page at 390px.
- Desktop screenshot of at least one city page.
- Mobile screenshot of at least one city page at 390px.
- Desktop/mobile screenshot of estimate-prep tool with summary visible.
- Browser console clean: zero JS errors, zero asset 404s.
- Verify mobile nav opens and contains Home, Services, Service Area, Reviews, About, Estimate Prep/Contact.
- Verify click-to-call hrefs use +16207141125 or equivalent correct tel link.
- Verify mailto uses jag.electric@yahoo.com.

### Gate H — SEO/schema QA
- Lighthouse documented for Performance, Accessibility, SEO; all >85.
- Validate JSON-LD at Schema.org validator or equivalent. Document result.
- Verify one H1 per route for homepage, one service route, one city route, estimate-prep.
- Verify sitemap lists all routes.
- Verify robots.txt references sitemap.
- Verify canonical URLs are correct.

### Gate I — Deployment proof
- Commit source changes only after gates pass locally.
- Push to GitHub main or approved branch.
- Deploy to Vercel production.
- Verify live URL and every route 200 on production.
- Capture production screenshots, not only local.
- Write commit SHA, deployment URL, route inventory, screenshot paths, Lighthouse scores, schema validation result, and known limitations to BUILD_PROOF.md.
- Update ARCHITECTURE.md if architecture/assets/routes changed.

## 13. Files Craig should produce/update

Required project-root files:
- ASSET_INVENTORY.md
- ARCHITECTURE.md
- BUILD_PROOF.md

Required source/public updates:
- public/images/ with final optimized photo assets.
- sitemap.xml / robots output as needed.
- Route/content source files/data with expanded content.
- SEO/schema metadata source.

Required proof paths:
- Store screenshots under /home/toby/jag-electric-site/proof/ with clear names such as:
  - proof/revision-home-desktop.png
  - proof/revision-home-mobile-390.png
  - proof/revision-service-panel-desktop.png
  - proof/revision-service-panel-mobile-390.png
  - proof/revision-city-pittsburg-desktop.png
  - proof/revision-city-pittsburg-mobile-390.png
  - proof/revision-estimate-summary-mobile-390.png
  - proof/revision-lighthouse.json or proof/revision-lighthouse.md
  - proof/revision-schema-validation.md

## 14. Definition of done

This revision is done only when:
- The site looks like a real electrician business website, not just a polished prototype.
- Photos/visuals are trade-credible and honestly inventoried.
- Homepage has stronger conversion depth.
- Every service page is deep enough for local SEO and useful to a customer.
- Every city page is deep enough for local SEO and avoids fake-office/local-claim spam.
- Ad/landing hooks are stronger and draft-only/no-spend.
- All verified facts remain intact.
- No forbidden claims appear in visible copy, metadata, schema, or ad drafts.
- Every route returns 200.
- Browser console is clean.
- Mobile holds at 390px.
- Lighthouse scores are documented and above 85.
- Schema validates.
- BUILD_PROOF.md and ARCHITECTURE.md are updated.
- Campaign/agency handoff record includes URL, commit SHA, route inventory, screenshots, Lighthouse scores, schema result, and any known limitations.

If any gate fails, report BLOCKED with the exact failed gate and file/route evidence. Do not call it complete.
