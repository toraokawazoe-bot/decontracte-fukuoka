import type { Metadata } from "next";
import { CtaBig, PageHero, SectionHead } from "@/components/a/Parts";
import { FLOW } from "@/lib/site";

export const metadata: Metadata = { title: "注文の流れ", description: "見積もり依頼から納品まで、6つのステップ。ご注文から約4〜5週間でお届けします。" };

export default function FlowPage() {
  return (
    <>
      <PageHero en="FLOW" jp="注文の流れ" crumb="注文の流れ" />
      <section className="sec">
        <div className="wrap">
          <SectionHead en="6 STEPS" jp="見積もりから納品まで">
            <p className="d rv">ご注文から納品まで、約4〜5週間です。</p>
          </SectionHead>
          <ol className="steps">
            {FLOW.map((f, i) => (
              <li key={f.en} className="rv">
                <p className="n en">{String(i + 1).padStart(2, "0")}</p>
                <div>
                  <p className="e">{f.en}</p>
                  <h2>{f.t}</h2>
                  <p style={{ marginTop: 8 }}>{f.d}</p>
                </div>
                <div className="pic" data-cur={f.en}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.img} alt="" loading="lazy" />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="sec on-paper">
        <div className="wrap">
          <SectionHead en="DATA" jp="ロゴのデータについて" />
          <div className="pgrid two">
            <p className="rv">エンブレムやロゴは、Illustrator(Ai)のデータでお送りください。JPGなど他の形式の場合は、データ作成料(1データ11,000円)がかかります。</p>
            <p className="rv">デザインのイメージ図はイラストのため、仕上がりと多少違って見えることがあります。使いたい書体があれば名前をお知らせください。分からない場合は近い書体をご提案します。</p>
          </div>
        </div>
      </section>
      <CtaBig />
    </>
  );
}
