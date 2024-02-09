import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './proteins.css'; // Assuming you have a Proteine.css file for styling
import StarRating from './StarRating';
function Proteine() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProteine, setSelectedProteine] = useState(null);
  const [updateMode, setUpdateMode] = useState(false);
  const [updatedProteine, setUpdatedProteine] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/protein')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredData = data.filter((proteine) =>
    proteine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageClick = (proteine) => {
    setSelectedProteine(proteine);
  };

  const handleBackToList = () => {
    setSelectedProteine(null);
    setUpdateMode(false);
  };

  const handleDelete = () => {
    if (!selectedProteine) {
      return;
    }

    axios
      .delete(`http://localhost:5000/api/protein/${selectedProteine.ID}`)
      .then((response) => {
        console.log('Delete response:', response.data);

        axios
          .get('http://localhost:5000/api/Protein')
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));

        setSelectedProteine(null);
        setUpdateMode(false);
      })
      .catch((err) => console.log('Delete error:', err));
  };

  const handleUpdate = () => {
    setUpdateMode(true);
    setUpdatedProteine({ ...selectedProteine });
  };

  const handleCancelUpdate = () => {
    setUpdateMode(false);
    setUpdatedProteine({});
  };

  const handleSaveUpdate = () => {
    axios
      .put(`http://localhost:5000/api/Protein/${updatedProteine.ID}`, updatedProteine)
      .then((response) => {
        console.log('Update response:', response.data);

        axios
          .get('http://localhost:5000/api/Protein')
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));

        setUpdateMode(false);
        setUpdatedProteine({});
      })
      .catch((err) => console.log('Update error:', err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProteine((prevProteine) => ({
      ...prevProteine,
      [name]: value,
    }));
  };
  const handleRatingClick = (clickedRating, placeId) => {
    setData(prevData => prevData.map(e => (e.place_id === placeId ? { ...e, rating: clickedRating } : e)));
  };
  return (
    <div className="container mt-5">
      {updateMode ? (
        <div className="update-container">
          <label>Proteine Name:</label>
          <input
            type="text"
            name="name"
            value={updatedProteine.name}
            onChange={handleInputChange}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={updatedProteine.description}
            onChange={handleInputChange}
          />
          <label>Image:</label>
          <textarea
            name="Image"
            value={updatedProteine.Image}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveUpdate}>Save Update</button>
          <button onClick={handleCancelUpdate}>Cancel</button>
        </div>
      ) : selectedProteine ? (
        <div className="details-container">
          <h1>{selectedProteine.name}</h1>
          <img
            className="imageClassName"
            src={selectedProteine.Image}
            alt="Proteine"
          />
          <p>{selectedProteine.description}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleBackToList}>Back to List</button>
        </div>
      ) : (
        <>
          <input
            className="search-input"
            type="text"
            placeholder="Search by proteine name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {filteredData.map((proteine) => (
              <div key={proteine.id} className="col mb-4">
                <div className="card h-100 men-card">
                  <img
                    src={proteine.Image}
                    className="card-img-top"
                    alt="Proteine"
                    onClick={() => handleImageClick(proteine)}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{proteine.name}</h5>
                    {proteine.description && <p>{proteine.description}</p>}
                    <StarRating 
          rating={proteine.rating}
          onRatingClick={(clickedRating) => handleRatingClick(clickedRating, proteine.place_id)} 
        />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Proteine;