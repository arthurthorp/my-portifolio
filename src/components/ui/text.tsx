import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const textVariants = tv({
  base: 'inline',
  variants: {
    variant: {
      default: '',
      badge:
        'inline-block border px-3 py-1 text-xs font-sans font-medium uppercase tracking-widest',
      helper: 'text-xs font-bold',
      srOnly: 'sr-only',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type TextProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof textVariants>;

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ className, variant, ...props }, ref) => {
    return <span ref={ref} className={cn(textVariants({ variant }), className)} {...props} />;
  },
);

Text.displayName = 'Text';
