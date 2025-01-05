import Image from "../../assests/About us.png";
import Card from "./Card";
const qualities = [
  {
    Image: Image,
    title: "AGRICULTURE BASE",
    description:
      "With over 50 per cent of India’s workforce involved in the agriculture sector, the country is one of the leading agriculture exporters.",
  },
  {
    Image: Image,
    title: "AFFORDABLE RATES",
    description:
      "Cheap labour and raw materials allow India to produce spices, oils, and other food products at great affordable rates.",
  },
  {
    Image: Image,
    title: "VARIETY OF SPICES AND TASTES",
    description:
      "Indias spice market is unparalleled due to its rich heritage, diverse climate, and traditional farming practices that ensure the highest quality and authenticity of spices.",
  },
  {
    Image: Image,
    title: "TECHNOLOGY AND INNOVATION",
    description:
      "In a land blessed with great scientific minds, India’s technological advancements and innovation have made international trade all the easier, making it the perfect choice.",
  },
];

const WhyIndiaMarket = () => {
  return (
    <div className="min-h-screen py-10">
      <h2 className="uppercase text-[#2c526e] py-5">
        Why <span className="text-[#4AB9CF]">India Market</span>
      </h2>
      <div className="p-10 flex flex-wrap gap-10 justify-center">
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

{
  /* <div key={index} className="tracking-wide">
              <h3 className="uppercase text-xl text-[#2c526e] font-medium">
                {quality.title}
              </h3>
              <p className="text-start pl-10 text-[#7e7e7e] text-lg ">
                {quality.description}
              </p>
            </div> */
}
