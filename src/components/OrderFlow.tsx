import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

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
    <section id="flow" className="relative overflow-hidden bg-jet text-on-jet px-5 py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 10% 10%, rgba(29,42,54,0.55) 0%, transparent 55%)," +
            "radial-gradient(80% 60% at 90% 90%, rgba(185,74,53,0.18) 0%, transparent 55%)",
        }}
      />

      <div className="relative">
        <SectionHead
          index="05 / FLOW"
          en="ORDER FLOW"
          jp="ご注文までの 6 ステップ"
        />

        <ol className="mt-12 relative">
          {/* Spine */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-[14px] top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, var(--color-madder), rgba(243,239,230,0.18))" }}
          />
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 60} className="relative grid grid-cols-[28px_1fr] gap-x-5 pb-8 last:pb-0">
              <span
                className="relative z-10 mt-1.5 flex h-7 w-7 items-center justify-center bg-jet font-mono text-[10px] tracking-[0.18em] text-on-jet tabular-nums"
                style={{ border: "1px solid var(--color-on-jet)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pb-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-stencil text-[24px] leading-tight text-on-jet">
                    {s.title}
                  </h3>
                  <span className="font-mono text-[9px] tracking-[0.32em] text-on-jet/45">
                    / {s.en}
                  </span>
                </div>
                <p className="mt-2 font-jp text-[12.5px] leading-[1.95] text-on-jet/70">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <a
          href="#contact"
          className="mt-6 group flex items-center justify-between border px-5 py-4 font-mono text-[11px] tracking-[0.32em] text-on-jet transition hover:bg-on-jet hover:text-ink"
          style={{ borderColor: "var(--color-on-jet)" }}
        >
          まずはステップ 01 から始める
          <span aria-hidden className="transition group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
