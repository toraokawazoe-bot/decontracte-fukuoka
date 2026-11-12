import Image from "next/image";
import { SectionBg } from "./motion/SectionBg";

const WORKS = [
  {
    name: "MIGHTY FC",
    sport: "SOCIETY",
    place: "FUKUOKA",
    year: "2026",
    img: "/img/first_view.jpg",
    pos: "center",
    fit: "cover" as const,
  },
  {
    name: "TOKAI-5",
    sport: "FUTSAL",
    place: "FUKUOKA",
    year: "2026",
    img: "/img/team_order_01.png",
    pos: "center",
    fit: "cover" as const,
  },
  {
    name: "CHERRY'S",
    sport: "SOCCER",
    place: "FUKUOKA",
    year: "2025",
    img: "/img/uniform.png",
    pos: "center",
    fit: "contain" as const,
  },
  {
    name: "SEAGULL FC",
    sport: "SOCCER",
    place: "KAGAWA",
    year: "2025",
    img: "/img/bibusu.png",
    pos: "center",
    fit: "contain" as const,
  },
];

export function Works() {
  return (
    <section id="works" className="stack-section relative overflow-hidden bg-white text-[var(--color-ink)]">
      <SectionBg word="ARCHIVE" rotate="right" />
      <div className="container-x relative z-10 py-28 lg:py-48">
        <header className="border-b border-[var(--color-ink)] pb-6 lg:pb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-[var(--color-ink-dim)]">
            06 / WORKS
          </p>
          <h2
            className="v-mask mt-5 font-display leading-[1.02]"
            style={{
              fontStyle: "italic",
              fontWeight: 500,
              letterSpacing: "-0.005em",
              fontSize: "clamp(44px, 7vw, 124px)",
            }}
          >
            Archive.
          </h2>
          <p className="font-jp-serif mt-5 text-[16px] font-medium leading-[1.7] lg:text-[19px]">
            制作実績。
          </p>
          <p className="mt-4 max-w-xl font-jp text-[13px] font-medium leading-[1.95] text-[var(--color-ink-dim)] lg:text-[14px]">
            福岡から全国へ。これまで一緒に作ってきたチームたち。
          </p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2">
          {WORKS.map((w, i) => (
            <li
              key={w.name}
              className={`v-rise group flex flex-col border-b border-[var(--color-ink)] py-10 lg:py-12 ${
                i % 2 === 1 ? "sm:border-l sm:border-[var(--color-ink)] sm:pl-8 lg:pl-10" : ""
              } ${i % 2 === 0 ? "sm:pr-8 lg:pr-10" : ""}`}
            >
              <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--color-ink-mute)]">
                <span>
                  {String(i + 1).padStart(2, "0")} / {w.year}
                </span>
                <span>
                  {w.sport} · {w.place}
                </span>
              </div>

              <div className="relative mt-6 aspect-[4/5] w-full overflow-hidden bg-[var(--color-paper-2)]">
                <Image
                  src={w.img}
                  alt={`${w.name} の制作実績`}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className={`transition-transform duration-700 group-hover:scale-[1.03] ${
                    w.fit === "contain" ? "object-contain p-10 lg:p-14" : "v-parallax object-cover"
                  }`}
                  style={{ objectPosition: w.pos }}
                />
              </div>

              <h3
                className="mt-6 font-sans font-bold uppercase leading-none tracking-[-0.015em]"
                style={{ fontSize: "clamp(22px, 2.8vw, 40px)" }}
              >
                {w.name}
              </h3>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group mt-16 inline-flex items-center justify-between gap-6 border-2 border-[var(--color-ink)] bg-[var(--color-ink)] px-8 py-5 font-jp text-[14px] font-bold tracking-[0.04em] text-white transition hover:bg-white hover:text-[var(--color-ink)] lg:mt-24"
        >
          <span>次の WORK に、あなたのチームを。</span>
          <span aria-hidden className="transition group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
