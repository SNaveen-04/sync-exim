import Image1 from "../../assets/why_choose_us/Asset1.png";
import Image2 from "../../assets/why_choose_us/Asset2.png";
import Image3 from "../../assets/why_choose_us/Asset3.png";
import Image4 from "../../assets/why_choose_us/Asset4.png";
import Image5 from "../../assets/why_choose_us/Asset5.png";

const WhyChooseUs = () => {
  const data = [
    {
      Image: Image1,
      title: "FINEST QUALITY",
      description:
        "The company guarantees the quality of our service & Products.",
    },
    {
      Image: Image2,
      title: "PERFORMANCE",
      description:
        "The performance of the Exports sector continues to be strong.",
    },
    {
      Image: Image3,
      title: "SERVICE",
      description: "Our aim is to provide the best service at the longtime.",
    },
    {
      Image: Image4,
      title: "Reliable & Trusted Services",
      description:
        "Our transparent and reliable operations ensure that you feel at ease with our services.",
    },
    {
      Image: Image5,
      title: "IDEAL Price",
      description:
        "Our customers get benefit of affordable price on our products.",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-[#273296]">
        ABOUT US
      </h1>
      <div className="main-section">
        {data.map((d, idx) => {
          return (
            <div key={idx} className="card">
              <img src={d.Image} className={d.class} />
              <h2 className="title">{d.title}</h2>
              <p className="content">{d.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
