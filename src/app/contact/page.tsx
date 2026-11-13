import type { Metadata } from "next";
import { PageHero, SectionHead } from "@/components/a/Parts";
import { ADDRESS, LINE_URL, MAIL } from "@/lib/site";

export const metadata: Metadata = { title: "見積もり依頼", description: "LINEかメールで見積もりを依頼できます。チーム名・競技・枚数・色のイメージをお送りください。" };

const TEMPLATE = `チーム名:
ご担当者名:
競技(サッカー/フットサル/ソサイチ/その他):
作りたいもの(ユニフォーム上下/シャツ/パンツ/ビブス/ソックス):
枚数:
色・デザインのイメージ:
ロゴデータの有無(Ai/その他/なし):
希望の時期:`;

export default function ContactPage() {
  const mailto = `mailto:${MAIL}?subject=${encodeURIComponent("見積もり依頼")}&body=${encodeURIComponent(TEMPLATE)}`;
  return (
    <>
      <PageHero en="CONTACT" jp="見積もり依頼" crumb="見積もり依頼" />
      <section className="sec on-paper">
        <div className="wrap">
          <SectionHead en="2 WAYS" jp="LINEかメールで">
            <p className="d rv">下の項目を送ってください。見積もりをお返しします。分からない項目は空欄で大丈夫です。</p>
          </SectionHead>
          <div className="ways">
            <div className="way is-line rv">
              <p className="en">LINE</p>
              <p>友だち追加して、項目をトークで送ってください。画像も送れます。</p>
              <a className="btn btn-line" href={LINE_URL} target="_blank" rel="noopener">LINEで友だち追加<span className="ar">↗</span></a>
            </div>
            <div className="way rv">
              <p className="en">MAIL</p>
              <p>{MAIL} 宛に送ってください。下のボタンで、項目を入れたメールが開きます。携帯キャリアのアドレスは届かないことがあるため、パソコンのアドレスがおすすめです。</p>
              <a className="btn btn-ghost" href={mailto}>メールで依頼する<span className="ar">→</span></a>
            </div>
          </div>
          <div style={{ marginTop: 48 }} className="rv">
            <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 16 }}>送ってほしい項目</h3>
            <pre className="tpl">{TEMPLATE}</pre>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <SectionHead en="OFFICE" jp="事務所での打ち合わせ" />
          <p className="rv">予約をいただければ、事務所で打ち合わせやサンプルの確認ができます。受け取りと現金でのお支払いもできます。</p>
          <p className="rv" style={{ marginTop: 16, fontWeight: 700 }}>{ADDRESS}</p>
        </div>
      </section>
    </>
  );
}
