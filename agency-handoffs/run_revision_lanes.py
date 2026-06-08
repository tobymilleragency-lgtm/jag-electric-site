import subprocess, pathlib, time, sys
root=pathlib.Path('/home/toby/jag-electric-site')
shared=(root/'agency-handoffs/shared-brief.md').read_text()
rev=(root/'agency-handoffs/revision-brief-2026-06-08.md').read_text()
lanes={
'agencysilentbob':('silentbob-revision-facts.md','You are Silent Bob. Update the Jag Electric fact/proof boundary for Toby correction. Produce confirmed facts, forbidden claims, representative-photo policy, photo/source honesty rules, service-area local SEO boundary, and what downstream lanes must not fake.'),
'agencybrand':('sage-revision-assets.md','You are Sage. Produce a revised brand/photo asset inventory for a real-feeling electrician website: route-by-route photo slots, source/labeling policy, visual quality rules, color/type refinements, and banned fake-looking electrical imagery.'),
'agencycreative':('wordsmith-revision-copy.md','You are Wordsmith. Produce the deep copy plan: homepage meat sections, 1000-1200 word service-page copy framework for each service, 1000-1200 word city-page copy framework for each area, and stronger ad copy. Customer-facing only.'),
'agencyseo':('niko-revision-seo.md','You are Niko. Produce local SEO expansion plan: keywords, page titles/meta, heading structure, internal links, local entity terms, 30-day content/ad calendar, GBP post drafts, and word-count requirements per route.'),
'agencymediabuyer':('chad-revision-ads.md','You are Chad. Produce stronger draft-only Meta/Google ad copy package and media_plan from the revised copy/SEO needs. No spend, no launch, no mutations.'),
'agencyvideo':('eddie-revision-photo-video.md','You are Eddie. Produce photo/video production package: realistic electrical photo/short-video asset needs, storyboard, captions, proof frames/QC rules. Do not require Rex; Rex optional.'),
'agencywebdev':('forge-revision-build.md','You are Forge. Produce implementation requirements to turn current site into a full local SEO website with representative photos, dense service/city pages, strong homepage sections, and verification gates.'),
'agencydeveloper':('craig-revision-deploy.md','You are Craig. Produce technical deployment/verification checklist for this revision: build, route probes, word count audit, browser checks, screenshots, GitHub/Vercel deploy, live smoke.')
}
procs=[]
for profile,(outfile,role) in lanes.items():
    prompt=root/'agency-handoffs'/f'prompt-revision-{profile}.txt'
    prompt.write_text(f"{role}\n\nWrite ONLY to /home/toby/jag-electric-site/agency-handoffs/{outfile}. Do not edit source code.\n\nREVISION BRIEF:\n{rev}\n\nORIGINAL FACT BRIEF:\n{shared}\n")
    log=root/'agency-handoffs'/f'revision-{profile}.log'
    cmd=f"hermes -p {profile} chat -Q -t terminal,file,web,skills -q \"$(python3 - <<'PY'\nfrom pathlib import Path\nprint(Path('{prompt}').read_text())\nPY\n)\""
    p=subprocess.Popen(cmd,shell=True,cwd=str(root),stdout=open(log,'w'),stderr=subprocess.STDOUT,executable='/bin/bash')
    procs.append((profile,p,log,outfile)); time.sleep(1)
end=time.time()+600
failed=[]
for profile,p,log,outfile in procs:
    try: rc=p.wait(timeout=max(1,int(end-time.time())))
    except subprocess.TimeoutExpired:
        p.terminate(); failed.append((profile,'timeout',str(log))); continue
    if rc!=0: failed.append((profile,rc,str(log)))
print('REVISION LANE RESULTS')
for profile,p,log,outfile in procs:
    path=root/'agency-handoffs'/outfile
    print(profile,'rc=',p.returncode,'deliverable=',path,'exists=',path.exists(),'size=',path.stat().st_size if path.exists() else 0,'log=',log)
print('FAILED',failed)
if failed: sys.exit(2)
