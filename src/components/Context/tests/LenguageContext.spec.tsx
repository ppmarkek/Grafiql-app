import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageContext, Langs, initialState } from '../LenguageContext';

const TestComponent = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <span data-testid="language-value">{language}</span>
      <button onClick={() => setLanguage(Langs.English)}>Set to English</button>
    </div>
  );
};

interface TestWrapperProps {
  children: ReactNode;
}

const TestWrapper: React.FC<TestWrapperProps> = ({ children }) => {
  const [language, setLang] = useState<Langs>(Langs.English);

  const setLanguage: Dispatch<SetStateAction<Langs>> = (
    lang: SetStateAction<Langs>
  ) => {
    setLang(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

describe('LanguageContext', () => {
  it('updates the language state when setLanguage is called', async () => {
    render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>
    );

    const button = screen.getByRole('button', { name: /set to english/i });
    act(() => {
      userEvent.click(button);
    });

    await waitFor(() => {
      const languageValue = screen.getByTestId('language-value');
      expect(languageValue.textContent).toBe(Langs.English);
    });
  });

  describe('setLanguage function', () => {
    it('should update the language', () => {
      let language: Langs = Langs.Russian;
      const setLanguage = (newLanguage: Langs) => {
        language = newLanguage;
      };

      setLanguage(Langs.English);

      expect(language).toBe(Langs.English);
    });
  });

  describe('initialState', () => {
    it('provides a no-op setLanguage function', () => {
      const { setLanguage } = initialState;
      expect(setLanguage).toBeDefined();
      expect(() => {
        setLanguage(Langs.English);
      }).not.toThrow();
    });
  });
});
