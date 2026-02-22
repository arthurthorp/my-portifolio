"use client";

import { useTranslation } from '@/i18n/context';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { FadeIn, SlideUp, SlideInRight } from '@/components/ui/animations';
import Link from 'next/link';
import Image from 'next/image';

export const Hero = () => {
    const { t } = useTranslation();
    const roleParts = t.hero.role.split(/(FULL-STACK)/i);

    return (
        <Section className="min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex items-center justify-center pt-20 md:pt-28 pb-12 md:pb-16 relative overflow-hidden">
            <FadeIn delay={0.5} duration={1.5} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-foreground/10 rounded-full animate-spin-slow" style={{ animationDuration: '60s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-foreground/20 rounded-full animate-reverse-spin" style={{ animationDuration: '45s' }}></div>
            </FadeIn>
            
            <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:gap-16 relative z-10">
                <div className="flex flex-col items-start">
                    <SlideUp delay={0.1}>
                        <div className="inline-block bg-accent text-accent-foreground px-4 py-1 font-bold tracking-widest uppercase mb-6 text-sm transform -rotate-2">
                            {t.hero.based}
                        </div>
                    </SlideUp>
                    
                    <SlideUp delay={0.2}>
                        <Typography variant="h1" className="mb-4">
                            {t.hero.greeting} <br />
                            {roleParts.map((part, index) =>
                                /full-stack/i.test(part) ? (
                                    <Text
                                        key={`${part}-${index}`}
                                        className="mb-3 inline-block text-accent underline decoration-8 underline-offset-8 py-0.5 shadow-sm"
                                    >
                                        {part}
                                    </Text>
                                ) : (
                                    <Text key={`${part}-${index}`} className="text-foreground">
                                        {part}
                                    </Text>
                                ),
                            )}
                        </Typography>
                    </SlideUp>
                    
                    <SlideInRight delay={0.4}>
                        <Typography variant="body" className="mb-12 max-w-2xl text-xl border-l-4 border-accent pl-6 py-2">
                            {t.hero.summary}
                        </Typography>
                    </SlideInRight>
                    
                    <SlideUp delay={0.5} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href="#contact" passHref>
                            <Button variant="primary" size="lg" className="w-full sm:w-auto">
                                {t.contact.cta}
                            </Button>
                        </Link>
                        <Link href="#projects" passHref>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                {t.projects.viewProject}
                            </Button>
                        </Link>
                    </SlideUp>
                </div>

                <FadeIn delay={0.35} className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none mx-auto">
                    <div className="relative aspect-4/5 w-full overflow-hidden border-2 border-foreground bg-muted shadow-[10px_10px_0_0_rgba(249,115,22,0.8)] dark:shadow-[10px_10px_0_0_rgba(249,115,22,0.25)]">
                        <Image
                            src="/profile_image.webp"
                            alt="Arthur presenting a software engineering lecture on stage"
                            fill
                            priority
                            quality={100}
                            sizes="(max-width: 768px) 80vw, 360px"
                        />
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
};
