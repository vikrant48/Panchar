import React, { useState, useEffect } from "react";
import "../styles/Home.css";

// Import images using ES6 import syntax
import logoImage from '../img/img1.png';
import roadsideImage from '../img/img2.png';
import image3 from '../img/img3.png';
import image4 from '../img/img4.png';

const images = [logoImage, roadsideImage, image3, image4];

const Home = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section
      id="home"
      className="home-bg flex items-center justify-center relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${images[activeImageIndex]})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative text-center text-white z-10 p-6 bg-black bg-opacity-50 rounded-lg shadow-lg max-w-lg mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Panchar</h1>
        <p className="text-lg md:text-xl mb-6">Your trusted vehicle assistance service</p>
        <a href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition">
          Contact Us
        </a>
      </div>

      {/* Dots for navigation */}
      <div className="absolute bottom-6 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${activeImageIndex === index ? 'active' : ''} w-3 h-3 rounded-full bg-white opacity-50 cursor-pointer`}
            onClick={() => setActiveImageIndex(index)} // Manually change image on dot click
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
