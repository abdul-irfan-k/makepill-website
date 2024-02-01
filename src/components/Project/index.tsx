"use client";

import { ProjectList } from "@/constant/Project";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import ProjectBackgroundContainer from "./ProjectBackgroundContainer";

const Project = () => {
  const projectContainerRef = useRef<HTMLDivElement>(null);

  const [hoveredProject, setHoveredProject] = useState<
    "BattleHack" | "Greenbet" | "Airbus Gaming" | "Caption"
  >("BattleHack");
  const [projectContainerHovered, setProjectContainerHovered] = useState(true);

  useEffect(() => {
    if (!projectContainerRef.current) return;
    gsap.timeline({
      scrollTrigger: {
        trigger: projectContainerRef.current,
        start: "top 300",
        end: "bottom bottom",
        onEnter: () => setProjectContainerHovered(false),
        onEnterBack: () => setProjectContainerHovered(false),
        onLeave: () => setProjectContainerHovered(true),
        onLeaveBack: () => setProjectContainerHovered(true),
        markers: true,
      },
    });
  }, [projectContainerRef.current]);

  return (
    <div
      className="relative "
      ref={projectContainerRef}
      style={{ background: "rgb(15,15,15)" }}
    >
      {!projectContainerHovered && (
        <ProjectBackgroundContainer hoveredProject={hoveredProject} />
      )}
      <div className="gap-24 px-32 py-40 flex flex-col">
        {ProjectList.map((project, index) => {
          return (
            <div className=" w-full z-[100]" key={index}>
              <ProjectCard
                {...project}
                onHoverHandler={() => setHoveredProject(project.title)}
                isActive={
                  projectContainerHovered
                    ? true
                    : hoveredProject == project.title
                }
              />
            </div>
          );
        })}
        <div
          className={
            "text-8xl " +
            (projectContainerHovered ? "text-slate-50" : "text-slate-300")
          }
        >
          see all our projects
        </div>
      </div>
    </div>
  );
};

export default Project;
