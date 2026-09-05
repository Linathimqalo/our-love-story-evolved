import { AnimatePresence, motion } from "motion/react";
import { FractalFlower } from "./FractalFlower";

/** Full-screen flower bloom, triggered by "I'd choose you again". */
export function BloomBurst({ show, onDone }: { show: boolean; onDone: () => void }) {
  const blooms = Array.from({ length: 14 }, (_, i) => ({
    left: `${(i * 37) % 92 + 4}%`,
    top: `${(i * 53) % 80 + 8}%`,
    size: 90 + ((i * 31) % 180),
    delay: (i % 7) * 0.12,
  }));

  return (
    <AnimatePresence onExitComplete={onDone}>
      {show ? (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          {blooms.map((b, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: b.left, top: b.top }}
              initial={{ scale: 0, rotate: -40, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 0.9 }}
              transition={{ duration: 1.6, delay: b.delay, ease: [0.22, 1, 0.36, 1] }}
            >
              <FractalFlower size={b.size} depth={3} petals={7} />
            </motion.div>
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
