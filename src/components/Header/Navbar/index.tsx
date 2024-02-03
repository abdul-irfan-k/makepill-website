"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import NavRow from "../NavRow";
import gsap from "gsap";

const Navbar = () => {
  const [selectedRow, setSelectedRow] = useState<
    | "home"
    | "works"
    | "services"
    | "contact"
    | "vision"
    | "home1"
    | "works1"
    | "services1"
    | "contact1"
    | "vision1"
  >("home");

  const [scroll, setScroll] = useState<number>(0);
  const navlist = useRef<HTMLDivElement>(null);

  // }, [onScrollHandler]);
  const wrap = gsap.utils.wrap(-100, 10000);
  useEffect(() => {
    if (!navlist.current) return;
    const containerSelector = gsap.utils.selector(navlist.current);
   

  }, [navlist.current]);
  return (
    <div
      className="fixed px-10 w-screen h-screen z-[200] bg-red-500   "
      // style={{
      //   background: "var(--primary-color)",
      //   color: "var(--contrast-color)",
      // }}
    >
      <div className="flex w-full h-full">
        <div className="relative w-[30%] flex items-center">
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
            className="w-[100%] flex flex-col text-8xl overflow-y-scroll  "
            // onScroll={(e) => {
            //   const { scrollTop } = e.target;
            //   console.log("e", scrollTop);
            //   setScroll(e.target.scrollTop);
            // }}
            // onScrollCapture={(e) => console.log('capture')}
            ref={navlist}
          >
            <NavRow
              isActive={selectedRow == "home"}
              onHover={() => setSelectedRow("home")}
              // style={{
              //   transform: `translate3D(0,${750 - scroll}px,0)`,
              //   background: "rgb(15,15,15)",
              // }}
            >
              Home
            </NavRow>
            <NavRow
              isActive={selectedRow == "works"}
              onHover={() => setSelectedRow("works")}
              // style={{
              //   transform: `translate3D(0,${750 - scroll}px,0)`,
              //   background: "rgb(15,15,15)",
              // }}
            >
              Works
            </NavRow>
            <NavRow
              isActive={selectedRow == "services"}
              onHover={() => setSelectedRow("services")}
              // style={{
              //   transform: `translate3D(0,${750 - scroll}px,0)`,
              //   background: "rgb(15,15,15)",
              // }}
            >
              Services
            </NavRow>
            <NavRow
              isActive={selectedRow == "contact"}
              onHover={() => setSelectedRow("contact")}
              // style={{
              //   transform: `translate3D(0,${750 - scroll}px,0)`,
              //   background: "rgb(15,15,15)",
              // }}
            >
              Contact
            </NavRow>
            <NavRow
              isActive={selectedRow == "vision"}
              onHover={() => setSelectedRow("vision")}
              // style={{
              //   transform: `translate3D(0,${750 - scroll}px,0)`,
              //   background: "rgb(15,15,15)",
              // }}
            >
              Vision
            </NavRow>
            <NavRow
              isActive={selectedRow == "home1"}
              onHover={() => setSelectedRow("home1")}
              // style={{
              //   transform: `translate3D(0,${-(750 - scroll)}px,0)`,
              //   background: "rgb(15,15,15)",
              // }}
            >
              Home
            </NavRow>
            <NavRow
              isActive={selectedRow == "works1"}
              onHover={() => setSelectedRow("works1")}
              // style={{
              //   transform: `translate3D(0,${-(750 - scroll)}px,0)`,
              //   background: "rgb(15,15,15)",
              // }}
            >
              Works
            </NavRow>
            <NavRow
              isActive={selectedRow == "services1"}
              onHover={() => setSelectedRow("services1")}
              // style={{
              //   transform: `translate3D(0,${-(750 - scroll)}px,0)`,
              //   background: "rgb(15,15,15)",
              // }}
            >
              Services
            </NavRow>
            <NavRow
              isActive={selectedRow == "contact1"}
              onHover={() => setSelectedRow("contact1")}
              // style={{
              //   transform: `translate3D(0,${-(750 - scroll)}px,0)`,
              //   background: "rgb(15,15,15)",
              // }}
            >
              Contact
            </NavRow>
            <NavRow
              isActive={selectedRow == "vision1"}
              onHover={() => setSelectedRow("vision1")}
              // style={{
              //   transform: `translate3D(0,${-(750 - scroll)}px,0)`,
              //   background: "rgb(15,15,15)",
              // }}
            >
              Vision
            </NavRow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
