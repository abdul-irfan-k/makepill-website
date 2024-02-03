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

  const [hoveredProject, setHoveredProject] = useState<
    "BattleHack" | "Greenbet" | "Airbus Gaming" | "Caption" | undefined
  >(undefined);
  const [projectContainerHovered, setProjectContainerHovered] = useState(true);
  const [allProjectButtonHovered, setAllProjectButtonHovered] = useState(false);

  useEffect(() => {
    if (!projectContainerRef.current) return;
    gsap.timeline({
      scrollTrigger: {
        trigger: projectContainerRef.current,
        start: "top top",
        end: "bottom 300",
        onEnter: () => setProjectContainerHovered(false),
        onEnterBack: () => setProjectContainerHovered(false),
        onLeave: () => setProjectContainerHovered(true),
        onLeaveBack: () => setProjectContainerHovered(true),
      },
    });
  }, [projectContainerRef.current]);

  return (
    <div
      className="relative "
      ref={projectContainerRef}
      style={{
        background: "var(--primary-color)",
        color: "var(--contrast-color)",
      }}
    >
      <div
        className="gap-10 pb-32 flex "
        style={{
          background: "var(--primary-color)",
          color: "var(--contrast-color)",
        }}
        >
        {!projectContainerHovered && (
          <ProjectBackgroundContainer hoveredProject={hoveredProject} />
        )}
        {/* <TextHorizontalScrollEffect scrollDirection="left" speed={0.1}>
          <div className="flex relative w-fit ">
            <div className="text-8xl px-16 text-nowrap w-fit">
              Mind the business, we build the product
            </div>
            <div className="relative h-[6rem]  aspect-square block  ">
              <Video src="/Asset/Video/white.webm" autoPlay muted loop />
            </div>
          </div>
        </TextHorizontalScrollEffect> */}
      </div>
      <div className="gap-24 px-32 pt-40 flex flex-col">
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
      </div>
    </div>
  );
};

export default Project;
