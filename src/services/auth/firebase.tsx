import { FirebaseApp, FirebaseError, initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
import {
  Dispatch,
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useContext,
} from 'react';

interface FirebaseAuthState {
  user?: User;
  loading: boolean;
  error?: FirebaseError;
  // firstCheck: boolean
}
interface FirebaseContext {
  user?: User;
  loading: boolean;
  error?: FirebaseError;
  firebase: FirebaseApp;
  setState: Dispatch<FirebaseAuthState>;
}

const FirebaseContext = createContext<FirebaseContext | null>(null);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  appId: process.env.REACT_APP_APP_ID,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
};
const appFirebase = initializeApp(firebaseConfig);

export function FirebaseAuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const auth = getAuth(appFirebase);
  const firebaseCurrentUser = auth.currentUser;
  const useCustomUseReducer = (initState: FirebaseAuthState) => {
    const newState = useReducer(
      (prev: FirebaseAuthState, curr: FirebaseAuthState) => {
        return { ...prev, ...curr };
      },
      initState
    );
    return newState;
  };
  const [{ user, loading, error }, setState] = useCustomUseReducer({
    user: firebaseCurrentUser === null ? undefined : firebaseCurrentUser,
    loading: false,
    firstCheck: false,
  } as FirebaseAuthState);

  useEffect(() => {
    !user && setState({ loading: true });
    return auth.onAuthStateChanged(function (user: User | null) {
      setState({
        loading: false,
        user: user === null ? undefined : user,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, setState]);

  return (
    <FirebaseContext.Provider
      value={{
        user,
        loading,
        error,
        firebase: appFirebase,
        setState,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebaseAuth() {
  const firebaseContext = useContext(FirebaseContext);

  if (firebaseContext === null) {
    throw new Error('No FirebaseAuthProvider found.');
  }

  const { user, loading, error, setState, firebase } = firebaseContext;

  const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      setState({ loading: true });
      const auth = getAuth(firebase);
      await signInWithEmailAndPassword(auth, email, password);
      setState({ loading: false });
    } catch (err) {
      console.error(err);
      if (err instanceof FirebaseError) {
        setState({
          error: err,
          loading: false,
        });
      }
    }
  };

  const logout = async () => {
    setState({ loading: true });
    const auth = getAuth(firebase);
    setState({ loading: false });
    return signOut(auth);
  };

  const registerWithEmailAndPassword = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      const auth = getAuth(firebase);
      setState({ loading: true });
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      const db = getFirestore(firebase);
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
      });
      setState({ loading: false });
    } catch (err) {
      if (err instanceof FirebaseError) {
        setState({
          error: err,
          loading: false,
        });
      }
    }
  };

  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      const auth = getAuth(firebase);
      setState({ loading: true });
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const db = getFirestore(firebase);
      const q = query(collection(db, 'users'), where('uid', '==', user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, 'users'), {
          uid: user.uid,
          name: user.displayName,
          authProvider: 'google',
          email: user.email,
        });
      }
      setState({ loading: false });
    } catch (err) {
      if (err instanceof FirebaseError) {
        setState({
          error: err,
          loading: false,
        });
      }
    }
  };

  return {
    user,
    loading,
    error,
    registerWithEmailAndPassword,
    logInWithEmailAndPassword,
    logout,
    signInWithGoogle,
  };
}
