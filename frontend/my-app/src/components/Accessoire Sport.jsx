import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './accessoiresport.css';

function AssesoiresSport() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedStates, setExpandedStates] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/Products')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const toggleExpand = (id) => {
    setExpandedStates((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shop">
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
                <div className="card">
                  <img src={e.Image} className="img" alt="Proteine" />
                  <div className="de">
                    <h3>{e.name}</h3>
                    <p className="in">
                      <strong>{e.name}</strong> -{' '}
                      {expandedStates[e.id] ? e.description : (e.description ? `${e.description.slice(0, 100)}...` : '')}
                    </p>
                    <button onClick={() => toggleExpand(e.id)}>
                      {expandedStates[e.id] ? 'Read Less' : 'Read More'}
                    </button>
                    <button onClick={() => addToCart(e)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - {item.description}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AssesoiresSport;
