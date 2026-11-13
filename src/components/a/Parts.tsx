import Link from "next/link";
import type { ReactNode } from "react";
import { LINE_URL } from "@/lib/site";

const WORDS = ["SUBLIMATION", "FULL ORDER", "SOCCER", "FUTSAL", "7-A-SIDE", "FROM 5 PCS"];

export function Ticker() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="tk" aria-hidden>
      <div>
        {row.map((w, i) => (
          <span key={i} style={{ display: "inline-flex", gap: 48 }}>
            <span>{w}</span>
            <i>●</i>
          </span>
        ))}
      </div>
    </div>
  );
}

export function SectionHead({ en, jp, children }: { en: string; jp: string; children?: ReactNode }) {
  return (
    <div className="sh">
      <div data-reveal>
        <p className="jp">{jp}</p>
        <h2 className="en" aria-label={jp}>
          <span className="ln"><span>{en}</span></span>
        </h2>
      </div>
      {children}
    </div>
  );
}

export function PageHero({ en, jp, crumb }: { en: string; jp: string; crumb: string }) {
  return (
    <section className="phero">
      <p className="ghost en" aria-hidden data-scroll="slideL">{en}</p>
      <div className="wrap">
        <p className="crumb"><Link href="/">TOP</Link> / {crumb}</p>
        <h1 className="en" aria-label={jp}>
          <span className="ln"><span>{en}</span></span>
        </h1>
        <p className="jp fade">{jp}</p>
      </div>
    </section>
  );
}

export function CtaBig() {
  return (
    <section className="cta-big" aria-label="見積もり依頼">
      <p className="en" aria-hidden data-scroll="slideR">LET&apos;S MAKE YOUR KIT</p>
      <div className="wrap row">
        <p>チーム名・競技・枚数・色のイメージを<br />送ってください。見積もりをお返しします。</p>
        <div className="btns">
          <Link className="btn btn-ink" href="/contact">見積もりを依頼する<span className="ar">→</span></Link>
          <a className="btn btn-ghost" href={LINE_URL} target="_blank" rel="noopener">LINEで相談する<span className="ar">↗</span></a>
        </div>
      </div>
    </section>
  );
}
