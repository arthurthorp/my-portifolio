"use client";

import Link from 'next/link';
import { useTranslation } from '@/i18n/context';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';
import { Text } from '@/components/ui/text';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/ui/animations';

export const Projects = () => {
    const { t, lang } = useTranslation();

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
                        

                        <div className="flex flex-col gap-4 flex-1">
                            <Typography variant="h3" className="text-background uppercase tracking-tight">
                                {project.name}
                            </Typography>
                            <Typography variant="body" className="text-background/70">
                                {project.description}
                            </Typography>

                            

                            <div className="flex flex-wrap gap-2 mt-auto pt-6">
                                {project.tech.map((tech, tIdx) => (
                                    <Text
                                        key={tIdx}
                                        variant="badge"
                                        className="border-background/30 text-background/90"
                                    >
                                        {tech}
                                    </Text>
                                ))}
                            </div>

                            <Link
                                href={`/${lang}/projects/${project.slug}`}
                                className="w-fit font-sans text-sm font-bold uppercase tracking-widest text-accent relative group transition-colors duration-200 ease-out"
                            >
                                {t.projects.viewProject}

                                <Text className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-[width] duration-300 group-hover:w-full" />
                            </Link>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </Section>
    );
};
