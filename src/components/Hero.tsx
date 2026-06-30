import { ArrowRight, CornerDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import { useMouseParallax } from "../hooks/useMouseParallax";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { sectionReveal, staggerContainer, wordReveal } from "../lib/motion";

type HeroProps = {
  focusMode: boolean;
};

export function Hero({ focusMode }: HeroProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const pointer = useMouseParallax(prefersReducedMotion);

  return (
    <section
      id="home"
      className="hero-stage relative flex min-h-[100svh] items-start overflow-hidden px-4 pb-8 pt-28 sm:px-6 sm:pb-10 lg:pt-32"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.18]" />
      <motion.div
        className="hero-cursor-glow pointer-events-none absolute left-[22%] top-[34%] h-[24rem] w-[24rem] rounded-full"
        style={{
          x: pointer.x * (focusMode ? 28 : 72),
          y: pointer.y * (focusMode ? 18 : 48),
        }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-orbit pointer-events-none absolute right-[7vw] top-[20vh] hidden h-[34rem] w-[34rem] lg:block"
        data-testid="hero-orbit"
        style={{
          x: pointer.x * (focusMode ? -10 : -24),
          y: pointer.y * (focusMode ? 8 : 20),
        }}
      >
        <span />
        <span />
        <span />
      </motion.div>
      <motion.div
        className="hero-code-window glass pointer-events-none absolute right-[6vw] top-[16vh] hidden w-[27rem] rounded-[1.4rem] p-5 lg:block"
        initial={{ opacity: 0, y: 30, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-5 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--amber)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--cyan)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--violet)]" />
        </div>
        <div className="space-y-3 font-mono text-sm text-[var(--muted)]">
          <p>
            <span className="text-[var(--cyan)]">const</span> desarrollador =
            "Shanshui Wang";
          </p>
          <p>tecnologías: ["Java", "Spring Boot", "Angular", "Vue"]</p>
          <p>enfoque: "APIs REST + interfaces limpias"</p>
          <motion.p
            className="text-[var(--cyan)]"
            animate={{ opacity: [0.55, 1, 0.55] }}
            transition={{
              duration: focusMode ? 3.2 : 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            api: conectada
          </motion.p>
          <p className="text-[var(--amber)]">
            estado: "construyendo en calma"<span className="terminal-cursor" />
          </p>
        </div>
      </motion.div>

      <div className="section-shell relative z-10 grid min-h-[calc(100svh-9rem)] items-start gap-8 pt-12 sm:pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.6fr)] lg:items-start lg:pt-[43vh]">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          animate="visible"
        >
          <p className="text-sm uppercase tracking-[0.34em] text-[var(--cyan)]">
            Desarrollador Full Stack Junior / Málaga
          </p>
          <motion.h1
            className="hero-title font-display mt-6 max-w-4xl text-5xl font-semibold leading-[0.96] text-[var(--text)] sm:text-7xl lg:text-8xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {profile.heroWords.map((word) => (
              <motion.span
                key={word}
                variants={wordReveal}
                className="mr-[0.35ch] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="font-display mt-5 max-w-3xl text-3xl font-semibold text-[var(--text)]/90 sm:text-5xl"
            variants={sectionReveal}
          >
            {profile.headline}
          </motion.p>
          <motion.p
            className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg"
            variants={sectionReveal}
          >
            Java / Spring Boot / Angular / Vue. APIs REST, interfaces limpias y
            lógica backend sólida.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            variants={sectionReveal}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text)] px-5 py-3 text-sm font-semibold text-[var(--bg)] transition hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-[var(--cyan)]"
            >
              Ver proyectos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--cyan)]"
            >
              Contactar
              <CornerDownRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.p
            className="mt-8 text-sm uppercase tracking-[0.28em] text-[var(--muted)]"
            variants={sectionReveal}
          >
            Disponible para roles junior web
          </motion.p>
        </motion.div>

        <motion.div
          className="relative hidden lg:flex lg:items-end lg:justify-end"
          variants={sectionReveal}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.18, duration: 0.8 }}
        >
          <div className="glass w-full max-w-[23rem] rounded-[1.5rem] p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {focusMode ? "Modo enfoque activo" : "Disponible para crecer"}
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--text)]">
              {focusMode
                ? "La interfaz baja el ritmo y deja más espacio al contenido."
                : "Backend con Java. Frontend con Angular y Vue. Un camino claro para crecer."}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[var(--bg)]" />
    </section>
  );
}
