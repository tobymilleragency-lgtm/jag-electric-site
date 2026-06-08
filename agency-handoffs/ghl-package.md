# Jag Electric — Draft-Only GHL / GBP Activation Package

Prepared by: GHL Agent
Prepared timestamp: 2026-06-08T14:47:24-05:00
Package status: DRAFT ONLY — NOT PUSHED
Proof handle: `JAG-GHL-PACKAGE-DRAFT-20260608-144724-CDT`
Source brief: `/home/toby/jag-electric-site/agency-handoffs/shared-brief.md` plus user-provided shared brief in task

## Approval gate — hard stop

NO GHL MUTATION HAS BEEN PERFORMED.
NO GBP POST HAS BEEN PUBLISHED.
NO EMAIL, SMS, SOCIAL POST, REVIEW REQUEST, FORM, WORKFLOW, PIPELINE, CONTACT, OPPORTUNITY, TAG, CUSTOM FIELD, TASK, OR NOTE HAS BEEN CREATED OR CHANGED.

This document is a draft-only activation package for Toby review. Nothing in this package may be pushed to GoHighLevel, Google Business Profile, Facebook, or any live CRM/location until Toby explicitly approves the exact push scope.

Required approval wording before any live action:

`Toby approval: Push Jag Electric GHL/GBP package [specific sections approved] to [specific GHL location/account and/or GBP profile].`

If the GHL location/account ID, GBP profile, connected social account, or approved scope is missing, stop and ask. Do not infer it.

## Business identity and truth boundaries

Business:
- JAG Electric / Jag Electric, LLC
- Electrician / electrical contractor
- 807 E 7th St, Galena, KS 66739
- Phone: (620) 714-1125
- Email: jag.electric@yahoo.com
- Owner/principal from BBB: Joe Gendre
- Service area language: Galena-based, serving Pittsburg, KS and nearby communities within roughly a 30-mile radius

Allowed trust facts:
- BBB accredited since 2/20/2020, A+ rated
- Business started 3/7/2019; incorporated 4/2/2019; LLC
- Google rating supplied by Toby: 4.9 from 50 Google reviews
- Facebook: 354 likes/followers; 100% recommend based on 20 reviews
- HomeAdvisor: 4.9 from 45 reviews; approved; Master Electrician and Panel Upgrades listed; 24 years of experience listed by HomeAdvisor

Do not claim:
- License number unless Toby supplies it
- 24/7 emergency service
- Guaranteed same-day service
- Warranty or financing
- #1/ranking claims
- CRM automation, instant SMS, or live form delivery until tested and proven
- Stock or representative photos as real JAG project photos

## Proposed GHL location/account target

Status: REQUIRED BEFORE PUSH

Fields needed from Toby or verified GHL MCP read-only check after approval to inspect:
- GHL agency/location name
- GHL location ID
- Existing pipelines/workflows/forms/tags/custom fields for JAG Electric, if any
- Connected email sending domain/status
- A2P/SMS status
- Connected Facebook/GBP/social accounts, if any

Packaging recommendation:
- Reconcile existing GHL infrastructure first. Do not duplicate a working lead pipeline, form, or workflow if one exists.
- If no existing JAG location infrastructure exists, create only after approval using the proposed schema below.

## Proposed contact custom fields

Custom field folder suggestion: `Jag Electric Intake`

Draft fields to create or map, subject to existing-field reconciliation:

1. `JAG Project Type`
   - Type: dropdown / single select
   - Options: Panel upgrade; Rewiring; Lighting / fixture install; Outlets / switches; Remodel / new construction; Commercial electrical; Other

2. `JAG Property Type`
   - Type: dropdown / single select
   - Options: Residential; Commercial; Rental / investment property; Not sure

3. `JAG Service City`
   - Type: text
   - Purpose: capture city/town from form or call notes without overclaiming top markets

4. `JAG Preferred Contact Method`
   - Type: dropdown / single select
   - Options: Phone call; Email; Text if available/allowed
   - Guardrail: SMS option does not mean SMS automation is enabled. A2P proof required before SMS workflow use.

5. `JAG Best Time To Reach`
   - Type: text
   - Purpose: supports conservative scheduling language; limited evening/weekend appointments only when requested/available

6. `JAG Electrical Issue Summary`
   - Type: multiline text
   - Purpose: homeowner/business owner explains issue in plain English

7. `JAG Urgency Level`
   - Type: dropdown / single select
   - Options: Planning ahead; This week if possible; Soon; Safety concern / needs a call
   - Guardrail: do not promise emergency/24-7 response

8. `JAG Page Source`
   - Type: text
   - Example values: `/estimate-prep`, `/services/panel-upgrades`, `/service-area/pittsburg-ks`

9. `JAG Campaign Source`
   - Type: text
   - Example: `jag-electric-website-organic`

10. `JAG UTM Source`
    - Type: text

11. `JAG UTM Medium`
    - Type: text

12. `JAG UTM Campaign`
    - Type: text

13. `JAG Consent Notes`
    - Type: multiline text
    - Purpose: preserve any contact-permission checkbox text and timestamp

14. `JAG GBP Source Hint`
    - Type: text
    - Example: `GBP post: panel-upgrade-safety-checklist`

## Proposed tags

Create/map only after approval and existing-tag reconciliation.

Core contact/source tags:
- `client:jag-electric`
- `source:website`
- `source:gbp`
- `campaign:jag-electric-full-site`
- `service-area:pittsburg-ks`
- `service-area:galena-ks`
- `service-area:joplin-mo`
- `service-area:frontenac-ks`
- `service-area:girard-ks`

Service interest tags:
- `interest:panel-upgrade`
- `interest:rewiring`
- `interest:lighting-fixtures`
- `interest:outlets-switches`
- `interest:remodel-new-construction`
- `interest:commercial-electrical`

Workflow/status tags:
- `status:new-electrical-inquiry`
- `status:needs-call`
- `status:estimate-prep-submitted`
- `sms:not-enabled-until-a2p-proof`

## Proposed pipeline and stages

Pipeline name suggestion: `Jag Electric Leads`

If an existing lead pipeline exists, map these stages into it instead of creating a duplicate.

Draft stages:
1. `New Website / GBP Inquiry`
   - Entry point for estimate-prep forms, GBP CTA traffic, manual imports from calls, and organic website leads.

2. `Needs First Call`
   - Internal task created for Joe/JAG team or assigned staff to call. No automated SMS unless A2P proof exists.

3. `Contacted / Info Requested`
   - Lead has been reached or more info/photos/details requested.

4. `Estimate Scheduled / Site Visit Pending`
   - Only use when a real appointment or visit is confirmed.

5. `Estimate Sent`
   - Proposal/estimate delivered.

6. `Won / Job Scheduled`
   - Job accepted and scheduled.

7. `Lost / Not A Fit`
   - Closed lost, duplicate, spam, out of area, or no response.

Opportunity naming convention:
`{{contact.name}} — {{JAG Project Type}} — {{JAG Service City}}`

## Proposed forms

### Form 1: `Jag Electric Estimate Prep`

Purpose:
- Customer-facing estimate-prep form for website route `/estimate-prep`.
- Honest fallback if CRM wiring is not live: click-to-call and mailto should remain visible.

Draft fields:
- First name: required
- Last name: optional
- Phone: required
- Email: recommended/required if SMS is not verified; recommended minimum because email is safest automated follow-up channel
- Service address or city: required
- Property type: required dropdown
- Project type: required dropdown
- Electrical issue summary: required multiline
- Best time to reach: optional
- Preferred contact method: required dropdown
- Consent checkbox: required if automated email/SMS workflows are later enabled

Suggested consent copy:
`I agree that JAG Electric may contact me about this electrical project using the phone/email I provide. Message and data rates may apply if text messaging is used. This does not guarantee same-day service or emergency availability.`

Thank-you copy draft:
`Thanks — your project notes are ready for JAG Electric to review. If the issue is urgent or safety-related, call (620) 714-1125 directly so you are not waiting on a form response.`

Fallback CTA:
- Call: `(620) 714-1125`
- Email: `jag.electric@yahoo.com`

### Form 2: `Jag Electric Quick Call Request` optional

Purpose:
- Shorter embedded form for service pages and GBP traffic.

Draft fields:
- Name
- Phone
- Email
- City
- Project type
- Short message

Guardrail:
- Do not publish if it implies instant dispatch or 24/7 emergency service.

## Proposed draft workflow behavior

Workflow name suggestion: `Jag Electric — Website / GBP Lead Intake`

Status: DRAFT ONLY until Toby approves and test proof exists.

Trigger options after approval:
- GHL form submitted: `Jag Electric Estimate Prep`
- Or external website webhook/API lead event, if Craig/Forge wires the website directly

Draft actions:
1. Create/update contact with submitted identity fields.
2. Apply tags:
   - `client:jag-electric`
   - source tag based on route/UTM/GBP
   - one service-interest tag based on project type
   - `status:new-electrical-inquiry`
3. Create opportunity in mapped pipeline/stage: `New Website / GBP Inquiry`.
4. Create internal task:
   - Title: `Call new JAG Electric inquiry: {{contact.name}}`
   - Due: same business day if submitted during visible business hours; next business day if after hours
   - Notes include project type, city, best time to reach, issue summary, page source, and UTM values.
5. Add contact note:
   - Preserve full payload and source route.
6. Internal notification:
   - Email/manual notification only unless internal SMS has explicit approval and proof.
7. Homeowner/customer confirmation:
   - Email draft only after sender/domain verified.
   - SMS disabled until A2P verified and Toby approves activation.

Draft customer confirmation email:
Subject: `JAG Electric received your project notes`

Body:
`Thanks for reaching out to JAG Electric. Your electrical project notes have been received for review. If this is urgent or safety-related, please call (620) 714-1125 directly so you are not waiting on an online form response. Otherwise, someone from JAG Electric can follow up about the next best step for your project.`

SMS guardrail:
- No SMS sends.
- No automated text confirmation.
- No missed-call text-back claim.
- Enable only after A2P status, message copy, opt-out language, test proof, and Toby approval are recorded.

## Proposed website/webhook payload contract

If Craig/Forge wires the site form to GHL later, preserve these keys:

```json
{
  "business": "JAG Electric",
  "campaign": "jag-electric-full-site",
  "source": "website",
  "page_url": "https://[approved-domain]/estimate-prep",
  "page_path": "/estimate-prep",
  "utm_source": "",
  "utm_medium": "",
  "utm_campaign": "",
  "first_name": "",
  "last_name": "",
  "phone": "",
  "email": "",
  "service_city": "",
  "property_type": "",
  "project_type": "",
  "issue_summary": "",
  "best_time_to_reach": "",
  "preferred_contact_method": "",
  "consent_text": "",
  "submitted_at": "ISO-8601 timestamp"
}
```

Required proof before calling it live:
- Website form submission returned success to user.
- Contact exists in GHL.
- Custom fields populated individually, not only dumped into a note.
- Correct tags applied.
- Opportunity created in correct pipeline/stage.
- Internal task created.
- Internal notification delivered to approved recipient.
- Customer email confirmation delivered, if enabled.
- SMS not sent unless A2P proof and approval exist.

## GBP post package — draft only

GBP account/profile: REQUIRED BEFORE PUBLISH
Destination URL placeholders must be replaced with the approved live domain before scheduling/publishing.

### GBP Post 1 — Service spotlight: panel upgrades

Type: Update / service post
Status: Draft only
CTA: Call now or Learn more
Destination: `/services/panel-upgrades`

Copy:
`Older panels, overloaded breakers, and remodel plans can all be signs it is time to have your electrical panel looked at. JAG Electric handles residential and commercial electrical work around Galena, Pittsburg, and nearby communities. Call (620) 714-1125 to talk through your panel upgrade or electrical project.`

Proof handle needed before publish:
- `JAG-GBP-DRAFT-PANEL-UPGRADES-[date]`
- Screenshot or GBP post draft ID if staged in GHL/GBP
- Live destination URL HTTP 200 proof

### GBP Post 2 — Estimate prep / call summary

Type: Update
Status: Draft only
CTA: Learn more
Destination: `/estimate-prep`

Copy:
`Planning an electrical repair, fixture install, remodel, or wiring project? Use JAG Electric’s estimate-prep page to organize the basics before you call: project type, location, issue notes, and the best way to reach you. If the issue is urgent or safety-related, call (620) 714-1125 directly.`

Proof handle needed before publish:
- `JAG-GBP-DRAFT-ESTIMATE-PREP-[date]`
- Screenshot or GBP post draft ID if staged
- Form/fallback CTA proof if destination is live

### GBP Post 3 — Lighting, outlets, and switches

Type: Update / service post
Status: Draft only
CTA: Call now or Learn more
Destination: `/services/lighting-fixtures` or `/services/outlets-switches`

Copy:
`From fixture installs to outlet and switch repairs, JAG Electric helps homeowners and businesses get electrical work handled cleanly and safely. Based in Galena and serving Pittsburg and nearby areas, JAG Electric offers residential and commercial electrical contractor services by appointment.`

Proof handle needed before publish:
- `JAG-GBP-DRAFT-LIGHTING-OUTLETS-[date]`
- Screenshot or GBP post draft ID if staged
- Destination URL proof

### GBP Post 4 — Remodel and new construction electrical

Type: Update / service post
Status: Draft only
CTA: Learn more
Destination: `/services/remodel-new-construction`

Copy:
`Remodeling, adding on, or building new? JAG Electric provides residential and commercial electrical contractor services for new construction and remodel projects, including wiring, panels, lighting, outlets, and related electrical work. Call (620) 714-1125 to discuss your project.`

Proof handle needed before publish:
- `JAG-GBP-DRAFT-REMODEL-NEW-CONSTRUCTION-[date]`
- Screenshot or GBP post draft ID if staged
- Destination URL proof

## Proposed GBP service updates — draft review only

Do not edit GBP services without Toby approval and profile access confirmation.

Suggested service categories/items:
- Electrical contractor
- Residential electrical work
- Commercial electrical work
- Panel upgrades
- Electrical rewiring
- Lighting fixture installation
- Outlet and switch repair/install
- Remodel electrical
- New construction electrical
- Computer cable installation

Suggested GBP business description refresh, if Toby approves:
`JAG Electric is a Galena, Kansas electrical contractor serving residential and commercial customers in Pittsburg and nearby communities. Services include panel upgrades, rewiring, lighting and fixture installation, outlet and switch work, remodel electrical, new construction electrical, and related electrical contractor services. Call to schedule and discuss your project.`

Guardrail:
- Do not add 24/7, emergency service, license number, warranty, financing, or same-day language unless Toby supplies proof.

## Required proof handles before any completion claim

Draft/package proof:
- `JAG-GHL-PACKAGE-DRAFT-20260608-144724-CDT` — this file exists and contains the activation package.

Pre-push verification proof, after Toby approves read-only discovery:
- `JAG-GHL-READ-LOCATION-[timestamp]` — GHL location/account verified.
- `JAG-GHL-READ-EXISTING-INFRA-[timestamp]` — pipelines/forms/workflows/tags/fields checked before creation.
- `JAG-GBP-READ-PROFILE-[timestamp]` — GBP profile/account verified before any post/service edit.

If Toby approves mutation later, record separate proof for each action:
- `JAG-GHL-FIELDS-CREATED-OR-MAPPED-[timestamp]`
- `JAG-GHL-TAGS-CREATED-OR-MAPPED-[timestamp]`
- `JAG-GHL-PIPELINE-MAPPED-[timestamp]`
- `JAG-GHL-FORM-DRAFTED-[timestamp]`
- `JAG-GHL-WORKFLOW-DRAFTED-NOT-PUBLISHED-[timestamp]`
- `JAG-GHL-TEST-LEAD-READBACK-[timestamp]`
- `JAG-GBP-POST-DRAFT-STAGED-[timestamp]`
- `JAG-GBP-POST-PUBLISHED-[timestamp]` only if Toby explicitly approves publish

Every proof handle must include:
- Timestamp
- Tool/API/MCP response ID or screenshot path where applicable
- What changed
- What was skipped
- Post-state summary

## Push plan if Toby later approves

Phase 1 — read-only discovery:
- Verify GHL location/account.
- List existing tags/custom fields/forms/workflows/pipelines.
- Verify GBP/profile/social account if GBP posting is requested.
- Return adaptation plan before creating anything.

Phase 2 — draft setup only if approved:
- Create/map fields and tags.
- Create/map pipeline stages.
- Draft forms/workflow but keep sends/SMS/workflow publish disabled.
- Stage GBP post drafts if the platform supports draft/staging; otherwise keep local packet only.

Phase 3 — test proof before live:
- Submit controlled test lead only if Toby approves test mutation.
- Read back GHL contact/opportunity/fields/tags/task.
- Verify no SMS sent.
- Verify email only if approved and sending domain is valid.
- Verify GBP post destination URLs are live and accurate.

Phase 4 — live activation only with explicit approval:
- Publish workflow/form/GBP post/social post only for approved surfaces.
- Log exact mutation results and post-state.

## Current completion status

Done:
- Draft-only GHL/GBP activation package prepared.
- Proof handle assigned: `JAG-GHL-PACKAGE-DRAFT-20260608-144724-CDT`.
- No-mutation/no-send approval gate included.

Not done / blocked by approval:
- No GHL read/write checks performed.
- No GHL contacts, fields, tags, forms, workflows, pipelines, tasks, notes, or opportunities created or changed.
- No GBP profile checks, drafts, services, or posts created or changed.
- No SMS/email/social/GBP send or publish performed.
