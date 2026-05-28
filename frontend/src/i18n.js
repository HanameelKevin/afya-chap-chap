import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          "dashboard": "Dashboard",
          "book_visit": "Book a visit",
          "my_records": "My records",
          "my_vitals": "My vitals",
          "messages": "Messages",
          "sign_out": "Sign out"
        }
      },
      sw: {
        translation: {
          "dashboard": "Dashibodi",
          "book_visit": "Weka miadi",
          "my_records": "Rekodi zangu",
          "my_vitals": "Vital zangu",
          "messages": "Ujumbe",
          "sign_out": "Ondoka"
        }
      }
    }
  });

export default i18n;
