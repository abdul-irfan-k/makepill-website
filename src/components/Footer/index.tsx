import Video from "../Shared/Video";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="text-slate-50" style={{ background: "rgb(15,15,15)" }}>
      <SocialLinks />

      <div className="relative  flex justify-center">
        <div className="relative h-[70vh] aspect-[9/16] overflow-hidden">
          <Video
            src="/Asset/Video/credits_x1_vp9_07a06e4563.webm"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="absolute top-[50%]  translate-y-[-50%] flex flex-col items-center">
          <span className="text-9xl text-nowrap">Brif us now</span>
          <span className="text-2xl">
            Let's build now together you tomorrow's project.
          </span>
        </div>
      </div>

      <div className="gap-10 px-10 py-10 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="gap-2 flex flex-col">
            <span>/ Contact us</span>
            <span>hello@makepill.com</span>
          </div>
          <div className="gap-2 flex flex-col">
            <span>/ Based in</span>
            <span>Paris & remote</span>
          </div>
        </div>
        <div className="relative flex justify-between items-center">
          <div className="gap-5 flex">
            <span>Credits</span>
            <span>Mentions</span>
          </div>
          <div className="absolute  gap-5 left-[50%] translate-x-[-50%] ">
            <span>Français / English</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
