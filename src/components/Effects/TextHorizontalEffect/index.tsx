"use client";
import gsap from "gsap";
import React, { Children, FC, useEffect, useRef } from "react";

interface TextHorizontalScrollEffectProps {
  scrollDirection: "right" | "left";
  speed?: number;
  children: React.ReactNode;
}
const TextHorizontalScrollEffect: FC<TextHorizontalScrollEffectProps> = ({
  scrollDirection,
  speed,
  children,
}) => {
  const scrollTextDiv1Ref = useRef<HTMLDivElement>(null);
  const scrollTextDiv2Ref = useRef<HTMLDivElement>(null);

  let direction: -1 | 1 = scrollDirection == "left" ? -1 : 1;
  let xPrecent = 0;

  useEffect(() => {
    requestAnimationFrame(scrollAnimation);
  }, []);

  const scrollAnimation = () => {
    if (xPrecent > 0) {
      xPrecent = -100;
    }

    if (xPrecent < -100) {
      xPrecent = 0;
    }

    if (scrollTextDiv1Ref == null || scrollTextDiv2Ref == null) return;

    gsap.set(scrollTextDiv1Ref.current, { xPercent: xPrecent });
    gsap.set(scrollTextDiv2Ref.current, { xPercent: xPrecent });

    const s = speed == undefined ? 0.5 : speed;
    xPrecent = xPrecent + direction * s;
    requestAnimationFrame(scrollAnimation);
  };

  return (
    <div className="relative w-full  overflow-hidden">
      <div
        style={{ textTransform: "uppercase", fontSize: "5.4vw", margin: "0" }}
        className="w-fit flex "
      >
        <div  ref={scrollTextDiv1Ref} className="">
          {children}
        </div>
        <div ref={scrollTextDiv2Ref} className="pl-32 absolute  left-[200%] ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TextHorizontalScrollEffect;
