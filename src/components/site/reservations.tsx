import { useState, type FormEvent } from "react";
import { useReveal } from "@/lib/use-reveal";

const TIMES = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];
const inputCls =
  "w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-warmgray/50 focus:border-gold/60";

export function Reservations() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "19:00",
    guests: "2",
    notes: "",
  });
  const ref = useReveal<HTMLElement>();

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="reservations" ref={ref} className="relative mx-auto max-w-[1280px] px-6 py-28 lg:px-10">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(217,163,95,0.14) 0%, rgba(7,7,7,0) 60%)",
        }}
      />
      <div className="relative">
        <div className="text-center">
          <p data-reveal className="eyebrow">
            Reservations
          </p>
          <h2 data-reveal className="mt-4 font-serif text-3xl md:text-[42px]">
            Reserve Your <span className="text-gradient-gold italic">Table</span>
          </h2>
          <p data-reveal className="mx-auto mt-5 max-w-lg text-sm text-warmgray">
            Dinner Tuesday to Saturday, one seating from 19:00. We hold tables for 15 minutes.
          </p>
        </div>

        <div data-reveal className="glass-panel mx-auto mt-14 max-w-3xl rounded-3xl p-7 sm:p-10">
          {sent ? (
            <div className="py-14 text-center">
              <p className="font-serif text-3xl text-gradient-gold">Request received</p>
              <p className="mt-4 text-sm text-warmgray">
                Thank you, {form.name || "guest"}. We'll confirm {form.guests} guests on{" "}
                {form.date || "your chosen date"} at {form.time} by email shortly.
              </p>
              <button onClick={() => setSent(false)} className="btn-gold mt-8">
                Make another booking
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="eyebrow" htmlFor="r-name">
                  Full name
                </label>
                <input
                  id="r-name"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Alexandra Rossi"
                  className={`${inputCls} mt-3`}
                />
              </div>
              <div>
                <label className="eyebrow" htmlFor="r-email">
                  Email
                </label>
                <input
                  id="r-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@email.com"
                  className={`${inputCls} mt-3`}
                />
              </div>
              <div>
                <label className="eyebrow" htmlFor="r-date">
                  Date
                </label>
                <input
                  id="r-date"
                  type="date"
                  required
                  value={form.date}
                  onChange={set("date")}
                  className={`${inputCls} mt-3`}
                />
              </div>
              <div>
                <label className="eyebrow" htmlFor="r-time">
                  Time
                </label>
                <select id="r-time" value={form.time} onChange={set("time")} className={`${inputCls} mt-3`}>
                  {TIMES.map((t) => (
                    <option key={t} value={t} className="bg-[#121212]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="eyebrow" htmlFor="r-guests">
                  Guests
                </label>
                <select
                  id="r-guests"
                  value={form.guests}
                  onChange={set("guests")}
                  className={`${inputCls} mt-3`}
                >
                  {Array.from({ length: 12 }, (_, n) => String(n + 1)).map((g) => (
                    <option key={g} value={g} className="bg-[#121212]">
                      {g} {g === "1" ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="eyebrow" htmlFor="r-notes">
                  Special requests
                </label>
                <textarea
                  id="r-notes"
                  rows={4}
                  value={form.notes}
                  onChange={set("notes")}
                  placeholder="Allergies, celebrations, seating preferences…"
                  className={`${inputCls} mt-3 resize-none`}
                />
              </div>
              <div className="sm:col-span-2 flex justify-center pt-2">
                <button type="submit" className="btn-gold w-full sm:w-auto">
                  Confirm Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
