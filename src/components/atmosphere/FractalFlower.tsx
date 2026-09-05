import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type Props = {
  size?: number;
  depth?: number;
  petals?: number;
  className?: string;
  /** slowly rotate forever */
  spin?: boolean;
  /** bloom a little when hovered / tapped */
  interactive?: boolean;
  onBloom?: () => void;
};

type Ring = { r: number; scale: number; petals: number; opacity: number; hue: number };

/**
 * A mathematically generated flower: each ring of petals is a scaled,
 * rotated copy of the ring above it — a simple self-similar fractal.
 */
export function FractalFlower({
  size = 220,
  depth = 4,
  petals = 8,
  className = "",
  spin = false,
  interactive = false,
  onBloom,
}: Props) {
  const reduced = useReducedMotion();
  const [bloomed, setBloomed] = useState(false);

  const rings = useMemo<Ring[]>(
    () =>
      Array.from({ length: depth }, (_, i) => ({
        r: 1 - i / (depth + 0.6),
        scale: Math.pow(0.68, i),
        petals: petals + i * 2,
        opacity: 0.16 + i * 0.12,
        hue: 355 - i * 6,
      })),
    [depth, petals],
  );

  return (
    <motion.svg
      viewBox="-100 -100 200 200"
      width={size}
      height={size}
      aria-hidden
      className={`${spin && !reduced ? "animate-bloom-spin" : ""} ${className}`}
      onHoverStart={interactive ? () => setBloomed(true) : undefined}
      onHoverEnd={interactive ? () => setBloomed(false) : undefined}
      onClick={
        interactive
          ? () => {
              setBloomed((b) => !b);
              onBloom?.();
            }
          : undefined
      }
      animate={{ scale: bloomed ? 1.08 : 1, rotate: bloomed ? 12 : 0 }}
      transition={{ type: "spring", stiffness: 90, damping: 14 }}
      style={{ cursor: interactive ? "pointer" : undefined, overflow: "visible" }}
    >
      {rings.map((ring, ri) =>
        Array.from({ length: ring.petals }, (_, pi) => {
          const angle = (360 / ring.petals) * pi + ri * 11;
          const len = 78 * ring.scale;
          return (
            <path
              key={`${ri}-${pi}`}
              d={`M0 0 C ${len * 0.42} ${-len * 0.34}, ${len * 0.82} ${-len * 0.2}, ${len} 0 C ${len * 0.82} ${len * 0.2}, ${len * 0.42} ${len * 0.34}, 0 0 Z`}
              transform={`rotate(${angle})`}
              fill={`oklch(${0.62 + ri * 0.07} ${0.14 - ri * 0.02} ${ring.hue} / ${ring.opacity})`}
              stroke={`oklch(0.68 0.12 ${ring.hue} / 0.22)`}
              strokeWidth={0.4}
            />
          );
        }),
      )}
      <circle r={5} fill="oklch(0.9 0.08 80 / 0.8)" />
    </motion.svg>
  );
}
