"use client";
import { useEffect, useState } from "react";
import NavButton from "./NavButton";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Lenis from "@studio-freight/lenis";

import gsap from "gsap";
const Header = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(true);

  useEffect(() => {
    const wrap = gsap.utils.wrap(-100, 400);
    gsap.set(".box", {
      y: (i) => i * 50,
    });

    gsap.to(".box", {
      duration: 5,
      ease: "none",
      y: "-=500",
      modifiers: {
        y: gsap.utils.unitize(wrap), 
      },
      repeat: -1,
    });


    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: true,
      // duration: 5,
      lerp: 0.05,
    });
    // lenis.stop()
  }, []);


  
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
        {/* <Navbar /> */}

        <div className="h-[350px]  bg-red-200 w-[50px] relative overflow-hidden mx-auto my-auto">
          <div className="absolute box h-[50px] border-2 w-[50px]">1</div>
          <div className="absolute box h-[50px] border-2 w-[50px]">2</div>
          <div className="absolute box h-[50px] border-2 w-[50px]">3</div>
          <div className="absolute box h-[50px] border-2 w-[50px]">4</div>
          <div className="absolute box h-[50px] border-2 w-[50px]">5</div>
          <div className="absolute box h-[50px] border-2 w-[50px]">6</div>
          <div className="absolute box h-[50px] border-2 w-[50px]">7</div>
          <div className="absolute box h-[50px] border-2 w-[50px]">8</div>
          <div className="absolute box h-[50px] border-2 w-[50px]">9</div>
          <div className="absolute box h-[50px] border-2 w-[50px]">10</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
