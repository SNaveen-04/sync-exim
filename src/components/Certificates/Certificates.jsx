import PDF1 from "../../assests/certificate Of IEC.pdf";
import PDF2 from "../../assests/Print _ Udyam Registration Certificate.pdf";
import SinglePage from "./SinglePageViewer";

const Certificates = () => {
  return (
    <div className="flex">
      <SinglePage pdf={PDF1} />
      <SinglePage pdf={PDF2} />
    </div>
  );
};

export default Certificates;
