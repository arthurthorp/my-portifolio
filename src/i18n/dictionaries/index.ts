import pt from './pt';
import en from './en';

type Lang = 'pt' | 'en';

export function getDictionary(lang: Lang) {
  return lang === 'en' ? en : pt;
}

export type Dictionary = typeof pt;
