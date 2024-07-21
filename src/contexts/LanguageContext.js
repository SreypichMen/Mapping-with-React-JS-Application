// src/contexts/LanguageContext.js
import React, { createContext, useState, useContext } from 'react';
import { getTranslation } from '../i18n';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [translations, setTranslations] = useState(getTranslation('en'));

    const switchLanguage = (lang) => {
        setLanguage(lang);
        setTranslations(getTranslation(lang));
    };

    return (
        <LanguageContext.Provider value={{ language, translations, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
