import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Choosecat.css";

// Importing Cat Animations (3 Frames for Each Cat)
import cat1_1 from "../assets/cat1/cat1-1.png";
import cat1_2 from "../assets/cat1/cat1-2.png";
import cat1_3 from "../assets/cat1/cat1-3.png";

import cat2_1 from "../assets/cat2/cat2-1.png";
import cat2_2 from "../assets/cat2/cat2-2.png";
import cat2_3 from "../assets/cat2/cat2-3.png";

import cat3_1 from "../assets/cat3/cat3-1.png";
import cat3_2 from "../assets/cat3/cat3-2.png";
import cat3_3 from "../assets/cat3/cat3-3.png";

import cat4_1 from "../assets/cat4/cat4-1.png";
import cat4_2 from "../assets/cat4/cat4-2.png";
import cat4_3 from "../assets/cat4/cat4-3.png";

import cat5_1 from "../assets/cat5/cat5-1.png";
import cat5_2 from "../assets/cat5/cat5-2.png";
import cat5_3 from "../assets/cat5/cat5-3.png";

import cat6_1 from "../assets/cat6/cat6-1.png";
import cat6_2 from "../assets/cat6/cat6-2.png";
import cat6_3 from "../assets/cat6/cat6-3.png";

// Import menu UI
import menuIcon from "../assets/menu.png";
import playButton from "../assets/main-play.png";
import quitButton from "../assets/main-quit.png";

// Array of animations for each cat
const catAnimations = [
  [cat1_1, cat1_2, cat1_3],
  [cat2_1, cat2_2, cat2_3],
  [cat3_1, cat3_2, cat3_3],
  [cat4_1, cat4_2, cat4_3],
  [cat5_1, cat5_2, cat5_3],
  [cat6_1, cat6_2, cat6_3],
];

const ChooseCatPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState<number | null>(null);
  const [hoveredCat, setHoveredCat] = useState<number | null>(null);
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle selecting a cat
  const handleCatSelect = (index: number) => {
    setSelectedCat(index);
  };

  // Handle hover animation
  const handleMouseEnter = (index: number) => {
    setHoveredCat(index);
    let frame = 0;

    // Change the image every 200ms while hovered
    const interval = setInterval(() => {
      frame = (frame + 1) % 3;
      setCurrentFrame(frame);
    }, 200);

    // Store the interval so we can clear it later
    (window as any).hoverInterval = interval;
  };

  const handleMouseLeave = () => {
    setHoveredCat(null);
    clearInterval((window as any).hoverInterval);
  };

  const handleLetsGo = () => {
    if (selectedCat !== null) {
      navigate("/wallet", { state: { selectedCat: catAnimations[selectedCat][0] } }); // ✅ Pass first frame of the selected cat
    }
  };

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

  return (
    <div className="choose-cat-container">
      {/* Menu Button (Top Right) */}
      <img 
        src={menuIcon} 
        alt="Menu" 
        className="menu-button"
        onClick={toggleMenu} 
      />

      <h1 className="choose-cat title">Choose your cat!</h1>

      {/* Grid of Cat Options */}
      <div className="cat-grid">
        {catAnimations.map((catFrames, index) => (
          <div
            key={index}
            className={`cat-box ${selectedCat === index ? "selected" : ""}`}
            onClick={() => handleCatSelect(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img 
              src={hoveredCat === index ? catFrames[currentFrame] : catFrames[0]} 
              alt={`Cat ${index + 1}`} 
              className="cat-image" 
            />

            {/* Sparkles Animation (Only for Selected Cat) */}
            {selectedCat === index && (
              <div className="sparkle-container">
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* "Let's Go" Button */}
      <button className="lets-go-button" onClick={handleLetsGo} disabled={selectedCat === null}>
        Let's Go
      </button>

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

export default ChooseCatPage;
