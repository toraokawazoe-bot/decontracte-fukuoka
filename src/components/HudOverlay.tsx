"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Sport-tech HUD overlay pinned over the article column.
 * - 4-corner registration marks
 * - Live frame counter ticking up with scroll (0000–9999)
 * - REC dot
 * - Boot sequence on mount
 */
export function HudOverlay() {
  const [booted, setBooted] = useState(false);
  const [frame, setFrame] = useState(0);
  const targetRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // Boot sequence
  useEffect(() => {
    const t = window.setTimeout(() => setBooted(true), 900);
    return () => window.clearTimeout(t);
  }, []);

  // Scroll-driven frame counter
  useEffect(() => {
    const tick = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      targetRef.current = Math.round(p * 9999);
      rafRef.current = null;
    };
    const onScroll = () => {
      if (rafRef.current == null) rafRef.current = window.requestAnimationFrame(tick);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Smoothly interpolate frame number toward target (eases mechanical ticking)
  useEffect(() => {
    let raf = 0;
    const step = () => {
      setFrame((cur) => {
        const t = targetRef.current;
        const d = t - cur;
        if (Math.abs(d) < 1) return t;
        return cur + Math.sign(d) * Math.max(1, Math.floor(Math.abs(d) * 0.18));
      });
      raf = window.requestAnimationFrame(step);
    };
    raf = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(raf);
  }, []);

  const padded = String(frame).padStart(4, "0");

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-40 ${
        booted ? "opacity-100" : "opacity-0"
      } transition-opacity duration-700`}
    >
      {/* HUD constrained to article-col width on desktop */}
      <div className="relative mx-auto h-full w-full md:max-w-[540px]">
        {/* Corner registration marks */}
        <span className="reg-mark reg-mark-tl" />
        <span className="reg-mark reg-mark-tr" />
        <span className="reg-mark reg-mark-bl" />
        <span className="reg-mark reg-mark-br" />

        {/* Top HUD bar */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 pt-2.5 font-mono text-[9px] tracking-[0.32em] text-on-jet-mute">
          <span className="inline-flex items-center gap-1.5">
            <span className="rec-dot rec-dot-sm" />
            <span className="text-on-jet/70">REC</span>
            <span className="opacity-50">·</span>
            <span>LIVE</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="opacity-60">FRAME</span>
            <span className="text-on-jet tabular-nums">{padded}</span>
            <span className="opacity-50">/9999</span>
          </span>
        </div>

        {/* Bottom HUD bar */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-3 pb-2.5 font-mono text-[9px] tracking-[0.32em] text-on-jet-mute">
          <span>33.5902°N · 130.4017°E</span>
          <span className="inline-flex items-center gap-2">
            <span className="opacity-60">VOL</span>
            <span className="text-on-jet">026</span>
          </span>
        </div>
      </div>
    </div>
  );
}
