import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const typographyVariants = tv({
    variants: {
        variant: {
            h1: 'text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black tracking-tighter uppercase leading-[0.92] break-words',
            h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold tracking-tight uppercase break-words',
            h3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold tracking-tight break-words',
            h4: 'text-xl md:text-2xl font-display font-semibold break-words',
            body: 'text-base md:text-lg lg:text-xl font-sans text-muted-foreground leading-relaxed break-words',
            label: 'text-sm font-sans font-medium uppercase tracking-widest text-accent',
        },
    },
    defaultVariants: {
        variant: 'body',
    },
});

type TypographyProps = React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> &
    VariantProps<typeof typographyVariants> & {
        as?: React.ElementType;
    };

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
    ({ className, variant = 'body', as, children, ...props }, ref) => {
        const Component = as || (
            variant.startsWith('h') ? variant : variant === 'label' ? 'span' : 'p'
        ) as React.ElementType;

        return (
            <Component
                ref={ref}
                className={cn(typographyVariants({ variant }), className)}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Typography.displayName = 'Typography';
