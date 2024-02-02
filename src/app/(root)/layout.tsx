import GsapProvider from "@/provider/GsapProvider";
import SmothScrollScrollProvider from "@/provider/SmoothScrollProvider";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GsapProvider>
        <SmothScrollScrollProvider>{children}</SmothScrollScrollProvider>
      </GsapProvider>
    </>
  );
}
