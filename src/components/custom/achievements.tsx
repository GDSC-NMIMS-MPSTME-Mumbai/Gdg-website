import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const achievements = [
  "Best Tech Club 2024",
  "100+ Active Contributors",
  "Hosted 15+ Workshops",
  "Impacted 1000+ Students",
  "Collaborated with 6 Companies"
];

export function AchievementsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((current + 1) % achievements.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((current - 1 + achievements.length) % achievements.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      y: direction > 0 ? 50 : 50,
      opacity: 0,
      scale: 0.5,
      rotate: direction > 0 ? 30 : -30
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      y: direction > 0 ? 50 : 50,
      opacity: 0,
      scale: 0.5,
      rotate: direction > 0 ? -30 : 30
    })
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[500px] px-4 md:px-8 gap-8 md:gap-12 w-screen">
      <div className="w-screen md:w-2/3 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight"
        >
          Our<br />Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-2 md:mt-4 text-base md:text-lg text-gray-600"
        >
          Celebrating our milestones and successes
        </motion.p>
      </div>

      <div className="relative w-full md:w-2/3 h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              duration: 0.5
            }}
            className="absolute w-56 h-56 md:w-64 md:h-64 flex items-center justify-center rounded-full border-4 border-blue-500/90 text-center text-lg md:text-xl font-semibold p-6 md:p-8 shadow-lg bg-white/95 text-gray-800 z-10"
          >
            <div className="px-4">
              {achievements[current].split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Minimal Peek Circles - Left */}
        <motion.div
          animate={{
            x: -80,
            opacity: 0.2,
            scale: 0.6
          }}
          transition={{ type: "spring", stiffness: 200 }}
          className="absolute w-56 h-56 md:w-64 md:h-64 flex items-center justify-center rounded-full border border-blue-300/30 text-center p-6 md:p-8 bg-white/20 text-gray-600 z-0 text-sm md:text-base"
        >
          {achievements[(current - 1 + achievements.length) % achievements.length]}
        </motion.div>

        <motion.div
          animate={{
            x: 80,
            opacity: 0.2,
            scale: 0.6
          }}
          transition={{ type: "spring", stiffness: 200 }}
          className="absolute w-56 h-56 md:w-64 md:h-64 flex items-center justify-center rounded-full border border-blue-300/30 text-center p-6 md:p-8 bg-white/20 text-gray-600 z-0 text-sm md:text-base"
        >
          {achievements[(current + 1) % achievements.length]}
        </motion.div>

        <button
          onClick={prev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-4xl text-blue-600 z-20 hover:text-blue-800 transition-colors"
        >
          &lt;
        </button>
        <button
          onClick={next}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-4xl text-blue-600 z-20 hover:text-blue-800 transition-colors"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}