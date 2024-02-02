"use client";
import { useEffect, useRef } from "react";
import Video from "../Shared/Video";
import gsap from "gsap";

const About = () => {
  const aboutContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!aboutContainer.current) return;
    gsap.timeline({
      scrollTrigger: {
        trigger: aboutContainer.current,
        start: "top 300",
        end: "bottom top",
        toggleClass: {
          className: "bg-white-mode",
          targets: "body",
        },
      },
    });
  }, [aboutContainer.current]);

  return (
    <div
      className="gap-10 px-32 py-32 flex justify-between items-center"
      style={{
        background: "var(--primary-color)",
        color: "var(--contrast-color)",
      }}
      ref={aboutContainer}
    >
      <div className="relative w-full aspect-square">
        <Video
          src="Asset/Video/launch_pill_6ae3865c71.webm"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="w-full">
        <span>/Give life to your ideas</span>
        <div className="mt-10 gap-10 flex flex-col text-4xl">
          <span>
            We pool our expertise to turn your wildest projects into singular
            experiences.
          </span>
          <span>
            Discover our diverse expertise, each one providing a unique
            dimension to your vision.
          </span>
        </div>
        <div className="mt-10 relative w-[20%]  aspect-square flex items-center justify-center border-[1px] border-slate-800 rounded-full">
          service
        </div>
      </div>
    </div>
  );
};

export default About;
