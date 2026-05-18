"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Letter-by-letter mask reveal. Splits children string into <span> per char,
 * each rises from below with staggered delay. Skips animation if non-string.
 */
export function MaskReveal({
  children,
  as: As = "span",
  className = "",
  staggerMs = 28,
  delayMs = 0,
  splitWords = false,
}: {
  children: string | ReactNode;
  as?: ElementType;
  className?: string;
  staggerMs?: number;
  delayMs?: number;
  splitWords?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
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
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (typeof children !== "string") {
    return (
      <As ref={ref} className={className}>
        {children}
      </As>
    );
  }

  const units = splitWords
    ? children.split(/(\s+)/)
    : Array.from(children);

  return (
    <As ref={ref} className={`inline-block overflow-hidden align-baseline ${className}`}>
      <span className="inline-block">
        {units.map((u, i) => {
          if (/^\s+$/.test(u)) return <span key={i}>{u}</span>;
          return (
            <span
              key={i}
              className="inline-block"
              style={{
                transform: armed ? "translateY(0)" : "translateY(110%)",
                opacity: armed ? 1 : 0,
                transition: `transform 900ms cubic-bezier(0.2, 0.85, 0.2, 1), opacity 900ms`,
                transitionDelay: `${delayMs + i * staggerMs}ms`,
              }}
            >
              {u === " " ? " " : u}
            </span>
          );
        })}
      </span>
    </As>
  );
}
