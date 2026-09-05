import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, X } from "lucide-react";
import { videos } from "@/data/anniversary";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Videos() {
  const [active, setActive] = useState<number | null>(null);
  const video = active === null ? null : videos[active];

  return (
    <section id="motion" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Moments in motion">Things I never want to forget.</SectionHeading>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.button
                type="button"
                onClick={() => setActive(i)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 140, damping: 16 }}
                className="group relative block w-full overflow-hidden rounded-3xl text-left shadow-lift"
              >
                <div className="aspect-[3/4] w-full bg-secondary">
                  {v.poster ? (
                    <img
                      src={v.poster}
                      alt=""
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : null}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.28_0.06_340_/_0.85)] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="mb-3 grid size-11 place-items-center rounded-full bg-white/90 text-primary">
                    <Play className="size-4" />
                  </span>
                  <h3 className="text-xl leading-tight text-[oklch(0.99_0.01_40)]">{v.title}</h3>
                  <p className="mt-1 text-sm text-[oklch(0.95_0.02_20_/_0.8)]">{v.caption}</p>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {video ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[oklch(0.2_0.04_340_/_0.9)] p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="relative w-full max-w-3xl"
              initial={{ scale: 0.94, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={video.src}
                poster={video.poster}
                controls
                autoPlay
                playsInline
                className="w-full rounded-3xl bg-black shadow-lift"
              />
              <p className="mt-4 text-center font-hand text-2xl text-[oklch(0.97_0.02_20)]">
                {video.title}
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close video"
                className="absolute -top-4 right-0 grid size-10 place-items-center rounded-full bg-primary text-primary-foreground"
              >
                <X className="size-4" />
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
