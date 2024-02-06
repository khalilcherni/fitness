import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3005/api/login', {
        email: loginEmail,
        password: loginPassword
      });
  
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        window.location.href = '/'; // Redirect to homepage
      } else {
        alert('Failed to log in. Incorrect email or password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Failed to log in. Please try again later.');
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3005/api/register', {
        email: signupEmail,
        password: signupPassword
      });

      if (response.status === 201) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        window.location.href = '/'; // Redirect to homepage
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