import { useState } from "react";

import PDF1 from "../../assets/pdf/certificate_of_iec.pdf";
import PDF2 from "../../assets/pdf/print_udyam_registration_certificate.pdf";

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [pdf, setPdf] = useState("");

  const handleToggle = (selectedPdf) => {
    setPdf(selectedPdf);
    setIsVisible(true);
  };

  return (
    <div className="flex flex-col min-h-screen items-center p-4">
      <div className="flex gap-4 md:gap-10 mb-6">
        <button
          onClick={() => handleToggle(PDF1)}
          className="p-2 md:px-4 md:py-2 text-xs md:text-sm text-zinc-700 border border-zinc-500 hover:bg-slate-100 rounded-lg"
        >
          IEC Certificate
        </button>
        <button
          onClick={() => handleToggle(PDF2)}
          className="p-2 md:px-4 md:py-2 text-xs md:text-sm text-zinc-700 border border-zinc-500 hover:bg-slate-100 rounded-lg"
        >
          Udyam Registration Certificate
        </button>
      </div>
      {isVisible && (
        <div className="w-full h-screen border rounded-lg shadow-lg">
          <iframe src={pdf} className="w-full h-full" title="PDF Viewer" />
        </div>
      )}
    </div>
  );
};

export default Certificates;
