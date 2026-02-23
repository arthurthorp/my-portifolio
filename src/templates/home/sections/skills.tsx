"use client";

import { useTranslation } from '@/i18n/context';
import { Typography } from '@/components/ui/typography';
import { Text } from '@/components/ui/text';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/ui/animations';
import type { SkillArea, SkillGroup } from '@/types/skills';
import { cn } from '@/lib/utils';

function SkillItemChip({ children }: { children: string }) {
  return (
    <Text
      variant="badge"
      className="border-border bg-muted/50 text-foreground font-semibold tracking-tight transition-colors duration-200 hover:border-accent/50 hover:bg-muted"
    >
      {children}
    </Text>
  );
}

function SkillGroupBlock({
  group,
  groupId,
}: {
  group: SkillGroup;
  groupId: string;
}) {
  const hasItems = group.items.length > 0;
  if (!hasItems) return null;

  return (
    <SlideUp
      role="article"
      aria-labelledby={groupId}
      className="border-t-2 border-foreground/10 py-6 first:border-t-0 first:pt-0 group hover:bg-muted/50 transition-colors duration-200 ease-out"
    >
      <div className="flex flex-col gap-4 sm:gap-5">
        <Typography
          id={groupId}
          variant="h4"
          className="text-foreground/70 group-hover:text-accent uppercase transition-colors duration-300 ease-out text-sm sm:text-base"
        >
          {group.group}
        </Typography>
        <StaggerContainer
          staggerChildren={0.03}
          className="flex flex-wrap gap-2"
        >
          {group.items.map((item, idx) => (
            <StaggerItem key={`${groupId}-${idx}`}>
              <SkillItemChip>{item}</SkillItemChip>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SlideUp>
  );
}

function StackCard({ area, areaIdx }: { area: SkillArea; areaIdx: number }) {
  const stackId = `stack-${area.stack}-${areaIdx}`;

  return (
    <SlideUp
      role="region"
      aria-labelledby={stackId}
      className={cn(
        'flex flex-col rounded-sm border-2 border-foreground/10 bg-background p-6',
        'transition-colors duration-200 ease-out hover:border-foreground/20',
        'sm:p-8 md:p-10'
      )}
    >
      <Typography
        id={stackId}
        variant="label"
        className="mb-6 text-accent font-bold uppercase tracking-widest sm:mb-8"
        as="h3"
      >
        {area.stack}
      </Typography>
      <div className="flex flex-col" role="list">
        {area.groups.map((group, groupIdx) => {
          const groupId = `${stackId}-group-${groupIdx}`;
          return (
            <div key={groupId} role="listitem">
              <SkillGroupBlock group={group} groupId={groupId} />
            </div>
          );
        })}
      </div>
    </SlideUp>
  );
}

export const Skills = () => {
  const { t } = useTranslation();
  const areas = t.skills.areas;

  return (
    <section
      id="skills"
      className="bg-background px-4 sm:px-6 md:px-12 lg:px-24 pt-24 pb-12 w-full scroll-mt-20 md:scroll-mt-24"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SlideUp className="mb-12 md:mb-16">
          <Typography variant="label" className="mb-4 block" id="skills-heading">
            04. {t.skills.title}
          </Typography>
          <Typography variant="h2">
            {t.skills.title}
          </Typography>
        </SlideUp>

        <div
          className="flex flex-col gap-10 xl:gap-12"
          role="list"
          aria-label={t.skills.title}
        >
          {areas.map((area, areaIdx) => (
            <div key={`${area.stack}-${areaIdx}`} role="listitem">
              <StackCard area={area} areaIdx={areaIdx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
