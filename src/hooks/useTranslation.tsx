import { createContext, useContext, ReactNode } from 'react';
import enTranslations from '../locales/en.json';
import deTranslations from '../locales/de.json';

type Language = 'en' | 'de';

interface TranslationContextType {
  language: Language;
  t: typeof enTranslations;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  language: Language;
  children: ReactNode;
}

export function TranslationProvider({ language, children }: TranslationProviderProps) {
  const translations = language === 'en' ? enTranslations : deTranslations;

  return (
    <TranslationContext.Provider value={{ language, t: translations }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
