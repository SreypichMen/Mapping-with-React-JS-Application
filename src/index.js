import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css'; 
import HomePage from './pages/HomePage/HomePage'; 
import { ThemeProvider } from './contexts/ThemeContext'; 
import reportWebVitals from './reportWebVitals'; 
import './i18n';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <HomePage /> 
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
