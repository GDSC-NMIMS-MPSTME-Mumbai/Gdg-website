import Carousel from "./Carousel";
import { FiAward, FiUsers, FiBook, FiTarget, FiTrendingUp } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export function AchievementsCarousel() {
  const [baseWidth, setBaseWidth] = useState(400);
  const [isLoading, setIsLoading] = useState(true);

  // Responsive width based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBaseWidth(280);
      } else if (window.innerWidth < 1024) {
        setBaseWidth(320);
      } else {
        setBaseWidth(400);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    setIsLoading(false);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const achievementItems = [
    {
      title: "Best Tech Club 2024",
      description: "Recognized for excellence and innovation in our tech community",
      id: 1,
      icon: <FiAward className="carousel-icon" />
    },
    {
      title: "100+ Active Contributors",
      description: "A thriving community of dedicated members and volunteers",
      id: 2,
      icon: <FiUsers className="carousel-icon" />
    },
    {
      title: "Hosted 15+ Workshops",
      description: "Sharing knowledge and expertise with our members",
      id: 3,
      icon: <FiBook className="carousel-icon" />
    },
    {
      title: "Impacted 1000+ Students",
      description: "Making a real difference in students' lives and careers",
      id: 4,
      icon: <FiTarget className="carousel-icon" />
    },
    {
      title: "Collaborated with 6 Companies",
      description: "Building partnerships and creating opportunities",
      id: 5,
      icon: <FiTrendingUp className="carousel-icon" />
    }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full bg-black">
        <p className="text-white text-xl">Loading achievements...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen px-6 sm:px-8 lg:px-16 xl:px-24 gap-8 sm:gap-12 lg:gap-24 w-full max-w-[1600px] mx-auto py-12 lg:py-0 bg-black">
      {/* Left side - Title */}
      <div className="flex-shrink-0 w-full lg:w-[450px] text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[0.9] text-blue-500">
          Our
          <br />
          Achievements
        </h2>
        <div className="h-1.5 w-24 sm:w-32 bg-blue-500 rounded-full mb-6 mx-auto lg:mx-0" />
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl">
          Celebrating our milestones and successes
        </p>
      </div>

      {/* Right side - Carousel */}
      <div className="flex-1 w-full flex items-center justify-center min-h-[500px] lg:min-h-auto">
        {achievementItems.length > 0 ? (
          <Carousel
            items={achievementItems}
            baseWidth={baseWidth}
            autoplay={true}
            autoplayDelay={4000}
            pauseOnHover={true}
            loop={true}
            round={true}
          />
        ) : (
          <div className="text-white text-center">
            <p>No achievements to display</p>
          </div>
        )}
      </div>
    </div>
  );
}