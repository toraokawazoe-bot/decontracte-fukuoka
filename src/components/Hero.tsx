"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Magnetic } from "./motion/Magnetic";

type Particle = {
  x: number;
  y: number;
  size: number;
  variant: 0 | 1 | 2 | 3;
  duration: number;
  delay: number;
  color: string;
};

type Blink = {
  x: number;
  y: number;
  size: number;
  delay: number;
  color: string;
};

const COLORS = [
  "#f5efe4",
  "#f5efe4",
  "#f5efe4",
  "#f5efe4",
  "#e25a3e",
  "#ffd62a",
];

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, () => {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    return {
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 5,
      variant: Math.floor(Math.random() * 4) as 0 | 1 | 2 | 3,
      // Fast: 2.5–6s
      duration: 2.5 + Math.random() * 3.5,
      delay: -Math.random() * 5,
      color,
    };
  });
}

function makeBlinks(count: number): Blink[] {
  return Array.from({ length: count }, () => {
    const isAccent = Math.random() > 0.5;
    return {
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 3 + Math.random() * 4,
      delay: -Math.random() * 2.4,
      color: isAccent
        ? Math.random() > 0.5
          ? "#e25a3e"
          : "#ffd62a"
        : "#f5efe4",
    };
  });
}

export function Hero() {
  const [phase, setPhase] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [blinks, setBlinks] = useState<Blink[]>([]);

  const seedParticles = useMemo(() => makeParticles(34), []);
  const seedBlinks = useMemo(() => makeBlinks(10), []);

  useEffect(() => {
    setParticles(seedParticles);
    setBlinks(seedBlinks);
  }, [seedParticles, seedBlinks]);

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
    <section className="relative isolate flex h-[100svh] flex-col justify-center overflow-hidden bg-[#0a0807] text-[var(--color-paper-pure)]">
      {/* Ambient madder orb */}
      <div
        aria-hidden
        className="drift-blob pointer-events-none absolute right-[-20%] top-[-30%] size-[70vmax] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(185,74,53,0.20) 0%, rgba(185,74,53,0.05) 45%, transparent 75%)",
        }}
      />

      {/* Fast particle field */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {particles.map((p, i) => (
          <span
            key={`p-${i}`}
            className={`particle pv${p.variant}`}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}, 0 0 ${p.size * 6}px ${p.color}88`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: 0,
            }}
          />
        ))}

        {/* Fast blinking dots */}
        {blinks.map((b, i) => (
          <span
            key={`b-${i}`}
            className="blink-dot"
            style={{
              left: `${b.x}%`,
              top: `${b.y}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              backgroundColor: b.color,
              boxShadow: `0 0 ${b.size * 3}px ${b.color}`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}

        {/* Fast scan flash */}
        <div
          className="scan-flash"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(226,90,62,0.0) 30%, rgba(226,90,62,0.7) 50%, rgba(226,90,62,0.0) 70%, transparent 100%)",
            boxShadow:
              "0 0 18px rgba(226,90,62,0.6), 0 0 36px rgba(226,90,62,0.3)",
          }}
        />
        <div
          className="scan-flash"
          style={{
            top: "30%",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,214,42,0.0) 30%, rgba(255,214,42,0.5) 50%, rgba(255,214,42,0.0) 70%, transparent 100%)",
            boxShadow:
              "0 0 14px rgba(255,214,42,0.5), 0 0 30px rgba(255,214,42,0.25)",
            animationDelay: "-1.8s",
            animationDuration: "4.2s",
          }}
        />
      </div>

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
          <span className="glitch block" data-text="チームを、">
            チームを、
          </span>
          <span className="glitch block" data-text="一着に。">
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
