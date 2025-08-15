import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); 
  };

  return (
    <nav className="w-full flex justify-center py-5 relative z-50"> 
      <div
        className="
          hidden lg:flex items-center gap-5 
          bg-[#1c1c1c]
          rounded-full
          px-3 py-2
          shadow-lg
          z-20
        "
      >
        <div className="flex items-center gap-6">
          <div className="w-6 h-6 flex items-center justify-center text-[#94938D]">
            <svg viewBox="0 0 100 50">
              <path fill="none" stroke="red" stroke-width="6" transform="scale(1.1)"
                    d="M10,25 C20,0 40,0 50,25 C60,50 80,50 90,25
                      C80,0 60,0 50,25
                      C40,50 20,50 10,25 Z" />
            </svg>
          </div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
            <Link to="#" className="text-[#94938D] hover:text-white font-medium whitespace-nowrap">Team</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
            <Link to="#" className="text-[#94938D] hover:text-white font-medium whitespace-nowrap">Achievements</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
            <Link to="#" className="text-[#94938D] hover:text-white font-medium whitespace-nowrap">Projects</Link>
          </motion.div>
        </div>

        <div className="flex items-center pl-5 border-l border-gray-700">
          <Button
            className="rounded-full"
          >
            Contact Us
          </Button>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between w-full px-4">
        <div className="w-6 h-6 flex items-center justify-center text-[#94938D]">
            <svg viewBox="0 0 100 50">
              <path fill="none" stroke="red" stroke-width="6" transform="scale(1.1)"
                    d="M10,25 C20,0 40,0 50,25 C60,50 80,50 90,25
                      C80,0 60,0 50,25
                      C40,50 20,50 10,25 Z" />
            </svg>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-white focus:outline-none"
          aria-label="Open mobile menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }} 
            animate={{ x: 0 }}     
            exit={{ x: "100%" }}  
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-[#202020] z-40 flex flex-col items-center justify-center lg:hidden"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-white focus:outline-none"
              aria-label="Close mobile menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <nav className="flex flex-col space-y-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <Link to="#" className="text-white text-3xl" onClick={handleLinkClick}>Team</Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Link to="#" className="text-white text-3xl" onClick={handleLinkClick}>Achievements</Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <Link to="#" className="text-white text-3xl" onClick={handleLinkClick}>Projects</Link>
              </motion.div>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className="mt-10"
            >
              <Button
              size={"lg"}
                onClick={handleLinkClick}
                className='rounded-xl'
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;