import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/MainPage.css";

const MainPage: React.FC = () => {
  const navigate = useNavigate(); // 👈 Allows navigation

  return (
    <div className="container">
      <h1 className="title">Mekdi Pipeline</h1>

      <div className="button-container">
        <button className="button" onClick={() => navigate("/start")}>
          Start
        </button>
        <button className="button">What is ETH?</button>
        <button className="button">Settings</button>
      </div>
    </div>
  );
};

export default MainPage;
