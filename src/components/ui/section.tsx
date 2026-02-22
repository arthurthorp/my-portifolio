import * as React from 'react';

type SectionProps = React.HTMLAttributes<HTMLElement> & {
    children: React.ReactNode;
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={`py-16 md:py-24 lg:py-32 w-full px-6 md:px-12 lg:px-24 border-b border-border ${className || ''}`}
                {...props}
            >
                <div className="max-w-7xl mx-auto flex flex-col">
                    {children}
                </div>
            </section>
        );
    }
);

Section.displayName = 'Section';
