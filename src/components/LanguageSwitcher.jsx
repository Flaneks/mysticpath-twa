import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const languages = ["ru", "en", "es", "de", "fr", "zh"];
  return (
    <div className="flex gap-2 mt-4">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          className="bg-purple-800 px-2 py-1 rounded text-white text-xs"
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
