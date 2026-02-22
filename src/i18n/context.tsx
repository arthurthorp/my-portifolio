"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import pt from './dictionaries/pt';
import en from './dictionaries/en';

type Language = 'pt' | 'en';
type Dictionary = typeof pt;

interface I18nContextProps {
  lang: Language;
  t: Dictionary;
  setLang: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextProps>({
  lang: 'pt',
  t: pt,
  setLang: () => {},
});

type I18nProviderProps = {
  children: React.ReactNode;
  initialLang?: Language;
};

export const I18nProvider = ({ children, initialLang = 'pt' }: I18nProviderProps) => {
  const pathname = usePathname();
  const [lang, setLangState] = useState<Language>(initialLang);

  useEffect(() => {
    const segment = pathname.split('/').filter(Boolean)[0];
    if (segment === 'pt' || segment === 'en') {
      setLangState(segment);
      localStorage.setItem('language', segment);
      return;
    }

    const saved = localStorage.getItem('language') as Language | null;
    if (saved === 'pt' || saved === 'en') {
      setLangState(saved);
    }
  }, [pathname]);

  useEffect(() => {
    setLangState(initialLang);
  }, [initialLang]);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('language', lang);
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const t = useMemo(() => (lang === 'pt' ? pt : en), [lang]);

  return (
    <I18nContext.Provider value={{ lang, t, setLang }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => useContext(I18nContext);
