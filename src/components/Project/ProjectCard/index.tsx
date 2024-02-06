import { FC } from "react";
import { Variant, Variants, motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tag: string[];
  onHoverHandler?(): void;
  isActive?: boolean;
}

const slideUp: Variants = {
  notActive(i) {
    return {
      translateY: "100%",
      opacity: 0,
      transition: { ease: "easeOut", delay: i },
    };
  },
  active(i) {
    return {
      translateY: "0%",
      opacity: 1,
      transition: { ease: "easeOut", delay: i },
    };
  },
};

const ProjectCard: FC<ProjectCardProps> = ({
  tag,
  title,
  onHoverHandler,
  isActive,
}) => {
  return (
    <div
      className="w-full flex justify-between items-center "
      onMouseEnter={() => {
        if (onHoverHandler) onHoverHandler();
      }}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <span className={"text-8xl " + (isActive ? " " : "text-slate-300")}>
        {title}
      </span>

      {/* {isActive && ( */}
      <div className="gap-1 flex flex-col items-end">
        <div className="overflow-hidden">
          <motion.div
            // className="translate-y-[100%]"
            variants={slideUp}
            custom={0.1}
            animate={isActive ? "active" : "notActive"}
            initial="notActive"
          >
            0 1
          </motion.div>
        </div>
        <div className="gap-2 flex ">
          {tag.slice(0, 3).map((tag, index) => {
            return (
              <div className="overflow-hidden" key={index}>
                <motion.div
                  className="px-4 py-2 rounded-full text-base border-[1px] border-neutral-400"
                  variants={slideUp}
                  custom={0.1 + 0.03 * (index + 2)}
                  animate={isActive ? "active" : "notActive"}
                  initial="notActive"
                >
                  {tag}
                </motion.div>
              </div>
            );
          })}
          {tag.length > 3 && (
            <div className="overflow-hidden">
              <motion.div
                className="px-4 py-2 rounded-full text-base border-[1px] border-neutral-400"
                variants={slideUp}
                custom={0.1 + 0.03 * 4}
                animate={isActive ? "active" : "notActive"}
                initial="notActive"
              >
                {tag.length - 3}+
              </motion.div>
            </div>
          )}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default ProjectCard;
