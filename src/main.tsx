import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FirebaseAuthProvider } from './services/auth/firebase';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import SignUp from './pages/SignUp/SignUp';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<SignUp />} /> */}
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </FirebaseAuthProvider>
  </React.StrictMode>
);
