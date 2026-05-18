import { Reveal } from "./Reveal";

const REASONS = [
  {
    n: "01",
    en: "ALL FORMATS",
    title: "サッカー／フットサル／ソサイチ対応",
    body:
      "ワンデー大会から公式戦仕様まで。トレーニングウェア、ビブス、GKモデルも一気通貫で。",
    icon: "⚽",
  },
  {
    n: "02",
    en: "FULL CUSTOM",
    title: "完全フルオーダー × 昇華プリント",
    body:
      "型・配色・ロゴ・ナンバー・ネーム、すべて自由設計。激しいプレーでも色落ち・ひび割れに強い昇華仕様。",
    icon: "✕",
  },
  {
    n: "03",
    en: "ADD-ONS FROM 1",
    title: "5枚から、追加は1枚〜",
    body:
      "新規発注は5枚から。途中加入のメンバーには1枚から追加対応。チームの成長に合わせて伸ばせます。",
    icon: "+",
  },
  {
    n: "04",
    en: "DIRECT DESIGNER",
    title: "デザイナーと直接話せる",
    body:
      "中間業者なしの福岡直営制作。「カッコよくして」だけでもOK、叩き台から一緒に詰めていきます。",
    icon: "◎",
  },
  {
    n: "05",
    en: "1-MONTH WARRANTY",
    title: "1ヶ月の不具合保証",
    body:
      "通常使用での不具合は到着から1ヶ月以内なら無償交換。試合でも練習でも、ガチで使い倒せる安心。",
    icon: "✓",
  },
  {
    n: "06",
    en: "LINE-CLOSED",
    title: "LINEで完結する見積〜入稿",
    body:
      "デザイン相談・サイズ確認・入稿チェックまで、スマホひとつでスムーズに。電話・FAXも対応。",
    icon: "→",
  },
];

export function Why() {
  return (
    <section
      id="why"
      className="stack-section relative overflow-hidden surface-ink"
    >
      <div className="container-x section-y">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <Reveal>
            <div className="sticky top-32">
              <span className="font-mono text-[10px] tracking-[0.32em] text-[var(--color-on-jet-mute)]">
                / 01 — WHY DCT
              </span>
              <h2 className="mt-6 text-stencil text-[clamp(48px,7vw,108px)] leading-[0.88] text-[var(--color-on-jet)]">
                WHY
                <br />
                <span className="text-[var(--color-madder)]">CHOOSE</span>
                <br />
                US.
              </h2>
              <p className="mt-7 max-w-md font-jp text-[14px] leading-[1.95] text-[var(--color-on-jet-dim)]">
                チームウェアは &ldquo;道具&rdquo; ではなく、チームそのもの。
                <br />
                DÉCONTRACTÉ が選ばれている、6 つの理由。
              </p>
              <div className="mt-8 inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.32em] text-[var(--color-on-jet-mute)]">
                <span className="block h-px w-7 bg-[var(--color-madder)]" aria-hidden />
                6 REASONS
              </div>
            </div>
          </Reveal>

          {/* Reason cards */}
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
    <article
      className="group card-lift relative h-full overflow-hidden border bg-[var(--color-jet-2)] p-7 lg:p-9"
      style={{ borderColor: "var(--color-line-soft)" }}
    >
      {/* Massive bg watermark number */}
      <span
        aria-hidden
        className="text-stencil pointer-events-none absolute -right-3 -top-7 select-none text-[140px] leading-[0.8] lg:text-[180px]"
        style={{ color: "rgba(245,239,228,0.04)" }}
      >
        {r.n}
      </span>

      {/* Watermark icon */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-4 right-5 select-none text-[80px] leading-none opacity-[0.06] lg:text-[100px]"
      >
        {r.icon}
      </span>

      <header className="relative flex items-center justify-between">
        <span className="text-stencil text-[40px] leading-none text-[var(--color-madder)] lg:text-[48px]">
          {r.n}
        </span>
        <span className="font-mono text-[9px] tracking-[0.32em] text-[var(--color-on-jet-mute)]">
          / {r.en}
        </span>
      </header>

      <div className="relative mt-8 h-px w-full bg-[var(--color-on-jet-quiet)]" />

      <h3 className="relative mt-6 font-jp text-[17px] font-bold leading-snug text-[var(--color-on-jet)] lg:text-[19px]">
        {r.title}
      </h3>
      <p className="relative mt-3 font-jp text-[13px] leading-[1.95] text-[var(--color-on-jet-dim)]">
        {r.body}
      </p>

      {/* Hover arrow */}
      <span
        aria-hidden
        className="relative mt-7 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.32em] text-[var(--color-on-jet-mute)] transition group-hover:text-[var(--color-madder)]"
      >
        <span className="block h-px w-8 bg-current transition-all group-hover:w-12" />
        READ MORE
      </span>
    </article>
  );
}
