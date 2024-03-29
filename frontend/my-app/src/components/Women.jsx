// Women.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Men.css';
import StarRating from './StarRating';

function Women() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [updateMode, setUpdateMode] = useState(false);
  const [updatedExercise, setUpdatedExercise] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/women')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleImageClick = (exercise) => {
    setSelectedExercise(exercise);
    setUpdateMode(false);
  };

  const handleBackToList = () => {
    setSelectedExercise(null);
    setUpdateMode(false);
  };

  const handleDelete = () => {
    if (!selectedExercise) {
      return;
    }

    axios
      .delete(`http://localhost:5000/api/women/${selectedExercise.ID}`)
      .then((response) => {
        console.log('Delete response:', response.data);

        axios
          .get('http://localhost:5000/api/women')
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));

        setSelectedExercise(null);
        setUpdateMode(false);
      })
      .catch((err) => console.log('Delete error:', err));
  };

  const handleUpdate = () => {
    setUpdateMode(true);
    setUpdatedExercise({ ...selectedExercise });
  };

  const handleCancelUpdate = () => {
    setUpdateMode(false);
    setUpdatedExercise({});
  };

  const handleSaveUpdate = () => {
    axios
      .put(`http://localhost:5000/api/women/${updatedExercise.ID}`, updatedExercise)
      .then((response) => {
        console.log('Update response:', response.data);

        axios
          .get('http://localhost:5000/api/women')
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));

        setUpdateMode(false);
        setUpdatedExercise({});
      })
      .catch((err) => console.log('Update error:', err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedExercise((prevExercise) => ({
      ...prevExercise,
      [name]: value,
    }));
  };

  const handleRatingClick = (clickedRating, exerciseId) => {
    axios
      .put(`http://localhost:5000/api/women/${exerciseId}`, { rating: clickedRating })
      .then((response) => {
        console.log('Rating update response:', response.data);

        setData((prevData) =>
          prevData.map((exercise) =>
            exercise.ID === exerciseId ? { ...exercise, rating: clickedRating } : exercise
          )
        );
      })
      .catch((err) => console.log('Rating update error:', err));
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((exercise) =>
    exercise.ExerciseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      {updateMode ? (
        <div className="update-container">
          <label>Exercise Name:</label>
          <input
            type="text"
            name="ExerciseName"
            value={updatedExercise.ExerciseName}
            onChange={handleInputChange}
          />
          {/* Add other input fields for update */}
          <label>Duration (in minutes):</label>
          <input
            type="number"
            name="DurationInMinutes"
            value={updatedExercise.DurationInMinutes}
            onChange={handleInputChange}
          />
          <label>Repetitions:</label>
          <input
            type="number"
            name="Repetitions"
            value={updatedExercise.Repetitions}
            onChange={handleInputChange}
          />
          <label>Description:</label>
          <textarea
            name="Description"
            value={updatedExercise.Description}
            onChange={handleInputChange}
          />
          <label>Image:</label>
          <textarea
            name="Image"
            value={updatedExercise.Image}
            onChange={handleInputChange}
          />
          <label>Rating:</label>
          <StarRating
            rating={updatedExercise.rating}
            onRatingClick={(clickedRating) => handleRatingClick(clickedRating, updatedExercise.ID)}
          />
          <button onClick={handleSaveUpdate}>Save Update</button>
          <button onClick={handleCancelUpdate}>Cancel</button>
        </div>
      ) : selectedExercise ? (
        <div className="details-container">
          <h1>{selectedExercise.ExerciseName}</h1>
          {/* Add other details display */}
          <img
            className="imageClassName"
            src={selectedExercise.Image}
            alt="Exercise"
          />
          <p>{selectedExercise.Description}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleBackToList}>Back to List</button>
          <StarRating
            rating={selectedExercise.rating}
            onRatingClick={(clickedRating) => handleRatingClick(clickedRating, selectedExercise.ID)}
          />
        </div>
      ) : (
        <>
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              placeholder="Search by exercise name"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {filteredData.map((exercise) => (
              <div key={exercise.ID} className="col mb-4">
                <div className="card h-100 men-card">
                  <img
                    src={exercise.Image}
                    className="card-img-top"
                    alt="Exercise"
                    onClick={() => handleImageClick(exercise)}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{exercise.ExerciseName}</h5>
                    <h2>{exercise.DurationInMinutes}min</h2>
                    <h2>{exercise.Repetitions} Repetitions</h2>
                    <StarRating
                      rating={exercise.rating}
                      onRatingClick={(clickedRating) =>
                        handleRatingClick(clickedRating, exercise.ID)
                      }
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

export default Women;
