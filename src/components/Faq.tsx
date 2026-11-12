import { SectionBg } from "./motion/SectionBg";

const FAQ = [
  {
    q: "最低何枚から注文できる？",
    a: "新規 5 枚から、追加は 1 枚から。途中加入のメンバーぶんだけ後から足せます。",
  },
  {
    q: "デザインを丸投げしても大丈夫？",
    a: "問題ありません。配色のイメージだけでも、専属デザイナーが叩き台を作って提案します。",
  },
  {
    q: "プロチームに寄せたデザインも可能？",
    a: "完全コピーは著作権の関係でお受けできませんが、雰囲気の近いオリジナルとして制作可能です。",
  },
  {
    q: "ロゴデータの形式は？",
    a: "Adobe Illustrator (Ai) 形式のデータが必要です。お持ちでない場合は、データ作成料（11,000 円／1 データ）で作り直します。",
  },
  {
    q: "ロゴを多く入れると料金は変わる？",
    a: "ロゴなどのマーキング数で金額は変わりません。お手持ちのユニフォームへの追加加工はお受けしていません。",
  },
  {
    q: "支払い方法は？",
    a: "銀行振込のみ。請求書はメール (PDF) または FAX で発行できます。",
  },
  {
    q: "納期は？",
    a: "ご注文確定・ご入金後、約 4〜5 週間で発送します。",
  },
  {
    q: "サイズ違いや不具合は？",
    a: "到着から 1 ヶ月以内の不具合は無償交換（ソックス・GK 用品を除く）。",
  },
  {
    q: "店頭での打ち合わせは？",
    a: "事前ご予約で福岡・薬院のオフィスにて承ります。LINE・メールでも進められます。",
  },
  {
    q: "送料はかかる？",
    a: "全国一律 880 円（税込）。離島・遠方も同額です。",
  },
  {
    q: "途中での変更は？",
    a: "デザイン確定前なら自由に変更できます。確定後はデータ再作成料が発生します。",
  },
];

export function Faq() {
  return (
    <section id="faq" className="stack-section relative overflow-hidden bg-white text-[var(--color-ink)]">
      <SectionBg word="QUESTIONS" rotate="left" />
      <div className="container-x relative z-10 py-28 lg:py-48">
        <header className="border-b border-[var(--color-ink)] pb-6 lg:pb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-[var(--color-ink-dim)]">
            07 / FAQ
          </p>
          <h2
            className="v-mask mt-5 font-display leading-[1.02]"
            style={{
              fontStyle: "italic",
              fontWeight: 500,
              letterSpacing: "-0.005em",
              fontSize: "clamp(44px, 7vw, 124px)",
            }}
          >
            Q &amp; A.
          </h2>
          <p className="font-jp-serif mt-5 text-[16px] font-medium leading-[1.7] lg:text-[19px]">
            よくあるご質問。
          </p>
          <p className="mt-4 max-w-xl font-jp text-[13px] font-medium leading-[1.95] text-[var(--color-ink-dim)] lg:text-[14px]">
            ここに無い質問は、LINE またはフォームから気軽にどうぞ。1 営業日以内に返信します。
          </p>
        </header>

        <div>
          {FAQ.map((f, i) => (
            <details
              key={f.q}
              className="v-rise group border-b border-[var(--color-ink)]"
            >
              <summary className="flex cursor-pointer list-none items-baseline gap-6 py-7 [&::-webkit-details-marker]:hidden lg:py-9">
                <span className="font-mono text-[10px] uppercase tracking-[0.42em] text-[var(--color-ink-mute)]">
                  Q.{String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-jp text-[15px] font-bold leading-snug lg:text-[18px]">
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className="inline-flex size-8 shrink-0 items-center justify-center border border-[var(--color-ink)] font-sans text-[16px] font-medium transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-6 pb-7 lg:pb-9">
                <span className="font-mono text-[10px] uppercase tracking-[0.42em] text-[var(--color-ink-mute)]">
                  A.{String(i + 1).padStart(2, "0")}
                </span>
                <p className="max-w-2xl font-jp text-[13px] font-medium leading-[1.95] text-[var(--color-ink)] lg:text-[15px]">
                  {f.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
