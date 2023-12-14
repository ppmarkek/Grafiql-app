import { Dispatch, SetStateAction, createContext } from 'react';

export enum Langs {
  English = 'en',
  Russian = 'ru',
}

interface LenguageContextType {
  language: Langs;
  setLanguage: Dispatch<SetStateAction<Langs>>;
}

export const initialState: LenguageContextType = {
  language: Langs.English,
  setLanguage: (() => {}) as Dispatch<SetStateAction<Langs>>,
};

export const LanguageContext = createContext<LenguageContextType>(initialState);
