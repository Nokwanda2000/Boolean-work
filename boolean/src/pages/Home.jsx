import React, { useState, useEffect } from 'react';

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    const randomColor = ["pink", "lightgreen","lightblue"]
    const randomIndex = Math.floor(Math.random() * randomColor.length)
    setBackgroundColor(randomColor[randomIndex]);
  }, []);

  return (
    <div className="home-container" style={{ backgroundColor }}>
      <div className="left-section">
        <p className="trial-text">-Free 30 days trial</p>
        <h1 className="heading">
          The best way <br /> to showcase <br /> your project
        </h1>
        <p className="description">
          Just like a solved puzzle we bring solutions to your project
        </p>
        <div className="button-container">
          <button style={{ backgroundColor }} className="button">Excercises</button>
          <button
            style={{
              backgroundColor: "green",
              border: "none",
              borderRadius: "5px",
             
            }}
            className="button2"
          >
            TraficLights
          </button>
        </div>
      </div>
      <div className="right-section">
        <img
          className="image"
          src={require("../assets/Games-Puzzles-Depressed-1210983054-removebg-preview.png")}
        />
      </div>
    </div>
  );
}