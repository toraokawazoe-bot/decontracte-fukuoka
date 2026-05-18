"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Magnetic } from "./motion/Magnetic";

export function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase(1), 200);
    const t2 = window.setTimeout(() => setPhase(2), 650);
    const t3 = window.setTimeout(() => setPhase(3), 1100);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  return (
    <section className="relative isolate flex h-[100svh] flex-col justify-center overflow-hidden text-[var(--color-paper-pure)]">
      {/* Static warm dark base */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 80% 0%, #4a1d14 0%, #2a1612 35%, #1a1410 75%, #14100e 100%)",
        }}
      />

      {/* One ambient drifting blob — sole source of motion in background */}
      <div
        aria-hidden
        className="drift-blob pointer-events-none absolute right-[-15%] top-[-25%] size-[70vmax] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(185,74,53,0.35) 0%, rgba(185,74,53,0.10) 40%, transparent 75%)",
        }}
      />

      {/* Content */}
      <div className="container-x relative z-10 flex flex-col items-start pt-24 lg:pt-28">
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
            className="h-[34px] w-auto sm:h-[44px] lg:h-[56px]"
          />
        </div>

        <h1
          className={`mt-8 max-w-5xl font-jp font-black leading-[1.04] tracking-[-0.02em] text-[var(--color-paper-pure)] transition-all delay-150 duration-700 lg:mt-10 ${
            phase >= 2 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ fontSize: "clamp(40px, 7.5vw, 104px)" }}
        >
          <span className="block">チームを、</span>
          <span className="block">
            <span className="text-[var(--color-madder-hi)]">一着</span>に。
          </span>
        </h1>

        <p
          className={`mt-7 max-w-xl font-jp text-[14px] font-medium leading-[1.95] text-[var(--color-paper-pure)]/85 transition-all delay-300 duration-700 lg:mt-9 lg:text-[16px] ${
            phase >= 3 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          福岡発、サッカー／フットサル特化の昇華フルオーダー。
          <br className="hidden sm:block" />
          初回 5 枚から、追加は 1 枚から。
        </p>

        <div
          className={`mt-9 flex flex-col items-stretch gap-3 transition-all delay-450 duration-700 sm:flex-row sm:items-center lg:mt-12 ${
            phase >= 3 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <Magnetic strength={0.22}>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[var(--color-paper-pure)] px-8 py-4 font-jp text-[14px] font-bold tracking-[0.04em] text-[var(--color-ink)] transition hover:bg-[var(--color-madder-hi)] hover:text-[var(--color-paper-pure)]"
            >
              見積もりを依頼
              <span aria-hidden className="transition group-hover:translate-x-1">→</span>
            </a>
          </Magnetic>
          <a
            href="#flow"
            className="group inline-flex items-center justify-center gap-3 font-jp text-[14px] font-bold tracking-[0.04em] text-[var(--color-paper-pure)]/75 transition hover:text-[var(--color-paper-pure)]"
          >
            注文の流れを見る
            <span aria-hidden className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
