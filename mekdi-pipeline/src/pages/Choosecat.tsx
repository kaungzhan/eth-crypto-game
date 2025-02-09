import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Choosecat.css"; // ✅ Import CSS

// 🐱 Cat 1
import cat1_1 from "../assets/cat1/cat1-1.png";
import cat1_2 from "../assets/cat1/cat1-2.png";
import cat1_3 from "../assets/cat1/cat1-3.png";

// 🐱 Cat 2
import cat2_1 from "../assets/cat2/cat2-1.png";
import cat2_2 from "../assets/cat2/cat2-2.png";
import cat2_3 from "../assets/cat2/cat2-3.png";

// 🐱 Cat 3
import cat3_1 from "../assets/cat3/cat3-1.png";
import cat3_2 from "../assets/cat3/cat3-2.png";
import cat3_3 from "../assets/cat3/cat3-3.png";

// 🐱 Cat 4
import cat4_1 from "../assets/cat4/cat4-1.png";
import cat4_2 from "../assets/cat4/cat4-2.png";
import cat4_3 from "../assets/cat4/cat4-3.png";

// 🐱 Cat 5
import cat5_1 from "../assets/cat5/cat5-1.png";
import cat5_2 from "../assets/cat5/cat5-2.png";
import cat5_3 from "../assets/cat5/cat5-3.png";

// 🐱 Cat 6
import cat6_1 from "../assets/cat6/cat6-1.png";
import cat6_2 from "../assets/cat6/cat6-2.png";
import cat6_3 from "../assets/cat6/cat6-3.png";

// 💰 Coins & ⭐ Stars
import coin1 from "../assets/coin/coin_01.png";
import coin2 from "../assets/coin/coin_02.png";
import coin3 from "../assets/coin/coin_03.png";
import coin4 from "../assets/coin/coin_04.png";
import coin5 from "../assets/coin/coin_05.png";

import star1 from "../assets/star/star_01.png";
import star2 from "../assets/star/star_02.png";
import star3 from "../assets/star/star_03.png";
import star4 from "../assets/star/star_04.png";

// ✅ Store animations in arrays
const catAnimations = [
  [cat1_1, cat1_2, cat1_3],
  [cat2_1, cat2_2, cat2_3],
  [cat3_1, cat3_2, cat3_3],
  [cat4_1, cat4_2, cat4_3],
  [cat5_1, cat5_2, cat5_3],
  [cat6_1, cat6_2, cat6_3],
];

const coinImages = [coin1, coin2, coin3, coin4, coin5];
const starImages = [star1, star2, star3, star4];

const ChooseCatPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState<number | null>(null);
  const [hoveredCat, setHoveredCat] = useState<number | null>(null);
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const [coinFrame, setCoinFrame] = useState<number>(0);
  const [starFrame, setStarFrame] = useState<number>(0);
  const [sparkles, setSparkles] = useState<{ id: number; type: "coin" | "star"; top: string; left: string }[]>([]);

  // 🟢 Hover Animation for Cats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % 3);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // 🟡 Coin & Star Animation
  useEffect(() => {
    const coinInterval = setInterval(() => {
      setCoinFrame((prev) => (prev + 1) % coinImages.length);
    }, 150);
    const starInterval = setInterval(() => {
      setStarFrame((prev) => (prev + 1) % starImages.length);
    }, 150);
    return () => {
      clearInterval(coinInterval);
      clearInterval(starInterval);
    };
  }, []);

  // ⭐ Spawn sparkles randomly inside the cat-box
  useEffect(() => {
    if (selectedCat !== null) {
      const spawnInterval = setInterval(() => {
        const newSparkle: { id: number; type: "coin" | "star"; top: string; left: string } = {
          id: Date.now(),
          type: Math.random() > 0.5 ? "coin" : "star",
          top: `${Math.random() * 60 + 20}%`, // Keep within box
          left: `${Math.random() * 60 + 20}%`, // Keep within box
        };
        setSparkles((prev) => [...prev, newSparkle]);

        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles((prev) => prev.filter((sparkle) => sparkle.id !== newSparkle.id));
        }, 1000);
      }, 400);

      return () => clearInterval(spawnInterval);
    } else {
      setSparkles([]); // Clear sparkles when no cat is selected
    }
  }, [selectedCat]);

  // 🟢 Select a Cat
  const handleCatSelect = (index: number) => {
    setSelectedCat(index);
  };

  const handleLetsGo = () => {
    if (selectedCat !== null) {
      navigate("/wallet", { state: { selectedCat: catAnimations[selectedCat][0] } }); // ✅ Pass first frame of selected cat
    }
  };
  
  return (
    <div className="choose-cat-container">
      <h1 className="choose-cat title">Choose your cat!</h1>

      <div className="cat-grid">
        {catAnimations.map((catFrames, index) => (
          <div
            key={index}
            className={`cat-box ${selectedCat === index ? "selected" : ""}`}
            onClick={() => handleCatSelect(index)}
            onMouseEnter={() => setHoveredCat(index)}
            onMouseLeave={() => setHoveredCat(null)}
          >
            {/* 🐱 Hover Animation */}
            <img
              src={hoveredCat === index ? catFrames[currentFrame] : catFrames[0]}
              alt={`Cat ${index + 1}`}
              className="cat-image"
            />

            {/* ✨ Coins & Stars Animation */}
            {selectedCat === index && (
              <div className="sparkle-wrapper">
                {sparkles.map((sparkle) => (
                  <div
                    key={sparkle.id}
                    className="sparkle-container"
                    style={{
                      position: "absolute",
                      top: sparkle.top,
                      left: sparkle.left,
                      pointerEvents: "none",
                    }}
                  >
                    <img
                      src={sparkle.type === "coin" ? coinImages[coinFrame] : starImages[starFrame]}
                      alt={sparkle.type}
                      className={`sparkle-effect ${sparkle.type}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 🔘 "Let's Go" Button */}
      <button className="lets-go-button" onClick={handleLetsGo} disabled={selectedCat === null}>
        Let's Go
      </button>
    </div>
  );
};

export default ChooseCatPage;
