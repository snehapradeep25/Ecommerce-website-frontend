import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './Cartstyle.css';
import { Link } from 'react-router-dom';
const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>€ {item.price.toFixed(2)}</p>
      </div>
      <div className="item-quantity">
        <button>-</button>
        <input type="text" value={item.quantity} readOnly />
        <button>+</button>
      </div>
      <button className="remove-item">x</button>
    </div>
  );
};

const Cart = () => {
  const items = [
    { name: 'Shirt', description: 'Cotton T-shirt', price: 44.0, quantity: 1, image: 'image1.jpg' },
    { name: 'Shirt', description: 'Cotton T-shirt', price: 44.0, quantity: 1, image: 'image2.jpg' },
    { name: 'Shirt', description: 'Cotton T-shirt', price: 44.0, quantity: 1, image: 'image3.jpg' },
  ];

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0) + 5.0; // Adding 5 for shipping

  return (
    <div className="cart-page">
      <div className="header">
        <h1>
          <i className="fas fa-shopping-cart"></i> Your Cart
        </h1>
      </div>
      <div className="shopping-cart">
        {items.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
        <a href="/Home">← Back to shop</a>
      </div>
      <div className="summary">
        <h3>Summary</h3>
        <p>ITEMS {totalItems}</p>
        <div className="shipping">
          <label htmlFor="shipping">SHIPPING</label>
          <select id="shipping">
            <option>Standard-Delivery-€5.00</option>
          </select>
        </div>
        <div className="give-code">
          <label htmlFor="give-code">GIVE CODE</label>
          <input type="text" id="give-code" placeholder="Enter your code" />
        </div>
        <p>TOTAL PRICE € {totalPrice.toFixed(2)}</p>
        
        <button className="checkout" >CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;