import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@fitnessjourney.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div className="footer-section">
          <h2>Quick Links</h2>
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          {/* Add more links as needed */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Fitness Journey. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
