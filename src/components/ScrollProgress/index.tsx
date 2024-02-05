"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";

const ScrollProgress = () => {
  const circleRef = useRef<SVGCircleElement>(null);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (circleRef.current) {
      console.log("circle ref", circleRef.current);
      circleRef.current.style.strokeDashoffset = `${
        630 - 3.2 * Math.round(latest * 100)
      }`;
    }
  });
  return (
    <div className="fixed bottom-8 right-10 w-[3.5%] aspect-square rounded-full block flex justify-center items-center  z-[200]  fill-red-300 ">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
      >
        <circle
          cx="50"
          cy="50"
          className="circle"
          r={50}
          strokeWidth={5}
          style={{filter:'invert(1)',stroke:"rgba(var(--primary-color-c),0.5)"}}
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          className="circle"
          r={50}
          strokeWidth={5}
          strokeDasharray={630}
          style={{ stroke: "var(--contrast-color)" }}
          fill="none"
          strokeDashoffset={630}
          ref={circleRef}
        />
      </svg>
    </div>
  );
};

export default ScrollProgress;
