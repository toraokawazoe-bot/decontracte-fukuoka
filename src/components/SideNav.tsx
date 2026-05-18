"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "why",     en: "WHY",     label: "選ばれる理由" },
  { id: "items",   en: "ITEM",    label: "アイテム" },
  { id: "price",   en: "PRICE",   label: "料金" },
  { id: "flow",    en: "FLOW",    label: "注文の流れ" },
  { id: "works",   en: "WORKS",   label: "制作実績" },
  { id: "faq",     en: "FAQ",     label: "Q&A" },
  { id: "contact", en: "CONTACT", label: "お問い合わせ" },
];

export function SideNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="セクションナビゲーション"
      style={{ mixBlendMode: "difference" }}
      className="pointer-events-none fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-1">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex items-center justify-end gap-3 py-1.5 font-mono text-[9px] tracking-[0.32em] text-white transition"
              >
                <span
                  className={`whitespace-nowrap transition ${
                    isActive
                      ? "opacity-100"
                      : "opacity-40 group-hover:opacity-100"
                  }`}
                >
                  {s.en} · {s.label}
                </span>
                <span
                  aria-hidden
                  className={`block h-px transition-all ${
                    isActive
                      ? "w-10 bg-white"
                      : "w-5 bg-white/40 group-hover:w-8 group-hover:bg-white"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
