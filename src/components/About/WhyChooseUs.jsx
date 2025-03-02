import "./index.css";

import Image1 from "../../assets/why_choose_us/Asset1.png";
import Image2 from "../../assets/why_choose_us/Asset2.png";
import Image3 from "../../assets/why_choose_us/Asset3.png";
import Image4 from "../../assets/why_choose_us/Asset4.png";
import Image5 from "../../assets/why_choose_us/Asset5.png";

const WhyChooseUs = () => {
  const data = [
    {
      image: Image1,
      title: "FINEST QUALITY",
      description:
        "The company guarantees the quality of our service & Products.",
    },
    {
      image: Image2,
      title: "PERFORMANCE",
      description:
        "The performance of the Exports sector continues to be strong.",
    },
    {
      image: Image3,
      title: "SERVICE",
      description: "Our aim is to provide the best service at the longtime.",
    },
    {
      image: Image4,
      title: "Reliable & Trusted Services",
      description:
        "Our transparent and reliable operations ensure that you feel at ease with our services.",
    },
    {
      image: Image5,
      title: "IDEAL Price",
      description:
        "Our customers get benefit of affordable price on our products.",
    },
  ];

  return (
    <div className="bg-img py-12 px-4">
      <h1 className="text-3xl text-center font-bold text-white mb-10">
        WHY CHOOSE US
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
              <h2 className="text-2xl font-semibold text-center mb-2 text-white uppercase">
                {d.title}
              </h2>
              <p className="text-white text-center uppercase">
                {d.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
