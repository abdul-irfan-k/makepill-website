import TextHorizontalScrollEffect from "../Effects/TextHorizontalEffect";

const Clients = () => {
  const clients1: string[] = [
    "BattleH4ck",
    "Heineken",
    "Curator studio",
    "Proph3cy",
    "Silicom",
  ];

  const clients2: string[] = [
    "Flexyroom",
    "Push&Sell",
    "Airbus",
    "Seela",
    "Sportfunding",
  ];

  return (
    <div
      className="text-6xl"
      style={{
        background: "var(--primary-color)",
        color: "var(--contrast-color)",
      }}
    >
      <TextHorizontalScrollEffect scrollDirection="right" speed={0.1}>
        <div className="flex   w-auto " style={{ whiteSpace: "nowrap" }}>
          {clients1.map((elm, index) => {
            return <span key={index} className="px-16">{elm}</span>;
          })}
        </div>
      </TextHorizontalScrollEffect>
      <TextHorizontalScrollEffect scrollDirection="left" speed={0.1}>
        <div className="flex  w-auto " style={{ whiteSpace: "nowrap" }}>
          {clients2.map((elm, index) => {
            return <span key={index} className="px-16">{elm}</span>;
          })}
        </div>
      </TextHorizontalScrollEffect>
    </div>
  );
};

export default Clients;
