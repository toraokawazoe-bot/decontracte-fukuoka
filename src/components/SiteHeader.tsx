"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#why",     label: "理由",       en: "WHY" },
  { href: "#items",   label: "アイテム",   en: "ITEM" },
  { href: "#catalog", label: "カタログ",   en: "CATALOG" },
  { href: "#price",   label: "料金",       en: "PRICE" },
  { href: "#flow",    label: "流れ",       en: "FLOW" },
  { href: "#works",   label: "実績",       en: "WORKS" },
  { href: "#faq",     label: "Q&A",        en: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = orig;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "bg-jet/85 backdrop-blur border-on-jet border-b"
          : "bg-transparent"
      }`}
      style={scrolled ? { borderBottomColor: "var(--color-line-soft)" } : undefined}
    >
      {/* Top status strip (always visible, mechanical) */}
      <div className="flex h-5 items-center justify-between border-on-jet-strong border-b px-3 font-mono text-[9px] tracking-[0.32em] text-on-jet/55"
           style={{ borderBottomColor: "var(--color-line-soft)" }}>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-1 rotate-45 bg-madder" aria-hidden />
          DCT—026/SS
        </span>
        <span className="hidden sm:inline">EST. FUKUOKA · 33°N</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="rec-dot rec-dot-sm" />
          ONLINE
        </span>
      </div>

      <div className="flex h-14 items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="DÉCONTRACTÉ">
          <span className="relative block size-2.5 rotate-45 bg-madder shadow-[0_0_18px_rgba(185,74,53,0.7)]" aria-hidden />
          <span className="text-stencil text-[16px] leading-none text-on-jet">
            DÉCONTRACTÉ
          </span>
          <span className="font-mono text-[9px] tracking-[0.32em] text-on-jet/40 hidden sm:inline">
            ™ · 026
          </span>
        </Link>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 border border-on-jet/40 px-3 py-1.5 font-mono text-[10px] tracking-[0.28em] text-on-jet transition hover:border-madder hover:bg-madder hover:text-paper"
        >
          GET A QUOTE
          <span aria-hidden>→</span>
        </a>

        <button
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden -mr-1 flex h-10 w-10 items-center justify-center"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-on-jet transition-transform duration-500 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-on-jet transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-on-jet transition-transform duration-500 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`absolute left-0 right-0 top-[76px] origin-top overflow-hidden bg-jet transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[88vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t" style={{ borderColor: "var(--color-line-soft)" }}>
          <ul className="divide-y" style={{ borderColor: "var(--color-line-soft)" }}>
            {NAV.map((n, i) => (
              <li key={n.href} className="border-b" style={{ borderColor: "var(--color-line-soft)" }}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-5 px-5 py-5 transition hover:bg-ink"
                >
                  <span className="font-mono text-[10px] tracking-[0.28em] text-on-jet/40 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block text-stencil text-2xl tracking-tight text-on-jet">
                      {n.en}
                    </span>
                    <span className="mt-0.5 block font-jp text-[11px] text-on-jet/55">
                      / {n.label}
                    </span>
                  </span>
                  <span aria-hidden className="text-on-jet/55 transition group-hover:translate-x-1 group-hover:text-madder">→</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between bg-madder px-5 py-5 text-paper hazard-strip-mono"
                style={{ backgroundImage: undefined }}
              >
                <span className="text-stencil text-xl tracking-wide">無料見積もり</span>
                <span className="font-mono text-[10px] tracking-[0.28em] text-paper/85">GET A QUOTE →</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
