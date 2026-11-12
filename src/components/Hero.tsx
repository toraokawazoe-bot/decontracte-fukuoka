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
      aria-label="DÉCONTRACTÉ"
      className="relative flex h-[100svh] flex-col overflow-hidden bg-white text-[var(--color-ink)]"
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
            WebkitTextStroke: "1.5px rgba(13,10,8,0.08)",
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
      <span aria-hidden className="hero-scan absolute inset-x-0 z-[5] h-px bg-[var(--color-ink)]/40" />

      {/* Brand name — centered, slightly below center, each letter glitches */}
      <h1
        aria-label="DÉCONTRACTÉ"
        className="kinetic-brand absolute inset-x-0 z-10 flex justify-center px-4"
        style={{
          top: "58%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-sans)",
          fontWeight: 900,
          fontSize: "clamp(36px, 12.5vw, 224px)",
          letterSpacing: "-0.055em",
          lineHeight: 0.9,
          color: "var(--color-ink)",
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
    </section>
  );
}
