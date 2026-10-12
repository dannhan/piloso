import en from './en';
import id from './id';
import type { LocaleMessages } from './types';

export type Locale = 'id' | 'en';

const dictionaries: Record<Locale, LocaleMessages> = { id, en };

export function useTranslations(locale: Locale = 'id'): LocaleMessages {
  return dictionaries[locale];
}
