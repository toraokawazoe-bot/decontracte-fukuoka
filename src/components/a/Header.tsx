"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/lib/site";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLDivElement>(null);

  // 開いたら最初のリンクへ、Escで閉じてボタンへ戻す。Tabはドロワーとボタンの間で回す
  useEffect(() => {
    if (!open) return;
    drawer.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !drawer.current || !btn.current) return;
      const items = [btn.current, ...Array.from(drawer.current.querySelectorAll<HTMLElement>("a"))];
      const i = items.indexOf(document.activeElement as HTMLElement);
      const next = e.shiftKey ? (i <= 0 ? items.length - 1 : i - 1) : (i + 1) % items.length;
      e.preventDefault();
      items[next].focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 80);
      setHidden(y > 400 && y > last);
      last = y;
      document.querySelector(".spbar")?.classList.toggle("is-on", y > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`hd${solid || open ? " is-solid" : ""}${hidden && !open ? " is-hidden" : ""}`}>
        <Link href="/" className="logo" aria-label="DÉCONTRACTÉ トップへ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo_black.svg" alt="DÉCONTRACTÉ" width={113} height={24} />
        </Link>
        <nav aria-label="メイン">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="hd-cta">
            見積もり依頼
          </Link>
          <button ref={btn} className="hd-menu" aria-label={open ? "メニューを閉じる" : "メニューを開く"} aria-expanded={open} aria-controls="drawer" onClick={() => setOpen((v) => !v)}>
            {open ? "CLOSE" : "MENU"}
          </button>
        </nav>
      </header>
      <div id="drawer" ref={drawer} className={`drawer${open ? " is-open" : ""}`} aria-hidden={!open} inert={!open}>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            <span className="en">{n.en}</span>
            <small>{n.label}</small>
          </Link>
        ))}
        <Link href="/contact" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
          <span className="en">CONTACT</span>
          <small>見積もり依頼</small>
        </Link>
      </div>
    </>
  );
}
