import React, { useState } from 'react';
import axios from 'axios';
import './AddForMen.css'
function AddForWomen() {
  const [ExerciseName, setExerciseName] = useState('');
  const [DurationInMinutes, setDurationInMinutes] = useState(0);
  const [Repetitions, setRepetitions] = useState(0);
  const [Image, setImage] = useState('');
  const [Description, setDescription] = useState('');
  const handle = () => {
    const newprod = {
      ExerciseName: ExerciseName,
      DurationInMinutes: DurationInMinutes,
      Repetitions: Repetitions,
      Description: Description,
      Image: Image,
    };

    console.log(newprod);

    axios
      .post(`http://localhost:5000/api/women`, newprod)
      .then((res) => {
        console.log(res.data);
        setExerciseName('');
        setDurationInMinutes(0);
        setRepetitions(0);
        setDescription('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
        <hr />
      <h2 className="alert">Add New Product</h2>
      <hr />
      <hr />
      <form>
        <div className="mb-3">
          <label className="form-label">ExerciseName:</label>
          <input
            type="text"
            className="dd"
        
            value={ExerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">DurationInMinutes: </label>
          <input
            type="text"
            className="dd"
            placeholder="DurationInMinutes URL"
            value={DurationInMinutes}
            onChange={(e) => setDurationInMinutes(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Repetitions:</label>
          <input
         className="dd"
            placeholder="Repetitions"
            value={Repetitions}
            onChange={(e) => setRepetitions(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description:</label>
          <input
            type="Description"
            className="dd"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image:</label>
          <input
            type="text"
            className="dd"
            value={Image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button className='button-55' type="button"  onClick={handle}>
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddForWomen;
