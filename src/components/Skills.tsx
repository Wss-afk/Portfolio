import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { sectionReveal, staggerContainer } from "../lib/motion";

const coreNodes = [
  { label: "Java", className: "node-java" },
  { label: "Spring Boot", className: "node-spring" },
  { label: "Angular", className: "node-angular" },
  { label: "Vue", className: "node-vue" },
  { label: "SQL", className: "node-sql" },
  { label: "Git", className: "node-git" },
];

export function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="immersive-section section-shell py-20 sm:py-28">
      <motion.div
        className="skill-constellation-layout"
        data-testid="skill-constellation-layout"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="constellation-copy" variants={sectionReveal}>
          <span>Mapa de habilidades</span>
          <h2>Stack listo para construir.</h2>
          <p>
            Backend, interfaz, datos y despliegue organizados como un entorno
            de trabajo real, no como una lista decorativa.
          </p>
          <p className="console-kicker">Stack operativo</p>
        </motion.div>

        <motion.div className="stack-monitor" variants={sectionReveal}>
          <div className="monitor-topline">
            <span />
            <span />
            <span />
            <code>stack.monitor</code>
          </div>
          <div
            className="skill-constellation"
            data-testid="skill-radar"
            aria-label="Stack principal"
          >
            <div className="constellation-core">Full Stack</div>
            <span className="constellation-line line-a" />
            <span className="constellation-line line-b" />
            <span className="constellation-line line-c" />
            {coreNodes.map((node) => (
              <span className={`skill-node ${node.className}`} key={node.label}>
                {node.label}
              </span>
            ))}
          </div>
          <div className="monitor-log" aria-hidden="true">
            <span>backend: listo</span>
            <span>build: estable</span>
            <span>ui: responsive</span>
          </div>
        </motion.div>

        <motion.div className="skill-index" variants={sectionReveal}>
          {groups.map(([group, values]) => (
            <section key={group}>
              <p>{group}</p>
              <ul>
                {values.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </section>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
