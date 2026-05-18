export function Marquee({
  items,
  tone = "light",
  repeat = 4,
}: {
  items: string[];
  /** "light" was the old cream variant; on dark base it now maps to ink. */
  tone?: "light" | "dark" | "madder" | "hazard";
  repeat?: number;
}) {
  let cls = "bg-jet text-on-jet";
  let style: React.CSSProperties = { borderColor: "var(--color-line-soft)" };

  switch (tone) {
    case "dark":
      cls = "bg-jet text-on-jet";
      break;
    case "madder":
      cls = "bg-madder text-paper";
      style = { borderColor: "var(--color-madder-deep)" };
      break;
    case "hazard":
      cls = "hazard-strip-thin text-paper";
      style = { borderColor: "rgba(0,0,0,0.4)" };
      break;
    case "light":
    default:
      cls = "bg-ink text-on-jet";
      break;
  }

  const content = items.join("    ·    ");

  return (
    <div
      aria-hidden
      className={`relative overflow-hidden border-y ${cls}`}
      style={style}
    >
      <div className="scroll-marquee flex whitespace-nowrap py-3 font-mono text-[11px] tracking-[0.34em] uppercase">
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className="px-6">
            {content}    ·
          </span>
        ))}
      </div>
    </div>
  );
}
