import subprocess, pathlib, textwrap, time, os, sys
root = pathlib.Path('/home/toby/jag-electric-site')
brief = (root/'agency-handoffs/shared-brief.md').read_text()
lanes = {
'agencysilentbob': '''You are Silent Bob. Using the shared Jag Electric brief below, produce /home/toby/jag-electric-site/agency-handoffs/silentbob-facts.md with: confirmed facts, placeholders/assumptions, forbidden claims, service-area policy, review/proof policy, asset/source notes, and exact downstream constraints. Do not mutate anything else.\n\nSHARED BRIEF:\n{brief}''',
'agencybrand': '''You are Sage. Using the shared Jag Electric brief below, produce /home/toby/jag-electric-site/agency-handoffs/sage-brand.md with a premium electrician brand kit: visual fingerprint, logo direction, color tokens, type direction, section design rules, asset inventory/slot plan, rejected/forbidden visual styles, and website art direction for Forge. Do not mutate anything else.\n\nSHARED BRIEF:\n{brief}''',
'agencycreative': '''You are Wordsmith. Using the shared Jag Electric brief below, produce /home/toby/jag-electric-site/agency-handoffs/wordsmith-copy.md with customer-facing copy for all required routes, CTA language, estimate prep form labels, review section copy, meta titles/descriptions, email nurture draft sequence, and a short 30-sec video script. No internal agency/showpiece language. Do not mutate anything else.\n\nSHARED BRIEF:\n{brief}''',
'agencyseo': '''You are Niko. Using the shared Jag Electric brief below, produce /home/toby/jag-electric-site/agency-handoffs/niko-seo-calendar.md with keyword map, on-page SEO requirements, schema notes, route slugs/titles/meta, internal link plan, GBP post drafts, and a first-class 30-day content/ad calendar. Do not mutate anything else.\n\nSHARED BRIEF:\n{brief}''',
'agencymediabuyer': '''You are Chad. Using the shared Jag Electric brief below, produce /home/toby/jag-electric-site/agency-handoffs/chad-media-plan.md with early media_plan only: target geography, hypotheses, channels, audiences, offers, creative angles, budget guardrails, conversion tracking assumptions, and launch blockers. No spend or external mutation. Do not mutate anything else.\n\nSHARED BRIEF:\n{brief}''',
'agencyvideo': '''You are Eddie. Using the shared Jag Electric brief below, produce /home/toby/jag-electric-site/agency-handoffs/eddie-video.md with storyboard, voiceover, captions, shot list, asset needs, platform cuts, QC requirements, and how video can enhance the site later. Do not render if tooling/assets block you; this route only needs a production package. Do not mutate anything else.\n\nSHARED BRIEF:\n{brief}''',
'agencyemail': '''You are Max. Using the shared Jag Electric brief below, produce /home/toby/jag-electric-site/agency-handoffs/max-email.md with draft-only email nurture/broadcast package: subjects, preview text, body copy, CTA, segmentation notes, approval/sending blockers. No sends/provider mutations. Do not mutate anything else.\n\nSHARED BRIEF:\n{brief}''',
'agencyghl': '''You are GHL Agent. Using the shared Jag Electric brief below, produce /home/toby/jag-electric-site/agency-handoffs/ghl-package.md with draft-only CRM/GBP activation package: proposed GHL fields/tags/stages/forms, GBP post package, proof handles required, and explicit no-mutation/no-send approval gate. Do not mutate GHL. Do not mutate anything else.\n\nSHARED BRIEF:\n{brief}''',
'agencyassistant': '''You are Lloyd. Using the shared Jag Electric brief below, produce /home/toby/jag-electric-site/agency-handoffs/lloyd-outreach.md with contractor caller/contact workflow, booking link workflow assumptions, call outcome buttons, outreach summary template, and approval blockers. No external sends. Do not mutate anything else.\n\nSHARED BRIEF:\n{brief}''',
}
procs=[]
for profile, tmpl in lanes.items():
    prompt=(root/'agency-handoffs'/f'prompt-{profile}.txt')
    prompt.write_text(tmpl.format(brief=brief))
    log=root/'agency-handoffs'/f'{profile}.log'
    cmd=f"hermes -p {profile} chat -Q -t terminal,file,web,skills -q \"$(python3 - <<'PY'\nfrom pathlib import Path\nprint(Path('{prompt}').read_text())\nPY\n)\""
    p=subprocess.Popen(cmd, shell=True, cwd=str(root), stdout=open(log,'w'), stderr=subprocess.STDOUT, executable='/bin/bash')
    procs.append((profile,p,log))
    time.sleep(1)
# Wait max 480s total
end=time.time()+480
failed=[]
for profile,p,log in procs:
    remain=max(1,int(end-time.time()))
    try:
        rc=p.wait(timeout=remain)
    except subprocess.TimeoutExpired:
        p.terminate(); failed.append((profile,'timeout',str(log))); continue
    if rc!=0: failed.append((profile,rc,str(log)))
print('LANE RESULTS')
for profile,p,log in procs:
    print(profile, 'rc=', p.returncode, 'log=', log)
print('FAILED', failed)
print('DELIVERABLES')
for path in sorted((root/'agency-handoffs').glob('*.md')):
    print(path, path.stat().st_size)
if failed:
    sys.exit(2)
