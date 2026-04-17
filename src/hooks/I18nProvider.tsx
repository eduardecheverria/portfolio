import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Locale } from '@/types';
import { dictionaries, type TranslationKey } from '@/i18n';

interface I18nContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (key: TranslationKey) => string;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'portfolio.locale';
const SUPPORTED: readonly Locale[] = ['en', 'es'];

function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored as Locale)) {
    return stored as Locale;
  }

  // Fall back to browser language, default to English.
  const browser = window.navigator.language.slice(0, 2).toLowerCase();
  return browser === 'es' ? 'es' : 'en';
}

interface Props {
  children: ReactNode;
}

export function I18nProvider({ children }: Props) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const t = useCallback(
    (key: TranslationKey) => dictionaries[locale][key],
    [locale],
  );

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
