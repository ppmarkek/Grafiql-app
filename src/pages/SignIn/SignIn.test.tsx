import React from 'react';
import SignIn from './SignIn';
import renderer from 'react-test-renderer';
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
  Link: () => <a></a>,
}));

describe('SignIn', () => {
  beforeEach(() => {
    jest
      .spyOn(FirebaseModule, 'useFirebaseAuth')
      .mockReturnValue(mockedReturnedValue);
    jest.spyOn(useI18nModule, 'useI18n').mockReturnValue(lang);
  });
  it('should render without errors', () => {
    const tree = renderer.create(<SignIn />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
