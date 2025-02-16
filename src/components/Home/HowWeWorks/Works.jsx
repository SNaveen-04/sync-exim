import Image1 from "../../../assests/HowWeWorks/Asset 4.png";
import Image2 from "../../../assests/HowWeWorks/Asset 5.png";
import Image3 from "../../../assests/HowWeWorks/Asset 6.png";
import "./Works.css";

const Works = () => {
  const worksData = [
    {
      img: Image1,
      main: "Quality You Can Trust",
      content:
        "We pride ourselves on offering high-quality, rigorously tested products that meet international standards",
    },
    {
      img: Image2,
      main: "Sustainable & Ethical Sourcing",
      content:
        "Our partnerships with local producers ensure that we promote eco-friendly practices and fair trade, empowering communities and protecting the environment",
    },
    {
      img: Image3,
      main: "Global Expertise",
      content:
        "With years of experience in global markets, we understand the complexities of international trade and ensure smooth, efficient logistics tailored to your needs",
    },
  ];

  return (
    <div id="how-we-works">
      <div className="bg-cover">
        <h1 className="main-heading">HOW WE WORK</h1>
        <div className="main-section">
          {worksData.map((d, idx) => {
            return (
              <div key={idx} className="card">
                <img src={d.img} />
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

export default Works;
