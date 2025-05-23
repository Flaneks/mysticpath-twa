const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function loginWithTelegram(initData, name, language, telegram_id) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ initData, name, language, telegram_id })
  });
  return await res.json();
}

export async function getHistory(user_id) {
  const res = await fetch(`${API_URL}/spreads/history?user_id=${user_id}`);
  return await res.json();
}

export async function getProfile(user_id) {
  const res = await fetch(`${API_URL}/auth/profile?user_id=${user_id}`);
  return await res.json();
}

export async function drawSpread(user_id, spread_type, language) {
  const res = await fetch(`${API_URL}/spreads/draw`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ user_id, spread_type, language })
  });
  return await res.json();
}

export async function buyStars(user_id, count) {
  const res = await fetch(`${API_URL}/stars/add`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ user_id, count })
  });
  return await res.json();
}
