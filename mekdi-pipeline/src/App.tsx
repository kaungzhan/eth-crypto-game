import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import StartPage from "./pages/Startpage";
import ChooseCatPage from "./pages/Choosecat";
import WalletPage from "./pages/Walletpage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/choose-cat" element={<ChooseCatPage />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Routes>
    </Router>
  );
};

export default App;
