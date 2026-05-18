import { Reveal } from "./Reveal";

export function Interlude({
  kicker,
  lines,
  attribution,
  tone = "ink",
}: {
  kicker: string;
  lines: string[];
  attribution?: string;
  tone?: "ink" | "jet" | "madder" | "paper";
}) {
  const palette = {
    ink: {
      bg: "bg-ink",
      ink: "text-on-jet",
      dim: "text-on-jet/55",
      rule: "bg-on-jet/15",
      accent: "bg-madder",
    },
    jet: {
      bg: "bg-jet",
      ink: "text-on-jet",
      dim: "text-on-jet/55",
      rule: "bg-on-jet/15",
      accent: "bg-madder",
    },
    madder: {
      bg: "bg-madder",
      ink: "text-paper",
      dim: "text-paper/70",
      rule: "bg-paper/20",
      accent: "bg-paper",
    },
    paper: {
      bg: "bg-paper",
      ink: "text-ink",
      dim: "text-ink-mute",
      rule: "bg-ink/15",
      accent: "bg-madder",
    },
  }[tone];

  return (
    <section className={`relative overflow-hidden ${palette.bg} px-5 py-24`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="orbit-conic absolute -inset-[40%] opacity-25"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(185,74,53,0.35) 60deg, transparent 140deg, transparent 360deg)",
          }}
        />
      </div>

      <Reveal className="relative">
        <div className="flex items-center gap-3">
          <span className={`block size-2 rotate-45 ${palette.accent}`} aria-hidden />
          <span
            className={`font-mono text-[10px] tracking-[0.32em] uppercase ${palette.dim}`}
          >
            {kicker}
          </span>
        </div>

        <blockquote
          className={`mt-10 text-stencil text-[38px] leading-[1.05] ${palette.ink}`}
        >
          {lines.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        </blockquote>

        {attribution ? (
          <p
            className={`mt-10 font-mono text-[10px] tracking-[0.32em] uppercase ${palette.dim}`}
          >
            — {attribution}
          </p>
        ) : null}

        <div className={`mt-12 h-px ${palette.rule}`} />
      </Reveal>
    </section>
  );
}
