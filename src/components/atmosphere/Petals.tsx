import { useMemo } from "react";

type Props = {
  count?: number;
  tone?: "light" | "dark";
  className?: string;
};

/**
 * CSS-only drifting petals. Cheap enough to leave running,
 * and fully disabled by prefers-reduced-motion (see styles.css).
 */
export function Petals({ count = 18, tone = "light", className = "" }: Props) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = seed / 233280;
        return {
          left: `${(r * 100).toFixed(2)}%`,
          size: 8 + ((i * 7) % 14),
          duration: `${14 + ((i * 5) % 16)}s`,
          delay: `-${(i * 1.7).toFixed(1)}s`,
          drift: `${((i % 5) - 2) * 4}vw`,
          opacity: tone === "dark" ? 0.5 : 0.65,
        };
      }),
    [count, tone],
  );

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {petals.map((p, i) => (
        <span
          key={i}
          className="animate-petal-fall absolute top-0 block"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 0.72,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
            borderRadius: "60% 40% 55% 45% / 60% 60% 40% 40%",
            background:
              tone === "dark"
                ? "linear-gradient(140deg, oklch(0.92 0.05 350), oklch(0.78 0.12 350))"
                : "linear-gradient(140deg, oklch(0.94 0.04 10), oklch(0.8 0.1 8))",
            ["--drift" as string]: p.drift,
          }}
        />
      ))}
    </div>
  );
}
