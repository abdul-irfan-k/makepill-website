import { FC } from "react";

interface ProjectCardProps {
  title: string;
  tag: string[];
  onHoverHandler?(): void;
  isActive?: boolean;
}
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
      <span
        className={
          "text-8xl " + (isActive ? " " : "text-slate-300")
        }
      >
        {title}
      </span>

      {isActive && (
        <div className="gap-1 flex flex-col items-end">
          <span>0 1</span>
          <div className="gap-2 flex ">
            {tag.slice(0, 3).map((tag, index) => {
              return (
                <span
                  className="px-4 py-2 rounded-full text-base border-[1px] border-neutral-400"
                  key={index}
                >
                  {tag}
                </span>
              );
            })}
            {tag.length > 3 && (
              <span className="px-4 py-2 rounded-full text-base border-[1px] border-neutral-400">
                {tag.length - 3}+
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
