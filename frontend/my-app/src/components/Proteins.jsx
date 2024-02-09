import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './proteins.css';
import StarRating from './StarRating'; // Assuming you have a StarRating component

function Proteins() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [selectedProtein, setSelectedProtein] = useState(null);
  const [updateMode, setUpdateMode] = useState(false);
  const [updatedProtein, setUpdatedProtein] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/protein')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (protein) => {
    setCart((prevCart) => [...prevCart, protein]);
  };

  const handleImageClick = (protein) => {
    setSelectedProtein(protein);
    setUpdateMode(false);
  };

  const handleBackToList = () => {
    setSelectedProtein(null);
    setUpdateMode(false);
  };

  const handleDelete = () => {
    if (!selectedProtein) {
      return;
    }

    axios
      .delete(`http://localhost:5000/api/protein/${selectedProtein.id}`)
      .then((response) => {
        console.log('Delete response:', response.data);

        axios
          .get('http://localhost:5000/api/protein')
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));

        setSelectedProtein(null);
        setUpdateMode(false);
      })
      .catch((err) => console.log('Delete error:', err));
  };

  const handleUpdate = () => {
    setUpdateMode(true);
    setUpdatedProtein({ ...selectedProtein });
  };

  const handleCancelUpdate = () => {
    setUpdateMode(false);
    setUpdatedProtein({});
  };

  const handleSaveUpdate = () => {
    axios
      .put(`http://localhost:5000/api/protein/${updatedProtein.id}`, updatedProtein)
      .then((response) => {
        console.log('Update response:', response.data);

        axios
          .get('http://localhost:5000/api/protein')
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));

        setUpdateMode(false);
        setUpdatedProtein({});
      })
      .catch((err) => console.log('Update error:', err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProtein((prevProtein) => ({
      ...prevProtein,
      [name]: value,
    }));
  };

  const handleRatingClick = (clickedRating, proteinId) => {
    axios
      .put(`http://localhost:5000/api/protein/${proteinId}`, { rating: clickedRating })
      .then((response) => {
        console.log('Rating update response:', response.data);

        setData((prevData) =>
          prevData.map((protein) =>
            protein.id === proteinId ? { ...protein, rating: clickedRating } : protein
          )
        );
      })
      .catch((err) => console.log('Rating update error:', err));
  };

  // Modify the filteredData variable to include the "name" field
  const filteredData = data.filter((protein) =>
    protein.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      {updateMode ? (
        <div className="update-container">
          <label>Protein Name:</label>
          <input
            type="text"
            name="name"
            value={updatedProtein.name}
            onChange={handleInputChange}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={updatedProtein.description}
            onChange={handleInputChange}
          />
          <label>Image:</label>
          <textarea
            name="Image"
            value={updatedProtein.Image}
            onChange={handleInputChange}
          />
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={updatedProtein.price}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveUpdate}>Save Update</button>
          <button onClick={handleCancelUpdate}>Cancel</button>
        </div>
      ) : selectedProtein ? (
        <div className="details-container">
          <h1>{selectedProtein.name}</h1>
          <img
            className="imageClassName"
            src={selectedProtein.Image}
            alt="Protein"
          />
          <p>{selectedProtein.description}</p>
          <p>Price: ${selectedProtein.price}</p>
          <StarRating
            rating={selectedProtein.rating}
            onRatingClick={(clickedRating) =>
              handleRatingClick(clickedRating, selectedProtein.id)
            }
          />
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleBackToList}>Back to List</button>
        </div>
      ) : (
        <>
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              placeholder="Search by protein name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {filteredData.length === 0 ? (
              <p>No results found.</p>
            ) : (
              filteredData.map((protein) => (
                <div key={protein.id} className="col mb-4">
                  <div className="card h-100 men-card">
                    <img
                      src={protein.Image}
                      className="card-img-top"
                      alt="Protein"
                      onClick={() => handleImageClick(protein)}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{protein.name}</h5>
                      {protein.description && <p>{protein.description}</p>}
                      <p>Price: {protein.price}</p>
                      <StarRating
                        rating={protein.rating}
                        onRatingClick={(clickedRating) =>
                          handleRatingClick(clickedRating, protein.id)
                        }
                      />
                      <button onClick={() => addToCart(selectedProtein)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Proteins;
