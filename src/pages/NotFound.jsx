import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-3xl text-white font-bold mb-2">404</h1>
      <div className="text-purple-300 mb-4">Страница не найдена</div>
      <Link to="/" className="text-purple-400 underline">На главную</Link>
    </div>
  );
}
