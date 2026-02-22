import * as React from 'react';
import { tv } from 'tailwind-variants';

import { cn } from '@/lib/utils';

type SectionProps = React.HTMLAttributes<HTMLElement> & {
    children: React.ReactNode;
};

const sectionVariants = tv({
    base: 'w-full border-b border-border px-4 py-16 scroll-mt-20 sm:px-6 md:px-12 md:py-24 md:scroll-mt-24 lg:px-24 lg:py-32',
});

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(sectionVariants(), className)}
                {...props}
            >
                <div className="max-w-7xl w-full mx-auto flex flex-col">
                    {children}
                </div>
            </section>
        );
    }
);

Section.displayName = 'Section';
