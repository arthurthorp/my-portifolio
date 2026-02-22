"use client";

import Link from 'next/link';
import { useTranslation } from '@/i18n/context';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const Header = () => {
    const { t, lang, setLang } = useTranslation();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const toggleLang = () => {
        setLang(lang === 'pt' ? 'en' : 'pt');
    };

    return (
        <header className="fixed top-0 z-50 w-full border-b-2 border-foreground bg-background">
            <div className="mx-auto flex h-20 items-center justify-between px-6 md:px-12 lg:px-24">
                
                {/* Logo / Name */}
                <div className="flex shrink-0">
                    <Link href="/" className="font-display text-2xl font-black uppercase tracking-tighter hover:text-accent">
                        ARTHUR.DEV
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {['about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                        <Link 
                            key={item} 
                            href={`#${item}`} 
                            className="font-sans text-sm font-bold uppercase tracking-widest hover:text-accent relative group"
                        >
                            {t.header[item as keyof typeof t.header]}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-[width] duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* Controls */}
                <div className="flex items-center gap-4">
                    {mounted && (
                        <button 
                            onClick={toggleTheme}
                            className="w-10 h-10 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background font-bold"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? '☼' : '☾'}
                        </button>
                    )}
                    <button 
                        onClick={toggleLang}
                        className="w-10 h-10 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background font-bold font-sans text-sm uppercase"
                        aria-label="Toggle Language"
                    >
                        {t.header.lang}
                    </button>
                </div>

            </div>
        </header>
    );
};