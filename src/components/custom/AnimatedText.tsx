import React from "react";
import { motion } from "framer-motion";

type Props = { children: React.ReactNode };

const AnimatedText: React.FC<Props> = ({ children }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hover"
      className="relative inline-block overflow-hidden"
      style={{ 
        lineHeight: 1,
        display: 'inline-flex',
        alignItems: 'center'
      }}
    >
      {/* Default text */}
      <motion.div
        variants={{
          initial: { y: 0 },
          hover: { y: "-100%" },
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{ lineHeight: 1 }}
      >
        {children}
      </motion.div>
      
      {/* Hover text */}
      <motion.div
        variants={{
          initial: { y: "100%" },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center"
        style={{ lineHeight: 1 }}
      >
        {children}
      </motion.div>
    </motion.span>
  );
};

export default AnimatedText;