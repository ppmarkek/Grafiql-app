import { useState } from 'react';
import Header from './components/templates/Header/Header';
import { LenguageContext } from './components/Context/LenguageContext';

function App() {
  const [language, setLanguage] = useState('');

  return (
    <LenguageContext.Provider value={{ language, setLanguage }}>
      <Header />
    </LenguageContext.Provider>
  );
}

export default App;
