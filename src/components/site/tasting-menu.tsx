import { useReveal } from "@/lib/use-reveal";

const COLUMNS = [
  {
    step: "I — Sea",
    title: "Opening Movements",
    items: ["Oyster, green apple, dill", "Raw scallop, brown butter", "Smoked eel, sourdough"],
  },
  {
    step: "II — Fire",
    title: "The Hearth",
    items: ["Ember leek, hazelnut", "Wagyu, black garlic", "Sea bass, fennel broth"],
  },
  {
    step: "III — Cellar",
    title: "Close & Pairing",
    items: ["Aged cheese trolley", "Olive oil chocolate", "Seven-glass wine flight"],
  },
];

export function TastingMenu() {
  const ref = useReveal<HTMLElement>("[data-reveal]", 0.25);

  return (
    <section id="tasting" ref={ref} className="mx-auto max-w-[1280px] px-6 py-28 lg:px-10">
      <div className="text-center">
        <p data-reveal className="eyebrow">
          Chef's table
        </p>
        <h2 data-reveal className="mt-4 font-serif text-3xl md:text-[42px]">
          The <span className="text-gradient-gold italic">Seven-Course</span> Tasting Menu
        </h2>
        <p data-reveal className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-warmgray">
          A single, unbroken journey served from 19:00. €165 per guest, €95 with the sommelier's
          pairing.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {COLUMNS.map((c) => (
          <div key={c.step} data-reveal className="glass-panel rounded-3xl p-8">
            <p className="eyebrow">{c.step}</p>
            <h3 className="mt-4 font-serif text-2xl">{c.title}</h3>
            <ul className="mt-7 space-y-4">
              {c.items.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-warmgray">
                  <span className="mt-2 h-px w-4 shrink-0 bg-gold/60" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div data-reveal className="mt-12 text-center">
        <a href="#reservations" className="btn-gold">
          Book the Tasting Menu
        </a>
      </div>
    </section>
  );
}
