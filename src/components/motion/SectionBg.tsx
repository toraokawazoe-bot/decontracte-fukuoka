"use client";

import { useEffect, useState, type CSSProperties } from "react";

const BG_GLYPHS = ["·", "×", "+", "▸", "▮", "○", "◯", "/", "—", "✕", "·", "·"];

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

function makeBgItems(count: number, dark: boolean): BgItem[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 8 + Math.random() * 22,
    opacity: dark
      ? 0.05 + Math.random() * 0.14
      : 0.06 + Math.random() * 0.18,
    dur: 18 + Math.random() * 22,
    delay: -Math.random() * 24,
    dx: (Math.random() - 0.5) * 240,
    dy: (Math.random() - 0.5) * 240,
    glyph: BG_GLYPHS[Math.floor(Math.random() * BG_GLYPHS.length)],
  }));
}

export function SectionBg({
  word,
  dark = false,
  count = 18,
  rotate = "right",
}: {
  word: string;
  dark?: boolean;
  count?: number;
  rotate?: "right" | "left";
}) {
  // Client-side only so SSR markup stays identical (no hydration drift).
  const [bg, setBg] = useState<BgItem[]>([]);
  useEffect(() => {
    setBg(makeBgItems(count, dark));
  }, [count, dark]);

  const driftColor = dark ? "rgba(255,255,255,0.85)" : "var(--color-ink)";
  const strokeColor = dark
    ? "rgba(255,255,255,0.06)"
    : "rgba(13,10,8,0.06)";
  const spinClass =
    rotate === "left" ? "section-bg-spin-left" : "section-bg-spin-right";

  return (
    <>
      {/* Giant slow-rotating outline wordmark */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 flex items-center justify-center ${spinClass}`}
      >
        <span
          className="whitespace-nowrap"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 900,
            fontSize: "32vw",
            letterSpacing: "-0.05em",
            color: "transparent",
            WebkitTextStroke: `1.2px ${strokeColor}`,
            lineHeight: 0.9,
          }}
        >
          {word}
        </span>
      </div>

      {/* Drifting symbol field */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {bg.map((item, i) => (
          <span
            key={i}
            className="bg-drift-item"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              fontSize: `${item.size}px`,
              opacity: item.opacity,
              color: driftColor,
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
    </>
  );
}
