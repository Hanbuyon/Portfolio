import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeftIcon, ArrowRightIcon, ArrowsOutIcon, XIcon } from "@phosphor-icons/react";
import type { Lang, Project } from "../data/site";
import { galleryBySlug } from "../data/gallery";

export function ProjectGallery({ project, lang }: { project: Project; lang: Lang }) {
  const shots = galleryBySlug[project.slug] ?? [];
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync(); query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowRight") setIndex((current) => (current + 1) % shots.length);
      if (event.key === "ArrowLeft") setIndex((current) => (current + shots.length - 1) % shots.length);
      if (event.key === "Tab" && dialog.current) {
        const controls = [...dialog.current.querySelectorAll<HTMLButtonElement>("button")];
        if (event.shiftKey && document.activeElement === controls[0]) { event.preventDefault(); controls.at(-1)?.focus(); }
        if (!event.shiftKey && document.activeElement === controls.at(-1)) { event.preventDefault(); controls[0]?.focus(); }
      }
    };
    window.addEventListener("keydown", key);
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener("keydown", key); trigger.current?.focus(); };
  }, [open, shots.length]);
  if (!shots.length) return null;
  const shot = shots[index];
  const previous = () => setIndex((current) => (current + shots.length - 1) % shots.length);
  const next = () => setIndex((current) => (current + 1) % shots.length);
  const transition = reduced ? { duration: 0 } : { duration: .32, ease: "easeOut" as const };
  return <section className="case-gallery" aria-label={lang === "ar" ? `صور مشروع ${project.title}` : `${project.title} screenshots`}>
    <div className="gallery-heading"><div><span className="eyebrow">{lang === "ar" ? "صور حقيقية / من المشروع" : "REAL SCREENS / FROM THE PROJECT"}</span><h2>{lang === "ar" ? "استكشف الواجهات" : "Explore the interface"}</h2></div><span className="gallery-count">{String(index + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}</span></div>
    <div className="gallery-stage"><AnimatePresence mode="wait"><motion.button ref={trigger} key={shot.src} type="button" className={`gallery-main ${shot.portrait ? "gallery-portrait" : ""}`} onClick={() => setOpen(true)} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -9 }} transition={transition} aria-label={lang === "ar" ? `تكبير صورة: ${shot.title.ar}` : `Enlarge image: ${shot.title.en}`}><img src={shot.src} alt={shot.title[lang]} loading={index === 0 ? "eager" : "lazy"} decoding="async"/><span className="gallery-zoom"><ArrowsOutIcon size={19}/>{lang === "ar" ? "تكبير" : "Enlarge"}</span></motion.button></AnimatePresence><div className="gallery-arrows"><button type="button" onClick={previous} aria-label={lang === "ar" ? "الصورة السابقة" : "Previous image"}><ArrowLeftIcon size={20}/></button><button type="button" onClick={next} aria-label={lang === "ar" ? "الصورة التالية" : "Next image"}><ArrowRightIcon size={20}/></button></div></div>
    <div className="gallery-caption"><strong>{shot.title[lang]}</strong>{shot.note && <span>{shot.note[lang]}</span>}</div>
    <div className="gallery-thumbs" role="group" aria-label={lang === "ar" ? "اختيار صورة" : "Select image"}>{shots.map((item, itemIndex) => <button key={item.src} type="button" className={itemIndex === index ? "is-active" : ""} aria-label={`${itemIndex + 1}: ${item.title[lang]}`} aria-pressed={itemIndex === index} onClick={() => setIndex(itemIndex)}><img src={item.src} alt="" loading="lazy"/><span>{String(itemIndex + 1).padStart(2, "0")}</span></button>)}</div>
    {open && <div className="gallery-lightbox-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}><div ref={dialog} className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={shot.title[lang]}><div className="lightbox-top"><span>{project.title} / {String(index + 1).padStart(2, "0")}</span><button ref={closeButton} type="button" onClick={() => setOpen(false)} aria-label={lang === "ar" ? "إغلاق" : "Close"}><XIcon size={23}/></button></div><img src={shot.src} alt={shot.title[lang]}/><div className="lightbox-bottom"><button type="button" onClick={previous} aria-label={lang === "ar" ? "الصورة السابقة" : "Previous image"}><ArrowLeftIcon size={20}/></button><p>{shot.title[lang]}{shot.note && <small>{shot.note[lang]}</small>}</p><button type="button" onClick={next} aria-label={lang === "ar" ? "الصورة التالية" : "Next image"}><ArrowRightIcon size={20}/></button></div></div></div>}
  </section>;
}
