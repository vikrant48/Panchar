import React, { useState } from 'react';
import logo from '../img/logo.png';
import AppointmentModal from '../Components/AppointmentModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // For hover effect on the button

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth',
    });
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
          <ul className="flex space-x-4">
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
