import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/WalletPage.css"; // ✅ Import CSS

const WalletPage: React.FC = () => {
  const navigate = useNavigate();
  const [sparkles, setSparkles] = useState<number[]>([]);

  const handleWalletClick = () => {
    // Generate 5 sparkles dynamically
    const newSparkles = Array.from({ length: 5 }, (_, i) => i);
    setSparkles(newSparkles);

    // Remove sparkles after 1.5 seconds
    setTimeout(() => setSparkles([]), 1500);
  };

  return (
    <div className="wallet-container">
      {/* Wallet & Character Boxes */}
      <div className="top-container">
        <div className="wallet-box" onClick={handleWalletClick}>
          Wallet
          {/* Sparkle Containers */}
          {sparkles.map((sparkle) => (
            <div key={sparkle} className="sparkle"></div>
          ))}
        </div>
        <div className="character-box">Character</div>
      </div>

      {/* Dialogue Box at Bottom */}
      <div className="dialog-box">
        <p className="dialog-text">This is your wallet! Tap on the wallet to claim it!</p>
      </div>
    </div>
  );
};

export default WalletPage;
