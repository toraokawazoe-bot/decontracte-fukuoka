"use client";

import { useEffect, useState, type CSSProperties } from "react";

const LETTERS: ReadonlyArray<{ ch: string; anim: string }> = [
  { ch: "D", anim: "lp-pop"      },
  { ch: "É", anim: "lp-slideL"   },
  { ch: "C", anim: "lp-outline"  },
  { ch: "O", anim: "lp-dropTop"  },
  { ch: "N", anim: "lp-rot360"   },
  { ch: "T", anim: "lp-flip"     },
  { ch: "R", anim: "lp-blink"    },
  { ch: "A", anim: "lp-burst"    },
  { ch: "C", anim: "lp-slideR"   },
  { ch: "T", anim: "lp-riseBot"  },
  { ch: "É", anim: "lp-skew"     },
];

const LETTER_TIMING = LETTERS.map((_, i) => ({
  delay: (i * 0.43 + (i % 4) * 0.27) % 4.5,
  duration: 4.2 + ((i * 1.07) % 2.4),
}));

type BgItem = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  dur: number;
  delay: number;
  dx: number;
  dy: number;
  glyph: string;
};

const BG_GLYPHS = ["·", "×", "+", "▸", "▮", "○", "◯", "/", "—", "▢", "·", "·", "✕", "/", "+", "—"];

function makeBgItems(count: number): BgItem[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 8 + Math.random() * 34,
    opacity: 0.05 + Math.random() * 0.26,
    dur: 14 + Math.random() * 24,
    delay: -Math.random() * 25,
    dx: (Math.random() - 0.5) * 360,
    dy: (Math.random() - 0.5) * 360,
    glyph: BG_GLYPHS[Math.floor(Math.random() * BG_GLYPHS.length)],
  }));
}

export function Hero() {
  const [bg, setBg] = useState<BgItem[]>([]);
  useEffect(() => {
    setBg(makeBgItems(68));
  }, []);

  return (
    <section
      aria-label="DÉCONTRACTÉ チームオーダーのユニフォーム"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[var(--color-jet)] text-[var(--color-on-jet)]"
    >
      {/* Giant slow-rotating outline wordmark in the background */}
      <div
        aria-hidden
        className="kinetic-bg-wordmark pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span
          className="kinetic-bg-text whitespace-nowrap"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 900,
            fontSize: "38vw",
            letterSpacing: "-0.05em",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(245,239,228,0.10)",
            lineHeight: 0.9,
          }}
        >
          DÉCONTRACTÉ
        </span>
      </div>

      {/* Drifting symbol field */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {bg.map((item, i) => (
          <span
            key={i}
            className="bg-drift-item"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              fontSize: `${item.size}px`,
              opacity: item.opacity,
              animationDuration: `${item.dur}s`,
              animationDelay: `${item.delay}s`,
              "--dx": `${item.dx}px`,
              "--dy": `${item.dy}px`,
            } as CSSProperties}
          >
            {item.glyph}
          </span>
        ))}
      </div>

      {/* Scan line that crosses occasionally */}
      <span aria-hidden className="hero-scan absolute inset-x-0 z-[5] h-px bg-[var(--color-on-jet)]/40" />

      <div className="container-x relative z-10 flex flex-1 flex-col justify-center pb-10 pt-28 lg:pb-16 lg:pt-32">
        <p className="font-jp text-[13px] font-bold tracking-[0.12em] text-[var(--color-on-jet-dim)] lg:text-[15px]">
          福岡発・昇華フルオーダー
        </p>

        <h1
          aria-label="DÉCONTRACTÉ"
          className="kinetic-brand mt-4 flex"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 900,
            fontSize: "clamp(30px, 10.5vw, 168px)",
            letterSpacing: "-0.055em",
            lineHeight: 0.95,
            color: "var(--color-on-jet)",
          }}
        >
          <span className="inline-block whitespace-nowrap">
            {LETTERS.map((l, i) => (
              <span
                key={i}
                aria-hidden
                className={`kinetic-letter ${l.anim}`}
                style={{
                  animationDelay: `${LETTER_TIMING[i].delay}s`,
                  animationDuration: `${LETTER_TIMING[i].duration}s`,
                }}
              >
                {l.ch}
              </span>
            ))}
          </span>
        </h1>

        <p className="mt-6 font-jp text-[22px] font-black leading-[1.35] text-[var(--color-on-jet)] sm:text-[34px] lg:mt-8 lg:text-[52px]">
          チームオーダーのユニフォーム
          <span className="block text-[var(--color-on-jet-dim)]">見積もり無料</span>
        </p>
        <p className="mt-4 max-w-xl font-jp text-[14px] font-medium leading-[1.9] text-[var(--color-on-jet-dim)] lg:text-[16px]">
          サッカー・フットサル・ソサイチ向け。最低5枚から、追加は1枚〜。
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-10">
          <a
            href="#contact"
            className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[var(--color-on-jet)] px-8 font-jp text-[15px] font-bold tracking-[0.06em] text-[var(--color-ink)] transition hover:bg-[var(--color-madder-hi)] hover:text-[var(--color-paper-pure)]"
          >
            見積もりを依頼する
            <span aria-hidden>→</span>
          </a>
          <a
            href="#items"
            className="inline-flex h-14 items-center justify-center gap-3 rounded-full border-2 border-[var(--color-on-jet)]/70 px-8 font-jp text-[15px] font-bold tracking-[0.06em] text-[var(--color-on-jet)] transition hover:bg-[var(--color-on-jet)] hover:text-[var(--color-ink)]"
          >
            アイテムを見る
          </a>
        </div>
      </div>
    </section>
  );
}
