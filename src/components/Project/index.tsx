"use client";

import { ProjectList } from "@/constant/Project";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import ProjectBackgroundContainer from "./ProjectBackgroundContainer";
import TextHorizontalScrollEffect from "../Effects/TextHorizontalEffect";
import Video from "../Shared/Video";

const Project = () => {
  const projectContainerRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);

  const [hoveredProject, setHoveredProject] = useState<
    "BattleHack" | "Greenbet" | "Airbus Gaming" | "Caption" 
  >("BattleHack");
  const [projectContainerHovered, setProjectContainerHovered] = useState(true);
  const [allProjectButtonHovered, setAllProjectButtonHovered] = useState(false);

  useEffect(() => {
    if (!projectContainerRef.current || !testRef.current) return;
    gsap.timeline({
      scrollTrigger: {
        trigger: projectContainerRef.current,
        start: "top top",
        end: "bottom 300",
        onEnter: () => setProjectContainerHovered(false),
        onEnterBack: () => setProjectContainerHovered(false),
        onLeave: () => setProjectContainerHovered(true),
        onLeaveBack: () => setProjectContainerHovered(true),
        // markers: true,
        pin: testRef.current,
      },
    });
  }, [projectContainerRef.current, testRef.current]);

  return (
    <div
      ref={projectContainerRef}
      style={{
        background: "var(--primary-color)",
        color: "var(--contrast-color)",
      }}
      className="relative"
    >
      <div
        className="relative gap-10 pb-32 flex h-auto  "
        style={{
          color: "var(--contrast-color)",
        }}
      >
        <TextHorizontalScrollEffect scrollDirection="left" speed={0.1}>
          <div className="flex relative w-fit ">
            <div className="text-8xl px-16 text-nowrap w-fit">
              Mind the business, we build the product
            </div>
            <div className="relative h-[6rem]  aspect-square block  ">
              <Video src="/Asset/Video/white.webm" autoPlay muted loop />
            </div>
          </div>
        </TextHorizontalScrollEffect>
      </div>
      <div
        className="relative gap-24 px-32 pt-40 flex flex-col "
        style={{
          color: "var(--contrast-color)",
        }}
      >
        {ProjectList.map((project, index) => {
          return (
            <div className=" w-full z-[100]" key={index}>
              <ProjectCard
                {...project}
                onHoverHandler={() => setHoveredProject(project.title)}
                isActive={
                  projectContainerHovered
                    ? true
                    : allProjectButtonHovered
                    ? false
                    : hoveredProject == project.title
                }
              />
            </div>
          );
        })}
        <div
          className={
            "text-8xl z-[100] " +
            (allProjectButtonHovered ? "text-slate-50 " : "text-slate-300")
          }
          onMouseEnter={() => setAllProjectButtonHovered(true)}
          onMouseLeave={() => setAllProjectButtonHovered(false)}
        >
          see all our projects
        </div>
        {/* {!projectContainerHovered && ( */}
        {/* <ProjectBackgroundContainer hoveredProject={"BattleHack"} /> */}
        {/* )} */}
      </div>
      <div className="absolute top-0 h-screen w-full  block" ref={testRef}>
        {!projectContainerHovered && (
          <ProjectBackgroundContainer hoveredProject={hoveredProject} />
        )}
      </div>
    </div>
  );
};

export default Project;
