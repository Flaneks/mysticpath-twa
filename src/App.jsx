import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Shop from "./pages/Shop";
import History from "./pages/History";
import DrawSpread from "./pages/DrawSpread";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import "./i18n/setup";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/history" element={<History />} />
          <Route path="/draw" element={<DrawSpread />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavBar />
      </div>
    </BrowserRouter>
  );
}
