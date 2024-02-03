"use client";
import React, { useEffect, useState } from "react";
import Video from "../Shared/Video";
import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import Counter from "../Effects/Counter";

interface LandingProps {
  children: React.ReactNode;
}
const LandingSection = ({ children }: LandingProps) => {
  const [completedLandingEffect, setCompletedLandingEffect] = useState(false);
  const [progress, setProgress] = useState<number>(0);

  const count = useMotionValue(0);
  const roudned = useTransform(count, (latest) => {
    return Math.round(latest);
  });

  const value = count.get();

  useEffect(() => {
    setTimeout(() => {
      setCompletedLandingEffect(true);
    }, 6000);

    const controls = animate(count, 100, { duration: 3 });
    return () => {
      controls.stop();
    };
  }, []);
  return (
    <div className={!completedLandingEffect ? " h-screen overflow-hidden" : ""}>
      {!completedLandingEffect && (
        <div className="fixed w-screen h-screen overflow-hidden z-[210]">
          <Video
            src="/Asset/Video/mp_intro_pill_v2_3f977a1a22.mp4"
            autoPlay
            muted
          />

          <div
            className="absolute w-full flex justify-between items-center bottom-10 px-10 left-0"
            style={{ color: "var(--contrast-color)" }}
          >
            <span>Just a second, we are crafting some pills...</span>
            <span>
              <Counter end={100} from={0} direction="up" />%
            </span>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default LandingSection;
