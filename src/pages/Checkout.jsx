import React, { useState } from 'react';
import './Checkoutstyle.css'; // Assume you have a CSS file for styling

function Checkout({ cartItems = [], total }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
    email: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="checkout-page">
      <header className="header">
        <h1>Checkout</h1>
      </header>
      <main className="main-content">
        <div className="progress-bar">
          {/* Add progress bar logic here if needed */}
        </div>
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-section">
            <h2>Billing Details</h2>
            <label>
              First Name *
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </label>
            <label>
              Last Name *
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </label>
            <label>
              Company Name (optional)
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
            </label>
            <label>
              Country / Region *
              <select name="country" value={formData.country} onChange={handleChange} required>
                <option value="">Select a country / region...</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                {/* Add more options as needed */}
              </select>
            </label>
            <label>
              Street Address *
              <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </label>
            <label>
              Town / City *
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </label>
            <label>
              State / County *
              <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            </label>
            <label>
              Postcode / ZIP *
              <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
            </label>
            <label>
              Phone *
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
            <label>
              Email Address *
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
          </div>
          <div className="form-section">
            <h2>Your Order</h2>
            <ul className="order-summary">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <li key={item.id}>
                    {item.name} x {item.quantity} - ${item.price * item.quantity}
                  </li>
                ))
              ) : (
                <li>No items in the cart</li>
              )}
            </ul>
            <div className="order-total">
              <p>Subtotal: ${total}</p>
              <p>Tax: $0.00</p>
              <p>Total: ${total}</p>
            </div>
            <h2>Payment</h2>
            <label>
              Card Number *
              <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
            </label>
            <label>
              Expiration Date *
              <input type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} required />
            </label>
            <label>
              Security Code *
              <input type="text" name="securityCode" value={formData.securityCode} onChange={handleChange} required />
            </label>
            <div className="checkbox-container">
              <label>
                <input type="checkbox" required />
                I agree to the <a href="/privacy-policy">privacy policy</a> and <a href="/terms">terms and conditions</a>.
              </label>
            </div>
            <button type="submit" className="place-order-button">Place Order</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Checkout;
