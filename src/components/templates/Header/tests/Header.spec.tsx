import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import * as FirebaseModule from '../../../../services/auth/firebase';
import * as useI18nModule from '../../../../components/Context/ValueContext';
import lang from '../../../../i18n/en.json';
import Header from '../Header';

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
  Link: () => <a></a>,
}));

describe('Header component', () => {
  beforeEach(() => {
    jest
      .spyOn(FirebaseModule, 'useFirebaseAuth')
      .mockReturnValue(mockedReturnedValue);
    jest.spyOn(useI18nModule, 'useI18n').mockReturnValue(lang);
  });
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
