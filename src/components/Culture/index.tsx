import Video from "../Shared/Video";

const Culture = () => {
  return (
    <div className="gap-10 px-32 py-32 flex justify-between items-center">
      <div className="w-full">
        <span>/Our culture</span>
        <div className="mt-10 gap-10 flex flex-col text-4xl">
          <span>
            Human values and high standards are core components of our teams'
            philosophy and culture.
          </span>
          <span>
            Whether , designers or developers, we all strive for excellence in
            designing ambitious, innovative projects.
          </span>
        </div>
        <div className="mt-10 relative w-[20%]  aspect-square flex items-center justify-center border-[1px] border-slate-800 rounded-full">
          Our service
        </div>
      </div>
      <div className="relative w-full aspect-square">
        <Video
          src="Asset/Video/ai_pill_5352472919.webm"
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
};

export default Culture;
