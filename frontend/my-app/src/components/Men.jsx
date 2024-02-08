// Men.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Men.css';
import './MenDetails.css';

function Men() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios
      .get('http://localhost:5000/api/get')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Filter data based on search term
  const filteredData = data.filter((exercise) =>
    exercise.ExerciseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageClick = (exercise) => {
    // Set the selected exercise when an image is clicked
    setSelectedExercise(exercise);
  };

  const handleBackToList = () => {
    // Reset selectedExercise to go back to the list view
    setSelectedExercise(null);
  };

  const handleDelete = () => {
    if (!selectedExercise) {
      return; // Do nothing if no exercise is selected
    }

    console.log('Deleting exercise:', selectedExercise);

    // Make a DELETE request to the backend to delete the selected exercise
    axios
      .delete(`http://localhost:5000/api/delete/${selectedExercise.ID}`)
      .then((response) => {
        console.log('Delete response:', response.data);

        // Update the local state to remove the deleted exercise
        setData((prevData) =>
          prevData.filter((exercise) => exercise.id !== selectedExercise.id)
        );
        // Reset selectedExercise to go back to the list view
        setSelectedExercise(null);
      })
      .catch((err) => console.log('Delete error:', err));
  };

  const handleUpdate = () => {
    // Add logic to navigate to the update page if needed
    // Example: history.push(`/men/update/${selectedExercise.id}`)
  };

  return (
    <div className="container mt-5">
      {selectedExercise ? (
        <div className="details-container">
          <h1>{selectedExercise.ExerciseName}</h1>
          <img
            className='imageClassName'
            src={selectedExercise.Image}
            alt="Exercise"
          />
          <p>{selectedExercise.Description}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleBackToList}>Back to List</button>
        </div>
      ) : (
        <>
          <input
            className="search-input"
            type="text"
            placeholder="Search by exercise name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {filteredData.map((exercise) => (
              <div key={exercise.id} className="col mb-4">
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

export default Men;
