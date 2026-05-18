import { SectionHead } from "./SectionHead";

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
    <section id="faq" className="relative bg-jet-2 text-on-jet px-5 py-20">
      <SectionHead
        index="07 / FAQ"
        en="Q & A"
        jp="よくあるご質問"
      />

      <div
        className="mt-12 divide-y border-y"
        style={{ borderColor: "var(--color-line-soft)" }}
      >
        {FAQ.map((f, i) => (
          <details key={f.q} className="group border-b" style={{ borderColor: "var(--color-line-soft)" }}>
            <summary className="flex cursor-pointer list-none items-start gap-4 py-5 [&::-webkit-details-marker]:hidden">
              <span className="mt-1 font-mono text-[10px] tracking-[0.32em] text-madder tabular-nums">
                Q.{String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-jp text-[15px] font-bold leading-snug text-on-jet">
                {f.q}
              </span>
              <span
                aria-hidden
                className="mt-1 inline-flex size-6 shrink-0 items-center justify-center font-mono text-[14px] text-on-jet transition group-open:rotate-45 group-open:border-madder group-open:text-madder"
                style={{ border: "1px solid var(--color-on-jet)" }}
              >
                +
              </span>
            </summary>
            <p className="pb-6 pl-[78px] pr-10 font-jp text-[13px] leading-[1.95] text-on-jet/70">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
