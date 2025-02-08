import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import StartPage from "./pages/Startpage";
import AboutPage from "./pages/Aboutpage";
import ChooseCatPage from "./pages/Choosecat";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/choose-cat" element={<ChooseCatPage />} />
      </Routes>
    </Router>
  );
};

export default App;
