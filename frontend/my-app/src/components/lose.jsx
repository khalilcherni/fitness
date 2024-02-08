import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './Lose.css'; // Import your CSS file
// import './gain.css'
function Lose() {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({
    id: null,
    name: '',
    calories: '',
    description: '',
    type: '',
    image: '',
  });
  const [newFood, setNewFood] = useState({
    name: '',
    calories: '',
    description: '',
    type: '',
    image: '',
  });
  const [showAddForm, setShowAddForm] = useState(false);
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
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (item) => {
    setUpdateData(item);
  };

  const handleInputChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = () => {
    axios
      .put(`http://localhost:5000/lose/${updateData.id}`, updateData)
      .then(() => {
        setData(data.map((item) => (item.id === updateData.id ? updateData : item)));
        setUpdateData({
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

  const filteredData = data.filter((lose) => {
    return (
      (lose.name && lose.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (lose.description && lose.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (lose.type && lose.type.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });
  

  return (
    <div className="container mt-5">
      <div className="search-bar">
      <input
  className=" gainsearch "
  type="text"
  placeholder="Search Food name"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {filteredData.map((lose) => (
          <div key={lose.id} className="col mb-4">
            <div className="card h-100 lose-card">
              <img src={lose.image} className="card-img-top" alt="Lose Weight" />
              <div className="card-body">
                <h5 className="card-title">{lose.name}</h5>
                <p className="card-text">Type: {lose.type}</p>
                <p className="card-text">Calories: {lose.calories}</p>
                <p className="card-text">Description: {lose.description}</p>
                {updateData.id === lose.id ? (
                  <div className="update-form">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={updateData.name}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="Calories"
                      name="calories"
                      value={updateData.calories}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="Description"
                      name="description"
                      value={updateData.description}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="Type"
                      name="type"
                      value={updateData.type}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="Image"
                      name="image"
                      value={updateData.image}
                      onChange={handleInputChange}
                    />
                    <button onClick={handleUpdateSubmit}>Submit</button>
                  </div>
                ) : (
                  <div>
                    <button className="btn btn-danger" onClick={() => handleDelete(lose.id)}>
                      Delete
                    </button>
                    <button className="btn btn-primary" onClick={() => handleUpdate(lose)}>
                      Update
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAddForm ? (
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
      ) : (
        <button className="add-food-btn" onClick={() => setShowAddForm(true)}>Add Food</button>
      )}
    </div>
  );
}

export default Lose;
