import Image from "next/image";
import { SectionBg } from "./motion/SectionBg";

const ITEMS = [
  {
    no: "01",
    title: "昇華ユニフォーム",
    en: "JERSEY",
    img: "/img/uniform.png",
    desc: "シャツ + パンツの 2 点セット。型・配色・ロゴ・ナンバー、すべて自由設計。",
    points: ["フィールド／GK 仕様", "短袖／長袖 対応", "初回 5 枚〜・追加 1 枚〜"],
  },
  {
    no: "02",
    title: "昇華ビブス",
    en: "BIBS",
    img: "/img/bibusu.png",
    desc: "ユニフォームと配色をリンクさせる、練習・紅白戦専用のビブス。",
    points: ["シングル／リバーシブル", "ユニフォームと共通デザイン", "初回 5 枚〜・追加 1 枚〜"],
  },
];

export function Items() {
  return (
    <section id="items" className="stack-section relative overflow-hidden bg-black text-white">
      <SectionBg word="CATALOG" dark rotate="left" />
      <div className="container-x relative z-10 py-28 lg:py-48">
        <header className="border-b border-white/60 pb-6 lg:pb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-white/70">
            03 / ITEM
          </p>
          <h2
            className="v-mask mt-5 font-display leading-[1.02] text-white"
            style={{
              fontStyle: "italic",
              fontWeight: 500,
              letterSpacing: "-0.005em",
              fontSize: "clamp(44px, 7vw, 124px)",
            }}
          >
            Catalog.
          </h2>
          <p className="font-jp-serif mt-5 text-[16px] font-medium leading-[1.7] text-white lg:text-[19px]">
            アイテム。
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {ITEMS.map((item, i) => (
            <article
              key={item.no}
              className={`v-rise group flex flex-col border-b border-white py-12 lg:py-16 ${
                i === 0 ? "" : "lg:border-l lg:pl-10"
              } ${i === 0 ? "lg:pr-10" : ""}`}
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="font-sans font-bold leading-none tracking-[-0.025em] text-white"
                  style={{ fontSize: "clamp(40px, 4.5vw, 72px)" }}
                >
                  {item.no}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.42em] text-white/55">
                  {item.en}
                </span>
              </div>

              <div className="relative mt-8 aspect-[5/4] w-full overflow-hidden bg-white">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-contain p-8 transition-transform duration-700 group-hover:scale-[1.04] lg:p-12"
                />
              </div>

              <h3 className="mt-8 font-jp text-[19px] font-bold leading-tight text-white lg:text-[22px]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md font-jp text-[13px] font-medium leading-[1.95] text-white/70 lg:text-[14px]">
                {item.desc}
              </p>

              <ul className="mt-6 flex flex-col gap-2">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-white/70"
                  >
                    <span aria-hidden className="text-white">→</span>
                    <span className="font-jp tracking-normal text-white/85">{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
