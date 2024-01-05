import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';

test('MainPage renders correctly', () => {
  render(<MainPage />);

  expect(screen.getByTestId('main-page')).toBeInTheDocument();
});
