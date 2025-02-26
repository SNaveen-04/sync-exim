import Image1 from "../../assests/WhyChooseUs/Asset 22.png";
import Image2 from "../../assests/WhyChooseUs/Asset 23.png";
import Image3 from "../../assests/WhyChooseUs/Asset 24.png";
import Image4 from "../../assests/WhyChooseUs/Asset 25.png";
import Image5 from "../../assests/WhyChooseUs/Asset 26.png";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const qualities = [
    {
      Image: Image1,
      title: "FINEST QUALITY",
      class: "",
      description:
        "The company guarantees the quality of our service & Products.",
    },
    {
      Image: Image2,
      title: "PERFORMANCE",
      class: "",
      description:
        "The performance of the Exports sector continues to be strong.",
    },
    {
      Image: Image3,
      title: "SERVICE",
      class: "",
      description: "Our aim is to provide the best service at the longtime.",
    },
    {
      Image: Image4,
      title: "Reliable & Trusted Services",
      class: "",
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
    <div id="whyChooseUs">
      <div className="bg-cover">
        <h1 className="main-heading">WHY CHOOSE US</h1>
        <div className="main-section">
          {qualities.map((d, idx) => {
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
    </div>
  );
};

export default WhyChooseUs;
