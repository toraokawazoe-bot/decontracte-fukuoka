import Image from "next/image";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "お見積もり依頼",
    body: "オーダーフォーム／LINE から、希望枚数や使用シーンを共有いただきます。",
    img: "/img/flow01.jpg",
  },
  {
    n: "02",
    title: "お打ち合わせ",
    body: "デザイナーがイメージ図を作成。配色・モチーフをすり合わせます。",
    img: "/img/flow02.jpg",
  },
  {
    n: "03",
    title: "デザイン確認",
    body: "メール／LINE で何度でも修正対応。納得のいくところまで詰めます。",
    img: "/img/flow03.jpg",
  },
  {
    n: "04",
    title: "詳細確認",
    body: "プレイヤー名・背番号・サイズ・枚数の最終チェック。",
    img: "/img/flow04.jpg",
  },
  {
    n: "05",
    title: "ご入金",
    body: "銀行振込にてお支払い。確認できしだい生産を開始します。",
    img: "/img/flow05.jpg",
  },
  {
    n: "06",
    title: "納品",
    body: "発注から約 4〜5 週間で発送。チームのもとに新しい一着が届きます。",
    img: "/img/flow06.jpg",
  },
];

export function OrderFlow() {
  return (
    <section id="flow" className="stack-section relative overflow-hidden surface-ink">
      <div className="container-x section-y relative">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-stencil text-[clamp(48px,7vw,108px)] leading-[0.88] text-[var(--color-paper-pure)]">
              ORDER
              <br />
              <span className="text-[var(--color-madder-hi)]">FLOW.</span>
            </h2>
            <p className="max-w-md font-jp text-[15px] font-medium leading-[1.95] text-[var(--color-paper-pure)]/85">
              依頼から納品まで、約 4〜5 週間。迷ったらまずステップ 01 から、気軽にどうぞ。
            </p>
          </div>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-7">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 70}>
              <StepCard step={s} />
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <a
            href="#contact"
            className="mt-14 group flex items-center justify-between border-2 border-[var(--color-paper-pure)] px-7 py-5 font-jp text-[15px] font-bold tracking-[0.06em] text-[var(--color-paper-pure)] transition hover:bg-[var(--color-paper-pure)] hover:text-[var(--color-ink)] lg:mt-20"
          >
            まずはステップ 01 から始める
            <span aria-hidden className="transition group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <article className="group card-lift relative h-full overflow-hidden border border-white/10 bg-[var(--color-jet-2)]">
      {/* Photo */}
      <div className="relative aspect-[5/3] overflow-hidden">
        <Image
          src={step.img}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(13,10,8,0.3) 0%, rgba(13,10,8,0.85) 100%)",
          }}
        />
        <span className="text-stencil absolute bottom-3 left-5 text-[64px] leading-none text-[var(--color-paper-pure)] lg:text-[80px]">
          {step.n}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 lg:p-7">
        <h3 className="font-jp text-[20px] font-bold leading-tight text-[var(--color-paper-pure)] lg:text-[22px]">
          {step.title}
        </h3>
        <p className="mt-3 font-jp text-[14px] font-medium leading-[1.95] text-[var(--color-paper-pure)]/80">
          {step.body}
        </p>
      </div>
    </article>
  );
}
