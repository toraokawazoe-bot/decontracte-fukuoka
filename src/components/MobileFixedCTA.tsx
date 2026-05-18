"use client";

import { useEffect, useState } from "react";

export function MobileFixedCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const triggered = window.scrollY > window.innerHeight * 0.6;
      setShow(triggered);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 transition-all duration-500 lg:hidden ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="container-x pb-3 pt-3">
        <a
          href="https://lpo8bfj3.autosns.app/addfriend/s/UZQRqrdzlc/@uyn8037j"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[var(--color-line-brand)] px-6 font-jp text-[15px] font-bold tracking-[0.06em] text-[var(--color-paper-pure)] shadow-[0_-4px_20px_rgba(0,0,0,0.35)] transition active:scale-[0.98]"
        >
          <LineLogo />
          LINE で見積もり
          <span aria-hidden className="ml-1">→</span>
        </a>
      </div>
    </div>
  );
}

function LineLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 36 36" fill="none" aria-hidden>
      <rect width="36" height="36" rx="8" fill="#fff" />
      <path
        d="M18 8c-6.075 0-11 3.86-11 8.625 0 4.275 3.911 7.86 9.196 8.523.358.077.846.236.97.541.111.275.072.706.036.984l-.157.945c-.048.279-.222 1.094.957.597 1.18-.497 6.36-3.747 8.677-6.418C28.273 19.85 29 18.31 29 16.625 29 11.86 24.075 8 18 8Z"
        fill="#06C755"
      />
    </svg>
  );
}
