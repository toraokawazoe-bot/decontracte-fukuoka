import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative bg-[var(--color-jet)] text-[var(--color-on-jet)]">
      {/* Top tech ticker */}
      <div
        className="container-x grid grid-cols-2 gap-px overflow-hidden border-b font-mono text-[9px] tracking-[0.32em] text-[var(--color-on-jet-mute)]"
        style={{ borderColor: "var(--color-line-soft)" }}
      >
        <div className="py-2.5">DCT—026/SS · MADE IN FUKUOKA</div>
        <div className="py-2.5 text-right">33.5902°N · 130.4017°E</div>
      </div>

      <div className="container-x py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="block size-2.5 rotate-45 bg-[var(--color-madder)] shadow-[0_0_18px_rgba(185,74,53,0.7)]" aria-hidden />
              <span className="text-stencil text-[28px] tracking-tight text-[var(--color-on-jet)] lg:text-[36px]">
                DÉCONTRACTÉ
              </span>
            </div>

            <p className="mt-7 max-w-sm font-jp text-[13px] leading-[1.95] text-[var(--color-on-jet-dim)]">
              福岡発の昇華フルオーダー チームウェア・メーカー。
              サッカー、フットサル、ソサイチを中心に、競技を選ばないチームのための1着を仕立てます。
            </p>

            <address className="mt-7 not-italic font-mono text-[10px] leading-relaxed tracking-[0.28em] text-[var(--color-on-jet-mute)]">
              〒810-0022 FUKUOKA, CHUO-KU,
              <br />
              YAKUIN 1-14-18 SHINKO BLDG 202
            </address>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Social label="LINE" href="https://line.me/" />
              <Social label="IG"   href="https://instagram.com/" />
              <Social label="MAIL" href="mailto:info@decontracte.co" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            <FooterCol
              title="SITE"
              items={[
                { href: "#why", label: "選ばれる理由" },
                { href: "#price", label: "料金" },
                { href: "#items", label: "アイテム" },
                { href: "#catalog", label: "デザインカタログ" },
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
      </div>

      <div className="hazard-strip-thin h-1.5 w-full" aria-hidden />

      <div className="container-x py-5">
        <div className="flex flex-col items-start justify-between gap-2 font-mono text-[10px] tracking-[0.28em] text-[var(--color-on-jet-mute)] sm:flex-row sm:items-center">
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
      <h4 className="font-mono text-[10px] tracking-[0.32em] text-[var(--color-on-jet-mute)]">/ {title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <Link
              href={i.href}
              className="font-jp text-[13px] text-[var(--color-on-jet)] transition hover:text-[var(--color-madder)]"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Social({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex h-10 items-center gap-2 border border-[var(--color-on-jet-quiet)] px-4 font-mono text-[10px] tracking-[0.32em] text-[var(--color-on-jet)] transition hover:border-[var(--color-madder)] hover:text-[var(--color-madder)]"
    >
      {label}
      <span aria-hidden>↗</span>
    </a>
  );
}
