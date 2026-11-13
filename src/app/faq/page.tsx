import type { Metadata } from "next";
import { CtaBig, PageHero } from "@/components/a/Parts";
import { FaqList } from "@/components/a/FaqList";

export const metadata: Metadata = { title: "よくある質問", description: "注文枚数・デザイン・ロゴデータ・支払い・変更とキャンセル・交換と返品についての質問と答え。" };

export default function FaqPage() {
  return (
    <>
      <PageHero en="FAQ" jp="よくある質問" crumb="よくある質問" />
      <section className="sec on-paper">
        <div className="wrap">
          <FaqList />
        </div>
      </section>
      <CtaBig />
    </>
  );
}
