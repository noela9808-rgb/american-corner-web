import { useState, useEffect, useCallback } from 'react';
import type { Language, Translation } from '@/i18n';
import { translations } from '@/i18n';

export function useLanguage() {
  const [lang, setLang] = useState<Language>('en');

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'al' : 'en'));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'al' ? 'sq' : 'en';
  }, [lang]);

  const t: Translation = translations[lang];

  return { lang, setLang, toggle, t };
}
