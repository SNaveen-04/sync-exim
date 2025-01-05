import Agriculture from "../../assests/agriculture.jpeg";
import Rates from "../../assests/affordable.png";
import Variety from "../../assests/spicesvarity.jpeg";
import Technology from "../../assests/technologyAndInnovation.jpeg";

import Card from "./Card";
const qualities = [
  {
    Image: Agriculture,
    title: "AGRICULTURE BASE",
    description:
      "With over 50 per cent of India’s workforce involved in the agriculture sector, the country is one of the leading agriculture exporters.",
  },
  {
    Image: Rates,
    title: "AFFORDABLE RATES",
    description:
      "Cheap labour and raw materials allow India to produce spices, oils, and other food products at great affordable rates.",
  },
  {
    Image: Variety,
    title: "VARIETY OF SPICES AND TASTES",
    description:
      "Indias spice market is unparalleled due to its rich heritage, diverse climate, and traditional farming practices that ensure the highest quality and authenticity of spices.",
  },
  {
    Image: Technology,
    title: "TECHNOLOGY AND INNOVATION",
    description:
      "In a land blessed with great scientific minds, India’s technological advancements and innovation have made international trade all the easier, making it the perfect choice.",
  },
];

const WhyIndiaMarket = () => {
  return (
    <div className="min-h-screen py-10 bg-zinc-100">
      <h2 className="uppercase text-[#2c526e] py-5 text-3xl">
        Why <span className="text-[#4AB9CF]">India Market</span>
      </h2>
      <div className="p-10 flex flex-wrap gap-14 md:gap-10 justify-center">
        {qualities.map((quality, index) => {
          return (
            <Card
              Image={quality.Image}
              title={quality.title}
              description={quality.description}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WhyIndiaMarket;
