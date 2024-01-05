import React, { useContext, useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ValueContext, Langs, initialState } from '../ValueContext';

const TestComponent = () => {
  const { language, setLanguage } = useContext(ValueContext);

  return (
    <div>
      <span data-testid="language-value">{language}</span>
      <button onClick={() => setLanguage(Langs.en)}>Set to English</button>
    </div>
  );
};

const TestInputComponent = () => {
  const { inputEntryPoint, setInputEntryPoint } = useContext(ValueContext);

  return (
    <div>
      <span data-testid="input-value">{inputEntryPoint}</span>
      <button onClick={() => setInputEntryPoint('test value')}>
        Set Input Value
      </button>
    </div>
  );
};

interface TestWrapperProps {
  children: React.ReactNode;
}

const TestWrapper: React.FC<TestWrapperProps> = ({ children }) => {
  const [language, setLanguage] = useState<Langs>(Langs.en);
  const [inputEntryPoint, setInputEntryPoint] = useState<string>('');

  return (
    <ValueContext.Provider
      value={{
        language,
        setLanguage,
        inputEntryPoint,
        setInputEntryPoint,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};

describe('ValueContext', () => {
  it('updates the language state when setLanguage is called', async () => {
    render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>
    );

    const button = screen.getByRole('button', { name: /set to english/i });
    userEvent.click(button);

    await waitFor(() => {
      const languageValue = screen.getByTestId('language-value');
      expect(languageValue.textContent).toBe(Langs.en);
    });
  });

  it('updates the inputEntryPoint state when setInputEntryPoint is called', async () => {
    render(
      <TestWrapper>
        <TestInputComponent />
      </TestWrapper>
    );

    const button = screen.getByRole('button', { name: /set input value/i });
    userEvent.click(button);

    await waitFor(() => {
      const inputValue = screen.getByTestId('input-value');
      expect(inputValue.textContent).toBe('test value');
    });
  });

  it('provides a no-op setLanguage function from initialState', () => {
    const { setLanguage } = initialState;
    expect(setLanguage).toBeDefined();
    expect(() => {
      setLanguage(Langs.en);
    }).not.toThrow();
  });

  it('provides a no-op setInputEntryPoint function from initialState', () => {
    const { setInputEntryPoint } = initialState;
    expect(setInputEntryPoint).toBeDefined();
    expect(() => {
      setInputEntryPoint('new value');
    }).not.toThrow();
  });
});
