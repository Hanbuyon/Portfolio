import type { Project, Lang } from "../data/site";
import { ui } from "../data/site";
import { galleryBySlug } from "../data/gallery";

export function ProjectVisual({ project, lang, large = false }: { project: Project; lang: Lang; large?: boolean }) {
  const cover = galleryBySlug[project.slug]?.[0];
  if (cover) return <div className={`project-visual project-screenshot visual-${project.art} ${large ? "project-visual-large" : ""}`} role="img" aria-label={`${project.title}: ${cover.title[lang]}`}>
    <img src={cover.src} alt="" loading="lazy" decoding="async" />
    <div className="screenshot-shade" />
    <span className="screenshot-brand">{project.title}</span>
    <span className="screenshot-label">{lang === "ar" ? "لقطة من المشروع" : "PROJECT SCREENSHOT"} <span>↗</span></span>
  </div>;
  return (
    <div className={`project-visual visual-${project.art} ${large ? "project-visual-large" : ""}`} aria-label={`${ui[lang].visualNote}: ${project.title}`} role="img">
      <div className="visual-grid" />
      <div className="visual-noise" />
      {project.art === "manazil" && (
        <div className="art-manazil">
          <div className="art-window"><span>MANAZIL</span><div className="art-window-top" /><div className="art-window-row"><i /><i /><i /></div></div>
          <div className="art-map"><span className="map-line" /><span className="map-pin pin-one"/><span className="map-pin pin-two"/><span className="map-pin pin-three"/></div>
          <div className="art-arch arch-one"/><div className="art-arch arch-two"/>
        </div>
      )}
      {project.art === "khadmat" && (
        <div className="art-khadmat"><div className="signal-ring ring-one"/><div className="signal-ring ring-two"/><div className="signal-ring ring-three"/><div className="signal-core">K</div><span className="signal-node node-one"/><span className="signal-node node-two"/><span className="signal-node node-three"/><div className="signal-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></div>
      )}
      {project.art === "manhwa" && (
        <div className="art-manhwa"><div className="manga-page manga-back"><div className="manga-panel"/><div className="manga-panel"/></div><div className="manga-page manga-front"><div className="manga-panel"/><div className="manga-panel"/><div className="manga-bubble"/></div><div className="translate-chip">文 → A</div></div>
      )}
      {project.art === "dental-app" && (
        <div className="art-dental-app"><div className="phone-shell"><div className="phone-island"/><div className="phone-brand">DENTAL<span>FLOW</span></div><div className="phone-calendar"><b>07</b><div><i/><i/><i/></div></div><div className="phone-cards"><span/><span/><span/></div><div className="phone-nav"><i/><i/><i/></div></div><div className="phone-orbit orbit-a"/><div className="phone-orbit orbit-b"/></div>
      )}
      {project.art === "dental-web" && (
        <div className="art-dental-web"><div className="browser-shell"><div className="browser-bar"><i/><i/><i/></div><div className="clinic-header">DR. NOHA <span>✦</span></div><div className="clinic-lines"><b/><i/><i/></div><div className="clinic-image"><span>✺</span></div><div className="clinic-bottom"><i/><i/><i/></div></div></div>
      )}
      {project.art === "switchyard" && (
        <div className="art-switchyard"><div className="switch-frame"><div className="switch-top"><span>SWITCHYARD</span><i/><i/></div><div className="switch-side"><i/><i/><i/><i/></div><div className="switch-flow"><span>PLAN</span><b>→</b><span>BUILD</span><b>→</b><span>REVIEW</span></div><div className="switch-logs"><i/><i/><i/><i/></div></div></div>
      )}
      {project.art === "iftar" && (
        <div className="art-iftar"><div className="iftar-sun"/><div className="iftar-horizon"/><div className="iftar-card"><span>RAMADAN / 2024</span><strong>9,000</strong><small>MEALS</small><div><i/><i/><i/></div></div></div>
      )}
      {project.art === "school" && (
        <div className="art-school"><div className="school-sheet"><div className="sheet-head"><b/><i/><i/></div>{Array.from({length:5},(_,i)=><div className="sheet-row" key={i}><i/><i/><i/></div>)}</div><div className="school-report"><i/><i/><i/><b/></div></div>
      )}
      <span className="visual-caption">{ui[lang].visualNote}</span>
    </div>
  );
}
