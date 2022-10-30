import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import languageCheck from './languageChecker.js';

let language = languageCheck();

i18next
  .use(initReactI18next)
  .use(HttpApi) // Registering the back-end plugin
  .init({
    // left here -> if needed; uncomment below to test
    // debug: true,
    lng: language || 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;