import id from './id';
import type { LocaleMessages } from './types';

export type Locale = 'id';

const dictionaries: Record<Locale, LocaleMessages> = { id };

export function useTranslations(locale: Locale = 'id'): LocaleMessages {
  return dictionaries[locale];
}
