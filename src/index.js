import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import HomePage from './components/HomePage';
import { ThemeProvider } from './contexts/ThemeContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
