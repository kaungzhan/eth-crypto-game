import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/WalletPage.css"; // ✅ Import CSS

const WalletPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="wallet-container">
      {/* Two Blank Containers (Wallet & Cat) */}
      <div className="top-container">
        <div className="wallet-box">Wallet</div>
        <div className="cat-box">Cat</div>
      </div>

      {/* Dialogue Box at Bottom */}
      <div className="dialog-box">
        <p className="dialog-text">This is your wallet! Tap on the wallet to claim it!</p>
      </div>
    </div>
  );
};

export default WalletPage;
