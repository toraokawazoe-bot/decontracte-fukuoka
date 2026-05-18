"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Magnetic } from "./motion/Magnetic";

export function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase(1), 400);
    const t2 = window.setTimeout(() => setPhase(2), 1100);
    const t3 = window.setTimeout(() => setPhase(3), 1800);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper-pure)]">
      {/* Photo */}
      <Image
        src="/img/first_view.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Cinematic gradient scrim */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,10,8,0.78) 0%, rgba(13,10,8,0.55) 35%, rgba(13,10,8,0.62) 70%, rgba(13,10,8,0.92) 100%)",
        }}
      />

      {/* Side madder glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 8% 30%, rgba(185,74,53,0.32) 0%, transparent 60%)," +
            "radial-gradient(50% 40% at 92% 70%, rgba(230,184,0,0.18) 0%, transparent 60%)",
        }}
      />

      {/* Subtle scanlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.7) 0 1px, transparent 1px 4px)",
        }}
      />

      {/* Content */}
      <div className="container-x relative z-10 flex min-h-[100svh] flex-col justify-end pb-20 pt-32 lg:pb-28">
        {/* Logo wordmark */}
        <div
          className={`transition-all duration-1000 ${
            phase >= 1 ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Image
            src="/img/logo_white.svg"
            alt="DÉCONTRACTÉ"
            width={420}
            height={89}
            priority
            className="h-[64px] w-auto lg:h-[88px]"
          />
        </div>

        {/* Big tagline — original prose */}
        <h1
          className={`mt-10 max-w-4xl font-jp font-bold leading-[1.35] tracking-[0.04em] text-[var(--color-paper-pure)] transition-all delay-200 duration-1000 ${
            phase >= 2 ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
        >
          チームの結束を、
          <br />
          <span className="text-[var(--color-madder-hi)]">一着</span>
          に刻む。
        </h1>

        {/* Single-line claim */}
        <p
          className={`mt-7 max-w-2xl font-jp text-[15px] font-medium leading-[1.95] text-[var(--color-paper-pure)] transition-all delay-300 duration-1000 lg:text-[17px] ${
            phase >= 3 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          福岡発、サッカー／フットサル特化の昇華フルオーダー。
          <br />
          初回 <span className="text-[var(--color-hazard-hi)] font-bold">5 枚</span>
          から、追加は <span className="text-[var(--color-hazard-hi)] font-bold">1 枚</span>
          から対応します。
        </p>

        {/* CTA */}
        <div
          className={`mt-10 flex flex-col items-stretch gap-3 transition-all delay-500 duration-1000 sm:flex-row sm:items-center ${
            phase >= 3 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <Magnetic strength={0.22}>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-[var(--color-madder)] px-9 py-5 font-jp text-[15px] font-bold tracking-[0.08em] text-[var(--color-paper-pure)] transition hover:bg-[var(--color-madder-deep)]"
            >
              無料で見積もる
              <span aria-hidden className="transition group-hover:translate-x-1">→</span>
            </a>
          </Magnetic>
          <Magnetic strength={0.18}>
            <a
              href="#flow"
              className="group inline-flex items-center justify-center gap-3 border-2 border-[var(--color-paper-pure)] px-9 py-5 font-jp text-[15px] font-bold tracking-[0.08em] text-[var(--color-paper-pure)] transition hover:bg-[var(--color-paper-pure)] hover:text-[var(--color-ink)]"
            >
              注文の流れを見る
              <span aria-hidden className="transition group-hover:translate-x-1">→</span>
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Stats bar (anchored bottom) */}
      <div
        className={`container-x relative z-10 grid grid-cols-3 border-t border-white/15 transition-opacity delay-700 duration-1000 ${
          phase >= 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Stat k="5 枚〜" jp="最低発注" />
        <Stat k="1 枚〜" jp="追加発注" sep />
        <Stat k="4–5 週" jp="納期目安" sep />
      </div>
    </section>
  );
}

function Stat({ k, jp, sep }: { k: string; jp: string; sep?: boolean }) {
  return (
    <div
      className={`px-4 py-7 text-center ${sep ? "border-l border-white/15" : ""}`}
    >
      <div className="text-stencil text-[28px] leading-none text-[var(--color-paper-pure)] lg:text-[40px]">
        {k}
      </div>
      <div className="mt-2 font-jp text-[12px] font-bold tracking-[0.16em] text-[var(--color-paper-pure)]/75 lg:text-[13px]">
        {jp}
      </div>
    </div>
  );
}
