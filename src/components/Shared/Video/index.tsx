import { FC } from "react";

interface VideoProps {
  src: string;
  className?: string;
  controls?: boolean;
  autoPlay?:boolean
  muted?:boolean
  loop?:boolean
}

const Video: FC<VideoProps> = ({ src, className,autoPlay,controls,loop,muted }) => {
  return (
    <video
      controls={controls != undefined ? controls : false}
      autoPlay={!autoPlay ? false : autoPlay}
      
      muted={!muted ? false : muted}
      loop={!loop ? false : loop}
      className={!className ? "" : className}
      
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
