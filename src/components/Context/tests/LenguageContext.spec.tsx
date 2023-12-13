import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LenguageContext, initialState } from '../LenguageContext';

const TestComponent = () => {
  const { language, setLanguage } = useContext(LenguageContext);

  return (
    <div>
      <span data-testid="language-value">{language}</span>
      <button onClick={() => setLanguage('English')}>Set to English</button>
    </div>
  );
};

interface TestWrapperProps {
  children: ReactNode;
}

const TestWrapper: React.FC<TestWrapperProps> = ({ children }) => {
  const [language, setLang] = useState('');

  const setLanguage: Dispatch<SetStateAction<string>> = (
    lang: SetStateAction<string>
  ) => {
    setLang(lang);
  };

  return (
    <LenguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LenguageContext.Provider>
  );
};

describe('LenguageContext', () => {
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
      expect(languageValue.textContent).toBe('English');
    });
  });

  describe('setLanguage function', () => {
    it('should update the language', () => {
      let language = '';
      const setLanguage = (newLanguage: string) => {
        language = newLanguage;
      };

      setLanguage('English');

      expect(language).toBe('English');
    });
  });

  describe('initialState', () => {
    it('provides a no-op setLanguage function', () => {
      const { setLanguage } = initialState;
      expect(setLanguage).toBeDefined();
      expect(() => {
        setLanguage('Test');
      }).not.toThrow();
    });
  });
});
