import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const MouseFollower = () => {
  const [cursorColor, setCursorColor] = useState("white");

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const cursorSize = 15; // size in px

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - cursorSize / 2);
      y.set(e.clientY - cursorSize / 2);

      // Detect background color under cursor
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const bgColor = getComputedStyle(element).backgroundColor;
        const match = bgColor.match(/\d+/g);
        if (match && match.length >= 3) {
          const [r, g, b] = match.map(Number);
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          setCursorColor(brightness < 128 ? "white" : "black"); // Invert based on brightness
        }
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{
        width: cursorSize,
        height: cursorSize,
        borderRadius: "50%",
        backgroundColor: cursorColor,
        position: "fixed",
        top: 0,
        left: 0,
        x: springX,
        y: springY,
        pointerEvents: "none",
        zIndex: 9999,
        transition: "background-color 0.2s ease", // smooth color transition
      }}
    />
  );
};

export default MouseFollower;
