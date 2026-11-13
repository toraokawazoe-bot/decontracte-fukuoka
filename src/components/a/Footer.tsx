import Link from "next/link";
import { ADDRESS, INSTAGRAM_URL, LINE_URL, MAIL, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <p className="big en" aria-hidden data-scroll="slideL">FULL ORDER UNIFORMS</p>
        <div className="cols">
          <div>
            <h2>DÉCONTRACTÉ</h2>
            <p>サッカー・フットサル・ソサイチのチームユニフォーム フルオーダー</p>
            <p className="small" style={{ marginTop: 8 }}>{ADDRESS}</p>
          </div>
          <div>
            <h2>MENU</h2>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
              ))}
              <li><Link href="/contact">見積もり依頼</Link></li>
            </ul>
          </div>
          <div>
            <h2>CONTACT</h2>
            <ul>
              <li><a href={LINE_URL} target="_blank" rel="noopener">LINE</a></li>
              <li><a href={`mailto:${MAIL}`}>{MAIL}</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener">Instagram</a></li>
            </ul>
          </div>
        </div>
        <p className="copy"><span>© DÉCONTRACTÉ</span><span>FUKUOKA, JAPAN</span></p>
      </div>
      <div className="spbar">
        <Link href="/contact">見積もりを依頼する</Link>
        <a href={LINE_URL} target="_blank" rel="noopener">LINEで相談する</a>
      </div>
    </footer>
  );
}
