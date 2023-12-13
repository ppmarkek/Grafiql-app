import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header component', () => {
  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('becomes sticky on scroll', () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(container.firstChild).toHaveStyle('position: sticky');
    expect(container.firstChild).toMatchSnapshot();
  });
});
