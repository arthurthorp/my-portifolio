import Link from "next/link";
import { MarkdownContent } from "@/components/ui/markdown-content";
import { Typography } from "@/components/ui/typography";
import type { Lang } from "@/lib/projects";

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
      <nav className="mb-8" aria-label="Breadcrumb">
        <Link
          href={`/${lang}#projects`}
          className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors uppercase tracking-widest"
        >
          ← {backLabel}
        </Link>
      </nav>

      <section className="mb-10 md:mb-14">
        <Typography variant="h1" as="h1">
          {project.name}
        </Typography>

        <Typography variant="body" className="mt-4 text-muted-foreground">
          {project.description}
        </Typography>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-muted/50 px-2 py-1 text-xs font-medium uppercase tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <MarkdownContent content={content} />
    </div>
  );
}