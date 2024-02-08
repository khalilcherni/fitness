import React, { useState } from 'react';
import axios from 'axios';

function AddLose({ setShowAddForm, setData, data }) {
  const [newFood, setNewFood] = useState({
    name: '',
    calories: '',
    description: '',
    type: '',
    image: '',
  });

  const handleAddFood = () => {
    axios
      .post('http://localhost:5000/lose/add', newFood)
      .then((res) => {
        setData([...data, newFood]);
        setNewFood({
          name: '',
          calories: '',
          description: '',
          type: '',
          image: '',
        });
        setShowAddForm(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-form">
      <input
        type="text"
        placeholder="Name"
        value={newFood.name}
        onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Calories"
        value={newFood.calories}
        onChange={(e) => setNewFood({ ...newFood, calories: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newFood.description}
        onChange={(e) => setNewFood({ ...newFood, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Type"
        value={newFood.type}
        onChange={(e) => setNewFood({ ...newFood, type: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image"
        value={newFood.image}
        onChange={(e) => setNewFood({ ...newFood, image: e.target.value })}
      />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default AddLose;
