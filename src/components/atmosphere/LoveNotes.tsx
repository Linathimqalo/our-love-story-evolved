import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { loveNotes } from "@/data/anniversary";

type Note = { id: number; text: string; left: number; top: number };

/**
 * Little envelopes/cards that drift in occasionally while she scrolls.
 * One at a time, never in the way.
 */
export function LoveNotes({ active }: { active: boolean }) {
  const [note, setNote] = useState<Note | null>(null);
  const idx = useRef(0);
  const lastAt = useRef(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!active) return;

    const maybeShow = () => {
      const now = Date.now();
      if (now - lastAt.current < 9000) return;
      lastAt.current = now;
      const text = loveNotes[idx.current % loveNotes.length]!;
      idx.current += 1;
      const onLeft = idx.current % 2 === 0;
      setNote({
        id: now,
        text,
        left: onLeft ? 2 : 74,
        top: 55 + ((idx.current * 11) % 30),
      });
      window.setTimeout(() => setNote(null), 6200);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (Math.random() < 0.14) maybeShow();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  return (
    <div aria-live="polite" className="pointer-events-none fixed inset-0 z-30">
      <AnimatePresence>
        {note ? (
          <motion.div
            key={note.id}
            className="absolute w-[min(16rem,50vw)]"
            style={{ left: `${note.left}%`, top: `${note.top}%` }}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 28, rotate: -4, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate: note.left > 40 ? 2.5 : -2.5, scale: 1 }}
            exit={{ opacity: 0, y: -22, scale: 0.96 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass rounded-2xl px-5 py-4">
              <span className="mb-1 block text-lg leading-none">💌</span>
              <p className="font-hand text-xl leading-snug text-foreground">{note.text}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
