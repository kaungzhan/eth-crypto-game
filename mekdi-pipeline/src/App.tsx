import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import StartPage from "./pages/Startpage";
import AboutPage from "./pages/Aboutpage";
import ChooseCatPage from "./pages/Choosecat";
import WalletPage from "./pages/Walletpage";
// import TitleBar from "./pages/Titlebar";

const App: React.FC = () => {
  return (
    <Router>
      {/* <div className="app-container"> */}
      {/* <TitleBar />  */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/choose-cat" element={<ChooseCatPage />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
};

export default App;
