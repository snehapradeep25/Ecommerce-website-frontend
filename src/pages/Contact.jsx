// ContactPage.jsx
import React from 'react';
import './ContactPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-section">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <span className="contact-text">Customer Support: +1 123 456 7890</span>
        </div>
        <div className="contact-section">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <span className="contact-text">Email: support@example.com</span>
        </div>
        <div className="contact-section">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
          <span className="contact-text">Address: 123 Street, City, Country</span>
        </div>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
