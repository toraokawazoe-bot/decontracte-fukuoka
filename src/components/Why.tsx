import { Reveal } from "./Reveal";

const REASONS = [
  {
    n: "01",
    title: "完全フルオーダー",
    body: "型・配色・ロゴ・ナンバー・ネーム、すべて自由設計。テンプレに縛られず、チームの個性をそのまま形にできます。",
  },
  {
    n: "02",
    title: "5 枚から、追加は 1 枚から",
    body: "新規発注は 5 枚から。途中加入のメンバーには 1 枚から追加対応。チームの成長に合わせて柔軟に伸ばせます。",
  },
  {
    n: "03",
    title: "デザイナーと直接やりとり",
    body: "中間業者を挟まない直営制作。「カッコよくして」だけでも OK。叩き台から一緒に詰めていけます。",
  },
  {
    n: "04",
    title: "昇華プリント仕様",
    body: "色落ち・ひび割れに強い昇華プリントで、激しいプレーにも耐える。何度洗っても発色が褪せません。",
  },
  {
    n: "05",
    title: "1 ヶ月の不具合保証",
    body: "通常使用での不具合は到着から 1 ヶ月以内なら無償交換。試合でも練習でも、ガチで使い倒せます。",
  },
  {
    n: "06",
    title: "LINE で完結",
    body: "デザイン相談からサイズ確認、入稿チェックまで、スマホひとつでスムーズに。電話・FAX も対応します。",
  },
];

export function Why() {
  return (
    <section id="why" className="stack-section relative overflow-hidden surface-paper-pure">
      <div className="container-x section-y">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <Reveal>
            <div className="sticky top-32">
              <h2 className="text-stencil text-[clamp(48px,7vw,108px)] leading-[0.88] text-[var(--color-ink)]">
                WHY
                <br />
                <span className="text-[var(--color-madder)]">CHOOSE</span>
                <br />
                US.
              </h2>
              <p className="mt-7 max-w-md font-jp text-[15px] font-medium leading-[1.95] text-[var(--color-ink)]">
                チームウェアは &ldquo;道具&rdquo; ではなく、チームそのもの。
                <br />
                DÉCONTRACTÉ が選ばれている、6 つの理由。
              </p>
            </div>
          </Reveal>

          <ol className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {REASONS.map((r, i) => (
              <Reveal as="li" key={r.n} delay={i * 60}>
                <ReasonCard r={r} />
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ r }: { r: (typeof REASONS)[number] }) {
  return (
    <article className="group card-lift card-lift-shadow relative h-full overflow-hidden rounded-3xl border border-[var(--color-line-ink-strong)] bg-[var(--color-paper-pure)] p-7 lg:p-9">
      {/* Watermark number */}
      <span
        aria-hidden
        className="text-stencil pointer-events-none absolute -right-3 -top-7 select-none text-[140px] leading-[0.8] text-[var(--color-paper-2)] lg:text-[180px]"
      >
        {r.n}
      </span>

      <span className="text-stencil relative text-[48px] leading-none text-[var(--color-madder)] lg:text-[56px]">
        {r.n}
      </span>

      <h3 className="relative mt-7 font-jp text-[20px] font-bold leading-snug text-[var(--color-ink)] lg:text-[22px]">
        {r.title}
      </h3>
      <p className="relative mt-3 font-jp text-[14px] font-medium leading-[1.95] text-[var(--color-ink)]">
        {r.body}
      </p>
    </article>
  );
}
