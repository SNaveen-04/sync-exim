import "./Service.css";

import Image1 from "../../../assets/services/Asset1.png";
import Image2 from "../../../assets/services/Asset2.png";
import Image3 from "../../../assets/services/Asset3.png";

const Service = () => {
  const servicesData = [
    {
      img: Image3,
      main: "Global reach",
      content: "Connecting to a World of Opportunities",
    },
    {
      img: Image1,
      main: "Timely service",
      content: "Delivering on time is delivering on trust",
    },
    {
      img: Image2,
      main: "Credibility",
      content:
        "Credibility is not just a trait, it's a commitment to excellence",
    },
  ];

  return (
    <div id="service">
      <div className="bg-cover">
        <h1 className="main-heading text-[#273296]">OUR SERVICES</h1>
        <div className="mt-10 main-section">
          {servicesData.map((d, idx) => {
            return (
              <div key={idx} className="card">
                <img src={d.img} alt={d.main} />
                <h2 className="title text-[#273296] uppercase">{d.main}</h2>
                <p className="content !text-sm leading-7 text-[#273296]">
                  {d.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
