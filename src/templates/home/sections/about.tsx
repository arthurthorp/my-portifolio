"use client";

import { useTranslation } from '@/i18n/context';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';
import { SlideUp, FadeIn } from '@/components/ui/animations';

export const About = () => {
    const { t } = useTranslation();

    return (
        <Section id="about" className="bg-foreground text-background relative">
            {/* Brutalist geometric decoration */}
            <FadeIn delay={0.2} className="absolute top-0 right-0 w-32 h-32 bg-accent" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                <div className="lg:col-span-5">
                    <SlideUp className="sticky top-32">
                        <Typography variant="label" className="text-accent mb-4 block">
                            01. {t.about.title}
                        </Typography>
                        <Typography variant="h2" className="text-background">
                            {t.about.title}
                        </Typography>
                    </SlideUp>
                </div>
                
                <div className="lg:col-span-7 flex flex-col gap-8">
                    <SlideUp delay={0.2}>
                        <Typography variant="body" className="text-2xl leading-relaxed text-background/90 font-medium">
                            {t.about.description1}
                        </Typography>
                    </SlideUp>
                    
                    <SlideUp delay={0.3}>
                        <div className="h-0.5 w-full bg-background/20 my-4"></div>
                    </SlideUp>
                    
                    <SlideUp delay={0.4}>
                        <Typography variant="body" className="text-xl leading-relaxed text-background/70">
                            {t.about.description2}
                        </Typography>
                    </SlideUp>
                </div>
            </div>
        </Section>
    );
};
