import { useState } from "react";
import PDF1 from "../../assests/certificate Of IEC.pdf";
import PDF2 from "../../assests/Print _ Udyam Registration Certificate.pdf";

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [pdf, setPdf] = useState("");

  const handleToggle = (selectedPdf) => {
    setPdf(selectedPdf);
    setIsVisible(true);
  };

  return (
    <div className="flex flex-col min-h-screen items-center p-4">
      {/* Buttons to toggle PDFs */}
      <div className="flex gap-4 md:gap-10 mb-6">
        <button
          onClick={() => handleToggle(PDF1)}
          className="p-2 md:px-4 md:py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          IEC Certificate
        </button>
        <button
          onClick={() => handleToggle(PDF2)}
          className="p-2 md:px-4 md:py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Udyam Registration Certificate
        </button>
      </div>

      {/* Display the selected PDF */}
      {isVisible && (
        <div className="w-full h-[85vh] border rounded-lg shadow-lg">
          <iframe
            src={pdf}
            className="w-full h-full"
            title="PDF Viewer"
            frameBorder="0"
          />
        </div>
      )}
    </div>
  );
};

export default Certificates;
