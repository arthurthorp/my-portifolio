"use client";

import { useTranslation } from '@/i18n/context';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/ui/animations';

export const Experience = () => {
    const { t } = useTranslation();

    return (
        <Section id="experience" className="bg-background">
            <SlideUp className="mb-16">
                <Typography variant="label" className="mb-4 block">
                    02. {t.experience.title}
                </Typography>
                <Typography variant="h2">
                    {t.experience.title}
                </Typography>
            </SlideUp>

            <StaggerContainer className="flex flex-col gap-12 border-l-2 border-foreground/10 ml-4 md:ml-0 md:pl-12 pl-8">
                {t.experience.items.map((item, idx) => (
                    <StaggerItem key={idx} className="relative group">
                        {/* Timeline node */}
                        <div className="absolute -left-[42px] md:-left-[58px] top-2 w-5 h-5 bg-background border-4 border-accent rounded-full group-hover:bg-accent"></div>
                        
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                            <Typography variant="h3" className="group-hover:text-accent">
                                {item.role}
                            </Typography>
                            <Typography variant="label" className="text-foreground/60 font-bold border-2 border-foreground/10 px-3 py-1 inline-block bg-muted self-start">
                                {item.period}
                            </Typography>
                        </div>
                        
                        <Typography variant="h4" className="mb-4 text-foreground/80 font-normal italic">
                            @ {item.company}
                        </Typography>
                        
                        <Typography variant="body" className="max-w-3xl">
                            {item.description}
                        </Typography>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </Section>
    );
};
