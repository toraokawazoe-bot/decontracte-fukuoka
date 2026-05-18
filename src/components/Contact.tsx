import { Magnetic } from "./motion/Magnetic";
import { SectionHead } from "./SectionHead";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-jet text-on-jet px-5 py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="orbit-conic absolute -inset-[50%] opacity-30"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(185,74,53,0.45) 60deg, transparent 140deg, transparent 360deg)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 60% at 90% 0%, rgba(185,74,53,0.22) 0%, transparent 60%)," +
              "radial-gradient(80% 60% at 0% 100%, rgba(29,42,54,0.55) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative">
        <SectionHead
          index="08 / CONTACT"
          en="GET A QUOTE"
          jp="チームのアイデアを、そのまま投げてください。"
        />

        <p className="mt-8 max-w-md font-jp text-[14px] leading-[1.95] text-on-jet/75">
          ざっくりした要望で OK。デザイナーが叩き台を作って、何度でも調整します。
          まずは LINE で気軽にどうぞ。
        </p>

        {/* LINE CTA (primary) */}
        <Magnetic strength={0.16}>
          <a
            href="https://line.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex items-center justify-between bg-[var(--color-line-brand)] px-5 py-5 text-ink transition hover:brightness-95"
            style={{ color: "#0c2a14" }}
          >
            <span className="flex items-center gap-3">
              <LineLogo />
              <span>
                <span className="text-stencil block text-[22px] leading-none">
                  LINE で見積もり
                </span>
                <span className="mt-1 block font-mono text-[10px] tracking-[0.32em] opacity-70">
                  @decontracte · スマホひとつで完結
                </span>
              </span>
            </span>
            <span aria-hidden className="text-xl transition group-hover:translate-x-1">→</span>
          </a>
        </Magnetic>

        <p className="mt-3 text-center font-mono text-[10px] tracking-[0.32em] text-on-jet/45">
          ─── OR ───
        </p>

        {/* Form (secondary) */}
        <form
          className="mt-3 grid grid-cols-1 gap-px overflow-hidden"
          style={{ border: "1px solid var(--color-line-soft)", background: "var(--color-line-soft)" }}
        >
          <Field label="チーム名 / TEAM" required>
            <input
              type="text"
              placeholder="MIGHTY FC"
              className="w-full bg-jet-2 px-4 py-3 text-[14px] text-on-jet placeholder:text-on-jet/35 focus:outline-none focus:ring-1 focus:ring-madder"
            />
          </Field>
          <Field label="お名前 / NAME" required>
            <input
              type="text"
              placeholder="山田 太郎"
              className="w-full bg-jet-2 px-4 py-3 text-[14px] text-on-jet placeholder:text-on-jet/35 focus:outline-none focus:ring-1 focus:ring-madder"
            />
          </Field>
          <Field label="メール / EMAIL" required>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-jet-2 px-4 py-3 text-[14px] text-on-jet placeholder:text-on-jet/35 focus:outline-none focus:ring-1 focus:ring-madder"
            />
          </Field>
          <Field label="競技 / SPORT">
            <select
              defaultValue=""
              className="w-full appearance-none bg-jet-2 px-4 py-3 text-[14px] text-on-jet focus:outline-none focus:ring-1 focus:ring-madder"
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
              className="w-full bg-jet-2 px-4 py-3 text-[14px] text-on-jet placeholder:text-on-jet/35 focus:outline-none focus:ring-1 focus:ring-madder"
            />
          </Field>
          <Field label="ご要望 / MESSAGE">
            <textarea
              rows={5}
              placeholder="カラーイメージ、参考デザイン、納期希望など自由に。"
              className="w-full resize-none bg-jet-2 px-4 py-3 text-[14px] text-on-jet placeholder:text-on-jet/35 focus:outline-none focus:ring-1 focus:ring-madder"
            />
          </Field>

          <div className="bg-jet-2 px-4 py-5">
            <Magnetic strength={0.18}>
              <button
                type="button"
                className="group flex w-full items-center justify-center gap-3 bg-madder px-5 py-4 font-mono text-[11px] tracking-[0.32em] text-paper transition hover:bg-madder-deep"
              >
                SEND REQUEST
                <span aria-hidden className="transition group-hover:translate-x-1">→</span>
              </button>
            </Magnetic>
            <p className="mt-3 text-center font-mono text-[10px] tracking-[0.32em] text-on-jet/45">
              原則 1 営業日以内に返信します
            </p>
          </div>
        </form>

        {/* Contact channels */}
        <ul
          className="mt-10 divide-y border-y"
          style={{ borderColor: "var(--color-line-soft)" }}
        >
          <ContactRow k="MAIL"      v="info@decontracte.co" href="mailto:info@decontracte.co" />
          <ContactRow k="INSTAGRAM" v="@decontracte"        href="https://instagram.com/" />
          <ContactRow k="OFFICE"    v="福岡市中央区薬院 1-14-18 信興ビル 202" href="https://maps.google.com/" />
        </ul>
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
    <label className="block bg-jet-2">
      <div
        className="flex items-center justify-between border-b px-4 pt-3 pb-2"
        style={{ borderColor: "var(--color-line-soft)" }}
      >
        <span className="font-mono text-[10px] tracking-[0.32em] text-on-jet/55">
          {label}
        </span>
        {required ? (
          <span className="font-mono text-[10px] tracking-[0.32em] text-madder">
            REQUIRED
          </span>
        ) : null}
      </div>
      {children}
    </label>
  );
}

function ContactRow({
  k,
  v,
  href,
}: {
  k: string;
  v: string;
  href: string;
}) {
  return (
    <li className="border-b" style={{ borderColor: "var(--color-line-soft)" }}>
      <a
        href={href}
        className="group flex items-center justify-between gap-4 py-4 transition"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.32em] text-on-jet/55">
            / {k}
          </span>
          <span className="text-stencil text-[16px] tracking-tight text-on-jet transition group-hover:text-madder">
            {v}
          </span>
        </div>
        <span
          aria-hidden
          className="font-mono text-on-jet/55 transition group-hover:translate-x-1 group-hover:text-madder"
        >
          →
        </span>
      </a>
    </li>
  );
}

function LineLogo() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <rect width="36" height="36" rx="8" fill="#06C755" />
      <path
        d="M18 8c-6.075 0-11 3.86-11 8.625 0 4.275 3.911 7.86 9.196 8.523.358.077.846.236.97.541.111.275.072.706.036.984l-.157.945c-.048.279-.222 1.094.957.597 1.18-.497 6.36-3.747 8.677-6.418C28.273 19.85 29 18.31 29 16.625 29 11.86 24.075 8 18 8Z"
        fill="#fff"
      />
    </svg>
  );
}
