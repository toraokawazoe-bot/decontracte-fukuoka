import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const PATTERNS = [
  {
    code: "DC/01",
    name: "GRADIENT",
    jp: "グラデーション",
    note: "二色のブレンドで奥行きを",
    bg: "linear-gradient(135deg, #b94a35 0%, #1d2a36 100%)",
  },
  {
    code: "DC/02",
    name: "BIPOLAR",
    jp: "コントラスト",
    note: "極端な二色で攻める",
    bg: "linear-gradient(180deg, #111111 0%, #111111 50%, #f3efe6 50%, #f3efe6 100%)",
  },
  {
    code: "DC/03",
    name: "MINIMAL",
    jp: "ミニマル",
    note: "余白で語る大人路線",
    bg: "linear-gradient(180deg, #1d2a36 0%, #1d2a36 18%, #ebe4d5 18%)",
  },
  {
    code: "DC/04",
    name: "TYPO",
    jp: "タイポグラフィ",
    note: "文字組みを主役に",
    bg: "linear-gradient(135deg, #b94a35 0%, #111111 100%)",
  },
  {
    code: "DC/05",
    name: "STRIPED",
    jp: "ストライプ",
    note: "ボーダーで力強さを",
    bg: "repeating-linear-gradient(135deg, #1d2a36 0 18px, #2b3a4a 18px 36px)",
  },
  {
    code: "DC/06",
    name: "SHADED",
    jp: "シェード",
    note: "同系色のレイヤーで質感を",
    bg: "linear-gradient(180deg, #8c331f 0%, #b94a35 60%, #ddd4be 100%)",
  },
];

export function Catalog() {
  return (
    <section id="catalog" className="relative bg-jet-2 text-on-jet px-5 py-20">
      <SectionHead
        index="03 / CATALOG"
        en="DESIGN CATALOG"
        jp="6 つのデザイン方向"
      />

      <p className="mt-8 max-w-md font-jp text-[13px] leading-[1.9] text-on-jet/65">
        「カッコよく」「派手めに」だけでも OK。
        まずは方向性のすり合わせから。叩き台はこちらで用意します。
      </p>

      <div className="mt-10 grid grid-cols-2 gap-3">
        {PATTERNS.map((p, i) => (
          <Reveal key={p.code} delay={(i % 2) * 80}>
            <article
              className="group overflow-hidden bg-jet transition hover:-translate-y-0.5"
              style={{ border: "1px solid var(--color-line-soft)" }}
            >
              <div
                className="relative aspect-square overflow-hidden"
                style={{ background: p.bg }}
              >
                <div className="absolute inset-0 hatch opacity-15" aria-hidden />
                <div
                  aria-hidden
                  className="absolute inset-0 slow-pan"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 70% 25%, rgba(255,255,255,0.18), transparent 60%)",
                  }}
                />
                <span className="absolute left-2.5 top-2.5 font-mono text-[9px] tracking-[0.32em] text-paper/85 mix-blend-difference">
                  {p.code}
                </span>
                <span
                  aria-hidden
                  className="absolute right-2.5 top-2.5 size-1.5 rotate-45 bg-paper/80 mix-blend-difference"
                />
                <div className="flex h-full items-end p-3">
                  <span
                    className="text-stencil text-[30px] leading-[0.9] text-paper"
                    style={{ mixBlendMode: "difference" }}
                  >
                    {p.name}
                  </span>
                </div>
              </div>
              <div className="px-3 pb-3 pt-3">
                <h3 className="font-jp text-[14px] font-bold leading-tight text-on-jet">
                  {p.jp}
                </h3>
                <p className="mt-1 font-mono text-[9px] tracking-[0.28em] text-on-jet/45">
                  {p.note}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <a
        href="#contact"
        className="mt-10 group flex items-center justify-between border-y py-4 font-mono text-[11px] tracking-[0.32em] text-on-jet transition hover:text-madder"
        style={{ borderColor: "var(--color-line-soft)" }}
      >
        この方向で組みたい
        <span aria-hidden className="transition group-hover:translate-x-1">
          →
        </span>
      </a>
    </section>
  );
}
