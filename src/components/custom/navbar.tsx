import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; 
import { motion, AnimatePresence } from "framer-motion"
import { Rotate3d } from 'lucide-react';


const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-center py-5"> 
      <div
        className="
          flex items-center gap-5
          bg-[#1c1c1c]
          rounded-full   
          px-3 py-2       
          shadow-lg  
          z-20  
        "
      >
        <div className="flex items-center gap-5 pr-5"> 
          <div className="w-6 h-6 flex items-center justify-center text-[#94938D]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>

            </svg>
          </div>
          <motion.div whileHover={{  x: 5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}>
          <Link to="#" className="text-[#94938D] hover:text-white font-medium whitespace-nowrap">Team</Link>
          </motion.div>
          <Link to="#" className="text-[#94938D] hover:text-white font-medium whitespace-nowrap">Achievements</Link>
          <Link to="#" className="text-[#94938D] hover:text-white font-medium whitespace-nowrap">Projects</Link>
        </div>

        <div className="flex items-center pl-5 border-l border-gray-700"> 

          <Button
            className="bg-gray-200 text-gray-800 hover:bg-white text-base font-medium px-4 py-2 rounded-full ml-2" // ml-2 for margin between buttons
          >
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;