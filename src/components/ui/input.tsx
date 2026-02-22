import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const inputVariants = tv({
  base: 'w-full bg-transparent border-b-4 p-4 font-sans text-lg placeholder:font-sans focus:outline-none transition-colors',
  variants: {
    tone: {
      default: 'border-black/30 text-black placeholder:text-black/50 focus:border-black',
      foreground:
        'border-foreground/30 text-foreground placeholder:text-foreground/50 focus:border-foreground',
    },
  },
  defaultVariants: {
    tone: 'default',
  },
});

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, tone, ...props }, ref) => (
    <input ref={ref} className={cn(inputVariants({ tone }), className)} {...props} />
  ),
);

Input.displayName = 'Input';
