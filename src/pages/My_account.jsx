// src/My_account.js
import React from 'react';
import './My_account.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faShoppingCart, faAddressCard, faWallet } from '@fortawesome/free-solid-svg-icons';

const My_account = () => {
  // Example user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    orderHistory: [
      { id: 1, date: '2024-07-01', items: ['Product 1', 'Product 2'], total: '$100' },
      { id: 2, date: '2024-07-05', items: ['Product 3'], total: '$50' },
    ],
  };

  return (
    <div className="user-detail-container">
      <header className="header">
        <h2>User Account</h2>
      </header>
      <section className="profile-section">
        <div className="profile-header">
          <img src="path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
          <div className="profile-info">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button className="edit-button">
              <FontAwesomeIcon icon={faEdit} /> Edit Profile
            </button>
          </div>
        </div>
        <div className="profile-details">
          <div className="detail">
            <FontAwesomeIcon icon={faAddressCard} className="icon" />
            <span>{user.phone}</span>
          </div>
          <div className="detail">
            <FontAwesomeIcon icon={faAddressCard} className="icon" />
            <span>{user.address}</span>
          </div>
        </div>
      </section>
      <section className="order-history-section">
        <h3>Order History</h3>
        <div className="order-history">
          {user.orderHistory.map(order => (
            <div key={order.id} className="order">
              <p><strong>Order Date:</strong> {order.date}</p>
              <p><strong>Items:</strong> {order.items.join(', ')}</p>
              <p><strong>Total:</strong> {order.total}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer">
        <button className="cart-button">
          <FontAwesomeIcon icon={faShoppingCart} /> View Cart
        </button>
      </footer>
    </div>
  );
};

export default My_account