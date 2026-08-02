import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function useGsap() {
  if (typeof window !== "undefined" && !registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}

/** Fades + lifts children matching `selector` in on scroll. */
export function useReveal<T extends HTMLElement>(selector = "[data-reveal]", stagger = 0.15) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);
    const targets = el.querySelectorAll(selector);
    if (!targets.length) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          stagger,
          scrollTrigger: { trigger: el, start: "top 80%" },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [selector, stagger]);

  return ref;
}
