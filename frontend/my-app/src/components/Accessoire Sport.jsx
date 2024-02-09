import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './accessoiresport.css';

function AccessoiresSport() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [updateMode, setUpdateMode] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/Products')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Modify the filteredData variable to include the "price" field
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageClick = (item) => {
    setSelectedItem(item);
    setUpdateMode(false); // Ensure update mode is set to false when clicking on a new image
  };

  const handleBackToList = () => {
    setSelectedItem(null);
    setUpdateMode(false);
  };

  const handleDelete = () => {
    if (!selectedItem) {
      return;
    }

    axios
      .delete(`http://localhost:5000/api/Products/${selectedItem.ID}`)
      .then((response) => {
        console.log('Delete response:', response.data);

        axios
          .get('http://localhost:5000/api/Products')
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));

        setSelectedItem(null);
        setUpdateMode(false);
      })
      .catch((err) => console.log('Delete error:', err));
  };

  const handleUpdate = () => {
    setUpdateMode(true);
    setUpdatedItem({ ...selectedItem });
  };

  const handleCancelUpdate = () => {
    setUpdateMode(false);
    setUpdatedItem({});
  };

  const handleSaveUpdate = () => {
    axios
      .put(`http://localhost:5000/api/Products/${updatedItem.ID}`, updatedItem)
      .then((response) => {
        console.log('Update response:', response.data);

        axios
          .get('http://localhost:5000/api/Products')
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));

        setUpdateMode(false);
        setUpdatedItem({});
      })
      .catch((err) => console.log('Update error:', err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  return (
    <div className="shop">
      {updateMode ? (
        <div className="update-container">
          <label>Item Name:</label>
          <input
            type="text"
            name="name"
            value={updatedItem.name}
            onChange={handleInputChange}
          />
          {/* Add other fields as needed */}
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={updatedItem.price}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveUpdate}>Save Update</button>
          <button onClick={handleCancelUpdate}>Cancel</button>
        </div>
      ) : selectedItem ? (
        <div className="details-container">
          <h1>{selectedItem.name}</h1>
          <img src={selectedItem.Image} className="img" alt="Item" />
          <p>{selectedItem.description}</p>
          <p>Price: ${selectedItem.price}</p>
          <div className="button-container">
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleBackToList}>Back to List</button>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
              className="search-input"
            />
          </div>
          <div className="row">
            {filteredData.length === 0 ? (
              <p>No results found.</p>
            ) : (
              filteredData.map((item) => (
                <div key={item.id} className="col">
                  <div className="card">
                    <img
                      src={item.Image}
                      className="img"
                      alt="Item"
                      onClick={() => handleImageClick(item)}
                    />
                    <div className="de">
                      <h3>{item.name}</h3>
                      <p className="in">
                        <strong>{item.name}</strong> - {item.description}
                      </p>
                      <p className="price">Price: {item.price}</p>
                      <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.description} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AccessoiresSport;
