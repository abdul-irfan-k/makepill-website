"use client";
import { motion } from "framer-motion";
import { FC, useState } from "react";

interface NavButtonProps {
  onClickHandler?: (status:boolean) => void;
}
const NavButton: FC<NavButtonProps> = ({ onClickHandler }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className={" flex w-[6%]  " + (isClicked ? " gap-2 " : "")}
      onClick={() => {
        if (onClickHandler != undefined) onClickHandler(!isClicked);
        setIsClicked(!isClicked);
      }}
    >
      <motion.div
        className="border-2 w-[50%] flex items-center justify-center aspect-square rounded-[50%_0_0_50%]"
        variants={{
          hover: {
            transform: "rotateZ(-15deg)",
          },
          initial: {
            transform: "rotateZ(0deg)",
          },
        }}
        animate={isClicked ? "hover" : "Initial"}
        style={{
          borderColor:"var(--contrast-color)"
        }}
      >
        M
      </motion.div>
      <motion.div
        className="gap-2 border-2 px-3 py-2 flex flex-col justify-center  w-[50%] aspect-square rounded-[0_50%_50%_0]"
        variants={{
          hover: {
            transform: "rotateZ(15deg)",
          },
          initial: {
            transform: "rotateZ(0deg)",
          },
        }}
        animate={isClicked ? "hover" : "Initial"}
        style={{
          borderColor:"var(--contrast-color)"
        }}
      >
        <div className="h-[1.2px] w-full  block" style={{background:"var(--contrast-color)"}}></div>
        <div className="h-[1.2px] w-full  block" style={{background:"var(--contrast-color)"}}></div>
      </motion.div>
    </div>
  );
};

export default NavButton;
