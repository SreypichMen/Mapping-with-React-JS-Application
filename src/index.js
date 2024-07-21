import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import HomePage from './pages/HomePage/HomePage';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext'; // Import LanguageProvider
import reportWebVitals from './reportWebVitals';
import './i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> {/* ThemeProvider wraps the entire application */}
      <LanguageProvider> {/* LanguageProvider wraps the components that need access to language state */}
        <HomePage />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
