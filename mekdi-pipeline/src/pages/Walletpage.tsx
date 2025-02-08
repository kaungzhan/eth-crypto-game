import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/WalletPage.css"; 

const WalletPage: React.FC = () => {
  const location = useLocation();
  const selectedCat = location.state?.selectedCat || null; // ✅ Get selected cat from state

  const [showSparkles, setShowSparkles] = useState(false);

  const handleWalletClick = () => {
    setShowSparkles(true);
    setTimeout(() => setShowSparkles(false), 1500); // ✅ Sparkles disappear after 1.5s
  };

  return (
    <div className="wallet-container">
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
    </div>
  );
};

export default WalletPage;
