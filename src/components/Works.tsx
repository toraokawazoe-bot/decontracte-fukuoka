"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

type Work = {
  name: string;
  sport: string;
  place: string;
  year: string;
  img?: string;
  bg?: string;
};

const FEATURED: Work[] = [
  {
    name: "MIGHTY FC",
    sport: "SOCIETY",
    place: "FUKUOKA",
    year: "2026",
    img: "/img/first_view.jpg",
  },
  {
    name: "TOKAI-5",
    sport: "FUTSAL",
    place: "FUKUOKA",
    year: "2026",
    img: "/img/team_order_01.png",
  },
];

const WORKS: Work[] = [
  { name: "CHERRY'S",    sport: "SOCCER",  place: "FUKUOKA", year: "2026", bg: "linear-gradient(135deg, #e6b800 0%, #a88600 100%)" },
  { name: "SEAGULL FC",  sport: "SOCCER",  place: "KAGAWA",  year: "2025", bg: "linear-gradient(135deg, #b94a35 0%, #1a1714 100%)" },
  { name: "FUJITA SC",   sport: "FUTSAL",  place: "TOKYO",   year: "2025", bg: "linear-gradient(135deg, #2a241e 0%, #1a1714 100%)" },
  { name: "BLACK BIRDS", sport: "SOCIETY", place: "OSAKA",   year: "2025", bg: "linear-gradient(135deg, #1a1714 0%, #b94a35 100%)" },
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
      <div className="container-x section-y">
        {/* Big section header */}
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-jp text-[14px] font-bold tracking-[0.32em] text-[var(--color-madder)]">
                制作実績
              </p>
              <h2 className="mt-4 text-stencil text-[clamp(48px,7vw,108px)] leading-[0.88] text-[var(--color-ink)]">
                SELECTED
                <br />
                <span className="text-[var(--color-madder)]">WORKS.</span>
              </h2>
            </div>
            <p className="max-w-md font-jp text-[15px] font-medium leading-[1.95] text-[var(--color-ink)]">
              福岡をはじめ、全国のチームと作ってきた一着の数々。同じ &ldquo;フルオーダー&rdquo; でも、チームの数だけ表情があります。
            </p>
          </div>
        </Reveal>

        {/* Featured pair */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-7">
          {FEATURED.map((w, i) => (
            <Reveal key={w.name} delay={i * 120}>
              <FeaturedCard work={w} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Carousel of more works */}
      <div className="pb-8">
        <div className="container-x mb-6 flex items-center justify-between">
          <p className="font-jp text-[14px] font-bold tracking-[0.12em] text-[var(--color-ink)]">
            これまでに作った他のチーム
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="前の実績"
              onClick={() => goTo(Math.max(0, active - 1))}
              className="size-11 rounded-full border-2 border-[var(--color-ink)] font-bold transition hover:bg-[var(--color-ink)] hover:text-[var(--color-paper-pure)] disabled:opacity-30"
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
              className="size-11 rounded-full border-2 border-[var(--color-ink)] font-bold transition hover:bg-[var(--color-ink)] hover:text-[var(--color-paper-pure)] disabled:opacity-30"
              disabled={active === WORKS.length - 1}
            >
              →
            </button>
          </div>
        </div>
        <div
          ref={trackRef}
          className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:px-8 lg:gap-6 lg:px-12 [&::-webkit-scrollbar]:hidden"
        >
          {WORKS.map((w, i) => (
            <SmallWorkCard key={w.name} w={w} active={i === active} />
          ))}
          <div className="shrink-0 w-1" aria-hidden />
        </div>
      </div>

      <div className="container-x pb-16">
        <Reveal>
          <a
            href="#contact"
            className="group flex items-center justify-between rounded-2xl bg-[var(--color-ink)] px-7 py-6 font-jp text-[15px] font-bold tracking-[0.06em] text-[var(--color-paper-pure)] transition hover:bg-[var(--color-madder)]"
          >
            あなたのチームを、次の WORK へ
            <span aria-hidden className="transition group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedCard({ work }: { work: Work }) {
  return (
    <article className="group card-lift relative overflow-hidden rounded-3xl border border-[var(--color-line-ink-strong)] bg-[var(--color-paper-pure)] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-ink)]">
        {work.img ? (
          <Image
            src={work.img}
            alt={`${work.name} のチームウェア制作実績`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
          />
        ) : null}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,10,8,0.10) 0%, rgba(13,10,8,0.0) 40%, rgba(13,10,8,0.78) 100%)",
          }}
        />

        {/* Year badge */}
        <span className="absolute left-5 top-5 rounded-full bg-[var(--color-paper-pure)] px-3 py-1 font-jp text-[11px] font-bold tracking-[0.12em] text-[var(--color-ink)]">
          {work.year}
        </span>

        {/* Bottom title */}
        <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
          <p className="font-jp text-[12px] font-bold tracking-[0.18em] text-[var(--color-paper-pure)]/85">
            {work.sport} ／ {work.place}
          </p>
          <h3 className="mt-2 text-stencil leading-[0.92] text-[var(--color-paper-pure)]" style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}>
            {work.name}
          </h3>
        </div>
      </div>
    </article>
  );
}

function SmallWorkCard({ w, active }: { w: Work; active: boolean }) {
  return (
    <article
      className={`relative w-[68vw] max-w-[340px] shrink-0 snap-center overflow-hidden rounded-3xl border-2 border-[var(--color-ink)] bg-[var(--color-paper-pure)] transition-all duration-700 lg:w-[26vw] lg:max-w-[400px] ${
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
        <span className="absolute left-4 top-4 rounded-full bg-[var(--color-paper-pure)]/95 px-2.5 py-1 font-jp text-[10px] font-bold tracking-[0.12em] text-[var(--color-ink)]">
          {w.year}
        </span>
        <div className="flex h-full items-end p-6">
          <span
            className="text-stencil leading-[0.88] text-[var(--color-paper-pure)]"
            style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
          >
            {w.name.split(" ")[0]}
          </span>
        </div>
      </div>

      <div className="p-5 lg:p-6">
        <h3 className="font-jp text-[17px] font-bold leading-tight text-[var(--color-ink)]">
          {w.name}
        </h3>
        <p className="mt-1.5 font-jp text-[12px] font-bold tracking-[0.1em] text-[var(--color-ink-dim)]">
          {w.sport} ／ {w.place}
        </p>
      </div>
    </article>
  );
}
