import React from "react";
import "../css/Aboutpage.css";
import { useNavigate } from "react-router-dom";

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNoThanks = () => {
    console.log("❌ No Thanks button clicked!");
    navigate("/");
  };

  const handleLetsGo = () => {
    console.log("❌ No Thanks button clicked!");
    navigate("/start");
  };

  return (
    <div className= "about">
      <h1 className=" title fly-up">
        What is Ethereum?
      </h1>
      <div className="about-description fly-up">
      <p>
      ETH (Ethereum) is like Bitcoin’s cooler, tech-savvy cousin. 🚀 
      It’s not just digital money—it’s also a giant, decentralized 
      computer where people can build apps, create NFTs, and even summon cyber wizards 
      (okay, smart contracts, but close enough). Basically, if Bitcoin is gold, 
      Ethereum is a whole futuristic economy running on magic internet code. 🔥💻
      </p>
      </div>

      <p className="conversation fly-up"> 
        Are you feeling more ready to take on the challenge?! 
      </p>

      <div className="options fly-up">
        <button className="dialog-button yes" onClick={handleLetsGo}>
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