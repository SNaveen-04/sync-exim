import "./Works.css";

import Image3 from "../../../assets/how_we_work/Asset1.png";
import Image1 from "../../../assets/how_we_work/Asset2.png";
import Image2 from "../../../assets/how_we_work/Asset3.png";

const Works = () => {
  const worksData = [
    {
      img: Image2,
      main: "Quality You Can Trust",
      content:
        "We pride ourselves on offering high-quality, rigorously tested products that meet international standards.",
    },
    {
      img: Image1,
      main: "Sustainable & Ethical Sourcing",
      content:
        "Our partnerships with local producers ensure that we promote eco-friendly practices and fair trade, empowering communities and protecting the environment.",
    },
    {
      img: Image3,
      main: "Global Expertise",
      content:
        "With years of experience in global markets, we understand the complexities of international trade and ensure smooth, efficient logistics tailored to your needs.",
    },
  ];

  return (
    <div id="how-we-works">
      <div className="bg-cover">
        <h1 className="main-heading text-white">HOW WE WORK</h1>
        <div className="mt-10 main-section">
          {worksData.map((d, idx) => {
            return (
              <div key={idx} className="card">
                <img src={d.img} alt={d.main} />
                <h2 className="title text-white uppercase">{d.main}</h2>
                <p className="content !text-sm leading-7 text-white">
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

export default Works;
