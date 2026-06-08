# Jag Electric revision QA — local SEO/photo expansion

Status: PASS locally before deploy.

## User correction addressed
- Added representative trade photos throughout homepage, service pages, city pages, and service cards.
- Added honest photo captions/alt text: representative electrical service photos; not claimed as JAG Electric job photos.
- Rebuilt output as static route HTML under `dist/` so service/city SEO text exists in crawled HTML, not only client-rendered JS.
- Expanded all 6 individual service pages to 1000–1200 visible body words.
- Expanded all 5 city/service-area pages to 1000–1200 visible body words.
- Homepage now has more meat: real scope explanation, photo system, fast call checklist, service cards with photos, proof separation, estimate-prep, reviews, CTA.
- Stronger ad copy/media package exists from Chad in `agency-handoffs/chad-revision-ads.md`; Niko calendar/SEO update in `agency-handoffs/niko-revision-seo.md`; Wordsmith deep copy package in `agency-handoffs/wordsmith-revision-copy.md`.

## Word-count audit — visible body text
Service pages:
- commercial-electrical: 1017
- lighting-fixtures: 1027
- outlets-switches: 1034
- panel-upgrades: 1010
- remodel-new-construction: 1038
- rewiring: 1015

Service-area pages:
- frontenac-ks: 1043
- galena-ks: 1045
- girard-ks: 1043
- joplin-mo: 1039
- pittsburg-ks: 1039

## Browser checks
- Homepage loaded locally, 1 H1, all images completed with natural dimensions.
- Panel upgrades page loaded locally, 1 H1, image loaded, visible page word count over 1000.
- Pittsburg service-area page loaded locally, 1 H1, image loaded, visible page word count over 1000.
- Estimate-prep form exercised locally; changing location/issue updated the summary and mailto body.
- Browser console checks returned no material errors during smoke.

## Screenshots
- `proof/revision/home-desktop.png`
- `proof/revision/home-mobile.png`
- `proof/revision/service-panel-desktop.png`
- `proof/revision/city-pittsburg-desktop.png`
- `proof/revision/estimate-mobile.png`
