"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#why",   label: "選ばれる理由", en: "WHY" },
  { href: "#items", label: "アイテム",     en: "ITEM" },
  { href: "#price", label: "料金",         en: "PRICE" },
  { href: "#flow",  label: "注文の流れ",   en: "FLOW" },
  { href: "#works", label: "制作実績",     en: "WORKS" },
  { href: "#faq",   label: "Q&A",          en: "FAQ" },
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

  // Hero is dark, so default text is white. When scrolled, switch to dark bg.
  const onDark = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-[var(--color-paper-pure)]/90 backdrop-blur border-b border-[var(--color-line-ink)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="group flex items-center" aria-label="DÉCONTRACTÉ">
          <Image
            src={onDark ? "/img/logo_white.svg" : "/img/logo_black.svg"}
            alt="DÉCONTRACTÉ"
            width={188}
            height={40}
            priority
            className="h-7 w-auto lg:h-9"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`group inline-flex items-baseline gap-1.5 font-jp text-[13px] font-bold tracking-[0.06em] transition ${
                onDark
                  ? "text-[var(--color-paper-pure)]/85 hover:text-[var(--color-paper-pure)]"
                  : "text-[var(--color-ink)]/80 hover:text-[var(--color-ink)]"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 font-jp text-[13px] font-bold tracking-[0.06em] transition ${
              onDark
                ? "border-2 border-[var(--color-paper-pure)] text-[var(--color-paper-pure)] hover:bg-[var(--color-paper-pure)] hover:text-[var(--color-ink)]"
                : "border-2 border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper-pure)]"
            }`}
          >
            お見積もり
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
                className={`absolute left-0 top-0 h-px w-full transition-transform duration-500 ${
                  onDark ? "bg-[var(--color-paper-pure)]" : "bg-[var(--color-ink)]"
                } ${open ? "translate-y-[7px] rotate-45 bg-[var(--color-ink)]" : ""}`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 transition-opacity duration-300 ${
                  onDark ? "bg-[var(--color-paper-pure)]" : "bg-[var(--color-ink)]"
                } ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full transition-transform duration-500 ${
                  onDark ? "bg-[var(--color-paper-pure)]" : "bg-[var(--color-ink)]"
                } ${open ? "-translate-y-[7px] -rotate-45 bg-[var(--color-ink)]" : ""}`}
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
                  className="container-x group flex items-center gap-5 py-5 transition hover:bg-[var(--color-paper)]"
                >
                  <span className="font-mono text-[11px] font-bold text-[var(--color-ink-mute)] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-jp text-[18px] font-bold text-[var(--color-ink)]">
                    {n.label}
                  </span>
                  <span aria-hidden className="text-[var(--color-ink-mute)] transition group-hover:translate-x-1 group-hover:text-[var(--color-madder)]">→</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="container-x flex items-center justify-between bg-[var(--color-madder)] py-6 text-[var(--color-paper-pure)]"
              >
                <span className="font-jp text-[18px] font-bold">無料お見積もり</span>
                <span aria-hidden className="text-[var(--color-paper-pure)]/85">→</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
