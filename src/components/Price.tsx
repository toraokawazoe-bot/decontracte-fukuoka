"use client";

import { useState } from "react";
import { Magnetic } from "./motion/Magnetic";
import { Reveal } from "./Reveal";

const PLANS = [
  {
    code: "DCT.01",
    tag: "FULL ORDER",
    jp: "フルオーダー",
    en: "FULL ORDER",
    desc: "型・配色・ロゴ・ナンバー全部自由設計のフルカスタム。",
    qty: "5 PCS〜",
    price: 9800,
    unit: "/ SET",
    note: "税抜・シャツ＋パンツ",
    features: [
      "完全フルオーダー（型・配色・素材）",
      "ロゴ／ネーム／ナンバー込み",
      "デザインデータ作成 込み",
      "サンプル無料制作",
    ],
    cta: "見積もりを依頼",
    accent: "madder" as const,
  },
  {
    code: "DCT.02",
    tag: "SEMI ORDER",
    jp: "セミオーダー",
    en: "SEMI ORDER",
    desc: "テンプレ型ベースで配色とロゴだけ自由。スピード重視。",
    qty: "5 PCS〜",
    price: 6800,
    unit: "/ SET",
    note: "税抜・既存テンプレ使用",
    features: [
      "用意した型から選択",
      "配色・ロゴ・ナンバー込み",
      "短納期で済む（約3週間）",
      "サンプル無料制作",
    ],
    cta: "セミオーダーで作る",
    accent: "hazard" as const,
  },
];

const OPTIONS = [
  { name: "GK パッド（シャツ／パンツ各）", price: "+¥1,500" },
  { name: "リブ衿", price: "+¥2,000" },
  { name: "長袖変更", price: "+¥1,100" },
  { name: "Ai 以外のロゴデータ", price: "+¥11,000" },
  { name: "オリジナルソックス（5足〜）", price: "別途見積" },
];

const ADDON = {
  code: "DCT.03",
  jp: "追加 1 枚〜",
  en: "ADD-ON UNIT",
  price: 9800,
  note: "途中加入メンバー向け・初回データ流用",
};

export function Price() {
  const [openOpts, setOpenOpts] = useState(false);

  return (
    <section id="price" className="stack-section relative overflow-hidden surface-paper">
      <div className="container-x section-y">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">/ 02 — PRICE</span>
            <h2 className="mt-6 text-stencil text-[clamp(48px,7vw,108px)] leading-[0.88] text-[var(--color-ink)]">
              PRICE
              <br />
              <span className="text-[var(--color-madder)]">PLAN.</span>
            </h2>
            <p className="mt-7 max-w-md font-jp text-[14px] leading-[1.95] text-[var(--color-ink-dim)]">
              フルオーダー／セミオーダーの 2 プラン。
              <br />
              いずれも税抜・データ作成費込み。
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PLANS.map((p, i) => (
              <Reveal key={p.code} delay={i * 100}>
                <PlanCard plan={p} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Add-on card */}
        <Reveal>
          <div className="mt-12 grid items-center gap-6 border border-[var(--color-line-ink-strong)] bg-[var(--color-paper-pure)] p-7 lg:mt-16 lg:grid-cols-[auto_1fr_auto] lg:gap-12 lg:p-10">
            <div>
              <span className="eyebrow">/ {ADDON.code}</span>
              <h3 className="mt-2 text-stencil text-[28px] leading-tight lg:text-[36px]">
                {ADDON.jp}
              </h3>
              <p className="mt-1 font-mono text-[10px] tracking-[0.32em] text-[var(--color-ink-mute)]">
                {ADDON.en}
              </p>
            </div>
            <p className="font-jp text-[13px] leading-[1.95] text-[var(--color-ink-dim)]">
              {ADDON.note}
            </p>
            <div className="flex items-baseline gap-2 text-[var(--color-ink)]">
              <span className="font-num text-[16px] opacity-60">¥</span>
              <span className="font-num text-[44px] font-black leading-none tracking-tight tabular-nums lg:text-[56px]">
                {ADDON.price.toLocaleString()}
              </span>
              <span className="font-mono text-[10px] tracking-[0.28em] opacity-60">
                / SET〜
              </span>
            </div>
          </div>
        </Reveal>

        {/* Options accordion */}
        <Reveal>
          <div className="mt-14 lg:mt-20">
            <button
              type="button"
              onClick={() => setOpenOpts((v) => !v)}
              className="group flex w-full items-center justify-between border-y border-[var(--color-line-ink-strong)] py-5 font-mono text-[11px] tracking-[0.32em] text-[var(--color-ink)] transition hover:text-[var(--color-madder)]"
              aria-expanded={openOpts}
            >
              <span>/ OPTIONS &amp; NOTES</span>
              <span
                aria-hidden
                className={`inline-block transition-transform duration-500 ${openOpts ? "rotate-180" : ""}`}
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
                      className="flex items-center justify-between gap-4 border-b border-[var(--color-line-ink)] py-4"
                    >
                      <span className="font-jp text-[14px] text-[var(--color-ink)]">{o.name}</span>
                      <span className="font-num text-[14px] tabular-nums text-[var(--color-ink)]">{o.price}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 space-y-2 font-jp text-[11px] leading-[1.9] text-[var(--color-ink-mute)]">
                  <li>※ 表記は税抜価格。最終見積もりはお問い合わせください。</li>
                  <li>※ 新規 5 枚から、追加は 1 枚〜対応します。</li>
                  <li>※ ロゴデータは Ai 形式推奨。それ以外は別途料金。</li>
                  <li>※ 納期は約 4〜5 週間（混雑期は前後します）。</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: (typeof PLANS)[number] }) {
  const isHazard = plan.accent === "hazard";
  return (
    <article
      className={`group card-lift relative overflow-hidden border bg-[var(--color-paper-pure)] ${
        isHazard ? "border-[var(--color-hazard-deep)]" : "border-[var(--color-madder)]"
      }`}
    >
      {/* Colored header */}
      <header
        className={`relative px-7 py-7 ${
          isHazard ? "bg-[var(--color-hazard)] text-[var(--color-ink)]" : "bg-[var(--color-madder)] text-[var(--color-paper-pure)]"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.32em] opacity-80">
            {plan.code}
          </span>
          <span className="font-mono text-[10px] tracking-[0.32em] opacity-80">
            {plan.qty}
          </span>
        </div>
        <h3 className="mt-4 text-stencil text-[32px] leading-[0.9] lg:text-[40px]">
          {plan.jp}
        </h3>
        <p className="mt-1 font-mono text-[10px] tracking-[0.32em] opacity-80">
          / {plan.en}
        </p>
      </header>

      {/* Body */}
      <div className="p-7 lg:p-9">
        <p className="font-jp text-[13px] leading-[1.95] text-[var(--color-ink-dim)]">
          {plan.desc}
        </p>

        {/* Price */}
        <div className="mt-7 flex items-baseline gap-2 text-[var(--color-ink)]">
          <span className="font-num text-[18px] opacity-60">¥</span>
          <span className="font-num text-[56px] font-black leading-none tracking-tight tabular-nums lg:text-[72px]">
            {plan.price.toLocaleString()}
          </span>
          <span className="ml-1 font-mono text-[11px] tracking-[0.28em] text-[var(--color-ink-mute)]">
            {plan.unit}
          </span>
        </div>
        <p className="mt-2 font-mono text-[10px] tracking-[0.28em] text-[var(--color-ink-mute)]">
          {plan.note}
        </p>

        {/* Features */}
        <ul className="mt-7 space-y-3 border-t border-[var(--color-line-ink)] pt-6">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-3 font-jp text-[14px] leading-snug text-[var(--color-ink)]">
              <span
                aria-hidden
                className={`mt-1.5 inline-block size-1.5 shrink-0 rotate-45 ${
                  isHazard ? "bg-[var(--color-hazard-deep)]" : "bg-[var(--color-madder)]"
                }`}
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-8">
          <Magnetic strength={0.18}>
            <a
              href="#contact"
              className={`group/btn flex items-center justify-between px-6 py-5 font-mono text-[11px] tracking-[0.32em] transition ${
                isHazard
                  ? "bg-[var(--color-ink)] text-[var(--color-paper-pure)] hover:bg-[var(--color-hazard-deep)]"
                  : "bg-[var(--color-madder)] text-[var(--color-paper-pure)] hover:bg-[var(--color-madder-deep)]"
              }`}
            >
              <span>{plan.cta}</span>
              <span aria-hidden className="transition group-hover/btn:translate-x-1">→</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </article>
  );
}
