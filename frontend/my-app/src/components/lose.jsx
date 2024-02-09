import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Lose.css';
import './StarRating'
import StarRating from './StarRating';
function Lose() {
  const [data, setData] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [updateMode, setUpdateMode] = useState(false);
  const [updatedFood, setUpdatedFood] = useState({
    id: null,
    name: '',
    calories: '',
    description: '',
    type: '',
    image: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/lose/getAll')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/lose/${id}`)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
        setSelectedFood(null);
        setUpdateMode(false);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (food) => {
    setSelectedFood(null);
    setUpdateMode(true);
    setUpdatedFood(food);
  };

  const handleCancelUpdate = () => {
    setUpdateMode(false);
    setUpdatedFood({
      id: null,
      name: '',
      calories: '',
      description: '',
      type: '',
      image: '',
    });
  };

  const handleSaveUpdate = () => {
    axios
      .put(`http://localhost:5000/lose/${updatedFood.id}`, updatedFood)
      .then(() => {
        setData(data.map((item) => (item.id === updatedFood.id ? updatedFood : item)));
        setUpdateMode(false);
        setUpdatedFood({
          id: null,
          name: '',
          calories: '',
          description: '',
          type: '',
          image: '',
        });
      })
      .catch((err) => console.log(err));
  };

  const handleImageClick = (food) => {
    setSelectedFood(food);
    setUpdateMode(false);
  };

  const handleInputChange = (e) => {
    setUpdatedFood({ ...updatedFood, [e.target.name]: e.target.value });
  };

  const filteredData = data.filter((lose) => {
    return (
      (lose.name && lose.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (lose.description && lose.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (lose.type && lose.type.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });
  ////////////////////
  const handleRatingClick = (clickedRating, placeId) => {
    setData(prevData => prevData.map(e => (e.place_id === placeId ? { ...e, rating: clickedRating } : e)));
  };

  return (
    <div className="container mt-5">
      {updateMode ? (
        <div className="update-container">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={updatedFood.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Calories"
            name="calories"
            value={updatedFood.calories}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={updatedFood.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Type"
            name="type"
            value={updatedFood.type}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Image"
            name="image"
            value={updatedFood.image}
            onChange={handleInputChange}
          />
          
          <button onClick={handleSaveUpdate}>Save Update</button>
          <button onClick={handleCancelUpdate}>Cancel</button>
        </div>
      ) : selectedFood ? (
        <div className="details-container">
          <h5 className="card-title">{selectedFood.name}</h5>
          <img className="card-text" src= {selectedFood.image}/>
          <p className="card-text">Type: {selectedFood.type}</p>
          <p className="card-text">Calories: {selectedFood.calories}</p>
          <p className="card-text">Description: {selectedFood.description}</p>
          <StarRating 
          rating={selectedFood.rating}
          onRatingClick={(clickedRating) => handleRatingClick(clickedRating, selectedFood.place_id)} 
        />
          <button onClick={() => handleDelete(selectedFood.id)}>Delete</button>
          <button onClick={() => handleUpdate(selectedFood)}>Update</button>
          <button onClick={() => setSelectedFood(null)}>Back to List</button>
        </div>
      ) : (
        <>
          <input
            className="gainsearch"
            type="text"
            placeholder="Search Food name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="row row-cols-1 row-cols-md-2 g-4">
            {filteredData.map((lose) => (
              <div key={lose.id} className="col mb-4">
                <div className="card h-100 lose-card">
                  <img
                    src={lose.image}
                    className="card-img-top"
                    alt="Lose Weight"
                    onClick={() => handleImageClick(lose)}
                  />
            
                  <div className="card-body">
                    <h5 className="card-title">{lose.Name}</h5>
                    <p className="card-text">Type: {lose.type}</p>
                    <p className="card-text">Calories: {lose.calories}</p>
                    {/* Add any additional details you want to display */}
                    <StarRating 
          rating={lose.rating}
          onRatingClick={(clickedRating) => handleRatingClick(clickedRating, lose.place_id)} 
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

export default Lose;