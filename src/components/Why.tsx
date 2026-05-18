import { Reveal } from "./Reveal";

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
    <section id="why" className="stack-section relative overflow-hidden surface-paper-pure">
      <div className="container-x section-y">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <Reveal>
            <div className="sticky top-32">
              <p className="font-jp text-[12px] font-bold tracking-[0.32em] text-[var(--color-madder)]">
                WHY
              </p>
              <h2
                className="mt-3 font-jp font-black leading-[1.1] tracking-[-0.01em] text-[var(--color-ink)]"
                style={{ fontSize: "clamp(40px, 5.5vw, 84px)" }}
              >
                選ばれる、
                <br />
                <span className="text-[var(--color-madder)]">6 つの</span>理由。
              </h2>
              <p className="mt-7 max-w-md font-jp text-[15px] font-medium leading-[1.9] text-[var(--color-ink)]">
                チームウェアは &ldquo;道具&rdquo; じゃない。チームそのものだ。
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
      <span
        aria-hidden
        className="pointer-events-none absolute -right-3 -top-7 select-none font-jp text-[140px] font-black leading-[0.8] text-[var(--color-paper-2)] lg:text-[180px]"
      >
        {r.n}
      </span>

      <span className="relative font-jp text-[36px] font-black leading-none text-[var(--color-madder)] lg:text-[44px]">
        {r.n}
      </span>

      <h3 className="relative mt-6 font-jp text-[20px] font-bold leading-snug text-[var(--color-ink)] lg:text-[22px]">
        {r.title}
      </h3>
      <p className="relative mt-3 font-jp text-[14px] font-medium leading-[1.9] text-[var(--color-ink)]">
        {r.body}
      </p>
    </article>
  );
}
