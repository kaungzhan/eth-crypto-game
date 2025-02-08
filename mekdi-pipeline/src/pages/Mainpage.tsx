import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/MainPage.css";

const MainPage: React.FC = () => {
  const navigate = useNavigate(); // 👈 Allows navigation

  return (
    <div className="container">
      <h1 className="title vibrate">Mekdi Pipeline</h1>

      <div className="button-container">
        <div className="play-btn">
          <button className="button" onClick={() => navigate("/start")}>
            Start Game
          </button>
        </div>
        <div className="about-btn">
          <button className="button" onClick={() => navigate("/about")}>
          About ETH :)</button>
        </div>
        
        {/* <button className="button">Settings</button> */}
      </div>
    </div>
  );
};

export default MainPage;
