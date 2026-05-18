"use client";

import { useEffect, useRef, useState } from "react";
import { Odometer } from "./motion/Odometer";
import { MaskReveal } from "./motion/MaskReveal";
import { Magnetic } from "./motion/Magnetic";

const PLANS = [
  {
    code: "DCT.01",
    tag: "BASE",
    jp: "昇華ユニフォーム",
    en: "FULL ORDER",
    qty: "5 PCS / MIN",
    price: "9,800",
    unit: "/ SET",
    note: "税抜・シャツ＋パンツ",
    features: [
      "ロゴ／ネーム／ナンバー込み",
      "デザインデータ作成 込み",
      "完全フルオーダー（型・配色・素材）",
    ],
    cta: "見積もりを依頼する",
  },
  {
    code: "DCT.02",
    tag: "+1",
    jp: "追加オーダー",
    en: "ADD-ON UNIT",
    qty: "1 PC / MIN",
    price: "9,800",
    unit: "/ SET",
    note: "税抜・初回データ流用",
    features: [
      "途中加入メンバーの追加に",
      "シャツのみ／パンツのみも可",
      "デザインデータ保管",
    ],
    cta: "追加で発注する",
    recommended: true,
  },
  {
    code: "DCT.03",
    tag: "BIB",
    jp: "昇華ビブス",
    en: "BIBS",
    qty: "5 PCS / MIN",
    price: "4,800",
    unit: "/ UNIT",
    note: "税抜・シングル仕様",
    features: [
      "シングル／リバーシブル選択",
      "フルカラー昇華・ロゴ込み",
      "練習〜スクリメージまで",
    ],
    cta: "ビブスを見積もる",
  },
];

const OPTIONS = [
  { name: "GK パッド（シャツ／パンツ各）", price: "+¥1,500" },
  { name: "リブ衿", price: "+¥2,000" },
  { name: "Ai 以外のロゴデータ", price: "+¥11,000" },
  { name: "オリジナルソックス（5足〜）", price: "別途見積" },
];

export function Price() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [openOpts, setOpenOpts] = useState(false);

  // Detect current snap target via scroll position
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        const cards = Array.from(el.children) as HTMLElement[];
        const center = el.scrollLeft + el.clientWidth / 2;
        let nearest = 0;
        let best = Infinity;
        cards.forEach((c, i) => {
          const cc = c.offsetLeft + c.clientWidth / 2;
          const d = Math.abs(cc - center);
          if (d < best) {
            best = d;
            nearest = i;
          }
        });
        setActive(nearest);
        raf = 0;
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const c = cards[i];
    if (!c) return;
    el.scrollTo({ left: c.offsetLeft, behavior: "smooth" });
  };

  return (
    <section id="price" className="relative bg-jet text-on-jet">
      {/* Top hazard rule */}
      <div className="hazard-strip-thin h-1 w-full" aria-hidden />

      <div className="px-5 pt-14 pb-5">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.32em] text-on-jet/45">
          <span>/ 04 — PRICE</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="rec-dot rec-dot-sm" />
            FOR PRESENTATION
          </span>
        </div>

        <h2 className="mt-6 text-stencil text-[40px] leading-[0.95] text-on-jet">
          <MaskReveal>PRICE</MaskReveal>
          <br />
          <span className="text-madder">
            <MaskReveal delayMs={120}>PLAN.</MaskReveal>
          </span>
        </h2>

        <p className="mt-4 font-jp text-[13px] leading-[1.85] text-on-jet/70">
          税抜・データ作成費込み。
          <br />
          スワイプで 3 つの料金プランを比較できます。
        </p>

        {/* Frame indicator */}
        <div className="mt-7 flex items-center justify-between font-mono text-[10px] tracking-[0.32em] text-on-jet/45">
          <span className="tabular-nums">
            FRAME {String(active + 1).padStart(2, "0")} / {String(PLANS.length).padStart(2, "0")}
          </span>
          <span className="inline-flex items-center gap-2">
            <button
              type="button"
              aria-label="前のプラン"
              onClick={() => goTo(Math.max(0, active - 1))}
              className="size-7 border border-on-jet/30 transition hover:border-madder hover:text-madder disabled:opacity-30"
              disabled={active === 0}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="次のプラン"
              onClick={() => goTo(Math.min(PLANS.length - 1, active + 1))}
              className="size-7 border border-on-jet/30 transition hover:border-madder hover:text-madder disabled:opacity-30"
              disabled={active === PLANS.length - 1}
            >
              →
            </button>
          </span>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={trackRef}
        className="flex w-full snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {PLANS.map((p, i) => (
          <PlanCard key={p.code} plan={p} index={i} total={PLANS.length} active={i === active} />
        ))}
      </div>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2 px-5">
        {PLANS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`プラン ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-px transition-all ${
              i === active
                ? "w-10 bg-madder shadow-[0_0_12px_rgba(185,74,53,0.85)]"
                : "w-5 bg-on-jet/25"
            }`}
          />
        ))}
      </div>

      {/* Options accordion */}
      <div className="mt-12 px-5">
        <button
          type="button"
          onClick={() => setOpenOpts((v) => !v)}
          className="group flex w-full items-center justify-between border-y py-4 font-mono text-[11px] tracking-[0.32em] text-on-jet transition hover:text-madder"
          style={{ borderColor: "var(--color-line-soft)" }}
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
            <ul className="divide-y" style={{ borderColor: "var(--color-line-soft)" }}>
              {OPTIONS.map((o) => (
                <li
                  key={o.name}
                  className="flex items-center justify-between gap-4 border-b py-4"
                  style={{ borderColor: "var(--color-line-soft)" }}
                >
                  <span className="font-jp text-[13px] text-on-jet/85">{o.name}</span>
                  <span className="font-mono text-[12px] tabular-nums text-on-jet">{o.price}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-5 space-y-2 font-jp text-[11px] leading-[1.9] text-on-jet/55">
              <li>※ 表記は税抜価格。最終見積もりはお問い合わせください。</li>
              <li>※ 新規 5枚から、追加は 1枚〜対応します。</li>
              <li>※ ロゴデータは Ai 形式推奨。それ以外は別途料金。</li>
              <li>※ 納期は約 4〜5 週間（混雑期は前後します）。</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom hazard rule */}
      <div className="mt-14 hazard-strip-thin h-1 w-full" aria-hidden />
    </section>
  );
}

function PlanCard({
  plan,
  index,
  total,
  active,
}: {
  plan: (typeof PLANS)[number];
  index: number;
  total: number;
  active: boolean;
}) {
  const num = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");
  const isReco = !!plan.recommended;

  return (
    <article
      className={`relative w-[88vw] max-w-[480px] shrink-0 snap-center bg-jet-2 transition-all duration-700 ${
        active ? "scale-100 opacity-100" : "scale-[0.96] opacity-60"
      }`}
      style={{
        border: isReco ? "1px solid var(--color-madder)" : "1px solid var(--color-line-soft)",
      }}
    >
      {/* Recommended hazard strip on top */}
      {isReco ? (
        <div className="hazard-strip-thin h-1 w-full" aria-hidden />
      ) : null}

      {/* Top bar */}
      <div
        className="flex items-center justify-between border-b px-4 py-2.5 font-mono text-[10px] tracking-[0.32em] text-on-jet/55"
        style={{ borderColor: "var(--color-line-soft)" }}
      >
        <span className="tabular-nums">
          FRAME {num} / {totalStr}
        </span>
        <span className="inline-flex items-center gap-1.5">
          {isReco ? <span className="rec-dot rec-dot-sm" /> : null}
          {isReco ? "RECOMMENDED" : plan.tag}
        </span>
      </div>

      {/* Conic glow on recommended only */}
      {isReco ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="orbit-conic absolute -inset-[40%] opacity-[0.18]"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgba(185,74,53,0.9) 60deg, transparent 140deg, transparent 360deg)",
            }}
          />
        </div>
      ) : null}

      <div className="relative px-5 pt-7 pb-5">
        {/* Code stripe */}
        <div className="flex items-baseline justify-between font-mono text-[10px] tracking-[0.32em] text-on-jet/55">
          <span>{plan.code}</span>
          <span className="tabular-nums">{plan.qty}</span>
        </div>

        {/* JP title — stencil */}
        <h3 className="mt-4 text-stencil text-[34px] leading-[0.95] text-on-jet">
          {plan.jp}
        </h3>
        <p className="mt-1 font-mono text-[10px] tracking-[0.32em] text-on-jet/55">
          / {plan.en}
        </p>

        {/* Price slab */}
        <div className="mt-8 flex items-baseline gap-2">
          <span className="text-stencil text-[28px] leading-none text-on-jet/60">¥</span>
          <Odometer
            value={plan.price}
            className="text-stencil text-[88px] leading-[0.85] text-on-jet"
            rowHeight="1em"
            perDigitMs={110}
            startDelayMs={200}
          />
          <span className="ml-1 font-mono text-[11px] tracking-[0.28em] text-on-jet/55">
            {plan.unit}
          </span>
        </div>
        <p className="mt-2 font-mono text-[10px] tracking-[0.28em] text-on-jet/55">
          {plan.note}
        </p>

        {/* Features */}
        <ul className="mt-7 space-y-3 border-t pt-5" style={{ borderColor: "var(--color-line-soft)" }}>
          {plan.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 font-jp text-[13px] leading-snug text-on-jet/90"
            >
              <span
                aria-hidden
                className={`mt-1.5 inline-block size-1.5 shrink-0 rotate-45 ${
                  isReco ? "bg-madder" : "bg-on-jet"
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
              className={`group flex items-center justify-between px-4 py-4 font-mono text-[11px] tracking-[0.32em] transition ${
                isReco
                  ? "bg-madder text-paper hover:bg-madder-deep"
                  : "border border-on-jet/50 text-on-jet hover:border-madder hover:bg-madder hover:text-paper"
              }`}
            >
              <span>{plan.cta}</span>
              <span aria-hidden className="transition group-hover:translate-x-1">→</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </article>
  );
}
