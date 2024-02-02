"use client";
import React, { useEffect, useState } from "react";
// import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Lenis from "@studio-freight/lenis";
// import Lenis from "@studio-freight/react-lenis/types";
import { useFrame } from "@studio-freight/hamo";

const SmothScrollScrollProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lenis, setLenis] = useState<Lenis | undefined>(undefined);
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: true,
      // duration: 5,
      lerp: 0.05,
    });
    lenis.start();
    setLenis(lenis);
    //@ts-ignore
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);
  useFrame((time: any) => {
    if (lenis == undefined) return;
    lenis.raf(time);
  });

  return (
    <>
      {/* <ReactLenis root  > */}
      {children}
      {/* </ReactLenis> */}
    </>
  );
};

export default SmothScrollScrollProvider;
