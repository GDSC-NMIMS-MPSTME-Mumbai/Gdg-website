// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/custom/navbar'; 
import Home from './pages/home';         

const App: React.FC = () => {
  return (
    <Router>
      <Navbar /> 
      <div className="container"> 
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;