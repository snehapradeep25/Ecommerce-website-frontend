import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faBars, faClipboardList,faCashRegister,faStore } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div>
      <nav>
        <ul>
          <li className="hideOnMobile">
            <FontAwesomeIcon icon={faBars} className="stylish-z-icon" />
          </li>
          <li><a href="/Home">Home</a></li>
          <li>
            <a href="/Product">Product</a>
            <div className="dropdown-content">
              <a href="#clothes">Clothes</a>
              <a href="#Home Appliances">Home Appliances</a>
              <a href="#skincare">Skin care</a>
              <a href="#Haircare">Hair care</a>
              <a href="#accessories">Appliances</a>
            </div>
          </li>
          <li><a href="/Contact">Contact</a></li>
          <li>
            <a href="/cart" className="cart-icon" style={{paddingLeft:'30px',
              marginRight:'100px'
            }}> 
              <FontAwesomeIcon icon={faShoppingCart} />
              <div className="dropdown-content" style={{fontSize:'15px'}}>
              <a href="/Cart">My Cart</a>
              <a href="/Orders">Orders</a>
              </div>
              </a>
           
          </li>
          <li className="menu-button" style={{marginRight:'34px',marginBottom:'100px'}}>
            <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
          </li>
        </ul>
      </nav>
      <aside ref={sidebarRef} className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="/My_account">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
              My Account
            </a>
          </li>
          <li>
            <a href="/Cart" >
              <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '10px' }} />
              My Cart
            </a>
          </li>
          <li>
            <a href="/Orders">
              <FontAwesomeIcon icon={faClipboardList} style={{ marginRight: '10px' }} />
              Orders
            </a>
          </li>
          <li>
            < a href="/Checkout">
            <FontAwesomeIcon icon={faCashRegister} style={{ marginRight: '10px' }} />
            Checkout
            </a>
          </li>
          <li>
            <a href="/Sell_Your_Own_Products">
            <FontAwesomeIcon icon={faStore} style={{ marginRight: '10px' }} />
            Sell Your Own Products
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default App;