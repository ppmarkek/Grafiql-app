import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirebaseAuthProvider } from './services/auth/firebase';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import SignUp from './pages/SignUp/SignUp';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <App />
    </FirebaseAuthProvider>
  </React.StrictMode>
);
