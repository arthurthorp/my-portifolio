import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const buttonVariants = tv({
    base: 'inline-flex items-center justify-center border-2 font-display font-bold tracking-wider uppercase transition-all duration-200 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none active:translate-y-0 active:scale-[0.98]',
    variants: {
        variant: {
            primary: 'bg-accent text-accent-foreground border-transparent hover:-translate-y-[2px] hover:shadow-md hover:bg-foreground hover:text-background hover:border-foreground hover:shadow-foreground/20',
            secondary: 'bg-foreground text-background border-foreground hover:-translate-y-[2px] hover:shadow-md hover:bg-background hover:text-foreground hover:shadow-foreground/20',
            outline: 'bg-transparent text-foreground border-foreground hover:-translate-y-[2px] hover:shadow-md hover:bg-foreground hover:text-background hover:shadow-foreground/20',
            ghost: 'bg-transparent text-foreground border-transparent hover:bg-accent/10 hover:text-accent hover:shadow-none hover:translate-y-0',
            control: 'bg-transparent text-foreground border-foreground font-sans font-bold tracking-normal normal-case hover:bg-foreground hover:text-background hover:-translate-y-[2px] hover:shadow-md hover:shadow-foreground/20',
        },
        size: {
            sm: 'h-10 px-4 text-xs',
            md: 'h-14 px-8 text-sm',
            lg: 'h-16 px-10 text-base',
            icon: 'h-10 w-10 p-0 text-sm',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(buttonVariants({ variant, size }), className)}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
