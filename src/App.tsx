import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//GRAP-52 -->
// import Header from './components/templates/Header/Header';
// import InputEntryPoint from './components/atoms/InputEntryPoint/InputEntryPoint';
import { ValueContext, Langs } from './components/Context/ValueContext';
import WelcomePage from './pages/WelcomePage';
import MainPage from './pages/mainPage/MainPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Header from './components/templates/Header/Header';

function App() {
  const [language, setLanguage] = useState<Langs>(Langs.en);
  const [inputEntryPoint, setInputEntryPoint] = useState('');

  return (
    <ValueContext.Provider
      value={{ language, setLanguage, inputEntryPoint, setInputEntryPoint }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ValueContext.Provider>
  );
}

export default App;
