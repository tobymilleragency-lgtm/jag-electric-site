# Lloyd Outreach Doc — JAG Electric Site Campaign
# Status: DRAFT — no external sends, no CRM mutations until Toby approves

Generated: 2026-06-08
Lane: Lloyd (Assistant)
Client: JAG Electric, LLC — Joe Gendre, owner
Purpose: Caller cockpit + booking workflow + outcome buttons + outreach template ready for Toby review and GHL Agent execution.

---

## 1. CONTACT RECORD (caller cockpit)

Field             | Value
------------------|-----------------------------------------------
Business name     | JAG Electric / Jag Electric, LLC
Owner/contact     | Joe Gendre
Phone             | (620) 714-1125
Email             | jag.electric@yahoo.com
Address           | 807 E 7th St, Galena, KS 66739
Service area      | Pittsburg KS and roughly 30-mile radius
Primary cities    | Pittsburg, Galena, Frontenac, Girard KS; Joplin MO edge
BBB status        | Accredited A+, since 2/20/2020
Google rating     | 4.9 stars / 50 reviews
Facebook          | https://www.facebook.com/jagelectricks/
Hours (safe use)  | Call to schedule; limited evening/weekend availability
CRM contact ID    | [PLACEHOLDER — GHL Agent to populate]
GHL pipeline      | [PLACEHOLDER — assign after Toby approves stage map]
GHL tags          | jag-electric, electrician, galena-ks, site-build-2026

---

## 2. CONTRACTOR CALLER WORKFLOW

### Before the call
1. Pull contact record above. Confirm phone (620) 714-1125 is current.
2. Load this doc on second screen as reference.
3. Have booking link ready (see Section 3).
4. Have the site URL ready to share once deployed.

### Opening (first 15 seconds)
"Hi, is this Joe? Hey Joe, this is [caller name] with Go Alpha Marketing. We're building out your new JAG Electric website — I just wanted to touch base on a couple quick things so we get it right. Do you have two minutes?"

### Confirm / verify during call
- Confirm service area: "We're putting Pittsburg as your main market and about a 30-mile radius. Does that still sound right, or is there anywhere you're not taking jobs right now?"
- Confirm hours language: "We're keeping it as 'call to schedule, limited evening and weekend availability' — fair to say?"
- Ask about license number: "Do you want your state electrical license number on the site, or leave that off?"
- Ask about project photos: "Any photos of your own work you'd want on the site? Even a few phone shots from a panel or a fixture job would be great."
- Ask about booking preference: "When someone fills out the estimate form, do you want it to go straight to your email at jag.electric@yahoo.com, or do you want a phone call instead?"
- Ask about GBP link: "Is your Google Business Profile the main one for JAG Electric in Galena? We'll link the review widget to it."

### Closing
"Perfect — we'll get that locked in. Once the site is live I'll send you a preview link. Any questions for me right now?"

### Post-call actions (do not skip)
- Log outcome in GHL using outcome buttons below.
- Write call notes into GHL contact record.
- If booking confirmed: send calendar invite placeholder (see Section 3).
- If photos promised: add follow-up task in GHL — 48-hour remind.
- If license number given: add to brief addendum, flag to Wordsmith/Forge.

---

## 3. BOOKING LINK WORKFLOW ASSUMPTIONS

BLOCKER: No live booking link exists yet. The following assumptions hold until Craig/GHL Agent sets one up. Do not send a fake or placeholder URL to Joe.

Assumed workflow once booking link is live:
- Platform: GHL calendar or Calendly embed (Craig to confirm).
- Appointment type: "Site review / approval call — 15 min."
- Availability owner: Go Alpha Marketing (Toby or delegate), not Joe.
- Link behavior: sends a confirmation email to jag.electric@yahoo.com and to Toby.
- GHL automation: tag contact jag-electric-call-booked on booking.
- Reminder: automated 24-hr and 1-hr SMS/email to Joe's phone/email.
- After call: GHL outcome button triggers next-stage move.

What caller says if asked for a link before it exists:
"I'll send that over right after this call — give me just a moment to get it set up for you." Then flag to Craig immediately.

---

## 4. CALL OUTCOME BUTTONS

These are the GHL disposition options to log after every call or contact attempt.
GHL Agent: map these to pipeline stages in the JAG Electric contact record.

Button label         | GHL stage / tag action
---------------------|-----------------------------------------------------------
REACHED - CONFIRMED  | Stage: Active Build | Tag: jag-confirmed
REACHED - CALL BACK  | Stage: Follow-up | Tag: jag-callback | Create task: callback date/time
REACHED - NOT NOW    | Stage: Nurture | Tag: jag-not-now | Note reason
REACHED - DECLINED   | Stage: Closed Lost | Tag: jag-declined | Note reason
VOICEMAIL LEFT       | Stage: Attempted | Tag: jag-vm-1 (increment per attempt)
NO ANSWER - NO VM    | Stage: Attempted | Tag: jag-no-answer
WRONG NUMBER         | Stage: Bad Data | Tag: jag-bad-phone | Flag for data cleanup
INFO GATHERED        | Note all new fields; update contact record immediately

Max attempts before escalating to Toby: 3 unanswered attempts across 3 different days.

---

## 5. OUTREACH SUMMARY TEMPLATE

Use this after the call. Fill in and paste into GHL contact notes.

---
CALL LOG — JAG Electric / Joe Gendre
Date/time: [DATE TIME CDT]
Called by: [CALLER NAME]
Outcome: [OUTCOME BUTTON USED]

Confirmed:
- Service area accurate: [YES / NO / NOTES]
- Hours language OK: [YES / NO / NOTES]
- License number: [PROVIDED: XXXX / DECLINED / PENDING]
- Project photos: [SENDING / NO / PENDING — follow-up due DATE]
- Estimate form delivery preference: [EMAIL jag.electric@yahoo.com / PHONE CALL / TBD]
- GBP profile confirmed: [YES / NO]

New info to add to brief: [FREE TEXT OR NONE]
Blockers surfaced: [FREE TEXT OR NONE]
Next action: [TASK + DUE DATE]
---

---

## 6. APPROVAL BLOCKERS — NOTHING BELOW MOVES WITHOUT TOBY OK

The following items are parked. No action until Toby approves each.

[ ] BOOKING LINK: Craig needs to build and confirm the calendar/booking URL before any link is shared with Joe. Do not send a placeholder.

[ ] GHL PIPELINE CREATION: GHL Agent needs Toby approval to create the JAG Electric pipeline, stages, and automations. Draft stage map is in this doc (Section 4) but not live.

[ ] OUTBOUND EMAIL TO JOE: Any email to jag.electric@yahoo.com requires Toby sign-off on copy before send. See email draft gate below.

[ ] LICENSE NUMBER ON SITE: If Joe provides it during call, must be verified before Wordsmith/Forge places it on any page. Do not add from memory or assumption.

[ ] PROJECT PHOTOS: If Joe sends photos, Toby or delegated reviewer must confirm they are actual JAG job photos before they go on the site. No stock photo substitution.

[ ] REVIEW WIDGET GBP LINK: Confirm exact GBP profile URL with Joe or via Google Maps search before Craig wires the widget.

[ ] SMS OUTREACH: No SMS to (620) 714-1125 without Toby approval and confirmed opt-in compliance.

[ ] SITE PREVIEW SHARE: Do not send Joe a preview URL until Toby has seen the build first.

---

## 7. EMAIL DRAFT PLACEHOLDER (do not send — awaiting approval)

To: jag.electric@yahoo.com
From: [Go Alpha Marketing sender — Toby to confirm]
Subject: Your JAG Electric website is in progress

Hi Joe,

We're currently building your new JAG Electric website and want to make sure we get a few details right before we finalize it.

Quick questions when you have a minute:
1. Are you currently taking jobs across the full Pittsburg / 30-mile area, or are there any areas you're not serving right now?
2. Do you want your state electrical license number included on the site?
3. Do you have any project photos you'd like us to use?
4. When someone fills out the estimate form, should it go to your email or would you prefer a call?

The site is looking great — we'll send you a preview link once it's ready for your eyes.

Thanks,
[Caller name]
Go Alpha Marketing
[Phone]

--- APPROVAL NEEDED BEFORE SEND ---

---

## HANDOFF NOTES FOR OTHER LANES

GHL Agent: Use Section 4 outcome buttons to configure pipeline. Section 3 booking workflow is your build spec. Tag schema above. No live mutations until Toby approves.

Craig: Booking link is a blocker (Section 3). Calendar embed spec: 15-min slot, GHL or Calendly, confirmation to both parties, GHL tag on booking. Also own the review widget GBP link wire.

Wordsmith: If license number surfaces from the call, add to copy brief before any page is drafted. Hours language is conservative — "call to schedule, limited evening/weekend availability" — do not upgrade to 24/7 or guaranteed same-day anywhere.

Forge/site build: Project photos are unconfirmed. Do not use stock as JAG project photos. Placeholder approach: use design elements only until Joe sends real shots.
