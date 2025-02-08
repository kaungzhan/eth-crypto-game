import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../css/WalletPage.css"; 

// Import images
import menuIcon from "../assets/menu.png";
import playButton from "../assets/main-play.png";
import quitButton from "../assets/main-quit.png";
import walletImage from "../assets/wallet.png"; // ✅ Import Wallet Image

const WalletPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCat = location.state?.selectedCat || null;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);

  // Toggle Menu Visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Handle Play Button Click
  const handlePlay = () => {
    setIsMenuOpen(false);
  };

  // Handle Quit Button Click
  const handleQuit = () => {
    navigate("/"); // ✅ Navigate back to main menu
  };

  // Handle Wallet Click (Triggers Sparkle Animation)
  const handleWalletClick = () => {
    setShowSparkles(true);
    setTimeout(() => setShowSparkles(false), 1500);
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
        {/* Wallet Box with Wallet Image */}
        <div className="wallet-box" onClick={handleWalletClick}>
          <img src={walletImage} alt="Wallet" className="wallet-image" /> {/* ✅ Add Wallet Image */}
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

        {/* Character Box */}
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
        <span className="dialog-name">CryptMeow</span>
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
