import { Layout } from '@/components/layout';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { ThemeProvider } from '@/components/theme';
import { I18nProvider } from '@/i18n/context';
import { cn } from '@/lib/utils';
import { Syne, DM_Sans } from 'next/font/google';

const fontDisplay = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const fontSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Arthur Cardoso | Full Stack Developer',
  description:
    'Portfolio of Arthur Cardoso, a full-stack developer focused on scalable architecture and high-quality digital products.',
  openGraph: {
    title: 'Arthur Cardoso | Full Stack Developer',
    description:
      'Portfolio of Arthur Cardoso, a full-stack developer focused on scalable architecture and high-quality digital products.',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arthur Cardoso | Full Stack Developer',
    description:
      'Portfolio of Arthur Cardoso, a full-stack developer focused on scalable architecture and high-quality digital products.',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = (await headers()).get('x-locale');
  const htmlLang = locale === 'en' ? 'en' : 'pt-BR';
  const initialLang = locale === 'en' ? 'en' : 'pt';

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          fontDisplay.variable,
          'font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-black',
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <I18nProvider initialLang={initialLang}>
            <Layout>{children}</Layout>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}