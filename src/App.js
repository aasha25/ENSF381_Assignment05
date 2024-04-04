import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router and Routes
import LoginPage from './components/LoginPage';
import Productpage from './components/Productpage';



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/products" element={<Productpage />} />    
        </Routes>
      </div>
    </Router>
  );
};

export default App;
