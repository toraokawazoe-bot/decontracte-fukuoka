import { Reveal } from "./Reveal";

const FAQ = [
  {
    q: "最低何枚から注文できますか？",
    a: "新規ご注文は 5 枚から、追加注文は 1 枚から承ります。途中加入のメンバーぶんだけ追加できるのが強みです。",
  },
  {
    q: "デザインをお任せでも大丈夫？",
    a: "問題ありません。配色のイメージだけでも、専属デザイナーが叩き台を作って提案します。何度でも修正できます。",
  },
  {
    q: "プロチームのデザインに寄せられますか？",
    a: "完全なコピーは著作権の関係でお受けできませんが、雰囲気の近いオリジナルデザインとして制作可能です。",
  },
  {
    q: "ロゴデータの形式は？",
    a: "Adobe Illustrator (Ai) 形式を推奨します。それ以外の場合はデータ作り直しのため別途料金が発生します。",
  },
  {
    q: "支払い方法は？",
    a: "銀行振込のみとなります。請求書はメール (PDF) または FAX で発行可能。捺印対応もできます。",
  },
  {
    q: "納期はどのくらい？",
    a: "ご注文確定・ご入金確認後、約 4〜5 週間で発送します。混雑期は前後しますのでご相談ください。",
  },
  {
    q: "サイズ違いや不具合の対応は？",
    a: "お届けから 1 ヶ月以内の不具合は無償交換します（ソックス・GK 用品を除く）。お客様都合の返品は原則お受けできません。",
  },
  {
    q: "店頭での打ち合わせは？",
    a: "事前ご予約で福岡・薬院のオフィスにて承ります。LINE・メールでもスムーズに進められます。",
  },
  {
    q: "送料はかかりますか？",
    a: "全国一律 880 円（税込）です。離島・遠方も同額です。",
  },
  {
    q: "途中で注文変更はできますか？",
    a: "デザイン確定前であれば自由に変更できます。確定後の変更はデータ再作成料が発生します。",
  },
];

export function Faq() {
  return (
    <section id="faq" className="stack-section relative overflow-hidden surface-paper-pure">
      <div className="container-x section-y">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <h2 className="text-stencil text-[clamp(48px,7vw,108px)] leading-[0.88] text-[var(--color-ink)]">
                Q&amp;A.
              </h2>
              <p className="mt-7 max-w-md font-jp text-[15px] font-medium leading-[1.95] text-[var(--color-ink)]">
                ここに無い質問は、LINE またはフォームからお気軽にどうぞ。
                <br />
                1 営業日以内にお返事します。
              </p>
            </div>

            <div className="border-t-2 border-[var(--color-ink)]">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  className="group border-b border-[var(--color-line-ink-strong)]"
                >
                  <summary className="flex cursor-pointer list-none items-start gap-5 py-6 [&::-webkit-details-marker]:hidden">
                    <span className="flex-1 font-jp text-[17px] font-bold leading-snug text-[var(--color-ink)] lg:text-[19px]">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-ink)] font-mono text-[18px] font-bold text-[var(--color-ink)] transition group-open:rotate-45 group-open:border-[var(--color-madder)] group-open:text-[var(--color-madder)]"
                    >
                      +
                    </span>
                  </summary>
                  <div className="pb-7 pr-12">
                    <p className="font-jp text-[15px] font-medium leading-[1.95] text-[var(--color-ink)]">
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
