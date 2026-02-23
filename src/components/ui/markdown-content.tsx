'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const isExternal = (href: string) => href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//');

export function MarkdownContent({ content, className }: { content: string; className?: string }) {
  const components: Components = {
    h1: ({ node, ...props }) => <h2 id={slugify(props.children)} className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-10 mb-4 first:mt-0 scroll-mt-20" {...props} />,
    h2: ({ node, ...props }) => <h3 id={slugify(props.children)} className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mt-8 mb-3 scroll-mt-20" {...props} />,
    h3: ({ node, ...props }) => <h4 id={slugify(props.children)} className="font-display text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-2 scroll-mt-20" {...props} />,
    h4: ({ node, ...props }) => <h5 className="font-display text-base sm:text-lg font-semibold mt-4 mb-2 scroll-mt-20" {...props} />,
    h5: ({ node, ...props }) => <h6 className="font-display text-base font-semibold mt-4 mb-2 scroll-mt-20" {...props} />,
    h6: ({ node, ...props }) => <div className="font-display text-sm font-semibold mt-3 mb-2 scroll-mt-20" role="heading" aria-level={6} {...props} />,
    p: ({ node, ...props }) => <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-4" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2 text-base md:text-lg text-foreground/90 pl-2" {...props} />,
    ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-base md:text-lg text-foreground/90 pl-2" {...props} />,
    li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
    blockquote: ({ node, ...props }) => (
      <blockquote className="border-l-4 border-accent pl-4 py-2 my-4 text-foreground/80 italic text-base md:text-lg" {...props} />
    ),
    code: ({ node, className: codeClassName, ...props }) =>
      (
        <code className={cn('font-mono text-sm block p-4 rounded bg-muted overflow-x-auto', codeClassName)} {...props} />
      ),
    pre: ({ node, ...props }) => <pre className="mb-4 overflow-x-auto rounded bg-muted p-0" {...props} />,
    a: ({ node, href, ...props }) => {
      if (!href) return <span {...props} />;
      const external = isExternal(href);
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium underline underline-offset-2 hover:text-accent/80 transition-colors"
            {...props}
          />
        );
      }
      return (
        <Link href={href} className="text-accent font-medium underline underline-offset-2 hover:text-accent/80 transition-colors" {...props} />
      );
    },
    strong: ({ node, ...props }) => <strong className="font-bold text-foreground" {...props} />,
    em: ({ node, ...props }) => <em className="italic" {...props} />,
    hr: () => <hr className="my-8 border-border" />,
    img: ({ node, src, alt, ...props }) => {
      if (!src) return null;
      const isLocal = !isExternal(src as string);
      return (
        <span className="block my-6 overflow-hidden rounded">
          {isLocal ? (
            <Image
              src={src as string}
              alt={alt ?? ''}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              unoptimized={(src as string).startsWith('/') ? false : true}
            />
          ) : (
            <img src={src} alt={alt ?? ''} className="w-full h-auto rounded" loading="lazy" {...props} />
          )}
        </span>
      );
    },
  };

  return (
    <article className={cn('prose-project max-w-none', className)}>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
}

function slugify(children: React.ReactNode): string | undefined {
  const text = flattenChildren(children);
  if (!text) return undefined;
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function flattenChildren(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(flattenChildren).join('');
  return '';
}
