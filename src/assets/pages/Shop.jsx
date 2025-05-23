import React from "react";
import { useTranslation } from "react-i18next";

export default function Shop() {
  const { t } = useTranslation();

  const handleBuyStars = (count) => {
    if (window.Telegram?.WebApp?.showStarPaymentBox) {
      window.Telegram.WebApp.showStarPaymentBox({
        amount: count,
        currency: "stars",
        description: t("buy_stars"),
      });
    } else {
      alert(t("not_supported"));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-2xl font-bold text-white mb-4">{t("shop")}</h1>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        {[3, 5, 10].map((count) => (
          <button
            key={count}
            className="bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-2xl font-semibold shadow transition"
            onClick={() => handleBuyStars(count)}
          >
            ⭐ {count} {t("buy_stars")}
          </button>
        ))}
      </div>
    </div>
  );
}
