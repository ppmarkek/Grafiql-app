import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';
import * as FirebaseModule from '../../services/auth/firebase';
import * as useI18nModule from '../../components/Context/ValueContext';
import lang from '../../i18n/en.json';
import { Provider } from 'react-redux';
import { store } from '../../services/api/createdStore';
import * as entrySliceModule from '../../services/api/slices/entrySlice';

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

describe('MainPage renders correctly', () => {
  beforeEach(() => {
    jest
      .spyOn(entrySliceModule, 'useEntrySelector')
      .mockReturnValue({ entry: 'https://spacex-production.up.railway.app/' });
    jest
      .spyOn(FirebaseModule, 'useFirebaseAuth')
      .mockReturnValue(mockedReturnedValue);
    jest.spyOn(useI18nModule, 'useI18n').mockReturnValue(lang);
  });
  it('renders correctly a', () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
});
