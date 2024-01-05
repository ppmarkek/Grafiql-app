import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomeText from './WelcomeText';

describe('WelcomeText component', () => {
  it('renders correctly with fetching props', () => {
    const props = {
      welcomeText: 'Welcome to GraphiQL',
      projectText: 'Project description',
      developersText: 'Developed by John Doe',
      courseText: 'React Development Course',
    };

    render(<WelcomeText {...props} />);

    expect(screen.getByText(/Welcome to GraphiQL/i)).toBeTruthy();
    expect(screen.getByText(/Project description/i)).toBeTruthy();
    expect(screen.getByText(/Developed by John Doe/i)).toBeTruthy();
    expect(screen.getByText(/React Development Course/i)).toBeTruthy();
  });
});
