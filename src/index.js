import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css'; // Check that the path matches where the CSS file is located
import HomePage from './components/HomePage'; // Check that HomePage is exported from this path
import { ThemeProvider } from './contexts/ThemeContext'; // Check the ThemeProvider setup
import reportWebVitals from './reportWebVitals'; // Ensure reportWebVitals is correctly set up if used
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
