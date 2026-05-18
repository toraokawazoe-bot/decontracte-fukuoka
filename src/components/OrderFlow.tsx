import Image from "next/image";
import { Reveal } from "./Reveal";

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
    <section id="flow" className="stack-section relative overflow-hidden surface-ink">
      <div className="container-x section-y relative">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-jp text-[12px] font-bold tracking-[0.32em] text-[var(--color-madder-hi)]">
                FLOW
              </p>
              <h2
                className="mt-3 font-jp font-black leading-[1.1] tracking-[-0.01em] text-[var(--color-paper-pure)]"
                style={{ fontSize: "clamp(40px, 5.5vw, 84px)" }}
              >
                注文の流れ。
              </h2>
            </div>
            <p className="max-w-md font-jp text-[15px] font-medium leading-[1.9] text-[var(--color-paper-pure)]/85">
              依頼から納品まで約 4〜5 週間。まずはステップ 01 から。
            </p>
          </div>
        </Reveal>

        <ol className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 60}>
              <StepCard step={s} />
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <a
            href="#contact"
            className="mt-8 group flex items-center justify-between rounded-2xl border-2 border-[var(--color-paper-pure)] px-7 py-4 font-jp text-[15px] font-bold tracking-[0.06em] text-[var(--color-paper-pure)] transition hover:bg-[var(--color-paper-pure)] hover:text-[var(--color-ink)] lg:mt-10"
          >
            ステップ 01 から始める
            <span aria-hidden className="transition group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <article className="group card-lift relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[var(--color-jet-2)] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
      <div className="relative aspect-[16/9] overflow-hidden">
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
            background: "linear-gradient(180deg, rgba(13,10,8,0.20) 0%, rgba(13,10,8,0.78) 100%)",
          }}
        />
        <span className="absolute bottom-2 left-4 font-jp text-[40px] font-black leading-none text-[var(--color-paper-pure)] lg:text-[48px]">
          {step.n}
        </span>
      </div>

      <div className="p-5 lg:p-6">
        <h3 className="font-jp text-[17px] font-bold leading-tight text-[var(--color-paper-pure)] lg:text-[19px]">
          {step.title}
        </h3>
        <p className="mt-2 font-jp text-[13px] font-medium leading-[1.75] text-[var(--color-paper-pure)]/80">
          {step.body}
        </p>
      </div>
    </article>
  );
}
