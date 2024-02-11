// CartList.js

import React, { useState } from 'react';
import { useCart } from './CartContext.js';
import './CartList.css'; // Import the CartList CSS

const CartList = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { cart, addToCart, removeFromCart } = useCart();

  const handleSubmit = () => {
    // You can perform additional logic or validation here before submitting
    // For simplicity, this example just displays a success message
    setSuccessMessage('Successfully submitted!');
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    setSuccessMessage('Item added to cart!');
  };

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
    setSuccessMessage('Item removed from cart!');
  };

  return (
    <div className="cart__container">
      <h1 className="cart__header">Your Cart</h1>
      <div className="cart__content">
        <h2>Your Cart Items</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name}
              {item.Price}
              {item.image}
              <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      <form className="cart__form">
        {/* Input field for name */}
        <label className="cart__label">
          Name:
          <input
            className="cart__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        {/* Input field for address */}
        <label className="cart__label">
          Address:
          <input
            className="cart__input"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>

        {/* Input field for description */}
        <label className="cart__label">
          Description:
          <textarea
            className="cart__textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        {/* Submit button */}
        <button className="cart__button" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {/* Display success message */}
      {successMessage && <p className="cart__success-message">{successMessage}</p>}
    </div>
  );
};

export default CartList;
