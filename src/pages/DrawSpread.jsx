import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { drawSpread } from "../api";
import useTelegramInitData from "../hooks/useTelegramInitData";

export default function DrawSpread() {
  const { t, i18n } = useTranslation();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const initData = useTelegramInitData();

  const handleDraw = async (spreadType) => {
    setLoading(true);
    setError("");
    try {
      const userId = window.Telegram.WebApp.initDataUnsafe.user?.id;
      const lang = i18n.language;
      const res = await drawSpread(userId, spreadType, lang);
      setResult(res);
    } catch (e) {
      setError(t("not_enough_balance"));
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-2xl font-bold text-white mb-4">{t("choose_spread")}</h1>
      <div className="flex flex-col gap-3 w-full max-w-xs mb-8">
        <button
          className="bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-2xl font-semibold shadow"
          onClick={() => handleDraw("generic")}
        >
          {t("spread_generic")}
        </button>
        <button
          className="bg-pink-800 hover:bg-pink-900 text-white py-3 rounded-2xl font-semibold shadow"
          onClick={() => handleDraw("love")}
        >
          {t("spread_love")}
        </button>
        <button
          className="bg-indigo-800 hover:bg-indigo-900 text-white py-3 rounded-2xl font-semibold shadow"
          onClick={() => handleDraw("daily")}
        >
          {t("spread_daily")}
        </button>
      </div>
      {loading && <div className="text-purple-200">{t("loading")}</div>}
      {error && <div className="text-red-400">{error}</div>}
      {result && (
        <div className="w-full max-w-lg bg-black/40 rounded-2xl p-6 text-white shadow-lg mt-4">
          <div className="flex gap-2 justify-center mb-4">
            {result.cards?.map((card, idx) => (
              <img
                key={idx}
                src={`/cards/${card.number}${card.reversed ? "_r" : ""}.jpg`}
                alt={card.name}
                className="w-16 h-24 object-contain rounded shadow"
              />
            ))}
          </div>
          <div className="font-semibold text-lg mb-2">{t("interpretation") || "Трактовка"}</div>
          <div>{result.interpretation}</div>
        </div>
      )}
    </div>
  );
}
