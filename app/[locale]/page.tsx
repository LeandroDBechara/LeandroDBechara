import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { SectionHeading } from "@/components/SectionHeading";
import { TechBadge } from "@/components/TechBadge";
import { Link } from "@/lib/i18n/navigation";
import type { AppLocale } from "@/lib/i18n/routing";
import { getFeaturedProjects } from "@/lib/projects";
import { getTranslations } from "next-intl/server";
import { Mail } from "lucide-react";

type HomePageProps = {
  params: Promise<{ locale: AppLocale }>;
};

const skillGroups = {
  languages: ["TypeScript", "JavaScript", "C#", "HTML", "CSS", "SQL"],
  frameworks: ["React", "React Native", "Next.js", "NestJS", ".NET", "Unity"],
  backend: ["Node.js", "Prisma", "PostgreSQL", "MySQL", "SQL Server"],
  tools: ["Docker", "Google Cloud", "Git", "Framer Motion", "Tailwind CSS"],
} as const;

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations();
  const featuredProjects = getFeaturedProjects();

  return (
    <div>
      <section className="section-spacing">
        <div className="container-width">
          <ScrollAnimation className="rounded-3xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 md:p-10">
            <p className="mb-4 font-mono text-sm text-[var(--accent)]">ART / UTC-3</p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-[3.5rem]">
              {t("hero.title")}
            </h1>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">{t("hero.tagline")}</p>
            <p className="mt-6 max-w-3xl text-[var(--text-secondary)]">{t("hero.description")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" locale={locale}>
                <Button>{t("hero.cta_projects")} →</Button>
              </Link>
              <a href="#contact">
                <Button variant="secondary">{t("hero.cta_contact")}</Button>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-width">
          <SectionHeading
            title={t("projects.preview_title")}
            subtitle={t("projects.subtitle")}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ScrollAnimation key={project.slug} delay={index * 0.1}>
                <ProjectCard
                  project={project}
                  locale={locale}
                  viewLabel={t("projects.view_project")}
                />
              </ScrollAnimation>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/projects" locale={locale}>
              <Button variant="ghost">{t("projects.view_all")} →</Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="skills" className="section-spacing">
        <div className="container-width">
          <SectionHeading title={t("skills.title")} subtitle={t("skills.subtitle")} />
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(skillGroups).map(([group, techs], groupIndex) => (
              <ScrollAnimation
                key={group}
                delay={groupIndex * 0.1}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5"
              >
                <h3 className="mb-4 text-lg font-semibold">
                  {t(`skills.categories.${group}` as never)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <TechBadge key={tech}>{tech}</TechBadge>
                  ))}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-spacing">
        <div className="container-width">
          <ScrollAnimation className="rounded-3xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 md:p-10">
            <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />
            <div className="flex flex-wrap items-center gap-3">
              <a href="mailto:leodbechara@gmail.com">
                <Button>{t("contact.email")}</Button>
              </a>
              <a
                href="https://github.com/LeandroDBechara"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/leandro-david-bechara/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
              >
                LinkedIn
              </a>
              <a
                href="mailto:leodbechara@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
              >
                <Mail className="size-4" /> leodbechara@gmail.com
              </a>
            </div>
            <p className="mt-6 text-sm text-[var(--text-secondary)]">{t("contact.open_to_work")}</p>
            <p className="text-sm text-[var(--text-muted)]">{t("contact.availability")}</p>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
