import { Magnetic } from "./motion/Magnetic";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="stack-section stack-bottom relative overflow-hidden surface-paper-pure">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="orbit-conic absolute -inset-[50%] opacity-25"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(6,199,85,0.18) 60deg, transparent 140deg, transparent 360deg)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 60% at 90% 0%, rgba(185,74,53,0.10) 0%, transparent 60%)," +
              "radial-gradient(80% 60% at 0% 100%, rgba(230,184,0,0.10) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="container-x section-y relative">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <span className="eyebrow">/ 08 — CONTACT</span>
              <h2 className="mt-6 text-stencil text-[clamp(48px,7vw,108px)] leading-[0.88] text-[var(--color-ink)]">
                GET A
                <br />
                <span className="text-[var(--color-madder)]">QUOTE.</span>
              </h2>
              <p className="mt-7 max-w-md font-jp text-[14px] leading-[1.95] text-[var(--color-ink-dim)]">
                ざっくりした要望で OK。デザイナーが叩き台を作って、何度でも調整します。
                <br />
                まずは LINE で気軽にどうぞ。
              </p>

              {/* LINE Primary CTA — huge */}
              <Magnetic strength={0.18}>
                <a
                  href="https://line.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-10 flex w-full items-center justify-between gap-4 rounded-full bg-[var(--color-line-brand)] px-6 py-5 text-[var(--color-paper-pure)] shadow-[0_18px_36px_-10px_rgba(6,199,85,0.45)] transition hover:bg-[var(--color-line-brand-deep)]"
                >
                  <span className="flex items-center gap-4">
                    <LineLogo />
                    <span>
                      <span className="block text-stencil text-[20px] leading-none lg:text-[24px]">
                        LINE で見積もり
                      </span>
                      <span className="mt-1 block font-mono text-[10px] tracking-[0.32em] opacity-80">
                        @decontracte · スマホひとつで完結
                      </span>
                    </span>
                  </span>
                  <span aria-hidden className="text-xl transition group-hover:translate-x-1">→</span>
                </a>
              </Magnetic>

              {/* Contact channels */}
              <ul className="mt-10 border-y border-[var(--color-line-ink-strong)]">
                <ContactRow k="MAIL"      v="info@decontracte.co" href="mailto:info@decontracte.co" />
                <ContactRow k="INSTAGRAM" v="@decontracte"        href="https://instagram.com/" />
                <ContactRow k="OFFICE"    v="福岡市中央区薬院 1-14-18 信興ビル 202" href="https://maps.google.com/" />
              </ul>
            </div>

            {/* Form (secondary) */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.32em] text-[var(--color-ink-mute)]">
                / OR — SEND A FORM
              </p>

              <form
                className="mt-5 grid grid-cols-1 gap-px overflow-hidden border border-[var(--color-line-ink-strong)] bg-[var(--color-line-ink-strong)]"
              >
                <Field label="チーム名 / TEAM" required>
                  <input
                    type="text"
                    placeholder="MIGHTY FC"
                    className="w-full bg-[var(--color-paper-pure)] px-4 py-4 text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-mute)] focus:outline-none focus:ring-1 focus:ring-[var(--color-madder)]"
                  />
                </Field>
                <Field label="お名前 / NAME" required>
                  <input
                    type="text"
                    placeholder="山田 太郎"
                    className="w-full bg-[var(--color-paper-pure)] px-4 py-4 text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-mute)] focus:outline-none focus:ring-1 focus:ring-[var(--color-madder)]"
                  />
                </Field>
                <Field label="メール / EMAIL" required>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-[var(--color-paper-pure)] px-4 py-4 text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-mute)] focus:outline-none focus:ring-1 focus:ring-[var(--color-madder)]"
                  />
                </Field>
                <Field label="競技 / SPORT">
                  <select
                    defaultValue=""
                    className="w-full appearance-none bg-[var(--color-paper-pure)] px-4 py-4 text-[14px] text-[var(--color-ink)] focus:outline-none focus:ring-1 focus:ring-[var(--color-madder)]"
                  >
                    <option value="" disabled>選択してください</option>
                    <option>サッカー</option>
                    <option>フットサル</option>
                    <option>ソサイチ</option>
                    <option>その他</option>
                  </select>
                </Field>
                <Field label="希望枚数 / QTY">
                  <input
                    type="number"
                    min={1}
                    placeholder="10"
                    className="w-full bg-[var(--color-paper-pure)] px-4 py-4 text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-mute)] focus:outline-none focus:ring-1 focus:ring-[var(--color-madder)]"
                  />
                </Field>
                <Field label="ご要望 / MESSAGE">
                  <textarea
                    rows={6}
                    placeholder="カラーイメージ、参考デザイン、納期希望など自由に。"
                    className="w-full resize-none bg-[var(--color-paper-pure)] px-4 py-4 text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-mute)] focus:outline-none focus:ring-1 focus:ring-[var(--color-madder)]"
                  />
                </Field>
                <div className="bg-[var(--color-paper-pure)] px-4 py-5">
                  <Magnetic strength={0.16}>
                    <button
                      type="button"
                      className="group flex w-full items-center justify-center gap-3 bg-[var(--color-ink)] px-5 py-5 font-mono text-[11px] tracking-[0.32em] text-[var(--color-paper-pure)] transition hover:bg-[var(--color-madder)]"
                    >
                      SEND REQUEST
                      <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                    </button>
                  </Magnetic>
                  <p className="mt-3 text-center font-mono text-[10px] tracking-[0.32em] text-[var(--color-ink-mute)]">
                    原則 1 営業日以内に返信します
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
    <label className="block bg-[var(--color-paper-pure)]">
      <div className="flex items-center justify-between border-b border-[var(--color-line-ink-strong)] px-4 pt-3 pb-2">
        <span className="font-mono text-[10px] tracking-[0.32em] text-[var(--color-ink-mute)]">
          {label}
        </span>
        {required ? (
          <span className="font-mono text-[10px] tracking-[0.32em] text-[var(--color-madder)]">
            REQUIRED
          </span>
        ) : null}
      </div>
      {children}
    </label>
  );
}

function ContactRow({ k, v, href }: { k: string; v: string; href: string }) {
  return (
    <li className="border-b border-[var(--color-line-ink-strong)] last:border-b-0">
      <a href={href} className="group flex items-center justify-between gap-4 py-5">
        <div className="flex items-center gap-5">
          <span className="font-mono text-[10px] tracking-[0.32em] text-[var(--color-ink-mute)]">
            / {k}
          </span>
          <span className="text-stencil text-[16px] tracking-tight text-[var(--color-ink)] transition group-hover:text-[var(--color-madder)]">
            {v}
          </span>
        </div>
        <span
          aria-hidden
          className="font-mono text-[var(--color-ink-mute)] transition group-hover:translate-x-1 group-hover:text-[var(--color-madder)]"
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
      <rect width="36" height="36" rx="8" fill="#fff" />
      <path
        d="M18 8c-6.075 0-11 3.86-11 8.625 0 4.275 3.911 7.86 9.196 8.523.358.077.846.236.97.541.111.275.072.706.036.984l-.157.945c-.048.279-.222 1.094.957.597 1.18-.497 6.36-3.747 8.677-6.418C28.273 19.85 29 18.31 29 16.625 29 11.86 24.075 8 18 8Z"
        fill="#06C755"
      />
    </svg>
  );
}
