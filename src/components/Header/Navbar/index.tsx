"use client";
import { useEffect, useRef, useState } from "react";
import NavRow from "../NavRow";
import gsap from "gsap";
import { useLenisScrollContext } from "@/provider/SmoothScrollProvider";
import Video from "@/components/Shared/Video";
import {  motion } from "framer-motion";

type row =
  | "home"
  | "works"
  | "services"
  | "contact"
  | "vision"
  | "home1"
  | "works1"
  | "services1"
  | "contact1"
  | "vision1";
const Navbar = () => {
  const [selectedRow, setSelectedRow] = useState<row>("home");

  const navlist = useRef<HTMLDivElement>(null);

  const lenisScroll = useLenisScrollContext();

  useEffect(() => {
    if (lenisScroll == undefined) return;
    const wrap = gsap.utils.wrap(-100, 1000);
    gsap.set(".box", {
      y: (i) => i * 110,
    });

    lenisScroll.stop();
    //@ts-ignore
    window.addEventListener("wheel", (e) => {
      const { deltaY } = e;
      gsap.to(".box", {
        duration: 1,
        ease:"easeOut",
        y: deltaY > 0 ? "-=200" : "+=200",
        modifiers: {
          y: gsap.utils.unitize(wrap),
        },
      });
    });
    //@ts-ignore
    window.addEventListener("mousemove", (e) => {
      const { movementY } = e;
      gsap.to(".box", {
        duration: 0.5,
        ease: "easeOut",
        y:
          movementY > 0 ? `-=${movementY * 6}` : `+=${Math.abs(movementY) * 6}`,
        modifiers: {
          y: gsap.utils.unitize(wrap),
        },
      });
    });
    return () => {
      window.removeEventListener("wheel", () => console.log("removed"));
    };
  }, [lenisScroll]);

  return (
    <div
      className="fixed px-10 w-screen h-screen z-[200]    "
      style={{
        background: "var(--primary-color)",
        color: "var(--contrast-color)",
      }}
    >
      <div className="flex w-full h-full">
        <div className="relative w-[16%] flex items-center">
          <div className="gap-2 flex flex-col">
            <span>Instagram</span>
            <span>X/Twitter</span>
            <span>Dribble</span>
            <span>Youtube</span>
            <span>Linkedin</span>
          </div>
          <div className="absolute bottom-0">
            <span className="border-b-[1px]">hell@makepill.com</span>
          </div>
        </div>

        <div className="pl-32 flex ">
          <div
            className="relative w-[35vw] border-l-[1px] border-neutral-400 pl-32  h-screen text-6xl overflow-y-hidden  "
            ref={navlist}
          >
            <NavRow
              className="absolute box py-[1.5rem]"
              isActive={selectedRow == "home"}
              onHover={() => setSelectedRow("home")}
            >
              Home
            </NavRow>
            <NavRow
              className="absolute box py-[1.5rem] "
              isActive={selectedRow == "works"}
              onHover={() => setSelectedRow("works")}
            >
              Works
            </NavRow>
            <NavRow
              className="absolute box py-[1.5rem] "
              isActive={selectedRow == "services"}
              onHover={() => setSelectedRow("services")}
            >
              Services
            </NavRow>
            <NavRow
              className="absolute box py-[1.5rem] "
              isActive={selectedRow == "contact"}
              onHover={() => setSelectedRow("contact")}
            >
              Contact
            </NavRow>
            <NavRow
              className="absolute box py-[1.5rem] "
              isActive={selectedRow == "vision"}
              onHover={() => setSelectedRow("vision")}
            >
              Vision
            </NavRow>
            <NavRow
              className="absolute box py-[1.5rem] "
              isActive={selectedRow == "home1"}
              onHover={() => setSelectedRow("home1")}
            >
              Home
            </NavRow>
            <NavRow
              className="absolute box py-[1.5rem] "
              isActive={selectedRow == "works1"}
              onHover={() => setSelectedRow("works1")}
            >
              Works
            </NavRow>
            <NavRow
              className="absolute box py-[1.5rem] "
              isActive={selectedRow == "services1"}
              onHover={() => setSelectedRow("services1")}
            >
              Services
            </NavRow>
            <NavRow
              className="absolute box py-[1.5rem] "
              isActive={selectedRow == "contact1"}
              onHover={() => setSelectedRow("contact1")}
            >
              Contact
            </NavRow>
            <NavRow
              className="absolute box py-[1.5rem] "
              isActive={selectedRow == "vision1"}
              onHover={() => setSelectedRow("vision1")}
            >
              Vision
            </NavRow>
          </div>
        </div>

        <div className="relative w-[36%] ml-auto aspect-[1]  my-auto block  overflow-hidden">
          <NavbarVideo
            videoSrc="/Asset/Video/index_x1_vp9_2cf8cc21e4.webm"
            isActive={selectedRow == "home" || selectedRow == "home1"}
          />
          <NavbarVideo
            videoSrc="/Asset/Video/works_x1_vp9_801e93b806.webm"
            isActive={selectedRow == "works" || selectedRow == "works1"}
          />
          <NavbarVideo
            videoSrc="/Asset/Video/expertises_x1_vp9_11ee1f3431.webm"
            isActive={selectedRow == "services" || selectedRow == "services1"}
          />
          <NavbarVideo
            videoSrc="/Asset/Video/contact_x1_vp9_cc7a99e029.webm"
            isActive={selectedRow == "contact" || selectedRow == "contact1"}
          />
          <NavbarVideo
            videoSrc="/Asset/Video/about_x1_vp9_af33c15d4f.webm"
            isActive={selectedRow == "vision" || selectedRow == "vision1"}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

interface NavbarVideoProps {
  videoSrc: string;
  isActive: boolean;
}
const NavbarVideo = ({ isActive, videoSrc }: NavbarVideoProps) => {
  return (
    <motion.div
      className="absolute w-full h-full flex justify-center  items-center"
      variants={{
        notActive: {
          rotate: "-120deg",
          opacity: 0,
          transition: {
            duration: 0,
          },
        },
        active: {
          rotate: "0deg",
        },
      }}
      animate={isActive ? "active" : "notActive"}
    >
      <Video
        src={videoSrc}
        className="h-full"
        loop
        autoPlay={true}
        muted={true}
      />
    </motion.div>
  );
};
