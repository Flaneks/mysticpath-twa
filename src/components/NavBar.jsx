import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex bg-black/60 justify-around py-2">
      <Link to="/" className="text-white font-bold">🏠</Link>
      <Link to="/shop" className="text-white font-bold">⭐</Link>
      <Link to="/history" className="text-white font-bold">📜</Link>
      <Link to="/profile" className="text-white font-bold">👤</Link>
    </nav>
  );
}
