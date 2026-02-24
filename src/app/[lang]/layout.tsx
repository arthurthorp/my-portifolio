import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const locales = ['pt', 'en'] as const;
type Lang = (typeof locales)[number];

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

const metadataByLang: Record<Lang, { title: string; description: string }> = {
  pt: {
    title: 'Arthur Cardoso | Desenvolvedor Full Stack',
    description:
      'Portfólio de Arthur Cardoso, desenvolvedor Full Stack focado em arquitetura escalável e produtos digitais de alta qualidade.',
  },
  en: {
    title: 'Arthur Cardoso | Full Stack Developer',
    description:
      'Portfolio of Arthur Cardoso, a Full Stack developer focused on scalable architecture and high-quality digital products.',
  },
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LangLayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = locales.includes(lang as Lang) ? (lang as Lang) : 'pt';
  const current = metadataByLang[currentLang];

  return {
    title: current.title,
    description: current.description,
    alternates: {
      canonical: `/${currentLang}`,
      languages: {
        'pt-BR': '/pt',
        en: '/en',
      },
    },
    openGraph: {
      title: current.title,
      description: current.description,
      type: 'website',
      url: `/${currentLang}`,
      locale: currentLang === 'pt' ? 'pt_BR' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: current.title,
      description: current.description,
    },
  };
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  if (!locales.includes(lang as Lang)) {
    notFound();
  }

  return children;
}
