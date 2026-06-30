import { ArrowUpRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { contactLinks } from "../data/portfolio";
import { sectionReveal, staggerContainer } from "../lib/motion";

export function Contact() {
  return (
    <section id="contact" className="section-shell py-20 sm:py-28">
      <motion.div
        className="contact-strip-layout"
        data-testid="contact-strip-layout"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="contact-command-head">
          <Terminal className="h-5 w-5" />
          <span>Terminal de contacto</span>
        </div>

        <div className="contact-strip-main">
          <div>
            <p>Contacto</p>
            <h2>Construyamos el siguiente proyecto.</h2>
          </div>
          <p>
            Disponible para prácticas, rol junior o colaboración web con base en
            Java, Spring Boot, Angular y Vue.
          </p>
        </div>

        <motion.div
          className="contact-command-list"
          data-testid="terminal-prompt"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="terminal-prompt-line" aria-hidden="true">
            <span>~/portfolio</span>
            <strong>seleccionar canal</strong>
          </div>
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              variants={sectionReveal}
              className="contact-command"
            >
              <span>$ abrir {link.label.toLowerCase()}</span>
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
