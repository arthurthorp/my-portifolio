"use client";

import { useTranslation } from '@/i18n/context';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/ui/animations';

export const Projects = () => {
    const { t } = useTranslation();

    return (
        <Section id="projects" className="bg-foreground text-background">
            <SlideUp className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-4 border-background/20 pb-8">
                <div>
                    <Typography variant="label" className="text-accent mb-4 block">
                        03. {t.projects.title}
                    </Typography>
                    <Typography variant="h2" className="text-background">
                        {t.projects.title}
                    </Typography>
                </div>
            </SlideUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {t.projects.items.map((project, idx) => (
                    <StaggerItem key={idx} className="group flex flex-col">
                        <div className="relative aspect-video bg-background/5 border-2 border-background/20 mb-8 overflow-hidden flex items-center justify-center group-hover:border-accent">
                            {/* Placeholder for project image */}
                            <Typography variant="h3" className="text-background/10 font-black group-hover:scale-110 transition-transform duration-500">
                                {project.name}
                            </Typography>
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-accent/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center justify-center p-8">
                                <Button variant="secondary" className="mb-4">
                                    {t.projects.viewProject}
                                </Button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 flex-1">
                            <Typography variant="h3" className="text-background uppercase tracking-tight">
                                {project.name}
                            </Typography>
                            <Typography variant="body" className="text-background/70">
                                {project.description}
                            </Typography>

                            <div className="flex flex-wrap gap-2 mt-auto pt-6">
                                {project.tech.map((tech, tIdx) => (
                                    <span key={tIdx} className="px-3 py-1 border border-background/30 text-xs font-sans font-medium uppercase tracking-widest text-background/90">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </Section>
    );
};
