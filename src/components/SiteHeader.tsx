"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#why",     label: "理由",       en: "WHY" },
  { href: "#price",   label: "料金",       en: "PRICE" },
  { href: "#items",   label: "アイテム",   en: "ITEM" },
  { href: "#catalog", label: "カタログ",   en: "CATALOG" },
  { href: "#works",   label: "実績",       en: "WORKS" },
  { href: "#flow",    label: "流れ",       en: "FLOW" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-[var(--color-paper-pure)]/85 backdrop-blur"
          : "bg-transparent"
      }`}
      style={scrolled ? { borderBottom: "1px solid var(--color-line-ink)" } : undefined}
    >
      <div className="container-x flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="group flex items-center gap-3" aria-label="DÉCONTRACTÉ">
          <span className="relative block size-2.5 rotate-45 bg-[var(--color-madder)] shadow-[0_0_18px_rgba(185,74,53,0.7)]" aria-hidden />
          <span className="text-stencil text-[16px] leading-none text-[var(--color-ink)] lg:text-[18px]">
            DÉCONTRACTÉ
          </span>
          <span className="font-mono text-[9px] tracking-[0.32em] text-[var(--color-ink-mute)] hidden md:inline">
            ™ · 026
          </span>
        </Link>

        {/* PC inline nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group inline-flex items-baseline gap-1.5 font-mono text-[10px] tracking-[0.32em] text-[var(--color-ink-dim)] transition hover:text-[var(--color-ink)]"
            >
              <span>{n.en}</span>
              <span className="text-[var(--color-ink-mute)] group-hover:text-[var(--color-madder)] transition">·</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 border border-[var(--color-line-ink-strong)] px-4 py-2 font-mono text-[10px] tracking-[0.28em] text-[var(--color-ink)] transition hover:border-[var(--color-madder)] hover:bg-[var(--color-madder)] hover:text-[var(--color-paper-pure)]"
          >
            GET A QUOTE
            <span aria-hidden>→</span>
          </a>

          <button
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden -mr-1 flex h-11 w-11 items-center justify-center"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-[var(--color-ink)] transition-transform duration-500 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[var(--color-ink)] transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-[var(--color-ink)] transition-transform duration-500 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`absolute left-0 right-0 top-16 origin-top overflow-hidden bg-[var(--color-paper-pure)] transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          open ? "max-h-[88vh] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ borderTop: open ? "1px solid var(--color-line-ink-strong)" : undefined }}
      >
        <nav>
          <ul>
            {NAV.map((n, i) => (
              <li key={n.href} className="border-b border-[var(--color-line-ink-strong)]">
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="container-x group flex items-baseline gap-5 py-5 transition hover:bg-[var(--color-paper)]"
                >
                  <span className="font-mono text-[10px] tracking-[0.28em] text-[var(--color-ink-mute)] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block text-stencil text-2xl tracking-tight text-[var(--color-ink)]">
                      {n.en}
                    </span>
                    <span className="mt-0.5 block font-jp text-[11px] text-[var(--color-ink-dim)]">
                      / {n.label}
                    </span>
                  </span>
                  <span aria-hidden className="text-[var(--color-ink-mute)] transition group-hover:translate-x-1 group-hover:text-[var(--color-madder)]">→</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="container-x flex items-center justify-between bg-[var(--color-madder)] py-5 text-[var(--color-paper-pure)]"
              >
                <span className="text-stencil text-xl tracking-wide">無料見積もり</span>
                <span className="font-mono text-[10px] tracking-[0.28em] text-[var(--color-paper-pure)]/85">GET A QUOTE →</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
