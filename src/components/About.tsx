import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import { sectionReveal, staggerContainer } from "../lib/motion";

const trajectory = [
  {
    marker: "01",
    title: "Base técnica",
    detail: "DAW, Java, SQL y fundamentos de aplicaciones web.",
  },
  {
    marker: "02",
    title: "Backend aplicado",
    detail: "Spring Boot, APIs REST, autenticación y persistencia de datos.",
  },
  {
    marker: "03",
    title: "Frontend práctico",
    detail: "Angular, Vue y maquetación responsive con foco en claridad.",
  },
];

const principles = ["Código mantenible", "Interfaz clara", "Aprendizaje continuo"];

export function About() {
  return (
    <section id="about" className="immersive-section section-shell py-20 sm:py-28">
      <div className="section-radar" aria-hidden="true" />
      <motion.div
        className="about-rail-layout"
        data-testid="about-rail-layout"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="rail-heading" variants={sectionReveal}>
          <span>Espacio de trabajo</span>
          <h2>Perfil práctico. Dirección clara.</h2>
        </motion.div>

        <motion.aside className="profile-manifest" variants={sectionReveal}>
          <div className="manifest-window-head">
            <span />
            <span />
            <span />
            <code>profile.ts</code>
          </div>
          <p className="console-kicker">Trayectoria</p>
          <h3>{profile.name}</h3>
          <strong>{profile.role}</strong>
          <p>{profile.summary}</p>
          <div className="profile-console" aria-label="Resumen profesional">
            <span>
              <b>stack</b> Java / Spring Boot / Angular / Vue
            </span>
            <span>
              <b>base</b> SQL / APIs REST / Git
            </span>
            <span>
              <b>objetivo</b> interfaces claras y backend mantenible
            </span>
          </div>
        </motion.aside>

        <motion.div
          className="trajectory-rail"
          data-testid="profile-timeline"
          variants={sectionReveal}
        >
          <div className="timeline-axis-label" aria-hidden="true">
            ruta de aprendizaje
          </div>
          <div className="trajectory-line" aria-hidden="true" />
          {trajectory.map((item, index) => (
            <motion.article
              className="trajectory-step"
              key={item.title}
              variants={sectionReveal}
              custom={index}
            >
              <span>{item.marker}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="principle-ticker" variants={sectionReveal}>
          {principles.map((principle, index) => (
            <span key={principle}>
              0{index + 1} / {principle}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
