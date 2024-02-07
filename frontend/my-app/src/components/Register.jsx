// LoginPage.js
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import "./Register.css"
import ProfilePage from './ProfilePage'

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email: loginEmail,
        password: loginPassword
      });
  
      if (response.status === 200) {
        const { token } = response.data;
        alert('Login successful!'); // Display success message
        setIsLoggedIn(true); // Set isLoggedIn to true
      } else {
        alert('Authentication failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response && error.response.data && error.response.data.message === 'Invalid credentials') {
        alert('Invalid email or password. Please try again.');
      } else {
        alert('An error occurred during login. Please try again later.');
      }
    }
  };
  
  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        email: signupEmail,
        password: signupPassword
      });
  
      if (response.status === 201) {
        alert('Signup successful! Please login to continue.'); // Display success message
        // Clear input fields or perform any other necessary actions
      } else {
        alert('Signup failed. Please try again.'); // Display failure message
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h2>Login if you have an account</h2>
          <input
            type="text"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>

          <h2>Create an account</h2>
          <input
            type="text"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Signup</button>
        </div>
      ) : (
        <ProfilePage />
      )}
    </div>
  );
};

export default LoginPage;
