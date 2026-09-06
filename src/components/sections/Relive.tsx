import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { relive } from "@/data/anniversary";
import { Reveal } from "@/components/Reveal";
import { BloomBurst } from "@/components/atmosphere/BloomBurst";

export function Relive() {
  const [bloom, setBloom] = useState(false);
  const [chosen, setChosen] = useState(false);

  return (
    <section id="relive" className="relative overflow-hidden px-6 py-24 sm:py-32">
      {/* floating memory words */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {relive.floating.map((word, i) => (
          <motion.span
            key={word}
            className="absolute font-hand text-xl text-primary/35 sm:text-2xl"
            style={{ left: `${(i * 23) % 80 + 6}%`, top: `${(i * 41) % 78 + 8}%` }}
            animate={{ y: [0, -14, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 9 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="text-4xl leading-tight sm:text-5xl">{relive.heading}</h2>
        </Reveal>

        <div className="mt-10 space-y-4">
          {relive.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.03 * i} y={12}>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <button
            type="button"
            onClick={() => {
              setBloom(true);
              setChosen(true);
              window.setTimeout(() => setBloom(false), 3800);
            }}
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm tracking-[0.18em] uppercase text-primary-foreground shadow-soft transition-transform hover:scale-[1.03] active:scale-95"
          >
            {relive.cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>

        {chosen ? (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 font-hand text-2xl text-primary"
          >
            Every single time.
          </motion.p>
        ) : null}
      </div>

      <BloomBurst show={bloom} onDone={() => {}} />
    </section>
  );
}
