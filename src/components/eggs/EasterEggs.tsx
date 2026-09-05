import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import llama from "@/assets/llama.png";
import { easterEggs } from "@/data/anniversary";

function Whisper({ show, children }: { show: boolean; children: ReactNode }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.p
          initial={{ opacity: 0, y: 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.97 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass absolute bottom-full left-1/2 z-20 mb-3 w-max max-w-[16rem] -translate-x-1/2 rounded-2xl px-4 py-3 font-hand text-xl leading-snug text-foreground"
        >
          {children}
        </motion.p>
      ) : null}
    </AnimatePresence>
  );
}

/** A tiny llama hiding in a corner. Tap it. */
export function LlamaEgg({
  message = easterEggs.llama,
  size = 76,
  className = "",
}: {
  message?: string;
  size?: number;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative inline-block ${className}`}>
      <Whisper show={open}>{message}</Whisper>
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="A secret llama"
        whileHover={{ rotate: [0, -6, 6, 0], scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ duration: 0.6 }}
        className="animate-float-soft block opacity-80 transition-opacity hover:opacity-100"
      >
        <img src={llama} alt="Tiny llama" width={size} height={size} loading="lazy" />
      </motion.button>
    </div>
  );
}

/** An ice cream that keeps a secret. */
export function IceCreamEgg({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative inline-block ${className}`}>
      <Whisper show={open}>{easterEggs.iceCream}</Whisper>
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="A secret ice cream"
        whileHover={{ y: -6, scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        className="text-3xl leading-none sm:text-4xl"
      >
        🍦
      </motion.button>
    </div>
  );
}

/** "Definitely don't click this." */
export function DontClickEgg() {
  const [stage, setStage] = useState(0);

  return (
    <div className="relative flex flex-col items-center gap-3 text-center">
      <button
        type="button"
        onClick={() => setStage((s) => Math.min(s + 1, 3))}
        className="rounded-full border border-primary/25 px-5 py-2 text-xs tracking-[0.2em] uppercase text-primary transition-colors hover:bg-secondary"
      >
        {easterEggs.dontClick.label}
      </button>

      <AnimatePresence mode="wait">
        {stage > 0 ? (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            className="font-hand text-2xl text-primary"
          >
            {stage === 1
              ? easterEggs.dontClick.reveal
              : stage === 2
                ? easterEggs.finalCheese.first
                : easterEggs.finalCheese.second}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
