import Card from "./Card";
import Service from "../../assests/service.jpeg";
import Performance from "../../assests/performance.png";
import Quality from "../../assests/quality.png";
import ReliableAndTrusted from "../../assests/reliableAndTrusted.jpeg";
import BestPrice from "../../assests/bestPrice.png";

const qualities = [
  {
    Image: Quality,
    title: "BEST QUALITY",
    description:
      "The company guarantees the quality of our service & Products.",
  },
  {
    Image: Performance,
    title: "PERFORMANCE",
    description:
      "The performance of the Exports sector continues to be strong.",
  },
  {
    Image: Service,
    title: "SERVICE",
    description: "Our aim is to provide the best service at the longtime.",
  },
  {
    Image: ReliableAndTrusted,
    title: "Reliable & Trusted Services",
    description:
      "Our transparent and reliable operations ensure that you feel at ease with our services.",
  },
  {
    Image: BestPrice,
    title: "Best Price",
    description:
      "Our customers get benefit of affordable price on our products.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen py-10">
      <h2 className="uppercase text-[#2c526e] py-5 text-3xl">
        Why <span className="text-[#4AB9CF]">Choose Us</span>
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

export default WhyChooseUs;
