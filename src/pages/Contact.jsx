import React, { useState } from "react";

const Contact = () => {
  const [location, setLocation] = useState(null);

  const sendLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    setLocation(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
  };

  return (
    <section id="contact" className="h-screen flex items-center justify-center contact-bg mt-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          If you have any vehicle problems, contact us and share your location. We are here to help you!
        </p>
        <form className="mx-auto w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <input type="text" placeholder="Your Name" className="block w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm" />
          <input type="email" placeholder="Your Email" className="block w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm" />
          <textarea placeholder="Your Message" className="block w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm"></textarea>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition">Submit</button>
        </form>
        <button onClick={sendLocation} className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition">Share Location</button>
        {location && <p className="mt-4">{location}</p>}
      </div>
    </section>
  );
};

export default Contact;
