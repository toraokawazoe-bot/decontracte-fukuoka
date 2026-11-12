"use client";

import { useState } from "react";
import { SectionBg } from "./motion/SectionBg";

const ORDERING = [
  {
    no: "01",
    title: "昇華ユニフォーム",
    en: "JERSEY",
    qty: "5 枚〜",
    addon: "1 枚〜",
    note: "シャツ＋パンツ 2 点セット。ソックスは別。",
  },
  {
    no: "02",
    title: "昇華ビブス",
    en: "BIBS",
    qty: "5 枚〜",
    addon: "1 枚〜",
    note: "シングル／リバーシブル選択可。",
  },
  {
    no: "03",
    title: "オリジナルソックス",
    en: "SOCKS",
    qty: "5 足〜",
    addon: "5 足〜",
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
    <section id="price" className="stack-section relative overflow-hidden bg-white text-[var(--color-ink)]">
      <SectionBg word="PRICING" rotate="right" />
      <div className="container-x relative z-10 py-28 lg:py-48">
        <header className="border-b border-[var(--color-ink)] pb-6 lg:pb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-[var(--color-ink-dim)]">
            04 / PRICE
          </p>
          <h2
            className="v-mask mt-5 font-display leading-[1.02]"
            style={{
              fontStyle: "italic",
              fontWeight: 500,
              letterSpacing: "-0.005em",
              fontSize: "clamp(44px, 7vw, 124px)",
            }}
          >
            Pricing.
          </h2>
          <p className="font-jp-serif mt-5 text-[16px] font-medium leading-[1.7] lg:text-[19px]">
            料金。
          </p>
          <p className="mt-4 max-w-2xl font-jp text-[13px] font-medium leading-[1.95] text-[var(--color-ink-dim)] lg:text-[14px]">
            金額はチーム規模と仕様で決まる。見積もりは無料、お気軽に。
          </p>
        </header>

        <ol className="border-b border-[var(--color-ink)]">
          {ORDERING.map((o) => (
            <li
              key={o.no}
              className="v-rise grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-[var(--color-ink)] py-10 md:grid-cols-[auto_1fr_auto_auto] md:gap-10 lg:py-14"
            >
              <span
                className="font-sans font-bold leading-none tracking-[-0.025em]"
                style={{ fontSize: "clamp(40px, 4.5vw, 72px)" }}
              >
                {o.no}
              </span>
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-jp text-[18px] font-bold leading-tight lg:text-[22px]">
                    {o.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.42em] text-[var(--color-ink-mute)]">
                    {o.en}
                  </span>
                </div>
                <p className="mt-3 font-jp text-[13px] font-medium leading-[1.85] text-[var(--color-ink-dim)] lg:text-[14px]">
                  {o.note}
                </p>
              </div>
              <PriceCell label="初回" value={o.qty} />
              <PriceCell label="追加" value={o.addon} dim />
            </li>
          ))}
        </ol>

        <div className="mt-16 lg:mt-24">
          <button
            type="button"
            onClick={() => setOpenOpts((v) => !v)}
            className="flex w-full items-center justify-between border-y-2 border-[var(--color-ink)] py-6 font-jp text-[15px] font-bold tracking-[0.04em] transition hover:opacity-70"
            aria-expanded={openOpts}
          >
            <span className="flex items-baseline gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-[var(--color-ink-mute)]">
                + OPT
              </span>
              <span>オプション・送料</span>
            </span>
            <span
              aria-hidden
              className={`inline-block font-mono text-[18px] transition-transform duration-300 ${
                openOpts ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out ${
              openOpts ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0">
              <ul>
                {OPTIONS.map((o) => (
                  <li
                    key={o.name}
                    className="flex items-center justify-between gap-4 border-b border-[var(--color-ink)] py-5"
                  >
                    <span className="font-jp text-[15px] font-medium">{o.name}</span>
                    <span className="font-sans text-[22px] font-black tabular-nums lg:text-[26px]">
                      {o.price}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="mt-8 space-y-2 font-jp text-[12px] font-medium leading-[1.9] text-[var(--color-ink-dim)] lg:text-[13px]">
                <li>※ オプションは税抜、送料は税込。</li>
                <li>※ 納期はご注文確定後、約 4〜5 週間。</li>
                <li>※ ロゴデータは Ai 形式が必要。お持ちでない場合はデータ作成料 11,000 円／1 データ。</li>
              </ul>
            </div>
          </div>
        </div>

        <a
          href="#contact"
          className="group mt-16 inline-flex items-center justify-between gap-6 border-2 border-[var(--color-ink)] bg-[var(--color-ink)] px-8 py-5 font-jp text-[14px] font-bold tracking-[0.04em] text-white transition hover:bg-white hover:text-[var(--color-ink)] lg:mt-24"
        >
          <span>見積もりを依頼する</span>
          <span aria-hidden className="transition group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}

function PriceCell({ label, value, dim }: { label: string; value: string; dim?: boolean }) {
  return (
    <div className={`flex flex-col items-start gap-1 md:items-end ${dim ? "opacity-70" : ""}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.42em] text-[var(--color-ink-mute)]">
        {label}
      </span>
      <span className="font-sans text-[22px] font-bold tabular-nums tracking-[-0.02em] lg:text-[28px]">
        {value}
      </span>
    </div>
  );
}
