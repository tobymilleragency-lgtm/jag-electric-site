# Max — Jag Electric Email Package
# Status: DRAFT-ONLY — awaiting Toby approval before any send or provider activation
# Produced by: Max (agencyemail profile)
# Date: 2026-06-08
# No sends executed. No provider mutations made. Brevo/GHL tool not connected to this profile — listed as blocker below.

---

## CAMPAIGN RECORD

Business: JAG Electric, LLC
Owner: Joe Gendre
Phone: (620) 714-1125
Email: jag.electric@yahoo.com
Address: 807 E 7th St, Galena, KS 66739
Service area: Pittsburg KS and ~30-mile radius
Verified proof: 4.9 stars / 50 Google reviews, BBB A+ since 2020, 4.9 HomeAdvisor / 45 reviews, 100% recommend Facebook
Services: panel upgrades, rewiring, lighting/fixtures, outlets/switches, remodel/new construction, commercial electrical
Free estimates: yes
Experience: 24 years (HomeAdvisor-listed)
Hours claim allowed: call to schedule; limited evening/weekend appointments available
Truth limits: no 24/7, no emergency/same-day guarantees, no license numbers, no warranties, no financing claims

---

## SENDING BLOCKERS (must resolve before any activation)

BLOCKER 1 — Email provider not connected.
  Brevo API/MCP tool is not configured in the agencyemail profile for this run.
  GHL email tool also not confirmed active.
  Resolution: Toby or Frenchie must wire the Brevo API key (or confirm GHL email) and confirm the sender domain is verified (SPF/DKIM/DMARC on jag.electric@yahoo.com or a dedicated domain).

BLOCKER 2 — Sender domain deliverability risk.
  jag.electric@yahoo.com is a Yahoo consumer mailbox, not a custom domain.
  Sending bulk email FROM a Yahoo address will trigger spam filters.
  Resolution: Joe needs a custom domain sender (e.g. joe@jagelectricllc.com or hello@jagelectric.com) with SPF/DKIM set up before any sequence fires. This is infrastructure, not optional.

BLOCKER 3 — List does not exist yet.
  The estimate-prep form on the site is not live and is not confirmed wired to any list.
  Resolution: Craig/Forge must confirm the /estimate-prep form posts to a tagged list in the chosen email provider before sequence 1 can activate.

BLOCKER 4 — Toby approval required.
  No broadcast or sequence activates without explicit Toby sign-off on copy and segmentation.

---

## SEGMENTATION PLAN

Segment A — Estimate-prep form submitters (residential intent)
  Source: /estimate-prep form on jagelectric site
  Tag: jag-estimate-residential
  Trigger: form submit

Segment B — Estimate-prep form submitters (commercial intent)
  Source: /estimate-prep form — commercial checkbox or service selected
  Tag: jag-estimate-commercial
  Trigger: form submit

Segment C — Past customers (if Joe provides a list)
  Source: Joe's existing customer contact list (must be permission-based — confirm before importing)
  Tag: jag-past-customer
  Use: broadcast newsletters, GBP review requests, referral asks

Segment D — 90-day dormant leads
  Source: Seg A or B with no open/click in 90 days, no booking confirmed
  Tag: jag-dormant
  Trigger: automated 90-day inactivity check

Suppress immediately: hard bounces, unsubscribes, any address Joe flags as deceased/closed.
Do not send to purchased lists under any circumstances.

---

## SEQUENCE 1 — ESTIMATE-PREP NURTURE (Residential)
### 5-email series: form submit → booked call
### Trigger: Segment A tag applied
### Goal: turn an estimate request into a scheduled electrician visit

---

### EMAIL 1 — Immediate confirmation (send: 0–5 min after submit)

Subject line options:
  1. Your estimate request is in — here's what happens next
  2. Got it. Here's how JAG Electric follows up
  3. JAG Electric received your request — next step is quick
  4. You submitted an estimate request to JAG Electric
  5. We got your info — Joe will be in touch soon

CHOSEN: "Your estimate request is in — here's what happens next"
Rationale: confirms receipt, sets expectation, eliminates anxiety. No spam triggers.

Preview text: Joe and the JAG team will review your info and reach out to schedule.

---

Body:

Hi [First Name],

JAG Electric received your estimate request — thank you.

Joe Gendre and the team will review what you submitted and contact you to set up a time that works. JAG offers free estimates, and limited evening and weekend appointments are available if that works better for your schedule.

While you wait, here's what to expect:

1. A call or reply from Joe's team — usually within one business day.
2. A visit to look at the job in person before any numbers are quoted.
3. A clear scope and price before any work starts.

If you need to reach out sooner, call direct:

CTA: Call (620) 714-1125

4.9 stars on Google. A+ rated on BBB. 24 years of electrical experience.

— JAG Electric, LLC
807 E 7th St, Galena, KS | (620) 714-1125 | jag.electric@yahoo.com

[Unsubscribe] | You're receiving this because you submitted an estimate request at jagelectric.com.

---

### EMAIL 2 — Social proof + what they should know (send: Day 2 if no booking confirmed)

Subject line options:
  1. What Pittsburg homeowners say about JAG Electric
  2. 50 Google reviews. Here's what people actually said.
  3. "High quality work without the hassle" — real JAG Electric customers
  4. Why homeowners in Southeast Kansas call JAG first
  5. Before your estimate — a few words from past customers

CHOSEN: "50 Google reviews. Here's what people actually said."
Rationale: curiosity + social proof number, not a claim we made up.

Preview text: Real words from real customers — not cherry-picked marketing copy.

---

Body:

Hi [First Name],

While Joe's team gets your estimate scheduled, here's what other homeowners have said about the work:

"The work is high quality!"

"A great choice if you want quality work without hassle."

"Jag Electric and the technician Jacob did a wonderful job!"

4.9 stars across 50 Google reviews. 4.9 across 45 HomeAdvisor reviews. A+ on BBB.

That consistency matters when someone is working on your home's electrical system.

If you have questions before the visit, call or reply to this email:

CTA: Call (620) 714-1125

— JAG Electric, LLC

[Unsubscribe] | JAG Electric, LLC | 807 E 7th St, Galena, KS 66739

---

### EMAIL 3 — Service context + what the visit covers (send: Day 4 if no booking confirmed)

Subject line options:
  1. What JAG Electric will look at during your estimate
  2. Free estimate — here's what to expect when Joe's team arrives
  3. Your estimate visit: what to have ready
  4. Before the electrician arrives — a quick checklist
  5. What actually happens during a JAG Electric estimate

CHOSEN: "What JAG Electric will look at during your estimate"
Rationale: practical, prepares the lead, positions Joe as thorough/professional.

Preview text: The estimate visit is free and usually fast. Here's how to get the most out of it.

---

Body:

Hi [First Name],

Your estimate from JAG Electric is free — here's how to make the most of it.

When Joe or his team comes out, they'll look at:

- The specific area or room where work needs to happen
- Your main electrical panel — age, capacity, and condition
- Any visible wiring concerns near the job site
- What the job will realistically take to do correctly

To speed things up, it helps to:
- Know roughly when the issue started or when you noticed it
- Have the panel accessible (not behind boxes or stored items)
- Write down any questions you want answered before they leave

JAG handles residential rewiring, panel upgrades, lighting and fixture installs, outlets and switches, remodel and new construction wiring, and commercial work.

Ready to get on the schedule?

CTA: Call (620) 714-1125

— JAG Electric, LLC

[Unsubscribe] | JAG Electric, LLC | 807 E 7th St, Galena, KS 66739

---

### EMAIL 4 — Gentle follow-up (send: Day 7 if no booking confirmed)

Subject line options:
  1. Still need an electrician? JAG is available.
  2. Quick check-in from JAG Electric
  3. Your estimate request — still open if you need it
  4. Did you get what you needed? (JAG Electric)
  5. [First Name], still thinking about the electrical work?

CHOSEN: "[First Name], still thinking about the electrical work?"
Rationale: personal, low-pressure, direct. Works for homeowners who got busy.

Preview text: No pressure — just making sure your request didn't fall through the cracks.

---

Body:

Hi [First Name],

Just checking in. Life gets busy — wanted to make sure your estimate request didn't get lost.

If you still need electrical work done in the Pittsburg area, JAG Electric is ready to schedule a free estimate visit.

Evening and weekend times are available if the weekday schedule is tight.

CTA: Call (620) 714-1125

Or reply to this email and we'll connect you with Joe's team directly.

— JAG Electric, LLC

[Unsubscribe] | JAG Electric, LLC | 807 E 7th St, Galena, KS 66739

---

### EMAIL 5 — Final sequence close (send: Day 14 if no booking confirmed)

Subject line options:
  1. Last note from JAG Electric — estimate still available
  2. Closing your estimate file — but the offer stands
  3. Before we stop following up
  4. One last note from JAG Electric
  5. We'll stop after this one — unless you need us

CHOSEN: "Closing your estimate file — but the offer stands"
Rationale: creates soft close without being manipulative; respects inbox.

Preview text: We won't keep emailing — but the free estimate is still there when you're ready.

---

Body:

Hi [First Name],

This is the last email JAG Electric will send about your estimate request.

If the timing wasn't right or the project got pushed — no problem. When you're ready, the free estimate is still available.

JAG Electric serves Pittsburg, Galena, Frontenac, Girard, Joplin, and the surrounding area.

CTA: Call (620) 714-1125 when you're ready

Joe and the team appreciate you considering us.

— JAG Electric, LLC
807 E 7th St, Galena, KS 66739

[Unsubscribe] | This is the last message in this series. You will not receive further estimate follow-up emails.

---

## SEQUENCE 2 — ESTIMATE-PREP NURTURE (Commercial)
### 3-email series (shorter — commercial leads move differently)
### Trigger: Segment B tag applied

---

### EMAIL C1 — Immediate confirmation (send: 0–5 min after submit)

CHOSEN SUBJECT: "JAG Electric received your commercial inquiry — next step"
Preview text: Joe Gendre and the team handle commercial wiring, panel work, and remodel builds.

Body:

Hi [First Name],

JAG Electric received your commercial estimate request.

Joe Gendre and his team handle commercial electrical work including new construction wiring, remodels, panel upgrades, and more — serving businesses in Pittsburg, Galena, Joplin, and the surrounding area.

A team member will reach out to talk through your project scope before scheduling.

CTA: Call (620) 714-1125

4.9 Google | BBB A+ | 24 years experience

— JAG Electric, LLC

[Unsubscribe] | JAG Electric, LLC | 807 E 7th St, Galena, KS 66739

---

### EMAIL C2 — What commercial work JAG handles (send: Day 3 if no contact confirmed)

CHOSEN SUBJECT: "Commercial electrical in Southeast Kansas — what JAG handles"
Preview text: New construction, remodel wiring, panel upgrades, and more. Here's the scope.

Body:

Hi [First Name],

Commercial electrical needs a contractor who knows how to read a build schedule and communicate with other trades. JAG Electric does both.

Commercial services include:
- New construction electrical rough-in and finish
- Remodel wiring
- Panel and switchgear upgrades
- Lighting installation
- Outlet and circuit additions

Serving Pittsburg, Galena, Frontenac, Girard, Joplin MO, and surrounding Southeast Kansas / Southwest Missouri.

Free estimates. Call to schedule a site visit.

CTA: Call (620) 714-1125

— JAG Electric, LLC

[Unsubscribe] | JAG Electric, LLC | 807 E 7th St, Galena, KS 66739

---

### EMAIL C3 — Final follow-up (send: Day 10 if no booking confirmed)

CHOSEN SUBJECT: "Last follow-up — JAG Electric commercial estimate"
Preview text: If the project timing shifted, the estimate is still available when you're ready.

Body:

Hi [First Name],

Last note from JAG Electric regarding your commercial project inquiry.

When your timeline is ready, Joe's team is available to review the scope and quote it.

CTA: Call (620) 714-1125

— JAG Electric, LLC

[Unsubscribe] | JAG Electric, LLC | 807 E 7th St, Galena, KS 66739

---

## SEQUENCE 3 — POST-JOB COMPLETION FLOW (Transactional)
### Trigger: Joe manually tags a contact as "job-complete" OR CRM job status changes
### Requires: some form of list/CRM — see blockers

---

### EMAIL T1 — Job complete + thank you (send: 1 day after job marked complete)

CHOSEN SUBJECT: "Thank you — JAG Electric job wrap-up"
Preview text: Your job is done. A quick note and one small ask.

Body:

Hi [First Name],

Thank you for choosing JAG Electric.

We hope the work came out exactly as expected. If anything needs attention, call Joe directly at (620) 714-1125.

One quick ask — if you're happy with the work, a Google review takes about 60 seconds and helps other homeowners in the area find us:

CTA: Leave a Google Review [link to JAG Electric Google profile]
(Note for Craig/Joe: insert verified Google review link here before activating)

Thank you again.
— Joe Gendre, JAG Electric, LLC

[Unsubscribe] | JAG Electric, LLC | 807 E 7th St, Galena, KS 66739

---

### EMAIL T2 — Referral ask (send: Day 7 after T1, only if Google review link was clicked OR no unsub)

CHOSEN SUBJECT: "Know someone who needs an electrician?"
Preview text: If you have a neighbor or friend with electrical work coming up, here's an easy way to help.

Body:

Hi [First Name],

Glad the job is taken care of.

If you know anyone in the Pittsburg area — neighbor, family, coworker — who has electrical work on their list, feel free to send them our way. We'll treat them the same way we treated you.

CTA: Share Joe's number: (620) 714-1125

No referral program gimmicks. Just good word-of-mouth from people who've seen the work firsthand.

— JAG Electric, LLC

[Unsubscribe] | JAG Electric, LLC | 807 E 7th St, Galena, KS 66739

---

## RE-ENGAGEMENT FLOW — 90-DAY DORMANT LEADS
### Trigger: Segment D — lead submitted estimate request, 90 days no open/click, no booking confirmed
### 2-email re-engagement attempt, then suppress

---

### EMAIL R1 — Re-engagement opener (send: Day 90)

CHOSEN SUBJECT: "Still need electrical work done?"
Preview text: JAG Electric is still available in Pittsburg and the surrounding area.

Body:

Hi [First Name],

A few months ago you reached out to JAG Electric. We wanted to check in one more time.

If the project is back on the table — or if something new came up — Joe's team is ready to take a look.

Free estimates. Limited evening and weekend times available.

CTA: Call (620) 714-1125

— JAG Electric, LLC | Pittsburg, Galena, Frontenac, Girard, Joplin + surrounding area

[Unsubscribe]

---

### EMAIL R2 — Final re-engagement / list clean (send: Day 97 if R1 not opened)

CHOSEN SUBJECT: "We'll stop here — unless you want to stay in touch"
Preview text: No more emails after this unless you say otherwise.

Body:

Hi [First Name],

This is JAG Electric's last message.

If your project is still in the future, keep Joe's number handy: (620) 714-1125.

If you'd like to stay on the list for occasional updates from JAG Electric, just open this email and that's enough — we'll know you're still interested.

Otherwise, we'll remove you and you won't hear from us again.

— JAG Electric, LLC

[Unsubscribe] | If no action is taken after this email, this contact will be suppressed per standard list hygiene.

---
Suppression note: if R2 is not opened within 5 days of send, move contact to suppressed list. Do not email again unless they re-engage via the website.

---

## BROADCAST TEMPLATES

### BROADCAST 1 — Monthly newsletter (frequency: monthly, Segment C — past customers only)

CHOSEN SUBJECT: "A quick update from JAG Electric — [Month] [Year]"
Preview text: What's new with the crew, seasonal reminders, and how to get on the schedule.

Body structure (fill in per month):

Hi [First Name],

A short note from Joe and the JAG Electric team.

[1-2 sentences about what's been happening — busy season, new hire if applicable, area they've been working in a lot. Use only confirmed facts. Do not invent projects or testimonials.]

SEASONAL REMINDER:
[Example — spring: "Spring remodels often surface old wiring issues — worth having panels and circuits checked before walls close back up." Fall: "Before the heating season, make sure your panel is handling the added load without tripping breakers."]

WHAT JAG HANDLES:
Panel upgrades | Rewiring | Lighting & fixtures | Outlets & switches | Remodel wiring | Commercial electrical

Ready to get on the schedule?

CTA: Call (620) 714-1125

— Joe Gendre, JAG Electric, LLC
807 E 7th St, Galena, KS

[Unsubscribe]

---

### BROADCAST 2 — Seasonal push (send: spring and fall, all active segments)

CHOSEN SUBJECT (spring version): "Spring remodel season — JAG Electric is booking now"
Preview text: If electrical work is on your list this spring, now's the time to schedule before the calendar fills.

Body:

Hi [First Name],

Spring remodel and construction season is here. If you have electrical work on the list — panel upgrade, rewiring, new fixtures, outlets for an addition — now is the right time to get on the schedule before it fills up.

JAG Electric serves Pittsburg, Galena, Frontenac, Girard, Joplin, and the surrounding area.

Free estimates. Limited evening/weekend appointments available.

CTA: Call (620) 714-1125 to book your estimate

4.9 stars on Google. A+ BBB. 24 years of experience.

— JAG Electric, LLC

[Unsubscribe]

---

CHOSEN SUBJECT (fall version): "Before winter — get your panel and wiring checked"
Preview text: Cold months put more load on residential electrical systems. Worth a look before it's a problem.

Body:

Hi [First Name],

Before winter hits, it's worth making sure your electrical panel and wiring are ready to handle the added load.

Older panels, overloaded circuits, and worn outlets tend to surface as problems in cold weather when heating systems run hard.

JAG Electric can assess your panel and flag anything that needs attention before it becomes an emergency.

Free estimates. Serving Pittsburg, Galena, Frontenac, Girard, Joplin, and nearby.

CTA: Call (620) 714-1125

— JAG Electric, LLC

[Unsubscribe]

---

### BROADCAST 3 — GBP review request (send: post-job, Segment C, stagger — do not batch-blast)

Note: This is the standalone broadcast version. Sequence T1 handles the triggered version. Use this broadcast only for past customers who were never in the automated flow.

CHOSEN SUBJECT: "Quick favor — 60 seconds on Google?"
Preview text: Your review helps homeowners in Pittsburg find reliable electrical help.

Body:

Hi [First Name],

If JAG Electric did good work for you, a quick Google review makes a real difference for homeowners in the area trying to find a trustworthy electrician.

It takes about 60 seconds.

CTA: Leave a Google Review [insert verified Google review link]

Thank you for your time.
— Joe Gendre, JAG Electric, LLC

[Unsubscribe]

---

## DELIVERABILITY SETUP CHECKLIST (for whoever activates this)

Before any email fires:

[ ] Custom sender domain purchased and DNS configured (SPF, DKIM, DMARC)
    Do NOT send bulk mail from jag.electric@yahoo.com — will land in spam
[ ] Sender domain warmed: start with 50 emails/day, ramp over 2-3 weeks
[ ] Brevo or GHL email confirmed active and sender verified
[ ] Estimate-prep form connected to the email provider list with correct tags
[ ] Unsubscribe link functional and tested in every template
[ ] Plain text version created for each email (low image ratio — no images in this package by default)
[ ] Google review link verified and inserted in T1 and Broadcast 3 before activation
[ ] Joe/client confirms past customer list is permission-based before importing Segment C
[ ] Toby approves all copy and segmentation logic above

---

## APPROVAL STATUS

All emails above: DRAFT ONLY
No sends executed.
No provider configured or mutated.
Awaiting Toby explicit approval before any sequence activates or broadcast schedules.
