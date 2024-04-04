import React, { useState } from 'react';
import Header from './Header'; // Assuming the header component file path
import Footer from './Footer'; // Assuming the footer component file path

const LoginForm = ({ switchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password');
      return;
    }
    // Handle login
  };

  return (
    <>
      <Header />
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <button onClick={switchToSignup}>Switch to Signup</button>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;
