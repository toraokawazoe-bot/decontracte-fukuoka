import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const ITEMS = [
  {
    code: "ITM/01",
    title: "昇華ユニフォーム",
    letter: "J",
    sub: "SUBLIMATION JERSEY",
    desc:
      "シャツ + パンツのフルセット。フィット重視のレギュラーカット。チームのアイデンティティを一着に。",
    tags: ["SOCCER", "FUTSAL", "SOCIETY"],
    tone: "madder" as const,
  },
  {
    code: "ITM/02",
    title: "GK ユニフォーム",
    letter: "K",
    sub: "GOALKEEPER",
    desc:
      "肘・腰のパッド付き仕様にも対応。プレースタイルに合わせて、長袖／半袖／半パンを選択可。",
    tags: ["+PAD ¥1,500", "L/S", "S/S"],
    tone: "navy" as const,
  },
  {
    code: "ITM/03",
    title: "昇華ビブス",
    letter: "B",
    sub: "BIB / SCRIMMAGE",
    desc:
      "シングル／リバーシブル選択可。練習からスクリメージまで、ユニフォームと完全リンクしたデザインで。",
    tags: ["SINGLE", "REVERSIBLE"],
    tone: "ink" as const,
  },
  {
    code: "ITM/04",
    title: "オリジナルソックス",
    letter: "S",
    sub: "SOCKS",
    desc:
      "5足から、フルカラー昇華で。ロゴ・チーム名・配色をユニフォームと完璧に揃えられます。",
    tags: ["5+ PAIRS", "FULL COLOR"],
    tone: "madder" as const,
  },
];

const TONES = {
  madder: {
    bg: "bg-madder",
    glow: "rgba(255,210,200,0.30)",
  },
  navy: {
    bg: "bg-navy",
    glow: "rgba(180,200,220,0.26)",
  },
  ink: {
    bg: "bg-ink",
    glow: "rgba(255,255,255,0.20)",
  },
};

export function Items() {
  return (
    <section id="items" className="relative bg-ink text-on-jet px-5 py-20">
      <SectionHead
        index="02 / ITEM"
        en="ITEM LINEUP"
        jp="フルカスタムで、ぜんぶ自由に。"
      />

      <div className="mt-12 flex flex-col gap-5">
        {ITEMS.map((it, i) => (
          <Reveal key={it.code} delay={i * 80}>
            <PosterCard item={it} index={i} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PosterCard({
  item,
  index,
  flip,
}: {
  item: (typeof ITEMS)[number];
  index: number;
  flip: boolean;
}) {
  const tone = TONES[item.tone];
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      className="group card-lift overflow-hidden bg-jet-2 hover:bg-jet"
      style={{ border: "1px solid var(--color-line-soft)" }}
    >
      {/* Poster */}
      <div className={`relative aspect-[4/5] overflow-hidden ${tone.bg}`}>
        {/* Background textures */}
        <div className="absolute inset-0 hatch opacity-25" aria-hidden />
        <div
          aria-hidden
          className="absolute inset-0 slow-pan"
          style={{
            background: `radial-gradient(58% 50% at ${flip ? 70 : 30}% 22%, ${tone.glow}, transparent 60%)`,
          }}
        />

        {/* Top hairline */}
        <div className="absolute inset-x-4 top-4 flex items-center justify-between font-mono text-[10px] tracking-[0.32em] text-paper/65">
          <span>{item.code}</span>
          <span className="flex items-center gap-2">
            <span aria-hidden className="block h-px w-6 bg-paper/40" />
            VOL.026
          </span>
        </div>

        {/* Vertical sub caption (right gutter) */}
        <div
          className={`absolute ${flip ? "left-4" : "right-4"} top-14 bottom-14 flex items-end`}
        >
          <span className="vtext font-mono text-[10px] tracking-[0.36em] text-paper/55">
            {item.sub} · {num}
          </span>
        </div>

        {/* Massive drop-letter — sport-tech stencil */}
        <div
          aria-hidden
          className={`pointer-events-none absolute ${flip ? "right-4" : "left-4"} top-10`}
        >
          <span className="text-stencil block text-[220px] leading-[0.78] text-paper/95">
            {item.letter}
          </span>
        </div>

        {/* Outline number echo */}
        <div
          aria-hidden
          className={`pointer-events-none absolute ${flip ? "left-4" : "right-4"} bottom-24`}
        >
          <span
            className="text-stencil text-[88px] leading-none"
            style={{
              WebkitTextStroke: "1px rgba(243,239,230,0.8)",
              color: "transparent",
            }}
          >
            {num}
          </span>
        </div>

        {/* Bottom title block with gradient scrim */}
        <div
          className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-14"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.0) 100%)",
          }}
        >
          <span className="block font-mono text-[10px] tracking-[0.32em] text-paper/70">
            / SUBJECT — {num}
          </span>
          <h3
            className={`mt-2 text-stencil text-[32px] leading-[0.98] text-paper ${flip ? "text-right" : ""}`}
          >
            {item.title}
          </h3>
        </div>

        {/* Tiny diamond top-right */}
        <span
          aria-hidden
          className={`absolute ${flip ? "left-4" : "right-4"} top-12 size-1.5 rotate-45 bg-paper/70`}
        />
      </div>

      {/* Body */}
      <div className="px-5 pt-6 pb-5">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="font-mono text-[10px] tracking-[0.32em] text-on-jet/55">
            / DESC.{num}
          </h4>
          <span
            aria-hidden
            className="font-mono text-base text-on-jet/55 transition group-hover:translate-x-1 group-hover:text-madder"
          >
            →
          </span>
        </div>
        <p className="mt-3 font-jp text-[13px] leading-[1.95] text-on-jet/75">
          {item.desc}
        </p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <li
              key={t}
              className="px-2 py-1 font-mono text-[10px] tracking-[0.2em] text-on-jet/70"
              style={{ border: "1px solid var(--color-line-soft)" }}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
