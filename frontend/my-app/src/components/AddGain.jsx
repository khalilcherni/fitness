import React, { useState } from 'react';
import axios from 'axios';
import './AddForGain.css'; // Import your CSS file

function AddGain() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log(formData);
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
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="dd"
            placeholder="Enter your age"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="dd"
            placeholder="Enter your email"
          />
        </div>
        <button type="submit" className="button-55">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddGain;
