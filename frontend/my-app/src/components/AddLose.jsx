import React, { useState } from 'react';
import axios from 'axios';
import './AddLose.css'; // Import your CSS file

function AddLose() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    calories: '',
    description: '',
    image: null, // Updated to null as initial value
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataCloudinary = new FormData();
    formDataCloudinary.append('file', formData.image);
    formDataCloudinary.append('upload_preset', 'hibahiba11');

    try {
      const responseCloudinary = await axios.post(
        'https://api.cloudinary.com/v1_1/dsrcopz7v/upload',
        formDataCloudinary
      );
      const imageUrl = responseCloudinary.data.secure_url;

      await axios.post('http://localhost:5000/lose/add', {
        Name: formData.name,
        Type: formData.type,
        Calories: formData.calories,
        Description: formData.description,
        Image: imageUrl
      });

      console.log('Form submitted successfully');
      setFormData({
        name: '',
        type: '',
        calories: '',
        description: '',
        image: null
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form-container">
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
        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="dd"
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
