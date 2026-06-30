import { motion } from "framer-motion";
import { sectionReveal } from "../lib/motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      className="max-w-2xl"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <p className="text-xs uppercase tracking-[0.32em] text-[var(--cyan)]">
        {eyebrow}
      </p>
      <h2 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
