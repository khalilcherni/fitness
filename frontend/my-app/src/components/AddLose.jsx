import React, { useState } from 'react';
import axios from 'axios';
import './AddLose.css'; // Import your CSS file

function AddLose() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    calories: '',
    description: '',
    image: '' // Added image state directly in formData
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) { 
      setError('Name field is required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/lose/add', formData);

      console.log('Form submitted successfully', response.data);
      setFormData({ name: '', type: '', calories: '', description: '', image: '' });
      setError('');
    } catch (error) {
      setError('Error submitting form');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form-container">
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="dd"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="type" className="form-label">
            Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="dd"
            placeholder="Enter type"
          />
        </div>
        <div className="form-group">
          <label htmlFor="calories" className="form-label">
            Calories
          </label>
          <input
            type="text"
            id="calories"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            className="dd"
            placeholder="Enter calories"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="dd"
            placeholder="Enter description"
          />
        </div>
        <button type="submit" className="button-55">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddLose;
