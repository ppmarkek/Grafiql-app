import { useState } from 'react';
import Header from './components/templates/Header/Header';
import { LanguageContext, Langs } from './components/Context/LenguageContext';

function App() {
  const [language, setLanguage] = useState<Langs>(Langs.en);

  console.log(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Header />
    </LanguageContext.Provider>
  );
}

export default App;
