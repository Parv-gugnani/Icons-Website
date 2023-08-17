// src/App.js
import React from "react";
import "./App.css";
import SvgIcon from "./components/SvgIcon";

const App = () => {
  const icons = [
    { name: "star", src: "/path-to-star.svg", alt: "Star Icon" },
    { name: "heart", src: "/path-to-heart.svg", alt: "Heart Icon" },
    // Add more icons here
  ];

  return (
    <div className="App">
      <h1>Icons Website</h1>
      <div className="icon-container">
        {icons.map((icon, index) => (
          <SvgIcon key={index} src={icon.src} alt={icon.alt} />
        ))}
      </div>
    </div>
  );
};

export default App;
