"use client";

import { useTranslation } from '@/i18n/context';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';
import { SlideUp, FadeIn } from '@/components/ui/animations';

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <Section id="contact" className="bg-accent text-accent-foreground min-h-[70vh] flex flex-col items-center justify-center text-center py-32 border-none">
            <SlideUp>
                <Typography variant="label" className="text-black mb-8 block bg-black/10 px-4 py-2">
                    05. {t.contact.title}
                </Typography>
            </SlideUp>

            <SlideUp delay={0.1}>
                <Typography variant="h1" className="text-background hover:text-black cursor-default mb-12">
                    {t.contact.subtitle}
                </Typography>
            </SlideUp>

            <SlideUp delay={0.2}>
                <a href={`mailto:${t.contact.email}`} className="group relative inline-flex mb-24">
                    <Typography variant="h2" className="text-black group-hover:text-background lowercase tracking-normal">
                        {t.contact.email}
                    </Typography>
                    <span className="absolute -bottom-4 left-0 w-full h-1.5 bg-black group-hover:bg-background"></span>
                </a>
            </SlideUp>

            <FadeIn delay={0.3} className="flex flex-wrap justify-center gap-12 mt-12">
                <a href="#" className="font-display font-bold text-2xl uppercase tracking-widest text-background hover:text-black hover:underline decoration-4 underline-offset-8">
                    {t.contact.github}
                </a>
                <a href="#" className="font-display font-bold text-2xl uppercase tracking-widest text-background hover:text-black hover:underline decoration-4 underline-offset-8">
                    {t.contact.linkedin}
                </a>
            </FadeIn>
        </Section>
    );
};
