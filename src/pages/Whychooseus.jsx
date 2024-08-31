import React from "react";
import '../styles/Whychooseus.css';  // Ensure to add the appropriate CSS file for styling

import Car from '../img/caralt.png';
import Dig from '../img/dig.png';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-choose-us-bg py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Why Choose Us</h2>
        <p className="text-lg md:text-xl mb-8 text-white">We Offer Full Service Auto Repair & Maintenance</p>

        {/* Car Image */}
        <div className="relative flex justify-center mb-12">
          <img src={Car} alt="Car" className="w-full md:w-3/4 lg:w-1/2 car-image" />
        </div>

        {/* Service Icons */}
        <div className="services-icons grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-icon p-4 bg-gray-800 rounded-lg shadow-lg">
            <img src={Dig} alt="Diagnostics" className="mx-auto mb-4" />
            <h4 className="mt-4 text-xl font-semibold text-white">Diagnostics</h4>
            <p className="text-gray-300">If your car needs a mobile diagnostic check done at your home or office, let AutoMechanica assist you.</p>
          </div>
          <div className="service-icon p-4 bg-gray-800 rounded-lg shadow-lg">
            <img src={Dig} alt="Dent & Paint" className="mx-auto mb-4" />
            <h4 className="mt-4 text-xl font-semibold text-white">Dent & Paint</h4>
            <p className="text-gray-300">Specializes in car dent repair and car painting services.</p>
          </div>
          <div className="service-icon p-4 bg-gray-800 rounded-lg shadow-lg">
            <img src={Dig} alt="Roadside Assistance" className="mx-auto mb-4" />
            <h4 className="mt-4 text-xl font-semibold text-white">Roadside Assistance</h4>
            <p className="text-gray-300">24/7 assistance in case of vehicle breakdowns and emergencies.</p>
          </div>
          {/* Add more service icons as needed */}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
