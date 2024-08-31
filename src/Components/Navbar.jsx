import React, { useState } from 'react';
import logo from '../img/logo.png';
import AppointmentModal from '../Components/AppointmentModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth',
    });
    setIsMenuOpen(false); // Close the menu after clicking on a link
  };

  const buttonStyle = {
    backgroundColor: '#d50000',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#a40000',
  };

  return (
    <>
      <nav className="nav-bg fixed w-full top-0 left-0 z-50 flex items-center px-4 py-2 shadow-lg bg-gray-800">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Panchar Logo" className="logo h-8" />
            <div className="text-white text-2xl font-bold">Panchar</div>
          </div>
          <div className="md:hidden flex items-center">
            {/* Hamburger menu for mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
          <ul className="md:flex space-x-4 md:space-x-6 md:ml-auto hidden md:flex">
            <li><a href="#home" onClick={(e) => handleScroll(e, "home")} className="text-white hover:text-gray-300">Home</a></li>
            <li><a href="#about" onClick={(e) => handleScroll(e, "about")} className="text-white hover:text-gray-300">About</a></li>
            <li><a href="#services" onClick={(e) => handleScroll(e, "services")} className="text-white hover:text-gray-300">Services</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-white hover:text-gray-300">Contact Us</a></li>
          </ul>
          <button
            style={isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
            onClick={handleModalOpen}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hidden md:block ml-4"
          >
            Book an Appointment
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-white flex flex-col items-center justify-center space-y-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end p-4 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="space-y-4">
            <li><a href="#home" onClick={(e) => handleScroll(e, "home")} className="text-white text-xl">Home</a></li>
            <li><a href="#about" onClick={(e) => handleScroll(e, "about")} className="text-white text-xl">About</a></li>
            <li><a href="#services" onClick={(e) => handleScroll(e, "services")} className="text-white text-xl">Services</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-white text-xl">Contact Us</a></li>
          </ul>
          <button
            style={isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
            onClick={handleModalOpen}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="mt-auto mb-4 px-6 py-3 text-lg"
          >
            Book an Appointment
          </button>
        </div>
      </nav>
      <AppointmentModal isOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
};

export default Navbar;
