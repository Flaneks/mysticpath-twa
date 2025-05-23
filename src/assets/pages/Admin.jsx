import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Admin() {
  const { t } = useTranslation();
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState([]);
  const [authed, setAuthed] = useState(false);

  const login = async () => {
    // fetch('/api/admin/login', { method: "POST", body: JSON.stringify({ password: pass }) })
    //   .then(r => r.json()).then(data => {
    //     if (data.success) setAuthed(true);
    //   });
    setAuthed(true); // для примера
  };

  const fetchUsers = async () => {
    // fetch('/api/admin/users').then(r => r.json()).then(setUsers);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-2xl font-bold text-white mb-4">{t("admin_panel")}</h1>
      {!authed ? (
        <>
          <input
            type="password"
            placeholder={t("enter_admin_pass") || "Пароль"}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="mb-4 px-3 py-2 rounded bg-black/50 text-white"
          />
          <button
            onClick={login}
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded"
          >
            {t("login") || "Войти"}
          </button>
        </>
      ) : (
        <>
          <button
            className="mb-6 bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded"
            onClick={fetchUsers}
          >
            {t("get_users") || "Показать пользователей"}
          </button>
          <div className="w-full max-w-lg flex flex-col gap-3">
            {users.map((u) => (
              <div
                key={u.id}
                className="bg-black/40 rounded-lg px-4 py-3 shadow text-white"
              >
                <div>{u.name} (ID: {u.telegram_id})</div>
                <div className="text-xs text-purple-300">{t("balance")}: ⭐ {u.balance}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
