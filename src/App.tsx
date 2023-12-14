import { useState } from 'react';
import Header from './components/templates/Header/Header';
import { LanguageContext, Langs } from './components/Context/LenguageContext';

function App() {
  const [language, setLanguage] = useState<Langs>(Langs.English);

  console.log(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Header />
    </LanguageContext.Provider>
  );
}

export default App;
