"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const WORKS = [
  { name: "MIGHTY FC",   sport: "SOCIETY", place: "FUKUOKA", bg: "linear-gradient(135deg, #b94a35 0%, #8c331f 100%)" },
  { name: "TOKAI-5",     sport: "FUTSAL",  place: "FUKUOKA", bg: "linear-gradient(135deg, #1a1714 0%, #2a241e 100%)" },
  { name: "CHERRY'S",    sport: "SOCCER",  place: "FUKUOKA", bg: "linear-gradient(135deg, #e6b800 0%, #a88600 100%)" },
  { name: "SEAGULL FC",  sport: "SOCCER",  place: "KAGAWA",  bg: "linear-gradient(135deg, #b94a35 0%, #1a1714 100%)" },
];

export function Works() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        const cards = Array.from(el.children) as HTMLElement[];
        const center = el.scrollLeft + el.clientWidth / 2;
        let nearest = 0;
        let best = Infinity;
        cards.forEach((c, i) => {
          const cc = c.offsetLeft + c.clientWidth / 2;
          const d = Math.abs(cc - center);
          if (d < best) {
            best = d;
            nearest = i;
          }
        });
        setActive(nearest);
        raf = 0;
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const c = cards[i];
    if (!c) return;
    el.scrollTo({ left: c.offsetLeft - 16, behavior: "smooth" });
  };

  return (
    <section id="works" className="stack-section relative overflow-hidden surface-paper">
      <div className="container-x pb-8 pt-20 lg:pb-12 lg:pt-32">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-stencil text-[clamp(48px,7vw,108px)] leading-[0.88] text-[var(--color-ink)]">
              SELECTED
              <br />
              <span className="text-[var(--color-madder)]">WORKS.</span>
            </h2>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="前の実績"
                onClick={() => goTo(Math.max(0, active - 1))}
                className="size-11 border-2 border-[var(--color-ink)] font-bold transition hover:bg-[var(--color-ink)] hover:text-[var(--color-paper-pure)] disabled:opacity-30"
                disabled={active === 0}
              >
                ←
              </button>
              <span className="font-jp text-[13px] font-bold tracking-[0.12em] text-[var(--color-ink)] tabular-nums">
                {String(active + 1).padStart(2, "0")} / {String(WORKS.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                aria-label="次の実績"
                onClick={() => goTo(Math.min(WORKS.length - 1, active + 1))}
                className="size-11 border-2 border-[var(--color-ink)] font-bold transition hover:bg-[var(--color-ink)] hover:text-[var(--color-paper-pure)] disabled:opacity-30"
                disabled={active === WORKS.length - 1}
              >
                →
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-8 [scrollbar-width:none] sm:px-8 lg:gap-6 lg:px-12 lg:pb-16 [&::-webkit-scrollbar]:hidden"
      >
        {WORKS.map((w, i) => (
          <WorkCard key={w.name} w={w} active={i === active} />
        ))}
        <div className="shrink-0 w-1" aria-hidden />
      </div>

      <div className="container-x pb-16">
        <a
          href="#contact"
          className="group flex items-center justify-between border-y-2 border-[var(--color-ink)] py-6 font-jp text-[15px] font-bold tracking-[0.06em] text-[var(--color-ink)] transition hover:text-[var(--color-madder)]"
        >
          あなたのチームを次の WORK に
          <span aria-hidden className="transition group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}

function WorkCard({ w, active }: { w: (typeof WORKS)[number]; active: boolean }) {
  return (
    <article
      className={`relative w-[78vw] max-w-[420px] shrink-0 snap-center overflow-hidden border-2 border-[var(--color-ink)] bg-[var(--color-paper-pure)] transition-all duration-700 lg:w-[32vw] lg:max-w-[520px] ${
        active ? "scale-100 opacity-100" : "scale-[0.96] opacity-70"
      }`}
    >
      <div className="relative aspect-[4/5] overflow-hidden" style={{ background: w.bg }}>
        <div className="absolute inset-0 hatch opacity-25" aria-hidden />
        <div
          aria-hidden
          className="absolute inset-0 slow-pan"
          style={{
            background: "radial-gradient(60% 60% at 70% 25%, rgba(245,239,228,0.20), transparent 60%)",
          }}
        />
        <div className="flex h-full items-end p-7">
          <span
            className="text-stencil leading-[0.88] text-[var(--color-paper-pure)]"
            style={{ fontSize: "clamp(40px, 4.5vw, 72px)" }}
          >
            {w.name.split(" ")[0]}
          </span>
        </div>
      </div>

      <div className="p-6 lg:p-7">
        <h3 className="font-jp text-[18px] font-bold leading-tight text-[var(--color-ink)] lg:text-[20px]">
          {w.name}
        </h3>
        <p className="mt-2 font-jp text-[13px] font-bold tracking-[0.08em] text-[var(--color-ink-dim)]">
          {w.sport} ／ {w.place}
        </p>
      </div>
    </article>
  );
}
