import Image from "next/image";
import { Reveal } from "./Reveal";

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
    bg: "#f5efe4",
  },
  {
    name: "SEAGULL FC",
    sport: "SOCCER",
    place: "KAGAWA",
    year: "2025",
    img: "/img/bibusu.png",
    pos: "center",
    fit: "contain" as const,
    bg: "#f5efe4",
  },
];

export function Works() {
  return (
    <section id="works" className="stack-section relative overflow-hidden surface-paper">
      <div className="container-x section-y">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-jp text-[12px] font-bold tracking-[0.32em] text-[var(--color-madder)]">
                WORKS
              </p>
              <h2
                className="mt-3 font-jp font-black leading-[1.1] tracking-[-0.01em] text-[var(--color-ink)]"
                style={{ fontSize: "clamp(40px, 5.5vw, 84px)" }}
              >
                制作実績。
              </h2>
            </div>
            <p className="max-w-md font-jp text-[15px] font-medium leading-[1.9] text-[var(--color-ink)]">
              福岡から全国へ。これまで一緒に作ってきたチームたち。
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:gap-7">
          {WORKS.map((w, i) => (
            <Reveal as="li" key={w.name} delay={(i % 2) * 80}>
              <WorkCard w={w} />
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <a
            href="#contact"
            className="mt-14 group flex items-center justify-between rounded-2xl bg-[var(--color-ink)] px-7 py-6 font-jp text-[15px] font-bold tracking-[0.06em] text-[var(--color-paper-pure)] transition hover:bg-[var(--color-madder)] lg:mt-16"
          >
            次の WORK に、あなたのチームを。
            <span aria-hidden className="transition group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function WorkCard({ w }: { w: (typeof WORKS)[number] }) {
  return (
    <article className="group card-lift relative h-full overflow-hidden rounded-3xl border border-[var(--color-line-ink-strong)] bg-[var(--color-paper-pure)] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{ background: w.bg ?? "var(--color-ink)" }}
      >
        <Image
          src={w.img}
          alt={`${w.name} の制作実績`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`transition-transform duration-1000 group-hover:scale-[1.04] ${
            w.fit === "contain" ? "object-contain p-6 lg:p-10" : "object-cover"
          }`}
          style={{ objectPosition: w.pos }}
        />
        {w.fit !== "contain" ? (
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(13,10,8,0.10) 0%, rgba(13,10,8,0) 40%, rgba(13,10,8,0.78) 100%)",
            }}
          />
        ) : null}

        <span className="absolute left-4 top-4 rounded-full bg-[var(--color-paper-pure)]/95 px-3 py-1 font-jp text-[11px] font-bold tracking-[0.12em] text-[var(--color-ink)]">
          {w.year}
        </span>

        {w.fit !== "contain" ? (
          <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
            <p className="font-jp text-[11px] font-bold tracking-[0.16em] text-[var(--color-paper-pure)]/85">
              {w.sport} ／ {w.place}
            </p>
            <h3
              className="mt-1.5 font-jp font-black leading-[0.95] text-[var(--color-paper-pure)]"
              style={{ fontSize: "clamp(24px, 2.6vw, 36px)" }}
            >
              {w.name}
            </h3>
          </div>
        ) : null}
      </div>

      {w.fit === "contain" ? (
        <div className="p-5 lg:p-6">
          <p className="font-jp text-[11px] font-bold tracking-[0.16em] text-[var(--color-ink-mute)]">
            {w.sport} ／ {w.place}
          </p>
          <h3 className="mt-1.5 font-jp text-[20px] font-black leading-tight text-[var(--color-ink)] lg:text-[24px]">
            {w.name}
          </h3>
        </div>
      ) : null}
    </article>
  );
}
