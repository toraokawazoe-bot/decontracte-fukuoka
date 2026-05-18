import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative bg-jet text-on-jet border-t" style={{ borderColor: "var(--color-line-soft)" }}>
      {/* Top tech ticker */}
      <div
        className="grid grid-cols-2 gap-px overflow-hidden border-b font-mono text-[9px] tracking-[0.32em] text-on-jet/55"
        style={{ borderColor: "var(--color-line-soft)" }}
      >
        <div className="bg-jet px-3 py-2.5">DCT—026/SS · MADE IN FUKUOKA</div>
        <div className="bg-jet px-3 py-2.5 text-right">33.5902°N · 130.4017°E</div>
      </div>

      <div className="px-5 py-14">
        <div className="flex items-center gap-2.5">
          <span className="block size-2.5 rotate-45 bg-madder shadow-[0_0_18px_rgba(185,74,53,0.7)]" aria-hidden />
          <span className="text-stencil text-2xl tracking-tight text-on-jet">
            DÉCONTRACTÉ
          </span>
        </div>

        <p className="mt-6 max-w-sm font-jp text-[13px] leading-relaxed text-on-jet/65">
          福岡発の昇華フルオーダー チームウェア・メーカー。
          サッカー、フットサル、ソサイチを中心に、競技を選ばないチームのための1着を仕立てます。
        </p>

        <address
          className="mt-7 not-italic font-mono text-[10px] leading-relaxed tracking-[0.28em] text-on-jet/55"
        >
          〒810-0022 FUKUOKA, CHUO-KU,
          <br />
          YAKUIN 1-14-18 SHINKO BLDG 202
        </address>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10">
          <FooterCol
            title="SITE"
            items={[
              { href: "#why", label: "選ばれる理由" },
              { href: "#items", label: "アイテム" },
              { href: "#catalog", label: "デザインカタログ" },
              { href: "#price", label: "料金" },
              { href: "#flow", label: "注文の流れ" },
              { href: "#works", label: "制作実績" },
              { href: "#faq", label: "Q&A" },
            ]}
          />
          <FooterCol
            title="POLICY"
            items={[
              { href: "#", label: "COMPANY" },
              { href: "#", label: "特定商取引法" },
              { href: "#", label: "PRIVACY" },
              { href: "#", label: "TERMS" },
            ]}
          />
          <FooterCol
            title="CONNECT"
            items={[
              { href: "https://line.me/", label: "LINE" },
              { href: "https://instagram.com/", label: "Instagram" },
              { href: "mailto:info@decontracte.co", label: "Email" },
              { href: "#contact", label: "見積もり" },
            ]}
          />
          <FooterCol
            title="LOCATION"
            items={[
              { href: "https://maps.google.com/", label: "福岡 / 薬院" },
              { href: "#", label: "アクセス" },
            ]}
          />
        </div>
      </div>

      {/* Hazard rule */}
      <div className="hazard-strip-thin h-1.5 w-full" aria-hidden />

      <div className="bg-jet-2">
        <div className="flex flex-col items-start justify-between gap-2 px-5 py-5 font-mono text-[10px] tracking-[0.28em] text-on-jet/40">
          <span>© {new Date().getFullYear()} DÉCONTRACTÉ. ALL RIGHTS RESERVED.</span>
          <span>MADE IN FUKUOKA — JAPAN · VOL.026</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="font-mono text-[10px] tracking-[0.32em] text-on-jet/45">/ {title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <Link
              href={i.href}
              className="font-jp text-[13px] text-on-jet/85 transition hover:text-madder"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
