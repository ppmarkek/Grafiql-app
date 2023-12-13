import './App.css';
import WelcomePage from './pages/WelcomePage';
import Header from './components/templates/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
