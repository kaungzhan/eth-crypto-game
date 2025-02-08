import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../css/WalletPage.css"; 

// Import images for menu
import menuIcon from "../assets/menu.png"; // ✅ Your menu button image
import playButton from "../assets/main-play.png"; // ✅ Your play button image
import quitButton from "../assets/main-quit.png"; // ✅ Your quit button image

const WalletPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCat = location.state?.selectedCat || null; // ✅ Get selected cat from state

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);

  // Toggle Menu Visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Handle Play Button Click
  const handlePlay = () => {
    console.log("Play Clicked!");
    setIsMenuOpen(false);
  };

  // Handle Quit Button Click
  const handleQuit = () => {
    console.log("Quit Clicked!");
    navigate("/"); // ✅ Navigate back to main menu
  };

  const handleWalletClick = () => {
    setShowSparkles(true);
    setTimeout(() => setShowSparkles(false), 1500); // ✅ Sparkles disappear after 1.5s
  };

  return (
    <div className="wallet-container">
      {/* Menu Button (Top Right) */}
      <img 
        src={menuIcon} 
        alt="Menu" 
        className="menu-button"
        onClick={toggleMenu} 
      />

      <div className="top-container">
        {/* Wallet Box */}
        <div className="wallet-box" onClick={handleWalletClick}>
          <p>Wallet</p>
          {showSparkles && (
            <div className="sparkle-container">
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
            </div>
          )}
        </div>

        {/* Character Box (No Animation Here) */}
        <div className="character-box">
          {selectedCat ? (
            <img src={selectedCat} alt="Selected Character" className="character-image" />
          ) : (
            <p>No character selected</p>
          )}
        </div>
      </div>

      {/* Dialogue Box */}
      <div className="dialog-box">
        <p className="dialog-text">This is your wallet! Tap on the wallet to claim it!</p>
      </div>

      {/* Fullscreen Menu (Only Shows When Menu is Open) */}
      {isMenuOpen && (
        <div className="menu-overlay">
          <img src={playButton} alt="Play" className="menu-option" onClick={handlePlay} />
          <img src={quitButton} alt="Quit" className="menu-option" onClick={handleQuit} />
        </div>
      )}
    </div>
  );
};

export default WalletPage;
