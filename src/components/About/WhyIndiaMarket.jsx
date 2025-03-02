import Image1 from "../../assets/why_india/Asset1.png";
import Image2 from "../../assets/why_india/Asset2.png";
import Image3 from "../../assets/why_india/Asset3.png";
import Image4 from "../../assets/why_india/Asset4.png";

const data = [
  {
    image: Image1,
    title: "AGRICULTURE BASE",
    description:
      "With over 50 per cent of India's workforce involved in the agriculture sector, the country is one of the leading agriculture exporters.",
  },
  {
    image: Image2,
    title: "AFFORDABLE RATES",
    description:
      "Raw materials allow India to produce spices, oils, and other food products at great affordable rates.",
  },
  {
    image: Image3,
    title: "VARIETY OF SPICES AND TASTES",
    description:
      "Indias spice market is unparalleled due to its rich heritage, diverse climate, and traditional farming practices that ensure the highest quality and authenticity of spices.",
  },
  {
    image: Image4,
    title: "TECHNOLOGY AND INNOVATION",
    description:
      "In a land blessed with great scientific minds, India's technological advancements and innovation have made international trade all the easier, making it the perfect choice.",
  },
];

const WhyIndiaMarket = () => {
  return (
    <div className="py-12 px-4">
      <h1 className="text-3xl text-center font-bold text-[#273296] mb-10">
        WHY INDIA MARKET
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {data.map((d, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col items-center min-w-[200px] max-w-xs rounded-lg p-4"
            >
              <div className="w-40 h-40 mb-4 flex items-center justify-center">
                <img
                  src={d.image}
                  alt={d.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold text-center mb-2 text-[#273296] uppercase">
                {d.title}
              </h2>
              <p className="text-[#273296] text-center uppercase">
                {d.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyIndiaMarket;
