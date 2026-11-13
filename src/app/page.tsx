import Link from "next/link";
import { CtaBig, SectionHead, Ticker } from "@/components/a/Parts";
import { FaqList } from "@/components/a/FaqList";
import { FLOW, ITEMS, LINE_URL, MINIMUMS, PRICES } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero" data-cur="PLAY">
        <div className="ph" data-scroll="zoom">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/first_view.jpg" alt="DÉCONTRACTÉのユニフォームを着てボールを争う選手" fetchPriority="high" />
        </div>
        <p className="side">FUKUOKA, JAPAN</p>
        <h1 className="en">
          <span className="ln"><span>FULL ORDER</span></span>
          <span className="ln"><span>UNIFORMS</span></span>
          <span className="sr">福岡のチームユニフォーム フルオーダー DÉCONTRACTÉ</span>
        </h1>
        <div className="bar fade">
          <p className="lead">
            サッカー・フットサル・ソサイチの<br />
            チームユニフォームを、<span className="nb">フルオーダーで。</span>
            <small>初回5枚から／追加1枚から／福岡・薬院</small>
          </p>
          <div className="ctas">
            <Link className="btn btn-signal" href="/contact">見積もりを依頼する<span className="ar">→</span></Link>
          </div>
        </div>
      </section>

      <Ticker />

      <section className="sec on-paper items" id="items">
        <div className="wrap">
          <SectionHead en="WHAT WE MAKE" jp="作れるもの">
            <p className="d rv">型・配色・ロゴ・背番号まで、チームに合わせて昇華プリントで作ります。</p>
          </SectionHead>
          {ITEMS.map((it, i) => (
            <div className="row" key={it.en}>
              <div>
                <p className="num">0{i + 1}</p>
                <p className="big en" aria-hidden data-scroll={i % 2 ? "slideL" : "slideR"}>{it.en}</p>
                <h3>{it.name}</h3>
                <p className="note">{it.note}</p>
                <p className="from">{it.from}</p>
              </div>
              <div className="pic rv" data-cur="VIEW">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.img} alt={it.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead en="FROM 5 PCS" jp="注文できる枚数" />
          <div className="nums">
            {MINIMUMS.map((m) => (
              <div key={m.k} className="rv">
                <p className="k">{m.k}</p>
                <p className="v">{m.v}</p>
                <p className="u">{m.u}</p>
              </div>
            ))}
          </div>
          <p className="rv" style={{ marginTop: 48 }}>
            メンバーが増えたときも、1枚から追加できます。
          </p>
        </div>
      </section>

      <section className="sec on-paper">
        <div className="wrap">
          <SectionHead en="PRICE" jp="料金">
            <Link className="more rv" href="/price">料金をすべて見る<span className="ar">→</span></Link>
          </SectionHead>
          <div className="pgrid">
            <table className="ptable rv">
              <tbody>
                {PRICES.map((r) => (
                  <tr key={r.name}><th>{r.name}</th><td className="p">{r.price}</td><td className="u">{r.unit}</td></tr>
                ))}
              </tbody>
            </table>
            <div className="notes small rv">
              <p>ロゴなどのマーキングをいくつ入れても、金額は変わりません。</p>
              <p>ロゴはIllustrator(Ai)データで入稿してください。他の形式はデータ作成料(1データ11,000円)がかかります。</p>
              <p>GK用パッド・リブレット衿などのオプションは料金ページへ。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead en="ORDER FLOW" jp="注文の流れ">
            <Link className="more rv" href="/flow">流れを詳しく見る<span className="ar">→</span></Link>
          </SectionHead>
          <ol className="flow">
            {FLOW.map((f, i) => (
              <li key={f.en} className="rv">
                <p className="n">{String(i + 1).padStart(2, "0")}</p>
                <p className="e">{f.en}</p>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec on-paper">
        <div className="wrap">
          <SectionHead en="WORKS" jp="制作例">
            <a className="more rv" href="https://www.instagram.com/decontracte_team_order/" target="_blank" rel="noopener">Instagramで制作例を見る<span className="ar">↗</span></a>
          </SectionHead>
          <div className="works">
            <figure className="w1 rv" data-cur="VIEW">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/work_bibs_rev.jpg" alt="リバーシブルビブスの2色" loading="lazy" />
              <figcaption>REVERSIBLE BIBS</figcaption>
            </figure>
            <figure className="w2 rv" data-cur="VIEW">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/team_order_01.png" alt="昇華プリントの生地を拡大した写真" loading="lazy" style={{ objectFit: "cover" }} />
              <figcaption>SUBLIMATED FABRIC</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="sec on-paper" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead en="FAQ" jp="よくある質問">
            <Link className="more rv" href="/faq">すべての質問を見る<span className="ar">→</span></Link>
          </SectionHead>
          <FaqList limit={5} />
          <p className="rv" style={{ marginTop: 24 }}>
            <a className="more" href={LINE_URL} target="_blank" rel="noopener">ほかの質問はLINEで<span className="ar">↗</span></a>
          </p>
        </div>
      </section>

      <CtaBig />
    </>
  );
}
