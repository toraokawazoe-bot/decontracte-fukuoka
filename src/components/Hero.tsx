"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Magnetic } from "./motion/Magnetic";

export function Hero() {
  const [phase, setPhase] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase(1), 250);
    const t2 = window.setTimeout(() => setPhase(2), 750);
    const t3 = window.setTimeout(() => setPhase(3), 1200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      const ss = String(d.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper-pure)]">
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(245,239,228,0.45) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Soft madder corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 40% at 100% 0%, rgba(185,74,53,0.20) 0%, transparent 60%)," +
            "radial-gradient(45% 35% at 0% 100%, rgba(230,184,0,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Top status line — pushed below fixed header */}
      <div
        className={`container-x relative z-10 flex items-center justify-between pt-24 font-jp text-[11px] font-bold tracking-[0.16em] text-[var(--color-paper-pure)]/55 transition-opacity delay-100 duration-700 lg:pt-28 ${
          phase >= 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="inline-flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[var(--color-madder-hi)] shadow-[0_0_8px_rgba(226,90,62,0.8)]" aria-hidden />
          FUKUOKA
        </span>
        <span className="font-mono tabular-nums">{time || "--:--:--"}</span>
        <span className="hidden sm:inline">SUBLIMATION ／ TEAMWEAR</span>
      </div>

      {/* Main content — editorial asymmetric */}
      <div className="container-x relative z-10 flex min-h-[88svh] flex-col justify-end pb-12 pt-12 lg:min-h-[80svh] lg:pb-20 lg:pt-20">
        {/* Logo */}
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
            className="h-[44px] w-auto sm:h-[56px] lg:h-[72px]"
          />
        </div>

        {/* Asymmetric editorial layout */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
          {/* Headline */}
          <h1
            className={`font-jp font-black leading-[1.1] tracking-[-0.02em] text-[var(--color-paper-pure)] transition-all delay-200 duration-1000 ${
              phase >= 2 ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ fontSize: "clamp(44px, 8.5vw, 120px)" }}
          >
            <span className="block">チームを、</span>
            <span className="block">
              <span className="text-[var(--color-madder-hi)]">一着</span>に。
            </span>
          </h1>

          {/* Side details */}
          <div
            className={`flex flex-col gap-7 transition-all delay-400 duration-1000 lg:items-end lg:text-right ${
              phase >= 3 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <p className="max-w-md font-jp text-[15px] font-medium leading-[1.9] text-[var(--color-paper-pure)]/85 lg:text-[16px]">
              福岡発、サッカー／フットサル特化の昇華フルオーダー。
              <br className="hidden lg:block" />
              初回 <span className="font-bold text-[var(--color-paper-pure)]">5 枚</span>
              、追加 <span className="font-bold text-[var(--color-paper-pure)]">1 枚</span>から。
            </p>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row lg:justify-end">
              <Magnetic strength={0.22}>
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[var(--color-madder)] px-8 py-5 font-jp text-[15px] font-bold tracking-[0.04em] text-[var(--color-paper-pure)] shadow-[0_18px_36px_-12px_rgba(185,74,53,0.7)] transition hover:bg-[var(--color-madder-deep)]"
                >
                  見積もりを依頼
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </a>
              </Magnetic>
              <Magnetic strength={0.18}>
                <a
                  href="#flow"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[var(--color-paper-pure)]/30 px-8 py-5 font-jp text-[15px] font-bold tracking-[0.04em] text-[var(--color-paper-pure)] transition hover:border-[var(--color-paper-pure)] hover:bg-[var(--color-paper-pure)]/5"
                >
                  注文の流れ
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      {/* Footer ticker — 3 stat pills */}
      <div
        className={`container-x relative z-10 pb-8 transition-opacity delay-700 duration-1000 ${
          phase >= 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2.5 sm:grid sm:grid-cols-3 sm:gap-3">
          <StatChip k="5 枚〜" jp="最低発注" />
          <StatChip k="1 枚〜" jp="追加発注" />
          <StatChip k="4–5 週" jp="納期目安" />
        </div>
      </div>
    </section>
  );
}

function StatChip({ k, jp }: { k: string; jp: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.08]">
      <span className="font-jp text-[12px] font-bold tracking-[0.16em] text-[var(--color-paper-pure)]/65">
        {jp}
      </span>
      <span className="font-jp text-[22px] font-black leading-none text-[var(--color-paper-pure)] sm:text-[24px]">
        {k}
      </span>
    </div>
  );
}
