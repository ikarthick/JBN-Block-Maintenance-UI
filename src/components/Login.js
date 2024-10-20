// src/components/Login.js

import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with a secure API call for production
    if (username === 'admin' && password === 'admin') {
      // Simulate successful login (never store passwords in plain text!)
      navigate('/admin'); // Redirect to /admin page
    } else {
      alert('Invalid credentials'); // Display error message
    }
  };

  return (
    <div className="login-container">
      <header>
        <h1>Block Maintenance Application</h1>
      </header>
      <div className="login-content">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <footer>
        <p>&copy; 2024 Block Maintenance Inc.</p>
      </footer>
    </div>
  );
}

export default Login;
