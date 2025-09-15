import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/custom/navbar';
import Home from './pages/home';
import MouseFollower from './components/custom/MouseFollower';
import GradualBlurMemo from './components/custom/GradualBlur';
import Header from './components/custom/Header';

const App: React.FC = () => {
  return (
    <Router>
      <MouseFollower />
      {/* Fixed navbar overlay - appears on all sections */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Fixed Header - only appears on first section */}
      <div className="fixed inset-0 z-10">
        <Header />
      </div>
      
      {/* Main content with scroll snap */}
      <div className="relative z-20">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      
      {/* Footer blur fixed at bottom - appears on all sections */}
      <GradualBlurMemo
        preset="page-footer"
        target="page"
        animated={true}
        height='5rem'
        divCount={9}
      />
    </Router>
  );
};

export default App;