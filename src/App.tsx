import { useState } from 'react';
<!-- <<<<<<< GRAP-52 -->
import Header from './components/templates/Header/Header';
import InputEntryPoint from './components/atoms/InputEntryPoint/InputEntryPoint';
import { ValueContext, Langs } from './components/Context/ValueContext';

function App() {
  const [language, setLanguage] = useState<Langs>(Langs.en);
  const [inputEntryPoint, setInputEntryPoint] = useState('');

  return (
    <ValueContext.Provider
      value={{ language, setLanguage, inputEntryPoint, setInputEntryPoint }}
    >
      <Header />
      <InputEntryPoint />
    </ValueContext.Provider>
// =======
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import WelcomePage from './pages/WelcomePage';
// import MainPage from './pages/mainPage/MainPage';
// import ErrorPage from './pages/ErrorPage/ErrorPage';
// import { LanguageContext, Langs } from './components/Context/LenguageContext';
// import './index.css';

// function App() {
//   const [language, setLanguage] = useState<Langs>(Langs.en);

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage }}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<WelcomePage />} />
//           <Route path="/main" element={<MainPage />} />
//           <Route path="*" element={<ErrorPage />} />
//         </Routes>
//       </Router>
//     </LanguageContext.Provider>
// >>>>>>> develop
  );
}

export default App;
