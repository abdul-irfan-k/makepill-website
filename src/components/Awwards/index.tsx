const Awards = () => {
  return (
    <div
      className="gap-10 px-32 py-32 flex justify-between "
      style={{
        background: "var(--primary-color)",
        color: "var(--contrast-color)",
      }}
    >
      <div className="relative w-full text-2xl">
        <span>/Give life to your ideas</span>
      </div>
      <div className="w-full">
        <div className="gap-10 flex flex-col text-4xl">
          <div className="gap-5 flex flex-col">
            <span>Awwards</span>
            <div className="gap-5 flex flex-col text-2xl">
              <div className="flex justify-between">
                <span>Site of the Day - Makepill</span>
                <span>08-31-2023</span>
              </div>
              <div className="flex justify-between">
                <span>Developer Award - Makepill</span>
                <span>08-31-2023</span>
              </div>
            </div>
          </div>
          <div className="gap-5 flex flex-col">
            <span>The FWA</span>
            <div className="gap-5 flex flex-col text-2xl">
              <div className="flex justify-between">
                <span>FWA of the Day - Makepill</span>
                <span>08-19-2023</span>
              </div>
            </div>
          </div>

          <div className="gap-5 flex flex-col">
            <span>CSSDA</span>
            <div className="gap-5 flex flex-col text-2xl">
              <div className="flex justify-between">
                <span>Webite of the Day - Makepill</span>
                <span>04-10-2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
