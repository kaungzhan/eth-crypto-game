import React from "react";
import "../css/Aboutpage.css";
import { useNavigate } from "react-router-dom";

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNoThanks = () => {
    console.log("❌ No Thanks button clicked!");
    navigate("/");
  };

  return (
    <div>
      <h1 className="page-title">
        What is Ethereum?
      </h1>
      <p className="about-description">
      ETH (Ethereum) is like Bitcoin’s cooler, tech-savvy cousin. 🚀 
      It’s not just digital money—it’s also a giant, decentralized 
      computer where people can build apps, create NFTs, and even summon cyber wizards 
      (okay, smart contracts, but close enough). Basically, if Bitcoin is gold, 
      Ethereum is a whole futuristic economy running on magic internet code. 🔥💻
      </p>

      <p className="conversation"> 
        Are you feeling more ready to take on the challenge?! 
      </p>

      <div className="options">
        <button className="dialog-button yes">
            Yes! LET'S GO!!
        </button>

        <button className="dialog-button no" onClick={handleNoThanks}>
            No, take me back :(
        </button>
      </div>
     
    </div>
  );
};

export default AboutPage;