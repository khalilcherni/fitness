// CartList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CartList({ cart, setCart }) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedStates, setExpandedStates] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    phoneNumber: '',
    address: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/Products')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const toggleExpand = (id) => {
    setExpandedStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const calculateTotalOrderAmount = () => {
    return cart?.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);

      if (!isNaN(itemPrice)) {
        return total + itemPrice;
      } else {
        console.error(`Invalid price for item: ${item.name}`);
        return total;
      }
    }, 0) || 0;
  };

  const handleCheckout = () => {
    if (!cart || cart.length === 0) {
      setMessage('Your cart is empty. Add items before proceeding to checkout.');
    } else if (
      buyerInfo.name === '' ||
      buyerInfo.phoneNumber === '' ||
      buyerInfo.address === ''
    ) {
      setMessage(
        'Please fill in all the buyer information fields before proceeding to checkout.'
      );
    } else {
      console.log('Processing checkout with buyer info:', buyerInfo);
      setMessage('Order placed successfully!');
      // You can reset the cart and buyerInfo here if needed
      // setCart([]);
      // setBuyerInfo({ name: '', phoneNumber: '', address: '' });
    }
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    setMessage(`Removed ${cart[index]?.name} from the cart.`);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shop">
      {showCart ? (
        <>
          <h2>Your Fitness Cart</h2>
          {message && <p>{message}</p>}
          <ul>
            {cart?.length === 0 ? (
              <li>No items in the cart</li>
            ) : (
              cart?.map((item, index) => (
                <li key={index}>
                  {item.name} - Price: {item.price} TND
                  <button onClick={() => handleRemoveItem(index)}>Remove</button>
                </li>
              ))
            )}
          </ul>
          <p>Total Order Amount: {calculateTotalOrderAmount()} TND</p>
          <button onClick={() => setShowCart(false)}>Proceed to Checkout</button>
        </>
      ) : (
        <>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
              className="search-input"
            />
          </div>
          <div className="container">
            <div className="row">
              {filteredData.length === 0 ? (
                <p>No results found.</p>
              ) : (
                filteredData.map((e) => (
                  <div key={e.id} className="col">
                    
                    </div>
                  
                ))
              )}
            </div>
          </div>
          <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart?.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cart?.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            )}
            <button onClick={() => setShowCart(true)}>View Cart</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartList;
