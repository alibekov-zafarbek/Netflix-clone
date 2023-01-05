import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(backend)
  // .init(i18nextOptions)
  .init({
    // debug: true,
    fallbacklng: 'en',
    saveMissing: true,
    
  });
