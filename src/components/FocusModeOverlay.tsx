import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../data/portfolio";

type FocusModeOverlayProps = {
  active: boolean;
};

export function FocusModeOverlay({ active }: FocusModeOverlayProps) {
  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          className="pointer-events-none fixed inset-x-0 top-24 z-30 flex justify-center px-4"
          initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass rounded-full px-5 py-3 text-center text-sm tracking-[0.22em] text-[var(--text)]">
            {profile.focusQuote}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
