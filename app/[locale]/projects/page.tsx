import { ProjectCard } from "@/components/ProjectCard";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { SectionHeading } from "@/components/SectionHeading";
import { getProjects } from "@/lib/projects";
import type { AppLocale } from "@/lib/i18n/routing";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type ProjectsPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === "es";

  return {
    title: isSpanish ? "Proyectos | Leandro David Bechara" : "Projects | Leandro David Bechara",
    description: isSpanish
      ? "Listado de proyectos de Leandro David Bechara en mobile, backend, web y game development."
      : "Project list by Leandro David Bechara across mobile, backend, web and game development.",
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  const t = await getTranslations("projects");
  const projects = getProjects();

  return (
    <section className="section-spacing">
      <div className="container-width">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.slug} delay={index * 0.1}>
              <ProjectCard
                project={project}
                locale={locale}
                viewLabel={t("view_project")}
                compact
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
