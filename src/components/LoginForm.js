import React, { useState } from 'react';

const LoginForm = ({ onSwitch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      // Perform the API call to login
      fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setLoginMessage(data.error);
        } else {
          setLoginMessage('Login successful!');
          // Redirect to products or home page after successful login
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        setLoginMessage('An error occurred during login. Please try again.');
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loginMessage && <p>{loginMessage}</p>}
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      <div>
        <button type="button" onClick={onSwitch}>Switch to Signup</button>
      </div>
    </form>
  );
};

export default LoginForm;
