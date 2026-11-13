"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// 読み込み時のせり上がり・スクロール連動・カーソル追従・SP下部バー。
// prefers-reduced-motion では連動を止める(CSS側でも止めている)。
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (location.search.includes("static")) {
      root.classList.add("static", "is-in");
      document.querySelectorAll(".rv,.ln").forEach((el) => el.classList.add("is-in"));
      return;
    }
    root.classList.remove("is-in");
    const t = window.setTimeout(() => root.classList.add("is-in"), 120);

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -12% 0px" },
    );
    document.querySelectorAll(".rv,[data-reveal] .ln").forEach((el) => io.observe(el));

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // 慣性つきのなめらかなスクロール(参考サイトのezobolic等と同じ方式)。動きを減らす設定では使わない
    const lenis = reduce ? null : new Lenis({ lerp: 0.12, autoRaf: true });
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll]"));
    // 画面内(前後1画面)の要素だけ、スクロール・リサイズ時に1フレームだけ更新する
    const visible = new Set<HTMLElement>();
    const vio = new IntersectionObserver(
      (entries) => entries.forEach((e) => (e.isIntersecting ? visible.add(e.target as HTMLElement) : visible.delete(e.target as HTMLElement))),
      { rootMargin: "100% 0px 100% 0px" },
    );
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      visible.forEach((el) => {
        const r = el.getBoundingClientRect();
        const p = Math.max(-1, Math.min(1, (vh / 2 - (r.top + r.height / 2)) / vh));
        const k = el.dataset.scroll;
        if (k === "zoom") el.style.transform = `scale(${1.12 - p * 0.12})`;
        else if (k === "slideL") el.style.transform = `translateX(${p * -24}vw)`;
        else if (k === "slideR") el.style.transform = `translateX(${p * 24}vw)`;
      });
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    if (!reduce) {
      els.forEach((el) => vio.observe(el));
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule, { passive: true });
      schedule();
      window.setTimeout(schedule, 200);
    }

    const cur = reduce ? null : document.querySelector<HTMLElement>(".cur");
    let mx = 0;
    let my = 0;
    let craf = 0;
    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!cur || craf) return;
      craf = requestAnimationFrame(() => {
        craf = 0;
        cur.style.left = `${mx}px`;
        cur.style.top = `${my}px`;
      });
    };
    const targets = cur ? Array.from(document.querySelectorAll<HTMLElement>("[data-cur]")) : [];
    const on = (e: Event) => {
      if (!cur) return;
      cur.textContent = (e.currentTarget as HTMLElement).dataset.cur ?? "";
      cur.classList.add("on");
    };
    const off = () => cur?.classList.remove("on");
    if (cur) window.addEventListener("mousemove", move, { passive: true });
    targets.forEach((el) => {
      el.addEventListener("mouseenter", on);
      el.addEventListener("mouseleave", off);
    });

    return () => {
      window.clearTimeout(t);
      io.disconnect();
      vio.disconnect();
      lenis?.destroy();
      cancelAnimationFrame(raf);
      cancelAnimationFrame(craf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", on);
        el.removeEventListener("mouseleave", off);
      });
      off();
    };
  }, [pathname]);

  return <div className="cur" aria-hidden />;
}
