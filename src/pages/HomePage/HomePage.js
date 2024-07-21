import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MapPage from '../MapViewPage/MapPage';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import { useLanguage } from '../../contexts/LanguageContext'; // Import useLanguage

import './HomePage.css';

function HomePage() {
  const { theme } = useTheme();
  const { translations } = useLanguage(); // Use translations from LanguageContext

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'body-dark' : '';
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <div className="header">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <div className="container">
              <h1>{translations.welcome}</h1> {/* Use translations directly */}
              <p>{translations.description}</p>
              <Link to="/map" className="link">{translations.go_to_map}</Link>
            </div>
          </div>
        }/>
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default HomePage;
