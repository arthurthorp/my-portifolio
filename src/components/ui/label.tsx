import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const labelVariants = tv({
  base: 'font-sans font-black uppercase tracking-widest text-sm',
  variants: {
    tone: {
      default: 'text-black',
      foreground: 'text-foreground',
    },
  },
  defaultVariants: {
    tone: 'default',
  },
});

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelVariants>;

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, tone, ...props }, ref) => (
    <label ref={ref} className={cn(labelVariants({ tone }), className)} {...props} />
  ),
);

Label.displayName = 'Label';
