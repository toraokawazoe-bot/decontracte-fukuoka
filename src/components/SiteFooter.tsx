import Image from "next/image";
import Link from "next/link";

const LINE_URL = "https://lpo8bfj3.autosns.app/addfriend/s/UZQRqrdzlc/@uyn8037j";
const INSTAGRAM_URL = "https://www.instagram.com/decontracte_team_order/";

export function SiteFooter() {
  return (
    <footer className="relative bg-[var(--color-jet)] text-[var(--color-paper-pure)]">
      <div className="container-x py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
          <div>
            <Image
              src="/img/logo_white.svg"
              alt="DÉCONTRACTÉ"
              width={188}
              height={40}
              className="h-8 w-auto lg:h-10"
            />
            <p className="mt-7 max-w-sm font-jp text-[14px] font-medium leading-[1.95] text-[var(--color-paper-pure)]/80">
              福岡発の昇華フルオーダー チームウェア・メーカー。
              <br />
              サッカー・フットサル・ソサイチを中心に、競技を選ばないチームのための 1 着を仕立てます。
            </p>

            <address className="mt-7 not-italic font-jp text-[13px] font-medium leading-relaxed text-[var(--color-paper-pure)]/75">
              〒810-0022
              <br />
              福岡市中央区薬院 1-14-18 信興ビル 202
            </address>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Social label="LINE" href={LINE_URL} />
              <Social label="Instagram" href={INSTAGRAM_URL} />
              <Social label="Mail" href="mailto:info@decontracte.co" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3">
            <FooterCol
              title="サイト"
              items={[
                { href: "#why", label: "選ばれる理由" },
                { href: "#items", label: "アイテム" },
                { href: "#price", label: "料金" },
                { href: "#flow", label: "注文の流れ" },
                { href: "#works", label: "制作実績" },
                { href: "#faq", label: "Q&A" },
              ]}
            />
            <FooterCol
              title="ポリシー"
              items={[
                { href: "#", label: "会社概要" },
                { href: "#", label: "特定商取引法" },
                { href: "#", label: "プライバシー" },
                { href: "#", label: "ご利用規約" },
              ]}
            />
            <FooterCol
              title="お問い合わせ"
              items={[
                { href: LINE_URL, label: "LINE" },
                { href: INSTAGRAM_URL, label: "Instagram" },
                { href: "mailto:info@decontracte.co", label: "メール" },
                { href: "#contact", label: "見積もりフォーム" },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="container-x border-t border-white/15 py-5">
        <div className="flex flex-col items-start justify-between gap-2 font-jp text-[12px] font-medium text-[var(--color-paper-pure)]/55 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} DÉCONTRACTÉ. All Rights Reserved.</span>
          <span>Made in Fukuoka, Japan</span>
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
      <h4 className="font-jp text-[12px] font-bold tracking-[0.12em] text-[var(--color-paper-pure)]/60">{title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <Link
              href={i.href}
              target={i.href.startsWith("http") ? "_blank" : undefined}
              rel={i.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-jp text-[14px] font-medium text-[var(--color-paper-pure)] transition hover:text-[var(--color-madder-hi)]"
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
      className="inline-flex h-10 items-center gap-2 border border-white/30 px-4 font-jp text-[12px] font-bold tracking-[0.08em] text-[var(--color-paper-pure)] transition hover:border-[var(--color-madder-hi)] hover:text-[var(--color-madder-hi)]"
    >
      {label}
      <span aria-hidden>↗</span>
    </a>
  );
}
