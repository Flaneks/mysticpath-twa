import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./ru.json";
import en from "./en.json";
import es from "./es.json";
import de from "./de.json";
import fr from "./fr.json";
import zh from "./zh.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      en: { translation: en },
      es: { translation: es },
      de: { translation: de },
      fr: { translation: fr },
      zh: { translation: zh }
    },
    lng: "ru",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
