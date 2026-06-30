import { Code2, ExternalLink } from "lucide-react";
import type { Project } from "../data/portfolio";
import { TechChip } from "./TechChip";
import { TiltCard } from "./TiltCard";

type ProjectCardProps = {
  project: Project;
};

const tones: Record<Project["imageTone"], string> = {
  cyan: "from-[rgba(119,228,255,0.25)] via-[rgba(72,138,255,0.18)] to-[rgba(12,18,35,0.85)]",
  amber: "from-[rgba(242,195,107,0.26)] via-[rgba(201,122,55,0.16)] to-[rgba(15,12,10,0.88)]",
  violet:
    "from-[rgba(185,163,255,0.24)] via-[rgba(108,96,232,0.18)] to-[rgba(11,10,25,0.9)]",
};

function ProjectPreview({ tone }: { tone: Project["imageTone"] }) {
  if (tone === "cyan") {
    return (
      <div className="project-preview">
        <p className="preview-label">Flujo de chat</p>
        <div className="mt-5 space-y-3">
          <span className="block w-2/3 rounded-full bg-white/20 p-3" />
          <span className="ml-auto block w-1/2 rounded-full bg-[var(--cyan)]/45 p-3" />
          <span className="block w-3/4 rounded-full bg-white/15 p-3" />
        </div>
      </div>
    );
  }

  if (tone === "amber") {
    return (
      <div className="project-preview">
        <p className="preview-label">Panel CRUD</p>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, index) => (
            <span
              key={index}
              className={`h-8 rounded-lg ${
                index % 3 === 1 ? "bg-[var(--amber)]/35" : "bg-white/14"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="project-preview">
      <p className="preview-label">Revisión visual</p>
      <div className="mt-5 grid grid-cols-[0.8fr_1.2fr] gap-3">
        <span className="h-24 rounded-xl bg-white/15" />
        <div className="space-y-2">
          <span className="block h-5 rounded-full bg-[var(--violet)]/35" />
          <span className="block h-5 w-2/3 rounded-full bg-white/15" />
          <span className="block h-12 rounded-xl bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TiltCard className="h-full">
      <article className="glass group h-full overflow-hidden rounded-[1.9rem]">
        <div className="relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${tones[project.imageTone]} transition duration-[1200ms] group-hover:scale-105`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_35%,rgba(0,0,0,0.42))]" />
          <div
            aria-hidden="true"
            className="project-scan"
            data-testid="project-scan"
          />
          <div className="absolute inset-x-6 top-14">
            <ProjectPreview tone={project.imageTone} />
          </div>
          <div className="absolute inset-x-6 top-6 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
          </div>
          <div className="relative flex min-h-[15rem] items-end p-6">
            <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Proyecto
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-[var(--text)]">
                {project.title}
              </p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-xl font-semibold leading-7 text-[var(--text)]">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <TechChip key={tech} label={tech} />
            ))}
          </div>
          {project.liveUrl || project.repoUrl ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--cyan)]"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver demo
                </a>
              ) : null}
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-4 py-2 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--cyan)]"
                >
                  <Code2 className="h-4 w-4" />
                  Ver código
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </article>
    </TiltCard>
  );
}
