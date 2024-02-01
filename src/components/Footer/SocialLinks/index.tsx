"use client";
import TextHorizontalScrollEffect from "@/components/Effects/TextHorizontalEffect";
import { motion } from "framer-motion";
import { useState } from "react";

const SocialLinks = () => {
  return (
    <div
      className="py-32 flex flex-col items-center"
      style={{ background: "rgb(15,15,15)" }}
    >
      <span className="text-2xl">/ Follow us</span>
      <div className="gap-1 mt-20 flex flex-col w-full">
        <SocialLink label="Instagram" href="#" />
        <SocialLink label="X / Twitter" href="#" />
        <SocialLink label="Dribble" href="#" />
        <SocialLink label="Youtube" href="#" />
        <SocialLink label="Linkedin" href="#" />
      </div>
    </div>
  );
};

export default SocialLinks;

interface SocialLinkProps {
  label: string;
  href: string;
}
const SocialLink = ({ label, href }: SocialLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const arr = ["", "", "", "", ""];
  return (
    <div
      className="relative py-10  w-full flex items-center justify-center overflow-hidden text-4xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        variants={{
          active: { translateY: "-200%" },
          notActive: { translateY: "0%" },
        }}
        animate={isHovered ? "active" : "notActive"}
      >
        {label}
      </motion.span>

      <motion.div
        className="absolute h-full w-full  bg-zinc-800 translate-y-[110%]"
        variants={{
          active: { translateY: "0%" },
          notActive: { translateY: "110%" },
        }}
        animate={isHovered ? "active" : "notActive"}
      >
        <div className="h-full w-full py-0 block flex items-center text-4xl">
          <TextHorizontalScrollEffect scrollDirection="right" speed={0.12}>
            <div
              className=" flex gap-32   w-fit  text-slate-50 "
              style={{ whiteSpace: "nowrap" }}
            >
              {arr.map((elm, index) => {
                return <span key={index}>{label}</span>;
              })}
            </div>
          </TextHorizontalScrollEffect>
        </div>
      </motion.div>
    </div>
  );
};