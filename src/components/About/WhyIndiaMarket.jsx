import Image1 from "../../assests/WhyIndiaMarket/Asset 32.png";
import Image2 from "../../assests/WhyIndiaMarket/Asset 33.png";
import Image3 from "../../assests/WhyIndiaMarket/Asset 34.png";
import Image4 from "../../assests/WhyIndiaMarket/Asset 35.png";
import "./WhyIndiaMarket.css";
const qualities = [
  {
    Image: Image1,
    class: "",
    title: "AGRICULTURE BASE",
    description:
      "With over 50 per cent of India’s workforce involved in the agriculture sector, the country is one of the leading agriculture exporters.",
  },
  {
    Image: Image2,
    class: "",
    title: "AFFORDABLE RATES",
    description:
      "Raw materials allow India to produce spices, oils, and other food products at great affordable rates.",
  },
  {
    Image: Image3,
    class: "",
    title: "VARIETY OF SPICES AND TASTES",
    description:
      "Indias spice market is unparalleled due to its rich heritage, diverse climate, and traditional farming practices that ensure the highest quality and authenticity of spices.",
  },
  {
    Image: Image4,
    class: "",
    title: "TECHNOLOGY AND INNOVATION",
    description:
      "In a land blessed with great scientific minds, India’s technological advancements and innovation have made international trade all the easier, making it the perfect choice.",
  },
];

const WhyIndiaMarket = () => {
  return (
    <div id="whyIndiaMarket">
      <div className="bg-cover">
        <h1 className="main-heading">WHY INDIA MARKET</h1>
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

export default WhyIndiaMarket;
