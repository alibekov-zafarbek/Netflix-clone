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
    supportedLngs: ['en','ru'],
    fallbackLng: "en",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {useSuspense: false}
  });
