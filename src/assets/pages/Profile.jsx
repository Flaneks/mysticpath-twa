import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.jpg";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Profile() {
  const { t } = useTranslation();
  // Здесь можешь добавить загрузку баланса и инфы о пользователе через useEffect

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <img
        src={logo}
        alt="Avatar"
        className="w-24 h-24 rounded-full border-2 border-purple-600 shadow mb-4"
      />
      <h2 className="text-2xl font-semibold text-white mb-2">{t("profile")}</h2>
      {/* Добавь вывод имени, баланса, Telegram ID, если хочешь */}
      <div className="mb-4 text-lg text-purple-200">{t("balance")}: ⭐ <span id="balance">...</span></div>
      <LanguageSwitcher />
    </div>
  );
}
