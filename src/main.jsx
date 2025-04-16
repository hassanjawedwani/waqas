import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import Spacer from "./components/Spacer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Spacer />
    <Hero />
    <Spacer />
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
