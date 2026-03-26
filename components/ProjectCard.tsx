import { ArrowUpRight } from "lucide-react";
import { Link } from "@/lib/i18n/navigation";
import type { AppLocale } from "@/lib/i18n/routing";
import type { Project } from "@/lib/types";
import { ProjectImage } from "./ProjectImage";
import { TechBadge } from "./TechBadge";

type ProjectCardProps = {
  project: Project;
  locale: AppLocale;
  viewLabel: string;
  compact?: boolean;
};

export function ProjectCard({
  project,
  locale,
  viewLabel,
  compact = false,
}: ProjectCardProps) {
  const title = locale === "es" ? project.titleEs : project.title;
  const summary = locale === "es" ? project.summaryEs : project.summary;

  return (
    <Link
      href={`/projects/${project.slug}`}
      locale={locale}
      className="group block rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-4 transition-all duration-200 ease-out hover:scale-[1.02] hover:border-[var(--accent)]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
    >
      <div className={compact ? "mb-4" : "mb-5"}>
        <ProjectImage
          src={project.thumbnail}
          alt={`${title} preview`}
          className={`w-full rounded-xl border border-[var(--border)] object-cover ${compact ? "h-44" : "h-52"}`}
        />
      </div>

      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-[var(--text-muted)]">
            {project.year} · {project.category}
          </p>
        </div>
        <ArrowUpRight className="size-4 text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]" />
      </div>

      <p className="mb-4 text-sm text-[var(--text-secondary)]">{summary}</p>

      <div className="mb-3 flex flex-wrap gap-2">
        {project.technologies.slice(0, compact ? 3 : 4).map((tech) => (
          <TechBadge key={tech}>{tech}</TechBadge>
        ))}
      </div>

      <span className="inline-flex items-center text-sm font-medium text-[var(--accent)]">
        {viewLabel} <ArrowUpRight className="ml-1 size-4" />
      </span>
    </Link>
  );
}
