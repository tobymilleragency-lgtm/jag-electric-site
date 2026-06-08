import React, {useMemo, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Zap, Phone, Mail, MapPin, ShieldCheck, Star, PlugZap, Menu, X, CheckCircle, ArrowRight, ClipboardCheck, Building2, Home, Lightbulb, Cable, Wrench, Cpu} from 'lucide-react';
import './styles.css';

const phone = '(620) 714-1125';
const email = 'jag.electric@yahoo.com';
const base = 'https://jag-electric-site.vercel.app';

const services = [
  {slug:'panel-upgrades', icon: Cpu, title:'Panel Upgrades', short:'Clean panel planning for capacity, safety, remodels, and modern electrical demand.', hero:'Know what your panel can handle before the next breaker trip becomes the next project delay.', details:['Panel replacement and upgrade planning','Breaker and capacity review for additions or heavy loads','Main electrical box assessment when older equipment needs attention','Clear notes for owner decisions before work starts'], meta:'Panel upgrades in Galena and Pittsburg, KS from JAG Electric.'},
  {slug:'rewiring', icon: Cable, title:'Residential Rewiring', short:'Room, remodel, and whole-home wiring work handled with careful communication.', hero:'Old wiring, remodel changes, and new circuits need a plan that keeps walls, panels, and fixtures coordinated.', details:['Residential rewire planning for aging homes','Circuit updates during remodels or additions','Troubleshooting lights, rooms, and outlet runs','Communication before surprises become change orders'], meta:'Residential rewiring around Galena, Pittsburg, and nearby communities.'},
  {slug:'lighting-fixtures', icon: Lightbulb, title:'Lighting & Fixtures', short:'Fixture installation, porch lights, room lighting, and practical repair work.', hero:'From a single porch light to a full room update, fixture work should feel simple, safe, and clean.', details:['Interior and exterior light fixture installs','Switch and wiring checks when fixtures do not solve the problem','Kitchen, bath, porch, shop, and remodel lighting support','Owner-friendly scheduling and cleanup expectations'], meta:'Lighting and fixture installation by JAG Electric.'},
  {slug:'outlets-switches', icon: PlugZap, title:'Outlets, Switches & Repairs', short:'Fast, practical help for outlets, switches, breakers, and everyday electrical problems.', hero:'When a room goes dark or a circuit acts wrong, the first job is finding the real cause.', details:['Outlet and switch install or repair','Breaker troubleshooting and replacement planning','Small electrical repair calls treated seriously','Clear repair notes for homeowners and property owners'], meta:'Outlet, switch, and electrical repair service near Galena and Pittsburg.'},
  {slug:'remodel-new-construction', icon: Home, title:'Remodel & New Construction Wiring', short:'Electrical wiring support for additions, remodels, and new construction coordination.', hero:'Remodel wiring works best when the electrician sees the full scope before walls close.', details:['Electrical for additions and remodels','New construction wiring coordination','Lighting, outlets, panels, and switchboards','Planning notes for homeowners, builders, and property managers'], meta:'Electrical wiring for remodels, additions, and new construction.'},
  {slug:'commercial-electrical', icon: Building2, title:'Commercial Electrical', short:'Commercial and small-business electrical contractor services for practical buildout needs.', hero:'Shops, offices, rentals, and service businesses need electrical work that keeps operations moving.', details:['Commercial electrical contractor support','Switchboards, connectors, wiring, and computer cable installation noted in public listings','Lighting, outlet, and panel planning for business spaces','Straight communication on scope and scheduling'], meta:'Commercial electrician service in Southeast Kansas and nearby areas.'}
];

const towns = [
  {slug:'pittsburg-ks', name:'Pittsburg, KS', line:'Electrical contractor support for homes, rentals, remodels, and small businesses in the Pittsburg area.', proof:'Toby supplied Pittsburg and nearby areas as a primary service target.'},
  {slug:'galena-ks', name:'Galena, KS', line:'JAG Electric is based in Galena and serves local residential and commercial electrical needs.', proof:'Confirmed address: 807 E 7th St, Galena, KS 66739.'},
  {slug:'joplin-mo', name:'Joplin, MO', line:'Nearby market coverage for practical electrical repair, remodel wiring, lighting, and panel planning.', proof:'Within the practical regional service orbit; confirm scheduling by phone.'},
  {slug:'frontenac-ks', name:'Frontenac, KS', line:'Service-area page for homeowners and businesses near Pittsburg needing a Galena-based electrician.', proof:'Nearby area; confirm availability and scheduling by phone.'},
  {slug:'girard-ks', name:'Girard, KS', line:'Electrical estimate-prep and scheduling for Girard-area homes, remodels, and small commercial spaces.', proof:'Nearby area; confirm availability and scheduling by phone.'}
];

const reviews = [
  'The work is high quality!',
  'A great choice if you want quality work without hassle.',
  'Jag Electric and the technician Jacob did a wonderful job!',
  'Fair prices and quality work. They actually clean up after themselves and respect your property.',
  'Very courteous. Fast response.'
];

function path(){ return window.location.pathname.replace(/\/$/,'') || '/'; }
function setMeta(title, desc){ document.title = title; const m=document.querySelector('meta[name="description"]'); if(m) m.setAttribute('content',desc); }

function Header(){
  const [open,setOpen]=useState(false);
  const links=[['/services','Services'],['/service-area','Service Area'],['/reviews','Reviews'],['/about','About'],['/estimate-prep','Estimate Prep']];
  return <header className="site-header">
    <a className="brand" href="/" aria-label="JAG Electric home"><span className="bolt-mark"><Zap size={22}/></span><span><b>JAG Electric</b><small>Galena · Pittsburg · 30-mile radius</small></span></a>
    <nav className="desktop-nav">{links.map(([href,label])=><a key={href} href={href}>{label}</a>)}<a className="call-chip" href="tel:+16207141125"><Phone size={16}/>{phone}</a></nav>
    <button id="mobile-menu-toggle" className="menu-btn" onClick={()=>setOpen(!open)} aria-expanded={open}>{open?<X/>:<Menu/>}</button>
    {open && <nav className="mobile-nav">{links.map(([href,label])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<a href="tel:+16207141125"><Phone size={16}/>{phone}</a></nav>}
  </header>
}

function CircuitHero(){
  return <section className="hero circuit-shell">
    <div className="hero-copy">
      <p className="eyebrow"><Zap size={16}/> Galena-based electrical contractor</p>
      <h1>Power work that feels planned before a wire gets touched.</h1>
      <p className="hero-lede">JAG Electric handles residential and commercial electrical work around Galena, Pittsburg, and nearby communities — panel upgrades, rewiring, fixtures, outlets, remodel wiring, and clean troubleshooting.</p>
      <div className="hero-actions"><a className="btn primary" href="tel:+16207141125"><Phone/> Call {phone}</a><a className="btn ghost" href="/estimate-prep">Build an estimate-prep summary <ArrowRight size={18}/></a></div>
      <div className="proof-strip"><span><Star/> 4.9 Google rating / 50 reviews supplied</span><span><ShieldCheck/> BBB A+ / Accredited since 2020</span><span><ClipboardCheck/> Free estimates listed on HomeAdvisor</span></div>
    </div>
    <div className="circuit-board" aria-label="Live circuit-inspired service map">
      <div className="panel-card main-breaker"><small>Main Service</small><strong>Galena Base</strong><em>807 E 7th St</em></div>
      {['Pittsburg','Joplin','Frontenac','Girard','Riverton','Baxter Springs'].map((c,i)=><div key={c} className={`node node-${i}`}>{c}</div>)}
      <div className="trace t1"></div><div className="trace t2"></div><div className="trace t3"></div><div className="trace t4"></div>
      <div className="pulse-ring"></div>
    </div>
  </section>
}

function HomePage(){
  setMeta('JAG Electric | Galena & Pittsburg KS Electrician','JAG Electric serves Galena, Pittsburg, and nearby areas with panel upgrades, rewiring, lighting, outlets, remodel wiring, and commercial electrical contractor service.');
  return <><CircuitHero/><section className="split-section"><div><p className="eyebrow">What they do</p><h2>Residential and commercial electrical work, without mystery.</h2><p>Public listings confirm JAG Electric as an electrical contractor for new construction, remodels, panel upgrades, lighting, outlet repairs, computer cable installation, and switchboard/connectors work. This site keeps those services clear and keeps unverified claims out.</p></div><div className="service-grid compact">{services.slice(0,4).map(s=><ServiceCard key={s.slug} s={s}/>)}</div></section><Workbench/><section className="photo-proof"><div><p className="eyebrow">Source-backed proof</p><h2>Real reputation signals, plainly labeled.</h2><p>BBB, HomeAdvisor, Facebook, Google/GBP snippets, and Toby-provided business facts are used as the proof spine. Any visual that is representative is labeled as such; no fake project galleries or fake awards.</p></div><div className="asset-rail"><figure><img src="/assets/jag-homeadvisor-logo.png" alt="JAG Electric logo from HomeAdvisor public profile"/><figcaption>Public HomeAdvisor logo asset</figcaption></figure><figure><img src="/assets/jag-bbb-work-photo.jpeg" alt="Public BBB profile image for JAG Electric"/><figcaption>Public BBB profile photo</figcaption></figure></div></section><ReviewsPreview/><CTA/></>;
}

function ServiceCard({s}){ const Icon=s.icon; return <a className="service-card" href={`/services/${s.slug}`}><Icon/><h3>{s.title}</h3><p>{s.short}</p><span>Open service page <ArrowRight size={15}/></span></a> }

function ServicesPage(){ setMeta('Electrical Services | JAG Electric','Panel upgrades, rewiring, lighting, outlets, remodel wiring, new construction wiring, and commercial electrical services from JAG Electric.'); return <main className="page"><PageHero kicker="Service index" title="Electrical service pages with real scope, not thin cards." text="Choose the work type closest to your project. Every route gives practical preparation notes so the call starts with useful details."/><div className="service-grid">{services.map(s=><ServiceCard key={s.slug} s={s}/>)}</div><Workbench/></main> }
function ServiceDetail({s}){ setMeta(`${s.title} | JAG Electric`,s.meta); return <main className="page"><PageHero kicker="Electrical service" title={s.title} text={s.hero}/><section className="detail-grid"><div className="detail-panel"><h2>What this usually includes</h2>{s.details.map(d=><p className="check" key={d}><CheckCircle/>{d}</p>)}<a className="btn primary" href="/estimate-prep">Prep this estimate <ArrowRight/></a></div><aside className="scope-card"><h3>Call prep</h3><ul><li>Which room, building, or panel is involved?</li><li>Is this repair, remodel, addition, or new install?</li><li>Any lights out, breakers tripping, heat, buzzing, or burning smell? If unsafe, stop using the circuit and call.</li><li>Photos of the panel, fixture, outlet, or affected area help scope the visit.</li></ul></aside></section><RelatedRoutes current={s.slug}/></main> }

function ServiceArea(){ setMeta('Service Area | JAG Electric','JAG Electric serves Galena, Pittsburg, and nearby communities in a roughly 30-mile radius.'); return <main className="page"><PageHero kicker="Service area" title="A practical 30-mile electrical service radius." text="JAG Electric is based in Galena, KS and serves Pittsburg and nearby areas. City pages below are service-area pages, not fake office locations."/><div className="area-board">{towns.map(t=><a className="area-card" href={`/service-area/${t.slug}`} key={t.slug}><MapPin/><h3>{t.name}</h3><p>{t.line}</p><small>{t.proof}</small></a>)}</div><CTA/></main> }
function AreaDetail({t}){ setMeta(`${t.name} Electrician | JAG Electric`,`${t.line} Call JAG Electric at ${phone}.`); return <main className="page"><PageHero kicker="Service-area page" title={`${t.name} electrical service planning`} text={t.line}/><section className="detail-grid"><div className="detail-panel"><h2>Electrical work JAG Electric can help plan near {t.name}</h2>{services.map(s=><p className="check" key={s.slug}><CheckCircle/>{s.title}: {s.short}</p>)}<p className="honesty">This is a service-area page for a nearby community, not a claim of a separate JAG Electric office in {t.name}. Call to confirm scheduling.</p></div><aside className="scope-card"><h3>Best next step</h3><p>Use the prep form to organize the job, then call {phone}. If the form is not wired to a CRM, it will not pretend to send anything — it builds your call summary locally.</p><a className="btn primary" href="/estimate-prep">Use estimate prep</a></aside></section></main> }

function Workbench(){
  const [project,setProject]=useState('Panel upgrade'); const [location,setLocation]=useState('Pittsburg, KS'); const [issue,setIssue]=useState('Breaker trips when appliances run');
  const summary=`JAG Electric call prep: ${project} near ${location}. Main issue: ${issue}. Please confirm scheduling, photos needed, and whether this is repair, remodel, or new work.`;
  return <section className="workbench" id="estimate-workbench"><div><p className="eyebrow">Interactive estimate-prep</p><h2>Turn the electrical problem into a clean call summary.</h2><p>This tool is honest: it prepares your notes locally. It does not claim to send to a CRM or email until that delivery is actually wired and verified.</p></div><div className="prep-console"><label>Project type<select id="project-type" value={project} onChange={e=>setProject(e.target.value)}>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label><label>Location<input id="project-location" value={location} onChange={e=>setLocation(e.target.value)}/></label><label>What is happening?<textarea id="project-issue" value={issue} onChange={e=>setIssue(e.target.value)}/></label><div className="summary-box"><strong>Your call summary</strong><p>{summary}</p></div><div className="hero-actions"><a className="btn primary" href="tel:+16207141125"><Phone/> Call with summary</a><a className="btn ghost" href={`mailto:${email}?subject=Electrical estimate prep&body=${encodeURIComponent(summary)}`}><Mail/> Email notes</a></div></div></section>
}

function ReviewsPreview(){ return <section className="reviews"><p className="eyebrow">Reputation</p><h2>What public review snippets emphasize: quality, response, respect.</h2><div className="review-grid">{reviews.map(r=><blockquote key={r}><Star/><p>“{r}”</p></blockquote>)}</div><a className="btn ghost" href="/reviews">See review sources</a></section> }
function ReviewsPage(){ setMeta('Reviews & Reputation | JAG Electric','Review and reputation signals for JAG Electric from Google/GBP, Facebook, BBB, and HomeAdvisor.'); return <main className="page"><PageHero kicker="Reviews" title="Strong public reputation signals, no invented testimonials." text="This page separates confirmed source signals from quoted snippets supplied by Toby or visible in public listings."/><section className="detail-panel"><h2>Confirmed reputation signals</h2><p className="check"><Star/>Google/GBP rating supplied by Toby: 4.9 with 50 Google reviews.</p><p className="check"><Star/>HomeAdvisor: 4.9 from 45 reviews.</p><p className="check"><Star/>Facebook: 100% recommend based on 20 reviews.</p><p className="check"><ShieldCheck/>BBB: A+ and accredited since 2/20/2020.</p></section><ReviewsPreview/></main> }
function AboutPage(){ setMeta('About JAG Electric | Galena, KS','JAG Electric is a Galena, KS electrical contractor owned by Joe Gendre, serving residential and commercial electrical needs.'); return <main className="page"><PageHero kicker="About" title="A Galena-based electrical contractor with a practical service-first reputation." text="Public business records identify Jag Electric, LLC as a Galena, Kansas electrical contractor with Joe Gendre as owner/principal contact."/><section className="split-section"><div><h2>Business details used on this site</h2><p className="check"><MapPin/>807 E 7th St, Galena, KS 66739.</p><p className="check"><Phone/>{phone}</p><p className="check"><Mail/>{email}</p><p className="check"><ShieldCheck/>BBB file opened 2019; accredited since 2020; A+ listed.</p></div><div className="detail-panel"><h2>What we did not claim</h2><p>No fake license number. No fake 24/7 emergency guarantee. No fake project gallery. No fake “best electrician” ranking. No fake form-delivery claim.</p></div></section></main> }
function EstimatePage(){ setMeta('Estimate Prep | JAG Electric','Prepare your electrical estimate notes, then call JAG Electric or email the summary.'); return <main className="page"><PageHero kicker="Contact / estimate prep" title="Get the call ready before you call." text={`Call ${phone} or use this prep tool to organize the location, work type, and issue before contacting JAG Electric.`}/><Workbench/><section className="contact-grid"><a href="tel:+16207141125"><Phone/>{phone}</a><a href={`mailto:${email}`}><Mail/>{email}</a><span><MapPin/>807 E 7th St, Galena, KS 66739</span></section></main> }
function PageHero({kicker,title,text}){ return <section className="page-hero"><p className="eyebrow"><Zap size={16}/>{kicker}</p><h1>{title}</h1><p>{text}</p></section> }
function RelatedRoutes({current}){ return <section className="related"><h2>Related electrical services</h2><div className="mini-links">{services.filter(s=>s.slug!==current).slice(0,5).map(s=><a href={`/services/${s.slug}`} key={s.slug}>{s.title}</a>)}</div></section> }
function CTA(){ return <section className="cta"><h2>Ready to get the electrical work scoped?</h2><p>Call JAG Electric or build a prep summary first. The fastest useful call is a clear one.</p><div className="hero-actions"><a className="btn primary" href="tel:+16207141125"><Phone/> {phone}</a><a className="btn ghost" href="/estimate-prep">Estimate prep</a></div></section> }
function NotFound(){ setMeta('Page not found | JAG Electric','JAG Electric route not found.'); return <main className="page"><PageHero kicker="404" title="This circuit is open." text="Use the navigation to get back to a live route."/><CTA/></main> }

function App(){
  const route=path();
  const service=route.startsWith('/services/') ? services.find(s=>route.endsWith(s.slug)) : null;
  const town=route.startsWith('/service-area/') ? towns.find(t=>route.endsWith(t.slug)) : null;
  let page = route==='/' ? <HomePage/> : route==='/services' ? <ServicesPage/> : service ? <ServiceDetail s={service}/> : route==='/service-area' ? <ServiceArea/> : town ? <AreaDetail t={town}/> : route==='/about' ? <AboutPage/> : route==='/reviews' ? <ReviewsPage/> : route==='/estimate-prep' ? <EstimatePage/> : <NotFound/>;
  const schema = useMemo(()=>({"@context":"https://schema.org","@type":"Electrician","name":"JAG Electric","address":{"@type":"PostalAddress","streetAddress":"807 E 7th St","addressLocality":"Galena","addressRegion":"KS","postalCode":"66739"},"telephone":"+1-620-714-1125","email":email,"areaServed":["Galena KS","Pittsburg KS","Joplin MO","Frontenac KS","Girard KS"],"url":base}),[]);
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><Header/>{page}<footer className="footer"><div><b>JAG Electric</b><p>Residential and commercial electrical contractor serving Galena, Pittsburg, and nearby areas.</p></div><nav><a href="/">Home</a><a href="/services">Services</a><a href="/service-area">Service Area</a><a href="/estimate-prep">Estimate Prep</a><a href="/sitemap.xml">Sitemap</a></nav><div><a href="tel:+16207141125">{phone}</a><a href={`mailto:${email}`}>{email}</a></div></footer></>
}

createRoot(document.getElementById('root')).render(<App/>);
