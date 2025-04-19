import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationUz from './locales/uz/translation.json';
import translationEn from './locales/en/translation.json';


const resources = {
    uz: { translation: translationUz },
    en: { translation: translationEn }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;