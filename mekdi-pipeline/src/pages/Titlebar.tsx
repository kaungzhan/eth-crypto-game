import React from "react";
import minimizeIcon from "../assets/minimize.png"; // Custom Minimize Icon
import closeIcon from "../assets/cross.png"; // Custom Close Icon
import "../css/TitleBar.css";

declare global {
  interface Window {
    electronAPI?: {
      minimize: () => void;
      close: () => void;
    };
  }
}

const TitleBar: React.FC = () => {
  const handleMinimize = () => {
    if (window.electronAPI?.minimize) {
      window.electronAPI.minimize();
    } else {
      console.error("❌ Electron API not available");
    }
  };

  const handleClose = () => {
    if (window.electronAPI?.close) {
      window.electronAPI.close();
    } else {
      console.error("❌ Electron API not available");
    }
  };

  return (
    <div className="title-bar">
      {/* Title Bar Text */}
      <span className="title-text">Mekdi Pipeline</span> {/* Change this to your game name */}

      {/* Minimize & Close Buttons */}
      <div>
        <img src={minimizeIcon} alt="Minimize" className="title-button" onClick={handleMinimize} />
        <img src={closeIcon} alt="Close" className="title-button" onClick={handleClose} />
      </div>
    </div>
  );
};

export default TitleBar;
