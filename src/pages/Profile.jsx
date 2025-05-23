import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.jpg";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { getProfile } from "../api";
import useTelegramInitData from "../hooks/useTelegramInitData";

export default function Profile() {
  const { t } = useTranslation();
  const [profile, setProfile] = useState({});
  const initData = useTelegramInitData();

  useEffect(() => {
    if (window.Telegram?.WebApp?.initDataUnsafe) {
      const userId = window.Telegram.WebApp.initDataUnsafe.user?.id;
      if (userId) getProfile(userId).then(setProfile);
    }
  }, [initData]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <img
        src={logo}
        alt="Avatar"
        className="w-24 h-24 rounded-full border-2 border-purple-600 shadow mb-4"
      />
      <h2 className="text-2xl font-semibold text-white mb-2">{t("profile")}</h2>
      <div className="mb-4 text-lg text-purple-200">
        {t("balance")}: ⭐ <span>{profile.balance ?? "..."}</span>
      </div>
      <LanguageSwitcher />
    </div>
  );
}
