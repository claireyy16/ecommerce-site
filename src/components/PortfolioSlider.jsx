import React from 'react';
import ReactCardSlider from 'react-card-slider-component';
import '../styles/slider.css';



// Portfolio slide click handler function
const sliderClick = (slide) => {
  // You can handle navigation or open a modal when a slide is clicked
  window.open(slide.url, "_blank");
};

const PortfolioSlider = () => {
  // Portfolio project slides
  const slides = [
    {
      image: "https://via.placeholder.com/300x200/9862a2/ffffff?text=Yellow+Cow",
      title: "Yellow Cow",
      description: "A handmade crochet yellow cow plushie",
      clickEvent: sliderClick,
      url: "#yellow-cow"
    },
    {
      image: "https://via.placeholder.com/300x200/9862a2/ffffff?text=Heart+Cow", 
      title: "Heart Cow",
      description: "A cute cow plushie with heart pattern",
      clickEvent: sliderClick,
      url: "#heart-cow"
    },
    {
      image: "https://via.placeholder.com/300x200/9862a2/ffffff?text=Spiderman",
      title: "Spiderman",
      description: "Crochet Spiderman character plushie",
      clickEvent: sliderClick,
      url: "#spiderman"
    },
    {
      image: "https://via.placeholder.com/300x200/9862a2/ffffff?text=Bunny+Plushie",
      title: "Bunny Plushie",
      description: "Soft bunny amigurumi for all ages",
      clickEvent: sliderClick,
      url: "#bunny"
    },
    {
      image: "https://via.placeholder.com/300x200/9862a2/ffffff?text=Bear+Keychain",
      title: "Bear Keychain",
      description: "Small bear keychain with custom colors",
      clickEvent: sliderClick,
      url: "#bear-keychain"
    }
  ];

  return (
    <div className="slider-container">
      <h2 className="portfolio-title">Portfolio Showcase</h2>
      <div className="slider-wrapper">
        <ReactCardSlider slides={slides} />
      </div>
    </div>
  );
};

export default PortfolioSlider;