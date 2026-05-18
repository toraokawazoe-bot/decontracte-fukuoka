"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Magnetic CTA — element gently follows the cursor on desktop.
 * No-op on touch / coarse pointers, and respects prefers-reduced-motion.
 */
export function Magnetic({
  children,
  strength = 0.25,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const coarse =
      typeof window !== "undefined" &&
      window.matchMedia?.("(pointer: coarse)").matches;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      tx = (e.clientX - cx) * strength;
      ty = (e.clientY - cy) * strength;
      if (!raf) raf = window.requestAnimationFrame(apply);
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = window.requestAnimationFrame(apply);
    };
    const apply = () => {
      el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
      raf = 0;
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`magnetic-cta ${className}`}>
      {children}
    </div>
  );
}
