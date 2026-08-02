import { useReveal } from "@/lib/use-reveal";

export function Immersive() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10">
      <div
        data-reveal
        className="relative overflow-hidden rounded-[36px] border border-white/10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-linear-to-t from-[#070707] via-[#070707]/70 to-[#070707]/30 px-6 py-24 sm:px-14 lg:py-36">
          <p className="eyebrow">The experience</p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight md:text-[42px]">
            An evening that moves through the whole house
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-loose text-warmgray">
            Arrive to candlelight and a glass poured at the marble bar. Dine beneath vaulted stone.
            Finish two floors below among 640 bottles, where the cellar stays at a steady twelve
            degrees.
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              ["The Vaulted Room", "Twelve tables, one seating, candle only."],
              ["Private Dining", "A stone chamber for eight to fourteen guests."],
              ["The Wine Cellar", "640 references, tastings led by our sommelier."],
            ].map(([t, d]) => (
              <div key={t} className="glass-panel rounded-2xl p-6">
                <h3 className="font-serif text-lg text-gold">{t}</h3>
                <p className="mt-2 text-xs leading-relaxed text-warmgray">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
