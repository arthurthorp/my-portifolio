"use client";

import { useTranslation } from '@/i18n/context';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { FadeIn, SlideUp, SlideInRight } from '@/components/ui/animations';
import Link from 'next/link';

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <Section className="min-h-screen flex items-center justify-center pt-32 pb-16 relative overflow-hidden">
            {/* Background design elements */}
            <FadeIn delay={0.5} duration={1.5} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-foreground/10 rounded-full animate-spin-slow" style={{ animationDuration: '60s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-foreground/20 rounded-full animate-reverse-spin" style={{ animationDuration: '45s' }}></div>
            </FadeIn>
            
            <div className="flex flex-col items-start max-w-4xl relative z-10">
                <SlideUp delay={0.1}>
                    <div className="inline-block bg-accent text-accent-foreground px-4 py-1 font-bold tracking-widest uppercase mb-6 text-sm transform -rotate-2">
                        {t.hero.based}
                    </div>
                </SlideUp>
                
                <SlideUp delay={0.2}>
                    <Typography variant="h1" className="mb-4">
                        {t.hero.greeting} <br />
                        <span className="text-accent underline decoration-8 underline-offset-8">ARTHUR</span>
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
                
                <SlideUp delay={0.5} className="flex flex-col sm:flex-row gap-4">
                    <Link href="#contact" passHref legacyBehavior>
                        <Button variant="primary" size="lg">
                            {t.contact.cta}
                        </Button>
                    </Link>
                    <Link href="#projects" passHref legacyBehavior>
                        <Button variant="outline" size="lg">
                            {t.projects.viewProject}
                        </Button>
                    </Link>
                </SlideUp>
            </div>
        </Section>
    );
};
