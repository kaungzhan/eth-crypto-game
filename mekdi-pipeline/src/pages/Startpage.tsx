import React from "react";
// import characterImg from "../assets/character-placeholder.png"; // Character Image
import "../css/StartPage.css"; // Import CSS
import { useNavigate } from "react-router-dom";

const StartPage: React.FC = () => {
    const navigate = useNavigate();
  const dialog = {
    name: "CryptMeow",
    text: "👋 Hey there, crypto curious! I'm CryptMeow, the cat with the crypto tricks. 🐈💎 \n In Mekdi Pipeline, you’ll learn how to trade like a pro, avoid scams, and stack that ETH like it’s catnip. 🌿 * Just make sure you don't send me to Mekdi * \n So, are you ready to join the crypto craze and become the ultimate ETH earner? Let’s get this purr-fect adventure started! 🚀",
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
      <div className="dialog-box fly-up">
        <span className="character-name">{dialog.name}</span>
        <p className="dialog-text">{dialog.text}</p>

        {/* Buttons on Top Right */}
        <div className="dialog-buttons fly-up">
          <button className="dialog-button" onClick={handleLetsGo}>Yes I'm Ready!</button>
          <button className="dialog-button" onClick={handleNoThanks}>No Thanks</button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
