import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Zenthra is your one-stop online shop for today's most classic and trendy products.
            By bringing fashionable products to our customers, we offer a range of options for any occasion.
          </p>
        </div>
        <div className="footer-section links" style={{display:'grid'}}>
          <h2>Links</h2>
          <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/product">Products</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="/My_account">My Account</a></li>
            <li><a href="/Orders">Orders</a></li>
            <li><a href="/Checkout">Checkout</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Zenthra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
