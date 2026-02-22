"use client";

import { useTranslation } from '@/i18n/context';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';
import { SlideUp, FadeIn } from '@/components/ui/animations';

export const About = () => {
    const { t } = useTranslation();

    return (
        <Section id="about" className="bg-foreground text-background relative">
            <FadeIn delay={0.2} className="absolute top-0 right-0 w-32 h-32 bg-accent" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} children={undefined} />

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 md:gap-12 xl:gap-20">
                <div className="xl:col-span-5">
                    <SlideUp className="xl:sticky xl:top-28">
                        <Typography variant="label" className="text-accent mb-4 block">
                            01. {t.about.title}
                        </Typography>
                        <Typography variant="h2" className="text-background">
                            {t.about.title}
                        </Typography>
                    </SlideUp>
                </div>
                
                <div className="xl:col-span-7 flex flex-col gap-6 md:gap-8">
                    <SlideUp delay={0.2}>
                        <Typography variant="body" className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-background/90 font-medium max-w-3xl">
                            {t.about.description1}
                        </Typography>
                    </SlideUp>
                    
                    <SlideUp delay={0.3}>
                        <div className="h-0.5 w-full bg-background/20 my-4"></div>
                    </SlideUp>
                    
                    <SlideUp delay={0.4}>
                        <Typography variant="body" className="text-base sm:text-lg lg:text-xl leading-relaxed text-background/70 max-w-3xl">
                            {t.about.description2}
                        </Typography>
                    </SlideUp>
                </div>
            </div>
        </Section>
    );
};
