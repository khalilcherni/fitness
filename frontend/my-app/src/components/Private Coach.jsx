import React, { useState } from 'react';
import './privateCoach.css';

const PrivateCoach = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    fitnessGoals: '',
    preferredCoach: '',
    sessionDuration: 30,
    schedulePreference: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Implement logic to send form data to the server
    console.log('Form data submitted:', formData);
    // You would typically make an API call here to handle form submission on the server
  };

  return (
    <div className="private-coach-container">
      <h2 className="coach-heading">Request a Private Coach</h2>
      <form className="coach-form">
        <label className="form-label">
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>

        <label className="form-label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>

        <label className="form-label">
          Fitness Goals:
          <textarea
            name="fitnessGoals"
            value={formData.fitnessGoals}
            onChange={handleChange}
            className="form-input"
            rows="4"
            required
          ></textarea>
        </label>

        <label className="form-label">
          Preferred Coach:
          <select
            name="preferredCoach"
            value={formData.preferredCoach}
            onChange={handleChange}
            className="form-input"
          >
            {/* Populate this dropdown dynamically with coach options */}
            <option value="coach1">Coach 1</option>
            <option value="coach2">Coach 2</option>
            {/* Add more options as needed */}
          </select>
        </label>

        <label className="form-label">
          Session Duration (in minutes):
          <input
            type="number"
            name="sessionDuration"
            value={formData.sessionDuration}
            onChange={handleChange}
            className="form-input"
            min="30"
            max="120"
            required
          />
        </label>

        <label className="form-label">
          Schedule Preference:
          <input
            type="text"
            name="schedulePreference"
            value={formData.schedulePreference}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>

        <button type="button" onClick={handleSubmit} className="form-button">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default PrivateCoach;
