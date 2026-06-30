import { Pause, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type LofiPlayerProps = {
  focusMode: boolean;
};

export function LofiPlayer({ focusMode }: LofiPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      className={`glass-strong relative w-full max-w-[23rem] overflow-hidden rounded-[1.75rem] p-5 md:p-6 ${
        focusMode
          ? "border-[rgba(119,228,255,0.34)] shadow-glow"
          : "border-white/12"
      }`}
      data-focus={focusMode}
      data-state={isPlaying ? "playing" : "paused"}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(119,228,255,0.15),transparent_32%),linear-gradient(160deg,rgba(255,255,255,0.03),transparent)]" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
              Reproduciendo
            </p>
            <p className="mt-3 text-sm text-[var(--cyan)]">
              lofi.dev / modo enfoque
            </p>
            <p className="mt-2 text-lg font-semibold text-[var(--text)]">
              Sesión de código 01
            </p>
          </div>
          <motion.div
            className="relative grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-black/25"
            animate={
              isPlaying && !prefersReducedMotion ? { rotate: 360 } : { rotate: 0 }
            }
            transition={
              isPlaying
                ? {
                    duration: focusMode ? 9 : 6,
                    repeat: Infinity,
                    ease: "linear",
                  }
                : { duration: 0.4 }
            }
          >
            <div className="h-12 w-12 rounded-full bg-[conic-gradient(from_0deg,rgba(119,228,255,0.85),rgba(185,163,255,0.78),rgba(242,195,107,0.8),rgba(119,228,255,0.85))]" />
            <div className="absolute h-3 w-3 rounded-full bg-[var(--bg)]" />
          </motion.div>
        </div>

        <div className="mt-6">
          <div className="flex items-end gap-1.5" aria-hidden="true">
            {[0.25, 0.5, 0.8, 0.6, 0.35, 0.75].map((height, index) => (
              <motion.span
                key={height + index}
                className="block w-1.5 rounded-full bg-[var(--cyan)]/80"
                initial={false}
                animate={
                  isPlaying && !prefersReducedMotion
                    ? {
                        height: [
                          `${16 + height * 8}px`,
                          `${28 + height * 12}px`,
                          `${12 + height * 8}px`,
                        ],
                        opacity: [0.5, 1, 0.6],
                      }
                    : {
                        height: "12px",
                        opacity: 0.45,
                      }
                }
                transition={{
                  duration: focusMode ? 1.8 : 1.1,
                  repeat: isPlaying ? Infinity : 0,
                  repeatType: "reverse",
                  delay: index * 0.08,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
            <motion.div
              className="h-full rounded-full bg-[linear-gradient(90deg,rgba(119,228,255,0.95),rgba(185,163,255,0.92),rgba(242,195,107,0.92))]"
              initial={false}
              animate={
                isPlaying && !prefersReducedMotion
                  ? { width: ["18%", "72%", "39%", "88%"] }
                  : { width: "18%" }
              }
              transition={
                isPlaying
                  ? {
                      duration: focusMode ? 14 : 9,
                      repeat: Infinity,
                      ease: "linear",
                    }
                  : { duration: 0.35 }
              }
            />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setIsPlaying((current) => !current)}
            aria-pressed={isPlaying}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] ${
              isPlaying
                ? "bg-[var(--text)] text-[var(--bg)]"
                : "border border-white/15 bg-white/5 text-[var(--text)] hover:bg-white/10"
            }`}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            <span>{isPlaying ? "Pausar" : "Reproducir"}</span>
          </button>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
            {focusMode ? "ritmo calmado" : "estudio en pausa"}
          </p>
        </div>
      </div>
    </section>
  );
}
