import type { Metadata } from "next";
import { CtaBig, PageHero, SectionHead } from "@/components/a/Parts";
import { FEES, MINIMUMS, OPTIONS, PRICES } from "@/lib/site";

export const metadata: Metadata = { title: "料金", description: "昇華ユニフォーム・ビブス・ソックスの料金、オプション、データ作成料、送料、お支払い、交換・返品について。" };

function Table({ rows, dark }: { rows: ReadonlyArray<{ name: string; price: string; unit: string }>; dark?: boolean }) {
  return (
    <table className={`ptable rv${dark ? " dark" : ""}`}>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name}><th>{r.name}</th><td className="p">{r.price}</td><td className="u">{r.unit}</td></tr>
        ))}
      </tbody>
    </table>
  );
}

export default function PricePage() {
  return (
    <>
      <PageHero en="PRICE" jp="料金" crumb="料金" />

      <section className="sec on-paper">
        <div className="wrap">
          <SectionHead en="UNIFORM" jp="ユニフォームの料金">
            <p className="d rv">型・配色・ロゴ・背番号は自由に決められます。ロゴなどのマーキングをいくつ入れても、金額は変わりません。</p>
          </SectionHead>
          <div className="pgrid">
            <Table rows={PRICES} />
            <figure className="pset rv" data-cur="VIEW">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/item_set.jpg" alt="上下セットの表と裏" loading="lazy" />
            </figure>
          </div>
          <p className="small rv" style={{ marginTop: 24 }}>デザインによっては、特殊デザイン料がかかる場合があります。</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead en="MINIMUM" jp="注文できる枚数" />
          <div className="nums">
            {MINIMUMS.map((m) => (
              <div key={m.k} className="rv"><p className="k">{m.k}</p><p className="v">{m.v}</p><p className="u">{m.u}</p></div>
            ))}
          </div>
          <p className="rv" style={{ marginTop: 48 }}>サイズはシャツ・パンツがS〜XL、ビブスがJr〜XLです。手縫いのため、±2cmほどの誤差があります。</p>
        </div>
      </section>

      <section className="sec on-paper">
        <div className="wrap">
          <div className="pgrid two">
            <div>
              <SectionHead en="OPTION" jp="オプション" />
              <Table rows={OPTIONS} />
            </div>
            <div>
              <SectionHead en="FEES" jp="そのほかの費用" />
              <Table rows={FEES} />
              <p className="small rv" style={{ marginTop: 16 }}>海外への発送もできますが、別途送料・手数料がかかる場合があります。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead en="PAYMENT" jp="お支払い・交換と返品" />
          <div className="pgrid two">
            <div className="rv">
              <h3 style={{ fontSize: 22, fontWeight: 900 }}>お支払い</h3>
              <p style={{ marginTop: 8 }}>銀行振込で、全額を一括でお支払いください。分割払いはできません。事務所で受け取る場合は、事前予約のうえ現金でもお支払いいただけます。請求書はメール(PDF)かFAXでお送りします。領収書が必要な場合は、発送前にお申し付けください。</p>
            </div>
            <div className="rv">
              <h3 style={{ fontSize: 22, fontWeight: 900 }}>交換・返品</h3>
              <p style={{ marginTop: 8 }}>不良品・誤配送は、到着から7日以内にご連絡ください。当社負担で交換または返金します。お客様都合の返品と、チーム名・背番号・名前を入れた商品の返品はお受けしていません。到着から1か月以内に出た不具合は無償で交換します(ソックス、激しく使ったGKシャツ・パンツ・ビブス、乾燥機による傷みなどは除きます)。</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBig />
    </>
  );
}
