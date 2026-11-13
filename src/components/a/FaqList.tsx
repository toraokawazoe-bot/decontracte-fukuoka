import { FAQ } from "@/lib/site";

export function FaqList({ limit }: { limit?: number }) {
  const list = limit ? FAQ.slice(0, limit) : FAQ;
  return (
    <div className="faq">
      {list.map((f, i) => (
        <details key={f.q} className="rv">
          <summary>
            <span className="q">Q{String(i + 1).padStart(2, "0")}</span>
            <span>{f.q}</span>
            <span className="pm" aria-hidden>+</span>
          </summary>
          <p className="a">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
