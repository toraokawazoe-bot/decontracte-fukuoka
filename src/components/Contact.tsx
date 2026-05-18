import { Magnetic } from "./motion/Magnetic";
import { Reveal } from "./Reveal";

const LINE_URL = "https://lpo8bfj3.autosns.app/addfriend/s/UZQRqrdzlc/@uyn8037j";
const INSTAGRAM_URL = "https://www.instagram.com/decontracte_team_order/";

export function Contact() {
  return (
    <section id="contact" className="stack-section stack-bottom relative overflow-hidden surface-jet">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="orbit-conic absolute -inset-[50%] opacity-30"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(6,199,85,0.30) 60deg, transparent 140deg, transparent 360deg)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 60% at 90% 0%, rgba(185,74,53,0.25) 0%, transparent 60%)," +
              "radial-gradient(80% 60% at 0% 100%, rgba(230,184,0,0.12) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="container-x section-y relative">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <h2 className="text-stencil text-[clamp(48px,7vw,108px)] leading-[0.88] text-[var(--color-paper-pure)]">
                GET A
                <br />
                <span className="text-[var(--color-madder-hi)]">QUOTE.</span>
              </h2>
              <p className="mt-7 max-w-md font-jp text-[15px] font-medium leading-[1.95] text-[var(--color-paper-pure)]/85">
                ざっくりした要望で構いません。デザイナーが叩き台を作って、何度でも調整します。
                <br />
                まずは LINE でお気軽にどうぞ。
              </p>

              <Magnetic strength={0.18}>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-10 flex w-full items-center justify-between gap-4 rounded-full bg-[var(--color-line-brand)] px-7 py-6 text-[var(--color-paper-pure)] shadow-[0_18px_36px_-10px_rgba(6,199,85,0.55)] transition hover:bg-[var(--color-line-brand-deep)]"
                >
                  <span className="flex items-center gap-4">
                    <LineLogo />
                    <span>
                      <span className="block font-jp text-[20px] font-bold leading-none lg:text-[24px]">
                        LINE で見積もり
                      </span>
                      <span className="mt-1.5 block font-jp text-[12px] font-medium tracking-[0.08em] opacity-85">
                        @decontracte · スマホひとつで完結
                      </span>
                    </span>
                  </span>
                  <span aria-hidden className="text-xl transition group-hover:translate-x-1">→</span>
                </a>
              </Magnetic>

              <ul className="mt-10 border-y border-white/15">
                <ContactRow k="MAIL" v="info@decontracte.co" href="mailto:info@decontracte.co" />
                <ContactRow k="INSTAGRAM" v="@decontracte_team_order" href={INSTAGRAM_URL} />
                <ContactRow k="OFFICE" v="福岡市中央区薬院 1-14-18 信興ビル 202" href="https://maps.google.com/?q=福岡市中央区薬院1-14-18" />
              </ul>
            </div>

            <div>
              <p className="font-jp text-[13px] font-bold tracking-[0.16em] text-[var(--color-paper-pure)]/65">
                オーダーフォーム
              </p>

              <form className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/15 bg-white/10">
                <Field label="チーム名" required>
                  <input
                    type="text"
                    placeholder="MIGHTY FC"
                    className="w-full bg-[var(--color-jet-2)] px-4 py-4 text-[15px] font-medium text-[var(--color-paper-pure)] placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[var(--color-madder)]"
                  />
                </Field>
                <Field label="お名前" required>
                  <input
                    type="text"
                    placeholder="山田 太郎"
                    className="w-full bg-[var(--color-jet-2)] px-4 py-4 text-[15px] font-medium text-[var(--color-paper-pure)] placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[var(--color-madder)]"
                  />
                </Field>
                <Field label="メール" required>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-[var(--color-jet-2)] px-4 py-4 text-[15px] font-medium text-[var(--color-paper-pure)] placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[var(--color-madder)]"
                  />
                </Field>
                <Field label="競技">
                  <select
                    defaultValue=""
                    className="w-full appearance-none bg-[var(--color-jet-2)] px-4 py-4 text-[15px] font-medium text-[var(--color-paper-pure)] focus:outline-none focus:ring-1 focus:ring-[var(--color-madder)]"
                  >
                    <option value="" disabled>選択してください</option>
                    <option>サッカー</option>
                    <option>フットサル</option>
                    <option>ソサイチ</option>
                    <option>その他</option>
                  </select>
                </Field>
                <Field label="希望枚数">
                  <input
                    type="number"
                    min={1}
                    placeholder="10"
                    className="w-full bg-[var(--color-jet-2)] px-4 py-4 text-[15px] font-medium text-[var(--color-paper-pure)] placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[var(--color-madder)]"
                  />
                </Field>
                <Field label="ご要望">
                  <textarea
                    rows={6}
                    placeholder="カラーイメージ、参考デザイン、納期希望など自由に。"
                    className="w-full resize-none bg-[var(--color-jet-2)] px-4 py-4 text-[15px] font-medium text-[var(--color-paper-pure)] placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[var(--color-madder)]"
                  />
                </Field>
                <div className="bg-[var(--color-jet-2)] px-4 py-5">
                  <Magnetic strength={0.16}>
                    <button
                      type="button"
                      className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[var(--color-madder)] px-5 py-5 font-jp text-[14px] font-bold tracking-[0.08em] text-[var(--color-paper-pure)] shadow-[0_18px_36px_-12px_rgba(185,74,53,0.6)] transition hover:bg-[var(--color-madder-deep)]"
                    >
                      見積もりを依頼する
                      <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                    </button>
                  </Magnetic>
                  <p className="mt-3 text-center font-jp text-[12px] font-medium text-white/65">
                    原則 1 営業日以内にお返事します
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
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
    <label className="block bg-[var(--color-jet-2)]">
      <div className="flex items-center justify-between border-b border-white/15 px-4 pt-3 pb-2">
        <span className="font-jp text-[12px] font-bold tracking-[0.12em] text-white/70">
          {label}
        </span>
        {required ? (
          <span className="font-jp text-[11px] font-bold tracking-[0.1em] text-[var(--color-madder-hi)]">
            必須
          </span>
        ) : null}
      </div>
      {children}
    </label>
  );
}

function ContactRow({ k, v, href }: { k: string; v: string; href: string }) {
  return (
    <li className="border-b border-white/15 last:border-b-0">
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex items-center justify-between gap-4 py-5">
        <div className="flex items-center gap-5">
          <span className="font-jp text-[12px] font-bold tracking-[0.16em] text-white/55">
            {k}
          </span>
          <span className="font-jp text-[15px] font-bold tracking-tight text-[var(--color-paper-pure)] transition group-hover:text-[var(--color-madder-hi)] lg:text-[16px]">
            {v}
          </span>
        </div>
        <span
          aria-hidden
          className="text-white/55 transition group-hover:translate-x-1 group-hover:text-[var(--color-madder-hi)]"
        >
          →
        </span>
      </a>
    </li>
  );
}

function LineLogo() {
  return (
    <svg width="44" height="44" viewBox="0 0 36 36" fill="none" aria-hidden className="shrink-0">
      <rect width="36" height="36" rx="8" fill="#fff" />
      <path
        d="M18 8c-6.075 0-11 3.86-11 8.625 0 4.275 3.911 7.86 9.196 8.523.358.077.846.236.97.541.111.275.072.706.036.984l-.157.945c-.048.279-.222 1.094.957.597 1.18-.497 6.36-3.747 8.677-6.418C28.273 19.85 29 18.31 29 16.625 29 11.86 24.075 8 18 8Z"
        fill="#06C755"
      />
    </svg>
  );
}
