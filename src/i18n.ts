import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEnGb from './locales/en-GB/translation.json';
import translationZhCn from './locales/zh-CN/translation.json';

const resources = {
    "en": {
        translation: translationEnGb
    },
    "zh": {
        translation: translationZhCn
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'zh',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
