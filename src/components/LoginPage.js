import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
import SignupForm from './SignUpForm';

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <Header />
      {showLogin ? <LoginForm onSwitch={toggleForm} /> : <SignupForm onSwitch={toggleForm} />}
      <Footer />
    </div>
  );
};

export default LoginPage;
