import { Reveal } from "./Reveal";

const PATTERNS = [
  {
    code: "DC/01",
    name: "GRADIENT",
    jp: "グラデーション",
    note: "二色のブレンドで奥行きを",
    bg: "linear-gradient(135deg, #b94a35 0%, #1a1714 100%)",
  },
  {
    code: "DC/02",
    name: "BIPOLAR",
    jp: "コントラスト",
    note: "極端な二色で攻める",
    bg: "linear-gradient(180deg, #1a1714 0%, #1a1714 50%, #f5efe4 50%, #f5efe4 100%)",
  },
  {
    code: "DC/03",
    name: "MINIMAL",
    jp: "ミニマル",
    note: "余白で語る大人路線",
    bg: "linear-gradient(180deg, #1a1714 0%, #1a1714 18%, #ece4d3 18%)",
  },
  {
    code: "DC/04",
    name: "TYPO",
    jp: "タイポグラフィ",
    note: "文字組みを主役に",
    bg: "linear-gradient(135deg, #b94a35 0%, #1a1714 100%)",
  },
  {
    code: "DC/05",
    name: "STRIPED",
    jp: "ストライプ",
    note: "ボーダーで力強さを",
    bg: "repeating-linear-gradient(135deg, #1a1714 0 18px, #2a241e 18px 36px)",
  },
  {
    code: "DC/06",
    name: "HAZARD",
    jp: "ハザード",
    note: "斜線で攻撃的に",
    bg: "repeating-linear-gradient(135deg, #e6b800 0 16px, #1a1714 16px 32px)",
  },
  {
    code: "DC/07",
    name: "SHADED",
    jp: "シェード",
    note: "同系色のレイヤーで質感を",
    bg: "linear-gradient(180deg, #8c331f 0%, #b94a35 60%, #ddd2bb 100%)",
  },
  {
    code: "DC/08",
    name: "MONO",
    jp: "モノクロ",
    note: "ロゴで勝負する潔さ",
    bg: "linear-gradient(135deg, #2a241e 0%, #f5efe4 100%)",
  },
];

export function Catalog() {
  return (
    <section id="catalog" className="stack-section relative overflow-hidden surface-paper-pure">
      <div className="container-x section-y">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">/ 04 — DESIGN CATALOG</span>
              <h2 className="mt-6 text-stencil text-[clamp(48px,7vw,108px)] leading-[0.88] text-[var(--color-ink)]">
                DESIGN
                <br />
                <span className="text-[var(--color-madder)]">CATALOG.</span>
              </h2>
            </div>
            <p className="max-w-md font-jp text-[14px] leading-[1.95] text-[var(--color-ink-dim)]">
              「カッコよく」「派手めに」だけでも OK。
              まずは方向性のすり合わせから。叩き台はこちらで用意します。
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {PATTERNS.map((p, i) => (
            <Reveal key={p.code} delay={(i % 4) * 60}>
              <article
                className="group card-lift card-lift-shadow relative overflow-hidden border border-[var(--color-line-ink)] bg-[var(--color-paper-pure)]"
              >
                <div
                  className="relative aspect-[3/4] overflow-hidden"
                  style={{ background: p.bg }}
                >
                  <div className="absolute inset-0 hatch opacity-15" aria-hidden />
                  <div
                    aria-hidden
                    className="absolute inset-0 slow-pan"
                    style={{
                      background:
                        "radial-gradient(60% 60% at 70% 25%, rgba(245,239,228,0.20), transparent 60%)",
                    }}
                  />
                  <span className="absolute left-3 top-3 font-mono text-[9px] tracking-[0.32em] text-[var(--color-paper-pure)]/85 mix-blend-difference">
                    {p.code}
                  </span>
                  <span
                    aria-hidden
                    className="absolute right-3 top-3 size-1.5 rotate-45 bg-[var(--color-paper-pure)]/80 mix-blend-difference"
                  />
                  <div className="flex h-full items-end p-4">
                    <span
                      className="text-stencil leading-[0.9] text-[var(--color-paper-pure)]"
                      style={{ mixBlendMode: "difference", fontSize: "clamp(28px, 3.5vw, 44px)" }}
                    >
                      {p.name}
                    </span>
                  </div>
                </div>
                <div className="px-4 py-4">
                  <h3 className="font-jp text-[14px] font-bold leading-tight text-[var(--color-ink)]">
                    {p.jp}
                  </h3>
                  <p className="mt-1 font-mono text-[9px] tracking-[0.28em] text-[var(--color-ink-mute)]">
                    {p.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a
            href="#contact"
            className="mt-12 group flex items-center justify-between border-y border-[var(--color-line-ink-strong)] py-5 font-mono text-[11px] tracking-[0.32em] text-[var(--color-ink)] transition hover:text-[var(--color-madder)] lg:mt-16"
          >
            この方向で組みたい
            <span aria-hidden className="transition group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
