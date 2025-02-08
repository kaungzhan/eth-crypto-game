import React from "react";
import "../css/MainPage.css"; // Import the CSS file

const MainPage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Mekdi Pipeline</h1>
      
      <div className="button-container">
        <button className="button">Start</button>
        <button className="button">What is ETH?</button>
        <button className="button">Settings</button>
      </div>
    </div>
  );
};

export default MainPage;
