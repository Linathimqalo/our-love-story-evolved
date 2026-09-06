import { motion } from "motion/react";
import { qualities } from "@/data/anniversary";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { FractalFlower } from "@/components/atmosphere/FractalFlower";

export function Qualities() {
  return (
    <section id="you" className="relative overflow-hidden bg-secondary/40 px-6 py-24 sm:py-32">
      <FractalFlower
        size={340}
        depth={4}
        spin
        className="pointer-events-none absolute -left-24 bottom-0 opacity-[0.14]"
      />

      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Things I love about you">
          Things I hope you never forget about yourself.
        </SectionHeading>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {qualities.map((q, i) => (
            <Reveal key={q.title} delay={(i % 3) * 0.08}>
              <motion.article
                whileHover={{ y: -8, rotate: i % 2 ? 0.8 : -0.8 }}
                transition={{ type: "spring", stiffness: 140, damping: 15 }}
                className="glass h-full rounded-3xl p-6"
              >
                <span className="block text-2xl">{["🌸", "🔥", "✨", "🤍", "🌿", "🦙", "🍦"][i % 7]}</span>
                <h3 className="mt-4 text-2xl">{q.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {q.body}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
