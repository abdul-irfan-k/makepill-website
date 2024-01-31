import Video from "@/components/Shared/Video";
import React from "react";

interface ProjectBackgroundContainerProps {
  hoveredProject: "BattleHack" | "Greenbet" | "Airbus Gaming" | "Caption";
}
const ProjectBackgroundContainer = ({
  hoveredProject,
}: ProjectBackgroundContainerProps) => {
  return (
    <div className="sticky top-0 left-0 opacity-20">
      <div
        className={
          "absolute  w-screen h-screen left-0 transition-[opacity]" +
          (hoveredProject == "BattleHack" ? "opacity-100" : "opacity-0")
        }
      >
        <Video
          src="/Asset/Video/battlehack_reel_vp9_53ef201263.webm"
          autoPlay
          loop
          muted
        />
      </div>
      <div
        className={
          "absolute  w-screen h-screen left-0  bg-red-200 " +
          (hoveredProject == "Greenbet" ? "opacity-100" : "opacity-0")
        }
      >
        <Video
          src="/Asset/Video/greenbet_reel_vp9_01d08c6746.webm"
          autoPlay
          loop
          muted
        />
      </div>
      <div
        className={
          "absolute  w-screen h-screen left-0  bg-red-200 " +
          (hoveredProject == "Airbus Gaming" ? "opacity-100" : "opacity-0")
        }
      >
        <Video
          src="/Asset/Video/airbusgaming_reel_vp9_80796a359f.webm"
          autoPlay
          loop
          muted
        />
      </div>
      <div
        className={
          "absolute  w-screen h-screen left-0  bg-red-200 " +
          (hoveredProject == "Caption" ? "opacity-100" : "opacity-0")
        }
      >
        <Video
          src="/Asset/Video/caption_reel_vp9_2afe219f05.webm"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default ProjectBackgroundContainer;
