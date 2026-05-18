"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Sport-tech odometer — each digit flips into place when the element scrolls
 * into view. Non-digit chars (commas, periods) are rendered statically.
 *
 * Renders `value` as a string. Animation:
 *   each digit-track contains 0..9 stacked vertically (one row = 1em),
 *   `transform: translateY(-d * 100%)` lands on digit d.
 */
export function Odometer({
  value,
  className = "",
  rowHeight = "1em",
  startDelayMs = 80,
  perDigitMs = 90,
}: {
  value: string;
  className?: string;
  rowHeight?: string;
  startDelayMs?: number;
  perDigitMs?: number;
}) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setArmed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setArmed(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  let digitIndex = 0;
  const chars = Array.from(value);

  return (
    <span ref={containerRef} className={`inline-flex items-baseline ${className}`}>
      {chars.map((ch, i) => {
        if (/\d/.test(ch)) {
          const d = Number(ch);
          const delay = startDelayMs + digitIndex * perDigitMs;
          digitIndex += 1;
          return (
            <span
              key={i}
              className="digit-track tabular-nums"
              style={{ height: rowHeight, lineHeight: rowHeight, width: "0.62em" }}
            >
              <span
                className="digit-track-inner"
                style={{
                  transform: armed ? `translateY(-${d * 100}%)` : "translateY(0)",
                  transitionDelay: `${delay}ms`,
                }}
              >
                {Array.from({ length: 10 }, (_, n) => (
                  <span key={n} style={{ height: rowHeight, lineHeight: rowHeight }}>
                    {n}
                  </span>
                ))}
              </span>
            </span>
          );
        }
        return (
          <span key={i} className="tabular-nums">
            {ch}
          </span>
        );
      })}
    </span>
  );
}
