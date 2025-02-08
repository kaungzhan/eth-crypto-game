import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import StartPage from "./pages/Startpage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/start" element={<StartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
