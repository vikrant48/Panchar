import React from "react";
import rodeside from "../img/rdimg.jpeg"; // Ensure this path is correct
import tireImage from "../img/tcimg.jpeg";
import fuledelivery from "../img/fdimg.jpeg";
import towing from "../img/tsimg.jpeg";

const services = [
  {
    title: "Roadside Assistance",
    description: "24/7 roadside assistance to get you back on track quickly.",
    image: rodeside,
  },
  {
    title: "Tire Changes",
    description: "Fast and reliable tire changes to get you moving again.",
    image: tireImage,
  },
  {
    title: "Fuel Delivery",
    description: "Emergency fuel delivery service to get you to the nearest station.",
    image: fuledelivery,
  },
  {
    title: "Towing Services",
    description: "Professional towing services to transport your vehicle safely.",
    image: towing,
  },
];

const Services = () => {
  return (
    <section id="services" className="services-bg py-12 mt-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-card p-6 hover:scale-105 transition-transform">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

