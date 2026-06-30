import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { sectionReveal, staggerContainer } from "../lib/motion";

export function Projects() {
  return (
    <section id="projects" className="section-shell py-20 sm:py-28">
      <motion.div
        className="project-river-layout"
        data-testid="project-river-layout"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="river-heading" variants={sectionReveal}>
          <span>Proyectos</span>
          <h2>Tres proyectos concretos.</h2>
        </motion.div>

        <div className="project-river-line" aria-hidden="true" />
        {projects.map((project, index) => (
          <motion.article
            className={`project-river-item ${index === 0 ? "case-file" : ""}`}
            data-testid={index === 0 ? "case-file" : undefined}
            key={project.title}
            variants={sectionReveal}
          >
            <div className="project-scan" aria-hidden="true" data-testid="project-scan" />
            <div className="river-marker">
              <span>0{index + 1}</span>
              <small>
                {index === 0
                  ? "Caso destacado"
                  : index === 1
                    ? "Panel CRUD"
                    : "Revisión visual"}
              </small>
            </div>
            <div className="river-preview" aria-hidden="true">
              <div className="preview-chrome">
                <span />
                <span />
                <span />
                <code>{index === 0 ? "Flujo de chat" : project.tech[0]}</code>
              </div>
              <div className="preview-canvas">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="river-copy">
              <h3>{project.title}</h3>
              <p className="project-role">{project.role}</p>
              <p>{project.description}</p>
              <ul className="project-features">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p className="project-outcome">{project.outcome}</p>
              <ul>
                {project.tech.slice(0, 5).map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              {project.repoUrl ? (
                <a className="project-action" href={project.repoUrl}>
                  <Code2 className="h-4 w-4" />
                  Ver código
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
