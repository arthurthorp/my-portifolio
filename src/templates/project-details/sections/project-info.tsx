import { Typography } from "@/components/ui/typography"

interface ProjectInfoProps {
    name: string;
    description: string;
    tech: string[];
}

export const ProjectInfo = ({ name, description, tech }: ProjectInfoProps) => {
    return (
        <section className="mb-10 md:mb-14">
        <Typography variant="h1" as="h1">
          {name}
        </Typography>

        <Typography variant="body" className="mt-4 text-muted-foreground">
          {description}
        </Typography>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-muted/50 px-2 py-1 text-xs font-medium uppercase tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    )
}