import React from "react";
import aboutImage from "../img/about-img.png"; // Adjust the path to your image if needed

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Panchar is your trusted partner in providing fast, reliable, and professional vehicle assistance, no matter where you are. Whether you're dealing with a flat tire, an unexpected breakdown, or any other roadside emergency, we are committed to offering immediate support to get you back on the road with minimal disruption.
            <br /><br />
            Our dedicated team of highly trained technicians operates with the utmost efficiency, ensuring that your vehicle is treated with care and expertise. We understand how stressful and inconvenient vehicle issues can be, which is why we prioritize your safety and satisfaction in every service we provide. From the moment you contact us, you can expect quick response times, transparent communication, and quality solutions tailored to your specific needs.
            <br /><br />
            At Panchar, we believe that no journey should be delayed due to unforeseen vehicle problems. With our comprehensive range of services and unwavering commitment to excellence, you can have peace of mind knowing that help is always just a call away.
          </p>
          <a href="#services" className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition">
            Our Services
          </a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img src={aboutImage} alt="About Us" className="w-full h-auto rounded-lg shadow-lg max-w-sm md:max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default About;
