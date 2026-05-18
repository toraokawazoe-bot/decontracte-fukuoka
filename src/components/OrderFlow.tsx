import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "見積もり依頼",
    en: "INQUIRY",
    body: "LINE またはオーダーフォームから、希望枚数・納期・デザインイメージを送信。1営業日以内に返信します。",
  },
  {
    n: "02",
    title: "ヒアリング",
    en: "HEARING",
    body: "メール／LINE で詳細をヒアリング。チームのコンセプト・推し配色・参考画像を共有してください。",
  },
  {
    n: "03",
    title: "デザイン提案",
    en: "PROPOSAL",
    body: "専属デザイナーがイメージ図を作成。修正を重ねて、納得のいくところまで詰めていきます。",
  },
  {
    n: "04",
    title: "詳細確認",
    en: "REVIEW",
    body: "プレイヤーネーム・ナンバー・サイズなどの最終チェックリストを共有して確定。",
  },
  {
    n: "05",
    title: "ご入金",
    en: "PAYMENT",
    body: "銀行振込にてお支払い。請求書（PDF）もメールで発行します。",
  },
  {
    n: "06",
    title: "納品",
    en: "DELIVERY",
    body: "ご入金確認後、約 4〜5 週間で発送。チームのもとに、新しい一着が届きます。",
  },
];

export function OrderFlow() {
  return (
    <section id="flow" className="stack-section relative overflow-hidden surface-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 50% at 10% 10%, rgba(185,74,53,0.18) 0%, transparent 55%)," +
            "radial-gradient(80% 50% at 90% 90%, rgba(230,184,0,0.10) 0%, transparent 55%)",
        }}
      />

      <div className="container-x section-y relative">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono text-[10px] tracking-[0.32em] text-[var(--color-on-jet-mute)]">
                / 06 — ORDER FLOW
              </span>
              <h2 className="mt-6 text-stencil text-[clamp(48px,7vw,108px)] leading-[0.88] text-[var(--color-on-jet)]">
                ORDER
                <br />
                <span className="text-[var(--color-madder)]">FLOW.</span>
              </h2>
            </div>
            <p className="max-w-md font-jp text-[14px] leading-[1.95] text-[var(--color-on-jet-dim)]">
              ご注文から納品まで、約 4〜5 週間。
              <br />
              迷ったらまず Step 01 から、気軽に投げてください。
            </p>
          </div>
        </Reveal>

        <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 60}>
              <StepCard step={s} last={i === STEPS.length - 1} />
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <a
            href="#contact"
            className="mt-12 group flex items-center justify-between border border-[var(--color-on-jet-quiet)] px-6 py-5 font-mono text-[11px] tracking-[0.32em] text-[var(--color-on-jet)] transition hover:bg-[var(--color-paper-pure)] hover:text-[var(--color-ink)] lg:mt-16"
          >
            まずはステップ 01 から始める
            <span aria-hidden className="transition group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function StepCard({ step, last }: { step: (typeof STEPS)[number]; last: boolean }) {
  return (
    <article
      className="group card-lift relative h-full border bg-[var(--color-jet-2)] p-7 lg:p-9"
      style={{ borderColor: "var(--color-line-soft)" }}
    >
      {/* BG watermark */}
      <span
        aria-hidden
        className="text-stencil pointer-events-none absolute -right-2 -top-6 select-none text-[140px] leading-[0.8] lg:text-[180px]"
        style={{ color: "rgba(245,239,228,0.04)" }}
      >
        {step.n}
      </span>

      <header className="relative flex items-center justify-between">
        <span className="font-num text-[10px] tracking-[0.32em] text-[var(--color-on-jet-mute)]">
          STEP {step.n}
        </span>
        <span className="font-mono text-[9px] tracking-[0.32em] text-[var(--color-on-jet-mute)]">
          / {step.en}
        </span>
      </header>

      <div className="relative mt-6 h-px w-full bg-[var(--color-on-jet-quiet)]" />

      <h3 className="relative mt-6 text-stencil text-[28px] leading-tight text-[var(--color-on-jet)] lg:text-[32px]">
        {step.title}
      </h3>
      <p className="relative mt-3 font-jp text-[13px] leading-[1.95] text-[var(--color-on-jet-dim)]">
        {step.body}
      </p>

      {!last ? (
        <span
          aria-hidden
          className="relative mt-7 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.32em] text-[var(--color-on-jet-mute)]"
        >
          <span className="block h-px w-8 bg-current" />
          NEXT STEP
        </span>
      ) : (
        <span
          aria-hidden
          className="relative mt-7 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.32em] text-[var(--color-madder)]"
        >
          <span className="rec-dot rec-dot-sm" />
          DELIVERED
        </span>
      )}
    </article>
  );
}
