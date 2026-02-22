import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const textareaVariants = tv({
  base: 'w-full bg-transparent border-b-4 p-4 font-sans text-lg placeholder:font-sans focus:outline-none transition-colors resize-none',
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

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textareaVariants>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, tone, ...props }, ref) => (
    <textarea ref={ref} className={cn(textareaVariants({ tone }), className)} {...props} />
  ),
);

Textarea.displayName = 'Textarea';
