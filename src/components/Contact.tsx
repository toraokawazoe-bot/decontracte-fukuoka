import { SectionBg } from "./motion/SectionBg";

const LINE_URL = "https://lpo8bfj3.autosns.app/addfriend/s/UZQRqrdzlc/@uyn8037j";
const INSTAGRAM_URL = "https://www.instagram.com/decontracte_team_order/";

export function Contact() {
  return (
    <section id="contact" className="stack-section stack-bottom relative overflow-hidden bg-black text-white">
      <SectionBg word="INQUIRY" dark rotate="right" />
      <div className="container-x relative z-10 py-28 lg:py-48">
        <header className="border-b border-white/60 pb-6 lg:pb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-white/70">
            08 / CONTACT
          </p>
          <h2
            className="v-mask mt-5 font-display leading-[1.02] text-white"
            style={{
              fontStyle: "italic",
              fontWeight: 500,
              letterSpacing: "-0.005em",
              fontSize: "clamp(44px, 7vw, 124px)",
            }}
          >
            Inquiry.
          </h2>
          <p className="font-jp-serif mt-5 text-[16px] font-medium leading-[1.7] text-white lg:text-[19px]">
            お見積もり。
          </p>
          <p className="mt-4 max-w-xl font-jp text-[13px] font-medium leading-[1.95] text-white/65 lg:text-[14px]">
            ざっくりでも大丈夫。叩き台はこちらで作ります。まずは LINE で。
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr]">
          <div className="border-b border-white py-10 pr-0 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-between gap-4 border-2 border-white bg-[var(--color-line-brand)] px-6 py-6 text-white transition hover:bg-white hover:text-[var(--color-line-brand-deep)]"
            >
              <span className="flex items-center gap-4">
                <LineLogo />
                <span>
                  <span className="block font-jp text-[17px] font-bold leading-none lg:text-[20px]">
                    LINE で見積もり
                  </span>
                  <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.42em] opacity-80">
                    @decontracte
                  </span>
                </span>
              </span>
              <span aria-hidden className="text-xl transition group-hover:translate-x-1">
                →
              </span>
            </a>

            <ul className="mt-10 border-t border-white">
              <ContactRow k="MAIL" v="info@decontracte.co" href="mailto:info@decontracte.co" />
              <ContactRow k="IG" v="@decontracte_team_order" href={INSTAGRAM_URL} />
              <ContactRow
                k="OFFICE"
                v="福岡市中央区薬院 1-14-18 信興ビル 202"
                href="https://maps.google.com/?q=福岡市中央区薬院1-14-18"
              />
            </ul>
          </div>

          <div className="py-10 lg:py-12 lg:pl-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/70">
              ORDER FORM
            </p>

            <form className="mt-6 grid grid-cols-1">
              <Field label="チーム名" required>
                <input
                  type="text"
                  placeholder="MIGHTY FC"
                  className="w-full border-0 bg-transparent px-0 py-4 font-jp text-[16px] font-medium text-white placeholder:text-white/30 focus:outline-none"
                />
              </Field>
              <Field label="お名前" required>
                <input
                  type="text"
                  placeholder="山田 太郎"
                  className="w-full border-0 bg-transparent px-0 py-4 font-jp text-[16px] font-medium text-white placeholder:text-white/30 focus:outline-none"
                />
              </Field>
              <Field label="メール" required>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border-0 bg-transparent px-0 py-4 font-jp text-[16px] font-medium text-white placeholder:text-white/30 focus:outline-none"
                />
              </Field>
              <Field label="競技">
                <select
                  defaultValue=""
                  className="w-full appearance-none border-0 bg-transparent px-0 py-4 font-jp text-[16px] font-medium text-white focus:outline-none"
                >
                  <option value="" disabled className="bg-black">
                    選択してください
                  </option>
                  <option className="bg-black">サッカー</option>
                  <option className="bg-black">フットサル</option>
                  <option className="bg-black">ソサイチ</option>
                  <option className="bg-black">その他</option>
                </select>
              </Field>
              <Field label="希望枚数">
                <input
                  type="number"
                  min={1}
                  placeholder="10"
                  className="w-full border-0 bg-transparent px-0 py-4 font-jp text-[16px] font-medium text-white placeholder:text-white/30 focus:outline-none"
                />
              </Field>
              <Field label="ご要望">
                <textarea
                  rows={5}
                  placeholder="カラーイメージ、参考デザイン、納期希望など自由に。"
                  className="w-full resize-none border-0 bg-transparent px-0 py-4 font-jp text-[16px] font-medium text-white placeholder:text-white/30 focus:outline-none"
                />
              </Field>

              <button
                type="button"
                className="group mt-8 flex w-full items-center justify-between gap-4 border-2 border-white bg-white px-6 py-5 font-jp text-[14px] font-bold tracking-[0.04em] text-black transition hover:bg-black hover:text-white"
              >
                <span>見積もりを依頼する</span>
                <span aria-hidden className="transition group-hover:translate-x-1">
                  →
                </span>
              </button>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.4em] text-white/60">
                ※ 原則 1 営業日以内に返信
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block border-b border-white/40 py-2">
      <div className="flex items-center justify-between pb-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/65">
          {label}
        </span>
        {required ? (
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white">
            REQ
          </span>
        ) : null}
      </div>
      {children}
    </label>
  );
}

function ContactRow({ k, v, href }: { k: string; v: string; href: string }) {
  return (
    <li className="border-b border-white">
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group flex items-center justify-between gap-4 py-5"
      >
        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/65">
            {k}
          </span>
          <span className="font-jp text-[15px] font-bold text-white lg:text-[16px]">
            {v}
          </span>
        </div>
        <span
          aria-hidden
          className="text-white/65 transition group-hover:translate-x-1 group-hover:text-white"
        >
          →
        </span>
      </a>
    </li>
  );
}

function LineLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 36 36" fill="none" aria-hidden className="shrink-0">
      <rect width="36" height="36" fill="#fff" />
      <path
        d="M18 8c-6.075 0-11 3.86-11 8.625 0 4.275 3.911 7.86 9.196 8.523.358.077.846.236.97.541.111.275.072.706.036.984l-.157.945c-.048.279-.222 1.094.957.597 1.18-.497 6.36-3.747 8.677-6.418C28.273 19.85 29 18.31 29 16.625 29 11.86 24.075 8 18 8Z"
        fill="#06C755"
      />
    </svg>
  );
}
