"use client";

import { useTranslation } from '@/i18n/context';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="w-full bg-foreground text-background py-8 px-6 md:px-12 border-t-8 border-accent">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="font-display font-black text-2xl tracking-tighter">
                    ARTHUR.DEV
                </div>
                <div className="font-sans text-xs font-bold uppercase tracking-widest text-background/50 text-center">
                    {`© ${new Date().getFullYear()} ${t.footer.copy}.`}
                </div>
            </div>
        </footer>
    );
};
