import { lazy, Suspense, useEffect, useRef, useState, Component, type ReactNode } from "react";
import type { Lang } from "../data/site";
import { ui } from "../data/site";

const HeroScene = lazy(() => import("./HeroScene"));

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

export function HeroSceneHost({ lang }: { lang: Lang }) {
  const host = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [mobileEnabled, setMobileEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 901px)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setDesktop(media.matches); setReduced(motion.matches); };
    update();
    media.addEventListener("change", update);
    motion.addEventListener("change", update);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "120px" });
    if (host.current) observer.observe(host.current);
    return () => { media.removeEventListener("change", update); motion.removeEventListener("change", update); observer.disconnect(); };
  }, []);

  const active = inView && !reduced && (desktop || mobileEnabled);
  return (
    <div className="scene-host" ref={host}>
      <div className="scene-poster" aria-hidden="true"><div className="poster-core"/><div className="poster-orbit orbit-one"/><div className="poster-orbit orbit-two"/><i/><i/><i/></div>
      {active && <SceneBoundary><Suspense fallback={null}><HeroScene /></Suspense></SceneBoundary>}
      {!desktop && !reduced && <button className="scene-toggle" type="button" onClick={() => setMobileEnabled(!mobileEnabled)} aria-label={mobileEnabled ? ui[lang].stop3d : ui[lang].play3d}>{mobileEnabled ? "3D −" : "3D +"}</button>}
    </div>
  );
}
