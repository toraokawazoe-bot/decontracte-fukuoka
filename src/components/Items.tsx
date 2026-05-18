import Image from "next/image";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    no: "01",
    title: "昇華ユニフォーム",
    en: "SUBLIMATION JERSEY",
    img: "/img/uniform.png",
    desc:
      "型・配色・ロゴ・ナンバー・ネーム、すべて自由設計の完全フルオーダー。シャツとパンツの 2 点セットで仕立てます。",
    points: ["フィールド／GK 仕様", "短袖・長袖どちらも対応", "初回 5 枚〜、追加 1 枚〜"],
  },
  {
    no: "02",
    title: "昇華ビブス",
    en: "BIBS / SCRIMMAGE",
    img: "/img/bibusu.png",
    desc:
      "ユニフォームと配色をリンクさせた、練習・紅白戦専用のビブス。シングル／リバーシブルから選べます。",
    points: ["シングル／リバーシブル", "ユニフォームと共通デザイン", "初回 5 枚〜、追加 1 枚〜"],
  },
];

export function Items() {
  return (
    <section id="items" className="stack-section relative overflow-hidden surface-ink">
      <div className="container-x section-y">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-stencil text-[clamp(48px,7vw,108px)] leading-[0.88] text-[var(--color-paper-pure)]">
              ITEM
              <br />
              <span className="text-[var(--color-madder-hi)]">LINEUP.</span>
            </h2>
            <p className="max-w-md font-jp text-[15px] font-medium leading-[1.95] text-[var(--color-paper-pure)]/85">
              主力は 2 種。ユニフォームとビブスを同じ配色で揃えれば、練習も試合もチームの空気が一段上がります。
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8">
          {ITEMS.map((it, i) => (
            <Reveal key={it.no} delay={i * 100}>
              <ItemCard item={it} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ItemCard({ item }: { item: (typeof ITEMS)[number] }) {
  return (
    <article className="group card-lift relative h-full overflow-hidden border border-white/10 bg-[var(--color-jet-2)]">
      {/* Image */}
      <div className="relative aspect-[5/4] overflow-hidden bg-white">
        <Image
          src={item.img}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.03] lg:p-10"
        />
        {/* Floating no. */}
        <span
          aria-hidden
          className="text-stencil pointer-events-none absolute right-5 top-4 select-none text-[80px] leading-none text-[var(--color-ink)]/8 lg:text-[120px]"
        >
          {item.no}
        </span>
      </div>

      {/* Body */}
      <div className="p-7 lg:p-9">
        <h3 className="font-jp text-[24px] font-bold leading-tight text-[var(--color-paper-pure)] lg:text-[28px]">
          {item.title}
        </h3>
        <p className="mt-4 font-jp text-[15px] font-medium leading-[1.95] text-[var(--color-paper-pure)]/80">
          {item.desc}
        </p>
        <ul className="mt-6 space-y-2.5">
          {item.points.map((p) => (
            <li key={p} className="flex items-start gap-3 font-jp text-[14px] font-medium text-[var(--color-paper-pure)]">
              <span aria-hidden className="mt-2 inline-block size-1.5 shrink-0 rotate-45 bg-[var(--color-madder-hi)]" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
