import React from 'react';
import Logo from './Logo';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMicrophone, faCamera } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
      <h1 className="site-heading" style={{fontFamily:"cursive"}}>Zenthra</h1>
        <Logo />
        <div className="user-account">
          <a href="/My_account" className="account-link">
          <button className="profile-button"> <FontAwesomeIcon icon={faUser} className="user-icon" />
          <span className="user-text">User Account</span></button></a>
        </div>
      </header>
      <section className="main-content">
        <div className="banner">
          <h2>Welcome to Zenthra</h2>
          <p>Discover your favorite products with ease.</p>
        </div>
        <div className="search-container">
          <div className="search-bar-container">
            <input type="text" className="search-bar" placeholder="Search..." />
            <div className="search-icons">
              <FontAwesomeIcon icon={faMicrophone} className="search-icon mic" />
              <FontAwesomeIcon icon={faCamera} className="search-icon cam" />
            </div>
          </div>
        </div>
        <h3 className="category-heading">Shop by Category</h3>
        <div className="categories">
        <div className="category">Skin Care</div>
          <div className="category">Hair Care</div>
          <div className="category">Home Appliances</div>
          <div className="category">Jewellery</div>
          <div className="category">Electronics</div>
          <div className="category">Women's Fashion</div>
          <div className="category">Men's Fashion</div>
          <div className="category">Mobiles and Computers</div>
          <div className="category">Kitchen Appliances</div>
          <div className="category">Sports Hub</div>
          <div className="category">Toys</div>
          <div className="category">Personal Care</div>
          
        </div>
      </section>
    
    </div>
  );
};

export default Home;