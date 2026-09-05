import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** Gentle fade-and-rise on scroll. Respects reduced-motion. */
export function Reveal({ children, delay = 0, y = 24, className }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  children,
  className = "",
}: {
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={`text-center ${className}`}>
      {eyebrow ? (
        <p className="mb-4 text-[0.7rem] tracking-[0.4em] uppercase text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mx-auto max-w-3xl text-balance text-3xl leading-[1.15] sm:text-4xl md:text-5xl">
        {children}
      </h2>
    </Reveal>
  );
}
