import { Layout } from '@/components/layout';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme';
import { I18nProvider } from '@/i18n/context';
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
  title: 'Arthur Tavares | Full Stack Developer',
  description: 'Portfolio of Arthur Tavares, a full-stack developer focusing on scalable architecture and singular experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontDisplay.variable} font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <I18nProvider>
            <Layout>{children}</Layout>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}