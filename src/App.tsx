import { useState } from 'react';
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
  );
}

export default App;
