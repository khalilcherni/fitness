import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./Register.css";
import ProfilePage from './ProfilePage';

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email: loginEmail,
        password: loginPassword
      });
  
      if (response.status === 200) {
        alert('Login successful!');
        navigate('/ProfilePage'); // Redirect to ProfilePage using useNavigate
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
        alert('Signup successful! Please login to continue.');
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login if you have account</h2>
        <hr />
        <hr />
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
        <h2>Create account</h2>
        <hr />
        <hr />
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
