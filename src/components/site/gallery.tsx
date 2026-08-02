import { useReveal } from "@/lib/use-reveal";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    alt: "Basilico dining room in candlelight",
    cls: "sm:col-span-2 sm:row-span-2 aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
    alt: "Plated seafood course",
    cls: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop",
    alt: "Dark plated dessert course",
    cls: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    alt: "Fresh market ingredients",
    cls: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=800&auto=format&fit=crop",
    alt: "Wine poured in the cellar",
    cls: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1400&auto=format&fit=crop",
    alt: "Chef finishing a dish with herbs",
    cls: "col-span-2 sm:col-span-4 aspect-[21/9]",
  },
];


export function Gallery() {
  const ref = useReveal<HTMLElement>("[data-reveal]", 0.1);

  return (
    <section id="gallery" ref={ref} className="mx-auto max-w-[1280px] px-6 py-28 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div data-reveal>
          <p className="eyebrow">Visual story</p>
          <h2 className="mt-4 font-serif text-3xl md:text-[42px]">Inside Basilico</h2>
        </div>
        <p data-reveal className="max-w-sm text-xs leading-relaxed text-warmgray">
          Stone, candlelight and open flame — photographed across one ordinary Thursday service.
        </p>
      </div>

      <div className="mt-14 grid auto-rows-auto grid-cols-2 gap-4 sm:grid-cols-4">
        {IMAGES.map((im, idx) => (
          <figure
            key={idx}
            data-reveal
            className={`group overflow-hidden rounded-2xl border border-white/10 ${im.cls}`}
          >
            <img
              src={im.src}
              alt={im.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
