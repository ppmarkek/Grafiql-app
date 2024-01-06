import { Dispatch, SetStateAction, createContext, useContext } from 'react';

import en from '../../i18n/en.json';
import ru from '../../i18n/ru.json';

export enum Langs {
  en = 'en',
  ru = 'ru',
}

interface ValueContextType {
  language: Langs;
  setLanguage: Dispatch<SetStateAction<Langs>>;
  inputEntryPoint: string;
  setInputEntryPoint: Dispatch<SetStateAction<string>>;
}

export const initialState: ValueContextType = {
  language: Langs.ru,
  setLanguage: (() => {}) as Dispatch<SetStateAction<Langs>>,
  inputEntryPoint: '',
  setInputEntryPoint: (() => {}) as Dispatch<SetStateAction<string>>,
};

export const ValueContext = createContext<ValueContextType>(initialState);

export function useLanguage(): Langs {
  const { language } = useContext<ValueContextType>(ValueContext);

  return language;
}

export function useI18n() {
  const { language } = useContext<ValueContextType>(ValueContext);
  switch (language) {
    case 'ru':
      return ru;
    default:
    case 'en':
      return en;
  }
}
