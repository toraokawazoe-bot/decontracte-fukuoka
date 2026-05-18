"use client";

import { useState } from "react";
import { Magnetic } from "./motion/Magnetic";
import { Reveal } from "./Reveal";

const ORDERING = [
  {
    no: "01",
    title: "昇華ユニフォーム",
    qty: ["初回", "5 枚〜"],
    addon: ["追加", "1 枚〜"],
    note: "シャツ＋パンツ 2 点セット。ソックスは別。",
  },
  {
    no: "02",
    title: "昇華ビブス",
    qty: ["初回", "5 枚〜"],
    addon: ["追加", "1 枚〜"],
    note: "シングル／リバーシブル選択可。",
  },
  {
    no: "03",
    title: "オリジナルソックス",
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
              <p className="font-jp text-[12px] font-bold tracking-[0.32em] text-[var(--color-madder)]">
                PRICE
              </p>
              <h2
                className="mt-3 font-jp font-black leading-[1.1] tracking-[-0.01em] text-[var(--color-ink)]"
                style={{ fontSize: "clamp(40px, 5.5vw, 84px)" }}
              >
                料金。
              </h2>
              <p className="mt-7 max-w-md font-jp text-[15px] font-medium leading-[1.9] text-[var(--color-ink)]">
                金額はチーム規模と仕様で決まる。見積もりは無料、お気軽に。
              </p>
              <Magnetic strength={0.18}>
                <a
                  href="#contact"
                  className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-[var(--color-ink)] px-7 py-5 font-jp text-[14px] font-bold tracking-[0.06em] text-[var(--color-paper-pure)] shadow-[0_18px_36px_-12px_rgba(26,23,20,0.45)] transition hover:bg-[var(--color-madder)]"
                >
                  見積もりを依頼する
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </a>
              </Magnetic>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-5">
              {ORDERING.map((o) => (
                <article
                  key={o.no}
                  className="group card-lift card-lift-shadow rounded-3xl border border-[var(--color-line-ink-strong)] bg-[var(--color-paper-pure)] p-7 lg:p-8"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="font-jp text-[36px] font-black leading-none text-[var(--color-madder)] lg:text-[48px]">
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
                      <span className="font-jp text-[22px] font-black tabular-nums text-[var(--color-ink)] lg:text-[26px]">{o.price}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 space-y-2 font-jp text-[13px] font-medium leading-[1.9] text-[var(--color-ink-dim)]">
                  <li>※ オプションは税抜、送料は税込。</li>
                  <li>※ 納期はご注文確定後、約 4〜5 週間。</li>
                  <li>※ ロゴデータは Ai 形式推奨。他形式は別途料金。</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function QtyPill({ label, value, primary }: { label: string; value: string; primary?: boolean }) {
  return (
    <div className={`flex items-baseline gap-2 ${primary ? "" : "opacity-80"}`}>
      <span className="font-jp text-[11px] font-bold tracking-[0.18em] text-[var(--color-ink-mute)]">
        {label}
      </span>
      <span className="font-jp text-[26px] font-black tabular-nums text-[var(--color-ink)] lg:text-[32px]">
        {value}
      </span>
    </div>
  );
}
