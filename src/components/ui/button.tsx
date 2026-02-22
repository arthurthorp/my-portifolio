import * as React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'icon';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center font-display font-bold tracking-wider uppercase transition-transform duration-150 disabled:opacity-50 disabled:pointer-events-none active:scale-95';
        
        const variants = {
            primary: 'bg-accent text-accent-foreground hover:bg-foreground hover:text-background border-2 border-transparent hover:border-foreground',
            secondary: 'bg-foreground text-background hover:bg-background hover:text-foreground border-2 border-foreground',
            outline: 'bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background',
            ghost: 'bg-transparent text-foreground hover:text-accent hover:underline decoration-2 underline-offset-4',
        };

        const sizes = {
            sm: 'h-10 px-4 text-xs',
            md: 'h-14 px-8 text-sm',
            lg: 'h-16 px-10 text-base',
            icon: 'h-12 w-12',
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
