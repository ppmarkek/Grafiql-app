import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthButtons from './AuthButtons';
import * as FirebaseModule from '../../services/auth/firebase';
import * as useI18nModule from '../../components/Context/ValueContext';
import lang from '../../i18n/en.json';

type useFirebaseAuthREturn = ReturnType<typeof FirebaseModule.useFirebaseAuth>;
const mockedReturnedValue: useFirebaseAuthREturn = {
  user: undefined,
  error: undefined,
  loading: false,
  registerWithEmailAndPassword: jest.fn(),
  logInWithEmailAndPassword: jest.fn(),
  logout: jest.fn(),
  signInWithGoogle: jest.fn(),
};
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
  Link: ({ children }: { children: ReactNode }) => <a>{children}</a>,
}));

describe('AuthButtons component', () => {
  beforeEach(() => {
    jest
      .spyOn(FirebaseModule, 'useFirebaseAuth')
      .mockReturnValue(mockedReturnedValue);
    jest.spyOn(useI18nModule, 'useI18n').mockReturnValue(lang);
  });
  it('renders AuthButtons to signIn and signUp buttons when user is not authorized', () => {
    const props = {
      isAuthorized: false,
    };

    render(
      <Router>
        <AuthButtons {...props} />
      </Router>
    );

    expect(screen.getByText(lang.auth.signInLink)).toBeInTheDocument();
    expect(screen.getByText(lang.auth.signUpLink)).toBeInTheDocument();
  });

  it('renders AuthButtons to mainPage button when user is authorized', () => {
    const props = {
      isAuthorized: true,
    };

    render(
      <Router>
        <AuthButtons {...props} />
      </Router>
    );

    expect(screen.getByText(lang.main.mainLink)).toBeTruthy();
  });
});
