import Card from "../../Card/Card";
import Image1 from "../../../assests/step1.png";
import Image2 from "../../../assests/step2.png";
import Image3 from "../../../assests/step3.png";
import "./Works.css";

const Works = () => {
  const worksData = [
    {
      img: Image1,
      size: "70px",
      main: "Quality You Can Trust",
      content:
        "We pride ourselves on offering high-quality, rigorously tested products that meet international standards.",
    },
    {
      img: Image2,
      size: "70px",
      main: "Sustainable & Ethical Sourcing",
      content:
        "Our partnerships with local producers ensure that we promote eco-friendly practices and fair trade, empowering communities and protecting the environment.",
    },
    {
      img: Image3,
      size: "70px",
      main: "Global Expertise",
      content:
        "With years of experience in global markets, we understand the complexities of international trade and ensure smooth, efficient logistics tailored to your needs.",
    },
  ];

  return (
    <div id="how-we-works">
      <div className="heading">
        <p className="logo">Steps</p>
        <p className="main-heading">
          How We <span>Work</span>
        </p>
      </div>
      <div className="card-container">
        {worksData.map((work, index) => {
          return (
            <div className="card" key={index}>
              <Card
                img={work.img}
                class={"rounded"}
                main={work.main}
                sub=""
                content={work.content}
                size={work.size}
                mainColor={"#1f425d"}
                contentColor={"#7a7c7c"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
