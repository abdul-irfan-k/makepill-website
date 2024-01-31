"use client";
import { useEffect, useRef, useState } from "react";
import Video from "../Shared/Video";
import { motion } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const heroContainer = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!heroContainer.current) return;
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: heroContainer.current,
  //       scrub: true,
  //       markers: true,
  //       start: "top top",
  //       end: "+=100% top",
  //       pin: true,
  //     },
  //   });
  // }, []);

  return (
    <div
      className="relative w-full h-screen flex justify-center items-center"
      ref={heroContainer}
    >
      <div className=" mt-40 text-8xl text-center z-20 text-slate-50">
        <span>Digital products </span>
        <div className="relative text-center ">
          <span>creatives &</span>
          <span
            className="relative z-40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            immersives
          </span>
        </div>

        <div className="flex flex-col text-base">
          <span>We think and design unique experience</span>
          <span>to tomorrow{"'"} innovative products</span>
        </div>

        <motion.div
          className="absolute top-0 left-0 w-screen h-screen z-30 block transition-all ease-in duration-200 "
          variants={{
            initial: {
              background: "rgba(0,0,0,0)",
            },
            hovered: {
              background: "rgba(0,0,0,.9)",
            },
          }}
          initial="initial"
          animate={isHovered ? "hovered" : "initial"}
        ></motion.div>
      </div>

      <div className="absolute top-0 w-full h-full  z-10  overflow-hidden">
        <Video
          src="/Asset/Video/mp_intro_robot_v2_32611febe2.mp4"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default Hero;
