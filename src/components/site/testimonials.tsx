import { useEffect, useState } from "react";
import { useReveal } from "@/lib/use-reveal";

const QUOTES = [
  {
    quote:
      "Basilico cooks with the confidence of a kitchen that has nothing left to prove. The ribeye alone justifies the journey.",
    name: "Marguerite Vale",
    role: "The Continental Review",
  },
  {
    quote:
      "Three ingredients, perfectly argued. I have not eaten a more disciplined tasting menu in Europe this year.",
    name: "Tomas Errera",
    role: "Gastronomia Weekly",
  },
  {
    quote:
      "The cellar is a cathedral and Thorne is an unusually quiet preacher. Everything here whispers, and everything lands.",
    name: "Ines Caldeira",
    role: "Atlantic Table",
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLElement>();
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % QUOTES.length), 7000);
    return () => clearInterval(t);
  }, []);

  const q = QUOTES[i];

  return (
    <section ref={ref} className="mx-auto max-w-[1280px] px-6 py-28 lg:px-10">
      <div className="text-center">
        <p data-reveal className="eyebrow">
          Praise
        </p>
        <h2 data-reveal className="mt-4 font-serif text-3xl md:text-[42px]">
          What the Critics Say
        </h2>
      </div>

      <div data-reveal className="glass-panel mx-auto mt-14 max-w-3xl rounded-3xl px-8 py-14 text-center sm:px-14">
        <p className="font-serif text-6xl leading-none text-gold/40">“</p>
        <p key={i} className="animate-fade-in mt-2 font-serif text-xl leading-relaxed italic sm:text-2xl">
          {q.quote}
        </p>
        <p className="mt-8 text-sm text-gold">{q.name}</p>
        <p className="mt-1 text-[0.62rem] tracking-[0.22em] text-warmgray/70 uppercase">{q.role}</p>

        <div className="mt-10 flex justify-center gap-3">
          {QUOTES.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Show review ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === i ? "w-8 bg-gold" : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
