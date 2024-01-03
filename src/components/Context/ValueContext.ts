import { Dispatch, SetStateAction, createContext } from 'react';

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
  language: Langs.en,
  setLanguage: (() => {}) as Dispatch<SetStateAction<Langs>>,
  inputEntryPoint: '',
  setInputEntryPoint: (() => {}) as Dispatch<SetStateAction<string>>,
};

export const ValueContext = createContext<ValueContextType>(initialState);
