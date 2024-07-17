// src/components/Orders.jsx
import React from 'react';
import './Orders.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const orders = [
  {
    id: 1,
    item: "Stylish Jacket",
    date: "2023-07-01",
    status: "Delivered",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    item: "Fancy Watch",
    date: "2023-07-05",
    status: "Shipped",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    item: "Cool Shoes",
    date: "2023-07-10",
    status: "Processing",
    image: "https://via.placeholder.com/150"
  }
];

const Orders = () => {
  return (
    <div className="orders-container">
      <h1 className="orders-title">
        <FontAwesomeIcon icon={faBoxOpen} style={{ marginRight: '10px' }} />
        My Orders
      </h1>
      <div className="orders-list">
        {orders.map(order => (
          <div key={order.id} className="order-card">
            <img src={order.image} alt={order.item} className="order-image" />
            <div className="order-details">
              <h2 className="order-item">{order.item}</h2>
              <p className="order-date">Order Date: {order.date}</p>
              <p className={`order-status ${order.status.toLowerCase()}`}>Status: {order.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
