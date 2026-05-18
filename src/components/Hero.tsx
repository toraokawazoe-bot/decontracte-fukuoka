"use client";

import { useEffect, useRef, useState } from "react";
import { Magnetic } from "./motion/Magnetic";

type Scene = 0 | 1 | 2 | 3 | 4;

const SCENE_DURATIONS = [1800, 1700, 1900, 1500] as const;

export function Hero() {
  const [scene, setScene] = useState<Scene>(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timers: number[] = [];
    let elapsed = 0;
    for (let i = 1; i <= 4; i++) {
      elapsed += SCENE_DURATIONS[i - 1];
      timers.push(window.setTimeout(() => setScene(i as Scene), elapsed));
    }
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({ x, y });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={stageRef}
      className="relative isolate overflow-hidden bg-[var(--color-paper-pure)] text-[var(--color-ink)]"
    >
      {/* Ambient color orbit (subtle on light bg) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="orbit-conic absolute -inset-[40%] opacity-50"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(185,74,53,0.18) 60deg, transparent 140deg, rgba(230,184,0,0.14) 240deg, transparent 320deg, transparent 360deg)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 80% 0%, rgba(185,74,53,0.10) 0%, transparent 60%)," +
              "radial-gradient(90% 60% at 0% 100%, rgba(230,184,0,0.10) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Paper grain */}
      <div aria-hidden className="paper-grain pointer-events-none absolute inset-0" />

      {/* Floating accent shapes — animated */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-[6%] top-[18%] size-3 rotate-45 bg-[var(--color-madder)]"
          style={{
            transform: `translate3d(${mouse.x * 20}px, ${mouse.y * 20}px, 0) rotate(45deg)`,
            transition: "transform 800ms cubic-bezier(.2,.7,.2,1)",
            boxShadow: "0 0 36px rgba(185,74,53,0.45)",
          }}
        />
        <div
          className="absolute right-[10%] top-[28%] h-px w-32 bg-[var(--color-hazard)]"
          style={{
            transform: `translate3d(${mouse.x * -30}px, ${mouse.y * -10}px, 0)`,
            transition: "transform 800ms cubic-bezier(.2,.7,.2,1)",
            boxShadow: "0 0 20px rgba(230,184,0,0.55)",
          }}
        />
        <div
          className="absolute bottom-[22%] left-[14%] size-2 rounded-full bg-[var(--color-hazard-deep)]"
          style={{
            transform: `translate3d(${mouse.x * -16}px, ${mouse.y * -16}px, 0)`,
            transition: "transform 800ms cubic-bezier(.2,.7,.2,1)",
            boxShadow: "0 0 18px rgba(230,184,0,0.6)",
          }}
        />
        <div
          className="absolute bottom-[18%] right-[8%] h-px w-24 bg-[var(--color-madder)]"
          style={{
            transform: `translate3d(${mouse.x * 24}px, ${mouse.y * 14}px, 0)`,
            transition: "transform 800ms cubic-bezier(.2,.7,.2,1)",
            boxShadow: "0 0 18px rgba(185,74,53,0.55)",
          }}
        />
      </div>

      {/* Top status strip */}
      <div className="container-x relative z-10 flex items-center justify-between pt-24 font-mono text-[10px] tracking-[0.32em] text-[var(--color-ink-mute)] lg:pt-28">
        <span className="inline-flex items-center gap-2">
          <span className="rec-dot rec-dot-sm" />
          EST. FUKUOKA · 33.59°N
        </span>
        <span className="hidden tabular-nums sm:inline">DCT · VOL.026/SS</span>
        <span className="tabular-nums">{(scene + 1).toString().padStart(2, "0")} / 05</span>
      </div>

      {/* Stage */}
      <div className="container-x relative z-10 flex min-h-[82svh] flex-col items-center justify-center py-12 lg:min-h-[88svh] lg:py-20">
        <div
          className="relative w-full max-w-[1200px]"
          style={{
            transform: `translate3d(${mouse.x * -6}px, ${mouse.y * -6}px, 0)`,
            transition: "transform 600ms cubic-bezier(.2,.7,.2,1)",
          }}
        >
          {/* Scene 0: JP poetic copy */}
          <SceneWrap show={scene === 0}>
            <p className="text-center font-jp text-[clamp(28px,4.5vw,52px)] leading-[1.4] tracking-[0.06em] text-[var(--color-ink)]">
              <span className="fv-rise inline-block" style={{ animationDelay: "120ms" }}>
                チームの今を、
              </span>
              <br />
              <span className="fv-rise inline-block" style={{ animationDelay: "520ms" }}>
                一着に纏う。
              </span>
            </p>
          </SceneWrap>

          {/* Scene 1: EN stencil tower */}
          <SceneWrap show={scene === 1}>
            <h2 className="text-stencil text-center leading-[0.88] text-[var(--color-ink)]">
              <span className="fv-fade-in block text-[clamp(56px,11vw,156px)]" style={{ animationDelay: "60ms" }}>
                FULL <span className="text-[var(--color-madder)]">CUSTOM</span>
              </span>
              <span className="fv-fade-in block text-[clamp(56px,11vw,156px)]" style={{ animationDelay: "300ms" }}>
                TEAM WEAR
              </span>
            </h2>
          </SceneWrap>

          {/* Scene 2: brand mark zoom */}
          <SceneWrap show={scene === 2}>
            <div className="text-center">
              <span className="font-mono text-[10px] tracking-[0.4em] text-[var(--color-ink-mute)]">
                / DECONTRACTÉ
              </span>
              <h1 className="mt-4 text-stencil leading-[0.84] text-[var(--color-ink)]">
                <span className="fv-letter-spread block text-[clamp(48px,12vw,180px)]">
                  DCT
                </span>
              </h1>
              <div className="mt-3 flex items-center justify-center gap-3 font-mono text-[10px] tracking-[0.32em] text-[var(--color-ink-mute)]">
                <span className="block h-px w-7 bg-[var(--color-madder)]" aria-hidden />
                SUBLIMATION · FUKUOKA
                <span className="block h-px w-7 bg-[var(--color-madder)]" aria-hidden />
              </div>
            </div>
          </SceneWrap>

          {/* Scene 3+: hero CTA — final state */}
          <SceneWrap show={scene >= 3}>
            <div className="flex flex-col items-center text-center">
              <span className="font-mono text-[10px] tracking-[0.4em] text-[var(--color-ink-mute)]">
                FULL-CUSTOM TEAM WEAR · MADE IN FUKUOKA
              </span>
              <h1 className="mt-5 text-stencil leading-[0.88] text-[var(--color-ink)]">
                <span className={`block text-[clamp(56px,13vw,200px)] ${scene >= 4 ? "fv-breath" : "fv-letter-spread"}`}>
                  DÉCONTRACTÉ
                </span>
              </h1>

              <p
                className={`mt-7 max-w-2xl font-jp text-[clamp(13px,1.2vw,15px)] leading-[2] text-[var(--color-ink-dim)] transition-all duration-700 ${
                  scene >= 4 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                ロゴ、配色、ナンバー、ネーム ─ ぜんぶ自由。
                <br />
                昇華フルオーダーで、チームの&ldquo;今&rdquo;を一着に刻む。
                <br />
                最低 <span className="text-[var(--color-ink)] font-bold">5枚</span> から、追加は{" "}
                <span className="text-[var(--color-ink)] font-bold">1枚</span> でも。
              </p>

              <div
                className={`mt-10 flex flex-col items-stretch gap-3 transition-all delay-200 duration-700 sm:flex-row sm:items-center ${
                  scene >= 4 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                <Magnetic strength={0.22}>
                  <a
                    href="#price"
                    className="group inline-flex items-center justify-center gap-3 bg-[var(--color-ink)] px-7 py-5 font-mono text-[11px] tracking-[0.32em] text-[var(--color-paper-pure)] transition hover:bg-[var(--color-madder)]"
                  >
                    料金プランを見る
                    <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                  </a>
                </Magnetic>
                <Magnetic strength={0.18}>
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-3 border border-[var(--color-line-ink-strong)] px-7 py-5 font-mono text-[11px] tracking-[0.32em] text-[var(--color-ink)] transition hover:border-[var(--color-madder)] hover:bg-[var(--color-madder)] hover:text-[var(--color-paper-pure)]"
                  >
                    無料で見積もりを依頼
                    <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                  </a>
                </Magnetic>
              </div>
            </div>
          </SceneWrap>
        </div>
      </div>

      {/* Stats strip */}
      <div
        className={`container-x relative z-10 grid grid-cols-3 border-y border-[var(--color-line-ink-strong)] transition-opacity duration-700 ${
          scene >= 4 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Stat k="5+" label="MIN ORDER" />
        <Stat k="4–5w" label="LEAD TIME" sep />
        <Stat k="100%" label="SUBLIMATION" sep />
      </div>

      {/* Scroll cue */}
      <div className="container-x relative z-10 flex items-end justify-between pb-8 pt-10 font-mono text-[10px] tracking-[0.32em] text-[var(--color-ink-mute)]">
        <span className="inline-flex items-center gap-3">
          <span aria-hidden className="relative inline-block h-12 w-px overflow-hidden bg-[var(--color-line-ink-strong)]">
            <span className="scroll-cue absolute inset-0 bg-[var(--color-madder)]" />
          </span>
          SCROLL
        </span>
        <span>SOCCER · FUTSAL · SOCIETY</span>
      </div>

      {/* Bottom hazard accent */}
      <div className="hazard-strip-thin h-[3px] w-full" aria-hidden />

      {/* Scene progress dots — right side, only on PC */}
      <div className="pointer-events-none absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`block h-5 w-px transition-colors ${
              i <= scene ? "bg-[var(--color-madder)]" : "bg-[var(--color-line-ink-strong)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function SceneWrap({ show, children }: { show: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`flex flex-col items-center text-center transition-all duration-[800ms] ease-out ${
        show ? "opacity-100" : "pointer-events-none absolute inset-0 -translate-y-2 opacity-0"
      }`}
      aria-hidden={!show}
    >
      {children}
    </div>
  );
}

function Stat({ k, label, sep }: { k: string; label: string; sep?: boolean }) {
  return (
    <div
      className={`px-4 py-7 text-center ${sep ? "border-l border-[var(--color-line-ink-strong)]" : ""}`}
    >
      <div className="text-stencil text-[28px] leading-none text-[var(--color-ink)] lg:text-[40px]">
        {k}
      </div>
      <div className="mt-2 font-mono text-[9px] tracking-[0.32em] text-[var(--color-ink-mute)]">
        {label}
      </div>
    </div>
  );
}
