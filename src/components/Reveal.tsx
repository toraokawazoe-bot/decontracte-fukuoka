"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

export function Reveal({
  children,
  delay = 0,
  as: As = "div",
  className = "",
  y = 16,
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <As
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
      }}
      className={`transition-all duration-[900ms] ease-out will-change-transform ${
        visible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </As>
  );
}
