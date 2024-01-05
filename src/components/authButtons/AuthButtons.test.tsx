import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthButtons from './AuthButtons';

describe('AuthButtons component', () => {
  it('renders AuthButtons to signIn and signUp buttons when user is not authorized', () => {
    const props = {
      isAuthorized: false,
      signInButtonText: 'Sign In',
      signUpButtonText: 'Sign Up',
      mainPageButtonText: 'Main Page',
    };

    render(
      <Router>
        <AuthButtons {...props} />
      </Router>
    );

    expect(screen.getByText(/Sign In/i)).toBeTruthy();
    expect(screen.getByText(/Sign Up/i)).toBeTruthy();
  });

  it('renders AuthButtons to mainPage button when user is authorized', () => {
    const props = {
      isAuthorized: true,
      signInButtonText: 'Sign In',
      signUpButtonText: 'Sign Up',
      mainPageButtonText: 'Main Page',
    };

    render(
      <Router>
        <AuthButtons {...props} />
      </Router>
    );

    expect(screen.getByText(/Main Page/i)).toBeTruthy();
  });
});
