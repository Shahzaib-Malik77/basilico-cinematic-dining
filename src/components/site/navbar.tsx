import { useEffect, useState } from "react";

const LINKS = [
  { label: "Dishes", href: "#dishes" },
  { label: "About", href: "#about" },
  { label: "Tasting", href: "#tasting" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#footer" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-[1280px] items-center justify-between rounded-full px-5 py-3 transition-all duration-700 md:px-8 ${
          scrolled ? "glass-dark shadow-[0_0_30px_rgba(217,163,95,0.1)]" : "border border-transparent"
        }`}
      >
        <a href="#top" className="font-serif text-xl tracking-[0.2em] text-foreground">
          BASIL<span className="text-gradient-gold">ICO</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.7rem] tracking-[0.22em] text-warmgray uppercase transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#reservations" className="btn-gold hidden sm:inline-flex">
            Reserve Table
          </a>
          <button
            aria-label="Toggle menu"
            className="p-2 text-gold md:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="block h-px w-6 bg-current" />
            <span className="mt-1.5 block h-px w-6 bg-current" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-dark animate-fade-in mx-auto mt-2 max-w-[1280px] rounded-2xl p-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {[...LINKS, { label: "Reserve Table", href: "#reservations" }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-xs tracking-[0.25em] text-warmgray uppercase hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
