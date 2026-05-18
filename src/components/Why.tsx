import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const REASONS = [
  {
    n: "01",
    title: "サッカー／フットサル／ソサイチ対応",
    body:
      "ワンデー大会から公式戦仕様まで。トレーニングウェア、ビブス、GKモデルも一気通貫で。",
  },
  {
    n: "02",
    title: "完全フルオーダー × 昇華プリント",
    body:
      "型・配色・ロゴ・ナンバー・ネーム、すべて自由設計。激しいプレーでも色落ち・ひび割れに強い昇華仕様。",
  },
  {
    n: "03",
    title: "5枚から、追加は1枚〜",
    body:
      "新規発注は5枚から。途中加入のメンバーには1枚から追加対応。チームの成長に合わせて伸ばせます。",
  },
  {
    n: "04",
    title: "デザイナーと直接話せる",
    body:
      "中間業者なしの福岡直営制作。「カッコよくして」だけでもOK、叩き台から一緒に詰めていきます。",
  },
  {
    n: "05",
    title: "1ヶ月の不具合保証",
    body:
      "通常使用での不具合は到着から1ヶ月以内なら無償交換。試合でも練習でも、ガチで使い倒せる安心。",
  },
  {
    n: "06",
    title: "LINEで完結する見積〜入稿",
    body:
      "デザイン相談・サイズ確認・入稿チェックまで、スマホひとつでスムーズに。電話・FAXも対応。",
  },
];

export function Why() {
  return (
    <section id="why" className="relative bg-ink text-on-jet px-5 py-20">
      <SectionHead
        index="01 / WHY"
        en="WHY DCT"
        jp="選ばれる、6つの理由"
      />

      <ol
        className="mt-12 divide-y border-y"
        style={{ borderColor: "var(--color-line-soft)" }}
      >
        {REASONS.map((r, i) => (
          <Reveal as="li" key={r.n} delay={i * 40} className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 py-7 border-b" >
            <span className="text-stencil text-[56px] leading-none text-on-jet/12 tabular-nums">
              {r.n}
            </span>
            <div>
              <h3 className="font-jp text-[18px] font-bold leading-snug text-on-jet">
                {r.title}
              </h3>
              <p className="mt-3 font-jp text-[12.5px] leading-[1.95] text-on-jet/65">
                {r.body}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
