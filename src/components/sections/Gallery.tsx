import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/data/anniversary";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { IceCreamEgg } from "@/components/eggs/EasterEggs";

const tilts = [-3.5, 2.5, -1.5, 3, -2.5, 1.5];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const move = useCallback((dir: number) => {
    setIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length));
  }, []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, move]);

  const photo = index === null ? null : gallery[index];

  return (
    <section id="gallery" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="A thousand memories">
          Pieces of us, pinned to a page
        </SectionHeading>

        <p className="mx-auto mt-5 max-w-md text-center font-hand text-2xl text-primary">
          tap a photo to remember it properly
        </p>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {gallery.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className="mb-6 break-inside-avoid">
              <motion.button
                type="button"
                onClick={() => setIndex(i)}
                initial={{ rotate: tilts[i % tilts.length] }}
                whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 130, damping: 15 }}
                className="block w-full rounded-[1.25rem] bg-white p-3 pb-5 text-left shadow-lift"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-[0.8rem] bg-secondary object-cover"
                />
                <p className="mt-4 px-1 font-hand text-2xl leading-tight text-foreground">
                  {p.hand ?? p.caption.slice(0, 34)}
                </p>
                {p.date ? (
                  <p className="mt-1 px-1 text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground">
                    {p.date}
                  </p>
                ) : null}
              </motion.button>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <IceCreamEgg />
          <span className="font-hand text-xl text-muted-foreground">
            I&apos;d still share my ice cream with you. Probably.
          </span>
        </div>
      </div>

      <AnimatePresence>
        {photo ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[oklch(0.25_0.05_340_/_0.82)] p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.figure
              className="relative w-full max-w-lg rounded-3xl bg-white p-3 pb-6 shadow-lift"
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="max-h-[62svh] w-full rounded-2xl object-contain"
              />
              <figcaption className="px-3 pt-5">
                <p className="text-pretty text-base leading-relaxed text-foreground">
                  {photo.caption}
                </p>
                {photo.date ? (
                  <p className="mt-2 text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground">
                    {photo.date}
                  </p>
                ) : null}
              </figcaption>

              <button
                type="button"
                onClick={() => setIndex(null)}
                aria-label="Close"
                className="absolute -right-3 -top-3 grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft"
              >
                <X className="size-4" />
              </button>

              <div className="absolute inset-y-0 -left-14 hidden items-center sm:flex">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Previous photo"
                  className="grid size-11 place-items-center rounded-full bg-white/85 text-primary"
                >
                  <ChevronLeft className="size-5" />
                </button>
              </div>
              <div className="absolute inset-y-0 -right-14 hidden items-center sm:flex">
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Next photo"
                  className="grid size-11 place-items-center rounded-full bg-white/85 text-primary"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>

              <div className="mt-4 flex justify-center gap-3 sm:hidden">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Previous photo"
                  className="grid size-11 place-items-center rounded-full bg-secondary text-primary"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Next photo"
                  className="grid size-11 place-items-center rounded-full bg-secondary text-primary"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
