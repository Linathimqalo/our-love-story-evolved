import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { hero } from "@/data/anniversary";
import { Petals } from "@/components/atmosphere/Petals";
import { FractalFlower } from "@/components/atmosphere/FractalFlower";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-20">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1200}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-[oklch(0.3_0.06_340_/_0.52)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_45%,transparent,oklch(0.22_0.05_330_/_0.72))]" />

      <Petals count={22} tone="dark" />

      <FractalFlower
        size={520}
        depth={5}
        spin
        className="absolute -left-40 -top-32 opacity-25 sm:opacity-30"
      />
      <FractalFlower
        size={380}
        depth={4}
        spin
        className="absolute -bottom-24 -right-24 opacity-20"
      />

      <div className="relative z-10 max-w-3xl text-center text-[oklch(0.99_0.01_40)]">
        <motion.h1 {...rise(0.2)} className="text-6xl leading-none sm:text-7xl md:text-8xl">
          {hero.kicker}
        </motion.h1>

        <motion.p
          {...rise(0.9)}
          className="mx-auto mt-6 max-w-xl font-serif text-2xl italic leading-snug text-[oklch(0.97_0.02_20)] sm:text-3xl md:text-4xl"
        >
          {hero.headline}
        </motion.p>

        <motion.p
          {...rise(1.6)}
          className="mt-10 text-[0.7rem] tracking-[0.45em] uppercase text-[oklch(0.93_0.03_20_/_0.85)]"
        >
          {hero.date}
        </motion.p>

        <motion.p
          {...rise(2.1)}
          className="mt-4 font-hand text-2xl text-[oklch(0.96_0.03_10)] sm:text-3xl"
        >
          {hero.greeting}
        </motion.p>

        <motion.div {...rise(2.6)} className="mt-12">
          <button
            type="button"
            onClick={onStart}
            className="glow-rose group inline-flex items-center gap-3 rounded-full bg-[oklch(0.99_0.01_40)] px-8 py-4 text-sm tracking-[0.18em] uppercase text-primary transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            {hero.cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
