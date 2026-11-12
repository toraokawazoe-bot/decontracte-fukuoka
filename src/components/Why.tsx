import { SectionBg } from "./motion/SectionBg";

const REASONS = [
  {
    n: "01",
    title: "完全フルオーダー",
    body: "型・配色・ロゴ・ナンバー・ネーム。すべて自由設計。テンプレートはありません。",
  },
  {
    n: "02",
    title: "5 枚から、追加は 1 枚",
    body: "新規 5 枚、追加 1 枚から。途中加入のメンバーぶんだけ伸ばせます。",
  },
  {
    n: "03",
    title: "デザイナーと直接",
    body: "中間業者なし。「カッコよく」だけでも、叩き台から一緒に詰めます。",
  },
  {
    n: "04",
    title: "色落ちしない昇華",
    body: "昇華プリント仕様。激しいプレーでも、何度洗っても、発色は褪せません。",
  },
  {
    n: "05",
    title: "1 ヶ月の不具合保証",
    body: "通常使用での不具合は到着から 1 ヶ月以内、無償交換。",
  },
  {
    n: "06",
    title: "LINE で完結",
    body: "見積もり・デザイン相談・サイズ確認、すべてスマホひとつで。",
  },
];

export function Why() {
  return (
    <section id="why" className="stack-section relative overflow-hidden bg-white text-[var(--color-ink)]">
      <SectionBg word="REASONS" rotate="right" />
      <div className="container-x relative z-10 py-28 lg:py-48">
        <header className="border-b border-[var(--color-ink)] pb-6 lg:pb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-[var(--color-ink-dim)]">
            02 / WHY
          </p>
          <h2
            className="v-mask mt-5 font-display leading-[1.02] text-[var(--color-ink)]"
            style={{
              fontStyle: "italic",
              fontWeight: 500,
              letterSpacing: "-0.005em",
              fontSize: "clamp(44px, 7vw, 124px)",
            }}
          >
            Reasons.
          </h2>
          <p className="font-jp-serif mt-5 text-[16px] font-medium leading-[1.7] text-[var(--color-ink)] lg:text-[19px]">
            選ばれる、6 つの理由。
          </p>
        </header>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <li
              key={r.n}
              className="v-rise flex flex-col gap-6 border-b border-[var(--color-ink)] py-10 pr-8 md:[&:nth-child(2n)]:border-l md:[&:nth-child(2n)]:border-[var(--color-ink)] md:[&:nth-child(2n)]:pl-8 lg:[&:nth-child(3n+2)]:border-l lg:[&:nth-child(3n+3)]:border-l lg:[&:nth-child(3n+2)]:border-[var(--color-ink)] lg:[&:nth-child(3n+3)]:border-[var(--color-ink)] lg:[&:nth-child(3n+2)]:pl-8 lg:[&:nth-child(3n+3)]:pl-8 lg:py-12"
            >
              <span
                className="font-sans font-bold leading-none tracking-[-0.025em] text-[var(--color-ink)]"
                style={{ fontSize: "clamp(40px, 4.5vw, 72px)" }}
              >
                {r.n}
              </span>
              <h3 className="font-jp text-[17px] font-bold leading-snug text-[var(--color-ink)] lg:text-[20px]">
                {r.title}
              </h3>
              <p className="font-jp text-[13px] font-medium leading-[1.9] text-[var(--color-ink-dim)] lg:text-[14px]">
                {r.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
