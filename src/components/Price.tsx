"use client";

import { useState } from "react";
import { Magnetic } from "./motion/Magnetic";
import { Reveal } from "./Reveal";

const ORDERING = [
  {
    no: "01",
    title: "昇華ユニフォーム",
    en: "JERSEY",
    qty: ["初回", "5 枚〜"],
    addon: ["追加", "1 枚〜"],
    note: "シャツ＋パンツ 2 点セット。ソックスは別注文。",
  },
  {
    no: "02",
    title: "昇華ビブス",
    en: "BIBS",
    qty: ["初回", "5 枚〜"],
    addon: ["追加", "1 枚〜"],
    note: "シングル／リバーシブル選択可。",
  },
  {
    no: "03",
    title: "オリジナルソックス",
    en: "SOCKS",
    qty: ["初回", "5 足〜"],
    addon: ["追加", "5 足〜"],
    note: "上下セットには含まれません。",
  },
];

const OPTIONS = [
  { name: "GK 用パッド（シャツ）", price: "¥1,500" },
  { name: "GK 用パッド（パンツ）", price: "¥1,500" },
  { name: "リブレット衿", price: "¥2,000" },
  { name: "送料（全国一律）", price: "¥880" },
];

export function Price() {
  const [openOpts, setOpenOpts] = useState(false);

  return (
    <section id="price" className="stack-section relative overflow-hidden surface-paper">
      <div className="container-x section-y">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <h2 className="text-stencil text-[clamp(48px,7vw,108px)] leading-[0.88] text-[var(--color-ink)]">
                PRICE
                <br />
                <span className="text-[var(--color-madder)]">PLAN.</span>
              </h2>
              <p className="mt-7 max-w-md font-jp text-[15px] font-medium leading-[1.95] text-[var(--color-ink)]">
                金額はチーム規模・仕様により異なります。お見積もりは無料です。
                <br />
                LINE またはフォームから、お気軽にお問い合わせください。
              </p>
              <Magnetic strength={0.18}>
                <a
                  href="#contact"
                  className="group mt-8 inline-flex items-center gap-3 bg-[var(--color-ink)] px-7 py-5 font-jp text-[14px] font-bold tracking-[0.08em] text-[var(--color-paper-pure)] transition hover:bg-[var(--color-madder)]"
                >
                  無料で見積もる
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </a>
              </Magnetic>
            </div>

            {/* Ordering structure */}
            <div className="grid grid-cols-1 gap-4 lg:gap-5">
              {ORDERING.map((o) => (
                <article
                  key={o.no}
                  className="group card-lift card-lift-shadow border border-[var(--color-line-ink-strong)] bg-[var(--color-paper-pure)] p-7 lg:p-8"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="text-stencil text-[44px] leading-none text-[var(--color-madder)] lg:text-[56px]">
                        {o.no}
                      </span>
                      <h3 className="mt-3 font-jp text-[22px] font-bold leading-tight text-[var(--color-ink)] lg:text-[26px]">
                        {o.title}
                      </h3>
                      <p className="mt-3 font-jp text-[14px] font-medium leading-[1.85] text-[var(--color-ink-dim)]">
                        {o.note}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-4 text-right">
                      <QtyPill label={o.qty[0]} value={o.qty[1]} primary />
                      <QtyPill label={o.addon[0]} value={o.addon[1]} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Options accordion */}
        <Reveal>
          <div className="mt-16 lg:mt-24">
            <button
              type="button"
              onClick={() => setOpenOpts((v) => !v)}
              className="group flex w-full items-center justify-between border-y-2 border-[var(--color-ink)] py-6 font-jp text-[15px] font-bold tracking-[0.06em] text-[var(--color-ink)] transition hover:text-[var(--color-madder)]"
              aria-expanded={openOpts}
            >
              <span>オプション・送料</span>
              <span
                aria-hidden
                className={`inline-block text-[18px] transition-transform duration-500 ${openOpts ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out ${
                openOpts ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <ul>
                  {OPTIONS.map((o) => (
                    <li
                      key={o.name}
                      className="flex items-center justify-between gap-4 border-b border-[var(--color-line-ink-strong)] py-5"
                    >
                      <span className="font-jp text-[15px] font-medium text-[var(--color-ink)]">{o.name}</span>
                      <span className="price-slab text-[22px] tabular-nums text-[var(--color-ink)] lg:text-[26px]">{o.price}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 space-y-2 font-jp text-[13px] font-medium leading-[1.9] text-[var(--color-ink-dim)]">
                  <li>※ オプションは税抜、送料は税込表記です。</li>
                  <li>※ 納期はご注文確定後、約 4〜5 週間が目安です。</li>
                  <li>※ ロゴデータは Ai 形式推奨。他形式は別途対応料金が発生します。</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function QtyPill({
  label,
  value,
  primary,
}: {
  label: string;
  value: string;
  primary?: boolean;
}) {
  return (
    <div className={`flex items-baseline gap-2 ${primary ? "" : "opacity-80"}`}>
      <span className="font-jp text-[11px] font-bold tracking-[0.18em] text-[var(--color-ink-mute)]">
        {label}
      </span>
      <span className="price-slab text-[28px] tabular-nums text-[var(--color-ink)] lg:text-[36px]">
        {value}
      </span>
    </div>
  );
}
