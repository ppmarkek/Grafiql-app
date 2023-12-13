import { Dispatch, SetStateAction, createContext } from 'react';

interface LenguageContextType {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

export const initialState = {
  language: '',
  setLanguage: () => {},
};

export const LenguageContext = createContext<LenguageContextType>(initialState);
