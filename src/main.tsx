import React from 'react';
import ReactDOM from 'react-dom/client';
import * as dotenv from 'dotenv';
// import App from './App.tsx'
import './index.css';
import SignUp from './pages/SignUp/SignUp.js';

dotenv.config();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <SignUp />
  </React.StrictMode>
);
