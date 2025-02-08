import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/StartPage.css";

// Importing Cat Animation Frames
import cat1_1 from "../assets/cat1/cat1-1.png";
import cat1_2 from "../assets/cat1/cat1-2.png";
import cat1_3 from "../assets/cat1/cat1-3.png";

const catFrames = [cat1_1, cat1_2, cat1_3];

const StartPage: React.FC = () => {
    const navigate = useNavigate();
    const [currentFrame, setCurrentFrame] = useState(0);

    // Cycle through animation frames
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((prevFrame) => (prevFrame + 1) % catFrames.length);
        }, 200); // ✅ Change every 200ms

        return () => clearInterval(interval); // ✅ Cleanup on unmount
    }, []);

    const dialog = {
        name: "CryptMeow",
        text: "👋 Hey there, crypto curious! I'm CryptMeow, the cat with the crypto tricks. 🐈💎 \n In Mekdi Pipeline, you’ll learn how to trade like a pro, avoid scams, and stack that ETH like it’s catnip. 🌿 * Just make sure you don't send me to Mekdi * \n So, are you ready to join the crypto craze and become the ultimate ETH earner? Let’s get this purr-fect adventure started! 🚀",
    };

    const handleLetsGo = () => {
        navigate("/choose-cat");
    };

    const handleNoThanks = () => {
        navigate("/");
    };

    return (
        <div className="game-container">
            {/* Animated Character */}
            <img src={catFrames[currentFrame]} alt="CryptMeow" className="character animated-cat" />

            {/* Dialogue Box */}
            <div className="dialog-box fly-up">
                <span className="character-name">{dialog.name}</span>
                <p className="dialog-text">{dialog.text}</p>

                {/* Buttons on Top Right */}
                <div className="dialog-buttons fly-up">
                    <button className="dialog-button" onClick={handleLetsGo}>Yes I'm Ready!</button>
                    <button className="dialog-button" onClick={handleNoThanks}>No Thanks</button>
                </div>
            </div>
        </div>
    );
};

export default StartPage;
