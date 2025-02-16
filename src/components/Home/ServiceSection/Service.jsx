import "./Service.css";
import Image1 from "../../../assests/Services/Asset 1.png";
import Image2 from "../../../assests/Services/Asset 2.png";
import Image3 from "../../../assests/Services/Asset 3.png";

const Service = () => {
  const servicesData = [
    {
      img: Image2,
      class: "",
      main: "Global reach",
      content: "Connecting to a World of Opportunities",
    },
    {
      img: Image1,
      class: "",
      main: "Timely service",
      content: "Delivering on time is delivering on trust",
    },
    {
      img: Image3,
      class: "assest3",
      main: "Credibility",
      content:
        "Credibility is not just a trait, it's a commitment to excellence",
    },
  ];

  return (
    <div id="service">
      <div className="bg-cover">
        <h1 className="main-heading">OUR SERVICES</h1>
        <div className="main-section">
          {servicesData.map((d, idx) => {
            return (
              <div key={idx} className="card">
                <img src={d.img} className={d.class} />
                <h2 className="title">{d.main}</h2>
                <p className="content">{d.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
