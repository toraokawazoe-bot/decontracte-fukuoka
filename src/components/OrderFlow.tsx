import Image from "next/image";
import { SectionBg } from "./motion/SectionBg";

const STEPS = [
  { n: "01", title: "見積もり依頼",    body: "フォーム／LINE で、枚数と使用シーンを共有。",       img: "/img/flow01.jpg" },
  { n: "02", title: "打ち合わせ",      body: "イメージ図を作成。配色・モチーフをすり合わせ。",   img: "/img/flow02.jpg" },
  { n: "03", title: "デザイン確認",    body: "メール／LINE で何度でも修正。納得まで詰める。",   img: "/img/flow03.jpg" },
  { n: "04", title: "詳細確認",        body: "プレイヤー名・背番号・サイズの最終チェック。",     img: "/img/flow04.jpg" },
  { n: "05", title: "ご入金",          body: "銀行振込。確認後、生産を開始。",                   img: "/img/flow05.jpg" },
  { n: "06", title: "納品",            body: "発注から約 4〜5 週間でお手元に。",                 img: "/img/flow06.jpg" },
];

export function OrderFlow() {
  return (
    <section id="flow" className="stack-section relative overflow-hidden bg-black text-white">
      <SectionBg word="PROCESS" dark rotate="left" />
      <div className="container-x relative z-10 py-28 lg:py-48">
        <header className="border-b border-white/60 pb-6 lg:pb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-white/70">
            04 / FLOW
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
            Process.
          </h2>
          <p className="font-jp-serif mt-5 text-[16px] font-medium leading-[1.7] text-white lg:text-[19px]">
            注文の流れ。
          </p>
          <p className="mt-4 max-w-xl font-jp text-[13px] font-medium leading-[1.95] text-white/65 lg:text-[14px]">
            依頼から納品まで約 4〜5 週間。まずはステップ 01 から。
          </p>
        </header>

        <ol className="border-b border-white">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="v-rise grid grid-cols-1 gap-6 border-t border-white py-10 md:grid-cols-[auto_minmax(0,1fr)_180px] md:items-center md:gap-10 lg:py-14"
            >
              <span
                className="font-sans font-bold leading-none tracking-[-0.025em] text-white"
                style={{ fontSize: "clamp(44px, 5vw, 84px)" }}
              >
                {s.n}
              </span>
              <div>
                <h3 className="font-jp text-[19px] font-bold leading-tight text-white lg:text-[24px]">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xl font-jp text-[13px] font-medium leading-[1.95] text-white/70 lg:text-[14px]">
                  {s.body}
                </p>
              </div>
              <div className="relative hidden aspect-[4/3] w-full overflow-hidden md:block">
                <Image
                  src={s.img}
                  alt=""
                  fill
                  sizes="180px"
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
            </li>
          ))}
        </ol>

        <a
          href="#contact"
          className="group mt-16 inline-flex items-center justify-between gap-6 border-2 border-white bg-white px-8 py-5 font-jp text-[14px] font-bold tracking-[0.04em] text-black transition hover:bg-black hover:text-white lg:mt-24"
        >
          <span>ステップ 01 から始める</span>
          <span aria-hidden className="transition group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
