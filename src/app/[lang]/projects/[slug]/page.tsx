import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllSlugs, getProjectBySlug, getProjectContent, type Lang } from '@/lib/projects';
import { MarkdownContent } from '@/components/ui/markdown-content';
import { Typography } from '@/components/ui/typography';
import { getDictionary } from '@/i18n/dictionaries';

const locales = ['pt', 'en'] as const;

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const currentLang = locales.includes(lang as Lang) ? (lang as Lang) : 'pt';
  const project = getProjectBySlug(currentLang, slug);
  if (!project) return { title: 'Project' };

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = `${baseUrl}/${currentLang}/projects/${slug}`;

  return {
    title: `${project.name} | Arthur Tavares`,
    description: project.description,
    alternates: {
      canonical: `/${currentLang}/projects/${slug}`,
      languages: {
        'pt-BR': `/pt/projects/${slug}`,
        en: `/en/projects/${slug}`,
      },
    },
    openGraph: {
      title: `${project.name} | Arthur Tavares`,
      description: project.description,
      type: 'article',
      url,
      locale: currentLang === 'pt' ? 'pt_BR' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} | Arthur Tavares`,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const currentLang = locales.includes(lang as Lang) ? (lang as Lang) : 'pt';
  const project = getProjectBySlug(currentLang, slug);
  const content = await getProjectContent(slug, currentLang);

  if (!project || !content) notFound();

  const dict = getDictionary(currentLang);
  const backLabel = dict.projects.backToList;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 md:px-8">
      <nav className="mb-8" aria-label="Breadcrumb">
        <Link
          href={`/${currentLang}#projects`}
          className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors uppercase tracking-widest"
        >
          ← {backLabel}
        </Link>
      </nav>

      <section className="mb-10 md:mb-14">
        <Typography variant="h1" as="h1" className="text-foreground">
          {project.name}
        </Typography>
        <Typography variant="body" className="mt-4 text-muted-foreground">
          {project.description}
        </Typography>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-muted/50 px-2 py-1 text-xs font-medium uppercase tracking-wide text-foreground/80"
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
