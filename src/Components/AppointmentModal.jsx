import React, { useState } from 'react';
import '../styles/AppointmentModal.css'; // Make sure to create appropriate styling

const AppointmentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2 className="modal-title">Request A Call Back</h2>
        <form className="modal-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="vehicleDetails">Vehicle Details</label>
            <input type="text" id="vehicleDetails" name="vehicleDetails" />
          </div>
          <div className="form-group">
            <label htmlFor="mobilePhone">Mobile Phone</label>
            <input type="tel" id="mobilePhone" name="mobilePhone" />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
