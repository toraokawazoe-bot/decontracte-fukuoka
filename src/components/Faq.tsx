import { Reveal } from "./Reveal";

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
    a: "Adobe Illustrator (Ai) 形式推奨。他形式の場合はデータ作り直しのため別途料金が発生します。",
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
    <section id="faq" className="stack-section relative overflow-hidden surface-paper-pure">
      <div className="container-x section-y">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <p className="font-jp text-[12px] font-bold tracking-[0.32em] text-[var(--color-madder)]">
                FAQ
              </p>
              <h2
                className="mt-3 font-jp font-black leading-[1.1] tracking-[-0.01em] text-[var(--color-ink)]"
                style={{ fontSize: "clamp(40px, 5.5vw, 84px)" }}
              >
                よくある
                <br />
                ご質問。
              </h2>
              <p className="mt-7 max-w-md font-jp text-[15px] font-medium leading-[1.9] text-[var(--color-ink)]">
                ここに無い質問は、LINE またはフォームから気軽にどうぞ。1 営業日以内に返信します。
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
                    <p className="font-jp text-[15px] font-medium leading-[1.9] text-[var(--color-ink)]">
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
