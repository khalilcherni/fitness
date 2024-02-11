import React, { useState } from 'react';
import axios from 'axios';
import './AddProtein.css';

function AddProtein() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0);

  const handleAddProtein = () => {
    const newProtein = {
      name: name,
      description: description,
      image: image,
      price: price,
    };

    axios
      .post('http://localhost:5000/api/protein', newProtein)
      .then((res) => {
        console.log(res.data);
        setName('');
        setDescription('');
        setImage('');
        setPrice(0);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <hr />
      <h2 className="alert">Add New Protein</h2>
      <hr />
      <hr />
      <form>
        <div className="mb-3">
          <label className="form-label">Protein Name:</label>
          <input
            type="text"
            className="dd"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea
            className="dd"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image:</label>
          <input
            type="text"
            className="dd"
            value={image}
            onChange={(e) => setImage(e.target.value)}
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

        <button className="button-55" type="button" onClick={handleAddProtein}>
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddProtein;
