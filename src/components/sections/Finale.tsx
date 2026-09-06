import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { finale } from "@/data/anniversary";
import { Reveal } from "@/components/Reveal";
import { Petals } from "@/components/atmosphere/Petals";
import { FractalFlower } from "@/components/atmosphere/FractalFlower";
import { DontClickEgg } from "@/components/eggs/EasterEggs";
import { easterEggs } from "@/data/anniversary";

export function Finale() {
  const [revealed, setRevealed] = useState(false);
  const [flowerSaid, setFlowerSaid] = useState(false);

  return (
    <section
      id="finale"
      className="relative overflow-hidden px-6 py-32 sm:py-40"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.96 0.03 350), oklch(0.94 0.034 5) 55%, oklch(0.985 0.012 60))",
      }}
    >
      <Petals count={20} />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-14 text-center">
        <Reveal>
          <h2 className="font-serif text-6xl leading-none sm:text-7xl">{finale.lines[0]}</h2>
        </Reveal>

        {finale.lines.slice(1, 3).map((l, i) => (
          <Reveal key={l} delay={0.05 * i}>
            <p className="text-pretty text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              {l}
            </p>
          </Reveal>
        ))}

        <Reveal>
          <FractalFlower
            size={200}
            depth={5}
            interactive
            onBloom={() => setFlowerSaid(true)}
            className="mx-auto"
          />
          <AnimatePresence>
            {flowerSaid ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 font-hand text-2xl text-primary"
              >
                {easterEggs.flower}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </Reveal>

        <Reveal>
          <p className="font-serif text-4xl italic leading-tight text-primary sm:text-5xl">
            {finale.lines[3]}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-2xl sm:text-3xl">{finale.lines[4]}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-hand text-4xl text-primary sm:text-5xl">{finale.lines[5]}</p>
          <p className="mt-6 text-[0.7rem] tracking-[0.5em] uppercase text-muted-foreground">
            {finale.dateStamp}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {!revealed ? (
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="glow-rose rounded-full bg-primary px-8 py-4 text-sm tracking-[0.18em] uppercase text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
            >
              {finale.cta}
            </button>
          ) : null}
        </Reveal>

        <AnimatePresence>
          {revealed ? (
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass w-full space-y-5 rounded-3xl p-8 text-left sm:p-10"
            >
              {finale.hidden.map((p, i) => (
                <p
                  key={i}
                  className="text-pretty text-lg leading-relaxed text-foreground/90 sm:text-xl"
                >
                  {p}
                </p>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="mt-6">
          <DontClickEgg />
        </div>
      </div>
    </section>
  );
}
