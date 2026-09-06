import { honest } from "@/data/anniversary";
import { Reveal } from "@/components/Reveal";

export function Honest() {
  return (
    <section
      id="honest"
      className="relative px-6 py-28 sm:py-36"
      style={{ background: "linear-gradient(180deg, var(--cream), oklch(0.97 0.014 40))" }}
    >
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <div className="mx-auto mb-10 h-px w-24 bg-border" />
          <h2 className="text-center text-3xl leading-snug sm:text-4xl">{honest.heading}</h2>
        </Reveal>

        <div className="mt-12 space-y-5">
          {honest.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.03 * i} y={14}>
              <p className="text-pretty text-lg leading-relaxed text-foreground/85 sm:text-xl">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <blockquote className="mt-14 border-l-2 border-primary/40 pl-6 font-serif text-2xl italic leading-snug text-primary sm:text-3xl">
            {honest.closing}
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
