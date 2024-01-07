import '@testing-library/jest-dom';
import { useFirebaseAuth } from './firebase';
import * as FirebaseAuthModule from 'firebase/auth';

jest.mock('firebase/auth', () => ({
  __esModule: true,
  ...jest.requireActual('firebase/auth'),
}));

const contextValues = {
  name: 'Annie',
  setState: () => {},
};
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => contextValues,
  useEffect: jest.fn(),
}));

describe('Firebase hooks works correctly', () => {
  const {
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    signInWithGoogle,
    logout,
  } = useFirebaseAuth();
  const user = {
    name: 'usver',
    email: 'smth.domain@com',
    password: 'VeryUnPrOTeCtEdPa22',
  };

  it('login calls signInWithEmailAndPassword', async () => {
    jest.spyOn(FirebaseAuthModule, 'getAuth').mockImplementation(jest.fn());
    const mockedSignIn = jest
      .spyOn(FirebaseAuthModule, 'signInWithEmailAndPassword')
      .mockImplementation(jest.fn());

    await logInWithEmailAndPassword(user.email, user.password);
    expect(mockedSignIn).toHaveBeenCalled();
  });
  it('sign up calls registerWithEmailAndPassword', async () => {
    jest.spyOn(FirebaseAuthModule, 'getAuth').mockImplementation(jest.fn());
    const mockedSignUp = jest
      .spyOn(FirebaseAuthModule, 'createUserWithEmailAndPassword')
      .mockImplementation(jest.fn());

    await registerWithEmailAndPassword(user.name, user.email, user.password);
    expect(mockedSignUp).toHaveBeenCalled();
  });
  it('sign in with Google calls signInWithPopup', async () => {
    jest.spyOn(FirebaseAuthModule, 'getAuth').mockImplementation(jest.fn());
    const mockedSignUp = jest
      .spyOn(FirebaseAuthModule, 'signInWithPopup')
      .mockImplementation(jest.fn());

    await signInWithGoogle();
    expect(mockedSignUp).toHaveBeenCalled();
  });
  it('logout with Google calls signOut', async () => {
    jest.spyOn(FirebaseAuthModule, 'getAuth').mockImplementation(jest.fn());
    const mockedSignOut = jest
      .spyOn(FirebaseAuthModule, 'signOut')
      .mockImplementation(jest.fn());

    await logout();
    expect(mockedSignOut).toHaveBeenCalled();
  });
});
