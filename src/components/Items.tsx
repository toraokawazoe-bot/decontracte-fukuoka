import { Reveal } from "./Reveal";

const ITEMS = [
  {
    code: "ITM/01",
    title: "昇華ユニフォーム",
    en: "SUBLIMATION JERSEY",
    desc:
      "シャツ + パンツのフルセット。フィット重視のレギュラーカット。チームのアイデンティティを一着に。",
    tags: ["SOCCER", "FUTSAL", "SOCIETY"],
    bg: "linear-gradient(135deg, #b94a35 0%, #8c331f 100%)",
    glyph: "J",
  },
  {
    code: "ITM/02",
    title: "GK ユニフォーム",
    en: "GOALKEEPER",
    desc:
      "肘・腰のパッド付き仕様にも対応。プレースタイルに合わせて、長袖／半袖／半パンを選択可。",
    tags: ["+PAD ¥1,500", "L/S", "S/S"],
    bg: "linear-gradient(135deg, #1a1714 0%, #2a241e 100%)",
    glyph: "K",
  },
  {
    code: "ITM/03",
    title: "昇華ビブス",
    en: "BIB / SCRIMMAGE",
    desc:
      "シングル／リバーシブル選択可。練習からスクリメージまで、ユニフォームと完全リンクしたデザインで。",
    tags: ["SINGLE", "REVERSIBLE"],
    bg: "linear-gradient(135deg, #e6b800 0%, #a88600 100%)",
    glyph: "B",
  },
  {
    code: "ITM/04",
    title: "オリジナルソックス",
    en: "SOCKS",
    desc:
      "5足から、フルカラー昇華で。ロゴ・チーム名・配色をユニフォームと完璧に揃えられます。",
    tags: ["5+ PAIRS", "FULL COLOR"],
    bg: "linear-gradient(135deg, #b94a35 0%, #1a1714 100%)",
    glyph: "S",
  },
  {
    code: "ITM/05",
    title: "トレーニングウェア",
    en: "TRAINING",
    desc:
      "薄手のドライ素材で動きやすく。ユニフォームと揃いの配色で、移動・練習も一体感ある仕立てに。",
    tags: ["DRY", "LIGHT"],
    bg: "linear-gradient(135deg, #2a241e 0%, #1a1714 100%)",
    glyph: "T",
  },
];

export function Items() {
  return (
    <section id="items" className="stack-section relative overflow-hidden surface-paper">
      <div className="container-x section-y">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">/ 03 — ITEM LINEUP</span>
              <h2 className="mt-6 text-stencil text-[clamp(48px,7vw,108px)] leading-[0.88] text-[var(--color-ink)]">
                ITEM
                <br />
                <span className="text-[var(--color-madder)]">LINEUP.</span>
              </h2>
            </div>
            <p className="max-w-md font-jp text-[14px] leading-[1.95] text-[var(--color-ink-dim)]">
              ユニフォームを軸に、GKモデル、ビブス、ソックス、トレーニング着まで、競技と練習の全シーンを揃える。
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {ITEMS.map((it, i) => (
            <Reveal
              key={it.code}
              delay={i * 60}
              className={i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
            >
              <ItemCard item={it} feature={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ItemCard({
  item,
  feature,
}: {
  item: (typeof ITEMS)[number];
  feature: boolean;
}) {
  return (
    <article className="group card-lift card-lift-shadow relative h-full overflow-hidden border border-[var(--color-line-ink)] bg-[var(--color-paper-pure)]">
      {/* Poster */}
      <div
        className={`relative overflow-hidden ${feature ? "aspect-[16/12]" : "aspect-[4/5]"}`}
        style={{ background: item.bg }}
      >
        <div className="absolute inset-0 hatch opacity-25" aria-hidden />
        <div
          aria-hidden
          className="absolute inset-0 slow-pan"
          style={{
            background:
              "radial-gradient(58% 50% at 30% 22%, rgba(245,239,228,0.30), transparent 60%)",
          }}
        />

        {/* Top label */}
        <div className="absolute inset-x-5 top-5 flex items-center justify-between font-mono text-[10px] tracking-[0.32em] text-[var(--color-paper-pure)]/85">
          <span>{item.code}</span>
          <span className="flex items-center gap-2">
            <span aria-hidden className="block h-px w-7 bg-[var(--color-paper-pure)]/50" />
            VOL.026
          </span>
        </div>

        {/* Glyph */}
        <div aria-hidden className="pointer-events-none absolute left-5 top-12">
          <span
            className={`text-stencil block leading-[0.78] text-[var(--color-paper-pure)]/95 ${
              feature ? "text-[clamp(180px,22vw,320px)]" : "text-[clamp(140px,18vw,220px)]"
            }`}
          >
            {item.glyph}
          </span>
        </div>

        {/* Bottom title */}
        <div
          className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-16"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)",
          }}
        >
          <span className="block font-mono text-[10px] tracking-[0.32em] text-[var(--color-paper-pure)]/70">
            / {item.en}
          </span>
          <h3
            className={`mt-2 text-stencil leading-[0.95] text-[var(--color-paper-pure)] ${
              feature ? "text-[clamp(32px,4vw,56px)]" : "text-[clamp(24px,3vw,36px)]"
            }`}
          >
            {item.title}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 lg:p-7">
        <p className="font-jp text-[13px] leading-[1.95] text-[var(--color-ink-dim)]">
          {item.desc}
        </p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <li
              key={t}
              className="border border-[var(--color-line-ink-strong)] px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-[var(--color-ink-dim)]"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
