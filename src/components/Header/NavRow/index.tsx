import { MotionStyle, motion } from "framer-motion";
import React, { FC } from "react";

interface NavRowProps {
  className?: string;
  children: React.ReactNode;
  isActive?: boolean;
  onHover?: () => void;
  style?: MotionStyle | undefined;
}
const NavRow: FC<NavRowProps> = ({
  className,
  children,
  isActive,
  onHover,
  style,
}) => {
  const styles = style == undefined ? {} : style;
  return (
    <div style={{padding:"1.25rem 0", ...styles}} className="test">
      <motion.span
        style={{
          backgroundImage: "linear-gradient(#fff, #fff)",
          WebkitBackgroundClip: "text",
          WebkitBackgroundSize: `0% 100%`,
          // WebkitTextFillColor: "rgba(0,0,0,0.6)",
          WebkitTextFillColor: "rgba(255,255,255,0.3)",
          backgroundRepeat: "no-repeat",
          transition: "all 0.05s",
          display: "inline",
          color: "#fff",
          width: "fit-content",
        }}
        className={!className ? "" : className}
        variants={{
          active: {
            WebkitBackgroundSize: `200% 200%`,
          },
          notActive: {
            WebkitBackgroundSize: `0% 100%`,
          },
        }}
        animate={isActive ? "active" : "notActive"}
        onMouseEnter={onHover}
      >
        {children}
      </motion.span>
    </div>
  );
};

export default NavRow;
