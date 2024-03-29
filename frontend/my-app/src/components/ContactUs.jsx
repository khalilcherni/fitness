import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";


const ContactForm = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = () => {
    const params = { name: fullname, email, message };
    const serviceID = "service_93fpb45"; // Replace with your EmailJS service ID
    const templateID = "template_tcrkuws"; // Replace with your EmailJS template ID
    const userID = "-uM95XGMrZmH69wXi"; // Replace with your EmailJS user ID

    emailjs.send(serviceID, templateID, params, userID)
      .then(res => {
        setFullname('');
        setEmail('');
        setMessage('');
        document.getElementById('alert').classList.add('alert');
        console.log(res);
        alert("Your message sent successfully!!");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="contact-form-container">
      <div id="alert" className="alert"> Contact </div>

      <label htmlFor="Fullname" className="form-label">Full Name:</label>
      <input
        className="form-input"
   
        id="Fullname"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />

      <label htmlFor="email_id" className="form-label">Email:</label>
      <input
        className="form-input"

        id="email_id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="message" className="form-label">Message:</label>
      <textarea
        className="form-textarea"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button  className='button-55' onClick={sendMail}>Send Message</button>
    </div>
  );
};

export default ContactForm;

