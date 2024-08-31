import React from "react";
import '../styles/Whychooseus.css';  // You will create this CSS file for styling

import Car from '../img/caralt.png';
import Dig from '../img/dig.png';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-choose-us-bg">
      <div className="container mx-auto text-center py-16">
        <h2 className="text-4xl font-bold mb-8 text-white">Why Choose Us</h2>
        <p className="text-xl mb-8 text-white">We Offer Full Service Auto Repair & Maintenance</p>

        <div className="relative car-image-container">
          <img src={Car} alt="Car" className="car-image" />
        </div>

        <div className="services-icons mt-12 flex flex-wrap justify-center gap-8">
          <div className="service-icon">
            <img src={Dig} alt="Diagnostics" />
            <h4 className="mt-4 text-xl font-semibold text-white">Diagnostics</h4>
            <p className="text-gray-300">If your car needs a mobile diagnostic check done at your home or office, let AutoMechanica assist you.</p>
          </div>
          <div className="service-icon">
            <img src={Dig} alt="Dent & Paint" />
            <h4 className="mt-4 text-xl font-semibold text-white">Dent & Paint</h4>
            <p className="text-gray-300">Specializes in car dent repair and car painting services.</p>
          </div>
          <div className="service-icon">
            <img src={Dig} alt="Dent & Paint" />
            <h4 className="mt-4 text-xl font-semibold text-white">Dent & Paint</h4>
            <p className="text-gray-300">Specializes in car dent repair and car painting services.</p>
          </div>
          <div className="service-icon">
            <img src={Dig} alt="Dent & Paint" />
            <h4 className="mt-4 text-xl font-semibold text-white">Dent & Paint</h4>
            <p className="text-gray-300">Specializes in car dent repair and car painting services.</p>
          </div>
          <div className="service-icon">
            <img src={Dig} alt="Dent & Paint" />
            <h4 className="mt-4 text-xl font-semibold text-white">Dent & Paint</h4>
            <p className="text-gray-300">Specializes in car dent repair and car painting services.</p>
          </div>
          {/* Add more service icons as needed */}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
