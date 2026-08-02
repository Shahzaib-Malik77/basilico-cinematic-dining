import { useEffect, useState } from "react";
import { useReveal } from "@/lib/use-reveal";

const DISHES = [
  {
    name: "Charred Octopus",
    price: "€38",
    desc: "Smoked paprika, confit potato, lemon aioli.",
    img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Wagyu Ribeye",
    price: "€92",
    desc: "45-day aged, black garlic jus, winter truffle.",
    img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Saffron Risotto",
    price: "€34",
    desc: "Carnaroli rice, aged parmesan, bone marrow.",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Coastal Sea Bass",
    price: "€46",
    desc: "Fennel, blood orange, brown butter velouté.",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop",
  },
];

const FULL_MENU = [
  {
    category: "Starters",
    items: [
      ["Charred Octopus", "€38"],
      ["Burrata & Heirloom Tomato", "€26"],
      ["Oysters, Champagne Mignonette", "€32"],
      ["Wild Mushroom Velouté", "€24"],
    ],
  },
  {
    category: "Mains",
    items: [
      ["Truffle Wagyu Ribeye", "€92"],
      ["Coastal Sea Bass", "€46"],
      ["Saffron Risotto", "€34"],
      ["Duck Breast, Cherry & Thyme", "€54"],
      ["Slow Lamb Shoulder for Two", "€88"],
    ],
  },
  {
    category: "Desserts",
    items: [
      ["Olive Oil Chocolate Tart", "€19"],
      ["Basil & Lime Sorbet", "€14"],
      ["Vanilla Bean Crème Brûlée", "€17"],
      ["Aged Cheese Selection", "€26"],
    ],
  },
];

function MenuModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [onClose]);

  return (
    <div className="animate-fade-in fixed inset-0 z-[200] overflow-y-auto bg-[#070707]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-[1100px] px-6 py-20">
        <div className="flex items-start justify-between">
          <div>
            <p className="eyebrow">Basilico</p>
            <h3 className="mt-3 font-serif text-4xl">The Full Menu</h3>
          </div>
          <button onClick={onClose} className="btn-gold">
            Close
          </button>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {FULL_MENU.map((sec) => (
            <div key={sec.category} className="glass-panel rounded-2xl p-7">
              <h4 className="font-serif text-2xl text-gold">{sec.category}</h4>
              <ul className="mt-6 space-y-5">
                {sec.items.map(([name, price]) => (
                  <li key={name} className="flex items-end gap-2 text-sm">
                    <span className="text-foreground/90">{name}</span>
                    <span className="mb-1 flex-1 border-b border-dashed border-white/20" />
                    <span className="text-gold">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs tracking-[0.2em] text-warmgray/60 uppercase">
          Menus change with the market · please advise us of allergies
        </p>
      </div>
    </div>
  );
}

export function FeaturedDishes() {
  const ref = useReveal<HTMLElement>();
  const [open, setOpen] = useState(false);

  return (
    <section id="dishes" ref={ref} className="mx-auto max-w-[1280px] px-6 py-28 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div data-reveal>
          <p className="eyebrow">Signature plates</p>
          <h2 className="mt-4 font-serif text-3xl md:text-[42px]">Featured Dishes</h2>
        </div>
        <button data-reveal onClick={() => setOpen(true)} className="btn-gold">
          View Full Menu
        </button>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {DISHES.map((d) => (
          <article
            key={d.name}
            data-reveal
            className="glass-panel group overflow-hidden rounded-3xl p-3"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
            </div>
            <div className="px-3 pt-5 pb-4">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-lg">{d.name}</h3>
                <span className="text-sm text-gold">{d.price}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-warmgray">{d.desc}</p>
            </div>
          </article>
        ))}
      </div>

      {open && <MenuModal onClose={() => setOpen(false)} />}
    </section>
  );
}
