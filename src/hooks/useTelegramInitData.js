import { useEffect, useState } from "react";

export default function useTelegramInitData() {
  const [initData, setInitData] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      setInitData(window.Telegram.WebApp.initData || "");
    }
  }, []);

  return initData;
}
