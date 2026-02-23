'use client';

import Link from 'next/link';
import { useTranslation } from '@/i18n/context';
import { SlideUp } from '@/components/ui/animations';
import { Typography } from '@/components/ui/typography';
import { Button } from './ui/button';

export function NotFoundContent() {
  const { t, lang } = useTranslation();

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 sm:px-6 md:py-24">
      <SlideUp className="flex max-w-xl flex-col items-center text-center">
        <Typography variant="h1">
          404
        </Typography>
        <Typography variant="body" className='my-4'>
          {t.notFound.description}
        </Typography>
        <Link href={lang ? `/${lang}` : '/pt'}>
          <Button
          variant="primary"
          >
            {t.notFound.backHome}
          </Button>
        </Link>
        
      </SlideUp>
    </main>
  );
}
