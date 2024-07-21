
export const getTranslation = (lang) => {
  const translations = {
    en: require('./locales/en/translation.json'), 
    es: require('./locales/es/translation.json'), 
    fr: require('./locales/fr/translation.json')  
  };
  return translations[lang];
};
