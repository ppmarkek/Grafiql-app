import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { LanguageContext, Langs } from './components/Context/LenguageContext';
import './index.css';

function App() {
  const [language, setLanguage] = useState<Langs>(Langs.en);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
