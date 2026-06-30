import { MoonStar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

type NavbarProps = {
  focusMode: boolean;
  onToggleFocusMode: () => void;
};

const links = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#about" },
  { label: "Tecnologías", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar({ focusMode, onToggleFocusMode }: NavbarProps) {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 px-4 pt-4"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-shell">
        <div className="glass flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
          <a
            href="#home"
            className="flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold tracking-[0.24em] text-[var(--text)] transition hover:text-[var(--cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--cyan)]"
          >
            <Sparkles className="h-4 w-4" />
            <span>LOFI.DEV</span>
          </a>
          <nav className="hidden items-center gap-2 md:flex" aria-label="Principal">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-[var(--muted)] transition hover:text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--cyan)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={onToggleFocusMode}
            aria-pressed={focusMode}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] ${
              focusMode
                ? "border-[rgba(119,228,255,0.42)] bg-[rgba(119,228,255,0.16)] text-[var(--text)] shadow-glow"
                : "border-white/10 bg-white/5 text-[var(--muted)] hover:text-[var(--text)]"
            }`}
          >
            <MoonStar className="h-4 w-4" />
            <span>Modo enfoque</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
