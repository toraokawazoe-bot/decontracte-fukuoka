import { Reveal } from "./Reveal";
import { MaskReveal } from "./motion/MaskReveal";

export function SectionHead({
  index,
  en,
  jp,
  align = "left",
  invert = false,
}: {
  index: string;
  en: string;
  jp: string;
  align?: "left" | "center";
  /** kept for back-compat; sport-tech sections all run dark by default */
  invert?: boolean;
}) {
  // Default scheme is "on-dark"; `invert` flips to "on-paper" for the rare
  // paper-on-light sections that may still exist.
  const alignCls = align === "center" ? "items-center text-center" : "items-start";
  const ruleAccent = "bg-madder";
  const ruleQuiet = invert ? "bg-ink/30" : "bg-on-jet/22";
  const ink = invert ? "text-ink" : "text-on-jet";
  const dim = invert ? "text-ink-mute" : "text-on-jet/55";

  return (
    <Reveal as="header" className={`flex flex-col gap-5 ${alignCls}`}>
      <div className="flex items-center gap-2.5">
        <span className={`block h-px w-7 ${ruleAccent}`} aria-hidden />
        <span className={`block h-px w-3 ${ruleQuiet}`} aria-hidden />
        <span className={`font-mono text-[10px] tracking-[0.32em] ${dim}`}>
          {index}
        </span>
      </div>
      <h2
        className={`text-stencil text-[44px] leading-[0.92] sm:text-[56px] ${ink}`}
      >
        <MaskReveal>{en}</MaskReveal>
      </h2>
      <p className={`font-jp text-[12px] tracking-[0.18em] ${dim}`}>{jp}</p>
    </Reveal>
  );
}
