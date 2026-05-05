'use client';

import { translations } from '@/lib/translations';
import { useLanguageStore } from '@/store/languageStore';

export const useTranslation = () => {
  const { language } = useLanguageStore();
  return translations[language];
};
