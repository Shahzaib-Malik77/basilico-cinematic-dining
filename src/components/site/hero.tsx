import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-line]",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.6, ease: "power4.out", stagger: 0.16, delay: 0.2 },
      );
      gsap.fromTo(
        card.current,
        { y: 80, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 1.8, ease: "power3.out", delay: 0.5 },
      );
      gsap.to(card.current, {
        y: -18,
        duration: 3.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={root} className="relative min-h-screen overflow-hidden bg-surface">
      <img
        src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/restaurant_bg.png"
        alt="Basilico dining room at night"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(7,7,7,0) 35%, rgba(7,7,7,0.55) 75%, rgba(7,7,7,0.95) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#070707]/60 to-transparent" />

      <div className="relative mx-auto grid min-h-screen max-w-[1280px] grid-cols-1 items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div>
          <p data-hero-line className="eyebrow">
            Est. 1998 · Lisbon · One Michelin Star
          </p>
          <h1 className="mt-6 font-serif text-[34px] leading-[1.08] font-normal sm:text-[42px] lg:text-[50px]">
            <span data-hero-line className="block">
              Crafting
            </span>
            <span data-hero-line className="text-gradient-gold block italic">
              Exceptional
            </span>
            <span data-hero-line className="block">
              Culinary Experiences
            </span>
          </h1>
          <p data-hero-line className="mt-7 max-w-md text-sm leading-relaxed text-warmgray">
            Seasonal Mediterranean tasting menus built around fire, farm and coast. Twelve tables,
            one seating each evening, and a kitchen that cooks only what the morning market allows.
          </p>
          <div data-hero-line className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#reservations" className="btn-gold">
              Reserve a Table
            </a>
            <a
              href="#dishes"
              className="text-[0.7rem] tracking-[0.24em] text-warmgray uppercase transition-colors hover:text-gold"
            >
              Explore the Menu →
            </a>
          </div>
          <div data-hero-line className="mt-14 flex gap-10 border-t border-white/10 pt-7">
            {[
              ["27", "Years of craft"],
              ["7", "Course tasting"],
              ["12", "Tables nightly"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-serif text-2xl text-gold">{n}</p>
                <p className="mt-1 text-[0.62rem] tracking-[0.2em] text-warmgray/70 uppercase">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div
            ref={card}
            className="glass-panel relative w-full max-w-[450px] overflow-hidden rounded-[28px] p-2"
          >
            <video
              className="aspect-[4/5] w-full rounded-[22px] object-cover"
              src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_food_video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="glass-dark absolute right-5 bottom-5 left-5 rounded-2xl px-5 py-4">
              <p className="eyebrow">Chef's Special</p>
              <p className="mt-1.5 font-serif text-lg">Truffle Wagyu Ribeye</p>
              <p className="mt-1 text-xs text-warmgray">Black garlic jus · aged 45 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
