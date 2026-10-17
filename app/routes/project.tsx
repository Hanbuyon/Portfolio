import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon, GithubLogoIcon, XIcon } from "@phosphor-icons/react";
import { Header, Footer } from "../components/SiteShell";
import { ProjectVisual } from "../components/ProjectVisual";
import { ProjectGallery } from "../components/ProjectGallery";
import { galleryBySlug } from "../data/gallery";
import { Reveal } from "../components/Reveal";
import { projects, ui, type Lang } from "../data/site";
import { siteOrigin, socialImageMeta } from "../data/seo";

export function meta({ params }: { params: { lang?: string; slug?: string } }) {
  const lang: Lang = params.lang === "en" ? "en" : "ar";
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return [{ title: "Project not found" }];
  return [
    { title: `${project.title} — ${lang === "ar" ? "أحمد نزيه" : "Ahmed Nazeeh"}` },
    { name: "description", content: project.summary[lang] },
    { property: "og:title", content: `${project.title} — Ahmed Nazeeh` },
    { property: "og:description", content: project.summary[lang] },
    { property: "og:url", content: `${siteOrigin}/${lang}/projects/${project.slug}` },
    { property: "og:type", content: "article" },
    ...socialImageMeta(lang),
  ];
}

function VisualDialog({ project, lang }: { project: (typeof projects)[number]; lang: Lang }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && dialog.current) {
        const focusable = Array.from(dialog.current.querySelectorAll<HTMLElement>("button, a[href], [tabindex]:not([tabindex='-1'])"));
        if (!focusable.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener("keydown", onKey); trigger.current?.focus(); };
  }, [open]);
  return <><button ref={trigger} type="button" className="project-hero-visual" onClick={() => setOpen(true)} aria-label={`${ui[lang].visualNote}: ${project.title}`}><ProjectVisual project={project} lang={lang} large/><span className="visual-expand">↗</span></button>
    {open && <div className="visual-dialog-backdrop" onMouseDown={(event)=>{ if(event.target===event.currentTarget)setOpen(false); }}><div ref={dialog} className="visual-dialog" role="dialog" aria-modal="true" aria-label={`${ui[lang].visualNote}: ${project.title}`}><button ref={closeButton} type="button" className="dialog-close" onClick={()=>setOpen(false)} aria-label={ui[lang].close}><XIcon size={24}/></button><ProjectVisual project={project} lang={lang} large/><p>{ui[lang].visualNote} · {project.title}</p></div></div>}
  </>;
}

export default function ProjectPage() {
  const { lang: routeLang, slug } = useParams();
  const lang: Lang = routeLang === "en" ? "en" : "ar";
  const t=ui[lang];
  const project=projects.find((item)=>item.slug===slug);
  if(!project) return <div className="site"><Header lang={lang}/><main className="not-found wrap"><h1>{lang==="ar"?"المشروع غير موجود":"Project not found"}</h1><Link className="button button-primary" to={`/${lang}#projects`}>{t.back}</Link></main><Footer lang={lang}/></div>;
  const next=projects[(projects.indexOf(project)+1)%projects.length];
  return <div id="top" className={`site project-page ${lang==="en"?"site-en":"site-ar"}`}><a className="skip-link" href="#main">{t.skip}</a><Header lang={lang}/><main id="main">
    <section className="project-intro wrap"><Link className="project-back" to={`/${lang}#projects`}>{lang==="ar"?<ArrowRightIcon size={17}/>:<ArrowLeftIcon size={17}/>} {t.back}</Link><div className="project-intro-grid"><div><span className="eyebrow">CASE STUDY / {project.number} — {project.year}</span><h1>{project.title}<span className="accent-dot">.</span></h1><p>{project.summary[lang]}</p></div><div className="project-intro-side"><span className="status-chip"><i/>{t.status[project.status]}</span><span>{project.stack.slice(0,3).join(" / ")}</span></div></div>{galleryBySlug[project.slug] ? <ProjectGallery project={project} lang={lang}/> : <VisualDialog project={project} lang={lang}/>}</section>
    <section className="project-body-section"><div className="wrap project-body-grid"><div className="project-body-rail"><span>IN DETAIL / {project.number}</span><div className="project-rail-line"/><span>{project.year}</span></div><div className="project-body-content"><Reveal><span className="eyebrow">01 / {t.overview}</span><h2>{t.challenge}</h2><p className="body-lead">{project.challenge[lang]}</p></Reveal><Reveal className="detail-block"><h3>{t.role}</h3><p>{project.role[lang]}</p></Reveal><Reveal className="detail-block"><h3>{t.solution}</h3><p>{project.solution[lang]}</p></Reveal><Reveal className="detail-block"><h3>{t.highlights}</h3><ul className="feature-list">{project.highlights[lang].map((highlight,index)=><li key={index}><span>0{index+1}</span>{highlight}</li>)}</ul></Reveal><Reveal className="detail-block"><h3>{t.outcome}</h3><p>{project.outcome[lang]}</p></Reveal><Reveal className="detail-block"><h3>{t.stack}</h3><div className="detail-stack">{project.stack.map((item)=><span key={item}>{item}</span>)}</div></Reveal><Reveal className="detail-links">{project.live && <a className="button button-primary" href={project.live} target="_blank" rel="noopener noreferrer">{t.live}<ArrowUpRightIcon size={18}/></a>}{project.github && <a className="button button-outline" href={project.github} target="_blank" rel="noopener noreferrer">{t.repo}<GithubLogoIcon size={18}/></a>}</Reveal></div></div></section>
    <section className="next-project"><div className="wrap"><span className="eyebrow">{t.next} / {next.number}</span><Link to={`/${lang}/projects/${next.slug}`}><span>{next.title}</span><ArrowUpRightIcon size={36} weight="light"/></Link></div></section>
  </main><Footer lang={lang}/></div>;
}
