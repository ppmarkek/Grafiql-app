import { Dispatch, SetStateAction, createContext } from 'react';

export enum Langs {
  en = 'en',
  ru = 'ru',
}

interface LenguageContextType {
  language: Langs;
  setLanguage: Dispatch<SetStateAction<Langs>>;
}

export const initialState: LenguageContextType = {
  language: Langs.en,
  setLanguage: (() => {}) as Dispatch<SetStateAction<Langs>>,
};

export const LanguageContext = createContext<LenguageContextType>(initialState);
