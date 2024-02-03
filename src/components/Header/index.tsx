"use client";
import { useEffect, useState } from "react";
import NavButton from "./NavButton";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
const Header = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(true);
 

  return (
    <div
      className="absolute w-screen h-screen z-[200]"
      style={{
        background: "var(--primary-color)",
        color: "var(--contrast-color)",
      }}
    >
      <div className="w-full px-10 pt-10 flex justify-between ">
        <span>makepill</span>
        <span>/index</span>
        <NavButton
          onClickHandler={(status: boolean) => setIsNavbarActive(status)}
        />
      </div>

      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-[60]"
        variants={{
          active: {
            translateY: "0%",
          },
          notActive: {
            translateY: "-100%",
          },
        }}
        initial={"notActive"}
        animate={isNavbarActive ? "active" : "notActive"}
      >
        <Navbar />

      
      </motion.div>
    </div>
  );
};

export default Header;
