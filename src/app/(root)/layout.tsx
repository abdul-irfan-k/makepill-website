import GsapProvider from "@/provider/GsapProvider";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GsapProvider>{children}</GsapProvider>
    </>
  );
}
