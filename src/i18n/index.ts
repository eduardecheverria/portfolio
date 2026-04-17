import type { Locale } from '@/types';
import { en, type TranslationKey, type Translations } from './en';
import { es } from './es';

export const dictionaries: Record<Locale, Translations> = { en, es };

export type { TranslationKey, Translations };
