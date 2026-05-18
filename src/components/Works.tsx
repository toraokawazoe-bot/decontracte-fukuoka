import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const WORKS = [
  { name: "MIGHTY FC",   sport: "SOCIETY", place: "FUKUOKA", no: "WK/014", yr: "'26", tone: "madder" as const, span: 2 },
  { name: "TOKAI-5",     sport: "FUTSAL",  place: "FUKUOKA", no: "WK/015", yr: "'26", tone: "navy"   as const, span: 1 },
  { name: "CHERRY'S",    sport: "SOCCER",  place: "FUKUOKA", no: "WK/016", yr: "'26", tone: "ink"    as const, span: 1 },
  { name: "SEAGULL FC",  sport: "SOCCER",  place: "KAGAWA",  no: "WK/017", yr: "'25", tone: "madder" as const, span: 1 },
  { name: "FUJITA SC",   sport: "FUTSAL",  place: "TOKYO",   no: "WK/018", yr: "'25", tone: "ink"    as const, span: 1 },
  { name: "BLACK BIRDS", sport: "SOCIETY", place: "OSAKA",   no: "WK/019", yr: "'25", tone: "navy"   as const, span: 2 },
];

const TONES = {
  madder: { bg: "bg-madder",  glow: "rgba(255,210,200,0.28)" },
  navy:   { bg: "bg-navy",    glow: "rgba(180,200,220,0.24)" },
  ink:    { bg: "bg-ink",     glow: "rgba(255,255,255,0.20)" },
};

export function Works() {
  return (
    <section id="works" className="relative bg-ink text-on-jet px-5 py-20">
      <SectionHead
        index="06 / WORKS"
        en="SELECTED WORKS"
        jp="制作実績アーカイブ"
      />

      <div className="mt-12 grid grid-cols-2 gap-3">
        {WORKS.map((w, i) => (
          <Reveal
            key={w.name}
            delay={(i % 2) * 80}
            className={w.span === 2 ? "col-span-2" : ""}
          >
            <Tile w={w} index={i} />
          </Reveal>
        ))}
      </div>

      <a
        href="#contact"
        className="mt-10 group flex items-center justify-between border-y py-4 font-mono text-[11px] tracking-[0.32em] text-on-jet transition hover:text-madder"
        style={{ borderColor: "var(--color-line-soft)" }}
      >
        あなたのチームを次の WORK に
        <span aria-hidden className="transition group-hover:translate-x-1">
          →
        </span>
      </a>
    </section>
  );
}

function Tile({
  w,
  index,
}: {
  w: (typeof WORKS)[number];
  index: number;
}) {
  const tone = TONES[w.tone];
  const wide = w.span === 2;
  return (
    <article
      className="group card-lift overflow-hidden bg-jet-2 hover:bg-jet"
      style={{ border: "1px solid var(--color-line-soft)" }}
    >
      <div
        className={`relative overflow-hidden ${tone.bg} ${wide ? "aspect-[2.2/1]" : "aspect-square"}`}
      >
        <div className="absolute inset-0 hatch opacity-25" aria-hidden />
        <div
          aria-hidden
          className="absolute inset-0 slow-pan"
          style={{
            background: `radial-gradient(60% 60% at 70% 25%, ${tone.glow}, transparent 60%)`,
          }}
        />

        {/* Top labels */}
        <div className="absolute inset-x-2.5 top-2.5 flex items-start justify-between font-mono text-[9px] tracking-[0.32em] text-paper/75">
          <span>{w.no}</span>
          <span>YR.{w.yr}</span>
        </div>

        {/* Outlined index */}
        <span
          aria-hidden
          className="absolute right-2.5 bottom-2.5 text-stencil text-[28px] leading-none"
          style={{
            WebkitTextStroke: "1px rgba(243,239,230,0.6)",
            color: "transparent",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Brand mark big */}
        <div className={`flex h-full items-end p-3 ${wide ? "pb-4" : ""}`}>
          <span
            className={`text-stencil leading-[0.88] text-paper ${
              wide ? "text-[64px]" : "text-[40px]"
            }`}
          >
            {w.name.split(" ")[0]}
          </span>
        </div>

        {/* Diamond corner */}
        <span
          aria-hidden
          className="absolute right-2.5 top-7 size-1.5 rotate-45 bg-paper/70"
        />
      </div>

      <div className="px-3 pb-3 pt-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-jp text-[14px] font-bold leading-tight text-on-jet">
            {w.name}
          </h3>
          <span
            aria-hidden
            className="font-mono text-[12px] text-on-jet/55 transition group-hover:translate-x-0.5 group-hover:text-madder"
          >
            ↗
          </span>
        </div>
        <p className="mt-1 font-mono text-[9px] tracking-[0.28em] text-on-jet/45">
          {w.sport} · {w.place} · YR.{w.yr}
        </p>
      </div>
    </article>
  );
}
