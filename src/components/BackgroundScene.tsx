import { motion } from "framer-motion";
import { useMouseParallax } from "../hooks/useMouseParallax";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type BackgroundSceneProps = {
  focusMode: boolean;
};

export function BackgroundScene({ focusMode }: BackgroundSceneProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const pointer = useMouseParallax(prefersReducedMotion);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute left-[8%] top-[8%] h-72 w-72 rounded-full bg-[rgba(119,228,255,0.14)] blur-[120px]"
        style={{
          x: pointer.x * (focusMode ? 4 : 10),
          y: pointer.y * (focusMode ? 4 : 10),
        }}
      />
      <motion.div
        className="absolute right-[10%] top-[16%] h-80 w-80 rounded-full bg-[rgba(185,163,255,0.12)] blur-[140px]"
        style={{
          x: pointer.x * (focusMode ? -5 : -12),
          y: pointer.y * (focusMode ? -3 : -9),
        }}
      />
      <motion.div
        className="absolute bottom-[-4rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[rgba(242,195,107,0.08)] blur-[160px]"
        style={{
          x: pointer.x * (focusMode ? 2 : 5),
          y: pointer.y * (focusMode ? -2 : -6),
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_25%),linear-gradient(180deg,rgba(9,11,17,0.15),rgba(3,3,5,0.72))]" />
      <motion.div
        className="absolute inset-0 bg-black"
        animate={{ opacity: focusMode ? 0.28 : 0.08 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {!prefersReducedMotion ? (
        <motion.div
          className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
          animate={{ opacity: [0.18, 0.33, 0.18] }}
          transition={{
            duration: focusMode ? 12 : 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ) : null}
    </div>
  );
}
