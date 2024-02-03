"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { useFrame } from "@studio-freight/hamo";

const lenisContext = createContext<Lenis | undefined>(undefined);
export const useLenisScrollContext = (): Lenis | undefined =>
  useContext(lenisContext);

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
      <lenisContext.Provider value={lenis}>{children}</lenisContext.Provider>
    </>
  );
};

export default SmothScrollScrollProvider;
