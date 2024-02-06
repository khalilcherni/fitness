// src/components/LoginPage.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('hhttp://localhost:3005/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      if (response.ok) {
        const { token } = await response.json();

        // Save the token to local storage or a secure storage mechanism
        localStorage.setItem('token', token);

        // Send a welcome email (client-side logic)
        sendWelcomeEmail(loginEmail);

        // Redirect to the homepage (you can use react-router-dom or any other method)
        window.location.href = '/'; // Change the path as needed
      } else {
        // Authentication failed
        alert('Authentication failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:3005/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: signupEmail, password: signupPassword }),
      });

      if (response.ok) {
        const { token } = await response.json();

        // Save the token to local storage or a secure storage mechanism
        localStorage.setItem('token', token);

        // Send a welcome email (client-side logic)
        sendWelcomeEmail(signupEmail);

        // Redirect to the homepage (you can use react-router-dom or any other method)
        window.location.href = '/'; // Change the path as needed
      } else {
        // Signup failed
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const sendWelcomeEmail = (userEmail) => {
    // ... (same as before)
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="loginEmail"
              required
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="loginPassword"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>

      <div className="signup-box">
        <h2>Signup</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="signupEmail"
              required
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="signupPassword"
              required
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button type="button" onClick={handleSignup}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;