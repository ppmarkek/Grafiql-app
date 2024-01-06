import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ValueContext, Langs } from './components/Context/ValueContext';
import WelcomePage from './pages/WelcomePage';
import MainPage from './pages/mainPage/MainPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Header from './components/templates/Header/Header';
import { Provider } from 'react-redux';
import { store } from './services/api/createdStore';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

function App() {
  const [language, setLanguage] = useState<Langs>(Langs.en);
  const [inputEntryPoint, setInputEntryPoint] = useState('');

  return (
    <Provider store={store}>
      <ValueContext.Provider
        value={{ language, setLanguage, inputEntryPoint, setInputEntryPoint }}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route
              path="/main"
              element={
                <ProtectedRoute>
                  <MainPage />
                </ProtectedRoute>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </ValueContext.Provider>
    </Provider>
  );
}

export default App;
