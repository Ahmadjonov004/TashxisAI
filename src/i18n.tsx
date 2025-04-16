import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Til fayllarini sozlash
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Agar foydalanuvchining tili topilmasa, default til
    debug: true,
    interpolation: {
      escapeValue: false, // React buni avtomatik tarzda qochiradi
    },
    react: {
      useSuspense: false, // Suspense bilan ishlashni o'chirish
    },
  });

export default i18n;
