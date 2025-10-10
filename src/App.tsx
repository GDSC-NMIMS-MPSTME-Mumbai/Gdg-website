// home.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/custom/navbar';
import Home from './pages/home';
import Header from './components/custom/Header';
import { AchievementsCarousel } from './components/custom/achievements';
import { Projects } from './components/custom/projects';
import { Team } from './components/custom/Team';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Fixed navbar overlay - appears on all sections */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Fixed Header - only appears on home page */}
      {isHomePage && (
        <div className="fixed inset-0 z-10">
          <Header />
        </div>
      )}

      {/* Main content with scroll snap */}
      <div className="relative z-20 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<AchievementsCarousel />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;