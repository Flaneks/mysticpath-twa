import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.jpg";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <img
        src={logo}
        alt="MysticPath"
        className="w-32 h-32 rounded-full border-4 border-purple-600 shadow-xl mb-5"
      />
      <h1 className="text-3xl font-bold text-white mb-3">{t("welcome")}</h1>
      <div className="mb-8 text-lg text-purple-200 text-center">
        {t("choose_spread")}
      </div>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          className="bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-2xl font-semibold shadow transition"
          onClick={() => navigate("/shop")}
        >
          {t("buy_stars")}
        </button>
        <button
          className="bg-indigo-800 hover:bg-indigo-900 text-white py-3 rounded-2xl font-semibold shadow transition"
          onClick={() => navigate("/history")}
        >
          {t("history")}
        </button>
        <button
          className="bg-black/60 hover:bg-black/80 text-white py-3 rounded-2xl font-semibold shadow transition"
          onClick={() => navigate("/profile")}
        >
          {t("profile")}
        </button>
      </div>
      <LanguageSwitcher />
    </div>
  );
}
