import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import Spacer from "./components/Spacer.jsx";
import AppInfo from "./pages/AppInfo.jsx";
import About from "./pages/About.jsx";
import KeyFeatures from "./pages/KeyFeatures.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <Navbar />
    <Spacer />
    <Hero />
    <Spacer />
    <AppInfo />
    <Spacer />
    <About />
    <Spacer /> */}
    <KeyFeatures />
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
