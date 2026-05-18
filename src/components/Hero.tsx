"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Magnetic } from "./motion/Magnetic";

export function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase(1), 250);
    const t2 = window.setTimeout(() => setPhase(2), 700);
    const t3 = window.setTimeout(() => setPhase(3), 1100);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  return (
    <section className="relative isolate flex h-[100svh] flex-col justify-center overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper-pure)]">
      {/* Drifting dot grid */}
      <div
        aria-hidden
        className="drift-dots pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(245,239,228,0.5) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 50%, black 35%, transparent 100%)",
        }}
      />

      {/* Ambient pulsing corner orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="ambient-pulse absolute right-0 top-0 size-[50vmax] -translate-y-1/3 translate-x-1/4 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(185,74,53,0.32) 0%, transparent 70%)",
          }}
        />
        <div
          className="ambient-pulse absolute bottom-0 left-0 size-[40vmax] -translate-x-1/4 translate-y-1/3 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(230,184,0,0.18) 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Horizontal sweeping line */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[50%] overflow-hidden">
        <div
          className="line-sweep h-px w-full bg-gradient-to-r from-transparent via-[var(--color-madder-hi)] to-transparent"
          style={{ boxShadow: "0 0 18px rgba(226,90,62,0.7), 0 0 36px rgba(226,90,62,0.35)" }}
        />
      </div>

      {/* All content centered inside one container */}
      <div className="container-x relative z-10 flex flex-col items-start pt-24 lg:pt-28">
        {/* Logo */}
        <div
          className={`transition-all duration-700 ${
            phase >= 1 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Image
            src="/img/logo_white.svg"
            alt="DÉCONTRACTÉ"
            width={420}
            height={89}
            priority
            className="h-[32px] w-auto sm:h-[40px] lg:h-[52px]"
          />
        </div>

        {/* Headline */}
        <h1
          className={`mt-6 max-w-5xl font-jp font-black leading-[1.04] tracking-[-0.02em] text-[var(--color-paper-pure)] transition-all delay-150 duration-700 lg:mt-8 ${
            phase >= 2 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ fontSize: "clamp(38px, 7vw, 96px)" }}
        >
          <span className="block">チームを、</span>
          <span className="block">
            <span className="text-[var(--color-madder-hi)]">一着</span>に。
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-5 max-w-2xl font-jp text-[13px] font-medium leading-[1.85] text-[var(--color-paper-pure)]/85 transition-all delay-250 duration-700 lg:mt-6 lg:text-[15px] ${
            phase >= 3 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          福岡発、サッカー／フットサル特化の昇華フルオーダー。 初回{" "}
          <span className="font-bold text-[var(--color-paper-pure)]">5 枚</span>、追加{" "}
          <span className="font-bold text-[var(--color-paper-pure)]">1 枚</span>から。
        </p>

        {/* CTAs */}
        <div
          className={`mt-6 flex flex-col items-stretch gap-3 transition-all delay-350 duration-700 sm:flex-row sm:items-center lg:mt-8 ${
            phase >= 3 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <Magnetic strength={0.22}>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[var(--color-madder)] px-7 py-4 font-jp text-[14px] font-bold tracking-[0.04em] text-[var(--color-paper-pure)] shadow-[0_18px_36px_-12px_rgba(185,74,53,0.7)] transition hover:bg-[var(--color-madder-deep)]"
            >
              見積もりを依頼
              <span aria-hidden className="transition group-hover:translate-x-1">→</span>
            </a>
          </Magnetic>
          <Magnetic strength={0.18}>
            <a
              href="#flow"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[var(--color-paper-pure)]/30 px-7 py-4 font-jp text-[14px] font-bold tracking-[0.04em] text-[var(--color-paper-pure)] transition hover:border-[var(--color-paper-pure)] hover:bg-[var(--color-paper-pure)]/5"
            >
              注文の流れ
              <span aria-hidden className="transition group-hover:translate-x-1">→</span>
            </a>
          </Magnetic>
        </div>

        {/* Inline stat row — same flow, not pinned to viewport bottom */}
        <div
          className={`mt-8 w-full transition-opacity delay-500 duration-700 lg:mt-12 ${
            phase >= 3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 sm:grid sm:grid-cols-3 sm:gap-3">
            <StatChip k="5 枚〜" jp="最低発注" />
            <StatChip k="1 枚〜" jp="追加発注" />
            <StatChip k="4–5 週" jp="納期目安" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatChip({ k, jp }: { k: string; jp: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.08]">
      <span className="font-jp text-[11px] font-bold tracking-[0.16em] text-[var(--color-paper-pure)]/65">
        {jp}
      </span>
      <span className="font-jp text-[18px] font-black leading-none text-[var(--color-paper-pure)] sm:text-[20px]">
        {k}
      </span>
    </div>
  );
}
