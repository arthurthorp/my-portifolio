import pt from '@/i18n/dictionaries/pt';
import en from '@/i18n/dictionaries/en';
import { readFile } from 'fs/promises';
import path from 'path';

export type Lang = 'pt' | 'en';

type ProjectItem = {
  name: string;
  slug: string;
  description: string;
  tech: string[];
  link: string;
};

const byLang = { pt: pt.projects.items, en: en.projects.items } as const;

export function getAllSlugs(): string[] {
  const items = pt.projects.items as ProjectItem[];
  return items.map((p) => p.slug).filter(Boolean);
}

export function getProjectBySlug(lang: Lang, slug: string): ProjectItem | null {
  const items = byLang[lang] as ProjectItem[];
  return items.find((p) => p.slug === slug) ?? null;
}

export async function getProjectContent(slug: string, lang: Lang): Promise<string | null> {
  try {
    const base = process.cwd();
    const filePath = path.join(base, 'content', 'projects', slug, `${lang}.md`);
    const raw = await readFile(filePath, 'utf-8');
    return raw;
  } catch {
    return null;
  }
}
