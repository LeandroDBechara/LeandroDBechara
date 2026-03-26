import { Button } from "@/components/Button";
import { ProjectImage } from "@/components/ProjectImage";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { SectionHeading } from "@/components/SectionHeading";
import { TechBadge } from "@/components/TechBadge";
import { getProjectBySlug, getProjects } from "@/lib/projects";
import { Link } from "@/lib/i18n/navigation";
import type { AppLocale } from "@/lib/i18n/routing";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type ProjectDetailPageProps = {
  params: Promise<{ locale: AppLocale; slug: string }>;
};

export function generateStaticParams() {
  return getProjects().flatMap((project) => [
    { locale: "en", slug: project.slug },
    { locale: "es", slug: project.slug },
  ]);
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: locale === "es" ? "Proyecto no encontrado" : "Project not found",
    };
  }

  const title = locale === "es" ? project.titleEs : project.title;
  const summary = locale === "es" ? project.summaryEs : project.summary;

  return {
    title: `${title} | Leandro David Bechara`,
    description: summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations("projects");
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const title = locale === "es" ? project.titleEs : project.title;
  const summary = locale === "es" ? project.summaryEs : project.summary;
  const problem = locale === "es" ? project.problemEs : project.problem;
  const solution = locale === "es" ? project.solutionEs : project.solution;
  const challenges = locale === "es" ? project.challengesEs : project.challenges;
  const features = locale === "es" ? project.featuresEs : project.features;
  const architecture = locale === "es" ? project.architectureEs : project.architecture;

  return (
    <article className="section-spacing">
      <div className="container-width">
        <ScrollAnimation className="mb-10 rounded-3xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 md:p-10">
          <p className="mb-3 text-sm text-[var(--text-muted)]">
            {project.year} · {t(`category.${project.category}` as never)}
          </p>
          <h1 className="text-4xl font-extrabold md:text-[3rem]">{title}</h1>
          <p className="mt-2 text-[var(--text-secondary)]">{summary}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-tertiary)] px-3 py-1 text-xs text-[var(--accent)]">
              {t(`status.${project.status}` as never)}
            </span>
            {project.technologies.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </ScrollAnimation>

        <section className="mb-10">
          <div className="grid gap-4 md:grid-cols-3">
            {project.gallery.map((image, index) => (
              <ScrollAnimation key={image} delay={index * 0.1}>
                <ProjectImage
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  className="h-56 w-full rounded-2xl border border-[var(--border)] object-cover"
                />
              </ScrollAnimation>
            ))}
          </div>
        </section>

        <section className="mb-10 grid gap-6 lg:grid-cols-2">
          <ScrollAnimation className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6">
            <SectionHeading title={t("problem_solution")} />
            <h3 className="mb-2 text-sm uppercase tracking-[0.12em] text-[var(--text-muted)]">
              {t("problem")}
            </h3>
            <p className="mb-4 text-[var(--text-secondary)]">{problem}</p>
            <h3 className="mb-2 text-sm uppercase tracking-[0.12em] text-[var(--text-muted)]">
              {t("solution")}
            </h3>
            <p className="text-[var(--text-secondary)]">{solution}</p>
          </ScrollAnimation>

          <ScrollAnimation className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6">
            <SectionHeading title={t("main_challenges")} />
            <ul className="space-y-2 text-[var(--text-secondary)]">
              {challenges.map((item) => (
                <li key={item} className="rounded-lg bg-[var(--bg-tertiary)] px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </ScrollAnimation>
        </section>

        <section className="mb-10 grid gap-6 lg:grid-cols-2">
          <ScrollAnimation className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6">
            <SectionHeading title={t("key_features")} />
            <ul className="space-y-2 text-[var(--text-secondary)]">
              {features.map((item) => (
                <li key={item} className="rounded-lg bg-[var(--bg-tertiary)] px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </ScrollAnimation>

          <ScrollAnimation className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6">
            <SectionHeading title={t("technical_stack")} />
            <p className="mb-4 text-[var(--text-secondary)]">{architecture}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </div>
          </ScrollAnimation>
        </section>

        <section className="mb-4 flex flex-wrap gap-3">
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <Button>{t("view_live")}</Button>
            </a>
          ) : null}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">{t("view_source")}</Button>
          </a>
          {project.apk ? (
            <a href={project.apk} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost">{t("download_apk")}</Button>
            </a>
          ) : null}
          <Link href="/projects" locale={locale}>
            <Button variant="ghost">← {t("title")}</Button>
          </Link>
        </section>
      </div>
    </article>
  );
}
