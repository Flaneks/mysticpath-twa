import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getHistory } from "../api";
import useTelegramInitData from "../hooks/useTelegramInitData";

export default function History() {
  const { t } = useTranslation();
  const [spreads, setSpreads] = useState([]);
  const initData = useTelegramInitData();

  useEffect(() => {
    if (window.Telegram?.WebApp?.initDataUnsafe) {
      const userId = window.Telegram.WebApp.initDataUnsafe.user?.id;
      if (userId) getHistory(userId).then(setSpreads);
    }
  }, [initData]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-2xl font-bold text-white mb-4">{t("history")}</h1>
      {spreads.length === 0 ? (
        <div className="text-purple-300">{t("history_empty") || "Нет раскладов"}</div>
      ) : (
        <div className="w-full max-w-lg flex flex-col gap-4">
          {spreads.map((s) => (
            <div
              key={s.id}
              className="bg-black/40 rounded-xl px-4 py-3 shadow text-white"
            >
              <div className="font-semibold">{t("spread_" + s.type) || s.type}</div>
              <div className="text-xs text-purple-300">{s.created_at}</div>
              <div className="mt-2">{s.interpretation}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
