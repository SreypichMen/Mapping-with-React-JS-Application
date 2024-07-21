import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MapPage from '../MapViewPage/MapPage';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

import './HomePage.css';
function HomePage() {
  const { theme } = useTheme();
  const { t } = useTranslation();

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
              <h1>{t('welcome')}</h1>
              <p>{t('description')}</p>
              <Link to="/map" className="link">{t('go_to_map')}</Link>
            </div>
          </div>
        }/>
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default HomePage;
