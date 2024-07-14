import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Load translation files
  .use(LanguageDetector) // Detect user browser language
  .use(initReactI18next) // Passes i18n instance to react-i18next.
  .init({
    fallbackLng: 'en', // Fallback language when the user language is not available.
    debug: false, // Set true for debugging purposes.
    interpolation: {
      escapeValue: false, // React already escapes values.
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to the translation files.
    }
  });

export default i18n;
