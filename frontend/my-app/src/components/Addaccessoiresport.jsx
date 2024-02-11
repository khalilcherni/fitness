// AddAccessoires.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './AddAccessoires.css';

function AddAccessoires() {
  const [accessoryName, setAccessoryName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleAddAccessory = () => {
    const newAccessory = {
      accessoryName: accessoryName,
      price: price,
      description: description,
      image: image,
    };

    console.log(newAccessory);

    axios
      .post('http://localhost:5000/api/Products', newAccessory)
      .then((res) => {
        console.log(res.data);
        setAccessoryName('');
        setPrice(0);
        setDescription('');
        setImage('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <hr />
      <h2 className="alert">Add New Accessory</h2>
      <hr />
      <form>
        <div className="mb-3">
          <label className="form-label">Accessory Name:</label>
          <input
            type="text"
            className="dd"
            value={accessoryName}
            onChange={(e) => setAccessoryName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="number"
            className="dd"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description:</label>
          <input
            type="text"
            className="dd"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL:</label>
          <input
            type="text"
            className="dd"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button className='button-55' type="button" onClick={handleAddAccessory}>
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddAccessoires;
