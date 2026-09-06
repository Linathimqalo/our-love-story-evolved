import { motion } from "motion/react";
import { promises } from "@/data/anniversary";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Promises() {
  return (
    <section id="promises" className="relative bg-secondary/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Five years, five promises">
          What I&apos;m carrying into the next five.
        </SectionHeading>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {promises.map((p, i) => (
            <Reveal key={p.no} delay={(i % 3) * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 150, damping: 16 }}
                className="glass relative h-full overflow-hidden rounded-3xl p-7"
              >
                <span className="font-serif text-5xl leading-none text-primary/25">{p.no}</span>
                <h3 className="mt-4 text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {p.body}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
