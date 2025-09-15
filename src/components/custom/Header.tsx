import { useState, useEffect, useRef } from "react";
import PixelBlast from "./PixelBlast";

function Header() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true); // Start as true since we're on hero initially
  const headerRef = useRef<HTMLDivElement>(null);
  
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
  }, [colorTransitions.length]);

  useEffect(() => {
    // Create an intersection observer to detect when hero section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if we're looking at the first section (hero section)
          if (entry.target.classList.contains('hero-section')) {
            setIsHeroVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the hero section is visible
        rootMargin: '0px'
      }
    );

    // Find and observe the hero section
    // The hero section is the first section in the home page
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={headerRef} className="relative w-full h-screen overflow-hidden">
      {/* Only render PixelBlast when hero section is visible */}
      {isHeroVisible && (
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
            pixelSize={2}           // Smaller particles
            patternDensity={0.3}       // Fewer particles
            speed={0.5}        // Slower animation
          />
        </div>
      )}
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <p className="text-xl mb-2 serif">Welcome to</p>
        <h1 className="text-6xl font-bold serif">DCxGDG</h1>
      </div>
    </div>
  );
}

export default Header;