"use client";

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n/context';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export const Header = () => {
    const { t, lang, setLang } = useTranslation();
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = ['about', 'experience', 'projects', 'skills', 'contact'] as const;

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isMenuOpen]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const toggleLang = () => {
        const newLang = lang === 'pt' ? 'en' : 'pt';
        setLang(newLang);

        const segments = pathname.split('/').filter(Boolean);
        if (segments[0] === 'pt' || segments[0] === 'en') {
            segments[0] = newLang;
        } else {
            segments.unshift(newLang);
        }

        router.push(`/${segments.join('/')}`);
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 z-50 w-full border-b-2 border-foreground bg-background">
            <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 md:h-20 md:px-12 lg:px-24">
                
                <div className="flex shrink-0">
                    <Link href={`/${lang}`} className="font-display text-lg font-black uppercase tracking-tight hover:text-accent transition-colors duration-200 ease-out sm:text-xl md:text-2xl">
                        <Text className="lg:hidden">{'<>'}</Text>
                        <Text className="hidden lg:inline">ARTHUR</Text>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link 
                            key={item} 
                            href={`/${lang}#${item}`} 
                            className="font-sans text-sm font-bold uppercase tracking-widest hover:text-accent relative group transition-colors duration-200 ease-out"
                        >
                            {t.header[item as keyof typeof t.header]}
                            <Text className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-[width] duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Controls */}
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <Button
                        type="button"
                        variant="control"
                        size="icon"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="lg:hidden"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <Text variant="srOnly">{isMenuOpen ? 'Close menu' : 'Open menu'}</Text>
                        <div className="relative w-5 h-4">
                            <Text
                                className={cn(
                                    'absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-200',
                                    isMenuOpen && 'top-1.5 rotate-45',
                                )}
                            />
                            <Text
                                className={cn(
                                    'absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all duration-200',
                                    isMenuOpen && 'opacity-0',
                                )}
                            />
                            <Text
                                className={cn(
                                    'absolute left-0 top-3 h-0.5 w-5 bg-current transition-all duration-200',
                                    isMenuOpen && 'top-1.5 -rotate-45',
                                )}
                            />
                        </div>
                    </Button>

                    {mounted && (
                        <Button
                            type="button"
                            onClick={toggleTheme}
                            variant="control"
                            size="icon"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? '☼' : '☾'}
                        </Button>
                    )}
                    <Button 
                        type="button"
                        onClick={toggleLang}
                        variant="control"
                        size="icon"
                        className="uppercase text-xs"
                        aria-label="Toggle Language"
                    >
                        {t.header.lang}
                    </Button>
                </div>

            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="lg:hidden border-t-2 border-foreground bg-background"
                    >
                        <nav className="px-4 py-4 sm:px-6" aria-label="Mobile">
                            <ul className="flex flex-col gap-3">
                                {navItems.map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`/${lang}#${item}`}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block w-full border-2 border-foreground px-4 py-3 font-sans text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                                        >
                                            {t.header[item]}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};