"use client";

import { useTranslation } from '@/i18n/context';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { FadeIn, SlideUp, SlideInRight } from '@/components/ui/animations';
import Link from 'next/link';

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <Section className="min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex items-center justify-center pt-20 md:pt-28 pb-12 md:pb-16 relative overflow-hidden">
            {/* Background design elements */}
            <FadeIn delay={0.5} duration={1.5} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-foreground/10 rounded-full animate-spin-slow" style={{ animationDuration: '60s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-foreground/20 rounded-full animate-reverse-spin" style={{ animationDuration: '45s' }}></div>
            </FadeIn>
            
            <div className="flex flex-col items-start max-w-4xl relative z-10 w-full">
                <SlideUp delay={0.1}>
                    <div className="inline-block bg-accent text-accent-foreground px-4 py-1 font-bold tracking-widest uppercase mb-6 text-sm transform -rotate-2">
                        {t.hero.based}
                    </div>
                </SlideUp>
                
                <SlideUp delay={0.2}>
                    <Typography variant="h1" className="mb-4">
                        {t.hero.greeting} <br />
                        <Text className="text-accent underline decoration-8 underline-offset-8">ARTHUR</Text>
                    </Typography>
                </SlideUp>
                
                <SlideUp delay={0.3}>
                    <Typography variant="h2" className="mb-8 text-muted-foreground max-w-3xl leading-tight">
                        {t.hero.role}
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
        </Section>
    );
};
