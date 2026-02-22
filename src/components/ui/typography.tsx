import * as React from 'react';

type TypographyProps = React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> & {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'label';
    as?: React.ElementType;
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
    ({ className = '', variant = 'body', as, children, ...props }, ref) => {
        const Component = as || (
            variant.startsWith('h') ? variant : variant === 'label' ? 'span' : 'p'
        ) as React.ElementType;

        const baseStyles = {
            h1: 'text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter uppercase leading-[0.9]',
            h2: 'text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight uppercase',
            h3: 'text-2xl md:text-3xl lg:text-4xl font-display font-bold tracking-tight',
            h4: 'text-xl md:text-2xl font-display font-semibold',
            body: 'text-base md:text-lg lg:text-xl font-sans text-muted-foreground leading-relaxed',
            label: 'text-sm font-sans font-medium uppercase tracking-widest text-accent',
        };

        return (
            <Component
                ref={ref}
                className={`${baseStyles[variant]} ${className}`}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Typography.displayName = 'Typography';
