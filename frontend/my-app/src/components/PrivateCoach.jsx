import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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

  const sendMail = () => {
    const params = {
      fullName: formData.fullName,
      email: formData.email,
      fitnessGoals: formData.fitnessGoals,
      preferredCoach: formData.preferredCoach,
      sessionDuration: formData.sessionDuration,
      schedulePreference: formData.schedulePreference,
    };

   
    const serviceID = "service_ll9dgys"; // Replace with your EmailJS service ID
    const templateID = "template_phqrn0s"; // Replace with your EmailJS template ID
    const userID = "euC6e9oE6ozxavlMB";

    emailjs.send(serviceID, templateID, params, userID)
      .then(res => {
        console.log(res);
        alert("Your request has been submitted successfully!!");
      })
      .catch(err => console.log(err));
  };

  const handleSubmit = () => {
    // Implement logic to send form data to the server
    console.log('Form data submitted:', formData);
    sendMail(); // Call the sendMail function to send the email
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
            <option value="coach1">Coach 1</option>
            <option value="coach2">Coach 2</option>
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
