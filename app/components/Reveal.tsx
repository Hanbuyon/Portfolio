import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = element.getBoundingClientRect();
    if (bounds.top < window.innerHeight - 35) return;
    element.style.opacity = "0";
    element.style.transform = "translateY(24px)";
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const animation = element.animate(
        [{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 520, delay: delay * 1000, easing: "cubic-bezier(.2,.75,.25,1)", fill: "forwards" },
      );
      animation.finished.finally(() => { element.style.opacity = ""; element.style.transform = ""; }).catch(() => {});
    }, { rootMargin: "0px 0px -35px 0px", threshold: 0.08 });
    observer.observe(element);
    return () => { observer.disconnect(); element.style.opacity = ""; element.style.transform = ""; };
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}
