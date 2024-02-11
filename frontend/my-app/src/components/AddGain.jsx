import React, { useState } from 'react';
import axios from 'axios';
import './AddGain.css'; // Import your CSS file

function AddGain() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    calories: '',
    description: '',
  });
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) { 
      console.error('Name field is required.');
      return;
    }

    if (!file) {
      console.error('Image is required.');
      return;
    }

    try {
      const formDataCloudinary = new FormData();
      formDataCloudinary.append('file', file);
      formDataCloudinary.append('upload_preset', 'hibahiba11');

      const responseCloudinary = await axios.post(
        'https://api.cloudinary.com/v1_1/dsrcopz7v/upload',
        formDataCloudinary
      );

      const imageUrl = responseCloudinary.data.secure_url;

      const postData = {
        name: formData.name,
        type: formData.type,
        calories: formData.calories,
        description: formData.description,
        image: imageUrl
      };

      const response = await axios.post('http://localhost:5000/api/add', postData);

      console.log('Gain added successfully:', response.data);
      setFormData({ name: '', type: '', calories: '', description: '', image: '' });
      setImageUrl('');
      alert('Food added successfully!'); 
    } catch (error) {
      console.error('Error adding gain:', error);
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
            onChange={handleFileChange}
            className="dd"
          />
        </div>
        <button type="submit" className="button-55">
          Submit
        </button>
      </form>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
}

export default AddGain;
