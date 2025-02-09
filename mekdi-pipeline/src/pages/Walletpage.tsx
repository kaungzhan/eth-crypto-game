import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/WalletPage.css"; 

// Import images
import menuIcon from "../assets/menu.png";
import playButton from "../assets/main-play.png";
import quitButton from "../assets/main-quit.png";
import walletImage from "../assets/wallet.png"; // ✅ Wallet Image
import star1 from "../assets/star/star_01.png";
import star2 from "../assets/star/star_02.png";
import star3 from "../assets/star/star_03.png";
import star4 from "../assets/star/star_04.png";

const starImages = [star1, star2, star3, star4];

const WalletPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCat = location.state?.selectedCat || null;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [starFrame, setStarFrame] = useState<number>(0);
  const [starPositions, setStarPositions] = useState<{ top: string; left: string; key: number }[]>([]);

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

  // Handle Wallet Click (Triggers Star Animation)
  const handleWalletClick = () => {
    generateStars();
  };

  // Sequential star animation update
  useEffect(() => {
    const starInterval = setInterval(() => {
      setStarFrame((prev) => (prev + 1) % starImages.length);
    }, 200);
    return () => clearInterval(starInterval);
  }, []);

  // Generate random positions for stars inside the wallet box
  const generateStars = () => {
    const positions = Array.from({ length: 3 }, () => ({
      top: `${Math.random() * 60 + 20}%`, // Keep within bounds
      left: `${Math.random() * 60 + 20}%`,
      key: Math.random(),
    }));
    setStarPositions(positions);
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
          <img src={walletImage} alt="Wallet" className="wallet-image" />
          {/* Star Animation (Replaces Sparkles) */}
          <div className="star-wrapper">
            {starPositions.map((pos) => (
              <div 
                key={pos.key}
                className="star-container"
                style={{
                  position: 'absolute',
                  top: pos.top,
                  left: pos.left,
                  pointerEvents: 'none',
                  transition: 'all 2s ease-in-out'
                }}
              >
                <img
                  src={starImages[starFrame]} 
                  alt="Star"
                  className="star-effect"
                />
              </div>
            ))}
          </div>
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
