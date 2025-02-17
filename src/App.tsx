// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Projects from "./components/Projects";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const App: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`font-${i18n.language}`);
    console.log(`${i18n.language}`);
  }, [i18n.language]);

  return (
    // <div className="font-en">
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
    // </div>
  );
};

export default App;
