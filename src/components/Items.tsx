import Image from "next/image";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    no: "01",
    title: "昇華ユニフォーム",
    img: "/img/uniform.png",
    desc: "シャツ + パンツの 2 点セット。型・配色・ロゴ・ナンバー、すべて自由設計。",
    points: ["フィールド／GK 仕様", "短袖／長袖 対応", "初回 5 枚〜・追加 1 枚〜"],
  },
  {
    no: "02",
    title: "昇華ビブス",
    img: "/img/bibusu.png",
    desc: "ユニフォームと配色をリンクさせる、練習・紅白戦専用のビブス。",
    points: ["シングル／リバーシブル", "ユニフォームと共通デザイン", "初回 5 枚〜・追加 1 枚〜"],
  },
];

export function Items() {
  return (
    <section id="items" className="stack-section relative overflow-hidden surface-ink">
      <div className="container-x section-y">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-jp text-[12px] font-bold tracking-[0.32em] text-[var(--color-madder-hi)]">
                ITEM
              </p>
              <h2
                className="mt-3 font-jp font-black leading-[1.1] tracking-[-0.01em] text-[var(--color-paper-pure)]"
                style={{ fontSize: "clamp(40px, 5.5vw, 84px)" }}
              >
                アイテム。
              </h2>
            </div>
            <p className="max-w-md font-jp text-[15px] font-medium leading-[1.9] text-[var(--color-paper-pure)]/85">
              主力は 2 種。ユニフォームとビブスを同じ配色で揃えれば、チームの空気はもう一段上がる。
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
    <article className="group card-lift relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[var(--color-jet-2)] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-white">
        <Image
          src={item.img}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.03] lg:p-8"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-3 select-none font-jp text-[72px] font-black leading-none text-[var(--color-ink)]/8 lg:text-[100px]"
        >
          {item.no}
        </span>
      </div>

      <div className="p-6 lg:p-7">
        <h3 className="font-jp text-[22px] font-bold leading-tight text-[var(--color-paper-pure)] lg:text-[26px]">
          {item.title}
        </h3>
        <p className="mt-3 font-jp text-[14px] font-medium leading-[1.85] text-[var(--color-paper-pure)]/80">
          {item.desc}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {item.points.map((p) => (
            <li key={p} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-jp text-[11px] font-bold tracking-[0.04em] text-[var(--color-paper-pure)]">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
