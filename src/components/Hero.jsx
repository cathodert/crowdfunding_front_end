import React from "react";
import './Hero.css'

const HeroSection = ({ backgroundImage, textContent, heroLink }) => {
    return (
      <div className="hero-section" style={{backgroundImage: `url(${backgroundImage})`}}>
            <h1>{textContent.title}</h1>
            <p>{textContent.subtitle}</p>
            <a href={heroLink} className="hero-button-link">
                <button className="hero-button">{textContent.button}</button>
                </a>
        </div>
    );
  };
  
  export default HeroSection;
  