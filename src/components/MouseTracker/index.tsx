"use client";

import {
  useMotionValue,
  motion,
  useSpring,
  SpringOptions,
} from "framer-motion";
import { MouseEvent, useEffect } from "react";

const MouseTracker = () => {
  const mouseMotion = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const height = 20;

  const springEffect: SpringOptions = {
    damping: 30,
    stiffness: 75,
  };
  const mouseMovement = {
    x: useSpring(mouseMotion.x, { stiffness: 150, damping: 20, mass: 0.3 }),
    y: useSpring(mouseMotion.y, { stiffness: 150, damping: 20, mass: 0.3 }),
  };
  useEffect(() => {
    if (window == undefined) return;

    const mouseMovementHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      mouseMotion.x.set(clientX - height / 2);
      mouseMotion.y.set(clientY - height / 2);
    };

    //@ts-ignore
    window.addEventListener("mousemove", mouseMovementHandler);
    () => {
      //@ts-ignore
      window.removeEventListener("mousemove", mouseMovementHandler);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0  aspect-square rounded-full block z-[200]  pointer-events-none "
      style={{
        x: mouseMovement.x,
        y: mouseMovement.y,
        height,
        background: "var(--contrast-color)",
        color: "var(--primary-color)",
      }}
    ></motion.div>
  );
};

export default MouseTracker;
