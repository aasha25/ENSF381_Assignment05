import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignUpForm';
import Footer from './Footer';

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const switchToSignup = () => {
    setShowLoginForm(false);
  };

  const switchToLogin = () => {
    setShowLoginForm(true);
  };

  return (
    <div>
      <Header />
      {showLoginForm ? (
        <LoginForm switchToSignup={switchToSignup} />
      ) : (
        <SignupForm switchToLogin={switchToLogin} />
      )}
      <Footer />
    </div>
  );
};

export default LoginPage;
