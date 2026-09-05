import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { timeline } from "@/data/anniversary";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { FractalFlower } from "@/components/atmosphere/FractalFlower";
import { LlamaEgg } from "@/components/eggs/EasterEggs";

export function Timeline() {
  const [open, setOpen] = useState(0);
  const year = timeline[open];

  return (
    <section id="journey" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <FractalFlower
        size={420}
        depth={4}
        spin
        className="pointer-events-none absolute -right-32 top-10 opacity-[0.12]"
      />

      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="The journey">
          Five years, one <em className="text-gradient-rose not-italic">chapter</em> at a time
        </SectionHeading>

        <Reveal delay={0.1} className="mt-12">
          <div className="flex snap-x gap-3 overflow-x-auto pb-3 sm:justify-center sm:overflow-visible">
            {timeline.map((y, i) => (
              <button
                key={y.label}
                type="button"
                onClick={() => setOpen(i)}
                aria-pressed={open === i}
                className={`shrink-0 snap-center rounded-full px-5 py-3 text-xs tracking-[0.18em] uppercase transition-all ${
                  open === i
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "glass text-muted-foreground hover:text-primary"
                }`}
              >
                {y.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="relative mt-10">
          <AnimatePresence mode="wait">
            <motion.article
              key={year.label}
              initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="glass overflow-hidden rounded-3xl p-6 sm:p-10"
            >
              <p className="text-[0.7rem] tracking-[0.4em] uppercase text-muted-foreground">
                {year.period}
              </p>
              <h3 className="mt-3 text-3xl sm:text-4xl">{year.title}</h3>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {year.message}
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                {year.moments.map((m, i) => (
                  <li
                    key={i}
                    className="rounded-2xl bg-secondary/60 px-4 py-3 font-hand text-xl text-foreground"
                  >
                    {m}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {year.photos.map((src, i) => (
                  <motion.figure
                    key={i}
                    whileHover={{ y: -6, rotate: i % 2 ? 1 : -1 }}
                    transition={{ type: "spring", stiffness: 140, damping: 16 }}
                    className="overflow-hidden rounded-2xl bg-white p-2 shadow-soft"
                  >
                    <img
                      src={src}
                      alt={`${year.title} memory ${i + 1}`}
                      loading="lazy"
                      className="h-56 w-full rounded-xl object-cover sm:h-64"
                    />
                  </motion.figure>
                ))}
              </div>

              {year.video ? (
                <video
                  src={year.video}
                  controls
                  preload="none"
                  className="mt-4 w-full rounded-2xl bg-black/5"
                />
              ) : null}
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-end pr-2">
          <LlamaEgg size={64} />
        </div>
      </div>
    </section>
  );
}
