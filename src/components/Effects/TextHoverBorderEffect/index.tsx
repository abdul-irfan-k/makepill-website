import React, { useState } from "react";
import { motion } from "framer-motion";
const TextHoverBorderEffect = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative  w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute bottom-[-5px] w-0 bg-white rounded-full h-1  w-full block"
        variants={{
          active: {
            width:"100%"
          },
          notActive: {
            width:"0%"
          },
        }}
        animate={isHovered ? "active" : "notActive"}
      ></motion.div>
      {children}
    </div>
  );
};

export default TextHoverBorderEffect;
