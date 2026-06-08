# Craig deployment and verification checklist — Jag Electric completion revision

Revision brief date: 2026-06-08
Repo: `/home/toby/jag-electric-site`
Live URL: `https://jag-electric-site.vercel.app/`
GitHub: `https://github.com/tobymilleragency-lgtm/jag-electric-site`

## Craig scope

Craig verifies and deploys after Forge has implemented the revision. Craig does not approve completion on build success alone.

This revision is BLOCKED until the completed site proves all of the following:

- Required routes build and return 200.
- Homepage, service pages, and service-area pages have real depth.
- Service pages target roughly 1000–1200 customer-facing SEO words each.
- City/service-area pages target roughly 1000–1200 customer-facing local SEO words each.
- Representative/generative/stock visuals are honestly inventoried and never presented as Jag Electric job photos.
- No visible internal, agency, showpiece, generated-placeholder, or lane/process language appears in customer-facing pages.
- No unsupported claims appear: fake reviews, license numbers, 24/7/emergency claims, same-day guarantees, warranties, financing, rankings, fake CRM/form delivery, or unverified years in business beyond sourced facts.
- Desktop and mobile browser QA pass on visual authenticity, not only HTTP status.
- GitHub and Vercel production deployment proof is captured.

## Required routes to probe

Probe every route below locally and live after deployment:

```text
/
/services
/services/panel-upgrades
/services/rewiring
/services/lighting-fixtures
/services/outlets-switches
/services/remodel-new-construction
/services/commercial-electrical
/service-area
/service-area/pittsburg-ks
/service-area/galena-ks
/service-area/joplin-mo
/service-area/frontenac-ks
/service-area/girard-ks
/about
/reviews
/estimate-prep
/sitemap.xml
/robots.txt
```

Expected result:

- HTML routes: 200, correct Jag Electric title/content, no blank shell, no wrong-brand residue.
- `/sitemap.xml`: 200, valid XML, includes all public routes.
- `/robots.txt`: 200, points to sitemap and does not block crawlable pages.

## Pre-deploy source and handoff gates

Before deploy, verify these handoff files exist and are usable. If any required lane output is missing, mark BLOCKED and do not deploy as complete.

```bash
cd /home/toby/jag-electric-site
find agency-handoffs -maxdepth 1 -type f -print | sort
```

Required content gates:

- Silent Bob: fact/proof boundary and representative-photo policy.
- Sage/Eddie/Rex: photo slot inventory and asset direction by route/section.
- Wordsmith: deep service/city copy plus stronger ad copy.
- Niko: local SEO structure, keywords, internal links, 30-day calendar update.
- Chad: draft-only media/ad copy package, no spend/no public launch.
- Forge: implementation requirements for route depth and photos.
- Craig: this checklist.

BLOCKED if the asset inventory does not include, at minimum:

```text
route
section/slot id
current source
status: keep | replace | quarantine
reason
replacement source
asset type: real supplied | public reference | stock | generated | representative
alt text
customer-facing claim allowed? yes/no
screenshot proof path after implementation
```

## Build gate

Run dependency install only if needed. Do not change source during Craig verification unless explicitly tasked with fixing a failure.

```bash
cd /home/toby/jag-electric-site
npm install
npm run build
```

If the project uses a different package manager, use the lockfile-native command instead:

```bash
pnpm install --frozen-lockfile && pnpm build
# or
bun install --frozen-lockfile && bun run build
```

Pass criteria:

- Build exits 0.
- No route generation/prerender errors.
- No missing asset errors.
- No TypeScript/Vite/Next fatal warnings hidden by fallback output.
- Build output contains the revised routed pages, not only a homepage shell.

Record:

```text
Build command:
Exit code:
Build duration:
Notable warnings:
Gate: PASS/BLOCKED
```

## Local route probe gate

Start the site locally using the actual project preview command.

Typical Vite/static flow:

```bash
cd /home/toby/jag-electric-site
npm run build
npm run preview -- --host 127.0.0.1
```

Then probe every route:

```bash
BASE=http://127.0.0.1:4173
for route in \
  / \
  /services \
  /services/panel-upgrades \
  /services/rewiring \
  /services/lighting-fixtures \
  /services/outlets-switches \
  /services/remodel-new-construction \
  /services/commercial-electrical \
  /service-area \
  /service-area/pittsburg-ks \
  /service-area/galena-ks \
  /service-area/joplin-mo \
  /service-area/frontenac-ks \
  /service-area/girard-ks \
  /about \
  /reviews \
  /estimate-prep \
  /sitemap.xml \
  /robots.txt
 do
  code=$(curl -s -o /tmp/jag-route-probe.out -w "%{http_code}" "$BASE$route")
  bytes=$(wc -c < /tmp/jag-route-probe.out)
  printf "%s %s %s bytes\n" "$code" "$route" "$bytes"
done
```

Pass criteria:

- Every listed route returns 200.
- HTML routes produce substantive output, not the same empty fallback for every path.
- Sitemap and robots output are not HTML fallback pages.

## Word count and thin-page audit

Audit rendered or built page text, not only source strings. The goal is customer-facing body depth.

Required targets:

- Each individual service page: roughly 1000–1200 customer-facing SEO words.
- Each city/service-area page: roughly 1000–1200 customer-facing local SEO words.
- Homepage: materially expanded conversion depth; no thin hero/cards-only page.
- About, reviews, estimate prep: enough useful content to support trust and conversion without unsupported claims.

Suggested audit script:

```bash
cd /home/toby/jag-electric-site
BASE=http://127.0.0.1:4173
python3 - <<'PY'
import re, subprocess
from html.parser import HTMLParser

routes = [
  '/',
  '/services',
  '/services/panel-upgrades',
  '/services/rewiring',
  '/services/lighting-fixtures',
  '/services/outlets-switches',
  '/services/remodel-new-construction',
  '/services/commercial-electrical',
  '/service-area',
  '/service-area/pittsburg-ks',
  '/service-area/galena-ks',
  '/service-area/joplin-mo',
  '/service-area/frontenac-ks',
  '/service-area/girard-ks',
  '/about',
  '/reviews',
  '/estimate-prep',
]
base = 'http://127.0.0.1:4173'

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.skip = 0
        self.parts = []
    def handle_starttag(self, tag, attrs):
        if tag in {'script','style','svg','noscript'}:
            self.skip += 1
    def handle_endtag(self, tag):
        if tag in {'script','style','svg','noscript'} and self.skip:
            self.skip -= 1
    def handle_data(self, data):
        if not self.skip:
            self.parts.append(data)

for route in routes:
    html = subprocess.check_output(['curl','-fsSL',base+route], text=True)
    parser = TextExtractor()
    parser.feed(html)
    text = re.sub(r'\s+', ' ', ' '.join(parser.parts)).strip()
    words = re.findall(r"[A-Za-z0-9][A-Za-z0-9'’-]*", text)
    print(f'{len(words):5d} {route}')
PY
```

Pass criteria:

- Service pages and city pages are not token-swapped duplicates.
- Service/city pages land close to the 1000–1200 target. Small over/under variance is acceptable only if the page is useful and non-thin.
- Copy is practical, local, customer-facing, and free of internal process language.
- No page uses hidden text, keyword stuffing, repeated boilerplate, or fake proof to reach the count.

BLOCKED if any service/city page is materially thin, generic, or mostly repeated boilerplate.

## Truth-boundary and forbidden-claim audit

Search customer-facing source and build output for unsupported/internal terms.

```bash
cd /home/toby/jag-electric-site
patterns=(
  "24/7"
  "24-7"
  "emergency"
  "same-day"
  "guaranteed"
  "warranty"
  "financing"
  "licensed"
  "license #"
  "license number"
  "best electrician"
  "#1"
  "top rated"
  "fake"
  "placeholder"
  "generated placeholder"
  "representative photo"
  "stock photo"
  "showpiece"
  "agency"
  "visual proof"
  "asset plan"
  "internal"
  "CRM"
  "lead delivery"
)
for p in "${patterns[@]}"; do
  grep -RIn --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=agency-handoffs --exclude='*.map' "$p" . && echo "FOUND: $p"
done
```

Important interpretation:

- Some terms may be allowed in internal handoff files, but not in visible site pages.
- Conservative visible scheduling language is allowed: call to schedule; limited evening/weekend appointments.
- Do not show “generated,” “representative,” or “stock” labels in customer-facing copy unless explicitly approved. Those labels belong in the internal asset inventory and alt/source documentation. Alt text should be honest without pretending the image is a Jag Electric project photo.
- “Licensed” is BLOCKED unless verified in source materials. The supplied brief confirms BBB accreditation, A+ rating, business dates, owner/principal, service categories, reviews, phone, email, address, and general electrical contractor category; it does not provide a license number.

## Visual asset inventory and authenticity gate

Before deploy, compare implemented assets against the approved inventory.

Required audit commands:

```bash
cd /home/toby/jag-electric-site
find public src -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.webp' -o -iname '*.avif' -o -iname '*.svg' \) -print | sort
```

For rendered pages, inspect:

- Hero image/visual.
- Homepage proof/service sections.
- Every service page main visual and in-page support visuals.
- Every city page main visual and local support visuals.
- About/reviews/estimate-prep visual usage.

Pass criteria:

- Electrical trade credibility: panels, breakers, fixtures, wiring, outlets, switchgear, conduit, service work, residential/commercial electrical contexts, workbench/details.
- No futuristic robot/AI-concept imagery in real service/project sections.
- No random scenic filler, unrelated house shots, fake technician glamour, or impossible electrical work imagery.
- No asset is implied to be Jag Electric jobsite proof unless source-confirmed.
- Alt text describes the scene honestly and supports accessibility/SEO without fake ownership claims.
- Any quarantined/rejected asset from prior review is absent from customer-facing source and build output.

BLOCKED if asset inventory is missing, screenshots are missing, or any customer-facing image feels fake, unrelated, or unsupported.

## Browser QA gate

Use browser inspection, not curl only. Capture desktop and mobile screenshots for representative pages.

Minimum pages to inspect manually:

```text
/
/services/panel-upgrades
/services/rewiring
/services/commercial-electrical
/service-area/pittsburg-ks
/service-area/galena-ks
/service-area/joplin-mo
/estimate-prep
```

Viewport requirements:

- Desktop: 1440x1000 or similar.
- Mobile: 390x844 or similar.

Check in browser:

- First-screen hero loads with no broken images.
- Header has Home link and all nav routes work.
- Footer has Home link and important routes work.
- No horizontal scroll on mobile.
- No text clipped, overlapping, hidden behind sticky nav, or awkwardly wrapped.
- CTAs are visible and honest: phone/mailto/estimate-prep only if wired accordingly.
- Forms/tools do not claim submission/CRM delivery unless actually integrated and tested.
- Console has no material runtime errors.
- Images lazy-load correctly; no blank boxes after scroll.
- Dark/cyan/amber/copper design remains readable and credible.
- Site feels like a real local electrician site with strong photos, not a generic AI demo.

Screenshot proof requirement:

```text
agency-handoffs/screenshots/local-home-desktop.png
agency-handoffs/screenshots/local-home-mobile.png
agency-handoffs/screenshots/local-service-panel-desktop.png
agency-handoffs/screenshots/local-service-commercial-mobile.png
agency-handoffs/screenshots/local-city-pittsburg-desktop.png
agency-handoffs/screenshots/local-city-joplin-mobile.png
agency-handoffs/screenshots/live-home-desktop.png
agency-handoffs/screenshots/live-home-mobile.png
agency-handoffs/screenshots/live-service-panel-desktop.png
agency-handoffs/screenshots/live-city-pittsburg-mobile.png
```

Craig completion report must separate:

```text
Technical gate: PASS/BLOCKED
Design/authenticity gate: PASS/BLOCKED
SEO depth gate: PASS/BLOCKED
Truth-boundary gate: PASS/BLOCKED
Deployment gate: PASS/BLOCKED
```

## Ad-copy package verification

Chad/Wordsmith/Niko outputs are draft-only. No public sends, no CRM mutation, no ad launch, and no spend without Toby approval.

Verify the final handoff contains:

- Meta hooks.
- Meta headlines.
- Short primary text.
- Long primary text.
- Google search ad headlines.
- Google search ad descriptions.
- Landing page angle.
- GBP posts.
- 30-day content/calendar update.
- Truth-boundary notes for every claim.

Pass criteria:

- Stronger than generic “call today” contractor copy.
- Local to Pittsburg/Galena/Joplin area without overclaiming every town as a verified top market.
- No fake urgency, no 24/7 emergency claim, no unsupported license/warranty/ranking/finance claim.
- Clearly marked draft-only/no spend.

## GitHub deploy gate

Pre-flight:

```bash
cd /home/toby/jag-electric-site
gh auth status
git remote -v
git status --short
git diff --stat
git branch --show-current
```

Pass criteria:

- GitHub auth is logged in as `tobymilleragency-lgtm`.
- Remote points to `https://github.com/tobymilleragency-lgtm/jag-electric-site` or equivalent SSH remote for that repo.
- Branch is the intended deployment branch, normally `main`.
- Diff contains only intended revision files. Do not stage unrelated dirt.

Commit and push only after all local gates pass:

```bash
git add <intended files only>
git commit -m "Complete Jag Electric site depth and asset revision"
git push origin main
git rev-parse HEAD
```

Record commit SHA and pushed branch.

## Vercel production deploy gate

Deploy after GitHub push:

```bash
cd /home/toby/jag-electric-site
vercel --prod
```

If the project is already linked, do not relink to a new project unless the existing link is wrong. If linking is required, verify the Vercel project identity before continuing.

Inspect deployment:

```bash
vercel inspect <deployment-url>
```

Pass criteria:

- Deployment status is READY.
- Build logs do not hide route/asset errors.
- Production alias remains `https://jag-electric-site.vercel.app/` unless Toby approved a different production target.
- No custom-domain/alias drift.

## Live smoke gate

After deployment, probe production URL and every required route.

```bash
BASE=https://jag-electric-site.vercel.app
for route in \
  / \
  /services \
  /services/panel-upgrades \
  /services/rewiring \
  /services/lighting-fixtures \
  /services/outlets-switches \
  /services/remodel-new-construction \
  /services/commercial-electrical \
  /service-area \
  /service-area/pittsburg-ks \
  /service-area/galena-ks \
  /service-area/joplin-mo \
  /service-area/frontenac-ks \
  /service-area/girard-ks \
  /about \
  /reviews \
  /estimate-prep \
  /sitemap.xml \
  /robots.txt
 do
  code=$(curl -L -s -o /tmp/jag-live-probe.out -w "%{http_code}" "$BASE$route")
  bytes=$(wc -c < /tmp/jag-live-probe.out)
  printf "%s %s %s bytes\n" "$code" "$route" "$bytes"
done
```

Pass criteria:

- All final status codes are 200.
- No route returns Vercel 404 or a wrong SPA fallback.
- Sitemap and robots are live and correct.
- Browser smoke on live production matches local screenshots.

## Final deployment proof format

Craig must write proof back into the campaign/task/session before claiming complete. Use this format:

```text
CRAIG DEPLOYMENT PROOF — JAG ELECTRIC REVISION

Repo: /home/toby/jag-electric-site
GitHub remote:
Branch:
Commit SHA:
Commit message:
Vercel deployment URL:
Production URL: https://jag-electric-site.vercel.app/
Vercel inspect status:

Build gate: PASS/BLOCKED
Build command:
Build output summary:

Local route probe gate: PASS/BLOCKED
Routes probed:
Failed routes, if any:

Word count / SEO depth gate: PASS/BLOCKED
Service page word counts:
City page word counts:
Thin/duplicate pages, if any:

Truth-boundary gate: PASS/BLOCKED
Unsupported claims found:
Internal/demo wording found:
Resolution:

Visual asset/authenticity gate: PASS/BLOCKED
Asset inventory present: YES/NO
Quarantined/rejected assets absent: YES/NO
Representative/generated/stock sources honestly inventoried: YES/NO
Customer-facing image concerns:

Browser QA gate: PASS/BLOCKED
Desktop screenshots:
Mobile screenshots:
Console errors:
Mobile layout issues:

Ad-copy handoff gate: PASS/BLOCKED
Draft-only/no spend marked: YES/NO
Unsupported ad claims found:

Live smoke gate: PASS/BLOCKED
Production route probe output:
Live browser smoke screenshots:

Known remaining risk:
Recovery instruction if deployment must be rolled back:
Overall status: PASS/BLOCKED
```

## Rollback instruction

If production fails after deploy and cannot be fixed immediately:

```bash
cd /home/toby/jag-electric-site
git log --oneline -5
# identify last known-good commit
vercel rollback
# or redeploy last known-good commit from Vercel dashboard/CLI if rollback is unavailable
```

Report the failed deployment URL, failed commit SHA, failure logs, and rollback result. Do not leave a broken production alias without telling Toby exactly what happened.

## Hard stop conditions

Stop and mark BLOCKED if any of these are true:

- Build fails.
- Any required route returns non-200 locally or live.
- Sitemap/robots are missing or wrong.
- Word count audit shows thin service/city pages.
- Pages are generic token swaps instead of useful local/service content.
- Asset inventory is missing or does not map images to route/section slots.
- Any image looks fake, unrelated, futuristic/robotic, or is implied to be a Jag Electric project photo without source proof.
- Visible copy includes internal/process language.
- Unsupported claims appear in visible pages or ad drafts.
- Browser screenshots reveal broken layout, blank images, horizontal mobile overflow, unreadable text, or generic AI-demo feel.
- GitHub auth/remote identity is wrong.
- Vercel deploy is not READY.
- Production alias does not serve the latest verified deployment.
- Public ad launch/spend/CRM mutation is requested without Toby approval.
