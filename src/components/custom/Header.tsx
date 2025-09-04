import React, { useState, useEffect } from "react";
import PixelBlast from "./PixelBlast";

function Header() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  
  const colorTransitions = [
    { color: "#4285F4", hue: 0, name: "Google Blue" },
    { color: "#EA4335", hue: 330, name: "Google Red" },
    { color: "#34A853", hue: 90, name: "Google Green" },
    { color: "#FBBC04", hue: 45, name: "Google Yellow" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex(prevIndex => (prevIndex + 1) % colorTransitions.length);
    }, 8000); // Increased interval to reduce transitions
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Optimized PixelBlast with performance settings */}
      <div
        className="absolute inset-0 w-full h-full transition-all duration-3000 ease-in-out"
        style={{
          filter: `hue-rotate(${colorTransitions[currentColorIndex].hue}deg) saturate(1.1) brightness(1.05)`,
          // Add will-change for better GPU acceleration
          willChange: 'filter',
          // Enable hardware acceleration
          transform: 'translateZ(0)',
        }}
      >
        <PixelBlast
          variant="circle"
          color="#4285F4"
          // Performance optimization props (adjust these based on PixelBlast API)
          size={2}           // Smaller particles
          density={30}       // Fewer particles
          speed={0.5}        // Slower animation
          maxParticles={100} // Limit total particles
        >
          <div className="w-full h-full"></div>
        </PixelBlast>
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <p className="text-xl mb-2 serif">Welcome to</p>
        <h1 className="text-6xl font-bold serif">DCxGDG</h1>
      </div>
    </div>
  );
}

export default Header;