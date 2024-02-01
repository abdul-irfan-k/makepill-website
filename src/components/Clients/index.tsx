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
    <div>
      <TextHorizontalScrollEffect scrollDirection="right" speed={0.12}>
        <div className="flex gap-32  w-auto " style={{ whiteSpace: "nowrap" }}>
          {clients1.map((elm, index) => {
            return <span key={index}>{elm}</span>;
          })}
        </div>
      </TextHorizontalScrollEffect>
      <TextHorizontalScrollEffect scrollDirection="left" speed={0.10}>
        <div className="flex gap-32  w-auto " style={{ whiteSpace: "nowrap" }}>
          {clients2.map((elm, index) => {
            return <span key={index}>{elm}</span>;
          })}
        </div>
      </TextHorizontalScrollEffect>
    </div>
  );
};

export default Clients;
