"use client";
import gsap from "gsap";
import React, { FC, useEffect, useRef } from "react";

interface PageSlideUpProps {
  children: React.ReactNode;
}
const PageSlideUp: FC<PageSlideUpProps> = ({ children }) => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = pageRef.current;
    if (!element) return;

    const slides = gsap.utils.toArray(".slide");
    //@ts-ignore
    slides.forEach((slide, i) => {
      gsap.timeline({
        scrollTrigger: {
          //@ts-ignore
          trigger: slide,
          start: "top top",
          pin: true,
          pinSpacing: false,
          // markers: true,
        },
      });
    });
  }, [pageRef.current]);
  return (
    <div className="relative w-screen h-screen block " ref={pageRef}>
      {children}
    </div>
  );
};

export default PageSlideUp;
