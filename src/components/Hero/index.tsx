"use client";
import { useEffect, useRef, useState } from "react";
import Video from "../Shared/Video";
import { motion } from "framer-motion";
import gsap from "gsap";
import { slideUp } from "./anim";

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
      style={{
        background: "var(--primary-color)",
        color: "var(--contrast-color)",
      }}
    >
      <div className=" mt-40 text-8xl text-center z-20 ">
        <div className=" overflow-hidden">
          <motion.div
            variants={slideUp}
            custom={6.2}
            animate={"active"}
            initial="initial"
          >
            Digital products{" "}
          </motion.div>
        </div>
        <div className="relative text-center flex ">
          <div className="overflow-hidden">
            <motion.div
              variants={slideUp}
              custom={6.3}
              animate={"active"}
              initial="initial"
            >
              creatives &
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              className="relative z-40"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              variants={slideUp}
              custom={6.4}
              animate={"active"}
              initial="initial"
            >
              immersives <span className="text-yellow-500">*</span>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col text-base">
          <div className="overflow-hidden">
            <motion.div
              variants={slideUp}
              custom={6.5}
              animate={"active"}
              initial="initial"
            >
              We think and design unique experience
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={slideUp}
              custom={6.6}
              animate={"active"}
              initial="initial"
            >
              to tomorrow{"'"} innovative products
            </motion.div>
          </div>
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

      <div className="fixed gap-1  right-20 bottom-20  flex flex-col   z-50 text-base">
        <motion.span
          className="uppercase opacity-0 "
          variants={{
            hovered: {
              opacity: 1,
              y: "0",
              transition: {
                delay: 0.3,
              },
            },
            notHovered: {
              opacity: 0,
              y: "100%",
            },
          }}
          animate={isHovered ? "hovered" : "notHovered"}
        >
          /immersives
        </motion.span>
        <div className="flex flex-col">
          <motion.span
            className="opacity-0"
            variants={{
              hovered: {
                opacity: 1,
                y: "0",
                transition: {
                  delay: 0.35,
                },
              },
              notHovered: {
                opacity: 0,
                y: "100%",
              },
            }}
            animate={isHovered ? "hovered" : "notHovered"}
          >
            if you find a word marked with start, feel free hover over it
          </motion.span>
          <motion.span
            className="opacity-0"
            variants={{
              hovered: {
                opacity: 1,
                y: "0",
                transition: {
                  delay: 0.4,
                },
              },
              notHovered: {
                opacity: 0,
                y: "100%",
              },
            }}
            animate={isHovered ? "hovered" : "notHovered"}
          >
            to descover its defination. As immersive as a glosary
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
