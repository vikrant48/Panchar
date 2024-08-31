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
    <section id="contact" className="contact-bg py-12 mt-16 flex items-center justify-center">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          If you have any vehicle problems, contact us and share your location. We are here to help you!
        </p>
        <form className="mx-auto w-full max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="block w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition w-full"
          >
            Submit
          </button>
        </form>
        <button
          onClick={sendLocation}
          className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition w-full"
        >
          Share Location
        </button>
        {location && <p className="mt-4 text-gray-700">{location}</p>}
      </div>
    </section>
  );
};

export default Contact;
