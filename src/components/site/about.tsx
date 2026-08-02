import { useReveal } from "@/lib/use-reveal";

export function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="mx-auto max-w-[1280px] px-6 py-28 lg:px-10">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p data-reveal className="eyebrow">
            The philosophy
          </p>
          <h2 data-reveal className="mt-4 font-serif text-3xl leading-tight md:text-[42px]">
            A kitchen guided by <span className="text-gradient-gold italic">fire, season</span> and
            restraint
          </h2>
          <p data-reveal className="mt-7 text-sm leading-loose text-warmgray">
            Chef Alexander Thorne opened Basilico after a decade cooking along the Mediterranean
            coast. His conviction is simple: a plate should carry no more than three voices, and
            each should be loud enough to remember.
          </p>
          <p data-reveal className="mt-5 text-sm leading-loose text-warmgray">
            Every morning begins at the harbour and the farm gate. What arrives decides the menu —
            never the other way round. Everything else is patience: embers, brine, time in the
            cellar, and a room quiet enough to taste it all.
          </p>
          <div data-reveal className="mt-9 flex flex-wrap gap-8">
            {[
              ["Sourcing", "Within 90km"],
              ["Cellar", "640 references"],
              ["Service", "One seating"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-[0.62rem] tracking-[0.22em] text-warmgray/60 uppercase">{k}</p>
                <p className="mt-1 font-serif text-lg text-gold">{v}</p>
              </div>
            ))}
          </div>
          <p
            data-reveal
            className="mt-10 font-serif text-4xl text-[#BDBDBD] italic opacity-80"
            aria-label="Signed Alexander Thorne"
          >
            Alexander Thorne
          </p>
        </div>

        <div data-reveal className="relative flex justify-center">
          <div className="absolute inset-0 -z-10 rounded-full bg-gold/10 blur-[90px]" />
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop"
            alt="Chef Alexander Thorne plating in the Basilico kitchen"
            loading="lazy"
            className="aspect-square w-full max-w-[460px] rounded-full border border-white/10 object-cover shadow-[0_0_60px_rgba(217,163,95,0.18)]"
          />
          <div className="glass-dark absolute bottom-4 left-0 rounded-2xl px-6 py-4 sm:left-4">
            <p className="eyebrow">Head Chef</p>
            <p className="mt-1 font-serif text-lg">Alexander Thorne</p>
          </div>
        </div>
      </div>
    </section>
  );
}
