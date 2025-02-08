import React from "react";
// import characterImg from "../assets/character-placeholder.png"; // Character Image
import "../css/StartPage.css"; // Import CSS
import { useNavigate } from "react-router-dom";

const StartPage: React.FC = () => {
    const navigate = useNavigate();
  const dialog = {
    name: "Ethan",
    text: "Welcome to Mekdi Pipeline where you're going to be a crypto trader, and your goal is to earn as many ETH as possible.",
  };

  const handleLetsGo = () => {
    navigate("/choose-cat");
  };

  const handleNoThanks = () => {
    navigate("/");
  };

  return (
    <div className="game-container">
      {/* Character Image */}
      {/* <img src={characterImg} alt="Character" className="character" /> */}

      {/* Dialogue Box */}
      <div className="dialog-box">
        <span className="character-name">{dialog.name}</span>
        <p className="dialog-text">{dialog.text}</p>

        {/* Buttons on Top Right */}
        <div className="dialog-buttons">
          <button className="dialog-button" onClick={handleLetsGo}>Let's Go</button>
          <button className="dialog-button" onClick={handleNoThanks}>No Thanks</button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
