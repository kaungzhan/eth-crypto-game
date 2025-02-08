import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Choosecat.css";

const ChooseCatPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLetsGo = () => {
    navigate("/wallet"); 
  };

  return (
    <div className="choose-cat-container">
      <h1 className="choose-cat-title">Choose your cat!</h1>

      {/* Grid of Blank Boxes */}
      <div className="cat-grid">
        <div className="cat-box">?</div>
        <div className="cat-box">?</div>
        <div className="cat-box">?</div>
        <div className="cat-box">?</div>
        <div className="cat-box">?</div>
        <div className="cat-box">?</div>
      </div>

      {/* "Let's Go" Button */}
      <button className="lets-go-button" onClick={handleLetsGo}>Let's Go</button>
    </div>
  );
};

export default ChooseCatPage;
