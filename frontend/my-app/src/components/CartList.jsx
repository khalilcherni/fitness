import React, { useState, useEffect } from 'react';

function CartList({ cart, setCart }) {
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const calculateTotalOrderAmount = () => {
    return cart.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);

      if (!isNaN(itemPrice)) {
        return total + itemPrice;
      } else {
        console.error(`Invalid price for item: ${item.name}`);
        return total;
      }
    }, 0);
  };

  const handleCheckout = () => {
    console.log('Processing checkout with buyer info:', buyerInfo);
    alert('Order placed successfully!');
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  useEffect(() => {
    console.log('Cart in CartList:', cart);
  }, [cart]);

  if (!cart || !Array.isArray(cart)) {
    console.error('Invalid cart data:', cart);
    return <div>Error loading cart</div>;
  }

  return (
    <div className="cart-list fitness-cart">
      <h2>Your Fitness Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - Price: {item.price} TND
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Order Amount: {calculateTotalOrderAmount()} TND</p>

      <div className="checkout-container fitness-checkout-container">
        <h3>Buyer Information</h3>
        <form>
          <label>Full Name:</label>
          <input type="text" name="name" value={buyerInfo.name} onChange={handleChange} />

          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={buyerInfo.phoneNumber} onChange={handleChange} />

          <label>Shipping Address:</label>
          <input type="text" name="address" value={buyerInfo.address} onChange={handleChange} />
        </form>
        <button onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default CartList;
