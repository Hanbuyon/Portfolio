import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon, CheckIcon, CopyIcon, DownloadSimpleIcon, EnvelopeSimpleIcon, GithubLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { Header, Footer } from "../components/SiteShell";
import { HeroSceneHost } from "../components/HeroSceneHost";
import { ProjectVisual } from "../components/ProjectVisual";
import { Reveal } from "../components/Reveal";
import { profile, projects, experience, education, credentials, skillGroups, languages, ui, type Lang, type ProjectCategory } from "../data/site";
import { siteOrigin, socialImageMeta } from "../data/seo";

const categories: Array<"all" | ProjectCategory> = ["all", "web", "ai", "app", "operations"];

export function meta({ params }: { params: { lang?: string } }) {
  const lang: Lang = params.lang === "en" ? "en" : "ar";
  return [
    { title: `${profile.shortName[lang]} — ${profile.title[lang]}` },
    { name: "description", content: profile.intro[lang] },
    { property: "og:title", content: `${profile.shortName[lang]} — Portfolio` },
    { property: "og:description", content: profile.intro[lang] },
    { property: "og:url", content: `${siteOrigin}/${lang}` },
    { property: "og:type", content: "website" },
    ...socialImageMeta(lang),
  ];
}

function SectionHead({ index, kicker, title, intro }: { index: string; kicker: string; title: string; intro?: string }) {
  return <Reveal className="section-head"><div className="section-label"><span>{index}</span><span>{kicker}</span></div><div className="section-title-wrap"><h2>{title}</h2>{intro && <p>{intro}</p>}</div></Reveal>;
}

function Hero({ lang }: { lang: Lang }) {
  const t = ui[lang];
  return <section className="hero wrap" aria-labelledby="hero-title">
    <div className="hero-copy">
      <Reveal><div className="availability"><span className="availability-dot"/>{t.heroKicker}<span className="availability-line"/></div></Reveal>
      <Reveal delay={0.06}><div className="hero-index">PORTFOLIO <span>/</span> 2026</div></Reveal>
      <Reveal delay={0.12}><h1 id="hero-title"><span className="hero-name">{profile.shortName[lang]}</span><span className="hero-title">{profile.title[lang]}</span></h1></Reveal>
      <Reveal delay={0.19}><p className="hero-intro">{profile.intro[lang]}</p></Reveal>
      <Reveal delay={0.24}><div className="hero-actions"><a className="button button-primary" href="#projects">{t.explore}<ArrowDownIcon size={18} weight="bold"/></a><a className="button button-outline" href="#resume">{t.resume}<ArrowUpRightIcon size={18}/></a></div></Reveal>
      <div className="hero-bottom"><div className="hero-bottom-line"/><span>{profile.location[lang]}</span><span>{t.scroll} ↓</span></div>
    </div>
    <div className="hero-art">
      <div className="portrait-backdrop"><span className="portrait-vertical">DESIGN / CODE / SYSTEMS</span><span className="portrait-corner corner-top"/><span className="portrait-corner corner-bottom"/></div>
      <HeroSceneHost lang={lang}/>
      <picture className="portrait"><source srcSet="/images/ahmed-cutout.webp" type="image/webp"/><img src="/images/ahmed-original.webp" width="840" height="1212" alt={lang === "ar" ? "صورة أحمد نزيه" : "Portrait of Ahmed Nazeeh"} fetchPriority="high" /></picture>
      <div className="portrait-caption"><span>AN / 01</span><span>{lang === "ar" ? "فكرة ← منتج" : "IDEA → PRODUCT"}</span></div>
    </div>
  </section>;
}

function Featured({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const items = projects.filter((project) => project.featured);
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index)); });
    }, { rootMargin: "-30% 0px -38% 0px" });
    refs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return <section className="section featured-section" id="projects">
    <div className="wrap"><SectionHead index="01 / 06" kicker="SELECTED WORK" title={t.selected} intro={t.selectedIntro}/>
      <div className="featured-grid">
        <div className="featured-visual-rail"><div className="featured-sticky"><AnimatePresence mode="wait"><motion.div key={items[active].slug} initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:1.02}} transition={{duration:.28,ease:"easeOut"}}><ProjectVisual project={items[active]} lang={lang} large/></motion.div></AnimatePresence><div className="featured-counter"><span>{String(active + 1).padStart(2,"0")} / {String(items.length).padStart(2,"0")}</span><span>↗</span></div></div></div>
        <div className="featured-list">{items.map((project, index) => <article className={`featured-item ${active===index?"is-active":""}`} key={project.slug} data-index={index} ref={(node)=>{refs.current[index]=node;}}>
          <div className="featured-mobile-art"><ProjectVisual project={project} lang={lang}/></div>
          <div className="featured-top"><span>{project.number} / {project.year}</span><span className="status-chip"><i/>{t.status[project.status]}</span></div>
          <h3>{project.title}</h3><p>{project.summary[lang]}</p>
          <div className="tag-list">{project.stack.slice(0,4).map((tag)=><span key={tag}>{tag}</span>)}</div>
          <Link className="text-link" to={`/${lang}/projects/${project.slug}`}>{t.caseStudy}{lang==="ar"?<ArrowLeftIcon size={18}/>:<ArrowRightIcon size={18}/>}</Link>
        </article>)}</div>
      </div>
    </div>
  </section>;
}

function ProjectCollection({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const ordered = [projects[4],projects[5],projects[6],projects[7],projects[8],projects[0],projects[1],projects[2],projects[3]];
  const visible = filter === "all" ? ordered : ordered.filter((project) => project.category === filter);
  return <section className="section all-projects-section" id="all-projects"><div className="wrap">
    <SectionHead index="02 / 06" kicker="THE ARCHIVE" title={t.all} intro={t.allIntro}/>
    <div className="project-filters" role="group" aria-label={t.all}>{categories.map((category)=><button type="button" key={category} onClick={()=>setFilter(category)} className={filter===category?"is-selected":""} aria-pressed={filter===category}>{category==="all"?t.filterAll:t.filters[category]}<span>{category==="all"?projects.length:projects.filter((p)=>p.category===category).length}</span></button>)}</div>
    <div className="project-grid" aria-live="polite">{visible.map((project,index)=><Reveal className="project-card-reveal" key={project.slug} delay={Math.min(index,3)*0.05}><Link className="project-card" to={`/${lang}/projects/${project.slug}`}>
      <ProjectVisual project={project} lang={lang}/><div className="project-card-body"><div className="project-card-overline"><span>{project.number} / {project.year}</span><span>{t.status[project.status]}</span></div><div className="project-card-title"><h3>{project.title}</h3><ArrowUpRightIcon size={23} weight="light"/></div><p>{project.summary[lang]}</p><div className="project-card-tags">{project.stack.slice(0,3).map((tag)=><span key={tag}>{tag}</span>)}</div></div>
    </Link></Reveal>)}</div>
  </div></section>;
}

function About({ lang }: { lang: Lang }) {
  const t = ui[lang];
  return <section className="section about-section" id="about"><div className="wrap">
    <SectionHead index="03 / 06" kicker={t.aboutKicker} title={t.about}/>
    <div className="about-grid"><Reveal><p className="about-statement">{profile.about[lang]}</p><div className="about-signature"><span>AN</span><div><strong>{profile.name[lang]}</strong><small>{profile.location[lang]}</small></div></div></Reveal>
    <div className="skills-panel"><div className="panel-heading"><span>CAPABILITIES</span><h3>{t.skills}</h3></div>{skillGroups.map((group,index)=><Reveal key={index} delay={index*0.04}><div className="skill-group"><div className="skill-group-head"><span>0{index+1}</span><h4>{group.label[lang]}</h4></div><div className="skill-tags">{group.items.map((item)=><span key={item}>{item}</span>)}</div><div className="skill-proof"><small>{t.proof}</small>{group.proof.map((slug)=>{const project=projects.find(p=>p.slug===slug)!;return <Link key={slug} to={`/${lang}/projects/${slug}`}>{project.title} ↗</Link>})}</div></div></Reveal>)}</div></div>
  </div></section>;
}

function Experience({ lang }: { lang: Lang }) {
  const t=ui[lang];
  return <section className="section experience-section" id="experience"><div className="wrap"><SectionHead index="04 / 06" kicker="THE JOURNEY" title={t.experience} intro={t.experienceIntro}/><div className="timeline">{experience.map((job,i)=><Reveal key={i} className="timeline-item" delay={i*0.05}><div className="timeline-date">{job.date[lang]}</div><div className="timeline-dot"/><div className="timeline-content"><h3>{job.title[lang]}</h3><span>{job.place[lang]}</span><p>{job.body[lang]}</p></div></Reveal>)}</div></div></section>;
}

function Education({ lang }: { lang: Lang }) {
  const t=ui[lang];
  return <section className="section education-section" id="education"><div className="wrap"><SectionHead index="05 / 06" kicker="FOUNDATION" title={t.education}/><div className="education-grid"><div className="degree-list">{education.map((degree,i)=><Reveal className="degree-item" key={i}><span className="degree-years">{degree.years}</span><div><h3>{degree.title[lang]}</h3><span>{degree.place[lang]}</span><p>{degree.note[lang]}</p></div></Reveal>)}<div className="language-block"><h3>{t.languages}</h3>{languages.map((language,i)=><div key={i}><span>{language.name[lang]}</span><span>{language.level[lang]}</span></div>)}</div></div><div className="credentials"><h3>{t.credentials}</h3>{credentials.map((credential,i)=><Reveal className="credential-item" key={i} delay={i*0.03}><span>0{i+1}</span><div><h4>{credential.title[lang]}</h4><p>{credential.issuer[lang]} · {credential.detail[lang]}</p></div></Reveal>)}</div></div></div></section>;
}

function Resume({ lang }: { lang: Lang }) {
  const t=ui[lang];
  const [preview,setPreview]=useState(false);
  const pdf=lang==="ar"?"/cv/Ahmed_General_AR.pdf":"/cv/Ahmed_General_EN.pdf";
  return <section className="section resume-section" id="resume"><div className="wrap"><div className="resume-layout"><Reveal><span className="eyebrow">06 / 06 · DOCUMENTS</span><h2>{t.cvTitle}<span className="accent-dot">.</span></h2><p>{t.cvIntro}</p><div className="resume-buttons"><a className="button button-primary" href="/cv/Ahmed_General_AR.pdf" download>{t.cvAr}<DownloadSimpleIcon size={19}/></a><a className="button button-outline" href="/cv/Ahmed_General_EN.pdf" download>{t.cvEn}<DownloadSimpleIcon size={19}/></a></div><button className="resume-preview-button" type="button" aria-expanded={preview} onClick={()=>setPreview(!preview)}>{preview?t.cvHide:t.cvPreview} <span>{preview?"−":"+"}</span></button></Reveal><div className="resume-art" aria-hidden="true"><div className="resume-page page-back"/><div className="resume-page page-front"><div className="resume-monogram">AN</div><i/><i/><i/><b/><i/><i/><b/><i/></div><span>PDF / AR + EN</span></div></div>{preview&&<div className="pdf-preview"><iframe title={t.cvPreview} src={`${pdf}#toolbar=0`} loading="lazy"/><a href={pdf} target="_blank" rel="noreferrer">{t.cvPreview} ↗</a></div>}</div></section>;
}

function Contact({ lang }: { lang: Lang }) {
  const t=ui[lang];
  const [copied,setCopied]=useState<"idle"|"yes"|"fail">("idle");
  const copy=async()=>{try{await navigator.clipboard.writeText(profile.email);setCopied("yes");window.setTimeout(()=>setCopied("idle"),2500);}catch{setCopied("fail");window.setTimeout(()=>setCopied("idle"),3500);}};
  return <section className="contact-section" id="contact"><div className="wrap"><Reveal><span className="eyebrow">LET'S CONNECT / 2026</span><h2>{t.contactTitle}</h2><p>{t.contactIntro}</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRightIcon size={28}/></a><button className="copy-button" type="button" onClick={copy} aria-live="polite">{copied==="yes"?<CheckIcon size={17}/>:<CopyIcon size={17}/>} {copied==="yes"?t.copied:copied==="fail"?t.copyFail:t.copy}</button></Reveal><div className="contact-links"><a href={profile.github} target="_blank" rel="noopener noreferrer"><GithubLogoIcon size={21}/>{t.github}<ArrowUpRightIcon size={17}/></a><a href={profile.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsappLogoIcon size={21}/>{t.whatsapp}<ArrowUpRightIcon size={17}/></a><span><EnvelopeSimpleIcon size={21}/>{profile.location[lang]}</span></div></div></section>;
}

export default function Home() {
  const params=useParams();
  const lang: Lang=params.lang==="en"?"en":"ar";
  return <div id="top" className={`site ${lang=== "en"?"site-en":"site-ar"}`}><a className="skip-link" href="#main">{ui[lang].skip}</a><Header lang={lang} home/><main id="main"><Hero lang={lang}/><Featured lang={lang}/><ProjectCollection lang={lang}/><About lang={lang}/><Experience lang={lang}/><Education lang={lang}/><Resume lang={lang}/><Contact lang={lang}/></main><Footer lang={lang}/></div>;
}
