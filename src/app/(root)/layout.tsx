import LandingSection from "@/components/Landing";
import MouseTracker from "@/components/MouseTracker";
import GsapProvider from "@/provider/GsapProvider";
import SmothScrollScrollProvider from "@/provider/SmoothScrollProvider";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GsapProvider>
        <SmothScrollScrollProvider>
          <LandingSection>
            {/* <MouseTracker /> */}
            {children}
          </LandingSection>
        </SmothScrollScrollProvider>
      </GsapProvider>
    </>
  );
}
