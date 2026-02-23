"use client";

import { useTranslation } from '@/i18n/context';
import { Typography } from '@/components/ui/typography';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/ui/animations';

export const Skills = () => {
    const { t } = useTranslation();

    const frontendSkills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"];
    const backendSkills = ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "Prisma"];
    const toolSkills = ["Git", "Docker", "AWS", "CI/CD", "Figma", "Jest"];

    const renderSkillRow = (title: string, skills: string[]) => (
        <SlideUp className="border-t-2 border-foreground/10 py-10 group hover:bg-muted transition-colors duration-200 ease-out">
            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-center gap-8">
                <Typography variant="h4" className="w-48 shrink-0 text-foreground/40 group-hover:text-accent uppercase transition-all duration-300 ease-out">
                    {title}
                </Typography>
                <StaggerContainer staggerChildren={0.05} className="flex flex-wrap gap-x-12 gap-y-4">
                    {skills.map((skill, idx) => (
                        <StaggerItem key={idx}>
                            <Typography variant="h4" className="font-sans font-bold tracking-tight">
                                {skill}
                            </Typography>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </SlideUp>
    );

    return (
        <section id="skills" className="bg-background px-4 sm:px-6 md:px-12 lg:px-24 pt-24 pb-12 w-full scroll-mt-20 md:scroll-mt-24">
            <div className="max-w-7xl mx-auto mb-16">
                <SlideUp>
                    <Typography variant="label" className="mb-4 block">
                        04. {t.skills.title}
                    </Typography>
                    <Typography variant="h2">
                        {t.skills.title}
                    </Typography>
                </SlideUp>
            </div>

            <div className="flex flex-col border-b-2 border-foreground/10">
                {renderSkillRow(t.skills.frontend, frontendSkills)}
                {renderSkillRow(t.skills.backend, backendSkills)}
                {renderSkillRow(t.skills.tools, toolSkills)}
            </div>
        </section>
    );
};
