import React from 'react';
import ReactCardSlider from 'react-card-slider-component';
import '../styles/slider.css';

// Portfolio slide click handler function
const sliderClick = (slide) => {
  // You can handle navigation or open a modal when a slide is clicked
  window.open(slide.url, "_blank");
};

const PortfolioSlider = ({ title = "Portfolio Showcase" }) => {
  // Portfolio project slides with shortened descriptions to avoid overflow
  const slides = [
    {
      image: "https://via.placeholder.com/300x200/9862a2/ffffff?text=Pacemaker",
      title: "JHMI Pacemaker Simulator",
      // Breaking the long description into smaller chunks
      description: "I worked with JHMI nurses to design training software for external pacemakers. Created a React app with authentication linked to a Raspberry Pi simulator.",
      clickEvent: sliderClick,
      url: "#pacemaker"
    },
    {
      image: "https://via.placeholder.com/300x200/9862a2/ffffff?text=Heart+Cow", 
      title: "Heart Cow",
      description: "A cute cow plushie with heart pattern. Made with premium cotton yarn and filled with hypoallergenic stuffing.",
      clickEvent: sliderClick,
      url: "#heart-cow"
    },
    {
      image: "https://via.placeholder.com/300x200/9862a2/ffffff?text=Spiderman",
      title: "Spiderman",
      description: "Crochet Spiderman character plushie featuring detailed stitching and vibrant colors.",
      clickEvent: sliderClick,
      url: "#spiderman"
    },
    {
      image: "https://via.placeholder.com/300x200/9862a2/ffffff?text=Bunny+Plushie",
      title: "Bunny Plushie",
      description: "Soft bunny amigurumi for all ages. Perfect for gifting or home decoration.",
      clickEvent: sliderClick,
      url: "#bunny"
    },
    {
      image: "https://via.placeholder.com/300x200/9862a2/ffffff?text=Bear+Keychain",
      title: "Bear Keychain",
      description: "Small bear keychain with custom colors. Handmade with durable materials.",
      clickEvent: sliderClick,
      url: "#bear-keychain"
    }
  ];

  // Modified default slider properties to better handle text
  const defaultSliderProps = {
    padding: '30px',
    margin: '30px',
    width: '320px',
    maxWidth: '320px',
    height: '450px', // Increased height to accommodate text
  };

  return (
    <div className="slider-container">
      {title && <h2 className="portfolio-title">{title}</h2>}
      <div className="slider-wrapper">
        <ReactCardSlider 
          slides={slides} 
          {...defaultSliderProps}
        />
      </div>
    </div>
  );
};

export default PortfolioSlider;