import { future } from "@/data/anniversary";
import { Reveal } from "@/components/Reveal";
import { Petals } from "@/components/atmosphere/Petals";
import { FractalFlower } from "@/components/atmosphere/FractalFlower";
import { LlamaEgg, IceCreamEgg } from "@/components/eggs/EasterEggs";
import { easterEggs } from "@/data/anniversary";

export function Future() {
  return (
    <section id="future" className="gradient-night relative overflow-hidden px-6 py-28 sm:py-36">
      <Petals count={16} tone="dark" />
      <FractalFlower
        size={520}
        depth={5}
        spin
        className="pointer-events-none absolute -right-40 -top-24 opacity-20"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: 40 }, (_, i) => (
          <span
            key={i}
            className="animate-breathe absolute size-[3px] rounded-full bg-white"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 90}%`,
              animationDelay: `${(i % 9) * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-2xl text-center text-[oklch(0.98_0.012_40)]">
        <Reveal>
          <h2 className="text-4xl leading-tight sm:text-5xl">{future.heading}</h2>
        </Reveal>

        <div className="mt-10 space-y-4">
          {future.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.04 * i} y={12}>
              <p className="text-pretty text-lg leading-relaxed text-[oklch(0.95_0.02_20_/_0.9)] sm:text-xl">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-14 font-serif text-3xl italic sm:text-4xl">{future.closing}</p>
        </Reveal>

        <div className="mt-14 flex items-end justify-center gap-8">
          <LlamaEgg size={70} message={easterEggs.llamaLetter} />
          <IceCreamEgg />
        </div>
      </div>
    </section>
  );
}
