"use client";

import { useEffect, useState } from "react";
import { CountUp } from "./CountUp";
import { Magnetic } from "./motion/Magnetic";

type Scene = 0 | 1 | 2 | 3;

export function Hero() {
  const [scene, setScene] = useState<Scene>(0);

  useEffect(() => {
    const t1 = window.setTimeout(() => setScene(1), 1600);
    const t2 = window.setTimeout(() => setScene(2), 3400);
    const t3 = window.setTimeout(() => setScene(3), 5200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-jet text-on-jet">
      {/* Slow orbital background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="orbit-conic absolute -inset-[50%]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(185,74,53,0.20) 50deg, transparent 130deg, rgba(29,42,54,0.30) 220deg, transparent 310deg, transparent 360deg)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 80% 0%, rgba(185,74,53,0.18) 0%, transparent 60%)," +
              "radial-gradient(90% 60% at 0% 100%, rgba(29,42,54,0.55) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Scanlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 4px)",
        }}
      />

      {/* Top hairline meta */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-9 font-mono text-[10px] tracking-[0.32em] text-on-jet/55">
        <span className="inline-flex items-center gap-2">
          <span className="rec-dot rec-dot-sm" />
          EST. FUKUOKA · 2026
        </span>
        <span className="tabular-nums">VOL.026</span>
      </div>

      {/* Stage */}
      <div className="relative z-10 flex min-h-[82svh] flex-col items-center justify-center px-5 py-20">
        <div className="relative w-full">
          {/* Scene 1: JP copy */}
          <div
            className={`flex flex-col items-center text-center transition-all duration-700 ${
              scene === 0 ? "opacity-100" : "absolute inset-0 -translate-y-2 opacity-0"
            }`}
            aria-hidden={scene !== 0}
          >
            <p className="font-jp text-[7vw] leading-[1.35] tracking-[0.06em] text-on-jet sm:text-[28px]">
              <span className="fv-rise inline-block" style={{ animationDelay: "120ms" }}>
                チームの今を、
              </span>
              <br />
              <span className="fv-rise inline-block" style={{ animationDelay: "520ms" }}>
                一着に纏う。
              </span>
            </p>
          </div>

          {/* Scene 2: EN expansion */}
          <div
            className={`flex flex-col items-center text-center transition-all duration-700 ${
              scene === 1
                ? "opacity-100"
                : "absolute inset-0 translate-y-2 opacity-0"
            }`}
            aria-hidden={scene !== 1}
          >
            <p className="text-stencil text-[9vw] leading-[1.0] text-on-jet sm:text-[40px]">
              <Letter k="t">EAM</Letter>
              <br />
              <Letter k="w">EAR</Letter>
              <br />
              <Letter k="0">26</Letter>
            </p>
          </div>

          {/* Scene 3 / 4: brand logo + tagline */}
          <div
            className={`flex flex-col items-center text-center transition-all duration-1000 ${
              scene >= 2 ? "opacity-100" : "absolute inset-0 opacity-0"
            }`}
            aria-hidden={scene < 2}
          >
            <span className="font-mono text-[10px] tracking-[0.32em] text-on-jet/55">FULL-CUSTOM TEAM WEAR</span>
            <h1 className="mt-6 text-stencil text-[15vw] leading-[0.88] text-on-jet sm:text-[96px]">
              <span
                className={`inline-block ${scene >= 3 ? "fv-breath" : "fv-letter-spread"}`}
              >
                DÉCONTRACTÉ
              </span>
            </h1>
            <p
              className={`mt-7 max-w-md font-jp text-[13px] leading-[1.95] text-on-jet/75 transition-all duration-700 ${
                scene === 3 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              ロゴ、配色、ナンバー、ネーム — ぜんぶ自由。
              <br />
              昇華フルオーダーで、チームの&ldquo;今&rdquo;を一着に刻む。
              <br />
              最低 <span className="text-on-jet">5枚</span> から、追加は{" "}
              <span className="text-on-jet">1枚</span> でも。
            </p>

            <div
              className={`mt-9 flex flex-col items-stretch gap-3 transition-all duration-700 sm:flex-row sm:items-center ${
                scene === 3 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <Magnetic strength={0.22}>
                <a
                  href="#price"
                  className="group inline-flex items-center justify-center gap-3 bg-madder px-6 py-4 font-mono text-[11px] tracking-[0.32em] text-paper transition hover:bg-madder-deep"
                >
                  料金プランを見る
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </a>
              </Magnetic>
              <Magnetic strength={0.18}>
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 border border-on-jet/40 px-6 py-4 font-mono text-[11px] tracking-[0.32em] text-on-jet transition hover:border-paper"
                >
                  無料で見積もりを依頼
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      {/* Stats footer */}
      <div
        className="relative z-10 grid grid-cols-3 gap-px border-y bg-jet-2"
        style={{ borderColor: "var(--color-line-soft)" }}
      >
        <StatCount to={5}   suffix="+" label="MIN ORDER" />
        <StatStatic k="4–5w"            label="LEAD TIME" />
        <StatCount to={100} suffix="%" label="SUBLIMATION" />
      </div>

      {/* Scroll cue */}
      <div className="relative z-10 flex items-center justify-between px-5 py-5 font-mono text-[10px] tracking-[0.32em] text-on-jet/55">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden className="block h-px w-7 bg-on-jet/40" />
          SCROLL
        </span>
        <span>SOCCER · FUTSAL · SOCIETY</span>
      </div>

      {/* Progress dots */}
      <div className="pointer-events-none absolute right-3 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`block h-4 w-px transition-colors ${
              i <= scene ? "bg-madder" : "bg-on-jet/20"
            }`}
          />
        ))}
      </div>

      {/* Bottom hazard rule */}
      <div className="hazard-strip-thin h-1 w-full" aria-hidden />
    </section>
  );
}

function Letter({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <span className="inline-block">
      <span className="text-madder">{k.toUpperCase()}</span>
      <span className="fv-fade-in inline-block" style={{ animationDelay: "180ms" }}>
        {children}
      </span>
    </span>
  );
}

function StatCount({
  to,
  suffix,
  format,
  label,
}: {
  to: number;
  suffix?: string;
  format?: (n: number) => string;
  label: string;
}) {
  return (
    <div className="bg-jet px-3 py-5 text-center">
      <div className="text-stencil text-3xl text-on-jet">
        <CountUp
          to={to}
          format={format ?? ((n) => `${n}${suffix ?? ""}`)}
        />
      </div>
      <div className="mt-1 font-mono text-[9px] tracking-[0.32em] text-on-jet/55">
        {label}
      </div>
    </div>
  );
}

function StatStatic({ k, label }: { k: string; label: string }) {
  return (
    <div className="bg-jet px-3 py-5 text-center">
      <div className="text-stencil text-3xl text-on-jet">{k}</div>
      <div className="mt-1 font-mono text-[9px] tracking-[0.32em] text-on-jet/55">
        {label}
      </div>
    </div>
  );
}
