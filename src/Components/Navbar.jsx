import React, { useState } from 'react';
import logo from '../img/logo.png';
import AppointmentModal from '../Components/AppointmentModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // For hover effect on the button
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For responsive mobile menu

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
      <nav className="nav-bg fixed w-full top-0 left-0 z-50 flex items-center px-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Panchar Logo" className="logo" />
            <div className="text-white text-2xl font-bold nav-text">Panchar</div>
          </div>
          <div className="md:hidden">
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
          <ul className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <li><a href="#home" onClick={(e) => handleScroll(e, "home")} className="text-white nav-link">Home</a></li>
            <li><a href="#about" onClick={(e) => handleScroll(e, "about")} className="text-white nav-link">About</a></li>
            <li><a href="#services" onClick={(e) => handleScroll(e, "services")} className="text-white nav-link">Services</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-white nav-link">Contact Us</a></li>
          </ul>
          <button
            style={isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
            onClick={handleModalOpen}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hidden md:block"
          >
            Book an Appointment
          </button>
        </div>
        {/* Button visible for mobile */}
        <div className={`md:hidden mt-4 text-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <button
            style={isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
            onClick={handleModalOpen}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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
