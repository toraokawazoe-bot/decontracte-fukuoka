import { Reveal } from "./Reveal";

const FAQ = [
  {
    q: "最低注文数は？",
    a: "新規は 5枚から、追加は 1枚〜対応します。途中加入のメンバー分だけ追加で頼めるのが強みです。",
  },
  {
    q: "デザインを丸投げしてもいい？",
    a: "OK です。「カッコよく」「派手めに」など、抽象的なオーダーでも叩き台を作って提案します。",
  },
  {
    q: "プロチームっぽいデザインも作れる？",
    a: "完全コピーは著作権の関係で NG ですが、雰囲気を寄せたオリジナルデザインは制作可能です。",
  },
  {
    q: "ロゴのデータ形式は？",
    a: "Ai 形式を推奨。それ以外（PNG／JPEG 等）の場合は別途 ¥11,000 の追加料金で対応します。",
  },
  {
    q: "支払い方法は？",
    a: "銀行振込のみ対応です。請求書はメール（PDF）または FAX で発行します。領収書は商品同封で発行可能。",
  },
  {
    q: "納期は？",
    a: "ご入金確認後、約 4〜5 週間で発送します。混雑期や追加修正が多い場合は前後することがあります。",
  },
  {
    q: "サイズ間違いや不具合の対応は？",
    a: "到着から 1 ヶ月以内の通常使用での不具合は無償交換。サイズ違いは到着 7 日以内・未使用の場合に対応します。",
  },
  {
    q: "店頭での打ち合わせは可能？",
    a: "事前ご予約で福岡・薬院のオフィスで打ち合わせ可能です。LINE／メールでもスムーズに進められます。",
  },
];

export function Faq() {
  return (
    <section id="faq" className="stack-section relative overflow-hidden surface-paper">
      <div className="container-x section-y">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <span className="eyebrow">/ 07 — Q&amp;A</span>
              <h2 className="mt-6 text-stencil text-[clamp(48px,7vw,108px)] leading-[0.88] text-[var(--color-ink)]">
                Q&amp;A.
              </h2>
              <p className="mt-7 max-w-md font-jp text-[14px] leading-[1.95] text-[var(--color-ink-dim)]">
                ここに無い質問は、お気軽に LINE またはフォームからどうぞ。
                <br />
                1 営業日以内に返信します。
              </p>
              <div className="mt-8 inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.32em] text-[var(--color-ink-mute)]">
                <span className="block h-px w-7 bg-[var(--color-madder)]" aria-hidden />
                {FAQ.length} QUESTIONS
              </div>
            </div>

            <div className="border-t border-[var(--color-line-ink-strong)]">
              {FAQ.map((f, i) => (
                <details
                  key={f.q}
                  className="group border-b border-[var(--color-line-ink-strong)]"
                >
                  <summary className="flex cursor-pointer list-none items-start gap-5 py-6 [&::-webkit-details-marker]:hidden">
                    <span className="mt-1 font-mono text-[10px] tracking-[0.32em] text-[var(--color-madder)] tabular-nums">
                      Q.{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-jp text-[16px] font-bold leading-snug text-[var(--color-ink)] lg:text-[18px]">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className="mt-1 inline-flex size-8 shrink-0 items-center justify-center border border-[var(--color-line-ink-strong)] font-mono text-[16px] text-[var(--color-ink)] transition group-open:rotate-45 group-open:border-[var(--color-madder)] group-open:text-[var(--color-madder)]"
                    >
                      +
                    </span>
                  </summary>
                  <div className="pb-7 pl-[68px] pr-12">
                    <p className="font-jp text-[14px] leading-[1.95] text-[var(--color-ink-dim)]">
                      {f.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
