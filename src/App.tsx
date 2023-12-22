import { useState } from 'react';
import Header from './components/templates/Header/Header';
import { LanguageContext, Langs } from './components/Context/LenguageContext';
import Documentation from './components/templates/Documentation/Documentation';

function App() {
  const [language, setLanguage] = useState<Langs>(Langs.en);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Header />
      <Documentation />
    </LanguageContext.Provider>
  );
}

export default App;
