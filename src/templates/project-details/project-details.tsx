import { MarkdownContent } from "@/components/ui/markdown-content";
import type { Lang } from "@/lib/projects";
import { Navigation } from "./sections/navigation";
import { ProjectInfo } from "./sections/project-info";

type Props = {
  project: {
    name: string;
    description: string;
    tech: string[];
  };
  content: string;
  lang: Lang;
  backLabel: string;
};

export default function ProjectDetails({
  project,
  content,
  lang,
  backLabel,
}: Props) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 md:px-8">
      <Navigation lang={lang} backLabel={backLabel} />

      <ProjectInfo name={project.name} description={project.description} tech={project.tech} />

      <MarkdownContent content={content} />
    </div>
  );
}