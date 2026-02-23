import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllSlugs,
  getProjectBySlug,
  getProjectContent,
  type Lang,
} from "@/lib/projects";
import { getDictionary } from "@/i18n/dictionaries";
import ProjectDetails from "@/templates/project-details/project-details";

const locales = ["pt", "en"] as const;

type PageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  const params: { lang: string; slug: string }[] = [];

  for (const lang of locales) {
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }

  return params;
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { lang, slug } = await params;

  const currentLang = locales.includes(lang as Lang)
    ? (lang as Lang)
    : "pt";

  const project = getProjectBySlug(currentLang, slug);
  if (!project) return { title: "Project" };

  return {
    title: `${project.name} | Arthur Cardoso`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { lang, slug } = await params;

  const currentLang = locales.includes(lang as Lang)
    ? (lang as Lang)
    : "pt";

  const project = getProjectBySlug(currentLang, slug);
  const content = await getProjectContent(slug, currentLang);

  if (!project || !content) notFound();

  const dict = getDictionary(currentLang);

  return (
    <ProjectDetails
      project={project}
      content={content}
      lang={currentLang}
      backLabel={dict.projects.backToList}
    />
  );
}