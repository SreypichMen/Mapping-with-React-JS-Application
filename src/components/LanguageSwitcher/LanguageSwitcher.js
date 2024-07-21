import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ReactComponent as USFlag } from '../../assets/icons/flags/us.svg';
import { ReactComponent as ESFlag } from '../../assets/icons/flags/es.svg';
import { ReactComponent as FRFlag } from '../../assets/icons/flags/fr.svg';
import './LanguageSwitcher.css';  // Ensure the path matches

const languages = [
    { code: 'en', name: 'English', FlagComponent: USFlag },
    { code: 'es', name: 'Español', FlagComponent: ESFlag },
    { code: 'fr', name: 'Français', FlagComponent: FRFlag }
];

const LanguageSwitcher = () => {
    const { language, switchLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const changeLanguage = (code) => {
        switchLanguage(code);
        setIsOpen(false); // Close dropdown after selection
    };

    const isActive = (lang) => language === lang ? "active" : "";

    return (
        <div className="lang-switcher-wrapper">
            <div className="lang-switcher-dropdown">
                <button onClick={toggleDropdown} className="lang-switcher-dropbtn">
                    {React.createElement(languages.find(lang => lang.code === language).FlagComponent)}
                    {language.toUpperCase()} <span className="caret"></span>
                </button>
                {isOpen && (
                    <div className="lang-switcher-dropdown-content">
                        {languages.map(lang => (
                            <button key={lang.code} onClick={() => changeLanguage(lang.code)} 
                                    className={`dropdown-item ${isActive(lang.code)}`}>
                                {React.createElement(lang.FlagComponent)} {lang.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
