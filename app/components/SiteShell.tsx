import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { ArrowUpRightIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { profile, ui, type Lang } from "../data/site";

const sections = ["projects", "about", "experience", "education", "resume"];

export function languagePath(pathname: string, lang: Lang) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "ar" || parts[0] === "en") parts[0] = lang;
  else parts.unshift(lang);
  return `/${parts.join("/")}`;
}

export function Header({ lang, home = false }: { lang: Lang; home?: boolean }) {
  const t = ui[lang];
  const location = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link to={`/${lang}`} className="wordmark" aria-label={profile.name[lang]} onClick={() => setOpen(false)}><span className="wordmark-symbol">A<span>·</span>N</span><span className="wordmark-text">AHMED NAZEEH<small>PORTFOLIO / 2026</small></span></Link>
        <nav className="desktop-nav" aria-label={lang === "ar" ? "التنقل الرئيسي" : "Main navigation"}>
          {sections.map((section, i) => <a href={`${home ? "" : `/${lang}` }#${section}`} key={section}>{t.nav[i]}</a>)}
        </nav>
        <div className="header-actions">
          <Link className="language-link" to={languagePath(location.pathname, lang === "ar" ? "en" : "ar")} aria-label={lang === "ar" ? "Switch to English" : "التحويل إلى العربية"}>{lang === "ar" ? "EN" : "عربي"}</Link>
          <a className="header-contact" href={`${home ? "" : `/${lang}`}#contact`}>{t.contact}<ArrowUpRightIcon size={15} weight="bold" /></a>
          <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? t.close : t.menu} onClick={() => setOpen(!open)}>{open ? <XIcon size={23}/> : <ListIcon size={23}/>}</button>
        </div>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label={lang === "ar" ? "التنقل الرئيسي" : "Main navigation"}>
        {sections.map((section, i) => <a key={section} href={`${home ? "" : `/${lang}`}#${section}`} onClick={() => setOpen(false)}><span>0{i + 1}</span>{t.nav[i]}</a>)}
        <a href={`${home ? "" : `/${lang}`}#contact`} onClick={() => setOpen(false)}><span>06</span>{t.contact}</a>
      </nav>}
    </header>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  return <footer className="site-footer"><div className="wrap footer-inner"><span>© {new Date().getFullYear()} {profile.shortName[lang]}</span><span>{ui[lang].footer}</span><a href="#top" aria-label={lang === "ar" ? "العودة إلى أعلى الصفحة" : "Back to top"}>↑ TOP</a></div></footer>;
}
