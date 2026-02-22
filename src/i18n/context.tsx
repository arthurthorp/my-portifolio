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
  const [langState, setLangState] = useState<Language>(initialLang);
  const routeLang = pathname.split('/').filter(Boolean)[0];
  const lang: Language =
    routeLang === 'pt' || routeLang === 'en' ? routeLang : langState;

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
