import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as USFlag } from '../assets/icons/flags/us.svg';
import { ReactComponent as ESFlag } from '../assets/icons/flags/es.svg';
import { ReactComponent as FRFlag } from '../assets/icons/flags/fr.svg';

import '../assets/styles/langswitch/dropdown.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

    const getFlag = () => {
      switch (i18n.language) {
        case 'en':
          return <USFlag />;
        case 'es':
          return <ESFlag />;
        case 'fr':
          return <FRFlag />;
        default:
          return <USFlag />;
      }
    };

    const isActive = (lang) => i18n.language === lang ? "active" : "";

    return (
        <div className="wrapper">
            <div className="language-switcher">
                <div className="dropdown">
                <button className="dropbtn">
                    {getFlag()} {i18n.language.toUpperCase()} <span className="caret"></span>
                </button>
                <div className="dropdown-content">
                    <a href="#" className={isActive('en')} onClick={() => changeLanguage('en')}><USFlag /> English</a>
                    <a href="#" className={isActive('es')} onClick={() => changeLanguage('es')}><ESFlag /> Español</a>
                    <a href="#" className={isActive('fr')} onClick={() => changeLanguage('fr')}><FRFlag /> Français</a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
