"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
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

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Language>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'pt' || saved === 'en')) {
      setLangState(saved);
    } else {
      const browserLang = navigator.language.startsWith('pt') ? 'pt' : 'en';
      setLangState(browserLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = lang === 'pt' ? pt : en;

  return (
    <I18nContext.Provider value={{ lang, t, setLang }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => useContext(I18nContext);
