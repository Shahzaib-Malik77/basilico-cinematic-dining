import { useState, type FormEvent } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  return (
    <footer id="footer" className="border-t border-white/10">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <p className="font-serif text-2xl tracking-[0.2em]">
            BASIL<span className="text-gradient-gold">ICO</span>
          </p>
          <p className="mt-5 max-w-sm text-sm leading-loose text-warmgray">
            A twelve-table Mediterranean kitchen in Lisbon. Fire, season and restraint, served in a
            single evening seating.
          </p>
        </div>

        <div>
          <p className="eyebrow">Visit</p>
          <ul className="mt-5 space-y-3 text-sm text-warmgray">
            <li>Rua das Oliveiras 14, Lisbon</li>
            <li>
              <a href="tel:+351210000000" className="hover:text-gold">
                +351 210 000 000
              </a>
            </li>
            <li>
              <a href="mailto:table@basilico.pt" className="hover:text-gold">
                table@basilico.pt
              </a>
            </li>
            <li>Tue – Sat · 19:00 – 23:30</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Newsletter</p>
          {done ? (
            <p className="mt-5 text-sm text-gold">You're on the list. See you at the table.</p>
          ) : (
            <form onSubmit={submit} className="mt-5 space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Email address"
                className="w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-3 text-sm outline-none placeholder:text-warmgray/50 focus:border-gold/60"
              />
              <button type="submit" className="btn-gold w-full">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 border-t border-white/10 px-6 py-7 text-[0.65rem] tracking-[0.2em] text-warmgray/60 uppercase lg:px-10">
        <p>© {new Date().getFullYear()} Basilico. All rights reserved.</p>
        <p>Crafted with fire &amp; patience</p>
      </div>
    </footer>
  );
}
